// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// // import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

//  $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
//   // LTI update could not be added via codemod */
//  const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View></View>
//   )

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;


import React, { useState } from 'react';

import {View, Text, SafeAreaView,StyleSheet, Modal, TouchableHighlight} from 'react-native';
// import AllComponents from './Components/AllComponents';
// import PrimaryButton from './Registration/Components/UiComponenets/PrimaryButton';
import LoginPage from './Registration/RegistraionComponents/LoginPage';
// import { NavigationContainer } from '@react-navigation/native';
// import createNativeStackNavigator from  '@react-navigation/native-stack'
import RegistrationForm from './Registration/RegistraionComponents/RegistrationForm';

// const stack =createNativeStackNavigator()
const App = () => {

  // const [modalVisible,setModalVisible]=useState(false)
  
  //  const HandelVisibel=()=>{
  //        setModalVisible(!modalVisible)
  //  }

  return (
    // enclose all components in this View tag
  
    <SafeAreaView  style={styles.background}>
      <View style={styles.container}>
      {/* <NavigationContainer>
        <stack.Navigator>
          <stack.Screen
          name ="Home"
          componenet={LoginPage}
          />
            <stack.Screen
          name ="Form"
          componenet={RegistrationForm}
          />

        </stack.Navigator>
        </NavigationContainer> */}
        {/* <LoginPage/> */}
        <RegistrationForm/>
      </View> 
      </SafeAreaView>
  );
};

export default App;

const  styles= StyleSheet.create({
 container:{
  margin:15,
  padding:15,
  marginTop:50
 },
 background:{
  backgroundColor:"black",
  flex:1,
 }
})