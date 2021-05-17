import React from 'react';
import {Text, SafeAreaView, TextInput, StyleSheet, Button} from 'react-native';

const LoginScreen = ({navigation}) => {
  const [username, onChangeUsername] = React.useState('test@mail.com');
  const [password, onChangePassword] = React.useState('password');
  return (
    <SafeAreaView style={{marginTop: 200}}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate('Tabs')}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default LoginScreen;
