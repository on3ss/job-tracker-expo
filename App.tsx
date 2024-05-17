// App.tsx
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import AppBottomTab from './src/navigation/AppBottomTab';
import { PreferencesProvider, PreferencesContext } from './src/providers/PreferencesContext';
import { CombinedDarkTheme, CombinedDefaultTheme } from './src/theme';

const App: React.FC = () => {
  return (
    <PreferencesProvider>
      <ThemedApp />
    </PreferencesProvider>
  );
};

const ThemedApp: React.FC = () => {
  const { isThemeDark } = useContext(PreferencesContext);
  const theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <StatusBar style={isThemeDark ? 'light' : 'dark'} />
        <AppBottomTab />
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
