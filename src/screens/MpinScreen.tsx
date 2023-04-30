import { useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { MyScreen } from "../../App";
import Numpad from "../components/Numpad";
import usePinCode from "../hooks/PinCode";
import { ScrollView } from "react-native-gesture-handler";


const MpinScreen = ()=>{
    
    const {height,width} = useContext(MyScreen);

    const {pinCode,handlePinCode,handleDelete} = usePinCode();
    const [enteredPin,setEnteredPin] = useState(null)


  
    return (
        <ScrollView>
        <View style={styles.outerView}>
            <View style={[styles.viewContainer,{marginTop:height * 0.15}]}>
                <View style={[styles.dotStyles,{ backgroundColor:pinCode.first != ""?"black":"white"}]}></View>
                <View style={[styles.dotStyles,{ backgroundColor:pinCode.second != ""?"black":"white"}]}></View>
                <View style={[styles.dotStyles,{ backgroundColor:pinCode.third != ""?"black":"white"}]}></View>
                <View style={[styles.dotStyles,{ backgroundColor:pinCode.forth != ""?"black":"white"}]}></View>
            </View>
            <Text style={styles.warningText}>
                {true?"Entered Correct Pin":null}
            </Text>
            <View>
                <Numpad 
                    handlePinChange = {handlePinCode}
                    handlePinDelete={handleDelete}
                />
            </View>

        </View>
        </ScrollView>

    );

}

const styles = StyleSheet.create({

    outerView:{
        flex:1,
        //  borderColor:'black',
        //  borderWidth:10
      
    },
    viewContainer:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
        
       
    
    },

    dotStyles:{
        borderRadius:15,
        borderWidth:2,
        height:25,
        width:25,
       
        margin:5
        
    },
    numberStyles:{
        margin:10,
        borderColor:'black',
         borderWidth:10,
         flexGrow:1,
        //  flex:0.75

    },
    warningText:{
        color:'red',
        margin:30,
        alignSelf:'center',
        fontSize:20
        
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 1,
        height:10,
        width:10
      },

})


export default MpinScreen;
