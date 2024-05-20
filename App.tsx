// App.tsx
import React, { useCallback, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PaperProvider, configureFonts } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import AppBottomTab from './src/navigation/AppBottomTab';
import { PreferencesProvider, PreferencesContext } from './src/providers/PreferencesContext';
import { CombinedDarkTheme, CombinedDefaultTheme } from './src/theme';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { View } from 'react-native';
import { en, registerTranslation } from 'react-native-paper-dates'

registerTranslation('en', en);
SplashScreen.preventAutoHideAsync();

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

  const [fontsLoaded, fontError] = useFonts({
    "poppins-black": require("./assets/fonts/Poppins-Black.ttf"),
    "poppins-black-italic": require("./assets/fonts/Poppins-BlackItalic.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "poppins-bold-italic": require("./assets/fonts/Poppins-BoldItalic.ttf"),
    "poppins-extra-bold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "poppins-extra-bold-italic": require("./assets/fonts/Poppins-ExtraBoldItalic.ttf"),
    "poppins-extra-light": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "poppins-extra-light-italic": require("./assets/fonts/Poppins-ExtraLightItalic.ttf"),
    "poppins-light": require("./assets/fonts/Poppins-Light.ttf"),
    "poppins-italic": require("./assets/fonts/Poppins-Italic.ttf"),
    "poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "poppins-medium-italic": require("./assets/fonts/Poppins-MediumItalic.ttf"),
    "poppins": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-semi-bold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "poppins-semi-bold-italic": require("./assets/fonts/Poppins-SemiBoldItalic.ttf"),
    "poppins-thin": require("./assets/fonts/Poppins-Thin.ttf"),
    "poppins-thin-italic": require("./assets/fonts/Poppins-ThinItalic.ttf")
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const fontConfig = {
    fontFamily: 'poppins'
  }

  const themeWithFonts = {
    ...theme,
    fonts: configureFonts({ config: fontConfig }),
  }

  return (
    <PaperProvider theme={themeWithFonts}>
      <NavigationContainer theme={themeWithFonts}>
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
          <StatusBar style={isThemeDark ? 'light' : 'dark'} />
          <AppBottomTab />
        </View>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
