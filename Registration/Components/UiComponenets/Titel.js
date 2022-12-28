import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import Colors from '../Ui/Color'

export default function Titel({children}) {
  return (
  <View>
      <Text style={styles.TitelText}>{children}</Text>
  </View>
  )
}

const styles= StyleSheet.create({
 
    TitelText:{
        color:Colors.primary500,
        fontSize:35,
        textAlign:"center",
        marginBottom:25,
        fontWeight:"bold",
    }
})