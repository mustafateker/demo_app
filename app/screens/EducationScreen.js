import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';

const EducationScreen = () => {
  const ongoingCourses = [
    {
      id: 1,
      title: 'Kapsamlı Bitki Bilimi ve Botanik Eğitimi',
      progress: 0.6,
      details: '30 Video · 3 Dosya · 25 Quiz',
      icon: require('../assets/iconleaf.png'),
    },
    {
      id: 2,
      title: 'İleri Toprak ve Mineral Bilimi',
      progress: 0.4,
      details: '20 Video · 2 Dosya · 15 Quiz',
      icon: require('../assets/iconleaf.png'),
    },
    {
      id: 3,
      title: 'Organik Tarım ve Uygulamaları',
      progress: 0.8,
      details: '25 Video · 4 Dosya · 10 Quiz',
      icon: require('../assets/iconleaf.png'),
    },
  ];

  const courses = [
    {
      id: 1,
      title: 'Dikey ve Topraksız Tarımı Öğrenmeye Başla',
      rating: 'Değerlendirme (213)',
      image: require('../assets/app_background_fon.png'),
    },
    {
      id: 2,
      title: 'Su Tankı Mineralleri Öğrenmeye Başla',
      rating: 'Değerlendirme (172)',
      image: require('../assets/app_background_fon.png'),
    },
    {
      id: 3,
      title: 'Yeni Başlayanlar için Organik Tarım',
      rating: 'Değerlendirme (98)',
      image: require('../assets/app_background_fon.png'),
    },
  ];

  const handleCourseClick = (courseTitle) => {
    
  };

  return (
    <ScrollView style={styles.container}>
      {/* Başlık */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Eğitimler</Text>
      </View>

      {/* Devam Eden Eğitimler */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Devam Eden Eğitimler</Text>
        <Text style={styles.subTitle}>3 Devam eden eğitim</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {ongoingCourses.map((course) => (
            <View key={course.id} style={styles.card}>
              <View style={styles.cardHeader}>
                <Image source={course.icon} style={styles.icon} />
                <Text style={styles.cardTitle}>{course.title}</Text>
              </View>
              <Progress.Bar progress={course.progress} width={200} color="#fff" style={styles.progressBar} />
              <View style={styles.cardFooter}>
                <Text style={styles.continueText}>Eğitime devam et...</Text>
                <Text style={styles.percentageText}>{`${Math.round(course.progress * 100)}% Tamamlandı`}</Text>
              </View>
              <Text style={styles.detailsText}>{course.details}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Eğitimler */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Eğitimler</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {courses.map((course) => (
            <TouchableOpacity
              key={course.id}
              style={styles.courseCard}
              onPress={() => handleCourseClick(course.title)}
            >
              <Image source={course.image} style={styles.courseImage} />
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseRating}>{course.rating}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
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
    paddingTop: 30,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  section: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#4CAF50',
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    width: 250,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  progressBar: {
    marginVertical: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  continueText: {
    fontSize: 14,
    color: '#fff',
  },
  percentageText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  detailsText: {
    fontSize: 12,
    color: '#fff',
    marginTop: 5,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewAll: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  horizontalScroll: {
    marginTop: 15,
  },
  courseCard: {
    width: 200,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  courseImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  courseTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    padding: 10,
  },
  courseRating: {
    fontSize: 12,
    color: '#888',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

export default EducationScreen;