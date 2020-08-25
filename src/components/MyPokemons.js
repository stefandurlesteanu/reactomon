/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { PokemonContext } from '../PokemonContext';

export default function MyPokemons() {
	const [pokemonz, setPokemonz] = useContext(PokemonContext);

	return (
		<div>
			{pokemonz.map((pokemon) => (
				<p> {pokemon.name} </p>
			))}
		</div>
	)
}
