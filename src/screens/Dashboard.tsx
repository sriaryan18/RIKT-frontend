import React, { useEffect, useState } from 'react';
import { View, Text, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { index } from 'realm';
import { Button } from 'react-native-paper';
import ButtonComponent from '../components/Button';
import TextComponent from '../components/TextComponents';
import { KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Dashboard = ({navigation}:any) => {
  let emotions:any=[];
//   console.log("I am emotions>>>",emotions);

  const [resultComponent,setResultComponent]=useState([])
  const arr:any=[];
  const fetchData = async () => {
    try {
    const allKeys = await AsyncStorage.getAllKeys();
    const emotionKeys = allKeys.filter(value => value.startsWith("emotions"));
    const emotions = await Promise.all(emotionKeys.map(async key => {
        const emotion = await AsyncStorage.getItem(key);
        return emotion;
      }));
      const timestamp=new Date().valueOf();
      console.log("All emotions data:", emotions);
      for(let i=0;i<emotions.length;i++){
        arr.push(`${timestamp}${i}                                    ${emotions[i]}`);
        
      }
      setResultComponent(arr)
    //   console.log("resultcomponent",resultComponent);

    } catch (error) {
      console.error("Error:", error);
    }
  };
 

  
  return (
    <View>
    <ScrollView>
       
        
       {resultComponent.map((item, index) => (
        <TextComponent
            label={`${item}`}
            disabled={false}
            key={index}
        />
      ))}
         <ButtonComponent
        text='refresh'
        
        onPress={fetchData}
    />
        
        
    </ScrollView>
       
   </View>
   
  );
};

export default Dashboard;
