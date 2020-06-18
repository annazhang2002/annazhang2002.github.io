import React from 'react';
import {} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style.css';
import Colors from '../colors';

import Header from '../components/Header';
import Socials from '../components/Socials';

const Homepage = () => (
	<div className="center-text">
		<Header />
		<div className="hero-img">
			<div className="my-container between" style={styles.heroContainer}>
				<div className="my-container column-dir ">
					<h1 style={styles.heroAnna}>Anna</h1>
					<h1 style={styles.heroAnna}>Zhang</h1>
				</div>
				<div className="my-container column-dir " style={styles.heroText}>
					<p style={styles.bio}>
						An undergrad student passionate about computer science, sustainability, and psychology.
					</p>
					<Socials />
				</div>
			</div>
		</div>
		<div className="section">
			<h1>hello</h1>
		</div>
	</div>
);

const styles = {
	heroContainer: {
		width: '100%',
		padding: '13%',
		// paddingLeft: '200px',
		// paddingRight: '200px',
		height: '100vh'
	},
	heroText: {
		width: '35%',
		color: Colors.white
	},
	bio: {
		fontWeight: '500',
		fontSize: '24px',
		lineHeight: '33px'
	},
	heroAnna: {
		fontSize: '96px',
		lineHeight: '117px',
		color: Colors.white,
		textShadow: '5px 5px 5px #423F4E'
	}
};

export default Homepage;
