import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomAppBar from "../../components/CustomAppBarBar";
import ApplicationsHomeScreen from "../../screens/applications/ApplicationsMainScreen";
import ApplicationFormScreen from "../../screens/applications/ApplicationFormScreen";
import ApplicationDetailScreen from "../../screens/applications/detail/ApplicationDetailScreen";
import ApplicationDetailAppBar from "../../screens/applications/detail/components/ApplicationDetailAppBar";

export type ApplicationsStackParamList = {
    Applications: undefined,
    ApplicationForm: undefined,
    ApplicationDetail: {
        applicationID: number;
    },
}

const Stack = createNativeStackNavigator<ApplicationsStackParamList>()

const ApplicationsStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Applications"
            screenOptions={{
                header: (props) => <CustomAppBar {...props} />
            }}>
            <Stack.Screen name="Applications" component={ApplicationsHomeScreen} />
            <Stack.Screen name="ApplicationForm" component={ApplicationFormScreen} options={{
                title: "New Application"
            }} />
            <Stack.Screen
                name="ApplicationDetail"
                component={ApplicationDetailScreen}
                options={{
                    title: "Details",
                    header: (props) => <ApplicationDetailAppBar {...props} />
                }}
            />
        </Stack.Navigator>
    )
}

export default ApplicationsStack;