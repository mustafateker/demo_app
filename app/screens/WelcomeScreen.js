import React from 'react';
import { Image,ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        style = {styles.background}
        source = {require('../assets/app_background_fon.png')}
         >
            <View style = {styles.logoContainer}>
            <Image style ={style.logo}  source = {require('../assets/sirius_farm_organic_tarim_text.png')}/>
             </View>
        
        <View style = {styles.loginButton}></View> 
        <View style = {styles.registerButton}></View>  
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background : {
        flex : 1,
        justifyContent : "flex-end",
        alignItems : "center",
    },
    loginButton:{
        width : '100%',
        height : 70,
        background: "#007e50",
    },
    logo:{
        width : 368,
        height : 226,
    },
    logoContainer : {
        position : "absolute",
        top : 70,
        allignItems : "center",
    },
    registerButton:{
        width : '100%',
        height : 70,
        background: "#007e50",
    }
})

export default WelcomeScreen;