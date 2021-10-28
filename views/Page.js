import React from 'react';
import {View, Text} from 'react-native';
import {css} from '../assets/css/Css';

export default function Page(props){

    return(
        <View style = {css.textPage}>
            <Text> O nome da empres e {props.empresa} e seu fucionaro é {props.name} , 

                    comprou o produto {props.produto} na seguinte quantidade {props.quantidade}
            
            </Text>
        </View>
    );

}

/*import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import Page from './views/Page';
import {css} from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './views/Home';
import Login from './views/Login';

export default function App() {

  const [product,setProduct]= useState('bola');
  const [quant,setQuant]= useState(0);

  const props = {
    empresa: 'webdisigner em focos',
    name: 'Thiago',
    produto: product,
    quantidade: quant,
  }

  

  useEffect(()=>{
    if(quant>0){
      Alert.alert('Novo produto foi adicionado ');
    }[quant]

  })

  return (
    <View style={css.container}>
      <Text>{product}</Text>
     
      <Page {...props}/>
      <Button title = 'add Produto' onPress={()=>setQuant(quant+1)} />
    </View>
  );
}*/