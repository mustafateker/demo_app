import React from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ChangePasswordScreen = () => {
  const handleSave = () => {
    Alert.alert('Başarılı', 'Güvenlik bilgileri başarıyla güncellendi!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Şifre Değiştir</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mevcut Şifre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Mevcut şifrenizi girin"
          placeholderTextColor="#999"
          secureTextEntry
          accessibilityLabel="Mevcut Şifre"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Yeni Şifre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Yeni şifrenizi girin"
          placeholderTextColor="#999"
          secureTextEntry
          accessibilityLabel="Yeni Şifre"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Yeni Şifre (Tekrar):</Text>
        <TextInput
          style={styles.input}
          placeholder="Yeni şifrenizi tekrar girin"
          placeholderTextColor="#999"
          secureTextEntry
          accessibilityLabel="Yeni Şifre Tekrar"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Güncelle</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f4f4f4',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 40, // Başlık aşağıda görünecek.
    color: '#2c3e50',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#2c3e50',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ChangePasswordScreen;
