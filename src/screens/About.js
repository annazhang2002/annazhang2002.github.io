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
					<h4>
						a;lj;lj oij oij ojoij ojojsdof joiawjeojaosdj oawijef oajsf ojwaeof joa jfoiwejf aosjfoi
						wiejfsanoahego ;h；
					</h4>
					<Socials color={Colors.accent} />
				</Col>
			</Row>
		</div>
		<div className="section" style={styles.gallery}>
			<h1 className="section-heading">What I Like to Do</h1>
			<Gallery images={images} enableImageSelection={false} />
		</div>
		<div className="section">
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
		</div>
		<Footer />
	</div>
);

const photos = [
	{
		src: 'https://c7.staticflickr.com/9/8106/28941228886_86d1450016_b.jpg',
		thumbnail: 'https://c7.staticflickr.com/9/8106/28941228886_86d1450016_n.jpg',
		thumbnailWidth: 271,
		thumbnailHeight: 320,
		caption: 'Orange Macro (Tom Eversley - isorepublic.com)'
	},
	{
		src: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_b.jpg',
		thumbnail: 'https://c3.staticflickr.com/9/8583/28354353794_9f2d08d8c0_n.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 190,
		caption: '286H (gratisography.com)'
	},
	{
		src: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_b.jpg',
		thumbnail: 'https://c7.staticflickr.com/9/8569/28941134686_d57273d933_n.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 148,
		caption: '315H (gratisography.com)'
	},
	{
		src: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_b.jpg',
		thumbnail: 'https://c6.staticflickr.com/9/8342/28897193381_800db6419e_n.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 213,
		caption: '201H (gratisography.com)'
	},
	{
		src: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_b.jpg',
		thumbnail: 'https://c2.staticflickr.com/9/8239/28897202241_1497bec71a_n.jpg',
		thumbnailWidth: 248,
		thumbnailHeight: 320,
		caption: 'Big Ben (Tom Eversley - isorepublic.com)'
	},
	{
		src: 'https://c1.staticflickr.com/9/8785/28687743710_870813dfde_h.jpg',
		thumbnail: 'https://c1.staticflickr.com/9/8785/28687743710_3580fcb5f0_n.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 113,
		caption: 'Red Zone - Paris (Tom Eversley - isorepublic.com)'
	},
	{
		src: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_b.jpg',
		thumbnail: 'https://c6.staticflickr.com/9/8520/28357073053_cafcb3da6f_n.jpg',
		thumbnailWidth: 313,
		thumbnailHeight: 320,
		caption: 'Wood Glass (Tom Eversley - isorepublic.com)'
	},
	{
		thumbnail: 'https://c8.staticflickr.com/9/8104/28973555735_ae7c208970_n.jpg',
		thumbnailWidth: 320,
		thumbnailHeight: 213,
		caption: 'Flower Interior Macro (Tom Eversley - isorepublic.com)'
	}
];

const styles = {
	topSection: {
		marginTop: '50px'
	},
	helloText: {
		fontSize: '110px'
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
		padding: '2px',
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

export default Homepage;
