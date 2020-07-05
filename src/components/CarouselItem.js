import React, { Component } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import '../style.css';
import Colors from '../colors';

import Socials from '../components/Socials';

const CarouselItem = (props) => (
	<Row>
		<Col
			md={6}
			className="my-container column-dir center carouselInfoContainer"
			style={styles.carouselInfoContainer}
		>
			<h1 className="project-title">
				<a href={props.url}>{props.title}</a>
			</h1>
			<p className="carouselInfo">{props.description}</p>
			{props.tags}
		</Col>
		<Col md={6} style={{ paddingLeft: '0px' }}>
			<img src={props.img} className="full-img" />
		</Col>
	</Row>
);

const styles = {
	carouselInfoContainer: {
		backgroundColor: Colors.lightest
	}
};
export default CarouselItem;
