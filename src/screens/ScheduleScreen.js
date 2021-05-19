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
} from 'react-native';
import {DATA} from './GameScreen';
import AppBar from '../components/AppBar';
import {COLORS, FONTS, icons} from '../constants';
import GamePicker from '../components/GamePicker';
import {hp, wp} from '../constants/theme';

const ScheduleScreen = ({navigation, route}) => {
  let itemID = 0;

  if (route.params?.itemId) {
    itemID = route.params.itemId;
  }

  const [chooseData, setChooseData] = useState('Table Soccer');
  const [modalVisible, setModalVisible] = useState(false);
  const changeModalVisible = bool => {
    setModalVisible(bool);
  };

  const setData = option => {
    setChooseData(option);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>
      <AppBar />
      <TouchableOpacity
        onPress={() => changeModalVisible(true)}
        style={{
          height: hp(4),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: wp(3),
        }}>
        <Text style={{fontFamily: FONTS.brandFont, color: COLORS.white}}>
          {chooseData}
        </Text>
        <Image
          source={icons.drop}
          style={{resizeMode: 'contain', height: hp(1.7), width: wp(4.53)}}
        />
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType="fade"
        visible={modalVisible}
        nRequestClose={() => changeModalVisible(false)}>
        <GamePicker changeModalVisible={changeModalVisible} setData={setData} />
      </Modal>
      {DATA.length > 0 && (
        <>
          <View
            style={{
              flexDirection: 'row',
              height: 50,
            }}>
            <TouchableOpacity style={{flex: 1}}>
              {DATA.length > 0 && (
                <View
                  style={[
                    styles.appBar,
                    {
                      backgroundColor:
                        itemID == DATA[0].id ? '#F74C11' : 'white',
                    },
                  ]}>
                  <Text
                    style={[
                      styles.textStyle,
                      {
                        color: itemID == DATA[0].id ? 'white' : '#A8A8A8',
                      },
                    ]}>
                    {DATA[0].title}
                  </Text>
                </View>
              )}
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1}}>
              <View
                style={[
                  styles.appBar,
                  {
                    backgroundColor: itemID == DATA[1].id ? '#F74C11' : 'white',
                  },
                ]}>
                <Text
                  style={[
                    styles.textStyle,
                    {
                      color: itemID == DATA[1].id ? 'white' : '#A8A8A8',
                    },
                  ]}>
                  {DATA[1].title}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 1}}>
              <View
                style={[
                  styles.appBar,
                  {
                    backgroundColor: itemID == DATA[2].id ? '#F74C11' : 'white',
                  },
                ]}>
                <Text
                  style={[
                    styles.textStyle,
                    {
                      color: itemID == DATA[2].id ? 'white' : '#A8A8A8',
                    },
                  ]}>
                  {DATA[2].title}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text>Schedule Screen</Text>
          <Text>Item ID: {itemID}</Text>
          <Image
            source={DATA[itemID].image}
            style={{width: 100, height: 100}}
          />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  appBar: {
    borderWidth: 1,
    borderColor: '#F74C11',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontFamily: 'PressStart2P-Regular',
    fontWeight: '800',
    fontSize: 15,
  },
});

export default ScheduleScreen;
