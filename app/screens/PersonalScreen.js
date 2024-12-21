import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

const PersonalScreen = () => {
  const [isEditable, setIsEditable] = useState(false); // Düzenlenebilirlik durumu
  const [formData, setFormData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
  });

  const handleSave = () => {
    setIsEditable(false);
    Alert.alert('Başarılı', 'Bilgileriniz başarıyla kaydedildi!');
  };

  const handleEdit = () => {
    setIsEditable(true);
  };

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Kişisel Bilgiler</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Ad:</Text>
        <TextInput
          style={[styles.input, !isEditable && styles.disabledInput]}
          value={formData.firstName}
          onChangeText={(text) => handleChange('firstName', text)}
          editable={isEditable}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Soyad:</Text>
        <TextInput
          style={[styles.input, !isEditable && styles.disabledInput]}
          value={formData.lastName}
          onChangeText={(text) => handleChange('lastName', text)}
          editable={isEditable}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-posta:</Text>
        <TextInput
          style={[styles.input, !isEditable && styles.disabledInput]}
          value={formData.email}
          onChangeText={(text) => handleChange('email', text)}
          editable={isEditable}
          keyboardType="email-address"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Telefon:</Text>
        <TextInput
          style={[styles.input, !isEditable && styles.disabledInput]}
          value={formData.phone}
          onChangeText={(text) => handleChange('phone', text)}
          editable={isEditable}
          keyboardType="phone-pad"
        />
      </View>

      {isEditable ? (
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Kaydet</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleEdit}>
          <Text style={styles.buttonText}>Düzenle</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
  },
  disabledInput: {
    backgroundColor: '#e9ecef',
    color: '#6c757d',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PersonalScreen;
