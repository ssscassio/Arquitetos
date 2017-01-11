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
import Message from '../Message';
import Asker from '../Asker';

export default class Question extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected : false,
            showing:0,
        }
    }

    _displayPhrase = (phrases)=>{
        return(
            phrases.map(function(text, i){
                    return  <Message style={{marginBottom: 5}} delay={i*1000} key={i} fontColor="#000" backgroundColor='#E8E8E8' noRadius="TopLeft" text={text}/>
            })
        );
    }

    _displayResponse = ()=>{
            return this.props.answer.status?(<View><Message 
                fadeTime={100} 
                style={{marginBottom: 20}} fontColor="#fff" 
                backgroundColor={this.props.answer.color}
                noRadius="TopRight" 
                text={this.props.answer.response}/>
                    <Text onPress={()=>{this.props.handlerChooseAgain(this.props.question.id)}}style={styles.mudarResposta}>MUDAR RESPOSTA</Text>
                </View>): null;
    }
    
    
    render () {
        return(
                <View style={[styles.container]}> 
                    <Asker person={this.props.question.person} /> 
                    {this._displayPhrase(this.props.question.phrases)}       
                    {this._displayResponse()}         
                </View>
                
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    mudarResposta: {
        textAlign: "right",
        color: "#aaa",
        paddingRight: 20,
    }
});