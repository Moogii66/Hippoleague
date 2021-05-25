import React from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  View,
} from 'react-native';
import {COLORS} from '../constants';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
      <View></View>
      <Text>Profile Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default Profile;
