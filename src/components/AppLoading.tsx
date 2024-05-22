import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const AppLoading: React.FC = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default AppLoading;
