import React from 'react';
import '../style.css';

import Header from '../molecules/Header';
import Footer from '../molecules/Footer';
import Hero from '../molecules/Hero';
import FeaturedProjects from '../organisms/FeaturedProjects';
import Portfolio from '../organisms/Portfolio';



const Homepage = () => (
	<div className="center-text">
		<Header solid={false} />

		{/************* HERO IMAGE *********************/}
		<Hero />
		{/************* FEATURED PROJECTS *********************/}
		<FeaturedProjects />

		{/************* ALL PROJECTS *********************/}
		<Portfolio />
		<Footer />
	</div>
);

export default Homepage;
