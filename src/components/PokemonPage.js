import React from 'react';
import CardComponent from './CardComponent'
// import { Link } from 'react-router-dom';


function PokemonPage({ pokemon }) {

	// const { name, url } = this.props.pokemon;
	// const pattern = new RegExp('.+(/.+)$');
	// let _id = url.match(pattern);


	return (

		<CardComponent>
			{pokemon}
		</CardComponent>
		// <Link to={`/pokemon${_id[1]}`}>
		// 	<p>Pokemons name is {name} and picture is {image.base_experience ? image.base_experience : ''}</p>
		// </Link >
	)

}


export default PokemonPage
