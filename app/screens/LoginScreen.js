import React, { useState } from 'react';
import {
    Alert,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Image,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigation = useNavigation();

  const handlePress = () => {
    Alert.alert("Giriş Başarılı");
    navigation.navigate('Welcome');
  };

  return (
    <ImageBackground
      source={require('../assets/app_background_fon.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require('../assets/sirius_farm_organic_tarim_text.png')}
          style={styles.logo}
        />

        <Text style={styles.loginText}>GİRİŞ</Text>

        <TextInput
          style={styles.input}
          placeholder="Kullanıcı Adı, eposta ya da telefon numarası"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Parola"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.rememberMeContainer}>
          <CheckBox
            isChecked={rememberMe}
            onClick={() => setRememberMe(!rememberMe)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Beni Hatırla</Text>
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handlePress}>
          <Text style={styles.loginButtonText}>GİRİŞ YAP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotPasswordButton}
        onPress={() => navigation.navigate('Password')}
        >
          <Text style={styles.forgotPassword}>Parolamı Unuttum</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.createAccountButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.createAccountText}>HESAP OLUŞTUR</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 180,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 14,
    color: '#333',
  },
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    marginLeft: 10,
    fontSize: 14,
    color: '#FFF',
  },
  forgotPasswordButton: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  forgotPassword: {
    color: '#FFF',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#2E7D32',
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccountButton: {
    backgroundColor: '#FFF',
    width: '100%',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  createAccountText: {
    color: '#2E7D32',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
