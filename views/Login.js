import React from "react";
import {KeyboardAvoidingView, Text, View, Image, TextInput, TouchableOpacity,Platform } from "react-native";
import { css } from "../assets/css/Css";

export default function Home(){

    return(
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style ={css.container, css.darkbg}>
            <View>
                <Image  source={require('../assets/img/logo.png')}   />
           </View>

           <View style={css.login__logomarca}>

           
            </View>    

           <View style={css.login__form}>
                <TextInput placeholder='Usuario:' style={css.login__input} />
                <TextInput style={css.login__input} placeholder='Senha:' secureTextEntry={true} />
                <TouchableOpacity style={css.login__button} onPress={()=>setDisplay('flex')}>
                    <Text style={css.login__buttonText}>Entrar</Text>
                </TouchableOpacity>
           </View>
        </KeyboardAvoidingView>
        
    );

} ;
    /* <Text style={css.login__msg}>Usuário e senha inválidos</Text>?*/