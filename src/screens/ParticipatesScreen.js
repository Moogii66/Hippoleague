import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
  Image,
  View,
  TouchableOpacity,
  Touchable,
  Modal,
  TextBase,
} from 'react-native';
import {DATA} from './GameScreen';
import AppBar from '../components/AppBar';
import {COLORS, FONTS, icons} from '../constants';
import GamePicker from '../components/GamePicker';
import {hp, wp} from '../constants/theme';
import color from 'color';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const ParticipatesScreen = ({navigation, route}) => {
  let itemID = 0;

  if (route.params?.itemId) {
    itemID = route.params.itemId;
  }
  const [inLeague, setInLeague] = useState(false);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
      <AppBar />
      <View
        style={{
          width: wp(100),
          height: hp(7),
          backgroundColor: 'red',
          flexDirection: 'row',
          justifyContent:
        }}>
        <Image
          source={icons.backBtn}
          style={{
            resizeMode: 'contain',
            width: wp(7.4),
            height: hp(3.09),
            borderColor: 'white',
            borderWidth: 1,
          }}
        />
        <TouchableOpacity
          style={[
            {
              backgroundColor: !inLeague ? COLORS.green : COLORS.red,
            },
            styles.btnContainer,
          ]}>
          <Text
            style={{
              fontFamily: FONTS.brandFont,
              fontSize: RFPercentage(1.7),
              color: COLORS.white,
            }}>
            {!inLeague ? "I'am in" : "I'am out"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    width: wp(31),
    height: hp(4.55),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ParticipatesScreen;
