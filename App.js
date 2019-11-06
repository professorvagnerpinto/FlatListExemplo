/**
 * Vídeo #2:FlatList - Módulo 11 - React Native Intermediário - B7Web
 * Link para a documentação oficial: https://facebook.github.io/react-native/docs/flatlist
 */

import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';

export default class FlatListExemplo extends Component{

  constructor(props){
    super(props);
    this.state = {
      flatData:[
        {key:'1', nome:'Ana', idade:3},
        {key:'2', nome:'Rafa', idade:8},
        {key:'3', nome:'Aline', idade:40},
        {key:'4', nome:'Vagner', idade:40}
      ]
    };
    //this.flatRender = this.flatRender.bind(this);
  }

  flatRender(item){
    return(
        <View style={styles.item}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.idade}>{item.idade} anos</Text>
        </View>
    );
  }

  render(){
    return(
        <View style={styles.body}>
          <Text style={styles.header}>Lista de Pessoas</Text>
          <FlatList style={styles.flatList} data={this.state.flatData} renderItem={({item})=>this.flatRender(item)} />
        </View>
    );
  }

}//fim classe

const styles = StyleSheet.create({
  body:{
    //paddingTop:20, para IOs
    flex:1,
    //backgroundColor:'#222222'
  },
  flatList:{
    //backgroundColor:'#FF0000',
    height:120
  },
  item:{
    padding:5,
    paddingLeft:10,
    paddingTop: 5,
    borderColor:'#0000FF',
    borderBottomWidth:1,
    margin:2
  },
  nome:{
    fontSize:22,
    paddingLeft:3,
    paddingTop:3
  },
  idade:{
    fontSize:14,
    paddingLeft:3
  },
  header:{
    margin:5,
    fontSize:22
  }
});
