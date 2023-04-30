import { useState } from 'react';
import {View,Modal,StyleSheet, ActivityIndicator} from 'react-native';
import { Text } from 'react-native-paper';

const LodingModal = ()=>{
    const [modalVisible,setModalVisible] = useState(true);
    return (

      <View style={styleSheet.containerStyle}>
        <View style={styleSheet.loaderStyle}>
            <ActivityIndicator size="large"
            />
            <Text variant='bodyLarge' style={{alignSelf:'center',margin:20}}> 
                Loading
            </Text>
        </View>
      </View>

    );
}

const styleSheet=StyleSheet.create({
   containerStyle:{
        flex:1,
        backgroundColor:'#c7c9c8',
        justifyContent:'center',
        alignContent:'center'
   },
   loaderStyle:{
    backgroundColor:'#ebeded',
    flexDirection:'row',
    alignSelf:'center',
    // padding:5,
    borderRadius:10,
    flexGrow:0.13,
    flexShrink:0.01
    
    
   }
})
export default LodingModal;