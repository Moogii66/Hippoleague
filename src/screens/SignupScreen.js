import color from 'color';
import React from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  ImageBackground,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {icons, images, index, theme} from '../constants';
import {wp, hp, ft, FONTS, COLORS} from '../constants/theme';

const LoginScreen = ({navigation}) => {
  const [username, onChangeUsername] = React.useState('test@mail.com');
  const [password, onChangePassword] = React.useState('password');

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={images.backgroundImage}
        style={styles.backgroundImage}>
        <View style={{alignItems: 'center'}}>
          <View>
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
          <View style={styles.form}>
            <Text style={styles.text}>Enter your email for verify</Text>
            <View>
              <TextInput
                style={styles.input}
                // onChangeText={onChangeNumber}
                // value={number}
                placeholder="Email"
                keyboardType="numeric"
                placeholderTextColor={COLORS.purpleText}
              />
              <View
                style={{
                  height: hp(0.3),
                  width: wp(55.2),
                  backgroundColor: COLORS.purpleText,
                }}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  place: {
    fontFamily: FONTS.brandFont,
    color: 'red',
  },
  text: {
    fontFamily: FONTS.brandFont,
    color: COLORS.greyText,
    fontSize: RFPercentage(1.5),
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  form: {
    width: wp(72.53),
    height: hp(25),
    backgroundColor: '#00032580',
    borderRadius: 15,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    height: hp(4.21),
    width: wp(55.2),
    color: COLORS.white,
    fontFamily: FONTS.brandFont,
    fontSize: RFPercentage(1.5),
  },
});

export default LoginScreen;
