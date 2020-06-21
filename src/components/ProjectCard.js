import React, { Component } from 'react';
import '../style.css';

import Colors from '../colors';

const ProjectCard = (props) => {
	return (
		<div className="my-container column-dir between" style={styles.cardContainer}>
			<img src={props.img} className="full-img" style={styles.cardImg} />
			<h2>
				<a href={props.url} target="_blank">
					{props.title}
				</a>
			</h2>
			<p style={styles.cardInfo}>{props.text}</p>
			{props.tags}
		</div>
	);
};

const styles = {
	cardContainer: {
		padding: '20px',
		margin: '10px',
		// border: '2px solid ',
		// borderColor: Colors.lightBlue,
		boxShadow: '2px 5px 8px #888888',
		height: '100%',
		alignContents: 'baseline'
	},
	cardImg: {
		marginBottom: '30px'
	},
	cardInfo: {
		textAlign: 'justify',
		fontSize: '12px',
		marginTop: '20px'
	}
};

export default ProjectCard;
