import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Dimensions } from 'react-native';

const DailyInfoScreen = () => {
  const [selectedTip, setSelectedTip] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const dailyTips = [
    { title: "Sulama İpucu", description: "Bugün su ihtiyacını %10 azaltabilirsiniz.", icon: "💧" },
    { title: "Işık Desteği", description: "Bitkiler için ışık süresini 1 saat artırın.", icon: "🌞" },
    { title: "Nutrient Uyarısı", description: "Besin takviyesi zamanı geldi!", icon: "🌱" },
    { title: "Hasat Zamanı", description: "Domateslerin hasat vakti!", icon: "🍅" },
  ];

  const openModal = (tip) => {
    setSelectedTip(tip);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedTip(null);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Günlük Bilgiler</Text>
        <Text style={styles.subtitle}>Dikey tarım hakkında günlük ipuçları ve bilgiler</Text>
      </View>

      {/* Information Cards */}
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {dailyTips.map((tip, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={() => openModal(tip)}>
            <Text style={styles.icon}>{tip.icon}</Text>
            <Text style={styles.cardTitle}>{tip.title}</Text>
            <Text style={styles.cardDescription} numberOfLines={2}>{tip.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Modal for Enlarged View */}
      {selectedTip && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalIcon}>{selectedTip.icon}</Text>
              <Text style={styles.modalTitle}>{selectedTip.title}</Text>
              <Text style={styles.modalDescription}>{selectedTip.description}</Text>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Kapat</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5' },
  header: {
    padding: 20,
    paddingTop: Dimensions.get('screen').height * 0.05, // Kameraya göre aşağıda başlar
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  title: { fontSize: 24, color: '#FFF', fontWeight: 'bold' },
  subtitle: { fontSize: 16, color: '#E8F5E9', marginTop: 5, textAlign: 'center' },
  cardsContainer: { padding: 10 },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  icon: { fontSize: 30, textAlign: 'center', marginBottom: 10 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: '#4CAF50' },
  cardDescription: { fontSize: 14, textAlign: 'center', color: '#757575' },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
  },
  modalIcon: { fontSize: 40, marginBottom: 15 },
  modalTitle: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', color: '#4CAF50' },
  modalDescription: { fontSize: 16, textAlign: 'center', color: '#757575', marginVertical: 10 },
  closeButton: {
    marginTop: 15,
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
});

export default DailyInfoScreen;
