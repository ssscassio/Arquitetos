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

export default class Bar extends Component {
    
    constructor(props){
        super(props);
    }
    

    render () {
        return(
            <View style={[styles.container]}>
                <View style={{flex:1}}>
                    <Text style={styles.category}>{(this.props.result.categoryName).toUpperCase()}</Text>
                </View>
                <View style={styles.progressBar}>
                    <View style={{flex:this.props.result.points,flexDirection:'row', alignItems:'center'}}>
                        <View style={{flex:1,height:10,backgroundColor: this.props.result.color}}>
                        </View>
                        <View style={{right:5,height: 20, width: 20,borderRadius: 10,backgroundColor: this.props.result.color,alignItems: 'center',justifyContent:'center'}}>
                            <Text style={{fontWeight: 'bold', color:'#fff'}}>
                                {this.props.result.points}
                            </Text>
                        </View>
                    </View>
                    {this.props.result.points!= 5?
                        <View style={{
                            backgroundColor: '#fff',
                            flex:5 - this.props.result.points}}>
                            <View style={{alignSelf:'flex-end',right:5,height: 20, width: 20,borderRadius: 10,backgroundColor: this.props.result.color,alignItems: 'center',justifyContent:'center'}}>
                                <Text style={{color:'#fff'}}>
                                    <Text style={{fontWeight: 'bold'}}>5</Text>
                                </Text>
                            </View>
                        </View>:null}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: 1
    },
    category: {
        fontWeight:'bold'
    },
    progressBar: {
        flex:4,
        flexDirection:'row',
        alignItems:'center'
    },
});