import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import {css} from './assets/css/Css';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import{Home, Login, Rastreio} from './views';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            title: 'DNL Rotas Novas 2',
            headerStyle:{backgroundColor:"#F58634"},
            headerTintColor:'#333',
            headerTitleAlign:'center',
            headerTitleStyle:{fontWeight:'bold'},
          }}
          
          />
          <Stack.Screen name="Login" 
            component={Login} 
            options={{
              title: 'LOGIN',
            headerStyle:{backgroundColor:"#F58634"},
            headerTintColor:'#333',
            headerTitleAlign:'center',
            headerTitleStyle:{fontWeight:'bold'},
             /* headerShown:false,*/
              
            }}
          />
          <Stack.Screen name="Rastreio" component={Rastreio} />
         
        </Stack.Navigator>
    </NavigationContainer>
  );
}


/* <Stack.Screen name="AreaRestrita" component={AreaRestrita} />*/