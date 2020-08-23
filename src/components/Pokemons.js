import React from 'react';
import CardComponent from './CardComponent'



function Pokemons({ pokemonData }) {

	return pokemonData.map((pokemon) => (
		<CardComponent style={{ display: 'flex' }} key={pokemon.url} pokemon={pokemon} />
	))
}


export default Pokemons
