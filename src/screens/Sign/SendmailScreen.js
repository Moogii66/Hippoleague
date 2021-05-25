import color from 'color';
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  ImageBackground,
  TextBase,
  StatusBar,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {icons, images, index, theme} from '../../constants';
import {wp, hp, ft, FONTS, COLORS} from '../../constants/theme';
import FormInput from '../../components/FormInput';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SendmailScreen = ({navigation}) => {
  const [username, onChangeUsername] = React.useState('test@mail.com');
  const [password, onChangePassword] = React.useState('password');
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener('keyboardDidShow', _keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', _keyboardDidHide);
    };
  }, []);

  const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  const _keyboardDidShow = () => setKeyboardStatus('Keyboard Shown');
  const _keyboardDidHide = () => setKeyboardStatus('Keyboard Hidden');
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={images.backgroundImage}
        style={styles.backgroundImage}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar barStyle="light-content" />
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}>
            <View style={styles.inner}>
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
                <FormInput placeholder="Email" keyboardType="email-address" />
                <TouchableOpacity
                  onPress={() => navigation.navigate('CodeScreen')}>
                  <ImageBackground
                    source={images.button1}
                    style={{
                      width: wp(50),
                      height: hp(5.29),
                      // borderColor: 'white',
                      // borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: FONTS.brandFont,
                        color: COLORS.white,
                        paddingTop: hp(0.6),
                        margin: hp(1),
                      }}>
                      Send
                    </Text>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>
    </TouchableWithoutFeedback>
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
  container: {
    flex: 1,
  },
  inner: {
    justifyContent: 'space-around',
  },
  form: {
    width: wp(72.53),
    height: hp(30),
    backgroundColor: '#00032580',
    borderRadius: 15,
    justifyContent: 'space-evenly',
    paddingTop: hp(3),
    alignItems: 'center',
  },
});

export default SendmailScreen;
