import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Button,
  StatusBar,
  View,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log(['Width', windowWidth]);
console.log(['Height', windowHeight]);
const DashboardScreen = ({navigation}) => {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const [bodyText, setBodyText] = useState('This is not really a bird nest.');
  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  return (
    <View>
      <StatusBar
        translucent
        backgroundColor="#5E8D48"
        barStyle="light-content"
      />
      <View style={styles.AppBar}>
        <Button title="Back" onPress={() => navigation.pop()}></Button>
        <Text style={{color: 'white', paddingLeft: windowWidth / 2}}>
          qweqweqwe
        </Text>
      </View>
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
    </View>
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
  AppBar: {
    height: 100,
    backgroundColor: 'grey',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
});

export default DashboardScreen;
