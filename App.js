import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import SendmailScreen from './src/screens/SendmailScreen';
import Tabs from './src/components/bottomTab';
import StartScreen from './src/screens/StartScreen';
import CodeScreen from './src/screens/CodeScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'StartScreen'}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SendmailScreen" component={SendmailScreen} />
        <Stack.Screen name="CodeScreen" component={CodeScreen} />
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
