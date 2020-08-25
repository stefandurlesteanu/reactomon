import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';


function Header() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="/">Dark Pokemons</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/pokemons">Pokemons</Nav.Link>
					<Nav.Link href="/types">Types</Nav.Link>
					<Nav.Link href="/mypokemons">MyPokemons</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Header;

