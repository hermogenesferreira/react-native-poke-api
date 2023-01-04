import { View, Text } from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import tw from 'twrnc';

const Details = ({ detail }) => {
  return (
    <View>
      <Text style={tw`text-2xl text-yellow-400 font-bold uppercase `}>
        {detail.stat.name}:{' '}
        <Progress.Bar
          progress={detail.base_stat / 100}
          width={150}
          height={16}
          color={tw`text-red-500`.color}
        />
      </Text>
    </View>
  );
};

export default Details;
