import { Appbar, Button, Menu } from 'react-native-paper';
import { getHeaderTitle } from '@react-navigation/elements';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase, Route } from '@react-navigation/native';
import React, { useContext } from 'react';
import { PreferencesContext } from '../providers/PreferencesContext';
import Feather from '@expo/vector-icons/Feather'

interface CustomNavigationBarPropType {
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>,
  route: Route<string>,
  options: any,
  back?: { title: string; } | undefined
}

const CustomNavigationBar: React.FC<CustomNavigationBarPropType> = ({ navigation, route, options, back }) => {
  const title = getHeaderTitle(options, route.name);
  const { toggleTheme, isThemeDark } = useContext(PreferencesContext)

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      <Button onPress={toggleTheme}>
        <Feather name={isThemeDark ? 'sun' : 'moon'} size={18} />
      </Button>
    </Appbar.Header>
  );
}

export default CustomNavigationBar