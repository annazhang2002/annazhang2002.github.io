import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../style.css';
import { Link } from 'react-router-dom';

import Colors from '../colors';
const color = Colors.darkest;

console.log(color);

class Header extends Component {
	state = {
		toggleOpen: false,
		atTop: true
	};
	Toggle = () => {
		this.setState({ toggleOpen: !this.state.toggleOpen });
		console.log(this.state.toggleOpen);
	};

	headerColor = () => {
		if (!this.state.atTop || this.state.toggleOpen) {
			return { backgroundColor: color };
		} else {
			return { backgroundColor: 'transparent' };
		}
	};

	// logoColor = () => {
	// 	if (!this.state.atTop || this.state.toggleOpen) {
	// 		return white;
	// 	} else {
	// 		return blue;
	// 	}
	// };

	componentDidMount() {
		document.addEventListener('scroll', () => {
			const attop = window.scrollY < 100 ? true : false;
			this.setState({ atTop: attop });
		});
	}
	//

	render() {
		return (
			<div className="header" style={this.headerColor()}>
				<Navbar collapseOnSelect expand="lg" bg="" variant="dark">
					<Link to="/" className="my-container logo" onClick={() => window.scrollTo(0, 0)}>
						<h3 style={styles.navLink}>Anna Zhang</h3>
						{/* <img alt="Pills2Me" src={this.logoColor()} className="d-inline-block align-top logo" /> */}
					</Link>
					<Navbar.Toggle onClick={this.Toggle} aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto" />
						<Nav>
							<Link to="/" className="nav-link" onClick={() => window.scrollTo(0, 0)}>
								Portfolio
							</Link>
							<Link to="/about" className="nav-link" onClick={() => window.scrollTo(0, 0)}>
								About
							</Link>
							<Link to="/resume" className="nav-link" onClick={() => window.scrollTo(0, 0)}>
								Resume
							</Link>
							<Link to="/contact" className="nav-link" onClick={() => window.scrollTo(0, 0)}>
								Contact
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</div>
		);
	}
}

const styles = {
	navLink: {
		fontSize: '23px',
		fontWeight: '500',
		lineHeight: '22px',
		color: Colors.black
	}
};

export default Header;
