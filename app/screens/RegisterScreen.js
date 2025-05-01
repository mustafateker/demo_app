import React, { useState } from 'react';
import { ImageBackground, Image, View, StyleSheet, TouchableOpacity, TextInput, Text, Alert, ScrollView } from 'react-native';
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
        if (password !== confirmPassword) {
            Alert.alert("Hata", "Şifreler uyuşmuyor!");
            return;
        }

        if (!isTermsAccepted) {
            Alert.alert("Hata", "Kullanıcı şartlarını kabul etmelisiniz!");
            return;
        }

        Alert.alert("Başarılı", "Kayıt başarılı!");
        navigation.navigate('Welcome');
    };

    return (
        <ImageBackground style={styles.background} source={require('../assets/app_background_fon.png')}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../assets/sirius_farm_organic_tarim_text.png')} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Mail adresiniz" 
                        placeholderTextColor="#888" 
                        value={email} 
                        onChangeText={setEmail} 
                    />
                    <View style={styles.inputRow}>
                        <TextInput 
                            style={[styles.inputRowText, { flex: 1, marginRight: 5 }]} 
                            placeholder="İsim" 
                            placeholderTextColor="#888" 
                            value={firstName}
                            onChangeText={setFirstName}
                        />
                        <TextInput 
                            style={[styles.inputRowText, { flex: 1, marginLeft: 5 }]} 
                            placeholder="Soyisim" 
                            placeholderTextColor="#888" 
                            value={lastName} 
                            onChangeText={setLastName} 
                        />
                    </View>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Kullanıcı Adı" 
                        placeholderTextColor="#888" 
                        value={username} 
                        onChangeText={setUsername} 
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Şifre" 
                        placeholderTextColor="#888" 
                        secureTextEntry 
                        value={password} 
                        onChangeText={setPassword} 
                    />
                    <TextInput 
                        style={styles.input} 
                        placeholder="Şifre Tekrar" 
                        placeholderTextColor="#888" 
                        secureTextEntry 
                        value={confirmPassword} 
                        onChangeText={setConfirmPassword} 
                    />
                </View>

                <View style={styles.checkboxContainer}>
                    <View style={styles.checkboxRow}>
                        <CheckBox isChecked={isTermsAccepted} onClick={() => setIsTermsAccepted(!isTermsAccepted)} />
                        <Text style={styles.checkboxText}>Kullanıcı şartlarını kabul ediyorum</Text>
                    </View>
                    <View style={styles.checkboxRow}>
                        <CheckBox isChecked={isKVKKAccepted} onClick={() => setIsKVKKAccepted(!isKVKKAccepted)} />
                        <Text style={styles.checkboxText}>KVKK Açık Rıza Metnini onaylıyorum</Text>
                    </View>
                    <View style={styles.checkboxRow}>
                        <CheckBox isChecked={isNewsletterSubscribed} onClick={() => setIsNewsletterSubscribed(!isNewsletterSubscribed)} />
                        <Text style={styles.checkboxText}>Elektronik posta ve ileti almak istiyorum</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.registerButton} onPress={handlePress}>
                    <Image style={styles.image} source={require('../assets/register_button_design.png')} />
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    scrollContainer: {
        alignItems: "center",
        paddingVertical: 30,
    },
    logoContainer: {
        marginVertical: 60,
        marginBottom: 10,
    },
    logo: {
        width: 300,
        height: 180,
        resizeMode: 'contain',
    },
    inputContainer: {
        width: '90%',
        marginBottom: 5,
    },
    input: {
        width: '100%',
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    inputRowText :{
        width: '50%',
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
    },
    inputRow: {
        flex : 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        
        
    },
        
    checkboxContainer: {
        width: '90%',
        marginBottom: 2,
    },
    checkboxRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    checkboxText: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 16,
    },
    registerButton: {
        width: '80%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
});
 
export default RegisterScreen;
