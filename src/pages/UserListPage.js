import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import Table from '../components/Table';

import { parseHeaderLink }  from '../utils/parseUtils';
import { setItem, getItem } from '../utils/storageUtils';

import Styles from './UserListStyles';

export default class extends Component{
    state = {
        isLoading: true,
        users: null,
        nextLink: 'https://api.github.com/users?per_page=10'
    }

    async componentDidMount(){
        const res = await getItem('users');
        let users;

        if(!!res){
            users = res;
        } else {
            users = await this.getUsers();
            await setItem('users', users);
        }

        this.setState({isLoading: false, users});
    }
    
    getUsers = async () => {
        try {
            const { nextLink: fetchLink } = this.state;
            const users = await fetch(fetchLink);
            const nextLink = parseHeaderLink(users.headers.map.link[0]);
    
            this.setState({nextLink});
        
            return await users.json();
        } catch(err) {
            console.log(`Loading users error: ${err}`);
            this.setState({error: true});

            return [];
        }
    }

    loadMoreUsers = async () => {
        const { users } = this.state;
        const loadUsers = await this.getUsers();
       
        this.setState({users: [...users, ...loadUsers]});
    }

    showFollowers = (user) => this.props.navigation.navigate('Followers', {user})

    render(){
        const { isLoading, users, error } = this.state;

        return (
            <View style={{flex:1}}>
                {isLoading
                    ? <ActivityIndicator />
                    : (
                        <View style={Styles.container}>
                            <Table
                                data={users}
                                onClick={this.showFollowers}
                                loadContent={this.loadMoreUsers}
                            />
                        </View>)
                }
                {!!error && <Text>Sorry, please try again later.</Text>}
            </View>
        );
    }
}