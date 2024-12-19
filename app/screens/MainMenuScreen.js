import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainMenuScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Ana Menü</Text>
      <ScrollView contentContainerStyle={styles.menuContainer}>
        {/* Maliyet Hesapla */}
        <TouchableOpacity 
          style={styles.menuButton} 
          onPress={() => navigation.navigate('Notifications')}
        >
          <Text style={styles.menuText}>Maliyet Hesapla</Text>
        </TouchableOpacity>

        {/* Sirius Nedir */}
        <TouchableOpacity 
          style={styles.menuButton} 
          onPress={() => navigation.navigate('SiriusNedir')}
        >
          <Text style={styles.menuText}>Sirius Nedir</Text>
        </TouchableOpacity>

        {/* Taleplerim */}
        <TouchableOpacity 
          style={styles.menuButton} 
          onPress={() => navigation.navigate('Taleplerim')}
        >
          <Text style={styles.menuText}>Taleplerim</Text>
        </TouchableOpacity>

        {/* Eğitimler */}
        <TouchableOpacity 
          style={styles.menuButton} 
          onPress={() => navigation.navigate('Egitimler')}
        >
          <Text style={styles.menuText}>Eğitimler</Text>
        </TouchableOpacity>

        {/* Sirius Bot */}
        <TouchableOpacity 
          style={styles.menuButton} 
          onPress={() => navigation.navigate('SiriusBot')}
        >
          <Text style={styles.menuText}>Sirius Bot</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  menuContainer: {
    alignItems: 'center',
  },
  menuButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
    width: '90%',
    alignItems: 'center',
  },
  menuText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MainMenuScreen;
