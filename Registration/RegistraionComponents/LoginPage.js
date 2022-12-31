import React from 'react';
import {View, Image, StyleSheet, TextInput, Text, Alert} from 'react-native';
import Titel from '../Components/UiComponenets/Titel';
import Colors from '../Components/Ui/Color';
import PrimaryButton from '../Components/UiComponenets/PrimaryButton';
import LinkTag from '../Components/UiComponenets/LinkTag';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginPage({navigation}) {
  const initiateValues = {
    phoneNumbner: '',
    password: '',
  };
  const [change, setChange] = React.useState(initiateValues);
  const [formError,setformError]=React.useState('')

  ChangePhoneNumber = input => {
    setChange(preValue => {
      return {
        ...preValue,
        phoneNumbner: input,
      };
    });
  };

  ChangePassword= input => {
    setChange(preValue => {
      return {
        ...preValue,
        password: input,
      };
    });
  };


  const Validate=(value)=>{
// console.log(value)
    const errors={}

if (value.phoneNumbner.length<1){
  errors.phoneNumbner="This too short"
}
if (value.password.length<1){
  errors.password="This too short"
}
return errors
  }

  const HandelLogin = () => {
    setformError(Validate(change))
     getData().then((res)=>{
      console.log("resssssssss",res)
      let userData = res
        console.log("userData------------",userData.PhoneNumbner)
        if((userData.PhoneNumbner===change.phoneNumbner && userData.password===change.password)){
          navigation.navigate('Successful');
        }
        else{
          Alert.alert(
            "Alert",
            "Yov Have Enter Invalid Inputs",
            [
              { text: "OKay", onPress: () => "" }
            ]
          )
        }
      })
    
  }
   
  
  // console.log(change,"kdjjjjjjjjjjjjjjjjjjjjjjjj")
console.log("formerror",formError)
  

  const HandelLink = () => {
    navigation.navigate('Register');
  };

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      console.log("jsonValue--33",jsonValue)  
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
    // console.log("number",jsonValue.phneNumber)
  }
// console.log("getdata",getData())  
  



  return (
    <View style={styles.container}>
      <Titel>Get-Started</Titel>
      <View style={styles.ImageContainer}>
        <Image source={require('../../Image/Login.jpg')} style={styles.img} />
      </View>
      <View style={styles.SubContainer}>
        <View>
        <TextInput
          placeholder="+91"
          style={styles.input}
          keyboardType="number-pad"
          onChangeText={enteredText => ChangePhoneNumber(enteredText)}
          value={change.phoneNumbner}></TextInput>
            <Text style={styles.Text}>{formError.phoneNumbner}</Text>
            </View>
            <View>
          <TextInput
          placeholder="password"
          style={styles.input}
          onChangeText={enteredText => ChangePassword(enteredText)}
          value={change.password}></TextInput>
         <Text style={styles.Text}>{formError.password}</Text>
         </View>
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
    // marginBottom:25
  },
  SubContainer: {
    marginTop: 20,
    flexDirection:"column",
    justifyContent:"space-between"
  },
  Text:{
    color:"white",
    marginBottom:15,
    marginHorizontal:5,
    fontWeight:"bold"
  }
});
