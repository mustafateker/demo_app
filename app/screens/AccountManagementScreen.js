import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Alert, ImageBackground } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from "react-native";

const AccountManagementScreen = ({ navigation }) => {
  const [accounts, setAccounts] = useState([
    { id: "1", name: "Kişisel Gmail", email: "example@gmail.com" },
    { id: "2", name: "İş Hesabı", email: "work@example.com" },
  ]);

  const handleDelete = (id) => {
    Alert.alert(
      "Hesabı Sil",
      "Bu hesabı silmek istediğinizden emin misiniz?",
      [
        { text: "İptal", style: "cancel" },
        { text: "Sil", onPress: () => setAccounts(accounts.filter((account) => account.id !== id)) },
      ]
    );
  };

  const handleEdit = (id) => {
    Alert.alert("Düzenle", `Hesap ${id} düzenlenecek.`);
  };

  const handleSwitch = (id) => {
    Alert.alert("Geçiş Yap", `Hesap ${id} seçildi.`);
  };

  const handleAddAccount = () => {
    Alert.alert("Hesap Ekle", "Yeni hesap ekleme işlemi başlatıldı.");
  };

  const renderAccount = ({ item }) => (
    <View style={styles.accountCard}>
      <View style={styles.accountInfo}>
        <Image
          style={styles.avatar}
          source={{
            uri: `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}`,
          }}
        />
        <View>
          <Text style={styles.accountName}>{item.name}</Text>
          <Text style={styles.accountEmail}>{item.email}</Text>
        </View>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={styles.button} onPress={() => handleEdit(item.id)}>
          <Text style={styles.buttonText}>Düzenle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleDelete(item.id)}>
          <Text style={styles.buttonText}>Sil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleSwitch(item.id)}>
          <Text style={styles.buttonText}>Geçiş Yap</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <ImageBackground source={require('../assets/app_head_bar.png')} style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}> 
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Hesaplarımı Yönet</Text>
        <Icon name="users" size={24} color="#fff" />
      </ImageBackground>
      
      <FlatList
        data={accounts}
        keyExtractor={(item) => item.id}
        renderItem={renderAccount}
        contentContainerStyle={styles.accountList}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddAccount}>
        <Text style={styles.addButtonText}>+ Hesap Ekle</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 50, // Safe area için
  },
  headerText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  accountList: {
    paddingBottom: 100,
  },
  accountCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  accountInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  accountName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  accountEmail: {
    fontSize: 14,
    color: "#6c757d",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#28a745",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
  addButton: {
    width: "100%",
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    marginBottom: 50,
    alignSelf: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AccountManagementScreen;