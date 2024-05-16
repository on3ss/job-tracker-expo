import React, { useMemo, useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import { PaperProvider, adaptNavigationTheme, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import merge from 'deepmerge';
import { PreferencesContext } from './src/providers/PreferencesContext';
import AppBottomTab from './src/navigation/AppBottomTab';

const { LightTheme, DarkTheme } = adaptNavigationTheme({ reactNavigationDark: NavigationDefaultTheme, reactNavigationLight: NavigationDarkTheme });

const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme);
const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme);

export default function App() {
  const [isThemeDark, setIsThemeDark] = useState(false);

  const toggleTheme = () => setIsThemeDark(!isThemeDark);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark
    }),
    [isThemeDark]
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme}>
        <NavigationContainer theme={isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme}>
          <StatusBar style={isThemeDark ? 'light' : 'dark'} />
          <AppBottomTab />
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}
