import React, {useEffect, useState} from 'react';
import Colors from '../Components/Ui/Color';
import {TextInput, View, StyleSheet, Text, ScrollView,Alert} from 'react-native';
import Titel from '../Components/UiComponenets/Titel';
import PrimaryButton from '../Components/UiComponenets/PrimaryButton';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { SQLite } from 'react-native-sqlite-storage';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'UserDatabase.db' });

// import SQLite from 'react-native-sqlite-storage';

// const db = SQLite.openDatabase(
//     {
//         name: 'MainDB',
//         location: 'default',
//     },
//     () => { },
//     error => { console.log(error) }
// );

export default function RegistrationForm({navigation}) {
  const initiateValues = {
    firstname: '',
    Lastname: '',
    Email: '',
    PhoneNumbner: '',
    password: '',
    Confirmpassword: '',
  };

  const [formValues, setFormValues] = useState(initiateValues);
  const [formErrors, setformErrors] = useState('');
  const [submit,Issubmit]=useState(false)
  const [hasFocus, setFocus] = useState(false);
  const [Iseditable,setisEditabled]=useState(true)

const  ChangefirstName = input => {
    setFormValues(preValue => {
      return {
        ...preValue,
        firstname: input,
      };
    });
   
  };
  const  ChangeLasttName = input => {
    setFormValues(preValue => {
      return {
        ...preValue,
        Lastname: input,
      };
    });
  };
 const ChangeEmail = input => {
    setFormValues(preValue => {
      return {
        ...preValue,
        Email: input,
      };
    });
  };
  const ChangePhonenumber = input => {
    setFormValues(preValue => {
      return {
        ...preValue,
        PhoneNumbner: input,
      };
    });
  };
  const ChangePassword = input => {
    setFormValues(preValue => {
      return {
        ...preValue,
         password: input,
       };
    });
   };

   const ChangeCurrentPassword = input => {
     setFormValues(preValue => {
      return {
         ...preValue,
         Confirmpassword: input,
       };
     });
  };

  const HandelSubmit = () => {
    setformErrors(Validate(formValues))
    console.log("formerrorssssssss=>>>>>>>>>.",formErrors)
     if (formErrors.firstname || formErrors.Lastname || formErrors.password || formErrors.Email || formErrors.PhoneNumbner){
      navigation.navigate('Register');
     }
   else {
    navigation.navigate('LoginPage');
   }
setData()
  }

  useEffect(()=>{
    setformErrors(Validate(formValues))
  },[formValues])
  

  const Validate = value => {
    console.log('click');
    const errors = {};
    const regexemail = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;
    const firstNameRegex= /^[A-Za-z][A-Za-z]{1,30}$/;
    const phoneNumberRegex = /^[7-9]\d{9}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{4,6}$/;
    console.log(value.firstname, 'validate');

    if(value.firstname.length<1){ 
      errors.firstname = ' first Name Cant Be Empty';
    }
 else if(!firstNameRegex.test(value.firstname)){ 
      errors.firstname = 'Special Characters Not Allowed';
    }
 
   if(value.Lastname.length<1){ 
      errors.Lastname = ' Lastt Name Cant Be Empty';
    }

    else if(!firstNameRegex.test(value.Lastname)){ 
      errors.firstname = 'Special Characters Not Allowed';
    
    }
   
  if (value.Email.length<1) {
        errors.Email = 'please Enter Valid Email !';
       
      }
      else if(!regexemail.test(value.Email)){
        errors.Email = 'Special Characters Not Allowed';
      }
     
        if((value.PhoneNumbner.length<0)){
          errors.PhoneNumbner = 'Enter Number Is not acceptible';
         
        }
       else if(!phoneNumberRegex.test(value.PhoneNumbner)){
          errors.PhoneNumbner = 'Enter Number Is not acceptible';
         
        }
      // console.log(value.password.length)
     if (value.password.length < 1) {
        errors.password = 'Please Enter Valid Password'; 
      }
        else if (passwordRegex.test(value.password)) {
            errors.password = 'Password Must Be Valid';
       }
        
        if (value.Confirmpassword.length < 1) {
            errors.Confirmpassword = 'Please Enter Valid confirmPassword';
           
          }
          else if (value.password !== value.Confirmpassword) {
              errors.Confirmpassword = 'Enter Password is Not Match ';
            }
           
    return errors;
  };
  console.log("submit",submit,"108")

console.log("editabel->>>>>>>>>",Iseditable)

// useEffect(()=>{
//   createTable()
// },[])

useEffect(() => {
  db.transaction(function (txn) {
    txn.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
      [],
      function (tx, res) {
        console.log('item:', res.rows.length);
        if (res.rows.length == 0) {
          txn.executeSql('DROP TABLE IF EXISTS table_user', []);
          txn.executeSql(
            'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT,  PhoneNumbner INT(10), password VARCHAR(20))',
            []
          );
        } 
      }
    );
  });
}, []);

//  const storeData = async (input) => {
  // // console.log("input",input)
  // try {
  //   const jsonValue = JSON.stringify(input)
  //   console.log("jsonValue",jsonValue)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
  //   await AsyncStorage.setItem('@storage_Key', jsonValue)
  // }  
  // } catch (e) {
  //   console.log("error")
//   // }
// }

// const getData=()=>{
//   try {
    // AsyncStorage.getItem('UserData')
    //     .then(value => {
    //         if (value != null) {
    //             let user = JSON.parse(value);
    //             setName(user.Name);
    //             setAge(user.Age);
    //         }
    //     })
//     db.transaction((tx) => {
//         tx.executeSql(
//             "SELECT PhoneNumbner, password FROM Users",
//             [],
//             (tx, results) => {
//                 var len = results.rows.length;
//                 if (len > 0) {
//                     var userName = results.rows.item(0).PhoneNumbner;
//                     var userAge = results.rows.item(0). password;
//                     setName(userName);
//                     setAge(userAge);
//                 }
//             }
//         )
//     })
// } catch (error) {
//     console.log(error);
// }
// }

const setData=()=>{
console.log("userMail=>>>>>>.",formValues)
db.transaction(function (tx) {
  tx.executeSql(
    'INSERT INTO table_user (PhoneNumbner,password) VALUES (?,?)',
    [formValues.PhoneNumbner,formValues.password],
    (tx, results) => {
      console.log('Results', results.rowsAffected);
      if (results.rowsAffected > 0) {
        console.log(results);
        Alert.alert(
          'Success',
          'You are Resgistered Successfully',
          [
            {
              text: 'OK',
              onPress: () => navigation.navigate('LoginPage'),
            },
          ],
          {cancelable: false},
        );
      } else alert('Registration Failed');
    },
  )})
  console.log("userMail=>>>>>>249.",formValues.PhoneNumbner,formValues.password)
}


console.log("setData++=>>>>>>",formValues)
  return (
    <ScrollView>
      <View style={styles.container}>
        <Titel>Create Account</Titel>
        <View style={styles.view}>
          <TextInput
            placeholder="First-Name"
            style={[styles.text]}
            onChangeText={enteredText => ChangefirstName(enteredText)}
            name="firstname"
            value={formValues.firstname}
            ></TextInput>
          {/* <Text style={styles.placeTag}>FirstName</Text> */}
          <Text style={styles.errors}>{formErrors.firstname}</Text>
        </View>
        <View style={styles.view}>
          <TextInput
            placeholder="Last-Name"
            style={[styles.text]}
            onChangeText={enteredText => ChangeLasttName(enteredText)}
            name="Lastname"
            value={formValues.Lastname}
          
            ></TextInput>
          <Text style={styles.errors}>{formErrors.Lastname}</Text>
        </View>
         <View style={styles.view}>
          <TextInput
            placeholder="Email"
            type="email"
            style={[styles.text]}
            onChangeText={enteredText => ChangeEmail(enteredText)}
            name="Email"
            value={formValues.Email}
            // editable={formErrors.Lastname ? Iseditable:!Iseditable}
            ></TextInput>
          <Text style={styles.errors}>{formErrors.Email}</Text>
        </View>
        <View style={styles.view}>
          <TextInput
            placeholder="Phone-Number"
            style={[styles.text]}
            keyboardType="number-pad"
            onChangeText={enteredText => ChangePhonenumber(enteredText)}
            name="PhoneNumbner"
            value={formValues.PhoneNumbner}
            // editable={formErrors.Email ? Iseditable:!Iseditable}
            ></TextInput>
          <Text style={styles.errors}>{formErrors.PhoneNumbner}</Text>
        </View>
        <View style={styles.view}>
          <TextInput
            placeholder="Password"
            style={[styles.text]}
            onChangeText={enteredText => ChangePassword(enteredText)}
            name="PhoneNumbner"
            value={formValues.password}
            type="password"
            secureTextEntry={true}
            // editable={formErrors.PhoneNumbner ? Iseditable:!Iseditable}
            ></TextInput>
          <Text style={styles.errors}>{formErrors.password}</Text>
        </View>
        <View style={styles.view}>
          <TextInput
            placeholder="Confirm-Password"
            style={[styles.text]}
            onChangeText={enteredText => ChangeCurrentPassword(enteredText)}
            name="Confirm-Password"
            value={formValues.Confirmpassword}
            secureTextEntry={true}
            // editable={formErrors.password ? Iseditable:!Iseditable}
            ></TextInput>
          <Text style={styles.errors}>{formErrors.Confirmpassword}</Text>
        </View> 
      <PrimaryButton onSubmit={HandelSubmit}>Submit</PrimaryButton> 
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },

  text: {
    borderWidth: 3,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 30,
    borderColor:Colors.primary500,
    padding: 15,
    fontSize: 20,
    width: '100%', 
  },

  view: {
    marginBottom: 5,
    flexDirection: 'column',
    alignItems: 'center',
    padding: 5,
  },
  errors: {
    color: 'white',
    width: '100%',
    padding: 5,
    fontWeight: 'bold',
    fontSize: 15,
  },
});
