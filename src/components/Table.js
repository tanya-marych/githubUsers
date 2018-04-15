import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';

import Column from './Column';

import Styles from './TableStyles';

export default class extends Component{
    keyExtractor = (item) => item.id+''

    renderHeader = () => {
        return (
            <View style={[Styles.container, Styles.headerContainer]}>
                <Column style={Styles.headerAvatarContainer}>
                    <Text style={Styles.text}>Avatar</Text>
                </Column>
                <Column style={Styles.headerInfoContainer}>
                    <Text style={Styles.text}>Info</Text>
                </Column>
            </View>
        );
    }

    renderItem = ({item}) => {
        const { onClick=() => {} } = this.props;
        const { login, html_url:url, avatar_url: avatar } = item;

        return (
            <TouchableOpacity onPress={() => onClick(item)}>
                <View style={[Styles.container, Styles.rowContainer]}>
                    <Column style={Styles.imgContainer}>
                        <Image
                            style={Styles.img}
                            source={{uri: avatar}}
                        />
                    </Column>
                    <Column style={Styles.infoContainer}>
                        <Text style={Styles.text}>{login}</Text>
                        <Text style={Styles.link}>{url}</Text>
                    </Column>
                </View>
            </TouchableOpacity>
        );
    }

    loadContent = () => {
        const { loadContent = () => {} } = this.props;
        
        loadContent();
    }

    render() {
        const { data } = this.props;

        return (
            <View style={{flex: 1}}>
                <FlatList 
                    data={data}
                    renderItem={this.renderItem}
                    keyExtractor={this.keyExtractor}
                    onEndReached={this.loadContent}
                    onEndReachedThreshold='0.01'
                    ListHeaderComponent={this.renderHeader}
                />
            </View>
        );
    }
}