import { NavigationContainer } from '@react-navigation/native';
import AppBottomTab from './src/navigation/AppBottomTab';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <AppBottomTab />
      </NavigationContainer>
    </PaperProvider>
  );
}