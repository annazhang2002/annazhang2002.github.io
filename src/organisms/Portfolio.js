import React from 'react'
import { Row, Col } from 'react-bootstrap';

import Tags from '../values/tags';
import ProjectCard from '../atoms/ProjectCard';

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

const Portfolio = () => {
    return (
        <div>
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
						tags={[Tags.appDev, Tags.design, Tags.fullstack]}
					/>
				</Col>
				<Col lg={4}>
					<ProjectCard
						title="Civic Citizen App"
						img={civicGif}
						url="https://github.com/annazhang2002/CivicCitizen"
						text="A civic engagement Android app that aims to increase voter turnout and help provide users with the information they need to make their voice heard in politics."
						tags={[Tags.appDev, Tags.design, Tags.fullstack]}
					/>
				</Col>
				<Col lg={4}>
					<ProjectCard
						title="Pills2Me Website"
						img={pills2meGif}
						url="https://github.com/pills2me/pills2me.github.io"
						text="A ReactJS website for Pills2Me, a startup that connects elderly patients with
						volunteer drivers for free same-day medication delivery"
						tags={[Tags.webDev, Tags.design]}
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
						tags={[Tags.appDev, Tags.research]}
					/>
				</Col>
				<Col lg={4}>
					<ProjectCard
						title="Rainforest Rescue"
						img={rainforest}
						url="https://github.com/annazhang2002/RainforestRescue"
						text="A game designed to educate people about the threats tropical rainforests are facing"
						tags={[Tags.game, Tags.sustainability]}
					/>
				</Col>
				<Col lg={4}>
					<ProjectCard
						title="Flixster"
						img={flixster}
						url="https://github.com/annazhang2002/Flixster"
						text="A android app that allows users to view upcoming and popular movies along with their description, trailers, ratings, and genres"
						tags={[Tags.appDev]}
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
						tags={[Tags.appDev, Tags.fullstack]}
					/>
				</Col>
				<Col lg={4}>
					<ProjectCard
						title="Simple Tweet"
						img={tweet}
						url="https://github.com/annazhang2002/SimpleTweet"
						text="An mock twitter app that utilized the Twitter Developer API to retrieve actual tweets from the current user's timeline"
						tags={[Tags.appDev]}
					/>
				</Col>
				<Col lg={4}>
					<ProjectCard
						title="Tic Tac Toe App"
						img={tictactoe}
						url="https://github.com/annazhang2002/TicTacToe"
						text="A tic tac toe app that allows a user to play a computer or friend"
						tags={[Tags.appDev]}
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
						tags={[Tags.education, Tags.volunteer, Tags.events]}
					/>
				</Col>
				<Col lg={4}>
					<ProjectCard
						title="Women in CS Social Chair"
						img={wics}
						url="http://yalewics.com/"
						text="An organization working to lower the gender gap in CS and build community within the womxn in CS at Yale"
						tags={[Tags.events]}
					/>
				</Col>
				<Col lg={4}>
					<ProjectCard
						title="Purple Hydrangea Project"
						img={php}
						url="https://www.thepurplehydrangeaproject.org/"
						text="As a tech developer, I helped create the website for the Purple Hydrangea Project, an organization striving to advocate for mental health awareness in teens and children."
						tags={[Tags.webDev, Tags.mh]}
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
						tags={[Tags.events, Tags.sustainability, Tags.mh]}
					/>
				</Col>
			</Row>
		</div>
        </div>
    );
}

const styles = {
	projectRow: {
		marginBottom: '50px'
	}
};

export default Portfolio;
