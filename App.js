import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src/screens/Sign/LoginScreen';
import SendmailScreen from './src/screens/Sign/SendmailScreen';
import Tabs from './src/components/bottomTab';
import StartScreen from './src/screens/Sign/StartScreen';
import CodeScreen from './src/screens/Sign/CodeScreen';
import RegisterScreen from './src/screens/Sign/RegisterScreen';
import ParticipatesScreen from './src/screens/ParticipatesScreen';

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
        <Stack.Screen
          name="ParticipatesScreen"
          component={ParticipatesScreen}
        />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
