import React, { useState } from 'react';
import { ImageBackground, Image, View, StyleSheet, TouchableOpacity, TextInput, Text, Alert } from 'react-native';
import CheckBox from 'react-native-check-box';
import { useNavigation } from '@react-navigation/native';

function RegisterScreen() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isTermsAccepted, setIsTermsAccepted] = useState(false);
    const [isKVKKAccepted, setIsKVKKAccepted] = useState(false);
    const [isNewsletterSubscribed, setIsNewsletterSubscribed] = useState(false);

    const navigation = useNavigation();

    const handlePress = () => {
        // Şifre eşleşmesi kontrolü
        if (password !== confirmPassword) {
            Alert.alert("Hata", "Şifreler uyuşmuyor!");
            return;
        }

        // Kullanıcı şartlarını kabul kontrolü
        if (!isTermsAccepted) {
            Alert.alert("Hata", "Kullanıcı şartlarını kabul etmelisiniz!");
            return;
        }

        // Eğer tüm kontroller başarılıysa
        Alert.alert("Başarılı", "Kayıt başarılı!");
        navigation.navigate('Welcome'); // WelcomeScreen 'e yönlendirme
    };

    return (
        <ImageBackground style={styles.background} source={require('../assets/app_background_fon.png')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/sirius_farm_organic_tarim_text.png')} />
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Mail adresiniz"
                    placeholderTextColor="#888"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="İsim"
                    placeholderTextColor="#888"
                    value={firstName}
                    onChangeText={text => setFirstName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Soyisim"
                    placeholderTextColor="#888"
                    value={lastName}
                    onChangeText={text => setLastName(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Kullanıcı Adı"
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
                <TextInput
                    style={styles.input}
                    placeholder="Şifre Tekrar"
                    placeholderTextColor="#888"
                    secureTextEntry
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                />
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    isChecked={isTermsAccepted}
                    onClick={() => setIsTermsAccepted(!isTermsAccepted)}
                    rightText="Kullanıcı şartlarını kabul ediyorum"
                    rightTextStyle={{ color: '#fff' }}
                />
                <CheckBox
                    isChecked={isKVKKAccepted}
                    onClick={() => setIsKVKKAccepted(!isKVKKAccepted)}
                    rightText="KVKK Açık Rıza Metnini onaylıyorum"
                    rightTextStyle={{ color: '#fff' }}
                />
                <CheckBox
                    isChecked={isNewsletterSubscribed}
                    onClick={() => setIsNewsletterSubscribed(!isNewsletterSubscribed)}
                    rightText="Elektronik posta ve ileti almak istiyorum"
                    rightTextStyle={{ color: '#fff' }}
                />
            </View>

            <View style={styles.loginButton}>
                <TouchableOpacity
                    style={styles.imageButton}
                    onPress={handlePress}>
                    <Image style={styles.image} source={require('../assets/register_button_design.png')} />
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
    checkboxContainer: {
        width: '90%',
        marginBottom: 20,
        alignItems: 'flex-start',
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

export default RegisterScreen;
