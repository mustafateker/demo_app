import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

const SiriBotScreen = () => {
  const [inputText, setInputText] = useState('');

  const quickQuestions = [
    'Dikey tarım nedir?',
    'Sistemi nasıl kurabilirim?',
    'Hangi ürünleri yetiştirebilirim?',
    'Hangi gübre ve mineralleri kullanabilirim?'
  ];

  const renderQuestion = ({ item }) => (
    <TouchableOpacity style={styles.questionItem}>
      <Image source={require('../assets/siribot_tasarım.png')} style={styles.questionIcon} />
      <Text style={styles.questionText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
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

      {/* Quick Questions */}
      <FlatList
        data={quickQuestions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderQuestion}
        contentContainerStyle={styles.questionsList}
      />

      {/* Input Area */}
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          placeholder="Bana sormak istediğin bir şey var mı?"
          placeholderTextColor="#888"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Image source={require('../assets/siribot_tasarım.png')} style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#6FAE45',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  questionsList: {
    padding: 15,
  },
  questionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  questionIcon: {
    width: 20,
    height: 20,
    tintColor: '#6FAE45',
    marginRight: 10,
  },
  questionText: {
    fontSize: 16,
    color: '#333',
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
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#6FAE45',
    padding: 10,
    borderRadius: 50,
  },
  sendIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
});

export default SiriBotScreen;
