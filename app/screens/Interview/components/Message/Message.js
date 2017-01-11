/**
 * App2Sales Arquitetos de Sucesso Mobile
 * https://gitlab.com/app2sales
 * @Cássio Santos
 */

import React, { Component } from 'react';
import {
    Animated,
    Easing,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import Hr from '../Hr';
export default class Message extends Component {
    constructor(props){
        super(props);
        this.state = {
            fadeAnim: new Animated.Value(0),
            selected:0
        }
    }

    componentDidMount(){
        fade = 100;
        if(this.props.fadeTime){
            fade = this.props.fadeTime
        }
        setTimeout(()=>{
            Animated.timing(          
            this.state.fadeAnim,    
            {toValue: 1,
            delay:fade} 
        ).start(); 
        }, this.props.delay);
    }

    _selectNoBorderRadiusStyle = function(value){
        switch( value) {
            case 'BottomLeft':
                return {
                    borderBottomLeftRadius: 0, 
                    borderBottomRightRadius: 15,
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    marginLeft: 13,
                    marginRight: 35,
                };
            break;
            case 'BottomRight':
                return {
                    borderBottomLeftRadius: 15, 
                    borderBottomRightRadius: 0,
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    marginLeft: 35,
                    marginRight: 13,
                };
            break;
            case 'TopRight':
                            return {
                    borderBottomLeftRadius: 15, 
                    borderBottomRightRadius: 15,
                    borderTopRightRadius: 0,
                    borderTopLeftRadius: 15,
                    marginLeft: 35,
                    marginRight: 13,
                };
            break;
            case 'TopLeft':
                return {
                    borderBottomLeftRadius: 15, 
                    borderBottomRightRadius: 15,
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 0,
                    marginLeft: 13,
                    marginRight: 35,
                };
            break;
            default:
                return {
                    borderBottomLeftRadius: 15, 
                    borderBottomRightRadius: 15,
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 0,
                    marginLeft: 13,
                    marginRight: 13,
                };
            break;
        }

    }

    renderButton(){
        if(this.props.withButton){
            return  <View>
                        <Hr />
                        <View style={styles.button}> 
                             <TouchableOpacity onPress={()=>{this.props.handlerChangeAnswer(this.props.id)}}>
                                <Text style={[{color: this.props.buttonFontColor}]}>{this.props.buttonText}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
        }
    }
    render () {
        return(
                <Animated.View style={[this.props.style,styles.messageContainer,{opacity: this.state.fadeAnim,backgroundColor: this.props.backgroundColor},this._selectNoBorderRadiusStyle(this.props.noRadius)]} >
                    <View style={[this.props.style,styles.message]}>
                        <Text style={[{color: this.props.fontColor}]}>
                            {this.props.text}
                        </Text>
                    </View>
                    {this.renderButton()}
                </Animated.View>
        );
    }
}


const styles = StyleSheet.create({
    messageContainer: {
        flex: 0
    },
    message: {
        padding: 15,
        marginBottom: 5
    },
    button: {
        flexDirection: "column",
        paddingRight: 15,
        padding: 7,
        alignItems: 'flex-end'
    },
    line: {
        height: 2,
        backgroundColor: '#efefef'
    }
});