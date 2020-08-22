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

const Image = styled.img`
	width: 150px;
	float: left;
	border-radius: 5px;
	margin-right: 20px;
	-webkit-filter: sepia(1);
	-moz-filter: sepia(1);
	filter: sepia(1);
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




	const source = pokemonInfo.pokemonData ? pokemonInfo.pokemonData.sprites.front_default : ''
	// console.log(source)

	return (

		< Card >
			{pokemonInfo.pokemonData ? pokemonInfo.pokemonData.abilities[0].ability.name : ''}
			{pokemonInfo.pokemonData ? pokemonInfo.pokemonData.sprites.front_default : ''}
			<Image
				scr={`${source}`}
				alt="Pokemon image">
			</Image>


		</ Card >
	)
}

export default PokemonInfo;
