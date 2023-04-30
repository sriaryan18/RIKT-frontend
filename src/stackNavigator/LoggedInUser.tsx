
import { createStackNavigator } from "@react-navigation/stack"
import MpinScreen from "../screens/MpinScreen";
import HomeScreen from "../screens/HomeScreen";
import TestScreen from "../screens/TestScreen";

const Stack = createStackNavigator();
const LoggedInUser =()=>{
    return(
    <Stack.Navigator>
        <Stack.Screen name={"Mpin Screen"} component={MpinScreen}/>
        <Stack.Screen name={"Home Screen"} component={HomeScreen}/>
        {/* <Stack.Screen name={"Test Screen"} component={TestScreen}/> */}
    </Stack.Navigator>
    );
}
export default LoggedInUser;