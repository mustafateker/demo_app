import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions,
  Image,
} from "react-native";

const DailyInfoScreen = () => {
  const [selectedTip, setSelectedTip] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const dailyTips = [
    {
      title: "Sulama İpucu",
      description:
        "Bugün bitkilerinizin su ihtiyacını %10 azaltabilirsiniz. Özellikle domates ve biber bitkileri için gereksiz fazla sulama kök çürümesine yol açabilir.",
      icon: "💧",
    },
    {
      title: "Işık Desteği",
      description:
        "Bitkilerinizin sağlıklı büyümesi için ışık süresini 1 saat artırabilirsiniz. Bu, özellikle yapraklı yeşillikler için büyüme hızını artıracaktır.",
      icon: "🌞",
    },
    {
      title: "Nutrient Uyarısı",
      description:
        "Bitkilerinizin yapraklarında sararma fark ettiyseniz, azot eksikliği olabilir. Dengeli bir gübreleme ile sağlıklı büyümelerini destekleyin.",
      icon: "🌱",
    },
    {
      title: "Hasat Zamanı",
      description:
        "Domateslerinizi toplarken hafif kızarmalarını bekleyin. Tam olgunlaşan domatesler daha lezzetli ve besleyici olur.",
      icon: "🍅",
    },
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
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#f1f8f1" }}
      edges={["top", "left", "right"]}
    >
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require("../assets/app_head_bar.png")}
          style={styles.headerImage}
          resizeMode="cover"
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>Günlük Bilgiler!</Text>
          <Text style={styles.subtitle}>
            Dikey tarım hakkında günlük ipuçları ve bilgiler
          </Text>
        </View>
      </View>

      {/* Information Cards */}
      <ScrollView contentContainerStyle={styles.cardsContainer}>
        {dailyTips.map((tip, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => openModal(tip)}
          >
            <Text style={styles.icon}>{tip.icon}</Text>
            <Text style={styles.cardTitle}>{tip.title}</Text>
            <Text style={styles.cardDescription} numberOfLines={2}>
              {tip.description}
            </Text>
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
              <Text style={styles.modalDescription}>
                {selectedTip.description}
              </Text>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Kapat</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f1f8f1" },
  header: {
    height: Dimensions.get("screen").height * 0.15, // Header yüksekliği
    position: "relative",
  },
  headerImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  headerTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: 'rgba(0, 0, 0, 0.5)', // Yazılar için opak arka plan
  },
  title: {
    fontSize: 24,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#E8F5E9",
    marginTop: 5,
    textAlign: "center",
  },
  cardsContainer: { padding: 10 },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  icon: { fontSize: 30, textAlign: "center", marginBottom: 10 },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4CAF50",
  },
  cardDescription: { fontSize: 14, textAlign: "center", color: "#757575" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  modalIcon: { fontSize: 40, marginBottom: 15 },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4CAF50",
  },
  modalDescription: {
    fontSize: 16,
    textAlign: "center",
    color: "#757575",
    marginVertical: 10,
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButtonText: { color: "#FFF", fontWeight: "bold", fontSize: 16 },
});

export default DailyInfoScreen;
