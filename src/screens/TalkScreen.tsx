import {View} from 'react-native';
import { Button, Text } from 'react-native-paper';
// import axois from 'react-native-axios'
import TextComponent from '../components/TextComponents';
import { useContext, useState } from 'react';
import { MyScreen } from '../../App';
import ButtonComponent from '../components/Button';





 const TalkScreen = ()=>{
    const {height,width}=useContext(MyScreen);
    const [answers,setAnswers]:any=useState({
        'ans1':"",
        'ans2':"",
        'ans3':"",
        'ans4':"",
        'ans5':"",
        'ans6':"",
        
    })
    const callAxios = ()=>{
        const data:any={}
        for(let i=0;i<5;i++){   
            data[`text${i+1}`]=answers[`ans${i+1}`]
        }
        const payload=JSON.stringify(data);
        console.log("I am payload>>>",payload);
        let config:any={
            method:'post',
            url:'',
            data:payload
        }

    }

    return (
        <View>
            <Text>     How are feeling today ?</Text>
            <TextComponent
                text={answers.ans1}
                label={'answer'}
                setText={(text: any)=>{setAnswers({...answers,ans1:text})}}
                type={'text'}
                style={{height:height*0.08,width:width*0.90,margin:10}}
            />
            <Text>     How frequent do you laugh these days?</Text>
            <TextComponent
                 text={answers.ans2}
                 label={'answer'}
                 setText={(text: any)=>{setAnswers({...answers,ans2:text})}}
                type={'text'}
                style={{height:height*0.08,width:width*0.90,margin:10}}
            />
            <Text>     Are you enjoying your life ?</Text>
            <TextComponent
                text={answers.ans3}
                label={'answer'}
                setText={(text: any)=>{setAnswers({...answers,ans3:text})}}
                type={'text'}
                style={{height:height*0.08,width:width*0.90,margin:10}}
            />
            <Text>     Which part of the day is your favourite ?</Text>
            <TextComponent
                text={answers.ans4}
                label={'answer'}
                setText={(text: any)=>{setAnswers({...answers,ans4:text})}}
                type={'text'}
                style={{height:height*0.08,width:width*0.90,margin:10}}
            />
             <Text>     Describe your day in brief</Text>
            <TextComponent
                text={answers.ans5}
                label={'answer'}
                setText={(text: any)=>{setAnswers({...answers,ans5:text})}}
                type={'text'}
                style={{height:height*0.08,width:width*0.90,margin:10}}
            />
            <ButtonComponent
            text={'Submit'}
            style={margin=15}
            onPress={callAxios}
            />

        </View>
    );
}
export default TalkScreen;