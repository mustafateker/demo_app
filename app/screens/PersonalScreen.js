import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native';

const PersonalScreen = ({ navigation }) => {
  const [isEditable, setIsEditable] = useState(false);
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
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <ImageBackground source={require('../assets/app_head_bar.png')} style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}> 
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Kişisel Bilgiler</Text>
        <Icon name="user" size={24} color="#fff" />
      </ImageBackground>
      
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.formContainer}>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
    justifyContent: 'center',
    paddingHorizontal: 20,
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