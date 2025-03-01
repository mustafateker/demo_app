import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Modal,
  Dimensions,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RequestScreen = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [answer, setAnswer] = useState("");

  const addQuestion = () => {
    if (newQuestion.trim() !== "") {
      const question = {
        id: Date.now().toString(),
        text: newQuestion,
        answer: null,
      };
      setQuestions([question, ...questions]);
      setNewQuestion("");
    }
  };

  const openModal = (question) => {
    setSelectedQuestion(question);
    setAnswer(question.answer || "");
    setNewQuestion(question.text); // Set question text in input
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedQuestion(null);
    setModalVisible(false);
  };

  const submitAnswer = () => {
    // Talep düzenleme işlemi
    if (newQuestion.trim() !== "") {
      setQuestions(
        questions.map((q) =>
          q.id === selectedQuestion.id ? { ...q, text: newQuestion } : q
        )
      );
      setNewQuestion(""); // Inputu temizle
      setAnswer(""); // Cevap alanını temizle
    }
    closeModal();
  };

  const deleteQuestion = (id) => {
    setQuestions(questions.filter((q) => q.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/app_head_bar.png")}
          style={styles.headerImage}
          resizeMode="cover"
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.title}>Taleplerim</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Sorunuzu buraya yazın..."
          value={newQuestion}
          onChangeText={setNewQuestion}
        />
        <TouchableOpacity style={styles.addButton} onPress={addQuestion}>
          <Text style={styles.addButtonText}>Ekle</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={questions}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.questionCard}>
            <TouchableOpacity
              style={styles.questionCardInner}
              onPress={() => openModal(item)}
            >
              <Text style={styles.questionText}>{item.text}</Text>
              {item.answer && (
                <Text style={styles.answerText}>Cevap: {item.answer}</Text>
              )}
            </TouchableOpacity>
            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.editButton}
                onPress={() => openModal(item)}
              >
                <Text style={styles.actionText}>Düzenle</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => deleteQuestion(item.id)}
              >
                <Text style={styles.actionText}>Sil</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {selectedQuestion && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalQuestion}>
                Soru: {selectedQuestion.text}
              </Text>
              <TextInput
                style={styles.modalInput}
                placeholder="Soruyu düzenleyin..."
                value={newQuestion}
                onChangeText={setNewQuestion}
                onSubmitEditing={submitAnswer}
              />
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Kapat</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.editButton}
                onPress={submitAnswer} // Kaydetme işlevini burada çağırıyoruz
              >
                <Text style={styles.actionText}>Kaydet</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FAFAFA" },
  header: {
    height: Dimensions.get("screen").height * 0.12,
    position: "relative",
    marginBottom: 10,
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
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFF",
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "#FFF",
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#4CAF50",
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 45,
    marginRight: 15,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: { color: "#FFF", fontWeight: "bold" },
  list: { paddingHorizontal: 10 },
  questionCard: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  questionCardInner: {
    paddingRight: 50, // Space for action buttons
  },
  questionText: { fontSize: 18, fontWeight: "bold", color: "#4CAF50" },
  answerText: { fontSize: 14, color: "#757575", marginTop: 5 },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
  },
  editButton: {
    backgroundColor: "#FFA500",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: "#FF6347",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  actionText: { color: "#FFF", fontWeight: "bold" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 25,
    width: "80%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  modalQuestion: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#4CAF50",
    marginBottom: 15,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: "#4CAF50",
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 45,
    width: "100%",
    marginBottom: 20,
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  closeButtonText: { color: "#FFF", fontWeight: "bold", fontSize: 16 },
});

export default RequestScreen;
