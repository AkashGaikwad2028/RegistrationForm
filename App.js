import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Colors from './Registration/Components/Ui/Color';
import {
  StyleSheet
} from 'react-native';
import LoginPage from './Registration/RegistraionComponents/LoginPage';
import RegistrationForm from './Registration/RegistraionComponents/RegistrationForm';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    // enclose all components in this View tag
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: Colors.primary500,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegistrationForm}
          options={{
            title: 'Back',
            headerStyle: {
              backgroundColor: Colors.primary500,
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <SafeAreaView  style={styles.background}>
    // <View style={styles.container}>
    //   <LoginPage/>
    // </View>
    // </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  back: {
    backgroundColor: 'black',
  },
});
