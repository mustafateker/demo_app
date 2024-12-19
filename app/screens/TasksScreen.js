import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Calendar } from 'react-native-calendars';

const TaskScreen = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      date: '2024-10-24',
      task: 'Su tankı rutin kontrollerini yap (Mineral, pH, sıcaklık)',
      color: 'blue',
    },
    {
      id: '2',
      date: '2024-10-24',
      task: 'Işıklandırmaları kontrol et',
      color: 'red',
    },
    {
      id: '3',
      date: '2024-10-26',
      task: 'Ürünlerin hasat zamanı',
      color: 'orange',
    },
  ]);

  const [selectedDate, setSelectedDate] = useState(null);

  const handleTaskEdit = (taskId) => {
    Alert.alert('Görev Düzenle', `Görev ID: ${taskId}`);
  };

  const handleTaskDelete = (taskId) => {
    Alert.alert(
      'Görev Sil',
      `Görev ID: ${taskId} silinecek!`,
      [
        { text: 'İptal', style: 'cancel' },
        {
          text: 'Sil',
          onPress: () =>
            setTasks((prevTasks) =>
              prevTasks.filter((task) => task.id !== taskId)
            ),
        },
      ],
      { cancelable: true }
    );
  };

  const renderTask = ({ item }) => {
    return (
      <View style={styles.taskItem}>
        <Text style={styles.taskDate}>{item.date}</Text>
        <Text style={[styles.taskText, { borderLeftColor: item.color }]}>
          {item.task}
        </Text>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleTaskEdit(item.id)}
        >
          <Text style={styles.editText}>✏️</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleTaskDelete(item.id)}
        >
          <Text style={styles.deleteText}>🗑️</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Takvim */}
      <Calendar
        onDayPress={(day) => setSelectedDate(day.dateString)}
        markedDates={{
          ...tasks.reduce((acc, task) => {
            acc[task.date] = { marked: true, dotColor: task.color };
            return acc;
          }, {}),
          [selectedDate]: {
            selected: true,
            selectedColor: '#2E7D32',
          },
        }}
        theme={{
          todayTextColor: '#2E7D32',
          arrowColor: '#2E7D32',
        }}
      />

      {/* Görev Listesi */}
      <Text style={styles.taskListTitle}>Görevler</Text>
      <FlatList
        data={tasks.filter((task) => task.date === selectedDate)}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Bu tarihe ait görev yok.</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F5F5F5' },
  taskListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginVertical: 10,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  taskDate: { fontSize: 16, fontWeight: 'bold', color: '#2E7D32', marginRight: 10 },
  taskText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    borderLeftWidth: 4,
    paddingLeft: 10,
  },
  editButton: { padding: 5, marginRight: 10 },
  deleteButton: { padding: 5 },
  editText: { fontSize: 16, color: '#2E7D32' },
  deleteText: { fontSize: 16, color: '#FF3D00' },
  emptyText: { fontSize: 14, color: '#888', textAlign: 'center', marginTop: 20 },
});

export default TasksScreen;
