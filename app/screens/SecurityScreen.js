import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Switch, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SecurityScreen = ({ navigation }) => {
  const [emailVerificationEnabled, setEmailVerificationEnabled] = React.useState(false);
  const [cameraPermission, setCameraPermission] = React.useState(false);
  const [microphonePermission, setMicrophonePermission] = React.useState(false);

  const handleEmailRecovery = () => {
    Alert.alert('Hesap Kurtarma', 'E-posta ile hesap kurtarma talebi gönderildi.');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <ImageBackground source={require('../assets/app_head_bar.png')} style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}> 
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Güvenlik Ayarları</Text>
        <Icon name="shield" size={24} color="#fff" />
      </ImageBackground>

      <View style={styles.container}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Doğrulama</Text>
          <View style={styles.optionContainer}>
            <Text style={styles.optionLabel}>E-posta Doğrulama</Text>
            <Switch
              value={emailVerificationEnabled}
              onValueChange={() => setEmailVerificationEnabled(!emailVerificationEnabled)}
            />
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Cihaz İzinleri</Text>
          <View style={styles.optionContainer}>
            <Text style={styles.optionLabel}>Kamera İzni</Text>
            <Switch
              value={cameraPermission}
              onValueChange={() => setCameraPermission(!cameraPermission)}
            />
          </View>

          <View style={styles.optionContainer}>
            <Text style={styles.optionLabel}>Mikrofon İzni</Text>
            <Switch
              value={microphonePermission}
              onValueChange={() => setMicrophonePermission(!microphonePermission)}
            />
          </View>
        </View>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Hesap Kurtarma</Text>
          <TouchableOpacity style={styles.button} onPress={handleEmailRecovery}>
            <Text style={styles.buttonText}>E-posta ile Kurtarma</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
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
  sectionContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#555',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  optionLabel: {
    fontSize: 16,
    color: '#444',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default SecurityScreen;
