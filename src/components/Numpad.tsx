import {StyleSheet, View} from 'react-native';
import { Button } from 'react-native-paper';

// 
const Numpad = ({handlePinChange,handlePinDelete}:any) =>{
    // console.log("I am numpad>>",handlePinDelete);
    return (
        <>
    <View style={styles.containerStyle}>

        <View style={styles.buttonContainer}>
            <Button style={styles.buttons} onPress={()=>handlePinChange("1")}>1</Button>
            <Button style={styles.buttons} onPress={()=>handlePinChange("2")}>2</Button>
            <Button style={styles.buttons} onPress={()=>handlePinChange("3")}>3</Button>
        </View>
        <View style={styles.buttonContainer}>
            <Button style={styles.buttons} onPress={()=>handlePinChange("4")}>4</Button>
            <Button style={styles.buttons} onPress={()=>handlePinChange("5")}>5</Button>
            <Button style={styles.buttons} onPress={()=>handlePinChange("6")}>6</Button>
        </View>
        <View style={styles.buttonContainer}>
            <Button style={styles.buttons} onPress={()=>handlePinChange("7")}>7</Button>
            <Button style={styles.buttons} onPress={()=>handlePinChange("8")}>8</Button>
            <Button style={styles.buttons} onPress={()=>handlePinChange("9")}>9</Button>
        </View>

        <View style={[styles.buttonContainer,{flexGrow:10}]}>
          
            <Button style={[styles.buttons]} onPress={()=>handlePinChange("0")}> 0</Button>
            <Button style={styles.buttons} onPress={() => handlePinDelete()} icon='backspace' children={undefined}></Button>
        </View>
        
        


    </View>
    </>
    );
}

const styles = StyleSheet.create({

    buttons:{
        borderWidth:2,
        borderColor:'black',
        fontSize:10,
        borderRadius:10,
        padding:10
    },
    containerStyle:{
        justifyContent:'space-evenly'

    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        padding:30
    }


})

export default Numpad;