import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Profil Bilgileri ve Arkaplan */}
      <View style={styles.header}>
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
        <MenuItem icon="👤" text="Kişisel Bilgiler" />
        <MenuItem icon="🛡️" text="Güvenlik" />
        <MenuItem icon="🔒" text="Parola Değiştir" />
        <MenuItem icon="🔔" text="Bildirimler ve İzinler" />
        <MenuItem icon="📞" text="İletişim Bilgileri" />
        <MenuItem icon="⚙️" text="Hesapları Yönet" />
      </View>

      {/* Çıkış Butonu */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>⏻ Çıkış Yap</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const MenuItem = ({ icon, text }) => (
  <TouchableOpacity style={styles.menuItem}>
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
    backgroundColor: '#4CAF50',
    paddingVertical: 50,
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFF',
    marginBottom: 15,
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
