import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Örneğin ikonlar için

const WelcomeScreen = () => {
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
        <TouchableOpacity style={styles.item}>
          <Icon name="info" size={40} color="#4CAF50" />
          <Text style={styles.itemText}>Günlük Bilgi</Text>
        </TouchableOpacity>

        {/* Görevler */}
        <TouchableOpacity style={styles.item}>
          <Icon name="event" size={40} color="#4CAF50" />
          <Text style={styles.itemText}>Görevler</Text>
        </TouchableOpacity>

        {/* Profilim */}
        <TouchableOpacity style={styles.item}>
          <Icon name="person" size={40} color="#4CAF50" />
          <Text style={styles.itemText}>Profilim</Text>
        </TouchableOpacity>

        {/* Siribot */}
        <TouchableOpacity style={styles.item}>
          <Icon name="smart-toy" size={40} color="#4CAF50" />
          <Text style={styles.itemText}>Siribot</Text>
        </TouchableOpacity>

        {/* Eğitimler */}
        <TouchableOpacity style={styles.item}>
          <Icon name="lightbulb" size={40} color="#4CAF50" />
          <Text style={styles.itemText}>Eğitimler</Text>
        </TouchableOpacity>

        {/* Sirius Nedir */}
        <TouchableOpacity style={styles.item}>
          <Icon name="eco" size={40} color="#4CAF50" />
          <Text style={styles.itemText}>Sirius Nedir</Text>
        </TouchableOpacity>

        {/* Maliyet Hesapla */}
        <TouchableOpacity style={styles.item}>
          <Icon name="calculate" size={40} color="#4CAF50" />
          <Text style={styles.itemText}>Maliyet Hesapla</Text>
        </TouchableOpacity>

        {/* Taleplerim */}
        <TouchableOpacity style={styles.item}>
          <Icon name="assignment" size={40} color="#4CAF50" />
          <Text style={styles.itemText}>Taleplerim</Text>
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
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  item: {
    width: '40%',
    aspectRatio: 1,
    backgroundColor: '#E8F5E9',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    elevation: 3,
  },
  itemText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
});

export default WelcomeScreen;
