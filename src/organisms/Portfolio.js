import React from 'react'
import { Row, Col } from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll'

import Tags from '../values/tags';
import ProjectCard from '../molecules/ProjectCard';

/***** CARD IMAGES *********/
/* perfect squares please! */
import pills2me from '../images/projects/pills2me.png';
import civic from '../images/projects/civic.png';
import ecoeat from '../images/projects/ecoeat-logo.png';
import fcss from '../images/projects/fcss.png';
import goodreads from '../images/projects/goodreads.png';
import tictactoe from '../images/projects/tictactoe.png';
import rainforest from '../images/projects/rainforest.png';
import flixster from '../images/projects/flixster.png';
import ecosia from '../images/projects/ecosia.png';
import twitter from '../images/projects/twitter.png';
import codehaven from '../images/projects/codehaven.png';
import wics from '../images/projects/wics.png';
import campusCup from '../images/projects/campusCup.png';
import digitize from '../images/projects/digitize.png';
import ccsg from '../images/projects/ccsg.png';
import uri from '../images/projects/uri.png';
import unilever from '../images/projects/unilever.jpeg';
import gardenclub from '../images/projects/gardenclub.jpeg';

const codingProjects = [
    [{
        title: "EcoEat App",
        img: ecoeat,
        url: "https://github.com/CodeGreen-Dandilyonn/EcoEat/",
        text: `A react native mobile app that encourages sustainable eating and food waste 
        reduction by allowing users to get recipe recommendations based on pantry items`,
        tags: [Tags.appDev, Tags.design, Tags.fullstack],
    },
    {
        title: "Civic Citizen App",
        img: civic,
        url: "https://github.com/annazhang2002/CivicCitizen",
        text: "A civic engagement Android app that aims to increase voter turnout and help provide users with the information they need to make their voice heard in politics.",
        tags: [Tags.appDev, Tags.design, Tags.fullstack],
    },
    {
        title: "Pills2Me Website",
        img: pills2me,
        url: "https://github.com/pills2me/pills2me.github.io",
        text: `A ReactJS website for Pills2Me, a startup that connects elderly patients with
        volunteer drivers for free same-day medication delivery`,
        tags: [Tags.webDev, Tags.design],
    }],
    [{
        title: "First Combat Sound Simulator",
        img: fcss,
        url: "https://github.com/annazhang2002/FirstCombatSoundSimulator",
        text: "A military training iOS app using a 3D sound environment and MetaWearC sensors that adjusts sound environment based on head positioning.",
        tags: [Tags.appDev, Tags.research],
    },
    {
        title: "Rainforest Rescue",
        img: rainforest,
        url: "https://github.com/annazhang2002/RainforestRescue",
        text: "A Pico-8 game designed to educate people about the threats tropical rainforests are facing",
        tags: [Tags.game, Tags.sustainability],
    },
    {
        title: "Goodreads Scraper",
        img: goodreads,
        url: "https://github.com/annazhang2002/goodreads-scraper",
        text: `A Javascript tool that can scrape some data from goodreads on a user's ratings and favorite books`,
        tags: [Tags.fullstack],
    }],
    [{
        title: "Simple Tweet",
        img: twitter,
        url: "https://github.com/annazhang2002/SimpleTweet",
        text: "An mock Twitter Android app that utilized the Twitter Developer API to retrieve actual tweets from the current user's timeline",
        tags: [Tags.appDev],
    },
    {
        title: "Tic Tac Toe",
        img: tictactoe,
        url: "https://github.com/annazhang2002/TicTacToe",
        text: "A tic tac toe iOS app with a built-in computer algorithm opponent game mode",
        tags: [Tags.game, Tags.appDev],
    },
    {
        title: "Flixster",
        img: flixster,
        url: "https://github.com/annazhang2002/flixster",
        text: "A android app that allows users to view upcoming and popular movies along with their description, trailers, ratings, and genres",
        tags: [Tags.appDev],
    }]
]

const environmentalProjects = [
    [{
        title: "Yale on Ecosia",
        img: ecosia,
        url: "https://www.instagram.com/yale.on.ecosia/",
        text: `Founded Yale's Ecosia on Campus project team to encourage students to switch to Ecosia, the search engine that plants trees, resulting in 35,000+ searches made at Yale`,
        tags: [Tags.sustainability],
    },
    {
        title: "Sustainable Menstrual Products",
        img: campusCup,
        url: "https://www.instagram.com/p/CMPuBD9HjZE/",
        text: "Initiated campaign to spread awareness about menstrual cups and reusable period products as well as provide free Campus Cups for all Yale students",
        tags: [Tags.sustainability],
    },
    {
        title: "Climate Change Solutions Generator",
        img: ccsg,
        url: "https://www.greenbiz.com/article/how-demand-food-delivery-apps-could-encourage-low-carbon-food",
        text: "Published an article on how food delivery apps can encourage users to lower their food carbon footprint",
        tags: [Tags.webDev, Tags.design],
    }],
]

const designProjects = [
    [{
        title: "Urban Resources Initiative (URI)",
        img: uri,
        url: "https://uri.yale.edu/get-involved/request-free-tree",
        text: `Created and designed a new tree catalog for URI's free tree planting Greenskills program`,
        tags: [Tags.design],
    },
    {
        title: "Unilever Sustainable Personal Products",
        img: unilever,
        url: "",
        text: "Designed a prototype for a shower caddy and product refill station system to encourage college students to reduce plastic consumption in their personal care products",
        tags: [Tags.sustainability, Tags.design],
    },
    {
        title: "Garden Club of New Haven Website",
        img: gardenclub,
        url: "",
        text: "Led web design overhaul for the Garden Club as well as designing community outreach solutions to engage more volunteers in New Haven",
        tags: [Tags.design],
    }],
]

const allProjects = [
    {
        name: "Coding",
        list: codingProjects,
    },
    {
        name: "Environmental",
        list: environmentalProjects,
    },
    {
        name: "Design",
        list: designProjects,
    }
]

const Portfolio = () => {
    return (
        <div>
            {/* DISPLAY SECTIONS */}
            {allProjects.map((section) => {
                return (
                    <div className="section">
                        <ScrollAnimation animateIn="fadeIn">
                            <h1 className="section-title">{section.name}</h1>
                            {section.list.map((row) => {
                                return (
                                    <Row style={styles.projectRow}>
                                        {/* DISPLAY ROWS */}
                                        {row.map((proj) => {
                                            return (
                                                <Col lg={4}>
                                                    {/* DISPLAY PROJECTS */}
                                                    <ProjectCard
                                                        title={proj.title}
                                                        img={proj.img}
                                                        url={proj.url}
                                                        text={proj.text}
                                                        tags={proj.tags}
                                                    />
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                )
                            })}
                        </ScrollAnimation>
                    </div>
                )
            })}
        </div>
    );
}

const styles = {
    projectRow: {
        marginBottom: '50px'
    }
};

export default Portfolio;
