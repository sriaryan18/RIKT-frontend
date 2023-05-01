import {Text} from 'react-native-paper';
import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import TextComponent from '../components/TextComponents';
import { ScrollView } from 'react-native-gesture-handler';
import useUserCredentials from '../hooks/UserCredentials';
import React, { useContext } from 'react';
import { MyScreen } from '../../App';
import ButtonComponent from '../components/Button';
import { useNavigation } from '@react-navigation/native';




const Signup = ()=>{
    
    const navigation=useNavigation();
    const {height,width} = useContext(MyScreen);
    const {userCredentials,handleChange,saveCredentials,getCredentials} = useUserCredentials();

    const callhandleChange=(value:string,type:string) => {
        // console.log("value",value);
        handleChange(value,type);
        // console.log(userCredentials.name);
    }
    const labels=['Full Name','UserName','Password','Email id','Mobile Number'];
    const type=["name","userName","password","emailId","mobileNumber"];
    const textComponents= []
    for(let i=0;i<5;i++){
        var t :any = type[i];
        textComponents.push(
            <TextComponent
                label={labels[i]}
                text={userCredentials[t as keyof object]}
                setText={(value:string)=>callhandleChange(value,type[i])}
                type={i==2?'password':'text'}
                style={{height:height*0.08,width:width*0.90,margin:20}}
                key={i}
                keyboardType={type[i]=="mobileNumber"?"numeric":null}
            />,
           
        )
    }
    const saveAndNavigate=(data:any)=>{
        saveCredentials();
        const sc:any="Mpin Scree";
        navigation.navigate(sc);
    
    }

    return(
        <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios'?'padding':'height'}
            style={styleSheet.containerStyle}
        >
            <Text variant='headlineSmall'> ENTER DETAILS TO SIGN UP</Text>
            
                {textComponents}

            <ButtonComponent
                style={styleSheet.buttonStyle}
                text='Submit'
                onPress={saveAndNavigate}
                
            />
                
        </KeyboardAvoidingView>

    );

}

const styleSheet = StyleSheet.create({
    TextBoxStyle:{
        borderRadius:10
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


export default Signup;