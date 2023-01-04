import { Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const Pokemon = ({ pokemon }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={tw`p-3 bg-amber-700 m-1 rounded-lg flex-row items-center`}
      onPress={() =>
        navigation.navigate('PokemonDetails', { pokemon: pokemon })
      }
    >
      <MaterialCommunityIcons
        name="poker-chip"
        size={24}
        color={tw`text-yellow-500`.color}
      />
      <Text style={tw`text-2xl font-bold text-yellow-400 ml-4 uppercase`}>
        {pokemon.name}
      </Text>
    </TouchableOpacity>
  );
};

export default Pokemon;
