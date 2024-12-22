import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';

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
            flex: 1,
            width: '95%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight: 22,
          }}
        >
          <TouchableOpacity 
            style={styles.icons}
            onPress={() => navigation.navigate('Menu')} 
          >
            <Image 
              source={require('../assets/menu_icon_design.png')} 
              style={{ height: 30, resizeMode: 'contain' }} 
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.icons}
            onPress={() => navigation.navigate('Search')} 
          >
            <Image 
              source={require('../assets/search_button_icon_design.png')} 
              style={{ height: 30, resizeMode: 'contain' }} 
            />
          </TouchableOpacity>
        </View>
        <Image 
          source={require('../assets/sirius_farm_organic_tarim_text.png')} 
          style={styles.logo} 
        />
      </ImageBackground>

      {/* Hexagon Grid Alanı */}
      <View style={styles.grid}>
        {/* Hexagon düzeni */}
        <View style={styles.hexRow}>
          <TouchableOpacity 
            style={styles.hexagonSmall} 
            onPress={() => navigation.navigate('DailyInfo')}
          >
            <Image source={require('../assets/daily_information_main_menu_button.png')} style={styles.hexImage} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.hexagonLarge} 
            onPress={() => navigation.navigate('Tasks')}
          >
            <Image source={require('../assets/tasks_main_menu_button.png')} style={styles.hexImage} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.hexagonSmall} 
            onPress={() => navigation.navigate('Profile')}
          >
            <Image source={require('../assets/profile_main_menu_button_design.png')} style={styles.hexImage} />
          </TouchableOpacity>
        </View>

        <View style={[styles.hexRow, styles.offsetRow]}>
          <TouchableOpacity 
            style={styles.hexagonLarge} 
            onPress={() => navigation.navigate('Siribot')}
          >
            <Image source={require('../assets/siribot_button_design.png')} style={styles.hexImage} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.hexagonLarge} 
            onPress={() => navigation.navigate('Education')}
          >
            <Image source={require('../assets/education_main_menu_button.png')} style={styles.hexImage} />
          </TouchableOpacity>
        </View>

        <View style={styles.hexRow}>
          <TouchableOpacity 
            style={[styles.hexagonLarge, styles.veryCloseSpacing]} 
            onPress={() => navigation.navigate('CostCalculation')}
          >
            <Image source={require('../assets/cost_calculation_button_design.png')} style={styles.hexImage} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.hexagonLarge, styles.centeredVeryClose]} 
            onPress={() => navigation.navigate('Request')}
          >
            <Image source={require('../assets/request_button_icon.png')} style={styles.hexImage} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.hexagonLarge, styles.veryCloseSpacing]} 
            onPress={() => navigation.navigate('DailyInfo')}
          >
            <Image source={require('../assets/sirius_nedir_button_design.png')} style={styles.hexImage} />
          </TouchableOpacity>
        </View>
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
    height: 250,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  logo: {
    width: '50%',
    height: 150,
    marginBottom: 20,
  },
  icons: {
    width: '10%',
    height: '10%',
    marginLeft: 3,
    marginTop: 30,
  },
  grid: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  hexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -10,
  },
  offsetRow: {
    marginTop: -25,
  },
  hexagonSmall: {
    width: 90,
    height: 100,
    marginHorizontal: -5,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  hexagonLarge: {
    width: 120,
    height: 140,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  hexImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  veryCloseSpacing: {
    marginHorizontal: -10, // Minimum yatay boşluk
  },
  centeredVeryClose: {
    marginTop: -35, // Daha yukarı ve yakın hizalama
  },
});

export default WelcomeScreen;