import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomAppBar from "../../components/CustomAppBarBar";
import ScheduleMainScreen from "../../screens/schedule/ScheduleMainScreen";

const Stack = createNativeStackNavigator();

const ScheduleStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Schedule"
      screenOptions={{
        header: (props) => <CustomAppBar {...props} />,
      }}
    >
      <Stack.Screen
        name="Schedule"
        component={ScheduleMainScreen}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ScheduleStack;
