import React, {useState} from 'react';
import {Text, StyleSheet, SafeAreaView, Pressable, Button} from 'react-native';

const DashboardScreen = ({navigation}) => {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const [bodyText, setBodyText] = useState('This is not really a bird nest.');
  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  return (
    <SafeAreaView>
      <Button title="Back" onPress={() => navigation.pop()}></Button>
      <Text style={styles.baseText}>
        <Pressable onPress={onPressTitle}>
          <Text style={styles.titleText}>
            {titleText}
            {'\n'}
            {'\n'}
          </Text>
        </Pressable>
        <Text numberOfLines={5}>{bodyText}</Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default DashboardScreen;
