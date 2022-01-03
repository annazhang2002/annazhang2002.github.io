import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import '../style.css';
import Colors from '../colors';

import Header from '../components/Header';
import Tag from '../components/Tag';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import Hero from '../components/Hero';
import CarouselItem from '../components/CarouselItem';

/**** FEATURE PROJECT IMAGES ******/
/* dimensions are 118* 1254 */
import ecoeat from '../images/projects/ecoeat.png';
import pills2me from '../images/projects/pills2me-web.png';
import ccsg from '../images/projects/ccsg-greenbiz.png';
import fcss from '../images/projects/fcss-app.png';

/***** CARD IMAGES *********/
/* perfect squares please! */
import pills2meGif from '../images/projects/pills2me-gif.gif';
import civicGif from '../images/projects/civic.gif';
import ecoeatGif from '../images/projects/ecoeat.gif';
import fcssMe from '../images/projects/fcss.jpg';
import tictactoe from '../images/projects/tictactoe.png';
import rainforest from '../images/projects/rainforest.gif';
import flixster from '../images/projects/flixster.gif';
import parstagram from '../images/projects/parstagram.gif';
import tweet from '../images/projects/tweet.gif';
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
		<Hero />
		{/************* FEATURED PROJECTS *********************/}
		<div className="section" id="portfolio">
			<h3 style={{ textAlign: 'left', marginBottom: '30px' }}>Featured Projects</h3>
			<Carousel className="shadow">
				<Carousel.Item>
					<CarouselItem
						title="EcoEat App"
						url="https://github.com/CodeGreen-Dandilyonn/EcoEat/"
						description="With my SEEDS Team, I created the EcoEat app which provides users with recipes based
						 on their on-hand ingredients in order to empower them to reduce their food waste and make sustainable
						 choices."
						tags={
							<div className="my-container space">
								<Tag name="App Dev" color={Colors.appTag} />
								<Tag name="Design" color={Colors.designTag} />
								<Tag name="FullStack" color={Colors.fullstackTag} />
							</div>
						}
						img={ecoeat}
						alt="EcoEat Demo"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<CarouselItem
						title="Pills2Me Web Development"
						url="https://www.pills2me.com/"
						description="As the software engineering intern, I developed a ReactJS website for Pills2Me, a
					startup that connects elderly patients with volunteer drivers for free same-day
					medication delivery"
						tags={
							<div className="my-container space">
								<Tag name="Web Dev" color={Colors.webTag} />
								<Tag name="Design" color={Colors.designTag} />
							</div>
						}
						img={pills2me}
						alt="Pill2Me Website"
					/>
				</Carousel.Item>

				<Carousel.Item>
					<CarouselItem
						title="Climate Change Solutions Generator"
						url="https://www.greenbiz.com/article/how-demand-food-delivery-apps-could-encourage-low-carbon-food"
						description="After participating in Yale Tsai CITY's Climate Change Solutions Generator, my team and
						I were selected to have our article on food delivery app carbon ratings published by
						Greenbiz."
						tags={
							<div className="my-container space">
								<Tag name="Sustainability" color={Colors.sustainabilityTag} />
								<Tag name="Research" color={Colors.researchTag} />
							</div>
						}
						img={ccsg}
						alt="Article Preview"
					/>
				</Carousel.Item>
				<Carousel.Item>
					<CarouselItem
						title="First Combat Sound Simulator"
						url="https://github.com/annazhang2002/FirstCombatSoundSimulator"
						description="During my four week at COSMOS UCI, my team and I developed a military training iOS app
						using 3D sound spatialization to help new recruits train in a virtual sound environment,
						adjusted for head position with the MetaWearC sensors."
						tags={
							<div className="my-container space">
								<Tag name="App Developement" color={Colors.appTag} />
								<Tag name="Research" color={Colors.researchTag} />
							</div>
						}
						img={fcss}
						alt="App Demo"
					/>
				</Carousel.Item>
			</Carousel>
		</div>

		{/************* ALL PROJECTS *********************/}
		<div className="section">
			{/************* CODING PROJECTS *********************/}
			<h1 className="section-title">Coding</h1>
			<Row style={styles.projectRow}>
				<Col lg={4}>
					<ProjectCard
						title="EcoEat App"
						img={ecoeatGif}
						url="https://github.com/CodeGreen-Dandilyonn/EcoEat/"
						text="A react native mobile app that encourages sustainable eating and food waste 
						reduction by allowing users to get recipe recommendations based on pantry items"
						tags={
							<div className="my-container space">
								<Tag name="App Dev" color={Colors.appTag} />
								<Tag name="Design" color={Colors.designTag} />
								<Tag name="FullStack" color={Colors.fullstackTag} />
							</div>
						}
					/>
				</Col>
				<Col lg={4}>
					<ProjectCard
						title="Civic Citizen App"
						img={civicGif}
						url="https://github.com/annazhang2002/CivicCitizen"
						text="A civic engagement Android app that aims to increase voter turnout and help provide users with the information they need to make their voice heard in politics."
						tags={
							<div className="my-container space">
								<Tag name="App Dev" color={Colors.appTag} />
								<Tag name="Design" color={Colors.designTag} />
								<Tag name="FullStack" color={Colors.fullstackTag} />
							</div>
						}
					/>
				</Col>
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
								<Tag name="Design" color={Colors.designTag} />
							</div>
						}
					/>
				</Col>
				
				
			</Row>
			<Row>
			<Col lg={4}>
					<ProjectCard
						title="First Combat Sound Simulator"
						img={fcssMe}
						url="https://github.com/annazhang2002/FirstCombatSoundSimulator"
						text="A military training iOS app using a 3D sound environment and MetaWearC sensors that adjusts sound environment based on head positioning."
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
						title="Rainforest Rescue"
						img={rainforest}
						url="https://github.com/annazhang2002/RainforestRescue"
						text="A game designed to educate people about the threats tropical rainforests are facing"
						tags={
							<div className="my-container space">
								<Tag name="Game" color={Colors.gameTag} />
								<Tag name="Sustainability" color={Colors.sustainabilityTag} />
							</div>
						}
					/>
				</Col>
				<Col lg={4}>
					<ProjectCard
						title="Flixster"
						img={flixster}
						url="https://github.com/annazhang2002/Flixster"
						text="A android app that allows users to view upcoming and popular movies along with their description, trailers, ratings, and genres"
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
						title="Parstagram"
						img={parstagram}
						url="https://github.com/annazhang2002/Parstagram"
						text="A social media networking app that emulates Instagram, but it uses a Parse backend database to store user information."
						tags={
							<div className="my-container space">
								<Tag name="App Dev" color={Colors.appTag} />
								<Tag name="Fullstack" color={Colors.fullstackTag} />
							</div>
						}
					/>
				</Col>
				<Col lg={4}>
					<ProjectCard
						title="Simple Tweet"
						img={tweet}
						url="https://github.com/annazhang2002/SimpleTweet"
						text="An mock twitter app that utilized the Twitter Developer API to retrieve actual tweets from the current user's timeline"
						tags={
							<div className="my-container space">
								<Tag name="App Dev" color={Colors.appTag} />
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
		</div>
		<div className="section">
			<h1 className="section-title">Community</h1>
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
			<h1 className="section-title">Sustainability</h1>
			<Row style={styles.projectRow}>
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
	projectRow: {
		marginBottom: '50px'
	}
};

export default Homepage;
