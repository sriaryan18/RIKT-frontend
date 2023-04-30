import {KeyboardAvoidingView, Platform, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import Contants from '../constants/Enum'
import TextComponent from '../components/TextComponents';
import ButtonComponent from '../components/Button';
import useLogin from '../hooks/Login';
import { useContext } from 'react';
import { MyScreen } from '../../App';


const LoginScreen=()=>{
    
    const {height,width}=useContext(MyScreen);

    const {
        username,
        password,
        loading,
        error,
        handleUsername,
        handlePassword,
        handleLogin,
        handleSignup

        
    } = useLogin();

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styleSheet.containerStyle}
        >
        
            <Text variant='headlineSmall'>Username</Text>
            <TextComponent
                text={username}
                label={'Username'}
                setText={handleUsername}
                type={Contants.username}
                style={{height:height*0.08,width:width*0.75}}
            />

            <Text variant='headlineSmall'>Password</Text>
            <TextComponent
                 text={password}
                 label={'Password'}
                 setText={handlePassword}
                 type={Contants.password}
                 style={{height:height*0.08,width:width*0.75}}
            />
            <View style={{flexDirection:'row'}}>

            <ButtonComponent
                style={styleSheet.buttonStyle}
                text='SignIn'
                onPress={handleLogin}
                loading={loading}
            />
            <ButtonComponent
            style={styleSheet.buttonStyle}
            text="SignUp"
            onPress={handleSignup}
            loading={false}
            
            />


            </View>
            

       
        </KeyboardAvoidingView>


    );
}

const styleSheet=StyleSheet.create({
    containerStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        marginRight:100
    },
        buttonStyle:{
            margin:15,
            
        }
    
    
});



export default LoginScreen;

