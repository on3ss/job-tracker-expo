import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AppBottomTab from './src/navigation/AppBottomTab';
import { PaperProvider, adaptNavigationTheme, MD3DarkTheme } from 'react-native-paper';

const { DarkTheme } = adaptNavigationTheme({ reactNavigationDark: DefaultTheme })

export default function App() {
  return (
    <PaperProvider theme={MD3DarkTheme}>
      <NavigationContainer theme={DarkTheme}>
        <AppBottomTab />
      </NavigationContainer>
    </PaperProvider>
  );
}