import React, { useContext } from 'react';
import { Appbar, useTheme } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import Feather from '@expo/vector-icons/Feather';
import { PreferencesContext } from '../../../../providers/PreferencesContext';

type ApplicationDetailAppBarPropType = NativeStackHeaderProps & {
    route: {
        params: {
            applicationID: number
        }
    }
}

const ApplicationDetailAppBar: React.FC<ApplicationDetailAppBarPropType> = ({ navigation, route, options, back }) => {
    const title = getHeaderTitle(options, route.name);
    const { applicationID } = route.params;
    const theme = useTheme();
    const { toggleTheme, isThemeDark } = useContext(PreferencesContext);
    const handleGoBack = () => navigation.goBack();
    const handleToggleTheme = () => toggleTheme();
    const handleEdit = () => console.log(applicationID);

    return (
        <Appbar.Header elevated={true}>
            {back && <Appbar.BackAction onPress={handleGoBack} />}
            <Appbar.Content title={title} titleStyle={{ fontFamily: 'poppins-semi-bold' }} />
            <Appbar.Action
                icon={() => <Feather name={isThemeDark ? 'sun' : 'moon'} size={22} color={theme?.colors.onSurface} />}
                onPress={handleToggleTheme}
            />
            <Appbar.Action
                icon={() => <Feather name='edit' size={22} color={theme?.colors.onSurface} />}
                onPress={handleEdit}
            />
        </Appbar.Header>
    );
}

export default ApplicationDetailAppBar;