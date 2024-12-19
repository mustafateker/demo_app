import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Bildiriler = () => {
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
        <Icon name="bell" size={24} color="#fff" />
        <Text style={styles.headerText}>Bildiriler</Text>
        <TouchableOpacity>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
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
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: 40, // Safe area için
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
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
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cardIcon: {
    marginRight: 15,
    alignSelf: 'center',
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  cardDescription: {
    fontSize: 20,
    color: '#666',
  },
});

export default Bildiriler;
