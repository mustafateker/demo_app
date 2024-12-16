import React, { useState } from 'react';
import {
    Alert,
    handlePress,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigation = useNavigation(); // Navigasyon objesi

  const handlePress = () => {
    Alert.alert("Giriş Başarılı");
    navigation.navigate('MainMenu');
    
};
  return (
    <ImageBackground
      source={require('../assets/app_background_fon.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>SIRIUS</Text>
        <Text style={styles.subtitle}>Dikey Tarım</Text>

        <Text style={styles.loginText}>GİRİŞ</Text>

        <TextInput
          style={styles.input}
          placeholder="Kullanıcı Adı, eposta ya da telefon numarası"
          placeholderTextColor="#888"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Parola"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <View style={styles.checkboxContainer}>
          <CheckBox
            value={rememberMe}
            onValueChange={setRememberMe}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Beni Hatırla</Text>
        </View>

        {/* Giriş Yap Butonu */}
        <TouchableOpacity style={styles.loginButton} onPress={handlePress}>
          <Text style={styles.loginButtonText}>GİRİŞ YAP</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Parolamı Unuttum</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountText}>HESAP OLUŞTUR</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: 
  { flex: 1,
     resizeMode: 'cover', 
     justifyContent: 'center' },

  container: { paddingHorizontal: 20, alignItems: 'center' },
  title: { fontSize: 48, fontWeight: 'bold', color: '#FFF' },
  subtitle: { fontSize: 24, fontStyle: 'italic', color: '#FFF', marginBottom: 40 },
  loginText: { fontSize: 24, fontWeight: 'bold', color: '#FFF', marginBottom: 10 },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 14,
    color: '#333',
  },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  checkbox: { alignSelf: 'center' },
  label: { marginLeft: 10, fontSize: 14, color: '#FFF' },
  loginButton: {
    backgroundColor: '#2E7D32',
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: { color: '#FFF', fontSize: 16, fontWeight: 'bold' },
  forgotPassword: { color: '#FFF', textDecorationLine: 'underline', marginBottom: 30 },
  createAccountButton: {
    backgroundColor: '#FFF',
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  createAccountText: { color: '#2E7D32', fontSize: 16, fontWeight: 'bold' },
});

export default LoginScreen;
