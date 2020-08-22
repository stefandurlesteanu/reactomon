import axios from 'axios';

export async function getAllPokemon(url) {
	return new Promise((resolve, reject) => {
		axios.get(url)
			.then(response => {
				resolve(response.data);
			})
	})
}
