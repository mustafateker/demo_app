import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from "axios";

const SiriBotScreen = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const navigation = useNavigation();

  const sendMessage = async () => {
    if (input.trim() === "") return;

    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.post("http://192.168.1.62:5000/chat", {
        message: input,
      });

      setMessages([...newMessages, { text: response.data.response, sender: "bot" }]);
    } catch (error) {
      console.error("API hatası:", error);
      setMessages([...newMessages, { text: "Bağlantı hatası!", sender: "bot" }]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/app_head_bar.png')}
          style={styles.headerImage}
          resizeMode="cover"
        />
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
            <Image
              source={require('../assets/siribot_tasarım.png')}
              style={styles.headerIcon}
            />
            <Text style={styles.title}>Siribot</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
            <Image
              source={require('../assets/back_icon.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              msg.sender === "user" ? styles.userBubble : styles.botBubble,
            ]}
          >
            <Text style={styles.messageText}>{msg.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Bana sormak istediğin bir şey var mı?"
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>➤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  header: {
    height: Dimensions.get('screen').height * 0.10,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: '100%',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIcon: {
    width: 40,
    height: 40,
  },
  headerIcon: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
  },
  messagesContainer: {
    padding: 10,
    paddingTop: Dimensions.get('screen').height * 0.12,
    marginTop: Dimensions.get('screen').height * 0.10,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#D3D3D3',
  },
  botBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#2E8B57',
  },
  messageText: { color: 'white' },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  input: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#2E8B57',
    padding: 10,
    borderRadius: 20,
  },
  sendButtonText: { color: 'white', fontSize: 18 },
});

export default SiriBotScreen;
