import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';

import Signin from './pages/Signin';

export default function App() {
  return (
    <NavigationContainer>
      <Signin />
    </NavigationContainer>
  );
}
