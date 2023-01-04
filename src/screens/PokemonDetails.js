import {
  Text,
  ActivityIndicator,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import tw from 'twrnc';
import axios from 'axios';
import Details from '../components/Details';
import Abilities from '../components/Abilities';

const PokemonDetails = ({ route }) => {
  const [detail, setDetail] = useState([]);
  const { pokemon } = route.params;
  useEffect(() => {
    async function getDetails() {
      const response = await axios.get(pokemon.url);
      setDetail(response.data);
    }
    getDetails();
  }, []);
  return (
    <SafeAreaView>
      <Header />
      {!detail.abilities?.length && (
        <ActivityIndicator size={25} color={tw`text-yellow-500`.color} />
      )}
      <Text
        style={tw`text-3xl text-yellow-400 text-center font-bold uppercase mb-1`}
      >
        {detail.name}
      </Text>
      <Image
        style={styles.image}
        source={{ uri: detail.sprites?.other.home.front_default }}
      />
      <Text style={tw`text-2xl text-yellow-400 font-bold uppercase`}>
        Estatistícas:
      </Text>
      <FlatList
        data={detail.stats}
        renderItem={({ item }) => <Details detail={item} />}
        keyExtractor={(d) => d.stat.name}
      />
      <Text style={tw`text-2xl text-yellow-400 font-bold uppercase mt-3`}>
        Habilidades:
      </Text>
      <FlatList
        data={detail.abilities}
        renderItem={({ item }) => <Abilities abilities={item} />}
        keyExtractor={(d) => d.ability.name}
      />
    </SafeAreaView>
  );
};

export default PokemonDetails;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});
