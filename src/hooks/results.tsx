import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import React from "react-native";

const useresult = ()=>{
    const [result,setResult]=useState("neutral");

    const updateState=async (apiResponse:any)=>{
        console.log("I am called with>>>",apiResponse);
        let maxScore:Number=0;
        let emotion:string='neutral';
        for(let i=0;i<apiResponse[0].length;i++){
            if(maxScore<apiResponse[0][i].score && apiResponse[0][i].score>=0.75){
                maxScore=apiResponse[0][i].score
                emotion=apiResponse[0][i].label
            }
        }
        setResult(emotion);
        console.log("I am emotion>>>",emotion);
        const timestamp=new Date().valueOf();
        AsyncStorage.setItem(`emotions_${timestamp.toString()}`,emotion.toString());
        return result

        
    }
    return {result,
        updateState};
}
export default useresult;
