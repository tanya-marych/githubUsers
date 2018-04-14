import React, { Component } from 'react';
import { StackNavigator }   from 'react-navigation';

import UserListScreen from '../pages/UserListPage';
import FollowersScreen from '../pages/FollowersPage';

const MainNavigation = StackNavigator({
    UserList: { screen: UserListScreen },
    Followers: { screen: FollowersScreen },
});

export default class extends Component{
    render(){
        return <MainNavigation />;
    }
}