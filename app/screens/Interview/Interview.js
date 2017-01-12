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

        questions = [
	{
		id: 1,
		person: {
			name: "Bruno Capanema",
			img: "https://www.investeducar.com.br/wp-content/uploads/2013/07/curso-de-departamento-pessoal-rotinas-diarias-300x300.jpg"
		},
		phrases: [
			"Oi, Bruno Capanema, tudo bem?",
			"Quais são as estratégias que você usa para vender os seus projetos ou serviços?",
			"Selecione abaixo a resposta que mais se adequa ao seu cenário ;)"

		],
		answers: [
			{
				id: 1,
				text: "Faço cada trabalho que aparece sem muito planejamento. Não faço ideia da minha capacidade como gestor.",
				points: 1
			},
			{
				id: 2,
				text: "Já comecei a perceber a necessidade de ter um nicho de atuação, mas não sei por onde começar.",
				points: 2
			},
			{
				id: 3,
				text: "Já conheço o meu nicho, mas ainda não sei se escolhi corretamente. Já leio e pesquiso sobre empreendedorismo mas ainda não consigo aplicar à minha vida.",
				points: 3
			},
			{
				id: 4,
				text: "Já identifiquei o meu nicho e trabalho nele. Estou desenvolvendo as minhas aptidões como gestor do meu negócio.",
				points: 4
			},
			{
				id: 5,
				text: "Já domino o meu negócio e conheço o meu potencial empreendedor, bem como meus parceiros preferenciais. Estou na estrada certa para atingir os meus objetivos.",
				points: 5
			},
		],
		color: '#83B947',
		categoryName: 'Empreendedorismo'
	},
	{
		id: 2,
		person: {
			name: "Dani Magero",
			img: "https://www.investeducar.com.br/wp-content/uploads/2013/07/curso-de-departamento-pessoal-rotinas-diarias-300x300.jpg"
		},
		phrases: [
			"Olá, eu sou a Dani Magero",
			"Qual o seu nível de conhecimento do seu negócio e da sua capacidade como gestor?"
		],
		answers: [
			{
				id: 1,
				text: "Nunca fiz planejamento, meu escritório cresce de acordo com os trabalhos que entram.",
				points: 1
			},
			{
				id: 2,
				text: "Eu já tenho missão, visão e valores do meu negócio e guio minhas decisões baseada nelas.",
				points: 2
			},
			{
				id: 3,
				text: "Já tenho meu nicho de atuação, mas não sei como atender exclusivamente a esses clientes.",
				points: 3
			},
			{
				id: 4,
				text: "Já tenho planejamento, nicho, metas de médio e longo prazo e já desenvolvi uma estrutura de equipe e gestão.",
				points: 4
			},
			{
				id: 5,
				text: "Já trabalho exclusivamente no meu nicho, tenho os meus processos todos mapeados e sei onde quero estar daqui a 2, 5 e 10 anos.",
				points: 5
			},
		],
		color: '#0D5763',
		categoryName: 'A base'
	},
	{
		id: 3,
		person: {
			name: "Bruno Capanema",
			img: "https://www.investeducar.com.br/wp-content/uploads/2013/07/curso-de-departamento-pessoal-rotinas-diarias-300x300.jpg"
		},
		phrases: [
			"Oi, Bruno Capanema, tudo bem?",
			"Como você calcula o valor do seu projeto ou serviço?",
		],
		answers: [
			{
				id: 1,
				text: "Depende de quanto preciso no mês. Se preciso de R$ 2.000,00, fecho um projeto por esse valor",
				points: 1
			},
			{
				id: 2,
				text: "Eu calculo por m²",
				points: 2
			},
			{
				id: 3,
				text: "Pergunto aos meus colegas quanto eles cobrariam por um projeto daquele porte.",
				points: 3
			},
			{
				id: 4,
				text: "Já conheço os custos do escritório e tento me basear neles pra cobrar. Mas ainda fico um pouco perdido.",
				points: 4
			},
			{
				id: 5,
				text: "Já tenho o meu próprio salário, capital de giro, lucro definido e cobro por uma composição de custos x tempo pra produzir o trabalho",
				points: 5
			},
		],
		color: '#2A7A77',
		categoryName: 'Precificação'
	},
	{
		id: 4,
		person: {
			name: "Dani Magero",
			img: "https://www.investeducar.com.br/wp-content/uploads/2013/07/curso-de-departamento-pessoal-rotinas-diarias-300x300.jpg"
		},
		phrases: [
			"Olá, eu sou a Dani Magero",
			"Quais são as estratégias que você usa pra vender os seus projetos ou serviços?"
		],
		answers: [
			{
				id: 1,
				text: "Envio as minhas propostas por e-mail e fico torcendo pra serem aprovadas.",
				points: 1
			},
			{
				id: 2,
				text: "Fico inseguro na hora de apresentar o preço e dou todos os descontos necessários pra fechar o contrato.",
				points: 2
			},
			{
				id: 3,
				text: "Minha proposta já é o contrato e copiei de um amigo. Nem sempre consigo fazer o meu cliente entender o quanto vale o meu trabalho. Eles sempre acham caro.",
				points: 3
			},
			{
				id: 4,
				text: "Já falo dos meus diferenciais como profissional, mas não tenho segurança na hora de negociar o preço. Fico muito nervoso e acabo dando alguns descontos.",
				points: 4
			},
			{
				id: 5,
				text: "Mostro ao meu cliente o valor e os diferenciais que o meu trabalho tem, conheço de antemão todos as objeções e gatilhos mentais e respostas necessárias no processo. Meu cliente entende que eu sou a melhor solução pra ele. Dificilmente dou descontos ou perco uma negociação.",
				points: 5
			},
		],
		color: '#4B9A97',
		categoryName: 'Vendas'
	},
		{
		id: 5,
		person: {
			name: "Bruno Capanema",
			img: "https://www.investeducar.com.br/wp-content/uploads/2013/07/curso-de-departamento-pessoal-rotinas-diarias-300x300.jpg"
		},
		phrases: [
			"Oi, Bruno Capanema, tudo bem?",
			"Quais as estratégias de marketing você utiliza?",
		],
		answers: [
			{
				id: 1,
				text: "Não utilizo nenhum marketing, não sei nem por onde começar a minha divulgação.",
				points: 1
			},
			{
				id: 2,
				text: "Uso as redes sociais, mas elas estão cheias de colegas que também são arquitetos e designers.",
				points: 2
			},
			{
				id: 3,
				text: "Tenho site e uso as redes sociais, mas não tenho constância nem certeza sobre o conteúdo que devo divulgar.",
				points: 3
			},
			{
				id: 4,
				text: "Já faço posts no blog e nas redes sociais, com conteúdo direcionado ao meu público, mas ainda não tive os resultados que eu esperava.",
				points: 4
			},
			{
				id: 5,
				text: "Utilizo marketing digital, de onde capto a maior parte dos meus cliente, faço posts pagos e trabalho com marketing off-line, com assessoria de imprensa e mostras de arquitetura.",
				points: 5
			},
		],
		color: '#5E9221',
		categoryName: 'Marketing'
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