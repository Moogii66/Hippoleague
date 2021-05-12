import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => (
  <View style={styles.container}>
    <SafeAreaView>
      <Text
        style={{
          paddingTop: 70,
          textAlign: 'center',
          fontFamily: 'SFProRounded-Bold',
          fontSize: 30,
        }}>
        HippoLeague
      </Text>
    </SafeAreaView>
    <ImageBackground
      source={require('./src/assets/images/soccer.jpeg')}
      style={styles.image}></ImageBackground>
    <View style={{width: 200, height: 100}}>
      <Text style={styles.text}>Soccer</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: 200,
    height: 100,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});

export default App;
