import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

const ForgetPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = () => {
    if (!email) {
      Alert.alert('Hata', 'Lütfen e-posta adresinizi giriniz.');
      return;
    }
    // E-posta sıfırlama isteği burada yapılır (örneğin, API çağrısı).
    Alert.alert(
      'Başarılı',
      'Parola sıfırlama talebiniz gönderildi. Lütfen e-posta kutunuzu kontrol edin.'
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Parola Yenile</Text>
      <Text style={styles.description}>
        Lütfen kayıtlı e-posta adresinizi girin. Parolanızı sıfırlamak için bir bağlantı gönderilecektir.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="E-posta adresinizi girin"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
        <Text style={styles.buttonText}>Gönder</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Geri</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#6FAE45',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 15,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#6FAE45',
    fontSize: 16,
  },
});

export default ForgetPasswordScreen;
