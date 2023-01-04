import axios from 'axios';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import Header from '../components/Header';
import Pokemon from './Pokemon';
const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  const [next, setNext] = useState('/pokemon');
  const [loading, setLoading] = useState(false);

  async function getPokemon() {
    if (next != null) {
      setLoading(true);
      const response = await axios.get(next);
      setPokemon([...pokemon, ...response.data.results]);

      setNext(response.data.next);
      setLoading(false);
    }
  }
  useEffect(() => {
    getPokemon();
  }, []);
  return (
    <SafeAreaView style={tw`flex-1`}>
      <Header />
      <FlatList
        data={pokemon}
        renderItem={({ item }) => <Pokemon pokemon={item} />}
        keyExtractor={(p) => p.name}
        onEndReached={getPokemon}
      />
      {(!pokemon.length || loading) && (
        <ActivityIndicator size={25} color={tw`text-yellow-500`.color} />
      )}
    </SafeAreaView>
  );
};

export default PokemonList;
