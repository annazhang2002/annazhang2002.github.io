import React from 'react'
import { Row, Col } from 'react-bootstrap';

import Tags from '../values/tags';
import ProjectCard from '../molecules/ProjectCard';

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

const codingProjects = [
    [{
        title: "EcoEat App",
        img: ecoeatGif,
        url: "https://github.com/CodeGreen-Dandilyonn/EcoEat/",
        text: `A react native mobile app that encourages sustainable eating and food waste 
        reduction by allowing users to get recipe recommendations based on pantry items`,
        tags: [Tags.appDev, Tags.design, Tags.fullstack],
    },
    {
        title: "Civic Citizen App",
        img: civicGif,
        url: "https://github.com/annazhang2002/CivicCitizen",
        text: "A civic engagement Android app that aims to increase voter turnout and help provide users with the information they need to make their voice heard in politics.",
        tags: [Tags.appDev, Tags.design, Tags.fullstack],
    },
    {
        title: "Pills2Me Website",
        img: pills2meGif,
        url: "https://github.com/pills2me/pills2me.github.io",
        text: `A ReactJS website for Pills2Me, a startup that connects elderly patients with
        volunteer drivers for free same-day medication delivery`,
        tags: [Tags.webDev, Tags.design],
    }],
    [{
        title: "EcoEat App",
        img: ecoeatGif,
        url: "https://github.com/CodeGreen-Dandilyonn/EcoEat/",
        text: `A react native mobile app that encourages sustainable eating and food waste 
        reduction by allowing users to get recipe recommendations based on pantry items`,
        tags: [Tags.appDev, Tags.design, Tags.fullstack],
    },
    {
        title: "Civic Citizen App",
        img: civicGif,
        url: "https://github.com/annazhang2002/CivicCitizen",
        text: "A civic engagement Android app that aims to increase voter turnout and help provide users with the information they need to make their voice heard in politics.",
        tags: [Tags.appDev, Tags.design, Tags.fullstack],
    },
    {
        title: "Pills2Me Website",
        img: pills2meGif,
        url: "https://github.com/pills2me/pills2me.github.io",
        text: `A ReactJS website for Pills2Me, a startup that connects elderly patients with
        volunteer drivers for free same-day medication delivery`,
        tags: [Tags.webDev, Tags.design],
    }]
]

const allProjects = [
    {
        name: "Coding",
        list: codingProjects,
    }
]

const Portfolio = () => {
    return (
        <div>
            {/* DISPLAY SECTIONS */}
            {allProjects.map((section) => {
                return (
                    <div className="section">
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
