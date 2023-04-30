import { Button } from "react-native-paper";



const ButtonComponent=(props:any)=>{

    return (
        <Button
            buttonColor="black"
            style={props.style}
            mode="contained"
            loading={props.loading}
            uppercase={true}
            onPress={props.onPress}
            >
                {props.text}
            </Button>

    );

}

export default ButtonComponent;