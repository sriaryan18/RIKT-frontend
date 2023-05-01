import {StyleSheet, View,Image} from 'react-native';
import { ActivityIndicator, Button, Text } from 'react-native-paper';
// import {Icon} from 'react-native-vector-icons';
import { useContext, useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { MyScreen } from '../../App';
import ButtonComponent from '../components/Button';
import useImageGallery from '../hooks/ProfilePicture';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TextComponent from '../components/TextComponents';
import useUserCredentials from '../hooks/UserCredentials';

 const Profile = ()=>{

    const {height,width}:any=useContext(MyScreen);
    const [data,setData]:any=useState(null);
    const {profilePic,setProfilePic,openGallery}=useImageGallery();
    useEffect(()=>{
        const fetchProfilePic = async ()=>{
            let res:string=await AsyncStorage.getItem("ProfilePicture") || "";
            setProfilePic(res);
        }
        fetchProfilePic();
    },[profilePic]);

    useEffect(()=>{
       const fetchUserData = async ()=>{
            let res:any=await AsyncStorage.getItem("Credentials") || null;
            setData(JSON.parse(res))
            console.log("data>>>", JSON.parse(res));
       }
       fetchUserData()
    },[])

    const constImgSrc="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcrowdbotics.ghost.io%2Fcontent%2Fimages%2F2020%2F04%2Freact-native-featured-image2-2.png&tbnid=EaWWFNKI6L-8hM&vet=12ahUKEwiW_JPsr9H-AhX12nMBHaX-BmgQMygGegUIARDSAQ..i&imgrefurl=https%3A%2F%2Fwww.crowdbotics.com%2Fblog%2Fhow-to-use-react-native-image-picker&docid=DlRKciiMmi73hM&w=1500&h=750&q=image%20picker%20react%20native&ved=2ahUKEwiW_JPsr9H-AhX12nMBHaX-BmgQMygGegUIARDSAQ";
    return (

        data == null?<ActivityIndicator/>:
        <ScrollView > 
           
           <View style={{height:height*0.4, alignItems:'center',justifyContent:'center'}}>
                <View style={{alignItems:'center'}}>
                   <Image
                    style={styleSheet.imageStyle}
                    source={{uri:profilePic==""?constImgSrc:profilePic}}
                   />
                    <ButtonComponent
                        text={"Upload"}
                        style={{margin:10}}
                        onPress={openGallery}
                    />
                </View>
          

           </View>
           <View style={{height:height*0.43,alignItems:'center',flexGrow:1}}>
           <TextComponent
                text={data.name}
                label={'Name'}
                isDisabled={true}
                style={{height:height*0.08,width:width*0.85}}
                // icon="eye"
            />
             <TextComponent
                text={data.userName}
                label={'Username'}
                isDisabled={true}
                style={{height:height*0.08,width:width*0.85}}
            />
             <TextComponent
                text={data.emailId}
                label={'Email'}
                isDisabled={true}
                style={{height:height*0.08,width:width*0.85}}
                
            />
             <TextComponent
                text={data.mobileNumber}
                label={'Mobile'}
                isDisabled={true}
                style={{height:height*0.08,width:width*0.85}}
            />


           </View>
       
        </ScrollView>
    );
}

const styleSheet = StyleSheet.create({
    containerStyle:{

        borderWidth:1,
        borderColor:'pink'
    },
    profileImageContainer:{
        // flex:0.4,
        // borderWidth:2,
        // justifyContent:'center',
        // alignItems:'center'
    },
    informationContainer:{
        // flex:0.6,
        // borderWidth:5
    },
    imageStyle:{
        borderRadius:100,
        height:200,
        width:200,
        maxHeight:"100%",
        maxWidth:"100%"
        
    }
})


export default Profile;




// <TouchableOpacity
// onPress={()=>{
//     launchCamera({
//         mediaType:'mixed',
//         maxHeight:200,
//         maxWidth:200
//     },
//     (response)=>{
//         console.log("I am response of image>>>",response);
//     })
// }}>
//     <Text>Image Lib</Text>
//     </TouchableOpacity>