import Feather from "@expo/vector-icons/Feather";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import DashboardStack from "./stacks/DashboardStack";
import ScheduleStack from "./stacks/ScheduleStack";
import ApplicationsStack from "./stacks/ApplicationsStack";
import MoreStack from "./stacks/MoreStack";

type RootBottomTabParamList = {
  DashboardStack: undefined;
  ScheduleStack: undefined;
  ApplicationsStack: undefined;
  MoreStack: undefined;
};

const Tab = createMaterialBottomTabNavigator<RootBottomTabParamList>();

const AppBottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="DashboardStack"
        component={DashboardStack}
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <Feather name="compass" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="ScheduleStack"
        component={ScheduleStack}
        options={{
          title: "Schedule",
          tabBarIcon: ({ color }) => (
            <Feather name="calendar" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="ApplicationsStack"
        component={ApplicationsStack}
        options={{
          title: "Applications",
          tabBarIcon: ({ color }) => (
            <Feather name="briefcase" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="MoreStack"
        component={MoreStack}
        options={{
          title: "More",
          tabBarIcon: ({ color }) => (
            <Feather name="more-horizontal" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppBottomTab;
