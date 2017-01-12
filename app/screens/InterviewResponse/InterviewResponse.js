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
    TouchableOpacity
} from 'react-native';

import Router from '../../router';

import Asker from './components/Asker'
import Message from './components/Message'
import Bar from './components/Bar'

export default class InterviewResponseScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            resultInterview:
            [ { color: '#0D5763',
                id: 1,
                categoryName: 'A Base',
                points: 5 },
              { color: '#4B9A97',
                id: 2, 
                categoryName: 'Precificação', 
                points: 3 },
                { color: '#0D5763',
                id: 1,
                categoryName: 'Vendas',
                points: 5 },
              { color: '#4B9A97',
                id: 2, 
                categoryName: 'Empreendedorismo', 
                points: 3 },
                { color: '#0D5763',
                id: 1,
                categoryName: 'Marketing',
                points: 5 } ],
            person: {
                name: "Bruno Capanema",
                img: "https://www.investeducar.com.br/wp-content/uploads/2013/07/curso-de-departamento-pessoal-rotinas-diarias-300x300.jpg"
            },
            phrase: "Frase de finalização de entrevista"
        }
    }

    renderBars = (resultInterview) => {
        return resultInterview.map((result,index)=>{
            return <Bar key={index} result={result}/>
        });
    }

    render () {
        return(
                <View style={styles.container}>
                    <View style={styles.asker}>
                        <Asker person={this.state.person} />
                        <Message style={styles.message} delay={1000}  fontColor="#000" backgroundColor='#E8E8E8' noRadius="TopLeft" text={this.state.phrase}/>                 
                    </View>
                    <View style={styles.bars}>
                        {this.renderBars(this.state.resultInterview)}
                    </View>
                    <View style={styles.buttonField}>
                        <TouchableOpacity style={{margin: 30}}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Acesse o conteúdo grátis </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    asker: {
        flex: 3
    },
    message: {
        marginBottom: 5
    },
    bars: {
        margin: 20,
        flexDirection:'column',
        flex: 5
    },
    buttonField: {
        flex:2,
        flexDirection: 'column'
    },
    button: {
        padding:17,
        alignItems: 'center',
        backgroundColor: '#0d5763'
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    }

});