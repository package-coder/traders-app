import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text } from 'react-native';
import LoginScreen from './src/screens/LoginScreen.jsx'
import HomeScreen from './src/screens/HomeScreen.jsx'
import 'expo-dev-client'

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useAuth from './src/hooks/useAuth.js';

const Stack = createNativeStackNavigator();

export default function App() {

  const { loading, user } = useAuth()

  if(loading) return <Text>Loading...</Text>

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ headerShown: false }}
        initialRouteName='Login'
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name='Home' component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
