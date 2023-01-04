import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import PokemonList from './screens/PokemonList';
import tw from 'twrnc';
import PokemonDetails from './screens/PokemonDetails';
import AbilitiesDetails from './screens/AbilitiesDetails';
const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, contentStyle: tw`bg-sky-700 p-2` }}
    >
      <Stack.Screen name="PokemonList" component={PokemonList} />
      <Stack.Screen name="PokemonDetails" component={PokemonDetails} />
      <Stack.Screen name="AbilitiesDetails" component={AbilitiesDetails} />
    </Stack.Navigator>
  );
};

export default Routes;
