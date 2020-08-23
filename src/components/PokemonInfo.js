import { useParams } from "react-router";
import React from 'react';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap'

const Card = styled.div`
	position: absolute;
	width: 700px;
	height: 450px;
	padding: 25px;
	padding-top: 0;
	padding-bottom: 0;
	left: 50%;
	top: 115px;
	margin-left: -220px;
	background: #E9E2D0;
	box-shadow: -20px 0 35px -25px black, 20px 0 35px -25px black;
	z-index: 5;
`

const Image = styled.img`
	width: 150px;
	float: left;
	border-radius: 5px;
	margin-right: 10px;
	-webkit-filter: sepia(1);
	-moz-filter: sepia(1);
	filter: sepia(1);
`

const Gradient = styled.div`
	background: #999955;
	background-image: linear-gradient(#DAB046 20%, #D73B25 20%, #D73B25 40%, #C71B25 40%, #C71B25 60%, #961A39 60%, #961A39 80%, #601035 80%);
	margin: 0 auto;
	margin-top: 100px;
	width: 100%;
	height: 150px;
	&:after{
		content: "";
		position: absolute;
		background: #E9E2D0;
		left: 50%;
		margin-top: -67.5px;
		margin-left: -270px;
		padding-left: 20px;
		border-radius: 5px;
		width: 800px;
		height: 500px;
		z-index: -1;
	}
`

const H2 = styled.h2`
	font-family: courier;
	color: #333;
	margin: 0 auto;
	padding: 0;
	font-size: 15pt;
	text-transform: uppercase;
`

const H3 = styled.h3`
	font-family: courier;
	color: #333;
	margin: 0 auto;
	padding: 0;
	font-size: 12pt;
	text-transform: uppercase;
`

const P = styled.p`
	font-family: courier;
	color: #555;
	font-size: 13px;
`

const PokemonInfo = ({ pokemonData }) => {
	let { pokemonId } = useParams();
	const pokemon = pokemonData.find((pokemon) => { return pokemon.id == pokemonId });
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		function waitForElement() {
			if (typeof pokemon !== "undefined") {
				setIsLoading(false)
			}
			else {
				setTimeout(waitForElement, 250);
			}
		}

		waitForElement();

	}, [pokemon])



	return (
		<>
			<Gradient></Gradient>
			<Card>
				{isLoading ? 'Loading....' : (
					<>
						<Image src={pokemon.sprites.front_default}></Image>
						<Container>
							<Row>
								<Col>
									<H2>{pokemon.name}</H2>
									<P></P>
									<P>Height: {pokemon.height}</P>
									<P>Base experience: {pokemon.base_experience}</P>
									<P>Abilities: {pokemon.types.map(type => {
										return <span style={{ textTransform: 'uppercase' }}>{type.type.name} </span>
									})}</P>
									<P>Weight: {pokemon.weight} </P>
								</Col>
								<Col>
									<P>
										<H3>Stats:</H3>
										<p></p>
										{pokemon.stats.map(stat => {
											return <p style={{ textTransform: 'capitalize' }}>{stat.stat.name} : {stat.base_stat} </p>
										})}
									</P>
								</Col>
							</Row>
						</Container>
					</>
				)}
			</Card>
		</>
	)

}

export default PokemonInfo;
