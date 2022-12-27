import React,{useState} from 'react'
import { View,Image,StyleSheet, TextInput, Alert } from 'react-native'
import Titel from '../Components/UiComponenets/Titel'
import Colors from '../Components/Ui/Color'
import PrimaryButton from '../Components/UiComponenets/PrimaryButton'
import LinkTag from '../Components/UiComponenets/LinkTag'
import RegistrationForm from './RegistrationForm'

export default function LoginPage() {

    const [change,setChange]=useState()


    const HandelChange=(userValue)=>{
        //   console.log("userValue",userValue)
          setChange(userValue)
    }

    let screen=<RegistrationForm/>

    

    const HandelLogin=()=>{

        setChange('')
       if(change.length<11){
        Alert.alert(
            'Invalid number!',
            'Please Enter A Valid Number.',
            [{ text: 'Okay', style: 'destructive', onPress:"" }]
          );
       }
    }

    const HandelLink=()=>{
        console.log("HandelLinkl")
      return(screen=<RegistrationForm/>) 
    }


  return (
   <View>
    <Titel>Get-Started</Titel>
    <View style={styles.ImageContainer}>
    <Image 
    source={require('../../Image/Login.jpg')} 
    style={styles.img} 
/>
    </View>
    <View style={styles.SubContainer}>
        <TextInput placeholder='+91' style={styles.input}  keyboardType="number-pad" onChangeText={HandelChange}  value={change}></TextInput>
    </View>
    <View>
        <PrimaryButton onSubmit={HandelLogin}>Log-In</PrimaryButton>
        <LinkTag Redirect={HandelLink}>if You Are New ?</LinkTag>
    </View>
   </View>
  )
}

const styles=StyleSheet.create({
 
    ImageContainer:{
        backgroundColor:"white",
        borderRadius:300,
        borderWidth:5,
        overflow:'hidden',
        width:300,
        height:300,
        marginHorizontal:"5%",
        borderBottomColor:Colors.primary500,
        borderRightColor:"red",
        borderLeftColor:"red",
        borderTopColor:Colors.primary500,
        shadowColor:"white",
        shadowOffset: {width:5,height:5},
        shadowOpacity:25,
        elevation:50
    },
    img:{
        width:"100%",
        height:"100%",
    },
    input:{
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
    SubContainer:{
        marginTop:20
    }
})