import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import { FAB, Text } from "react-native-paper"

const ApplicationsHomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Applications Page</Text>
            <FAB icon="plus" style={styles.fab} onPress={() => console.log('Pressed')} ></FAB>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
    },
    fab: {
        position: 'absolute',
        right: 16,
        bottom: 16,
    },
})

export default ApplicationsHomeScreen