import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style.css';
import Colors from '../colors';

import Header from '../components/Header';
import Socials from '../components/Socials';
import Tag from '../components/Tag';
import Footer from '../components/Footer';

import pills2me from '../images/projects/pills2me-web.png';
import ccsg from '../images/projects/ccsg-greenbiz.png';
import fcss from '../images/projects/fcss.png';

const Homepage = () => (
	<div className="center-text">
		<Header solid={true} />

		<Footer />
	</div>
);

const styles = {};

export default Homepage;
