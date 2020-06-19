import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../style.css';
import { Link } from 'react-router-dom';

import Resume from '../images/resume.pdf';

import Colors from '../colors';
const color = Colors.darkest;
const black = Colors.black;
const white = Colors.white;

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
		if (!this.state.atTop || this.state.toggleOpen || this.props.solid) {
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
						<h3 style={styles.nameLink} className="nav-link">
							Anna Zhang
						</h3>
						{/* <img alt="Pills2Me" src={this.logoColor()} className="d-inline-block align-top logo" /> */}
					</Link>
					<Navbar.Toggle onClick={this.Toggle} aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto" />
						<Nav>
							<Link
								to="/"
								style={styles.navLink}
								className="nav-link"
								onClick={() => window.scrollTo('#portfolio')}
							>
								Portfolio
							</Link>
							<Link
								to="/about"
								style={styles.navLink}
								className="nav-link"
								onClick={() => window.scrollTo(0, 0)}
							>
								About
							</Link>
							<a
								href={Resume}
								target="_blank"
								style={(styles.navLink, { color: Colors.lightest })}
								className="nav-link"
							>
								Resume
							</a>
							<Link
								to="/contact"
								style={styles.navLink}
								className="nav-link"
								onClick={() => window.scrollTo(0, 0)}
							>
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
	nameLink: {
		fontSize: '23px',
		fontWeight: '500',
		lineHeight: '22px',
		color: Colors.lightest,
		textDecoration: 'none',
		textShadow: '1px 1px 20px #272635'
	}
};

export default Header;
