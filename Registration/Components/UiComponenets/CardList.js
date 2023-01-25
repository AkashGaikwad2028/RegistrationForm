import React from 'react'
import {View,Text,StyleSheet, PermissionsAndroid} from "react-native"
export default function CardList() {
  return (
   <View style={styles.MaincardContainer}>
    <View style={styles.ImageCardContainer}>
        <Text>ThumBNailUrl</Text>
    </View>
    <View>
      <View style={styles.CardDescription}>
        <Text style={styles.Text}>Name :-</Text>
        <Text style={styles.Text}>Tony Stark</Text>
      </View>
      <View style={styles.CardDescription}>
        <Text style={styles.Text}>Name :-</Text>
        <Text style={styles.Text}>Tony Stark</Text>
      </View>
      <View style={styles.CardDescription}>
        <Text style={styles.Text}>Name :-</Text>
        <Text style={styles.Text}>Tony Stark</Text>
      </View>
      <View style={styles.CardDescription}>
        <Text style={styles.Text}>Name :-</Text>
        <Text style={styles.Text}>Tony Stark</Text>
      </View>
      </View>
   </View>
  )
}

const styles= StyleSheet.create({
MaincardContainer:{
    backgroundColor:'white',
    flexDirection:"row",
    paddingVertical:30,
    marginTop:10,
    borderRadius:5,
    shadowColor: '#171717',
    shadowOffset: {width: -10, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    width:"90%",
marginHorizontal:20
},

ImageCardContainer:{
    backgroundColor:"yellow",
    width:"30%",
    height:100,
    marginHorizontal:10,
    borderRadius:10   
}
,
Text:{
    fontSize:18,
    color:'black',
    fontWeight:"thin",
    marginHorizontal:5
},
CardDescription:{
    flexDirection:'row',
    justifyContent:'center',
}

})