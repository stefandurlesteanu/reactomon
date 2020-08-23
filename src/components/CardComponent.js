import React from 'react';
import '../CustomCss.scss';
import styled from 'styled-components';

const Button = styled.button`
	left: 25px;
	top: 23px;
	position: absolute;
	border: none;
	color: white;
	padding: 20px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 10px;
	margin: 4px 2px;
	border-radius: 50%;
	font-family: 'Open Sans Condensed', 'Open Sans', helvetica, sans-serif;
	font-weight: 300;
	&:hover{
		transform: scale(1.2);
		color: black;
		text-transform: uppercase;
		transition: 1s;
		transition-timing-function: ease;
		font-size: 15px;
	}
`


function CardComponent({ pokemon }) {
	let cardClass = `card card--${pokemon.types[0].type.name}`
	console.log(pokemon.abilities[0].ability.name)

	return (
		<figure className={cardClass}>
			<a href={`pokemon/${pokemon.id}/`} ><Button className="card--normal">Info</Button></a>{' '}
			<div className="card__image-container">
				<img src={pokemon.sprites.front_default} alt="Jolteon" className="card__image" />

			</div>
			<figcaption className="card__caption">
				<h1 className="card__name">{pokemon.name}</h1>

				<h3 className="card__type">
					{pokemon.types[0].type.name}
				</h3>

				<table className="card__stats">
					<tbody>
						{pokemon.stats.map(stat => {
							return <>
								<tr>
									<th style={{ textTransform: 'capitalize' }}>{stat.stat.name}</th>
									<td>{stat.base_stat}</td>
								</tr>
							</>
						}
						)}
					</tbody></table>
				<div className="card__abilities">
					<h4 className="card__ability">
						<span className="card__label">Ability</span>
						{pokemon.abilities.map(type => {
							return <p style={{ fontSize: '12px', textTransform: 'capitalize', display: 'inline-block', marginRight: '5px' }}>{type.ability.name}</p>
						})}{' '}
					</h4>
				</div>
			</figcaption>
		</figure >
	)
}




export default CardComponent