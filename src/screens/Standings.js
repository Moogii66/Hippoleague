import React from 'react';
import {Text, SafeAreaView, TextInput, StyleSheet, Button} from 'react-native';

const Standings = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Standings Screen</Text>
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

export default Standings;
