import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Üst Logo Alanı */}
      <ImageBackground 
        source={require('../assets/head_bar_main_menu.png')}
        style={styles.header}
      >
        <View 
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%'}}>
        <TouchableOpacity 
          style={styles.icons}
          onPress={() => navigation.navigate('Tasks')} 
          >
          <Image 
            source={require('../assets/menu_icon_design.png')} 
            style={{ height: 30, resizeMode: 'contain' }} 
          />
        </TouchableOpacity>
        </View>
        
        <Image 
          source={require('../assets/sirius_farm_organic_tarim_text.png')} 
          style={styles.logo} 
        />
      </ImageBackground>

      {/* Grid Alanı */}
      <View style={styles.grid}>
        {/* Günlük Bilgi */}
        <TouchableOpacity style={styles.hexagon}>
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
        <TouchableOpacity style={styles.hexagon}>
          <Image source={require('../assets/education_main_menu_button.png')} style={styles.hexImage} />
          <Text style={styles.itemText}>Eğitimler</Text>
        </TouchableOpacity>

        {/* Taleplerim */}
        <TouchableOpacity style={styles.hexagon}>
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
    flex: 1,
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  logo: {
    marginTop: 20,
    width: '50%',
    height: 150,
    marginBottom: 10,
  },
  icons : {
    width: '10%',
    height: '10%',
    marginLeft: 3,
    marginTop: 10,
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
