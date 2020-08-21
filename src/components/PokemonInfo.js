import { useParams } from "react-router";
import axios from 'axios';
import { useState, useEffect } from 'react';
import React from 'react'
// import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components'

const Card = styled.div`
	position: absolute;
	width: 450px;
	height: 225px;
	padding: 25px;
	padding-top: 0;
	padding-bottom: 0;
	left: 50%;
	top: 67.5px;
	margin-left: -250px;
	background: #E9E2D0;
	box-shadow: -20px 0 35px -25px black, 20px 0 35px -25px black;
	z-index: 5;
`

const PokemonInfo = () => {
	let { pokemonId } = useParams();
	const [pokemonInfo, setPokemonInfo] = useState({
		loading: false,
		pokemonData: null
	});



	useEffect(() => {
		setPokemonInfo({ loading: true })
		axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
			.then(result => {
				const data = result.data;
				setPokemonInfo({ loading: false, pokemonData: data })
			})
	}, [pokemonId, setPokemonInfo]);




	return (
		<Card>
			{pokemonInfo.pokemonData ? pokemonInfo.pokemonData.abilities[0].ability.name : ''}
		</Card>
	)
}

export default PokemonInfo;
