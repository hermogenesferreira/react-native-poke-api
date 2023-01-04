import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import tw from 'twrnc';
import axios from 'axios';
import Routes from './src/Routes';
axios.defaults.baseURL = 'https://pokeapi.co/api/v2/';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
