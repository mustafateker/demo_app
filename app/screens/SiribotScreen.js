import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView, // ScrollView ekliyoruz
} from 'react-native';

const SiriBotScreen = () => {
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState([]); // Soru ve cevapları tutmak için dizi
  const [showQuestions, setShowQuestions] = useState(false); // Soruların görünürlüğü

  const quickQuestions = [
    'Dikey tarım nedir?',
    'Sistemi nasıl kurabilirim?',
    'Hangi ürünleri yetiştirebilirim?',
    'Hangi gübre ve mineralleri kullanabilirim?',
  ];

  const answerMap = {
    'Dikey tarım nedir?': 'Dikey tarım, bitkilerin dikey olarak yetiştirilmesi yöntemidir.',
    'Sistemi nasıl kurabilirim?': 'Dikey tarım sistemi kurmak için uygun malzemeler ve planlama gereklidir.',
    'Hangi ürünleri yetiştirebilirim?': 'Lahanadan, marula kadar pek çok ürün yetiştirebilirsiniz.',
    'Hangi gübre ve mineralleri kullanabilirim?': 'Organik gübre ve özel mineraller kullanabilirsiniz.',
  };

  const renderChatBubble = ({ item }) => {
    return (
      <View style={item.type === 'question' ? styles.questionBubble : styles.answerBubble}>
        <Text style={item.type === 'question' ? styles.questionText : styles.answerText}>
          {item.text}
        </Text>
      </View>
    );
  };

  const handleQuestionPress = (question) => {
    const answer = answerMap[question];
    if (answer) {
      setChatHistory(prevHistory => [
        ...prevHistory,
        { type: 'question', text: question },
        { type: 'answer', text: answer },
      ]);
      setShowQuestions(false); // Soruları gizle
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image source={require('../assets/siribot_tasarım.png')} style={styles.botIcon} />
          <Text style={styles.headerTitle}>Siribot</Text>
        </View>
        <TouchableOpacity>
          <Image source={require('../assets/siribot_tasarım.png')} style={styles.backIcon} />
        </TouchableOpacity>
      </View>

      {/* Answer and Question Bubbles */}
      <ScrollView contentContainerStyle={styles.answerContainer}>
        <FlatList
          data={chatHistory}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderChatBubble}
          scrollEnabled={false} // FlatList'in kaydırılmasını devre dışı bırakıyoruz
        />
      </ScrollView>

      {/* Input Area */}
      <TouchableOpacity style={styles.inputArea} onPress={() => setShowQuestions(!showQuestions)}>
        <TextInput
          style={styles.input}
          placeholder="Bana sormak istediğin bir şey var mı?"
          placeholderTextColor="#888"
          value={inputText}
          onChangeText={setInputText}
          editable={false} // Kullanıcıdan metin girişi alınmasın
        />
      </TouchableOpacity>

      {/* Quick Questions (Hidden initially) */}
      {showQuestions && (
        <FlatList
          data={quickQuestions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.questionItem}
              onPress={() => handleQuestionPress(item)}
            >
              <Text style={styles.questionText}>{item}</Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.questionsList}
        />
      )}
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008650', // Sayfanın arka plan rengi
  },
  header: {
    backgroundColor: '#6fce55', // Header arka plan rengi
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  botIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  answerContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
    flexGrow: 1, // Esnek büyüme
  },
  answerBubble: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 20,
    marginVertical: 5,
    alignSelf: 'flex-start',
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  questionBubble: {
    backgroundColor: '#6fce55',
    padding: 15,
    borderRadius: 20,
    marginVertical: 5,
    alignSelf: 'flex-end',
    maxWidth: '80%',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  answerText: {
    fontSize: 16,
    color: '#333',
  },
  questionText: {
    fontSize: 16,
    color: '#fff', // Soru metni beyaz
  },
  inputArea: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
  },
  questionsList: {
    padding: 15,
  },
  questionItem: {
    backgroundColor: '#6fce55', // Soru arka plan rengi
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },
});

export default SiriBotScreen;
