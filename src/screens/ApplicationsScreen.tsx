import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

const ApplicationsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Applications Page</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default ApplicationsScreen