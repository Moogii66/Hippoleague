import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import GameScreen from '../screens/GameScreen';
import Schedule from '../screens/Schedule';
import Standings from '../screens/Standings';
import Profile from '../screens/Profile';
import {Image, View, Text} from 'react-native';
import {icons, images, index, theme} from '../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
          height: 90,
          shadowColor: '#e32f45',
          shadowOffset: {width: 0, height: 10},
          shadowOpacity: 0.25,
          shadowRadius: 3.5,
          elevation: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={GameScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={focused ? icons.TabHome1_a : icons.TabHome1}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={focused ? icons.TabHome2_a : icons.TabHome2}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                Schedule
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Standings"
        component={Standings}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={focused ? icons.TabHome3_a : icons.TabHome3}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                Standings
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image
                source={focused ? icons.TabHome4_a : icons.TabHome4}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#748c94',
                }}
              />
              <Text
                style={{color: focused ? '#e32f45' : '#748c94', fontSize: 12}}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default Tabs;
