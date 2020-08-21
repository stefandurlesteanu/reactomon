import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonPage from './PokemonPage'

export class Pokemons extends Component {
	render() {
		return this.props.pokemons.map((pokemon) => (
			<PokemonPage key={pokemon.url} pokemon={pokemon} />
		));
	}
}

Pokemons.propTypes = {
	pokemons: PropTypes.array.isRequired
}

export default Pokemons
