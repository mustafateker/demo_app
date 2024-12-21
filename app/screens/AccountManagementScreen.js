import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Alert } from "react-native";

const AccountManagementScreen = () => {
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
    <View style={styles.container}>
      <Text style={styles.header}>Hesaplarımı Yönet</Text>
      <FlatList
        data={accounts}
        keyExtractor={(item) => item.id}
        renderItem={renderAccount}
        contentContainerStyle={styles.accountList}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddAccount}>
        <Text style={styles.addButtonText}>+ Hesap Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f8f9fa",
      paddingTop: 50, // Üst boşluk
      paddingHorizontal: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
      color: "#343a40", // Daha belirgin bir renk
    },
    accountList: {
      paddingBottom: 100, // Alt boşluk (butonun üzerine çıkmasını önlemek için)
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
        width : '100%',
      backgroundColor: "#28a745",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      position: "absolute", // Butonu sabitliyoruz
      bottom: 20, // Ekranın altından 20 birim yukarıda
      marginBottom : 50,
      alignSelf: "center", // Yatayda ortalıyoruz
    },
    addButtonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
  });
  


export default AccountManagementScreen;
