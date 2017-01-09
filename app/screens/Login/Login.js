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
    Easing
} from 'react-native';
import Images from '../../config/images';
import Settings from '../../config/settings';
import Router from '../../router';

export default class LoginScreen extends Component {
    constructor(props){
        super(props);
    }

    render () {
        return(
                <View style={styles.container}>
                    <Text onPress={this._goToInterview}>
                      Ir para Entrevista
                    </Text>
                </View>
        );
    }
    _goToInterview = () => {
        this.props.navigator.push(Router.getRoute('interview'));
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});