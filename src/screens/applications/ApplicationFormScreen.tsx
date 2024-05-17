import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

const ApplicationFormScreen: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [organization, setOrganization] = useState<string>('');
    const [date, setDate] = useState<Date>(new Date());
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

    const onChangeDate = (event: DateTimePickerEvent, selectedDate?: Date | undefined): void => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);
    };

    const handleSubmit = () => {
        console.log({
            title,
            organization,
            date,
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

            <View style={styles.dateContainer}>
                <Button onPress={() => setShowDatePicker(true)} style={styles.dateButton}>
                    Select Application Date
                </Button>
                <Text style={styles.dateText}>{date.toDateString()}</Text>
            </View>

            {showDatePicker && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChangeDate}
                />
            )}

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
