import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


const useUserCredentials = () =>{

    const [userCredentials,setCredentials] = useState({
        name:"",
        emailId:"",
        userName:"",
        password:"",
        mobileNumber:""
    });

    

    const handleChange=(value:string ,type:string):any =>{
        setCredentials({...userCredentials,[type]:value})
    }
     const saveCredentials = async ()=>{
       
        try{
            await AsyncStorage.setItem(
            "Credentials",JSON.stringify(userCredentials));
          
            await AsyncStorage.setItem("IsLoggedIn",JSON.stringify(true))
            getCredentials();
        }catch(err){
            console.log("Error occured in saving the data ",err);
        }
      
    }
    const getCredentials = async ()=>{
        try{
            const value=await AsyncStorage.getItem  ("Credentials");
            const v2=await AsyncStorage.getItem("IsLoggedIn")
            console.log("The saved value is",value,v2);
            
        }catch(err){
            console.log("Error occure while retreiving te data",err);
        }
    }
    const deleteCredentials = async ()=>{
        try{
            await AsyncStorage.removeItem("Credentials");
        }catch(err){
            console.log("Error deleteting the data",err);
        }
    }

    return {
        userCredentials,
        handleChange,
        saveCredentials,
        getCredentials
    };
}

export default useUserCredentials;