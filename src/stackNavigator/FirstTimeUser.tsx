import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import MpinScreen from "../screens/MpinScreen";
import Signup from "../screens/SignUpScreen";
import TestScreen from "../screens/TestScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import HomeScreen from "../screens/HomeScreen";
const Stack=createStackNavigator()

const FirstTimeUser =  ()=>{


    return(
    <Stack.Navigator>
        <Stack.Screen name={"Login Screen"} component={LoginScreen}/>
        <Stack.Screen name={"Sign Up Screen"} component={Signup}/>
        <Stack.Screen name={"Mpin Screen"} component={MpinScreen}/>
        <Stack.Screen name={"Home Screen"} component={HomeScreen}/>
    </Stack.Navigator>
    );
}
export default   FirstTimeUser;