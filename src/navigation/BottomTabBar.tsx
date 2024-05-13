import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/DashboardScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import ApplicationsScreen from "../screens/ApplicationsScreen";
import MoreScreen from "../screens/MoreScreen";

const Tab = createBottomTabNavigator();

const AppBottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            <Tab.Screen name="Schedule" component={ScheduleScreen} />
            <Tab.Screen name="Applications" component={ApplicationsScreen} />
            <Tab.Screen name="More" component={MoreScreen} />
        </Tab.Navigator>
    )
}

export default AppBottomTab