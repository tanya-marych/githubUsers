import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import Styles from './ColumnStyles';

export default class extends Component{
    render(){
        const { children, style} = this.props;
        
        return (
            <View style={[ Styles.container, style]}>
                {children}
            </View>
        );
    }
}