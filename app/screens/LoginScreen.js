import CheckBox from '@react-native-community/checkbox';
import React, { useState } from 'react';
import { ImageBackground, Image, View, StyleSheet, TouchableOpacity, TextInput, Text } from 'react-native';


function LoginScreen() {
    
    
    const [isSelected, setSelection] = useState(false);
    const [username, setUsername] = useState(""); // Kullanıcı adı için state
    const [password, setPassword] = useState(""); // Şifre için state

    const handlePress = () => {
        console.log("Username:", username);
        console.log("Password:", password);
        
    };

    return (
        <ImageBackground 
            style={styles.background}
            source={require('../assets/app_background_fon.png')}>
            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo} 
                    source={require('../assets/sirius_farm_organic_tarim_text.png')} 
                />
                <Text style = {styles.baseText}>
                    <Text style = {styles.titleText}>
                        GİRİŞ
                    </Text>
                </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Kullanıcı adı, eposta ya da telefon numarası"
                    placeholderTextColor="#888"
                    value={username}
                    onChangeText={text => setUsername(text)} 
                />
                <TextInput
                    style={styles.input}
                    placeholder="Şifre"
                    placeholderTextColor="#888"
                    secureTextEntry 
                    value={password}
                    onChangeText={text => setPassword(text)} 
                />
            </View>

            
                <View style={styles.checkboxContainer}>
                    <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
                    style={styles.checkbox}
                    />
                    <Text style={styles.label}>Do you like React Native?</Text>
                 </View>
                
                

            <View style={styles.loginButton}>
                <TouchableOpacity
                    style={styles.imageButton}
                    onPress={handlePress}>
                    <Image 
                        style={styles.image}
                        source={require('../assets/login_button_design.png')} 
                    />
                </TouchableOpacity>
            </View>
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
    inputContainer: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        marginTop : 8,
        fontSize: 16,
    },
    baseText: {
    fontFamily: 'sans-serif-medium',
    marginBottom : 8,
     },

     titleText: {
    fontSize: 35,
    fontWeight: 'bold',
    color : '#fff'
    },
    imageButton: {
        width: "80%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },

    checkboxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: 'center',
      },
      label: {
        margin: 8,
      },

    loginButton: {
        width: '100%',
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        
    },

    logoContainer: {
        marginVertical :100,
        position: "absolute",
        top: 50,
        alignItems: "center",
    },
    logo: {
        width: 368,
        height: 226,
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "contain",
    },
});

export default LoginScreen;
