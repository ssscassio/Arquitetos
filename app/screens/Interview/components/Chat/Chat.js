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
var RCTUIManager = require('NativeModules').UIManager;

import Question from '../Question'

export default class Chat extends Component {
    constructor(props){
        super(props);
    }

    renderQuestion =(questions, responses)=>{
        return questions.map((question)=>{
            status = responses[question.id] != null;
            if(status){
                return(
                    question.id <= (this.props.actualQuestion+1)?
                    <Question
                        key={question.id}
                        handlerChooseAgain={(idQuestion)=>{this.props.handlerChooseAgain(idQuestion)}}
                        answer={{id:question.answers[responses[question.id]-1].id,status: status, response:question.answers[responses[question.id]-1].text, color: question.color}} 
                        question={question}/>: null);
            }else {
                return(
                    question.id <= (this.props.actualQuestion+1)?
                    <Question
                        key={question.id}
                        answer={{status: status}}
                        question={question}/>: null);
            }
            
            
        });     
    }


    render () {
        return(
            <View style={this.props.style}>
                <ScrollView ref = {component=>{this._scrollView=component;}} >
                    <View> 
                        {this.renderQuestion(this.props.questions, this.props.responses)}
                    </View>
                </ScrollView>
            </View>
                
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    }
});
