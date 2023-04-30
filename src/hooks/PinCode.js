import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';

const usePinCode = ()=>{

    const [pinCode,setPinCode]=useState({
        first:"",
        second:"",
        third:"",
        forth:""
    });

   
  
    
   
    const navigation = useNavigation();
    
    const handlePinCode=(value)=>{
       
        if(pinCode.first == ""){
            setPinCode({...pinCode,first:value})
        }else if(pinCode.second == ""){
            setPinCode({...pinCode,second:value})
        }else if(pinCode.third == ""){
            setPinCode({...pinCode,third:value})
        }else if(pinCode.forth == ""){
            setPinCode({...pinCode,forth:value})
            navigation.navigate("Home Screen");
            setPinCode({...pinCode,first:"",second:"",third:"",forth:""})
            
        }
    }
    const handleDelete = () =>{
        console.log("I am pin code>>>",pinCode);
        if(pinCode.forth != "") setPinCode({...pinCode,forth:""})
        else if(pinCode.third != "") setPinCode({...pinCode,third:""})
        else if(pinCode.second != "") setPinCode({...pinCode,second:""})
        else if(pinCode.first != "") setPinCode({...pinCode , first:""});

    }

   const matchPin = ()=>{
    if (
        pinCode.first === enteredPin.first &&
        pinCode.second === enteredPin.second &&
        pinCode.third === enteredPin.third &&
        pinCode.forth === enteredPin.fourth
      ) {
        console.log('PIN is correct!');
      } else {
        console.log('PIN is incorrect!');
      }
    };
   

  

    return {
        pinCode,
        handlePinCode,
        handleDelete,
        
    }
}




export default usePinCode;