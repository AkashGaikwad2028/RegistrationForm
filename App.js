import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Colors from './Registration/Components/Ui/Color';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import LoginPage from './Registration/RegistraionComponents/LoginPage';
import RegistrationForm from './Registration/RegistraionComponents/RegistrationForm';
import Successful from "./Registration/RegistraionComponents/Successful"
import { applyMiddleware,createStore } from 'redux';
import Rootreducers from './Registration/Redux/Reducers/rootreducer';


const Stack = createNativeStackNavigator();
const store = createStore(Rootreducers, applyMiddleware(thunk))
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
         <Stack.Screen
          name="Successful"
          component={Successful}
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
  );
};

export default App;
