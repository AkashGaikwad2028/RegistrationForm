import React, {useEffect, useState} from 'react';
import Colors from '../Components/Ui/Color';
import {TextInput, View, StyleSheet, Text, ScrollView,Alert} from 'react-native';
import Titel from '../Components/UiComponenets/Titel';
import PrimaryButton from '../Components/UiComponenets/PrimaryButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  ChangefirstName = input => {
    setisEditabled(!Iseditable)
    setFormValues(preValue => {
      return {
        ...preValue,
        firstname: input,
      };
    });
  };
   ChangeLasttName = input => {
  
    setFormValues(preValue => {
      return {
        ...preValue,
        Lastname: input,
      };
    });
  };
  ChangeEmail = input => {
    setFormValues(preValue => {
      return {
        ...preValue,
        Email: input,
      };
    });
  };
  ChangePhonenumber = input => {
    setFormValues(preValue => {
      return {
        ...preValue,
        PhoneNumbner: input,
      };
    });
  };
  ChangePassword = input => {
    setFormValues(preValue => {
      return {
        ...preValue,
         password: input,
       };
    });
   };

   ChangeCurrentPassword = input => {
     setFormValues(preValue => {
      return {
         ...preValue,
         Confirmpassword: input,
       };
     });
  };

  const HandelSubmit = () => {
    console.log("formerrorssssssss=>>>>>>>>>.",formErrors)
     if (formErrors.firstname || formErrors.Lastname || formErrors.password || formErrors.Email || formErrors.PhoneNumbner){
      navigation.navigate('Register');
     }
   else {
    storeData(formValues)
    navigation.navigate('LoginPage');
   }
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

    if (value.firstname.length<1) {
      errors.firstname = ' First Name Cant Be Empty'
   
    }
      else if(!firstNameRegex.test(value.firstname)){ 
      errors.firstname = 'Special Characters Not Allowed';
    
    }
 
    if (value.Lastname.length<1) {
      errors.Lastname=' Last Name Cant Be Empty';
     
    }
    else  if(!firstNameRegex.test(value.Lastname)){ 
      errors.Lastname = 'Special Characters Not Allowed';
    
    }
   
     if (value.Email.length<1) {
        errors.Email = 'please Enter Valid Email !';
       
      }
      else if(!regexemail.test(value.Email)){
        errors.Email = 'Special Characters Not Allowed';
      }
     
     if(!phoneNumberRegex.test(value.PhoneNumbner)){
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
  // console.log(formErrors, 'Formerror');
//  console.log("formValues.Confirmpassword",formValues.Confirmpassword,"formValues.password",formValues.password,formValues.password==formValues.Confirmpassword)

 const storeData = async (input) => {
  console.log("input",input)
  try {
    const jsonValue = JSON.stringify(input)
    console.log("jsonValue",jsonValue)
    await AsyncStorage.setItem('@storage_Key', jsonValue)
  } catch (e) {
    console.log("error")
  }
}
// console.log( console.log("input-143",formValues))
console.log( "storeData", storeData(formValues))

// console.log( console.log("input-143",formValues))

console.log("focusssssssssss=>>>>>>",hasFocus)

console.log("is editabel=>>>>>>>",Iseditable)
console.log("formErrors",formErrors)


console.log((formErrors.firstname)?Iseditable:!Iseditable,"firstname")
console.log((formErrors.Lastname)?Iseditable:!Iseditable,"lastname")
console.log((formErrors.Email)?Iseditable:!Iseditable,"firstname")

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
            value={formValues.firstname}></TextInput>
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
            editable= {(formErrors.firstname)?Iseditable:!Iseditable}
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
            editable= {(formErrors.Lastname)?Iseditable:!Iseditable}
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
            editable= {(formErrors.Email)?Iseditable:!Iseditable}
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
            editable= {(formErrors.PhoneNumbner)?Iseditable:!Iseditable}
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
            editable= {(formErrors.password)?Iseditable:!Iseditable}
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
  // placeTag:{
  //   color:Colors.primary500,
  //   position:"relative",
  //   bottom:"87%",
  //   left:"-35%",
  //   fontWeight:'bold',
  //   fontSize:12
  // },
  errors: {
    color: 'white',
    width: '100%',
    padding: 5,
    fontWeight: 'bold',
    fontSize: 15,
  },
});


// if (value.Lastname.length < 7) {
//   errors.Lastname = 'Too-Short';
//   Issubmit(false)
// }
// else{
//   Issubmit(true)
// }
// if (!regex.test(value.Email)) {
//   errors.Email = 'please Enter Valid Email !';
//   Issubmit(false)
// }
// else{
//   Issubmit(true) 
// }
// if (value.PhoneNumbner.length < 7) {
//   errors.PhoneNumbner = 'Please Enter valid Number';
//   Issubmit(false)
// }
// else{
//   Issubmit(true)
// }
// if (value.password.length < 7) {
//   errors.password = 'Password is Too Short';
//   Issubmit(false)
// }
// else{
//   Issubmit(true)
// }
// if (value.password !== value.Confirmpassword) {
//   errors.Confirmpassword = 'Enter Password is Not Match ';
//   Issubmit(false)
// }
// else{
//   Issubmit(true)
// }