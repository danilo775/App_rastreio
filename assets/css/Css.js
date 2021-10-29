import { StyleSheet } from "react-native";





const css = StyleSheet.create({
 
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center' ,
    },
    container2: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: 'rgb(255,255,255)',
        alignItems: 'center',
        justifyContent: 'center' ,
      },
      
    textPage:{
        backgroundColor: 'orange',
        padding: 40       
    },

    button__home: {
        marginRight:40,
      
    },

    imgBt:{
        resizeMode:'contain',
        height:200,
        width:150,
        marginTop:20,
     
    },

    darkbg:{
        flex: 2,
        justifyContent: 'center' ,
        alignItems: 'center',
        backgroundColor:"#333"
    },
    login__logomarca:{
        marginBottom: 15
    },
    login__msg:{
        fontWeight:"bold",
        fontSize: 22,
        color:"red",
        marginBottom: 15,
    },
    login__form:{
        width: "80%"
    },
    login__input:{
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 7,
        marginBottom: 15
    },
    login__button:{
        padding: 12,
        backgroundColor: "#F58634",
        alignSelf:"center",
        borderRadius:5
    },
    login__buttonText:{
        fontWeight:"bold",
        fontSize: 22,
        color:"#333"
    }


































    
  });
 export {css}; 
