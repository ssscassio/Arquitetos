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
import ResponseBar from './components/ResponseBar';
import Chat from './components/Chat';
import {Actions} from 'react-native-router-flux';
import Router from '../../router';

export default class InterviewScreen extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            answering: 2,
            actualQuestion: 0,
            lastQuestion:0,
            questionResponse: [],
            finish: false,
            result: []
        }

        questions = [{
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
                    text: "Olá, Bruno aqui, blz? Quero saber uma coisa:Olá, Bruno aqui, blz? Quero saber uma coisa:Olá, Bruno aqui, blz? Quero saber uma coisa:Olá, Bruno aqui, blz? Quero saber uma coisa:Olá, Bruno aqui, blz? Quero saber uma coisa:Olá, Bruno aqui, blz? Quero saber uma coisa:Olá, Bruno aqui, blz? Quero saber uma coisa:Olá, Bruno aqui, blz? Quero saber uma coisa:Respostssa 1",
                    points: 5},
                    {id: 2,
                    text: "Resposta 2",
                    points: 3},
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
                    text: "Resposta 11",
                    points: 4},
                    {id: 2,
                    text: "Resposta 12",
                    points: 3},
                ],
                color: '#4B9A97',
                categoryName: 'Vendas'
            }
        ];
    }
    

    render () {
        return(
            <View style={[styles.container]}>
                <Chat 
                    responses={this.state.questionResponse}
                    actualQuestion={this.state.lastQuestion} 
                    questions={questions} 
                    style={{flex:4}}
                    handlerChooseAgain={(idQuestion)=>{this.chooseAgain(idQuestion)}}/>
                {this.state.answering ==2 && this.state.finish == false?
                    <ResponseBar 
                        handlerChooseAnswer={(idQuestion,idResponse )=>{this.chooseAnswer(idQuestion,idResponse)}} 
                        questionId={questions[this.state.actualQuestion].id} 
                        style={{flex:4}} 
                        categoryName={questions[this.state.actualQuestion].categoryName} 
                        answers={questions[this.state.actualQuestion].answers} 
                        color={questions[this.state.actualQuestion].color}/>
                        :null}
                {this.state.finish?
                    <View style={{flex:1}}>
                        <TouchableOpacity onPress={()=>{this.finishInterview()}}>
                            <Text> Finalizar questionario</Text>
                        </TouchableOpacity>
                    
                    </View>: null}
            </View>
        );
    }

    _goToInterviewResponse = (result) => {
        this.props.navigator.push(Router.getRoute('interviewResponse', result));
    }

    finishInterview = ()=>{
        var aux =[];
        for(var i =0; i< questions.length; i++){
            aux.push({
                color: questions[i].color,
                id: questions[i].id,
                categoryName: questions[i].categoryName,
                points: questions[i].answers[this.state.questionResponse[i+1] -1].points
            })
        }
        this.setState({
            result: aux
        });
        console.log({resultInterview: this.state.result});
        this._goToInterviewResponse({resultInterview: this.state.result});
    }

    chooseAgain = (idQuestion) => {
        var aux = this.state.questionResponse;
        aux[idQuestion] = null
        this.setState({
            actualQuestion : idQuestion -1,
            answering: 2,
            finish: false,
            questionResponse: aux
        });
    }

    chooseAnswer =(idQuestion, idResponse) => {
        var aux = this.state.questionResponse;
        aux[idQuestion] = idResponse;
        this.setState({
            questionResponse: aux
        });
        if(idQuestion > this.state.actualQuestion){
            this.setState({
                actualQuestion : idQuestion,
                lastQuestion : idQuestion,
                answering: false
            });
            if(idQuestion< questions.length){
                setTimeout(() =>{
                    this.setState({
                        answering: 1,
                    })
                }, 1000);
                setTimeout(() =>{
                    this.setState({
                        answering: 2,
                    })
                }, 1000);
            }else{
                this.setState({
                    finish :true
                })
            }
        }
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1
    }
});