
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";


const useLogin =()=>{
    const navigation = useNavigation();
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [loading,setLoading]=useState(false);
    const [error, setError]=useState(null);
    
  
    const handleUsername = (text) =>{
        setUsername(text);
    }
    const handlePassword = (password) =>{
        setPassword(password)
    }
    const handleLogin = ()=>{
        setLoading(true);
        setError(null);
        setTimeout(() => {
            console.log("navigating");
            setLoading(false);
            navigation.navigate("Mpin Screen");
            setUsername("");
            setPassword("");
            
        }, 3000);
      

    }
    const handleSignup = ()=>[
        navigation.navigate("Sign Up Screen")
    ]
    return {
        username,
        password,
        loading,
        error,
        handleUsername,
        handlePassword,
        handleLogin,
        handleSignup
      };

}

export default useLogin;