import 'react-native-gesture-handler';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen'
import TestScreen from './src/screens/TestScreen';
import { createContext, useEffect, useState } from 'react';
import {Dimensions} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import LoggedInUser from './src/stackNavigator/LoggedInUser';
import FirstTimeUser from './src/stackNavigator/FirstTimeUser';
import { createRealmContext } from '@realm/react';
import { realmConfig } from './src/databaseConfig/Schema';
import LodingModal from './src/modal/LoadingModal';

const Stack=createStackNavigator();

const {height,width} = Dimensions.get('window');

export const MyScreen = createContext({height,width});

const {RealmProvider} = createRealmContext(realmConfig);

const App = ()=>{

  const [isLoggedIn,setIsLoggedIn]=useState("checking");

  useEffect(()=>{
    const checkIsLoggedIn = async ()=>{
      try{
        let logged:string = await AsyncStorage.getItem("IsLoggedIn") || "false";
        setIsLoggedIn(logged);
        
      } 
      catch(err){
        console.log("Error fetching the data",err);
      }
    }
    checkIsLoggedIn();
  },[isLoggedIn])
  return (
    isLoggedIn=="checking"?<LodingModal/>:
      <NavigationContainer>
     {isLoggedIn=="true"?<LoggedInUser/>:<FirstTimeUser/>}
      </NavigationContainer>

  );
}


export default App;
