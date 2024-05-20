import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';

const ApplicationFormScreen: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [organization, setOrganization] = useState<string>('');
    const [inputDate, setInputDate] = React.useState<Date | undefined>(new Date())

    const handleSubmit = () => {
        console.log({
            title,
            organization,
            inputDate,
        });
    };

    return (
        <View style={styles.container}>
            <TextInput
                label="Title"
                placeholder="Enter the title"
                value={title}
                onChangeText={text => setTitle(text)}
                style={styles.input}
            />

            <TextInput
                label="Organization"
                placeholder="Enter the organization name"
                value={organization}
                onChangeText={text => setOrganization(text)}
                style={styles.input}
            />

            <View style={{ marginVertical: 30 }}>
                <DatePickerInput
                    locale="en"
                    label="Application Date"
                    value={inputDate}
                    onChange={(d) => setInputDate(d)}
                    inputMode="start"
                    withDateFormatInLabel={false}
                    validRange={{
                        startDate: new Date(1971),
                        endDate: new Date()
                    }}
                    presentationStyle='overFullScreen'
                />
            </View>

            <Button mode="contained" onPress={handleSubmit} style={styles.button}>
                Create
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
        alignContent: 'center',
    },
    input: {
        marginBottom: 15,
    },
    dateContainer: {
        marginVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateButton: {
        marginRight: 10,
    },
    dateText: {
        fontSize: 16,
    },
    button: {
        marginTop: 20,
    },
});

export default ApplicationFormScreen;
