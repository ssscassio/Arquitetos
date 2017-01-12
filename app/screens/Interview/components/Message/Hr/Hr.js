/**
 * App2Sales Arquitetos de Sucesso Mobile
 * https://gitlab.com/app2sales
 * @Cássio Santos
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class Hr extends Component {
    constructor(props){
        super(props);
    }
    _checkProps(){
        var style = {}
            if(this.props.height){
                style = [style,{height: this.props.height}];
            }
            if(this.props.color){
                style = [style,{backgroundColor: this.props.color}]
            }
        return style;

    }
    render () {
        return(
             <View style={[styles.line,this._checkProps()]} ></View>
        );
    }
}


const styles = StyleSheet.create({
    line: {
        height: 2,
        backgroundColor: '#aaa'
    }
});