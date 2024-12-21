import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './app/screens/WelcomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ProfileScreen from './app/screens/ProfileScreen'; 
import NotificationScreen from './app/screens/NotificationScreen';
import SearchScreen from './app/screens/SearchScreen';
import TasksScreen from './app/screens/TasksScreen';
import SiribotScreen from './app/screens/SiribotScreen';
import ForgetPasswordScreen from './app/screens/ForgetPasswordScreen';
import ConcatScreen  from './app/screens/ConcatScreen';
import PersonalScreen from './app/screens/PersonalScreen';
import ChangePasswordScreen from './app/screens/ChangePasswordScreen';
import SecurityScreen from './app/screens/SecurityScreen';
import AccountManagementScreen from './app/screens/AccountManagementScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* WelcomeScreen */}
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false, title: 'WelcomeScreen' }} 
        />

        {/* LoginScreen */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false, title: 'LoginScreen' }} 
        />

        {/* RegisterScreen */}
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen} 
          options={{ headerShown: false, title: 'Register' }} 
        />

        {/* ProfileScreen */}
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ headerShown: false, title: 'Profile' }} 
        />

      <Stack.Screen
          name="Notifications"
          component={NotificationScreen}
          options={{ headerShown: false ,title: 'Bildirimler' }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false ,title: 'Uygulama İçinde Ara' }}
        />
        <Stack.Screen
          name="Tasks"
          component={TasksScreen}
          options={{ headerShown: false ,title: 'Görevlerim' }}
        />
        <Stack.Screen
          name="Siribot"
          component={SiribotScreen}
          options={{ headerShown: false ,title: 'Siribot Ekranım' }}
        />
        <Stack.Screen
          name="Password"
          component={ForgetPasswordScreen}
          options={{ headerShown: false ,title: 'Parolamı Unuttum' }}
        />
        <Stack.Screen
          name="Concat"
          component={ConcatScreen}
          options={{ headerShown: false ,title: 'İletişim Bilgileri' }}
        />
          <Stack.Screen
          name="Personal"
          component={PersonalScreen}
          options={{ headerShown: false ,title: 'Kişisel Bilgiler' }}
        />
          <Stack.Screen
          name="ChangePassword"
          component={ChangePasswordScreen}
          options={{ headerShown: false ,title: 'Parola Değiştir' }}
        />
        
          <Stack.Screen
          name="Security"
          component={SecurityScreen}
          options={{ headerShown: false ,title: 'Güvenlik' }}
        />
        
        <Stack.Screen
          name="AccountManagement"
          component={AccountManagementScreen}
          options={{ headerShown: false ,title: 'Hesapaları Yönet' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
