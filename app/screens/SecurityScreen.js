import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Switch } from 'react-native';

const SecurityScreen = () => {
  const [emailVerificationEnabled, setEmailVerificationEnabled] = React.useState(false);
  const [smsVerificationEnabled, setSmsVerificationEnabled] = React.useState(false);
  const [cameraPermission, setCameraPermission] = React.useState(false);
  const [microphonePermission, setMicrophonePermission] = React.useState(false);

  const handleEmailRecovery = () => {
    Alert.alert('Hesap Kurtarma', 'E-posta ile hesap kurtarma talebi gönderildi.');
  };

  const handleSmsRecovery = () => {
    Alert.alert('Hesap Kurtarma', 'SMS ile hesap kurtarma talebi gönderildi.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Güvenlik Ayarları</Text>

      {/* Email Verification */}
      <View style={styles.optionContainer}>
        <Text style={styles.optionLabel}>E-posta Doğrulama:</Text>
        <Switch
          value={emailVerificationEnabled}
          onValueChange={() => setEmailVerificationEnabled(!emailVerificationEnabled)}
        />
      </View>

      {/* SMS Verification */}
      <View style={styles.optionContainer}>
        <Text style={styles.optionLabel}>SMS Doğrulama:</Text>
        <Switch
          value={smsVerificationEnabled}
          onValueChange={() => setSmsVerificationEnabled(!smsVerificationEnabled)}
        />
      </View>

      {/* Permissions */}
      <Text style={styles.sectionTitle}>Cihaz İzinleri</Text>

      <View style={styles.optionContainer}>
        <Text style={styles.optionLabel}>Kamera İzni:</Text>
        <Switch
          value={cameraPermission}
          onValueChange={() => setCameraPermission(!cameraPermission)}
        />
      </View>

      <View style={styles.optionContainer}>
        <Text style={styles.optionLabel}>Mikrofon İzni:</Text>
        <Switch
          value={microphonePermission}
          onValueChange={() => setMicrophonePermission(!microphonePermission)}
        />
      </View>

      {/* Account Recovery */}
      <Text style={styles.sectionTitle}>Hesap Kurtarma</Text>

      <TouchableOpacity style={styles.button} onPress={handleEmailRecovery}>
        <Text style={styles.buttonText}>E-posta ile Kurtarma</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleSmsRecovery}>
        <Text style={styles.buttonText}>SMS ile Kurtarma</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fafc',
    padding: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 30, // Daha fazla boşluk
    color: '#2c3e50',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 40, // Daha fazla boşluk
    marginBottom: 15,
    color: '#34495e',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30, // Daha fazla boşluk
  },
  optionLabel: {
    fontSize: 16,
    color: '#2c3e50',
  },
  button: {
    backgroundColor: '#4CAF50', // Yeni yeşil tonu
    paddingVertical: 15,
    borderRadius: 12, // Hafif daha yuvarlak kenar
    alignItems: 'center',
    marginTop: 25, // Daha fazla boşluk
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 }, // Daha belirgin gölge
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17, // Biraz daha büyük metin
    fontWeight: '600',
  },
});

export default SecurityScreen;
