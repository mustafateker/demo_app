import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';

const EducationDetail = ({ route, navigation }) => {
  const { course } = route.params;

  return (
    <View style={styles.container}>
      {/* Kurs Başlığı */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>{course.title}</Text>
      </View>

      {/* Kurs Detayları */}
      <View style={styles.content}>
        {/* İlerleme Durumu */}
        <Text style={styles.sectionTitle}>Tamamlanma Durumu</Text>
        <Progress.Bar
          progress={course.progress}
          width={null}
          color="#4CAF50"
          style={styles.progressBar}
        />
        <Text style={styles.progressText}>{`${Math.round(course.progress * 100)}% Tamamlandı`}</Text>

        {/* Açıklama */}
        <Text style={styles.sectionTitle}>Kurs Açıklaması</Text>
        <Text style={styles.description}>
          Bu kurs, {course.title.toLowerCase()} alanında derinlemesine bilgi ve pratik beceri kazanmanızı sağlar.
        </Text>

        {/* Kurs İçeriği */}
        <Text style={styles.sectionTitle}>Kurs İçeriği</Text>
        <Text style={styles.details}>{course.details}</Text>

        {/* Buton */}
        <TouchableOpacity style={styles.button} onPress={() => console.log('Kursa devam et')}>
          <Text style={styles.buttonText}>Kursa Devam Et</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 15,
    paddingTop: 50, // Yukarıdan daha fazla boşluk
    marginBottom: 20, // Headbar ile içerik arasında boşluk
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
    marginTop: 20,
  },
  progressBar: {
    marginVertical: 10,
  },
  progressText: {
    fontSize: 14,
    color: '#888',
  },
  description: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  details: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EducationDetail;
