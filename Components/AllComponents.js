import React from 'react'
import {View,StyleSheet, Text, TextInput} from "react-native"

export default function AllComponents() {
  return (
    <View>
    <View style={styles.container}>
    <Text style={styles.Headrer}>Registration Form</Text>
   </View>
   <View style={styles.input}>
      <TextInput placeholder='First-Name' style={styles.text} placeholderTextColor="white"></TextInput>
   </View>
   <View style={styles.input}>
      <TextInput placeholder='Last-Name' style={styles.text} placeholderTextColor="white"></TextInput>
   </View>
   <View style={styles.input}>
      <TextInput placeholder='+91' style={styles.text} placeholderTextColor="white"></TextInput>
   </View>
   <View style={styles.input}>
      <TextInput placeholder='Email-Id' style={styles.text}  placeholderTextColor="white"></TextInput>
   </View>
   </View>
  )
}
const styles= StyleSheet.create({
 container:{
    flexDirection:"row",
    justifyContent:"center",
    padding:5,
 },
 Headrer:{
    fontSize:25,
    color:"white"
 },
 input:{
    marginTop:15,
    borderWidth:2,
    borderRadius:20,
    borderColor:"black"
 },
 text:{
    fontSize:15,
    color:"white",
   
 }
})
