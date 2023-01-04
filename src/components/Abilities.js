import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const Abilities = ({ abilities }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={tw`p-3 bg-amber-700 m-1 rounded-lg flex-row items-center`}
        onPress={() =>
          navigation.navigate('AbilitiesDetails', { abilities: abilities })
        }
      >
        <FontAwesome
          name="superpowers"
          size={24}
          color={tw`text-yellow-500`.color}
        />
        <Text style={tw`text-2xl font-bold text-yellow-400 ml-4 uppercase`}>
          {abilities.ability.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Abilities;
