import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { TextInput, Text, useTheme } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

type FormInputProps = {
    name: string;
    control: Control<any>;
    label: string;
    placeholder: string;
    errorMessage?: string;
};

const FormInput: React.FC<FormInputProps> = ({ name, control, label, placeholder, errorMessage }) => {
    const theme = useTheme();

    return (
        <View style={styles.input}>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        label={label}
                        placeholder={placeholder}
                        value={value}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        error={!!errorMessage}
                    />
                )}
                name={name}
            />
            {errorMessage && <Text style={[styles.errorText, { color: theme.colors.error }]}>{errorMessage}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        marginBottom: 15,
    },
    errorText: {
        marginTop: 6,
    },
});

export default FormInput;
