import React, { Component } from 'react';
import '../style.css';

import Colors from '../colors';

const ProjectCard = (props) => {
	return (
		<a href={props.url} target="_blank">
			<div className="my-container column-dir between cardContainer">
				<div className="my-container center">
					<img src={props.img} className="full-img cardImg" />
				</div>

				<h2>{props.title}</h2>
				<p className="cardInfo">{props.text}</p>
				{props.tags}
			</div>
		</a>
	);
};

export default ProjectCard;
