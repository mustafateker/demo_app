import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import * as Progress from "react-native-progress";

const EducationDetail = ({ route, navigation }) => {
  const { course } = route.params;

  // Eğitimleri listelemek için state
  const [showAllCourses, setShowAllCourses] = useState(false);

  // Örnek eğitim verisi
  const courses = [
    {
      id: "1",
      title: "React Native Başlangıç",
      progress: 0.7,
      details:
        "React Native ile mobil uygulama geliştirmeye başlamak için gerekli bilgiler.",
    },
    {
      id: "2",
      title: "JavaScript Derinlemesine",
      progress: 0.5,
      details: "JavaScript’in derinliklerine inmek için gereken tüm bilgiler.",
    },
    {
      id: "3",
      title: "Python ile Veri Bilimi",
      progress: 0.8,
      details: "Python ile veri bilimi konusunda uzmanlaşmaya yönelik kurs.",
    },
    // Diğer kurslar eklenebilir
  ];

  // Kursları listeleme işlemi
  const renderCourseItem = ({ item }) => (
    <View style={styles.courseItem}>
      <Text style={styles.courseTitle}>{item.title}</Text>
      <Progress.Bar
        progress={item.progress}
        width={null}
        color="#4CAF50"
        style={styles.progressBar}
      />
      <Text style={styles.progressText}>{`${Math.round(
        item.progress * 100
      )}% Tamamlandı`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Kurs Başlığı */}
      <View style={styles.header}>
        <Image
          source={require("../assets/app_head_bar.png")}
          style={styles.headerImage}
          resizeMode="cover"
        />
        <Text style={styles.headerTitle}>{course.title}</Text>
      </View>

      {/* Kurs Detayları */}
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Tamamlanma Durumu</Text>
        <Progress.Bar
          progress={course.progress}
          width={null}
          color="#4CAF50"
          style={styles.progressBar}
        />
        <Text style={styles.progressText}>{`${Math.round(
          course.progress * 100
        )}% Tamamlandı`}</Text>

        <Text style={styles.sectionTitle}>Kurs Açıklaması</Text>
        <Text style={styles.description}>
          Bu kurs, {course.title.toLowerCase()} alanında derinlemesine bilgi ve
          pratik beceri kazanmanızı sağlar.
        </Text>

        <Text style={styles.sectionTitle}>Kurs İçeriği</Text>
        <Text style={styles.details}>{course.details}</Text>

        {/* "Tümü Gör" Butonu */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => setShowAllCourses(!showAllCourses)}
        >
          <Text style={styles.buttonText}>Tümü Gör</Text>
        </TouchableOpacity>

        {/* Eğitimleri Listele */}
        {showAllCourses && (
          <FlatList
            data={courses}
            renderItem={renderCourseItem}
            keyExtractor={(item) => item.id}
            style={styles.courseList}
          />
        )}

        {/* Buton */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Kursa devam et")}
        >
          <Text style={styles.buttonText}>Kursa Devam Et</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  header: {
    position: "relative",
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  headerImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    zIndex: 1,
  },
  content: {
    flex: 1,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#4CAF50",
    marginBottom: 10,
    marginTop: 20,
  },
  progressBar: {
    marginVertical: 10,
  },
  progressText: {
    fontSize: 14,
    color: "#888",
  },
  description: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },
  details: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  courseList: {
    marginTop: 20,
  },
  courseItem: {
    marginBottom: 15,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default EducationDetail;
