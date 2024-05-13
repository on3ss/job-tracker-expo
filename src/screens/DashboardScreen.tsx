import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"

const DashboardScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Dashboard Page</Text>
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


export default DashboardScreen