import React from 'react';
import '../style.css';
import styled from '@emotion/styled/macro'

import TagDiv from '../atoms/TagDiv';

const ProjectCard = (props) => {
	return (
		<a href={props.url} target="_blank" rel="noopener noreferrer">
			<Background img={props.img}>
				<DisplayOver className="my-container column-dir between" img={props.img}>
					{/* <div className="my-container center"> */}
					{/* <img src={props.img} className="full-img cardImg" alt={props.imageAlt} /> */}
					{/* </div> */}
					<Hover>
						<h2>{props.title}</h2>
						<p className="cardInfo">{props.text}</p>
						<TagDiv tags={props.tags} />
					</Hover>
				</DisplayOver>
			</Background>
		</a>
	);
};

const DisplayOver = styled.div({
	transition: "background-color 350ms ease",
	padding: "50px",
	borderRadius: "15px",
	width: "100%",
	height: "100%",
	minHeight: '400px',
});

const Hover = styled.div({
	opacity: 0,
	transition: "opacity 350ms ease",
	color: "white",
	width: "100%",
	height: "100%",
});


const Background = styled.div({
	display: "flex",
	alignItems: "center",
	alignContent: "space-around",
	flexDirection: "column",
	borderRadius: "15px",
	backgroundPosition: "center",
	backgroundSize: "cover",
	height: "100%",
	boxShadow: "5px 10px 10px #888888",

	[`:hover ${DisplayOver}`]: {
		backgroundColor: "rgba(0,0,0,.5)",
	},
	[`:hover ${Hover}`]: {
		opacity: 1,
	},
},
	props => ({ backgroundImage: `url(${props.img})` })
)
export default ProjectCard;
