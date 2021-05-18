import React, {useRef, version} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {icons, images, index, theme} from '../constants';
import {wp, hp, ft, FONTS, COLORS} from '../constants/theme';
import * as Animatable from 'react-native-animatable';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const StartScreen = ({navigation}) => {
  const rubberButton = useRef();
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={images.backgroundImage}
        style={styles.backgroundImage}>
        <View style={{alignItems: 'center'}}>
          <View style={{flex: 3}}>
            <Image
              source={images.banner}
              style={{
                resizeMode: 'contain',
                width: wp(74.66),
                height: hp(36.08),
                marginTop: hp(8),
                justifyContent: 'flex-start',
              }}
            />
          </View>

          <View style={{flex: 1}}>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => navigation.navigate('SignupScreen')}>
              <ImageBackground source={images.button} style={styles.button}>
                <Text style={styles.btnText}>SIGN UP</Text>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnContainer}
              onPress={() => navigation.navigate('LoginScreen')}>
              <ImageBackground source={images.button} style={styles.button}>
                <Text style={styles.btnText}>SIGN IN</Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  btnContainer: {
    width: wp(81.28),
    height: hp(9.719),
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontFamily: FONTS.brandFont,
    color: COLORS.white,
    marginTop: hp(1),
    fontSize: RFPercentage(1.8),
  },
});

export default StartScreen;
