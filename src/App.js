import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import reactDom from 'react-dom';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#FF0000" barStyle="dark-content" />
      <Routes/>
    </NavigationContainer>
      
    
  );
}

