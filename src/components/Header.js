import { View, Text } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import tw from 'twrnc';
const Header = () => {
  return (
    <View
      style={tw`flex-row justify-center mb-4 pb-2 border-b-2 border-b-yellow-500 relative`}
    >
      <MaterialCommunityIcons
        wesome
        name="pokeball"
        size={32}
        color={tw`text-red-500`.color}
      />
      <Text style={tw`text-2xl text-yellow-500 font-bold ml-2`}>
        Pokemon Info!
      </Text>
    </View>
  );
};

export default Header;
