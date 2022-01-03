import React from 'react';
import '../style.css';

import Colors from '../values/colors';

import dottech from '../images/dottech.png';

import Socials from '../atoms/Socials';

const Footer = () => {
	return (
		<div style={{ backgroundColor: Colors.darkest }}>
			{/* <img src={dottech} style={styles.dottech} /> */}
			<div className="my-container  column-dir space" style={styles.footer}>
				<div>
					<p>Feel free to reach out to me and get in contact!</p>
				</div>

				<Socials color={Colors.white} />
			</div>
			<p style={styles.bottomText}>
				Programmed in ReactJS and with the support of <img src={dottech} style={styles.dottech} alt="Dottech Logo" />
			</p>
		</div>
	);
};

const styles = {
	footer: {
		backgroundColor: Colors.darkest,
		height: '130px',
		color: Colors.white,
		padding: '5%'
	},
	dottech: {
		textAlign: 'left',
		bottom: '5px',
		left: '5px',
		width: '30px'
	},
	bottomText: {
		fontSize: '10px',
		color: Colors.white,
		marginBottom: '0px'
	}
};

export default Footer;
