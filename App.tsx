import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { PreferencesProvider } from "./src/providers/PreferencesContext";
import { StatusBar } from "expo-status-bar";
import AppBottomTab from "./src/navigation/AppBottomTab";
import { View } from "react-native";
import { en, registerTranslation } from "react-native-paper-dates";
import useCustomFonts from "./src/hooks/useCustomFonts";
import useTheme from "./src/hooks/useTheme";
import AppLoading from "./src/components/AppLoading";

registerTranslation("en", en);

const App: React.FC = () => {
  return (
    <PreferencesProvider>
      <MainApp />
    </PreferencesProvider>
  );
};

const MainApp: React.FC = () => {
  const { fontsLoaded, onLayoutRootView } = useCustomFonts();
  const { theme, isThemeDark } = useTheme();

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
          <StatusBar style={isThemeDark ? "light" : "dark"} />
          <AppBottomTab />
        </View>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
