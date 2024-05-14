import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardHomeScreen from "../../screens/dashboard/DashboardMainScreen";
import CustomNavigationBar from "../../components/CustomNavigationBar";

const Stack = createNativeStackNavigator()

const DashboardStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                header: (props) => <CustomNavigationBar {...props} />
            }}>
            <Stack.Screen name="Dashboard" component={DashboardHomeScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default DashboardStack