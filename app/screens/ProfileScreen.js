import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
const ProfileScreen = ({ navigation }) => {
  const handleNavigate = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.container}>
      {/* Profil Bilgileri ve Arkaplan */}
      <View style={styles.header}>
        <Image 
          source={require('../assets/app_head_bar.png')} 
          style={styles.headerBackground} 
        />
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Ad Soyad</Text>
          <Text style={styles.email}>info@example.com</Text>
        </View>
      </View>

      {/* Menü Listesi */}
      <View style={styles.menu}>
        <MenuItem icon="👤" text="Kişisel Bilgiler" onPress={() => handleNavigate('Personal')} />
        <MenuItem icon="🛡️" text="Güvenlik" onPress={() => handleNavigate('Security')} /> 
        <MenuItem icon="🔒" text="Parola Değiştir" onPress={() => handleNavigate('ChangePassword')} />
        <MenuItem icon="🔔" text="Bildirimler ve İzinler" onPress={() => handleNavigate('Notifications')} />
        <MenuItem icon="📞" text="İletişim Bilgileri" onPress={() => handleNavigate('Concat')} />
        <MenuItem icon="⚙️" text="Hesapları Yönet" onPress={() => handleNavigate('AccountManagement')} />
      </View>

      {/* Çıkış Butonu */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => handleNavigate('LoginScreen')}>
        <Text style={styles.logoutText}>⏻ Çıkış Yap</Text>
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  );
};

const MenuItem = ({ icon, text, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Text style={styles.icon}>{icon}</Text>
    <Text style={styles.menuText}>{text}</Text>
    <Text style={styles.arrow}>▶</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  header: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: 180,
  },
  headerBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFF',
    marginBottom: 10,
  },
  name: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  email: {
    color: '#DDE',
    fontSize: 14,
    marginBottom: 10,
  },
  menu: {
    marginVertical: 20,
    paddingHorizontal: 15,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginBottom: 10,
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    fontSize: 24,
    marginRight: 15,
    color: '#2E7D32',
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  arrow: {
    fontSize: 16,
    color: '#999',
  },
  logoutButton: {
    marginHorizontal: 20,
    backgroundColor: '#D32F2F',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 30,
  },
  logoutText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
