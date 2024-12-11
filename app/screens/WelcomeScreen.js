import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text,
     Button ,Alert, TouchableOpacity, handlePress, 
     TouchableHighlight} from 'react-native'; 


function WelcomeScreen({navigation}) {
    return (
        <ImageBackground 
        style={styles.background}
        source={require('../assets/app_background_fon.png')}>
            <View style = {styles.logoContainer}>
            <Image 
            style={styles.logo} 
            source={require('../assets/sirius_farm_organic_tarim_text.png')} />
            </View>
            <View style={styles.loginButton}>
            <TouchableOpacity 
            style = {styles.imageButton}
            onPress={()=> navigation.navigate('Login')}>
            <Image
                style = {styles.image}
                source = {require('../assets/login_button_design.png')}
                />
            </TouchableOpacity>
            </View> 
            <View style={styles.loginButton}>
                <TouchableOpacity 
                    style = {styles.imageButton}
                    onPress={() => Alert.alert("Butona Tıklandı")}>
                    <Image
                        style = {styles.image}
                        source = {require('../assets/register_button_design.png')}
                        />
                </TouchableOpacity>
            </View>  
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: '100%',
        height: 70,
        alignContent : "center",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection : "row",
        marginVertical : "8",
        marginHorizontal : "16",
    },
    logo: {
        width: 368,
        height: 226,
    },
    logoContainer: {
        position: "absolute",
        top: 70,
    },

    buttonTexts : {
        color : "white",
        position:"center",

    },
    title: {
        textAlign : "center",
        marginVertical : "8",
    },
    imageButton : {
        flex: 1, // Alanı tamamen kapla
        width: '100%', // Parent genişliğini kapla
        height: '100%', // Parent yüksekliğini kapla
    
    },
    image: {
        marginHorizontal : 8,
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'contain', 
    },
    
});

export default WelcomeScreen;
