import React from 'react';
import { Controller, Control } from 'react-hook-form';
import { TextInput, Text, useTheme, HelperText } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

type FormInputProps = {
    name: string;
    control: Control<any>;
    label: string;
    placeholder: string;
    errorMessage?: string;
};

const FormInput: React.FC<FormInputProps> = ({ name, control, label, placeholder, errorMessage }) => {
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
            <HelperText type="error" visible={errorMessage != null}>{errorMessage}</HelperText>
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
