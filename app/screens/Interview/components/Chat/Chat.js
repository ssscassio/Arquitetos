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
    }

    renderQuestion =(questions, responses)=>{
        return questions.map((question)=>{
            console.log(responses);

            status = responses[question.id] != null;
            if(status){
                return(
                    question.id <= (this.props.actualQuestion+1)?
                    <Question 
                        answer={{status: status, response:question.answers[responses[question.id]-1].text, color: question.color}} 
                        question={question}/>: null);
            }else {
                return(
                    question.id <= (this.props.actualQuestion+1)?
                    <Question 
                        answer={{status: status}}
                        question={question}/>: null);
            }
            
            
        });     
    }


    render () {
        return(
            <ScrollView style={this.props.style}>
                <View> 
                    {this.renderQuestion(this.props.questions, this.props.responses)}
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
