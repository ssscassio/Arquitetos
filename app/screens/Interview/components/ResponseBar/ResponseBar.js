/**
 * App2Sales Arquitetos de Sucesso Mobile
 * https://gitlab.com/app2sales
 * @Cássio Santos
 */

import React, { Component } from 'react';
import {
    ScrollView,
    Easing,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import Message from '../Message';
export default class ResponseBar extends Component {
    constructor(props){
        super(props);
    }

    changeAnswer = (id) => {
        this.props.handlerChooseAnswer(this.props.questionId, id);
    }

    renderAnswers = (answers, color) => {
        return answers.map((answer) =>{    
            return <Message key={answer.id}style={{width: 300}}  handlerChangeAnswer={(id)=>{this.changeAnswer(id)}} key={answer.id} id={answer.id} fontColor="#000" withButton={true} buttonFontColor={color} buttonText="ESCOLHER RESPOSTA" backgroundColor='#fff' noRadius="TopRight" text={answer.text}/>
        })
    }

    render () {
        return(
            <View style={[this.props.style,styles.responseBar,{backgroundColor: this.props.color}]}>
                <View  style={styles.categoryBox}>
                    <Text style={styles.category}>{this.props.categoryName}</Text>
                </View>
                <ScrollView horizontal={true}>
                    {this.renderAnswers(this.props.answers, this.props.color)}  
                </ScrollView>
                <View style={styles.hintContainer}>
                    <Text style={styles.hintText}>DESLIZE PARA VER A MELHOR RESPOSTA</Text>
                </View>
            </View> 
        );
    }
}


const styles = StyleSheet.create({
    hintContainer: {
        alignItems: 'center',        
    },
    hintText:{
        color: '#fff',
        fontWeight: 'bold'
    },
    categoryBox: {
        height: 40
    },
    category: {
        fontSize: 20,
        color: "#fff",
        textAlign: 'center'
    },
    responseBar: {
        paddingTop: 20,
        paddingBottom: 20
    }
});