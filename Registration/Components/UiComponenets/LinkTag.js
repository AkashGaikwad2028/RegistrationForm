import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import Colors from '../Ui/Color'
// import { Colors } from 'react-native/Libraries/NewAppScreen'
Colors

export default function LinkTag({children}) {
  return (
       <View  style={styles.spanContainer} onPress={Redirect}>
       <Text style={styles.span}>{children}</Text>
       </View>
      
  )
}

const styles =StyleSheet.create({
    span:{
        color:Colors.primary500
    },
    spanContainer:{
        marginTop:20,
        flexDirection:"row",
        justifyContent:"flex-end",
       
    }
})