import { Appbar, useTheme } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, Route } from '@react-navigation/native';
import React, { useContext } from 'react';
import { PreferencesContext } from '../providers/PreferencesContext';
import Feather from '@expo/vector-icons/Feather'

interface CustomAppBarPropType {
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>,
  route: Route<string>,
  options: any,
  back?: { title: string; } | undefined
}

const CustomAppBar: React.FC<CustomAppBarPropType> = ({ navigation, route, options, back }) => {
  const title = getHeaderTitle(options, route.name);
  const theme = useTheme()
  const { toggleTheme, isThemeDark } = useContext(PreferencesContext)

  return (
    <Appbar.Header elevated={true}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} titleStyle={{ fontFamily: 'poppins-semi-bold' }} />
      <Appbar.Action icon={() => <Feather name={isThemeDark ? 'sun' : 'moon'} size={22} color={theme?.colors.onSurface} />} onPress={toggleTheme} />
    </Appbar.Header>
  );
}

export default CustomAppBar