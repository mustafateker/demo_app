import React from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const ConcatScreen = () => {
  const handleSave = () => {
    Alert.alert('Başarılı', 'İletişim bilgileri başarıyla kaydedildi!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>İletişim Bilgileri</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Adres:</Text>
        <TextInput
          style={styles.input}
          placeholder="Adresinizi girin"
          placeholderTextColor="#ccc"
          accessibilityLabel="Adres"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Şehir:</Text>
        <TextInput
          style={styles.input}
          placeholder="Şehrinizi girin"
          placeholderTextColor="#ccc"
          accessibilityLabel="Şehir"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Posta Kodu:</Text>
        <TextInput
          style={styles.input}
          placeholder="Posta kodunuzu girin"
          keyboardType="numeric"
          placeholderTextColor="#ccc"
          accessibilityLabel="Posta Kodu"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Ülke:</Text>
        <TextInput
          style={styles.input}
          placeholder="Ülkenizi girin"
          placeholderTextColor="#ccc"
          accessibilityLabel="Ülke"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Kaydet</Text>
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
    marginVertical: 40, // Bu değeri artırdım, başlık biraz daha aşağıya indi.
    color: '#2c3e50',
  },
  inputContainer: {
    marginBottom: 15,
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


export default ConcatScreen;
