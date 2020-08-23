import React from 'react';
import { Table, Container } from 'react-bootstrap';

function Types({ types }) {

	return (
		<Container>
			<h1> Pokemon Types </h1>
			<Table responsive striped bordered hover variant="dark" >
				<thead >
					<tr>
						<th>Name</th>
						<th>Url</th>
					</tr>
				</thead>
				<tbody >
					{
						types.map(item => (
							<tr >
								<td key={item.url} >
									<>{item.name}</>
								</td>
								<td key={item.url} >
									<a href={item.url} target='_blank' rel="noopener noreferrer">{item.url}</a>
								</td>
							</tr>
						))
					}
				</tbody>
			</Table>
		</Container>

	);
}

export default Types
