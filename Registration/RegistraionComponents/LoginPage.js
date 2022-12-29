import React from 'react';
import {View, Image, StyleSheet, TextInput, Alert} from 'react-native';
import Titel from '../Components/UiComponenets/Titel';
import Colors from '../Components/Ui/Color';
import PrimaryButton from '../Components/UiComponenets/PrimaryButton';
import LinkTag from '../Components/UiComponenets/LinkTag';


export default function LoginPage({navigation}) {
  const [change, setChange] = React.useState();

  const HandelChange = userValue => {
    //   console.log("userValue",userValue)
    setChange(userValue);
  };

  const HandelLogin = () => {
    setChange('');
    if (change.length < 11) {
      Alert.alert('Invalid number!', 'Please Enter A Valid Number.', [
        {text: 'Okay', style: 'destructive', onPress: ''},
      ]);
    }
  };

  const HandelLink = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Titel>Get-Started</Titel>
      <View style={styles.ImageContainer}>
        <Image source={require('../../Image/Login.jpg')} style={styles.img} />
      </View>
      <View style={styles.SubContainer}>
        <TextInput
          placeholder="+91"
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={HandelChange}
          value={change}></TextInput>
      </View>
      <View>
        <PrimaryButton onSubmit={HandelLogin}>Log-In</PrimaryButton>
        <LinkTag title="Register" onPress={HandelLink}>
          If You Are New ?
        </LinkTag>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // margin:15,
    padding: 15,
    // marginTop:50,
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },

  ImageContainer: {
    backgroundColor: 'white',
    borderRadius: 300,
    borderWidth: 5,
    overflow: 'hidden',
    width: 300,
    height: 300,
    marginHorizontal: '8%',
    // borderBottomColor:Colors.primary500,
    // borderRightColor:"red",
    // borderLeftColor:"red",
    // borderTopColor:Colors.primary500,
    borderColor: Colors.primary500,
    shadowColor: Colors.primary500,
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0,
    elevation: 5,
  },
  img: {
    width: '100%',
    height: '100%',
  },
  input: {
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 25,
    borderColor: Colors.primary500,
    shadowColor: Colors.primary500,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 25,
    elevation: 20,
    padding: 15,
  },
  SubContainer: {
    marginTop: 20,
  },
});
