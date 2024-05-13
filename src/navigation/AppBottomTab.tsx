import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/DashboardScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import ApplicationsScreen from "../screens/ApplicationsScreen";
import MoreScreen from "../screens/MoreScreen";
import Feather from '@expo/vector-icons/Feather'

const Tab = createBottomTabNavigator();

const AppBottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Dashboard" component={DashboardScreen} options={{
                tabBarIcon: ({ color, size }) => <Feather name="compass" color={color} size={size} />
            }} />
            <Tab.Screen name="Schedule" component={ScheduleScreen} options={{
                tabBarIcon: ({ color, size }) => <Feather name="calendar" color={color} size={size} />
            }} />
            <Tab.Screen name="Applications" component={ApplicationsScreen} options={{
                tabBarIcon: ({ color, size }) => <Feather name="briefcase" color={color} size={size} />
            }} />
            <Tab.Screen name="More" component={MoreScreen} options={{
                tabBarIcon: ({ color, size }) => <Feather name="more-horizontal" color={color} size={size} />
            }} />
        </Tab.Navigator>
    )
}

export default AppBottomTab