import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomNavigationBar from "../../components/CustomNavigationBar";
import ApplicationsHomeScreen from "../../screens/applications/ApplicationsMainScreen";
import ApplicationFormScreen from "../../screens/applications/ApplicationFormScreen";

export type ApplicationsStackParamList = {
    Applications: undefined,
    ApplicationForm: undefined,
}

const Stack = createNativeStackNavigator<ApplicationsStackParamList>()

const ApplicationsStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Applications"
            screenOptions={{
                header: (props) => <CustomNavigationBar {...props} />
            }}>
            <Stack.Screen name="Applications" component={ApplicationsHomeScreen} />
            <Stack.Screen name="ApplicationForm" component={ApplicationFormScreen} options={{
                title: "New Application"
            }} />
        </Stack.Navigator>
    )
}

export default ApplicationsStack