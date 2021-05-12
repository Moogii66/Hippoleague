import * as React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Touchable,
  TouchableOpacity,
} from 'react-native';

// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
//import 'react-native-gesture-handler';
//const Stack = createStackNavigator();

const App = () => (
  <View style={styles.container}>
    <SafeAreaView>
      <Text
        style={{
          paddingTop: 70,
          textAlign: 'center',
          fontFamily: 'PressStart2P-Regular',
          fontSize: 20,
          color: 'white',
        }}>
        HIPPOLEAGUE
      </Text>
    </SafeAreaView>

    <TouchableOpacity style={{alignItems: 'center'}}>
      <ImageBackground
        source={require('./src/assets/images/soccer.jpeg')}
        style={[styles.image, {marginTop: 50}]}
        imageStyle={{borderRadius: 15}}></ImageBackground>
      <Text style={styles.text}>Soccer</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{alignItems: 'center'}}>
      <ImageBackground
        source={require('./src/assets/images/2k21.jpg')}
        style={[styles.image, {marginTop: 20}]}
        imageStyle={{borderRadius: 15}}></ImageBackground>
      <Text style={[styles.text]}>2k21</Text>
    </TouchableOpacity>

    <TouchableOpacity style={{alignItems: 'center'}}>
      <ImageBackground
        source={require('./src/assets/images/fifa.png')}
        style={[styles.image, {marginTop: 20}]}
        imageStyle={{borderRadius: 15}}></ImageBackground>
      <Text style={styles.text}>FIFA</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'gray',
  },
  image: {
    // borderWidth:1,
    // borderRadius:10,
    width: 200,
    height: 100,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
