import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';


import Table from '../components/Table';

export default class extends Component{
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        
        return {
            title: 'Github users list',
            headerTitleStyle :{
                textAlign: 'center',
                width: '100%',
                marginHorizontal: 0
            }
        };
    };

    state = {
        isLoading: true,
        users: null,
        next: 'https://api.github.com/users?per_page=10'
    }

    async componentDidMount(){
        const users = await this.getUsers();
        this.setState({isLoading: false, users});
    }
    
    getUsers = async () => {
        const { next } = this.state;
        const users = await fetch(next);
    
        try{
            const link = users.headers.map.link[0]
                .split(',')
                .find(item => item.includes('next'));
            const next = link.split(';')[0].replace(/<|>/g,'');
            this.setState({next});

        } catch(err){
            console.log(`Error: ${err}`);
            this.setState({next: null})

            return [];
        }
        
        return await users.json();
    }

    handleClick = (user) => {
        const { navigate } = this.props.navigation;

        navigate('Followers', {user});
    }

    loadContent = async () => {
        const { users } = this.state;
        const loadUsers = await this.getUsers();
       
        this.setState({users: [...users, ...loadUsers]});
        console.log('load',this.state.users.length)
    }

    render(){
        const { isLoading, users } = this.state;

        return (
            <View style={{flex:1}}>
                {isLoading
                    ? <ActivityIndicator />
                    : (
                        <View style={{flex:1, padding: 5}}>
                            <Table
                                data={users}
                                onClick={this.handleClick}
                                loadContent={this.loadContent}
                            />
                        </View>
                    )
                }
            </View>
        );
    }
}