import { NavigationContainer } from '@react-navigation/native';
import AppBottomTab from './src/navigation/BottomTabBar';

export default function App() {
  return (
    <NavigationContainer>
      <AppBottomTab />
    </NavigationContainer>
  );
}