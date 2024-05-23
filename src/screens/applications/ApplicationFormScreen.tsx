import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, StyleSheet } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { DatePickerInput } from 'react-native-paper-dates';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import FormInput from '../../components/FormInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationsStackParamList } from '../../navigation/stacks/ApplicationsStack';

type Props = NativeStackScreenProps<ApplicationsStackParamList, 'ApplicationForm'>

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

const ApplicationFormScreen = ({ navigation }: Props) => {
    const theme = useTheme();
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            title: '',
            organization: '',
            applicationDate: new Date()
        },
        resolver: yupResolver(formSchema)
    });

    const onSubmit = (data: FormData) => {
        console.log(data)
        navigation.replace("ApplicationDetail")
    };

    return (
        <View style={styles.container}>
            <FormInput
                name="title"
                control={control}
                label="Title"
                placeholder="Enter the title"
                errorMessage={errors.title?.message}
            />
            <FormInput
                name="organization"
                control={control}
                label="Organization"
                placeholder="Enter the organization name"
                errorMessage={errors.organization?.message}
            />

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
