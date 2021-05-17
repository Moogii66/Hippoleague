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
} from 'react-native';
import {DATA} from './GameScreen';
import {Picker} from '@react-native-picker/picker';

const Schedule = ({navigation, route}) => {
  let itemID = 0;

  if (route.params?.itemId) {
    itemID = route.params.itemId;
  }

  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <SafeAreaView>
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
            {/* <Picker
              selectedValue={selectedValue}
              style={{height: 50, width: 150}}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label={DATA[0].title} value="0" />
              <Picker.Item label={DATA[1].title} value="1" />
              <Picker.Item label={DATA[2].title} value="2" />
            </Picker> */}
            {/* <View style={{width: 100, height: 100}}>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View> */}
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

export default Schedule;
