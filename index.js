/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import * as React from 'react';
import { AppRegistry } from 'react-native';
// import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './App';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';


const theme = {
    ...DefaultTheme, 
    colors: {
      ...DefaultTheme.colors,
      primary: 'green',
      secondary: 'yellow',
    },
  };

export default function Main() {
  return (
    <PaperProvider>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);