import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, SafeAreaView } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './app/screens/LoginScreen'

const Stack = createStackNavigator();



export default function App() {

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome"
        component={WelcomeScreen}
        options={{headerShown:false,title:'Welcome'}} 
        />
        <Stack.Screen 
        name="Login" 
        component={LoginScreen}
        options={{headerShown :false, tittle:'Login'}} />
      </Stack.Navigator>
    </NavigationContainer>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems :"center",
  },
});
