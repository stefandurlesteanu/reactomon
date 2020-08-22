import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class PokemonPage extends Component {


	render() {
		const { name, url } = this.props.pokemon;
		const pattern = new RegExp('.+(/.+)$');
		let _id = url.match(pattern);
		const image =
			axios.get(url)
				.then(result => { console.log(result.data); })


		return (
			<Link to={`/pokemon${_id[1]}`}>
				<p>Pokemons name is {name} and picture is {image.base_experience ? image.base_experience : ''}</p>
			</Link >
		)
	}
}




export default PokemonPage
