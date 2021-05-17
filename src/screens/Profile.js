import React from 'react';
import {Text, SafeAreaView, TextInput, StyleSheet, Button} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView>
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
