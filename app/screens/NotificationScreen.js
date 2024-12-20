import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Bildiriler = ({ navigation }) => {
  const notifications = [
    { title: 'Yeni kullanım koşulları', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { title: 'Yeni eğitimlere göz at', description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.' },
    { title: 'Dikey tarımda yeni fırsatları yakala', description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.' },
    { title: 'Profil bilgilerini güncelle', description: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.' },
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}> 
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Bildiriler</Text>
        <Icon name="bell" size={24} color="#fff" />
      </View>

      {/* Bildirimler Listesi */}
      <ScrollView style={styles.scrollView}>
        {notifications.map((item, index) => (
          <View key={index} style={styles.card}>
            <Icon name="bullhorn" size={28} color="#4CAF50" style={styles.cardIcon} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDescription}>{item.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FFF6',
  },
  header: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 50, // Safe area için
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  scrollView: {
    marginTop: 10,
  },
  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  cardIcon: {
    marginRight: 15,
    alignSelf: 'center',
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 16,
    color: '#666',
  },
});

export default Bildiriler;
