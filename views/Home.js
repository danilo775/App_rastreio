import React from "react";
import { Text,View,TouchableOpacity , Image } from "react-native";
import { css } from "../assets/css/Css";


export default function Home({navigation}){

    return(
        <View style={css.container2}>
            <TouchableOpacity style={css.button__home} onPress={() => navigation.navigate('Login')}>
                <Image style={css.imgBt} source={require('../assets/img/botaoLogin.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style={css.button__home} onPress={() => navigation.navigate('Rastreio')}>
                <Image style={css.imgBt} source={require('../assets/img/botaoRastreio.png')}/>
            </TouchableOpacity>
        </View>
    );

} ;