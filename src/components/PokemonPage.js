import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class PokemonPage extends Component {


	render() {
		const { name, url } = this.props.pokemon;
		const pattern = new RegExp('.+(/.+)$');
		let _id = url.match(pattern);
		return (
			<Link to={`/pokemon${_id[1]}`}>
				<p>{name}</p>
			</Link >
		)
	}
}



export default PokemonPage
