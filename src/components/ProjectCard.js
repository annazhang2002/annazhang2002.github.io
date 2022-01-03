import React from 'react';
import '../style.css';

const ProjectCard = (props) => {
	return (
		<a href={props.url} target="_blank" rel="noopener noreferrer">
			<div className="my-container column-dir between cardContainer">
				<div className="my-container center">
					<img src={props.img} className="full-img cardImg" alt={props.imageAlt} />
				</div>

				<h2>{props.title}</h2>
				<p className="cardInfo">{props.text}</p>
				{props.tags}
			</div>
		</a>
	);
};

export default ProjectCard;
