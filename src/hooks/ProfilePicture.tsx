import { View } from "react-native/types";
import { launchImageLibrary } from "react-native-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

const useImageGallery =  ()=>{

    const [profilePic,setProfilePic] = useState("");
    
    let options:any={
        mediaType:'mixed',
        maxHeight:200,
        maxWidth:200,
        quality:1
    }
    let uri="";
     const openGallery = ()=>{launchImageLibrary(options,
        async (response:any)=>{
            // console.log("I am Image Response>>>",response);
            await AsyncStorage.setItem("ProfilePicture",response?.assets[0].uri)
            uri= response.assets[0].uri;
            setProfilePic(uri);
        }
    )}
    return {
        profilePic,
        setProfilePic,
        openGallery
    };
}

export default useImageGallery;