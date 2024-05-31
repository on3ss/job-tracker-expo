import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardHomeScreen from "../../screens/dashboard/DashboardMainScreen";
import CustomAppBar from "../../components/CustomAppBarBar";

const Stack = createNativeStackNavigator()

const DashboardStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Dashboard"
            screenOptions={{
                header: (props) => <CustomAppBar {...props} />
            }}>
            <Stack.Screen name="Dashboard" component={DashboardHomeScreen}></Stack.Screen>
        </Stack.Navigator>
    )
}

export default DashboardStack