import React, { useEffect, useState } from 'react';
import {View, Image, StyleSheet, TextInput, Text, Alert,KeyboardAvoidingView} from 'react-native';
import Titel from '../Components/UiComponenets/Titel';
import Colors from '../Components/Ui/Color';
import PrimaryButton from '../Components/UiComponenets/PrimaryButton';
import LinkTag from '../Components/UiComponenets/LinkTag';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SQLite } from 'react-native-sqlite-storage';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

export default function LoginPage({navigation}) {
  const initiateValues = {
    phoneNumbner: '',
    password: '',
  };
  const [change, setChange] = React.useState(initiateValues);
  const [formError,setformError]=React.useState('')
  const [userData,setUserData]=useState(null)

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

  // console.log("change=>>>",change.phoneNumbner)

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
console.log()
  const HandelLogin = () => {
    setformError(Validate(change))
    getUser()
    navigation.navigate("Successful")
  
    //  getData().then((res)=>{
    //   console.log("resssssssss",res)
    //   let userData = res
    //     console.log("userData------------",userData.PhoneNumbner)
    //     if((userData.PhoneNumbner===change.phoneNumbner && userData.password===change.password)){
    //       navigation.navigate('Successful');
    //     }
    //     else{
    //       Alert.alert(
    //         "Alert",
    //         "Yov Have Enter Invalid Inputs",
    //         [
    //           { text: "OKay", onPress: () => "" }
    //         ]
    //       )
    //     }
    //   })
    
  }
   
 

  // console.log("refoormmmmm",userData.phoneNumbner)
  
  // console.log(change,"kdjjjjjjjjjjjjjjjjjjjjjjjj")
// console.log("formerror",(change.phoneNumbner!=userData.phoneNumbner) || (change.password!=userData.password))
  

  const HandelLink = () => {
    navigation.navigate('Register');
  };

//   const getData = async () => {
//     try {
//       // const jsonValue = await AsyncStorage.getItem('@storage_Key')
//       // console.log("jsonValue--33",jsonValue)  
//       // return jsonValue != null ? JSON.parse(jsonValue) : null;
//     db.transaction((tx)=>{
//       tx.executeSql(
//         "SELECT Phonenumber, password FROM User",
//         [],
//         (tx,results)=>{
//           var len = results.rows.length;
//           if(len>0){
//             navigation.navigate('Successful');  
//           }
//         }
//       )
//     })
//     } catch(e) {
//       // error reading value
//     }
//     // console.log("number",jsonValue.phneNumber)
//   }
// // console.log("getdata",getData())  
  
// const getData = () => {
//   try {
//       // AsyncStorage.getItem('UserData')
//       //     .then(value => {
//       //         if (value != null) {
//       //             let user = JSON.parse(value);
//       //             setName(user.Name);
//       //             setAge(user.Age);
//       //         }
//       //     })
//       db.transaction((tx) => {
//           tx.executeSql(
//               "SELECT Name, Age FROM Users",
//               [],
//               (tx, results) => {
//                   var len = results.rows.length;
//                   if (len > 0) {
//                       var userName = results.rows.item(0).Name;
//                       var userAge = results.rows.item(0).Age;
//                       setChange(userName);
//                       setChange(userAge);
//                   }
//               }
//           )
//       })
//   } catch (error) {
//       console.log(error);
//   }
// }

// useEffect(()=>{
//   getUser()
// },[])

// useEffect(() => {
//   db.transaction(function (txn) {
//     txn.executeSql(
//       "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
//       [],
//       function (tx, res) {
//         console.log('item:', res.rows.length);
//         if (res.rows.length == 0) {
//           txn.executeSql('DROP TABLE IF EXISTS table_user', []);
//           txn.executeSql(
//             'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT,  PhoneNumbner INT(10), password VARCHAR(20))',
//             []
//           );
//         }
//       }
//     );
//   });
// }, []);

let getUser = (input) => {
 console.log("changeeeeeeeeeee=>>>>>>>",input)
  try {
   db.transaction( tx => {
   tx.executeSql('SELECT * FROM table_user',[], (tx, results) => {
        var len = results.rows.length;
        console.log('len', len);
        if (len> 0) {
         setUserData(results.rows.item(0));
          console.log('setUserData :',results.rows.item(0));
        }
        else {
          alert('No user found');
        }
      });
    });
  } catch (e) {
    console.log(e);
  }
};



console.log("userData",userData)
  return (
    <KeyboardAvoidingView style={styles.container}>
    <View>
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
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    // margin:15,
    flex:1,
    padding: 15,
    // marginTop:50,
    backgroundColor: 'black',
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
