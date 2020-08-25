import React, { useState, createContext } from 'react';

export const PokemonContext = createContext();

export const PokemonProvider = props => {

	const [pokemonz, setPokemonz] = useState([
		{
			name: "Bulbasaur",
			age: '100 years',
			ability: 'overgrow'
		},

		{
			name: "Dinosaur",
			age: '10 years',
			ability: 'drink'
		}
	]);

	return (
		<PokemonContext.Provider value={[pokemonz, setPokemonz]}>
			{props.children}
		</PokemonContext.Provider>

	);
}