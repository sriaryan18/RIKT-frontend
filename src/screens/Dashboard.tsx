import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { index } from 'realm';
import { Button } from 'react-native-paper';
import ButtonComponent from '../components/Button';
import TextComponent from '../components/TextComponents';
import { KeyboardAvoidingView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MyScreen } from '../../App';

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
    
      // const timestamp=new Date().valueOf();
      console.log("All emotions data:", emotions);
      for(let i=0;i<emotions.length;i++){
        const d=emotionKeys[i].substring(9).split(" ")
        const currTime=`${d[1]}-${d[2]} ${d[4]}`
          // console.log("d>>>",d);

          console.log("date",emotionKeys[i].substring(9));
        arr.push(`${currTime}                              ${emotions[i]}`);
        
      }
      setResultComponent(arr)
    //   console.log("resultcomponent",resultComponent);

    } catch (error) {
      console.error("Error:", error);
    }
  };
 
 

  
  return (
    <View >
    <ScrollView>
       
        
       {resultComponent.reverse().map((item, index) => (
        <TextComponent
            label={`${item}`}
            isDisabled={true}
            key={index}
            style={{height:80,width:350,marginLeft:20}}
        />
      ))}
         <ButtonComponent
        text='refresh'
        
        onPress={fetchData}
        style={{width:200,margin:20,alignSelf:'center'}}
    />
        
        
    </ScrollView>
       
   </View>
   
  );
};
const styleSheet = StyleSheet.create({
  TextBoxStyle:{
      borderRadius:10,
    
  },

  containerStyle:{
      // margin:10,
      flex:1,
      justifyContent:'space-evenly',
      alignItems:'center',
      
      // margin:10
  },
  buttonStyle:{
      margin:15,
      
  }
})
export default Dashboard;
