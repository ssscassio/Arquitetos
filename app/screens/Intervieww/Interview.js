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
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Images from '../../config/images';
import Settings from '../../config/settings';

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
    



    _renderChat(){
        return(
            <Text> Teste2 </Text>
        )
    }
    componentWillMount(){
        this.setState({
            answering: false
        })
    }
    _chooseAsk(){
        
    }
    _renderResponseBar(a){
        return(
            <View style={styles.responseBarContainer}>
                    <Text>Teste</Text>
            </View> 
        );
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
            <View style={[styles.container]}>
                <View style={[styles.chatContainer]}>
                    <ScrollView> 
                            {this._renderChat()}                    
                    </ScrollView>
                </View>
                {this._renderResponseBar("Teste")}


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        flex:1
    },
    chatContainer: {
        flex:1,
        alignItems: 'center',
        backgroundColor: "#f00"

    },
    responseBarContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#0f0"
    }
});