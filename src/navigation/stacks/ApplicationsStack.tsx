import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomNavigationBar from "../../components/CustomNavigationBar";
import ApplicationsHomeScreen from "../../screens/applications/ApplicationsMainScreen";

const Stack = createNativeStackNavigator()

const ApplicationsStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Applications"
            screenOptions={{
                header: (props) => <CustomNavigationBar {...props} />
            }}>
            <Stack.Screen name="Applications" component={ApplicationsHomeScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default ApplicationsStack