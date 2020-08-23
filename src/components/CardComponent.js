import React from 'react';
import { Card, Nav, Button } from 'react-bootstrap';

function CardComponent({ pokemon }) {


	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img style={{ width: '9rem' }} variant="top" src={pokemon.sprites.front_default} alt="" />
			<Card.Body>
				<Card.Title>{pokemon.name}</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of
					the card's content.
    </Card.Text>
				<Nav.Link href={`/pokemon/${pokemon.id}/`}>
					<Button variant="primary" >More Details</Button>
				</Nav.Link>
				<div>
					{pokemon.types.map(type => {
						return <p>{type.type.name}</p>
					})}
				</div>
			</Card.Body>
		</Card>

	);
}

export default CardComponent