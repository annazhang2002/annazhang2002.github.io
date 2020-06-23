import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../style.css';
import Colors from '../colors';

import Header from '../components/Header';
import Socials from '../components/Socials';
import Tag from '../components/Tag';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

import dottech from '../images/dottech.png';

/**** FEATURE PROJECT IMAGES ******/
/* dimensions are 118* 1254 */
import pills2me from '../images/projects/pills2me-web.png';
import ccsg from '../images/projects/ccsg-greenbiz.png';
import fcss from '../images/projects/fcss-app.png';

/***** CARD IMAGES *********/
/* perfect squares please! */
import pills2meGif from '../images/projects/pills2me-gif.gif';
import fcssMe from '../images/projects/fcss.jpg';
import tictactoe from '../images/projects/tictactoe.png';
import rainforest from '../images/projects/rainforest.gif';
import codehaven from '../images/projects/codehaven.png';
import wics from '../images/projects/wics.png';
import php from '../images/projects/php.png';
import digitize from '../images/projects/digitize.png';
import ccsgTsai from '../images/projects/ccsg-tsai.png';
import ysec from '../images/projects/ysec.png';
import s4cd from '../images/projects/s4cd.png';

const Homepage = () => (
	<div className="center-text">
		<Header solid={false} />

		{/************* HERO IMAGE *********************/}
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
					<Socials color={Colors.white} />
				</div>
			</div>
		</div>

		{/************* FEATURED PROJECTS *********************/}
		<div className="section" id="portfolio">
			<h3 style={{ textAlign: 'left', marginBottom: '30px' }}>Featured Projects</h3>
			<Carousel className="shadow">
				<Carousel.Item>
					<Row>
						<Col md={6} className="my-container column-dir center" style={styles.carouselInfoContainer}>
							<h1>
								<a href="https://www.pills2me.com/">Pills2Me Web Development</a>
							</h1>
							<p style={styles.carouselInfo}>
								As the software engineering intern, I developed a ReactJS website for Pills2Me, a
								startup that connects elderly patients with volunteer drivers for free same-day
								medication delivery
							</p>
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
								<a href="https://www.greenbiz.com/article/how-demand-food-delivery-apps-could-encourage-low-carbon-food">
									Climate Change Solutions Generator
								</a>
							</h1>
							<p style={styles.carouselInfo}>
								After participating in Yale Tsai CITY's Climate Change Solutions Generator, my team and
								I were selected to have our article on food delivery app carbon ratings published by
								Greenbiz.
							</p>
							<div className="my-container space">
								<Tag name="Sustainability" color={Colors.sustainabilityTag} />
								<Tag name="Research" color={Colors.researchTag} />
							</div>
						</Col>
						<Col md={6} style={{ paddingLeft: '0px' }}>
							<img src={ccsg} className="full-img" />
						</Col>
					</Row>
				</Carousel.Item>
				<Carousel.Item>
					<Row>
						<Col md={6} className="my-container column-dir center" style={styles.carouselInfoContainer}>
							<h1>
								<a href="https://github.com/annazhang2002/FirstCombatSoundSimulator">
									First Combat Sound Simulator
								</a>
							</h1>
							<p style={styles.carouselInfo}>
								During my four week at COSMOS UCI, my team and I developed a military training iOS app
								using 3D sound spatialization to help new recruits train in a virtual sound environment,
								adjusted for head position with the MetaWearC sensors.
							</p>
							<div className="my-container space">
								<Tag name="App Developement" color={Colors.appTag} />
								<Tag name="Research" color={Colors.researchTag} />
							</div>
						</Col>
						<Col md={6} style={{ paddingLeft: '0px' }}>
							<img src={fcss} className="full-img" />
						</Col>
					</Row>
				</Carousel.Item>
			</Carousel>
		</div>

		{/************* ALL PROJECTS *********************/}
		<div className="section">
			{/************* CODING PROJECTS *********************/}
			<h1>Coding</h1>
			<Row style={styles.projectRow}>
				<Col lg={4}>
					<ProjectCard
						title="Pills2Me Website"
						img={pills2meGif}
						url="https://github.com/pills2me/pills2me.github.io"
						text="A ReactJS website for Pills2Me, a startup that connects elderly patients with
						volunteer drivers for free same-day medication delivery"
						tags={
							<div className="my-container space">
								<Tag name="Web Dev" color={Colors.webTag} />
								<Tag name="Frontend" color={Colors.frontendTag} />
							</div>
						}
					/>
				</Col>
				<Col lg={4}>
					<ProjectCard
						title="First Combat Sound Simulator"
						img={fcssMe}
						url="https://github.com/annazhang2002/FirstCombatSoundSimulator"
						text="A military training iOS app using a 3D sound environment and MetaWearC sensors"
						tags={
							<div className="my-container space">
								<Tag name="App Dev" color={Colors.appTag} />
								<Tag name="Research" color={Colors.researchTag} />
							</div>
						}
					/>
				</Col>
				<Col lg={4}>
					<ProjectCard
						title="Tic Tac Toe App"
						img={tictactoe}
						url="https://github.com/annazhang2002/TicTacToe"
						text="A tic tac toe app that allows a user to play a computer or friend"
						tags={
							<div className="my-container space">
								<Tag name="App Dev" color={Colors.appTag} />
							</div>
						}
					/>
				</Col>
			</Row>
			<Row>
				<Col lg={4}>
					<ProjectCard
						title="Rainforest Rescue"
						img={rainforest}
						url="https://github.com/annazhang2002/RainforestRescue"
						text="A game designed to educate people about the threats tropical rainforests are facing"
						tags={
							<div className="my-container space">
								<Tag name="Game Dev" color={Colors.gameTag} />
								<Tag name="Sustainability" color={Colors.sustainabilityTag} />
							</div>
						}
					/>
				</Col>
			</Row>
		</div>
		<div className="section">
			<h1>Community</h1>
			<Row style={styles.projectRow}>
				<Col lg={4}>
					<ProjectCard
						title="Code Haven Events Director"
						img={codehaven}
						url="https://www.codehavenyale.com/"
						text="Hosted events for Code Haven at Yale, an organization dedicated to teaching local New Haven students how to code in Scratch and MIT App Inventor"
						tags={
							<div>
								<div className="my-container space">
									<Tag name="Education" color={Colors.educationTag} />
									<Tag name="Volunteering" color={Colors.volunteerTag} />
								</div>
								<div className="my-container space">
									<Tag name="Event Planning" color={Colors.eventsTag} />
								</div>
							</div>
						}
					/>
				</Col>
				<Col lg={4}>
					<ProjectCard
						title="Women in CS Social Chair"
						img={wics}
						url="http://yalewics.com/"
						text="An organization working to lower the gender gap in CS and build community within the womxn in CS at Yale"
						tags={
							<div className="my-container space">
								<Tag name="Event Planning" color={Colors.eventsTag} />
							</div>
						}
					/>
				</Col>
				<Col lg={4}>
					<ProjectCard
						title="Purple Hydrangea Project"
						img={php}
						url="https://www.thepurplehydrangeaproject.org/"
						text="As a tech developer, I helped create the website for the Purple Hydrangea Project, an organization striving to advocate for mental health awareness in teens and children."
						tags={
							<div className="my-container space">
								<Tag name="Web Dev" color={Colors.webTag} />
								<Tag name="Mental Health" color={Colors.mhTag} />
							</div>
						}
					/>
				</Col>
			</Row>
			<Row>
				<Col lg={4}>
					<ProjectCard
						title="Digitize Hackathon Founder"
						img={digitize}
						url="https://www.digitizehackathon.tech/"
						text="Founded Digitize Hackathon as a way to empower students in CS to create innovative technological solutions that promote social good."
						tags={
							<div>
								<div className="my-container space">
									<Tag name="Event Planning" color={Colors.eventsTag} />
									<Tag name="Sustainability" color={Colors.sustainabilityTag} />
								</div>
								<div className="my-container space">
									<Tag name="Mental Health" color={Colors.mhTag} />
								</div>
							</div>
						}
					/>
				</Col>
			</Row>
		</div>
		<div className="section">
			<h1>Sustainability</h1>
			<Row>
				<Col lg={4}>
					<ProjectCard
						title="Climate Change Solutions Generator"
						img={ccsgTsai}
						url="https://www.greenbiz.com/article/how-demand-food-delivery-apps-could-encourage-low-carbon-food"
						text="Published an article on how food delivery apps can encourage users to lower their food carbon footprint."
						tags={
							<div className="my-container space">
								<Tag name="Sustainability" color={Colors.sustainabilityTag} />
								<Tag name="Research" color={Colors.researchTag} />
							</div>
						}
					/>
				</Col>
				<Col lg={4}>
					<ProjectCard
						title="Yale Student Environmental Coaltion"
						img={ysec}
						url="https://www.facebook.com/yaleysec/"
						text="As social chair, I've worked with YSEC to build community and gather better insight on how Yale can lower their carbon footprint."
						tags={
							<div className="my-container space">
								<Tag name="Sustainability" color={Colors.sustainabilityTag} />
								<Tag name="Event Planning" color={Colors.eventsTag} />
							</div>
						}
					/>
				</Col>
				<Col lg={4}>
					<ProjectCard
						title="Student for Carbon Dividends"
						img={s4cd}
						url="https://www.s4cd.org/"
						text="Managing the network of students and supporters of the carbon dividends bill on college campuses"
						tags={
							<div className="my-container space">
								<Tag name="Sustainability" color={Colors.sustainabilityTag} />
							</div>
						}
					/>
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
		color: Colors.white,
		textShadow: '1px 1px 20px #272635'
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
		textShadow: '5px 5px 10px #423F4E'
	},
	carouselInfoContainer: {
		padding: '50px',
		backgroundColor: Colors.lightest
	},
	carouselInfo: {
		textAlign: 'justify',
		margin: '20px',
		padding: '20px'
	},
	projectRow: {
		marginBottom: '50px'
	}
};

export default Homepage;
