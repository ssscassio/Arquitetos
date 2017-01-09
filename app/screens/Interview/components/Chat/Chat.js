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
    Easing,
    ScrollView
} from 'react-native';

import Question from '../Question'

export default class Chat extends Component {
    constructor(props){
        super(props);
        this.state = {
            actualQuestion: 0,
            actualAsk: 0
        }
    }

    render () {
        return(
            <ScrollView style={this.props.style}>
                <View> 
                    <Question answer={{status: true, response:this.props.questions[0].answers[0].text, color: this.props.questions[0].color}} question={this.props.questions[0]}/> 
                </View>
            </ScrollView>
                
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    }
});