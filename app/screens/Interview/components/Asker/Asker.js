/**
 * App2Sales Arquitetos de Sucesso Mobile
 * https://gitlab.com/app2sales
 * @Cássio Santos
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Animated,
    Easing
} from 'react-native';

export default class Asker extends Component {
    constructor(props){
        super(props);
    }

    render () {
        return(
            <View style={[styles.container]}>
                <Image style={styles.askerimage} source={{uri: this.props.person.img}}/>
                <Text style={styles.name}> {this.props.person.name}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        justifyContent: 'flex-start',
        marginTop: 20,
        padding: 15,
        alignItems: 'center',
        height: 80
    },
    askerimage :{
        borderRadius:25, 
        width: 50, 
        height: 50
    },
    name: {
        fontFamily: 'Thonburi',
        marginLeft: 10
    }
});