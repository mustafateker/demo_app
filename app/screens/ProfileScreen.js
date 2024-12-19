import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Profil Bilgileri ve Arkaplan */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} // Profil resmi
          style={styles.profileImage}
        />
        <Text style={styles.name}>Ad Soyad</Text>
        <Text style={styles.email}>info@example.com</Text>
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

// Menü Bileşeni
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
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    color: '#ddd',
    fontSize: 14,
  },
  menu: {
    marginVertical: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  icon: {
    fontSize: 24,
    marginRight: 10,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  arrow: {
    fontSize: 16,
    color: '#888',
  },
  logoutButton: {
    marginHorizontal: 20,
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
