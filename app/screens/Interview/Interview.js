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
import Images from '../../config/images';
import Settings from '../../config/settings';
import ResponseBar from './components/ResponseBar';
import Chat from './components/Chat'

export default class InterviewScreen extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            answering: true,
            actualQuestion: 0,
            questionResponse:{
                one: null,
                two: null,
                three: null,
                four: null,
                five: null
            }
        }
    }
    
    render () {
        var  questions = [{
                id: 1,
                person: {
                    name: "Bruno Capanema",
                    img: "https://www.investeducar.com.br/wp-content/uploads/2013/07/curso-de-departamento-pessoal-rotinas-diarias-300x300.jpg"
                },
                phrases: [
                    "Olá, Bruno aqui, blz? Quero saber uma coisa:",
                    "Como você calcula o valor do seu projeto ou serviço",
                ],
                answers: [
                    {id: 1,
                    text: "Olá, Bruno aqui, blz? Quero saber uma coisa:Olá, Bruno aqui, blz? Quero saber uma coisa:Olá, Bruno aqui, blz? Quero saber uma coisa:Olá, Bruno aqui, blz? Quero saber uma coisa:Olá, Bruno aqui, blz? Quero saber uma coisa:Olá, Bruno aqui, blz? Quero saber uma coisa:Olá, Bruno aqui, blz? Quero saber uma coisa:Olá, Bruno aqui, blz? Quero saber uma coisa:Respostssa 1"},
                    {id: 2,
                    text: "Resposta 2"},
                ],
                color: '#0D5763',
                categoryName: 'Precificação'
            },
            {
                id: 2,
                person: {
                    name: "Dani Magero",
                    img: "https://www.investeducar.com.br/wp-content/uploads/2013/07/curso-de-departamento-pessoal-rotinas-diarias-300x300.jpg"
                },
                phrases: [
                    "Oi, Dani Magero, tudo bem?",
                    "QUais são as estratégias que você usa para vender os seus projetos ou serviços?",
                ],
                answers: [
                    {id: 1,
                    text: "Resposta 11"},
                    {id: 2,
                    text: "Resposta 12"},
                ],
                color: '#4B9A97',
                categoryName: 'Vendas'
            }
        ];

        return(
            <View style={[styles.container,{flex:1}]}>
                <Chat questions={questions} style={{flex:1}}/>
                <ResponseBar style={{flex:1}} categoryName={questions[0].categoryName} answers={questions[0].answers} color={questions[0].color}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center'
    }
});