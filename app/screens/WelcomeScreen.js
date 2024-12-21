import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Üst Logo Alanı */}
      <View style={styles.header}>
        <Image source={require('../assets/sirius_farm_organic_tarim_text.png')} style={styles.logo} />
        <Text style={styles.title}>SIRIUS</Text>
        <Text style={styles.subtitle}>Dikey Tarım</Text>
      </View>

      {/* Grid Alanı */}
      <View style={styles.grid}>
        {/* Günlük Bilgi */}
        <TouchableOpacity style={styles.hexagon}
          onPress={() => navigation.navigate('Daily')}
        >
          <Image source={require('../assets/daily_information_main_menu_button.png')} style={styles.hexImage} />
          <Text style={styles.itemText}>Günlük Bilgi</Text>
        </TouchableOpacity>

        {/* Görevlerim */}
        <TouchableOpacity
          style={styles.hexagon}
          onPress={() => navigation.navigate('Tasks')}
        >
          <Image source={require('../assets/tasks_main_menu_button.png')} style={styles.hexImage} />
          <Text style={styles.itemText}>Görevler</Text>
        </TouchableOpacity>

        {/* Profilim */}
        <TouchableOpacity
          style={styles.hexagon}
          onPress={() => navigation.navigate('Profile')} // ProfileScreen'e yönlendirme
        >
          <Image source={require('../assets/profile_main_menu_button_design.png')} style={styles.hexImage} />
          <Text style={styles.itemText}>Profilim</Text>
        </TouchableOpacity>

        {/* Maliyet Hesapla */}
        <TouchableOpacity
          style={styles.hexagon}
          onPress={() => navigation.navigate('Notifications')}
        >
          <Image source={require('../assets/cost_calculation_button_design.png')} style={styles.hexImage} />
          <Text style={styles.itemText}>Maliyet Hesapla</Text>
        </TouchableOpacity>

        {/* Eğitimler */}
        <TouchableOpacity style={styles.hexagon}
          onPress={() => navigation.navigate('Education')} >
          <Image source={require('../assets/education_main_menu_button.png')} style={styles.hexImage} />
          <Text style={styles.itemText}>Eğitimler</Text>
        </TouchableOpacity>

        {/* Taleplerim */}
        <TouchableOpacity style={styles.hexagon}
          onPress={() => navigation.navigate('Request')}
        >
          <Image source={require('../assets/request_button_icon.png')} style={styles.hexImage} />
          <Text style={styles.itemText}>Taleplerim</Text>
        </TouchableOpacity>

        {/* Sirius Nedir? */}
        <TouchableOpacity style={styles.hexagon}
          onPress={() => navigation.navigate('Search')} >
          <Image source={require('../assets/sirius_nedir_button_design.png')} style={styles.hexImage} />
          <Text style={styles.itemText}>Sirius Nedir?</Text>
        </TouchableOpacity>

        {/* Siribot */}
        <TouchableOpacity style={styles.hexagon}
          onPress={() => navigation.navigate('Siribot')} >

          <Image source={require('../assets/siribot_button_design.png')} style={styles.hexImage} />
          <Text style={styles.itemText}>Siribot</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FFF6',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#4CAF50',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFF',
  },
  subtitle: {
    fontSize: 20,
    fontStyle: 'italic',
    color: '#FFF',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
  },
  hexagon: {
    width: 100,
    height: 115,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  hexImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  itemText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4CAF50',
  },
});

export default WelcomeScreen;
