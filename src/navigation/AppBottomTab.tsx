import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DashboardScreen from "../screens/DashboardScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import ApplicationsScreen from "../screens/ApplicationsScreen";
import MoreScreen from "../screens/MoreScreen";
import Feather from '@expo/vector-icons/Feather'
import { BottomNavigation } from "react-native-paper";

const Tab = createBottomTabNavigator();

const AppBottomTab = () => {
    return (
        <Tab.Navigator
            tabBar={({ navigation, state, descriptors, insets }) => (
                <BottomNavigation.Bar
                    navigationState={state}
                    safeAreaInsets={insets}
                    onTabPress={({ route, preventDefault }) => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (event.defaultPrevented) {
                            preventDefault();
                        } else {
                            navigation.dispatch({
                                ...CommonActions.navigate(route.name, route.params),
                                target: state.key,
                            });
                        }
                    }}
                    renderIcon={({ route, focused, color }) => {
                        const { options } = descriptors[route.key];
                        if (options.tabBarIcon) {
                            return options.tabBarIcon({ focused, color, size: 24 });
                        }

                        return null;
                    }}
                    getLabelText={({ route }) => {
                        const { options } = descriptors[route.key];
                        const label =
                            options.tabBarLabel !== undefined
                                ? options.tabBarLabel
                                : options.title !== undefined
                                    ? options.title
                                    : route.name;

                        return label;
                    }}
                />
            )}>
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