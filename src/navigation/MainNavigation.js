import React, { Component } from 'react';
import { StackNavigator }   from 'react-navigation';

import UserListScreen from '../pages/UserListPage';
import FollowersScreen from '../pages/FollowersPage';

const MainNavigation = StackNavigator({
        UserList: {
            screen: UserListScreen,
            navigationOptions: {
                title: 'Github users list'
            }
        },
        Followers: {
            screen: FollowersScreen,
            navigationOptions: ({ navigation }) => ({
                title: `${navigation.state.params.user.login}'s followers`
            }),
        }
    }, {
        headerTitleStyle :{
            textAlign: 'center',
            width: '100%',
            marginHorizontal: 0
        }
    });

export default class extends Component{
    render(){
        return <MainNavigation />;
    }
}