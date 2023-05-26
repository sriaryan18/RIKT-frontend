import {View} from 'react-native';
import { Button, Text } from 'react-native-paper';
import axois from 'react-native-axios'
import TextComponent from '../components/TextComponents';
import { useContext, useState } from 'react';
import { MyScreen } from '../../App';
import ButtonComponent from '../components/Button';
import result from '../hooks/results';


const ngrokUrl='https://bdd4-2401-4900-47f0-8d4f-5e6e-dd7b-4ccd-78a5.ngrok-free.app'


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
    const {updateState}:any=result();
    const callAxios = async ()=>{
        const payload:any={}
        for(let i=0;i<5;i++){
            let str=`text${i+1}`;
            payload[str]=answers[`ans${i+1}`]
        }
        const url=`${ngrokUrl}/get-emotions-text`;
       
        const apiResponse=await axois.post(url,payload)
        console.log("I am apiResponse>>>",apiResponse.data);
        await updateState(apiResponse.data);
        setAnswers({
            'ans1':"",
            'ans2':"",
            'ans3':"",
            'ans4':"",
            'ans5':"",
            'ans6':"",
            
        })

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
            style={{margin:15}}
            onPress={callAxios}
            />

        </View>
    );
}
export default TalkScreen;