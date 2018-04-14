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
        users: null
    }

    async componentDidMount(){
        const users = await this.getUsers();
        this.setState({isLoading: false, users});
    }
    
    getUsers = async () => {
        const users = await fetch('https://api.github.com/users');
        return await users.json();
    }

    handleClick = (user) => {
        const { navigate } = this.props.navigation;

        navigate('Followers', {user});
    }

    render(){
        const { isLoading, users } = this.state;

        return (
            <View style={{flex:1}}>
                {isLoading
                    ? <ActivityIndicator />
                    : (
                        <View style={{flex:1, padding: 5}}>
                            <Table data={users} onClick={this.handleClick}/>
                        </View>
                    )
                }
            </View>
        );
    }
}