import React, { Component } from 'react';
import '../style.css';

import Colors from '../colors';

import dottech from '../images/dottech.png';

import Socials from './Socials';

const Footer = () => {
	return (
		<div>
			{/* <img src={dottech} style={styles.dottech} /> */}
			<div className="my-container  column-dir space" style={styles.footer}>
				<div>
					<p>Feel free to reach out to me and get in contact</p>
					<h2>anna.zhang@yale.edu</h2>
				</div>

				<Socials color={Colors.black} />
			</div>
		</div>
	);
};

const styles = {
	footer: {
		backgroundColor: Colors.lightest,
		height: '220px',
		color: Colors.black
	},
	dottech: {
		bottom: '1%',
		left: '1%',
		width: '30px'
	}
};

export default Footer;
