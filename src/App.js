import React from 'react';
import Header from './components/layout/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pokemons from './components/Pokemons';
import Types from './components/pages/Types';
import PokemonInfo from './components/PokemonInfo';
import { useState, useEffect } from 'react';
import { getAllPokemon } from './services/pokemon'


function App() {

	const [pokemonData, setPokemonData] = useState([]);
	const [nextUrl, setNextUrl] = useState('');
	const [prevUrl, setPrevUrl] = useState('');
	const [loading, setLoading] = useState(true);
	const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

	useEffect(() => {
		async function fetchData() {
			let response = await getAllPokemon(initialUrl);
			setNextUrl(response.next);
			setPrevUrl(response.previous);
			setLoading(false);

		}

		fetchData();

	}, [])

	axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
		.then(res => this.setState({ pokemons: res.data.results }))


	return (
		<Router>
			<div className="App" >
				<Header />
				<Route exact path="/pokemons" render={props => (
					<React.Fragment>
						<Pokemons pokemons={this.state.pokemons} />
					</React.Fragment>
				)} />
				<Route path="/types" component={Types} />
				<Route
					path="/pokemon/:pokemonId/"
					component={PokemonInfo}
				/>
			</div>
		</Router>
	);
}


export default App;
