import React from 'react';
import Header from './components/layout/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pokemons from './components/Pokemons';
import Types from './components/pages/Types';
import PokemonInfo from './components/PokemonInfo';
import { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon, loadingTypes } from './services/pokemon';
import ReactPlayer from "react-player";
import { Container } from 'react-bootstrap'



function App() {

	const [pokemonData, setPokemonData] = useState([]);
	const [nextUrl, setNextUrl] = useState('');
	const [prevUrl, setPrevUrl] = useState('');
	const [loading, setLoading] = useState(true);
	const initialUrl = 'https://pokeapi.co/api/v2/pokemon';
	const typesUrl = 'https://pokeapi.co/api/v2/type';
	const [types, setTypes] = useState([]);

	useEffect(() => {
		async function fetchData() {
			let response = await getAllPokemon(initialUrl);
			let types = await loadingTypes(typesUrl);
			setNextUrl(response.next);
			setPrevUrl(response.previous);
			await loadingPokemon(response.results);
			setTypes(types.results);
			setLoading(false);
		}

		fetchData();

	}, [])

	const loadingPokemon = async (data) => {
		let _pokemon = await Promise.all(data.map(async pokemon => {
			let pokemonRecord = await getPokemon(pokemon.url);
			return pokemonRecord
		}))
		setPokemonData(_pokemon)
	}

	// const next = async () => {
	// 	if (!nextUrl) return;
	// 	setLoading('true');
	// 	let data = getAllPokemon(nextUrl);
	// 	await loadingPokemon(data.results);
	// 	setNextUrl(data.next);
	// 	setPrevUrl(data.previous);
	// }

	// const prev = async () => {
	// 	if (!prevUrl) return;
	// 	setLoading('true');
	// 	let data = getAllPokemon(prevUrl);
	// 	await loadingPokemon(data.results);
	// 	setNextUrl(data.next);
	// 	setPrevUrl(data.previous);
	// }

	return (
		<Router>
			<div className="App" >
				<Header />
				<Route exact path="/">
					<Container>
						<h3>All Pokemons in one video</h3>
						<ReactPlayer
							url="https://www.youtube.com/watch?v=MfTMC-C48yU"
							playing='true'
							volume='0'
							controls='true'
						/>
					</Container>
				</Route>
				<Route path="/pokemons" render={props => (
					<Pokemons pokemonData={pokemonData} />
				)} />
				<Route path="/types" render={props => (
					<Types types={types} />
				)} />
				<Route
					path="/pokemon/:pokemonId/" render={props => (
						<PokemonInfo pokemonData={pokemonData} />
					)}

				/>
			</div>
		</Router>
	);
}


export default App;
