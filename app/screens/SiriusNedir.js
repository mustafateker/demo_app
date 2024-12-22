import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Alert, Dimensions } from 'react-native';

const VerticalFarmingApp = () => {
  const [question, setQuestion] = useState('');
  const [submittedQuestions, setSubmittedQuestions] = useState([]);

  const handleQuestionSubmit = () => {
    if (question.trim() !== '') {
      setSubmittedQuestions((prev) => [...prev, { id: Date.now(), text: question }]);
      setQuestion('');
    } else {
      Alert.alert('Hata', 'Lütfen bir soru girin!');
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
Sirius dikey tarım uygulaması evinde veya kendi kişisel olarak dikey tarım ile üretim yapmak isteyen bireylere rehber niteliğinde bir uygulamadır.
        Sirius Dikey Tarım mobil uygulamasında görev takibi,eğitimler,maliyet hesaplama ve diğer modüllerimiz ile konforlu bir tarım deneyimi yaşamanızı amaçlar.
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

      <ScrollView style={styles.questionsContainer} contentContainerStyle={styles.scrollContent}>
        {submittedQuestions.map((q) => (
          <View key={q.id} style={styles.questionItemContainer}>
            <Text style={styles.questionItem}>{q.text}</Text>
            <View style={styles.actionsContainer}>
              <TouchableOpacity onPress={() => handleQuestionEdit(q.id)} style={styles.editButton}>
                <Text style={styles.editButtonText}>Düzenle</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleQuestionDelete(q.id)} style={styles.deleteButton}>
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
    backgroundColor: '#f0f8ff',
    padding: 20,
    marginTop:50,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#34495e',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ecf0f1',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#27ae60',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  questionsContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  questionItemContainer: {
    backgroundColor: '#e8e8e8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  questionItem: {
    color: '#2c3e50',
    fontSize: 16,
    marginBottom: 10,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  editButton: {
    backgroundColor: '#f1c40f',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default VerticalFarmingApp;