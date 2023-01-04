import { View, Text } from 'react-native';
import React from 'react';
import tw from 'twrnc';
const AbilitiesText = ({ abilities }) => {
  return (
    <View>
      <Text style={tw`text-2xl text-yellow-400 font-bold`}>
        {abilities.effect}
      </Text>
    </View>
  );
};

export default AbilitiesText;
