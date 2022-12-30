import React, {useState} from 'react';
import Colors from '../Components/Ui/Color';
import {TextInput, View, StyleSheet, Text, ScrollView} from 'react-native';
import Titel from '../Components/UiComponenets/Titel';
import PrimaryButton from '../Components/UiComponenets/PrimaryButton';

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

  ChangefirstName = input => {
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
    setformErrors(Validate(formValues));
if(submit){
  navigation.navigate('LoginPage');
  };
  }


  const Validate = value => {
    console.log('click');
    const errors = {};
    const regex = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;
    console.log(value.firstname, 'validate');
    if (value.firstname.length < 3) {
      errors.firstname = 'Too-Short';
      Issubmit(false)
    }
    else{
      Issubmit(true)
    }
    if (value.Lastname.length < 7) {
      errors.Lastname = 'Too-Short';
      Issubmit(false)
    }
    else{
      Issubmit(true)
    }
    if (!regex.test(value.Email)) {
      errors.Email = 'please Enter Valid Email !';
      Issubmit(false)
    }
    else{
      Issubmit(true)
    }
    if (value.PhoneNumbner.length < 7) {
      errors.PhoneNumbner = 'Please Enter Valid Number';
      Issubmit(false)
    }
    else{
      Issubmit(true)
    }
    if (value.password.length < 7) {
      errors.password = 'Password is Too Short';
      Issubmit(false)
    }
    else{
      Issubmit(true)
    }
    if (value.password !== value.Confirmpassword) {
      errors.Confirmpassword = 'Enter Password is Not Match';
      Issubmit(false)
    }
    else{
      Issubmit(true)
    }
    return errors;
  };
  console.log("submit",submit,"108")
  // console.log(formErrors, 'Formerror');
 console.log("formValues.Confirmpassword",formValues.Confirmpassword,"formValues.password",formValues.password,formValues.password==formValues.Confirmpassword)

  return (
    <ScrollView>
      <View style={styles.container}>
        <Titel>Create Account</Titel>
        <View style={styles.view}>
          <TextInput
            placeholder="First-Name"
            style={styles.text}
            onChangeText={enteredText => ChangefirstName(enteredText)}
            name="firstname"
            value={formValues.firstname}></TextInput>
          {/* <Text style={styles.placeTag}>FirstName</Text> */}
          <Text style={styles.errors}>{formErrors.firstname}</Text>
        </View>
        <View style={styles.view}>
          <TextInput
            placeholder="Last-Name"
            style={styles.text}
            onChangeText={enteredText => ChangeLasttName(enteredText)}
            name="Lastname"
            value={formValues.Lastname}></TextInput>
          <Text style={styles.errors}>{formErrors.Lastname}</Text>
        </View>
        <View style={styles.view}>
          <TextInput
            placeholder="Email"
            type="email"
            style={styles.text}
            onChangeText={enteredText => ChangeEmail(enteredText)}
            name="Email"
            value={formValues.Email}></TextInput>
          <Text style={styles.errors}>{formErrors.Email}</Text>
        </View>
        <View style={styles.view}>
          <TextInput
            placeholder="Phone-Number"
            style={styles.text}
            keyboardType="number-pad"
            onChangeText={enteredText => ChangePhonenumber(enteredText)}
            name="PhoneNumbner"
            value={formValues.PhoneNumbner}></TextInput>
          <Text style={styles.errors}>{formErrors.Email}</Text>
        </View>
        <View style={styles.view}>
          <TextInput
            placeholder="Password"
            style={styles.text}
            onChangeText={enteredText => ChangePassword(enteredText)}
            name="PhoneNumbner"
            value={formValues.password}
            type="password"
            secureTextEntry={true}></TextInput>
          <Text style={styles.errors}>{formErrors.password}</Text>
        </View>
        <View style={styles.view}>
          <TextInput
            placeholder="Confirm-Password"
            style={styles.text}
            onChangeText={enteredText => ChangeCurrentPassword(enteredText)}
            name="PhoneNumbner"
            value={formValues.Confirmpassword}
            secureTextEntry={true}></TextInput>
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
    borderWidth: 2,
    borderColor: 'white',
    backgroundColor: 'white',
    borderRadius: 30,
    borderColor: Colors.primary500,
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
