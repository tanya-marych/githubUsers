import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import Column from './Column';

import Styles from './TableStyles';

export default class extends Component{

    keyExtractor = (item) => item.login;

    renderItem = ({item}) => {
        const { onClick=() => {} } = this.props;
        const { login, html_url:url, avatar_url: avatar } = item;

        return (
            <TouchableOpacity onPress={() => onClick(item)}>
                <View style={Styles.container}>
                    <Column style={Styles.imgContainer}>
                        <Image
                            style={Styles.img}
                            source={{uri: avatar}}
                        />
                    </Column>
                    <Column style={Styles.infoContainer}>
                        <Text style={Styles.text}>{login}</Text>
                        <Text style={Styles.text}>{url}</Text>
                    </Column>
                </View>
            </TouchableOpacity>
        );
    }

    render(){
        const { data } = this.props;

        return (
            <View style={{flex: 1}}>
                <FlatList 
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                />
            </View>
        );
    }
}