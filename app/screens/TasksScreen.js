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

const TasksScreen = () => {
  const [activeTab, setActiveTab] = useState("Takvim");
  const [selectedDate, setSelectedDate] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskColor, setTaskColor] = useState("#F28B82");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null); // Seçilen görevi tutacak

  const handleAddTask = () => {
    if (!selectedDate) {
      Alert.alert("Uyarı", "Lütfen bir tarih seçiniz.");
      return;
    }
    if (new Date(selectedDate) < new Date()) {
      Alert.alert(
        "Uyarı",
        "Önceki zamandan bir tarihi seçtiniz. Lütfen bugün veya sonraki tarihleri seçiniz."
      );
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
    if (new Date(day.dateString) < new Date()) {
      Alert.alert(
        "Uyarı",
        "Önceki zamandan bir tarihi seçtiniz. Lütfen bugün veya sonraki tarihleri seçiniz."
      );
    } else {
      setSelectedDate(day.dateString);
      setModalVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#4caf50" />
      <View style={styles.appBar}>
        <Text style={styles.appBarText}>Görev Takvimi</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.addButtonIcon}>
          <Icon name="plus" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, marginBottom: 60 }}>
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
      </View>
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Yeni Görev Ekle</Text>
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
            <Text style={styles.colorText}>Önem: </Text>
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
              <Text style={styles.buttonText}>Görev Ekle</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={resetTaskForm}>
              <Text style={styles.buttonText}>İptal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tabBarItem}>
          <Icon name="robot" size={24} color="#fff" />
          <Text style={styles.tabBarText}>Siribot</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBarItem}>
          <Icon name="magnify" size={24} color="#fff" />
          <Text style={styles.tabBarText}>Ara</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBarCenter}>
          <View style={styles.tabBarCircle} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBarItem}>
          <Icon name="home" size={24} color="#fff" />
          <Text style={styles.tabBarText}>Anasayfa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabBarItem}>
          <Icon name="account" size={24} color="#fff" />
          <Text style={styles.tabBarText}>Profilim</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  appBar: {
    height: 60,
    backgroundColor: "#4caf50",
    justifyContent: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  appBarText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    flex: 1,
  },
  addButtonIcon: {
    marginLeft: 'auto',
  },
  calendar: {
    marginTop: 10,
  },
  taskHeader: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  taskTitle: {
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
  },
  taskDate: {
    color: "#4caf50",
    fontSize: 14,
    marginRight: 10,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  colorPickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  colorText: {
    fontSize
    : 16,
    marginRight: 10,
  },
  colorOption: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  addButton: {
    backgroundColor: "#4caf50",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
  },
  cancelButton: {
    backgroundColor: "#f44336",
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#4caf50",
    padding: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabBarItem: {
    alignItems: "center",
  },
  tabBarCenter: {
    position: "absolute",
    bottom: 10,
    left: "50%",
    marginLeft: -25,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 5,
  },
  tabBarCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#4caf50",
  },
  tabBarText: {
    color: "#fff",
    fontSize: 12,
  },
});

export default TasksScreen;
