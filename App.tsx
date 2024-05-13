import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import AppBottomTab from './src/navigation/BottomTabBar';

export default function App() {
  return (
    <NavigationContainer>
      <AppBottomTab />
    </NavigationContainer>
  );
}