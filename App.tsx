import { NavigationContainer, DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';
import AppBottomTab from './src/navigation/AppBottomTab';
import { PaperProvider, adaptNavigationTheme, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import merge from 'deepmerge'
import { useCallback, useMemo, useState } from 'react';
import { PreferencesContext } from './src/providers/PreferencesContext';
import { StatusBar } from "expo-status-bar"

const { LightTheme, DarkTheme } = adaptNavigationTheme({ reactNavigationDark: NavigationDefaultTheme, reactNavigationLight: NavigationDarkTheme })

const CombinedDefaultTheme = merge(MD3LightTheme, LightTheme)
const CombinedDarkTheme = merge(MD3DarkTheme, DarkTheme)

export default function App() {
  const [isThemeDark, setIsThemeDark] = useState(false)
  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme

  const toggleTheme = useCallback(() => {
    return setIsThemeDark(!isThemeDark)
  }, [isThemeDark])

  const preferences = useMemo(
    () => ({
      toggleTheme,
      isThemeDark
    }),
    [toggleTheme, isThemeDark]
  )

  return (
    <PreferencesContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <StatusBar style={isThemeDark ? 'light' : 'dark'} />
          <AppBottomTab />
        </NavigationContainer>
      </PaperProvider>
    </PreferencesContext.Provider>
  );
}