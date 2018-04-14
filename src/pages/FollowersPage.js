import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import Table from '../components/Table';

export default class extends Component{
    static navigationOptions = ({ navigation }) => {
        const { user } = navigation.state.params;
        
        return {
            title: `${user.login}'s followers`,
            headerTitleStyle :{
                textAlign: 'center',
                // width: '100%',
                marginHorizontal: 0
            }
        }
    };

    state={
        followers: null,
        isLoading: true
    };

    async componentDidMount(){
        const { user } = this.props.navigation.state.params;

        const followers = await this.getFollowers(user);
        this.setState({isLoading: false, followers});
    }
    
    getFollowers = async (user) => {
        const users = await fetch(user.followers_url);
        return await users.json();
    }

    render(){
        const { isLoading, followers } = this.state;
        
        return (
            <View style={{flex:1}}>
                {isLoading
                    ? <ActivityIndicator />
                    : (
                        <View style={{flex:1, padding: 5}}>
                            <Table data={followers}/>
                        </View>
                    )
                }
            </View>
        );
    }
}