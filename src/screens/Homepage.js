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
		<Header solid={false} />
		<div className="hero-img">
			<div className="my-container between" style={styles.heroContainer}>
				<div className="my-container column-dir ">
					<h1 style={styles.heroAnna}>Anna</h1>
					<h1 style={styles.heroAnna}>Zhang</h1>
				</div>
				<div className="my-container column-dir " style={styles.heroText}>
					<p style={styles.bio}>
						An undergrad CS student passionate about computer science, sustainability, and psychology.
					</p>
					<Socials />
				</div>
			</div>
		</div>
		<div className="section" id="portfolio">
			<h3 style={{ textAlign: 'left' }}>Featured Projects</h3>
			<Carousel className="shadow">
				<Carousel.Item>
					<Row>
						<Col md={6} className="my-container column-dir center" style={styles.carouselInfoContainer}>
							<h1>
								<a href="">Pills2Me Web Development</a>
							</h1>
							<p>joasi oaij oidsj oi jdo ij oijo jo ijaoi jsd</p>
							<div className="my-container space">
								<Tag name="Web Dev" color={Colors.webTag} />
								<Tag name="Frontend" color={Colors.frontendTag} />
							</div>
						</Col>
						<Col md={6} style={{ paddingLeft: '0px' }}>
							<img src={pills2me} className="full-img" />
						</Col>
					</Row>
				</Carousel.Item>
				<Carousel.Item>
					<Row>
						<Col md={6} className="my-container column-dir center" style={styles.carouselInfoContainer}>
							<h1>
								<a href="">Climate Change Solutions Generator</a>
							</h1>
							<p>joasi oaij oidsj oi jdo ij oijo jo ijaoi jsd</p>
							<div className="my-container space">
								<Tag name="Sustainability" color={Colors.sustainabilityTag} />
								<Tag name="Writing" color={Colors.writingTag} />
							</div>
						</Col>
						<Col md={6} style={{ paddingLeft: '0px' }}>
							<img src={ccsg} className="full-img" />
						</Col>
					</Row>
				</Carousel.Item>
			</Carousel>
		</div>
		<div className="section">
			<h1>Coding</h1>
			<Row>
				<Col lg={4}>
					<div className="my-container column-dir center" style={styles.cardContainer}>
						<img src={fcss} className="full-img" style={styles.cardImg} />
						<h2>
							<a href="">TITLE</a>
						</h2>
						<p>lkjlkj lkj lkj lj ljlkj kjlkj </p>
						<div className="my-container space">
							<Tag name="Web Dev" color={Colors.webTag} />
							<Tag name="Frontend" color={Colors.frontendTag} />
						</div>
					</div>
				</Col>
				<Col lg={4}>
					<div className="my-container column-dir center" style={styles.cardContainer}>
						<img src={fcss} className="full-img" style={styles.cardImg} />
						<h2>
							<a href="">TITLE</a>
						</h2>
						<p>lkjlkj lkj lkj lj ljlkj kjlkj </p>
						<div className="my-container space">
							<Tag name="Web Dev" color={Colors.webTag} />
							<Tag name="Frontend" color={Colors.frontendTag} />
						</div>
					</div>
				</Col>
				<Col lg={4}>
					<div className="my-container column-dir center" style={styles.cardContainer}>
						<img src={fcss} className="full-img" style={styles.cardImg} />
						<h2>
							<a href="">TITLE</a>
						</h2>
						<p>lkjlkj lkj lkj lj ljlkj kjlkj </p>
						<div className="my-container space">
							<Tag name="Web Dev" color={Colors.webTag} />
							<Tag name="Frontend" color={Colors.frontendTag} />
						</div>
					</div>
				</Col>
			</Row>
		</div>
		<div className="section">
			<h1>Community</h1>
			<Row>
				<Col lg={4}>
					<div className="my-container column-dir center" style={styles.cardContainer}>
						<img src={fcss} className="full-img" style={styles.cardImg} />
						<h2>
							<a href="">TITLE</a>
						</h2>
						<p>lkjlkj lkj lkj lj ljlkj kjlkj </p>
						<div className="my-container space">
							<Tag name="Web Dev" color={Colors.webTag} />
							<Tag name="Frontend" color={Colors.frontendTag} />
						</div>
					</div>
				</Col>
				<Col lg={4}>
					<div className="my-container column-dir center" style={styles.cardContainer}>
						<img src={fcss} className="full-img" style={styles.cardImg} />
						<h2>
							<a href="">TITLE</a>
						</h2>
						<p>lkjlkj lkj lkj lj ljlkj kjlkj </p>
						<div className="my-container space">
							<Tag name="Web Dev" color={Colors.webTag} />
							<Tag name="Frontend" color={Colors.frontendTag} />
						</div>
					</div>
				</Col>
				<Col lg={4}>
					<div className="my-container column-dir center" style={styles.cardContainer}>
						<img src={fcss} className="full-img" style={styles.cardImg} />
						<h2>
							<a href="">TITLE</a>
						</h2>
						<p>lkjlkj lkj lkj lj ljlkj kjlkj </p>
						<div className="my-container space">
							<Tag name="Web Dev" color={Colors.webTag} />
							<Tag name="Frontend" color={Colors.frontendTag} />
						</div>
					</div>
				</Col>
			</Row>
		</div>
		<div className="section">
			<h1>Sustainability</h1>
			<Row>
				<Col lg={4}>
					<div className="my-container column-dir center" style={styles.cardContainer}>
						<img src={fcss} className="full-img" style={styles.cardImg} />
						<h2>
							<a href="">TITLE</a>
						</h2>
						<p>lkjlkj lkj lkj lj ljlkj kjlkj </p>
						<div className="my-container space">
							<Tag name="Web Dev" color={Colors.webTag} />
							<Tag name="Frontend" color={Colors.frontendTag} />
						</div>
					</div>
				</Col>
				<Col lg={4}>
					<div className="my-container column-dir center" style={styles.cardContainer}>
						<img src={fcss} className="full-img" style={styles.cardImg} />
						<h2>
							<a href="">TITLE</a>
						</h2>
						<p>lkjlkj lkj lkj lj ljlkj kjlkj </p>
						<div className="my-container space">
							<Tag name="Web Dev" color={Colors.webTag} />
							<Tag name="Frontend" color={Colors.frontendTag} />
						</div>
					</div>
				</Col>
				<Col lg={4}>
					<div className="my-container column-dir center" style={styles.cardContainer}>
						<img src={fcss} className="full-img" style={styles.cardImg} />
						<h2>
							<a href="">TITLE</a>
						</h2>
						<p>lkjlkj lkj lkj lj ljlkj kjlkj </p>
						<div className="my-container space">
							<Tag name="Web Dev" color={Colors.webTag} />
							<Tag name="Frontend" color={Colors.frontendTag} />
						</div>
					</div>
				</Col>
			</Row>
		</div>
		<Footer />
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
	},
	carouselInfoContainer: {
		padding: '50px',
		backgroundColor: Colors.lightBlue
	},
	cardContainer: {
		padding: '40px',
		margin: '10px',
		border: '2px solid ',
		borderColor: Colors.lightBlue
	},
	cardImg: {
		marginBottom: '30px'
	}
};

export default Homepage;
