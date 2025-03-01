import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Dimensions,
} from "react-native";

const VerticalFarmingApp = () => {
  const [question, setQuestion] = useState("");
  const [submittedQuestions, setSubmittedQuestions] = useState([]);

  const handleQuestionSubmit = () => {
    if (question.trim() !== "") {
      setSubmittedQuestions((prev) => [
        ...prev,
        { id: Date.now(), text: question },
      ]);
      setQuestion("");
    } else {
      Alert.alert("Hata", "Lütfen bir soru girin!");
    }
  };

  const handleQuestionDelete = (id) => {
    setSubmittedQuestions((prev) => prev.filter((q) => q.id !== id));
  };

  const handleQuestionEdit = (id) => {
    const questionToEdit = submittedQuestions.find((q) => q.id === id);
    if (questionToEdit) {
      setQuestion(questionToEdit.text);
      handleQuestionDelete(id);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dikey Tarım Projesi</Text>
      <Text style={styles.description}>
        Sirius dikey tarım uygulaması evinde veya kendi kişisel olarak dikey
        tarım ile üretim yapmak isteyen bireylere rehber niteliğinde bir
        uygulamadır. Sirius Dikey Tarım mobil uygulamasında görev
        takibi,eğitimler,maliyet hesaplama ve diğer modüllerimiz ile konforlu
        bir tarım deneyimi yaşamanızı amaçlar.
      </Text>

      <Text style={styles.subHeader}>Sorularınızı Sorun</Text>
      <TextInput
        style={styles.input}
        placeholder="Sorunuzu buraya yazın..."
        value={question}
        onChangeText={setQuestion}
      />
      <TouchableOpacity style={styles.button} onPress={handleQuestionSubmit}>
        <Text style={styles.buttonText}>Gönder</Text>
      </TouchableOpacity>

      <ScrollView
        style={styles.questionsContainer}
        contentContainerStyle={styles.scrollContent}
      >
        {submittedQuestions.map((q) => (
          <View key={q.id} style={styles.questionItemContainer}>
            <Text style={styles.questionItem}>{q.text}</Text>
            <View style={styles.actionsContainer}>
              <TouchableOpacity
                onPress={() => handleQuestionEdit(q.id)}
                style={styles.editButton}
              >
                <Text style={styles.editButtonText}>Düzenle</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleQuestionDelete(q.id)}
                style={styles.deleteButton}
              >
                <Text style={styles.deleteButtonText}>Sil</Text>
              </TouchableOpacity>
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
    backgroundColor: "#f4f7f6", // Daha açık bir renk
    padding: 20,
    marginTop: 50,
  },
  header: {
    fontSize: 32, // Daha büyük ve dikkat çekici başlık
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: 30, // Daha fazla boşluk
  },
  description: {
    fontSize: 18, // Biraz daha büyük font
    color: "#7f8c8d", // Daha yumuşak bir gri ton
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 24,
  },
  subHeader: {
    fontSize: 22, // Başlık daha belirgin
    fontWeight: "bold",
    color: "#2980b9", // Canlı bir mavi
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#95a5a6", // Daha yumuşak bir gri
    borderRadius: 12, // Yuvarlak köşeler
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#ffffff",
    fontSize: 18, // Daha büyük yazı
  },
  button: {
    backgroundColor: "#27ae60",
    padding: 12,
    borderRadius: 10, // Yuvarlak köşeler
    alignItems: "center",
    marginBottom: 30,
    shadowColor: "#27ae60",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Android cihazlarda da güzel bir gölge
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  questionsContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 30,
  },
  questionItemContainer: {
    backgroundColor: "#ecf0f1",
    padding: 18,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#bdc3c7",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5, // Derinlik ve modern görünüm
  },
  questionItem: {
    color: "#2c3e50",
    fontSize: 18,
    marginBottom: 12, // Daha geniş boşluk
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  editButton: {
    backgroundColor: "#f39c12",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 12,
    shadowColor: "#f39c12",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    shadowColor: "#e74c3c",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default VerticalFarmingApp;
