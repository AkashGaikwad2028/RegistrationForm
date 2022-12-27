import React from 'react'
import Colors from '../Components/Ui/Color'
import {TextInput,View,StyleSheet } from 'react-native'

export default function RegistrationForm() {
  return (
  <View>
   <View style={styles.view}>
    <TextInput placeholder='First-Name' style={styles.text}></TextInput>
   </View>
  </View>
  )
}

const styles=StyleSheet.create({
  text:{
    borderWidth:2,
    borderColor:"white",
    backgroundColor:"white",
    borderRadius:25,
    borderColor:Colors.primary500,
    shadowColor:Colors.primary500,
    shadowOffset: {width:0,height: 2},
    shadowOpacity:25,
    elevation:20,
    padding:15
},
  view:{
   width:"90%",
  //  backgroundColor:"red"
  }
})