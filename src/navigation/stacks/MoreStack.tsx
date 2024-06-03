import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomAppBar from "../../components/CustomAppBarBar";
import MoreMainScreen from "../../screens/more/MoreMainScreen";

const Stack = createNativeStackNavigator();

const MoreStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="More"
      screenOptions={{
        header: (props) => <CustomAppBar {...props} />,
      }}
    >
      <Stack.Screen name="More" component={MoreMainScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default MoreStack;
