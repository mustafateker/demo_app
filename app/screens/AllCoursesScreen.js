import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AllCoursesScreen = () => {
  const allCourses = [
    {
      id: 1,
      title: "Dikey ve Topraksız Tarımı Öğrenmeye Başla",
      rating: "Değerlendirme (213)",
      image: require("../assets/app_background_fon.png"),
    },
    {
      id: 2,
      title: "Su Tankı Mineralleri Öğrenmeye Başla",
      rating: "Değerlendirme (172)",
      image: require("../assets/app_background_fon.png"),
    },
    {
      id: 3,
      title: "Yeni Başlayanlar için Organik Tarım",
      rating: "Değerlendirme (98)",
      image: require("../assets/app_background_fon.png"),
    },
    // Diğer kursları ekleyin
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headerTitle}>Tüm Eğitimler</Text>
        {allCourses.map((course) => (
          <View key={course.id} style={styles.courseCard}>
            <Image source={course.image} style={styles.courseImage} />
            <Text style={styles.courseTitle}>{course.title}</Text>
            <Text style={styles.courseRating}>{course.rating}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4CAF50",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 10, // Başlık ile üst kısımdaki boşluğu artırdık
  },
  courseCard: {
    marginBottom: 15, // Kartlar arasında daha fazla boşluk
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  courseImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  courseTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    padding: 10,
  },
  courseRating: {
    fontSize: 12,
    color: "#888",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

export default AllCoursesScreen;
