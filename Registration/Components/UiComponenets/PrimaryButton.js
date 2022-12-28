import React from 'react'
import {TouchableNativeFeedback, View,Text,StyleSheet, TouchableOpacity } from 'react-native'
import Colors from '../Ui/Color'

export default function PrimaryButton({children,onSubmit}) {
  return (
    <View>
   <TouchableOpacity  android_ripple={{color:"white"}}
     style={styles.ButtonContainer}
    //  onPress={onSubmit}
     onPress={onSubmit}
   >
    <Text style={styles.touch}>{children}</Text>
   </TouchableOpacity> 
    </View>
  )
}

const styles=StyleSheet.create({
    touch:{
        color:"white",
        padding:5,
        textAlign:'center',
        fontSize:25,
        shadowColor:Colors.primary500,
        shadowOffset: {width:5,height:5},
        shadowOpacity:25,
        elevation:20,
    },
    ButtonContainer:{
        marginTop:5,
        // flexDirection:"row",
    //   justifyContent:'center',
        padding:5,
        // flex:1,
        backgroundColor:Colors.primary500,
        borderRadius:30,
    },
})