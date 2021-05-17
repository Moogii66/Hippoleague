import React, {useState} from 'react';
import {Icon} from 'react-native-elements';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  View,
} from 'react-native';
import {icons, images, index, theme} from '../constants';
import {wp, hp, ft} from '../constants/theme';

export const DATA = [
  {
    id: '0',
    title: 'NBA 2K21',
    image: require('../assets/images/nba.png'),
  },
  {
    id: '1',
    title: 'FIFA 2021',
    image: require('../assets/images/fifa.png'),
  },
  {
    id: '2',
    title: 'Table Soccer',
    image: require('../assets/images/table.png'),
  },
];

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <View>
    <TouchableOpacity
      onPress={onPress}
      style={[[styles.item, backgroundColor], {borderRadius: 10}]}>
      <ImageBackground
        source={item.image}
        style={[styles.image, {marginTop: 0, width: 260, height: 340}]}
        imageStyle={{borderRadius: 0}}
      />
    </TouchableOpacity>
  </View>
);

const GameScreen = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() =>
          navigation.navigate('Schedule', {
            data: DATA,
            itemId: item.id,
          })
        }
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  return (
    <View>
      <SafeAreaView>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={{width: wp(33), paddingLeft: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 22,
              borderWidth: 1,
            }}>
            <Image
              source={icons.logOut}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
              }}
            />
            <Text style={{paddingLeft: 10, fontSize: 17}}>Log Out</Text>
          </View>
        </TouchableOpacity>
        <View>
          <Text
            style={{
              paddingTop: 30,
              paddingLeft: 20,
              fontFamily: 'SF Pro Rounded',
              fontWeight: '900',
              fontSize: 12,
              color: '#AAAAAA',
            }}>
            Өдрийн мэнд
          </Text>
          <Text
            style={{
              paddingLeft: 20,
              fontFamily: 'SF Pro Rounded',
              fontStyle: 'normal',
              fontWeight: '200',
              fontSize: 43,
              color: '#000000',
            }}>
            Мөөгий
          </Text>
        </View>
        <View>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
          />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    paddingLeft: 10,
    paddingRight: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default GameScreen;
