import React from 'react';
// import PropTypes from 'prop-types';
// import PokemonPage from './PokemonPage'
import CardComponent from './CardComponent'

function Pokemons({ pokemonData }) {

	return pokemonData.map((pokemon) => (
		<CardComponent key={pokemon.url} pokemon={pokemon} />
	));

}

// Pokemons.propTypes = {
// 	pokemons: PropTypes.array.isRequired
// }

export default Pokemons
