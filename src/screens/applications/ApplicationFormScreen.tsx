import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, useTheme } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type FormData = {
    title: string,
    organization: string,
    applicationDate: Date
}

const formSchema = yup.object({
    title: yup.string().required('Title is required').min(4, 'Title must be at least 4 characters').max(255, 'Title must be less than 255 characters'),
    organization: yup.string().required('Organization is required').min(4, 'Organization must be at least 4 characters').max(255, 'Organization must be less than 255 characters'),
    applicationDate: yup.date().required('Application date is required')
}).required();

const ApplicationFormScreen: React.FC = () => {
    const theme = useTheme();
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            title: '',
            organization: '',
            applicationDate: new Date()
        },
        resolver: yupResolver(formSchema)
    });

    const onSubmit = (data: FormData) => console.log(data);

    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Title"
                            placeholder="Enter the title"
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            error={errors.title ? true : false}
                        />
                    )}
                    name="title"
                />
                {errors.title && <Text style={[styles.errorText, { color: theme.colors.error }]}>{errors.title.message}</Text>}
            </View>

            <View style={styles.input}>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            label="Organization"
                            placeholder="Enter the organization name"
                            value={value}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            error={errors.organization ? true : false}
                        />
                    )}
                    name="organization"
                />
                {errors.organization && <Text style={[styles.errorText, { color: theme.colors.error }]}>{errors.organization.message}</Text>}
            </View>

            <View style={styles.dateContainer}>
                <Controller
                    control={control}
                    render={({ field: { onChange, value } }) => (
                        <DatePickerInput
                            locale="en"
                            label="Application Date"
                            value={value}
                            onChange={onChange}
                            inputMode="start"
                            withDateFormatInLabel={false}
                            validRange={{
                                startDate: new Date(1971),
                                endDate: new Date()
                            }}
                            presentationStyle='overFullScreen'
                        />
                    )}
                    name="applicationDate"
                />
                {errors.applicationDate && <Text style={[styles.errorText, { color: theme.colors.error }]}>{errors.applicationDate.message}</Text>}
            </View>

            <Button mode="contained" onPress={handleSubmit(onSubmit)} style={styles.button}>
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
    },
    input: {
        marginBottom: 15,
    },
    dateContainer: {
        marginVertical: 30,
    },
    button: {
        marginTop: 20,
    },
    errorText: {
        marginTop: 6,
    },
});

export default ApplicationFormScreen;
