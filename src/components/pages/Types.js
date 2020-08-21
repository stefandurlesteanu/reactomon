import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Types() {

	const [types, setTypes] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(
				'https://pokeapi.co/api/v2/type',
			);

			setTypes(result.data.results);
		};

		fetchData();
	}, []);


	return (

		<ul>
			{types.map(item => (
				<li key={item.url}>
					<a href={item.url} target='_blank' rel="noopener noreferrer">{item.name}</a>
				</li>
			))}
		</ul>
	);
}

export default Types
