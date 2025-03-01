import React, { useState } from 'react';
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
} from 'react-native';

const RequestScreen = () => {
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState('');
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [answer, setAnswer] = useState('');  // Store the answer in a separate state

    const addQuestion = () => {
        if (newQuestion.trim() !== '') {
            const question = { id: Date.now().toString(), text: newQuestion, answer: null };
            setQuestions([question, ...questions]);
            setNewQuestion('');
        }
    };

    const openModal = (question) => {
        setSelectedQuestion(question);
        setAnswer(question.answer || '');  // Pre-fill the answer if exists
        setModalVisible(true);
    };

    const closeModal = () => {
        setSelectedQuestion(null);
        setModalVisible(false);
    };

    const submitAnswer = () => {
        // Update the question with the new answer
        setQuestions(
            questions.map((q) =>
                q.id === selectedQuestion.id ? { ...q, answer } : q
            )
        );
        closeModal();
    };

    return (
        <View style={styles.container}>
            {/* Header with PNG Image and Texts */}
            <View style={styles.header}>
                <Image
                    source={require('../assets/app_head_bar.png')}
                    style={styles.headerImage}
                    resizeMode="cover"
                />
                <View style={styles.headerTextContainer}>
                    <Text style={styles.title}>Taleplerim</Text>
                </View>
            </View>

            {/* Add Question Section */}
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

            {/* Questions List */}
            <FlatList
                data={questions}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.list}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.questionCard}
                        onPress={() => openModal(item)}
                    >
                        <Text style={styles.questionText}>{item.text}</Text>
                        {item.answer && (
                            <Text style={styles.answerText}>Cevap: {item.answer}</Text>
                        )}
                    </TouchableOpacity>
                )}
            />

            {/* Modal for Answering Questions */}
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
                            {/* Display the answer in a separate box */}
                            <TextInput
                                style={styles.modalInput}
                                placeholder="Cevabınızı buraya yazın..."
                                value={answer}
                                onChangeText={setAnswer} // Update the answer state
                                onSubmitEditing={submitAnswer}  // Submit answer when user presses "Enter"
                            />
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={closeModal}
                            >
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
    container: { 
        flex: 1, 
        backgroundColor: '#F5F5F5' },
    header: {
        height: Dimensions.get('screen').height * 0.10, // Header yüksekliği
        position: 'relative',
    },
    headerImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    headerTextContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#FFF',
        borderBottomWidth: 1,
        borderBottomColor: '#CCC',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#4CAF50',
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 40,
        marginRight: 10,
    },
    addButton: {
        backgroundColor: '#4CAF50',
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    addButtonText: { color: '#FFF', fontWeight: 'bold' },
    list: { padding: 10 },
    questionCard: {
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
    questionText: { fontSize: 16, fontWeight: 'bold', color: '#4CAF50' },
    answerText: { fontSize: 14, color: '#757575', marginTop: 5 },
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
    modalQuestion: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#4CAF50',
        marginBottom: 10,
    },
    modalInput: {
        borderWidth: 1,
        borderColor: '#4CAF50',
        borderRadius: 5,
        paddingHorizontal: 10,
        height: 40,
        width: '100%',
        marginBottom: 15,
    },
    closeButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    closeButtonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
});

export default RequestScreen;
