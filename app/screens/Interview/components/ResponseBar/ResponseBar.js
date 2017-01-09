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
    constructor(){
        super();
        this.state = {
            selected :0,
        }
    }

    _changeAnswer(id){
        this.setState({
            selected: id
        })
    }

    renderAnswers(answers, color){
        return answers.map(function(answer){    
            return <Message style={{width: 300}}  handlerChangeAnswer={() => this._changeAnswer} key={answer.id} id={answer.id} fontColor="#000" withButton={true} buttonFontColor={color} buttonText="ESCOLHER RESPOSTA" backgroundColor='#fff' noRadius="TopRight" text={answer.text}/>
        })
    }

    render () {
        return(
            <View style={[this.props.style,styles.responseBar,{backgroundColor: this.props.color}]}>
                <View  style={styles.categoryBox}>
                    <Text style={styles.category}>{this.props.categoryName} + {this.state.selected}</Text>
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