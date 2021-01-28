import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

/** screens */
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Logout from '../screens/Logout';

const screenOptions = {
  gestureEnabled: false
};

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName='Splash'
        headerMode='none'>
        <Stack.Screen 
          name='Splash'
          component={Splash}
        />
        <Stack.Screen 
          name='Login'
          component={Login}
        />
        <Stack.Screen 
          name='Home'
          component={Home}
        />
        <Stack.Screen 
          name='Logout'
          component={Logout}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
