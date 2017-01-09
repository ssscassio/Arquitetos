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
} from 'react-native';
import Message from '../Message';
import Asker from '../Asker';

export default class Question extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected : false
        }
    }

    _displayPhrase = function (phrases){
        return(
            phrases.map(function(text, i){
                
               return  <Message style={{marginBottom: 5}}key={i} fontColor="#000" backgroundColor='#E8E8E8' noRadius="TopLeft" text={text}/>
            })
        );
    }

    _handler
    render () {
        return(
                <View style={[styles.container]}> 
                    <Asker person={this.props.question.person} /> 
                    {this._displayPhrase(this.props.question.phrases)}       
                    {this.props.answer.status?<Message style={{marginBottom: 20}} fontColor="#fff" backgroundColor={this.props.answer.color} noRadius="TopRight" text={this.props.answer.response}/>: null}         
                </View>
                
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    }
});