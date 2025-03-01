import React from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native';

const ChangePasswordScreen = ({ navigation }) => {
  const handleSave = () => {
    Alert.alert('Başarılı', 'Güvenlik bilgileri başarıyla güncellendi!');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <ImageBackground source={require('../assets/app_head_bar.png')} style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}> 
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Şifre Değiştir</Text>
        <Icon name="lock" size={24} color="#fff" />
      </ImageBackground>
      
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.formContainer}>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50, // Safe area için
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  scrollViewContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
