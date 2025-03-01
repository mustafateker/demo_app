import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  Modal,
  StatusBar,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Calendar } from "react-native-calendars";
import { SafeAreaView } from "react-native";

const TasksScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskColor, setTaskColor] = useState("#F28B82");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleAddTask = () => {
    if (!selectedDate) {
      Alert.alert("Uyarı", "Lütfen bir tarih seçiniz.");
      return;
    }
    if (new Date(selectedDate) < new Date().setHours(0, 0, 0, 0)) {
      Alert.alert("Uyarı", "Geçmiş bir tarih seçemezsiniz.");
      return;
    }
    if (taskTitle) {
      const newTask = {
        id: selectedTask ? selectedTask.id : Math.random().toString(),
        title: taskTitle,
        description: taskDescription,
        date: selectedDate,
        color: taskColor,
      };

      setTasks((prevTasks) => {
        if (selectedTask) {
          return prevTasks.map((task) =>
            task.id === selectedTask.id ? newTask : task
          );
        }
        return [...prevTasks, newTask];
      });

      resetTaskForm();
    }
  };

  const resetTaskForm = () => {
    setTaskTitle("");
    setTaskDescription("");
    setTaskColor("#F28B82");
    setModalVisible(false);
    setSelectedTask(null);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setTaskTitle(task.title);
    setTaskDescription(task.description);
    setTaskColor(task.color);
    setModalVisible(true);
  };

  const renderTask = ({ item }) => (
    <View style={[styles.taskItem, { borderLeftColor: item.color }]}>
      <Text style={[styles.taskDate, { color: "#4caf50" }]}>{item.date}</Text>
      <Text style={[styles.taskTitle, { color: item.color }]}>{item.title}</Text>
      <TouchableOpacity onPress={() => handleEditTask(item)}>
        <Icon name="pencil" size={20} color="#4caf50" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
        <Icon name="trash-can" size={20} color="#f44336" />
      </TouchableOpacity>
    </View>
  );

  const handleDatePress = (day) => {
    if (new Date(day.dateString) < new Date().setHours(0, 0, 0, 0)) {
      Alert.alert("Uyarı", "Geçmiş bir tarih seçemezsiniz.");
    } else {
      setSelectedDate(day.dateString);
      setModalVisible(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4caf50" />
      <View style={styles.appBar}>
        <Text style={styles.appBarText}>Görev Takvimi</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addButtonIcon}>
          <Icon name="plus" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <Calendar
        markedDates={tasks.reduce((acc, task) => {
          acc[task.date] = { marked: true, dotColor: task.color };
          return acc;
        }, {})}
        onDayPress={handleDatePress}
        style={styles.calendar}
      />
      <Text style={styles.taskHeader}>Görevler</Text>
      <FlatList
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
      />
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {selectedTask ? "Görevi Düzenle" : "Yeni Görev Ekle"}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Görev Başlığı"
              value={taskTitle}
              onChangeText={setTaskTitle}
            />
            <TextInput
              style={[styles.input, { height: 80 }]}
              placeholder="Açıklama"
              value={taskDescription}
              onChangeText={setTaskDescription}
              multiline
            />
            <View style={styles.colorPickerContainer}>
              <Text style={styles.colorText}>Önem:</Text>
              <TouchableOpacity
                style={[styles.colorOption, { backgroundColor: "#F28B82" }]}
                onPress={() => setTaskColor("#F28B82")}
              />
              <TouchableOpacity
                style={[styles.colorOption, { backgroundColor: "#FBBC04" }]}
                onPress={() => setTaskColor("#FBBC04")}
              />
              <TouchableOpacity
                style={[styles.colorOption, { backgroundColor: "#34A853" }]}
                onPress={() => setTaskColor("#34A853")}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
                <Text style={styles.buttonText}>
                  {selectedTask ? "Güncelle" : "Ekle"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={resetTaskForm}>
                <Text style={styles.buttonText}>İptal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  appBar: {
    height: 60,
    backgroundColor: "#4caf50",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  appBarText: { color: "#fff", fontSize: 20, fontWeight: "bold", flex: 1 },
  addButtonIcon: { marginLeft: 'auto' },
  calendar: { marginTop: 10 },
  taskHeader: { fontSize: 18, fontWeight: "bold", margin: 10 },
  taskItem: { flexDirection: "row", padding: 10, borderWidth: 1, borderRadius: 5 },
  taskTitle: { fontWeight: "bold", fontSize: 16, flex: 1 },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    maxWidth: 400,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: { fontSize: 18, fontWeight: "bold", textAlign: "center" },
  input: { width: "100%", height: 40, borderColor: "#ccc", borderWidth: 1, borderRadius: 5, padding: 10, marginBottom: 15 },
  colorPickerContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", marginBottom: 15 },
  colorOption: { width: 30, height: 30, borderRadius: 15, marginHorizontal: 5 },
  buttonContainer: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
  addButton: { backgroundColor: "#4caf50", padding: 10, borderRadius: 5, flex: 1, marginRight: 10 },
  cancelButton: { backgroundColor: "#f44336", padding: 10, borderRadius: 5, flex: 1 },
  buttonText: { color: "#fff", textAlign: "center", fontWeight: "bold" },
});

export default TasksScreen;
