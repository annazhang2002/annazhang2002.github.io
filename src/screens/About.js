import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import Gallery from 'react-grid-gallery';
import { Link } from 'react-router-dom';
import '../style.css';
import Colors from '../colors';

import Header from '../components/Header';
import Socials from '../components/Socials';
import Tag from '../components/Tag';
import Footer from '../components/Footer';
import Job from '../components/Job';
import Resume from '../images/resume.pdf';

import headshot from '../images/headshot.png';

/************** HOBBIES IMAGES  *******************/
import asl from '../images/ecs/asl.png';
import dance from '../images/ecs/dance.JPG';
import jumpVid from '../images/ecs/jumprope.mov';
import jumprope from '../images/ecs/jumprope.jpeg';
import knitting from '../images/ecs/knitting.jpg';
import orchid from '../images/ecs/orchids.jpg';
import stitch from '../images/ecs/stitch.jpg';
import protest from '../images/ecs/protest.jpg';
import reading from '../images/ecs/reading.jpg';
import baking from '../images/ecs/baking.jpg';
import hiking from '../images/ecs/hiking.jpg';
import hiking2 from '../images/ecs/hiking2.jpg';
import piano from '../images/ecs/piano.jpeg';

/************** FUN PICTURES **********************/
import activism from '../images/funpics/activism.jpg';
import pride from '../images/funpics/pride.JPG';
import fivek from '../images/funpics/5k.jpg';
import arthur from '../images/funpics/arthur.JPG';
import atl from '../images/funpics/atl.JPG';
import boba from '../images/funpics/boba.jpg';
import meme from '../images/funpics/meme.jpg';
import newport from '../images/funpics/newport.jpg';
import nh from '../images/funpics/nh.JPG';
import noodles from '../images/funpics/noodles.jpg';
import nyc from '../images/funpics/nyc.jpg';
import pescadero from '../images/funpics/pescadero.jpg';
import pottery from '../images/funpics/pottery.JPG';
import times from '../images/funpics/profile1.jpg';
import sf from '../images/funpics/sf.jpg';
import ski from '../images/funpics/ski.jpg';
import sunset from '../images/funpics/sunset.jpg';

const photos = [
	{
		src: knitting,
		thumbnail: knitting,
		caption: 'After joining the Stiles Knitting Circle, I made this blue and white scarf (GO YALE BULLDOGS!)'
	},
	{
		src: stitch,
		thumbnail: stitch,
		caption: 'Drawing of one of my favorite cartoon characters'
	},
	{
		src: dance,
		thumbnail: dance,
		caption: 'I love to dance! This photo is from my first performance with Yale Danceworks'
	},
	{
		src: jumpVid,
		thumbnail: jumprope,
		caption: 'Snapshot of my in my Yale Club Jump Rope team shirt!'
	},
	{
		src: orchid,
		thumbnail: orchid,
		caption: 'In the process of learning realism drawing!'
	},
	{
		src: asl,
		thumbnail: asl,
		caption: 'I recently began learning ASL through ASL at Yale (ASLaY) zoom tables '
	},
	{
		src: protest,
		thumbnail: protest,
		caption:
			'Here is a pic from a recent environmental protest, where we fought for climate action and climate justice'
	},
	{
		src: reading,
		thumbnail: reading,
		caption:
			'In my free time, I love getting lost in a good book. Some of my favorites include: Small Great Things by Jodi Picoult, And Then There Were None by Agatha Christie, and The Alchemist by Paulo Coehlo'
	},
	{
		src: hiking2,
		thumbnail: hiking2,
		caption: 'Hiking below the iconic California Redwood trees is my favorite!'
	},
	{
		src: piano,
		thumbnail: piano,
		caption: 'Piano has been a hobby of mine since I was 6, and my go-to song is Moonlight Sonata'
	},
	{
		src: hiking,
		thumbnail: hiking,
		caption: 'Hiking! This is from my favorite trail: Batteries to Bluff in SF'
	},
	{
		src: baking,
		thumbnail: baking,
		caption:
			"And finally, who doesn't love baking?? Mostly I like eating the baked goods, but anyways here are some lemon tarts I made"
	}
];

const funpics = [
	{
		src: fivek,
		thumbnail: fivek,
		caption: 'My first time ever running a 5K - this one was called "Run for Refugees"'
	},
	{
		src: activism,
		thumbnail: activism,
		caption: 'Another environmental protest, but make it San Francisco'
	},
	{
		src: atl,
		thumbnail: atl,
		caption: 'Meet my friend Wally the Whale Shark with me at the Georgia Aquarium'
	},
	{
		src: meme,
		thumbnail: arthur,
		caption: 'Halloween 2019 - click for a hint as to what I am dressed as'
	},
	{
		src: boba,
		thumbnail: boba,
		caption:
			'We use our reusable bottles to get boba, which reduces plastic while still helping to feed my boba addiction.'
	},
	{
		src: newport,
		thumbnail: newport,
		caption: 'Just a sunny day in Newport, Rhode Island'
	},
	{
		src: nh,
		thumbnail: nh,
		caption: "A west coaster's first real New England fall! Look at those colors!"
	},
	{
		src: noodles,
		thumbnail: noodles,
		caption: 'Making some delicious hand pulled Lanzhou noodles'
	},
	{
		src: nyc,
		thumbnail: nyc,
		caption: 'Your typical tourist photo on the Brooklyn Bridge'
	},
	{
		src: pescadero,
		thumbnail: pescadero,
		caption: 'Oh the wonders of the California HWY 1'
	},
	{
		src: pottery,
		thumbnail: pottery,
		caption: 'My first time using a pottery wheel!'
	},
	{
		src: pride,
		thumbnail: pride,
		caption: 'Oh my! A snake at SF pride!'
	},
	{
		src: times,
		thumbnail: times,
		caption: 'Another typical NYC tourist photo at Times Square'
	},
	{
		src: sf,
		thumbnail: sf,
		caption: 'My happy place :)'
	},
	{
		src: ski,
		thumbnail: ski,
		caption: 'Warning to first time skiiers: be prepared to fall A LOT'
	},
	{
		src: sunset,
		thumbnail: sunset,
		caption: 'Casual sunset at Merced State River Park'
	}
];

const Homepage = () => (
	<div className="center-text">
		<Header solid={true} />
		<div className="section" style={styles.topSection}>
			<Row>
				<Col md={6}>
					<img src={headshot} className="full-img" />
				</Col>
				<Col md={6} className="my-container center column-dir" style={styles.bio}>
					<h1 style={styles.helloText}>Hi, I'm Anna!</h1>
					<p>
						As an avid computer science student, I aim to highlight the importance of engineering as a means
						of promoting social good. In addition to software engineering, I am also incredibly passionate
						about environmental conservation, AI + linguistics, and psychology, so I want to combine these
						passions in my future careers. I believe that computer science has the power to change the world
						for the better, and I hope I can create and innovate in ways that promote social good.
					</p>
					<Socials color={Colors.accent} />
				</Col>
			</Row>
		</div>
		{/*************** HOBBY IMAGE GALLERY ****************/}
		<div className="section" style={styles.gallery}>
			<h1 className="section-heading">My Hobbies</h1>
			<Gallery images={images} enableImageSelection={false} />
		</div>

		{/*************** FUN PICTURES ****************/}
		<div className="section" style={styles.gallery}>
			<h1 className="section-heading">Just some fun pictures!</h1>
			<Gallery images={funImages} enableImageSelection={false} />
		</div>

		{/* <div className="section">
			<div style={styles.workContainer} className="shadow">
				<h1 className="section-heading">
					<a href={Resume} target="_blank">
						My Work Experience
					</a>
				</h1>
				<div className="my-container center column-dir">
					<Job company="Pills2Me" years="May 2020 - present" position="Software Engineering Intern" />
				</div>
			</div>
		</div> */}
		<Footer />
	</div>
);

const styles = {
	topSection: {
		marginTop: '50px'
	},
	helloText: {
		fontSize: '90px'
	},
	bio: {
		paddingLeft: '50px',
		paddingRight: '50px'
	},
	gallery: {
		display: 'block',
		minHeight: '1px',
		overflow: 'auto'
	},
	imgCaption: {
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
		height: '100%',
		overflow: 'hidden',
		position: 'absolute',
		bottom: '0',
		width: '100%',
		color: 'white',
		padding: '10px',
		fontSize: '90%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	workContainer: {
		padding: '5%',
		border: '2px solid black'
	}
};

const images = photos.map((i) => {
	i.customOverlay = (
		<div style={styles.imgCaption}>
			<div>{i.caption}</div>
		</div>
	);
	return i;
});

const funImages = funpics.map((i) => {
	i.customOverlay = (
		<div style={styles.imgCaption}>
			<div>{i.caption}</div>
		</div>
	);
	return i;
});

export default Homepage;
