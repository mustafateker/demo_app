import React, { useState } from 'react';
import { ImageBackground, Image, View, StyleSheet, TouchableOpacity, TextInput, Text } from 'react-native';

function LoginScreen() {
    const [username, setUsername] = useState(""); // Kullanıcı adı için state
    const [password, setPassword] = useState(""); // Şifre için state

    const handlePress = () => {
        console.log("Username:", username);
        console.log("Password:", password);
        // Burada giriş işlemleri yapılabilir
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
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Kullanıcı Adı"
                    placeholderTextColor="#888"
                    value={username}
                    onChangeText={text => setUsername(text)} // Kullanıcı adını state'e kaydet
                />
                <TextInput
                    style={styles.input}
                    placeholder="Şifre"
                    placeholderTextColor="#888"
                    secureTextEntry // Şifreyi gizlemek için
                    value={password}
                    onChangeText={text => setPassword(text)} // Şifreyi state'e kaydet
                />
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
        fontSize: 16,
    },
    imageButton: {
        width: "80%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    loginButton: {
        width: '100%',
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 8,
    },
    baseText: {
        fontFamily: 'Roboto',
    },
    logoContainer: {
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
