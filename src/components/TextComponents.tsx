import {StyleSheet, View} from 'react-native';
import {TextInput,Button,Text} from 'react-native-paper';


const TextComponent=({label,text,setText,type,style,keyboardType,icon,isDisabled=false}:any)=>{
   
    return (

        <View> 
            <TextInput
                style={[style]}
                label={label}
                value={text}
                onChangeText={setText}
                mode='outlined'
                activeOutlineColor='black'
                secureTextEntry={type=='password'?true:false}
                keyboardType={keyboardType}
                disabled={isDisabled}
                right={<TextInput.Icon icon={icon} />}
            />
          
        </View>


    );
}

const styleSheet=StyleSheet.create({
    textBoxStye:{
        
    }
})


export default TextComponent;

