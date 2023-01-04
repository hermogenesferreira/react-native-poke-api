import { Text, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import axios from 'axios';
import AbilitiesText from '../components/AbilitiesText';
import tw from 'twrnc';
const AbilitiesDetails = ({ route }) => {
  const { abilities } = route.params;
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    async function getDetails() {
      const response = await axios.get(abilities.ability.url);
      setDetail(response.data);
    }
    getDetails();
  }, []);
  return (
    <SafeAreaView style={tw`flex-1`}>
      <Header />
      {!detail.effect_entries?.length && (
        <ActivityIndicator size={25} color={tw`text-yellow-500`.color} />
      )}
      <Text
        style={tw`text-2xl text-yellow-400 font-bold uppercase self-center mt-1`}
      >
        {detail.name}:
      </Text>
      <Text style={tw`text-2xl text-yellow-400 font-bold mt-1`}>
        Geração: {detail.generation?.name}
      </Text>
      <FlatList
        data={detail.effect_entries}
        renderItem={({ item }) => <AbilitiesText abilities={item} />}
        keyExtractor={(d) => d.language.name}
      />
    </SafeAreaView>
  );
};

export default AbilitiesDetails;
