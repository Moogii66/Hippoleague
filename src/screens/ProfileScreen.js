import React from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';

import {COLORS, FONTS, icons} from '../constants';
import {hp, wp} from '../constants/theme';
import {userData} from '../data/Players';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
      <View
        style={{
          width: wp(100),
          height: hp(10),
          borderColor: 'red',
          borderWidth: 1,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
          <Image source={icons.backBtn} style={styles.backBtn} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: wp(100),
          height: hp(30),
          borderColor: 'red',
          borderWidth: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            // width: wp(100),
            // height: hp(25),
            borderColor: 'red',
            borderWidth: 1,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          {userData.map(item => (
            <>
              {item.id === 1 && (
                <Image
                  source={item.image}
                  style={{
                    width: wp(26.6),
                    height: hp(12.3),
                    resizeMode: 'contain',
                    // borderRadius: wp(26.6),
                  }}
                />
              )}
            </>
          ))}
          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: 'red',
                borderWidth: 1,
              }}>
              <Text style={[{fontSize: RFPercentage(2.5)}, styles.profileText]}>
                Moogii
              </Text>
              <TouchableOpacity>
                <Image
                  source={icons.editBtn}
                  style={{
                    width: wp(7.53),
                    height: hp(6.09),
                    resizeMode: 'contain',
                    // borderRadius: wp(26.6),
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: 'red',
                borderWidth: 1,
              }}>
              <Text style={[{fontSize: RFPercentage(2)}, styles.profileText]}>
                Level
              </Text>
              {userData.map(item => (
                <>
                  {item.id === 1 && (
                    <Text style={styles.level}>{item.level}</Text>
                  )}
                </>
              ))}
            </View>
          </View>
        </View>
      </View>
      <Text>Profile Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  level: {
    fontFamily: FONTS.brandFont,
    color: COLORS.brand,
    fontSize: RFPercentage(2),
  },
  profileText: {
    fontFamily: FONTS.brandFont,
    color: COLORS.white,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  backBtn: {
    resizeMode: 'contain',
    width: wp(7.4),
    height: hp(3.09),
    borderColor: 'white',
  },
});

export default Profile;
