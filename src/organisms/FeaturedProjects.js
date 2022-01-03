import React from 'react';
import '../style.css';

import { Carousel } from 'react-bootstrap';
import CarouselItem from '../atoms/CarouselItem';
import Tags from '../values/tags';

/* dimensions are 118* 1254 */
import ecoeat from '../images/projects/ecoeat.png';
import pills2me from '../images/projects/pills2me-web.png';
import ccsg from '../images/projects/ccsg-greenbiz.png';
import fcss from '../images/projects/fcss-app.png';

const projects = [
    {
        title: "EcoEat App",
        url: "https://github.com/CodeGreen-Dandilyonn/EcoEat/",
        description: `With my SEEDS Team, I created the EcoEat app which provides users with recipes based
        on their on-hand ingredients in order to empower them to reduce their food waste and make sustainable
        choices.`,
        tags: [Tags.appDev, Tags.design],
        img: ecoeat,
        alt: "EcoEat Demo",
    },
    {
        title: "Pills2Me Web Development",
        url: "https://www.pills2me.com/",
        description: `As the software engineering intern, I developed a ReactJS website for Pills2Me, a
        startup that connects elderly patients with volunteer drivers for free same-day
        medication delivery`,
        tags: [Tags.webDev, Tags.design],
        img: pills2me,
        alt: "Pill2Me Website",
    },
]

const FeaturedProjects = () => {
    return (
        <div className="section" id="portfolio">
            <h3 style={styles.title}>Featured Projects</h3>
            <Carousel className="shadow">
                {projects.map((proj) => {
                    return (
                        <Carousel.Item>
                            <CarouselItem
                                title={proj.title}
                                url={proj.url}
                                description={proj.description}
                                tags={proj.tags}
                                img={proj.img}
                                alt={proj.alt}
                            />
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </div>
    );
};

const styles = {
    title: {
        textAlign: 'left', marginBottom: '30px'
    }
};

export default FeaturedProjects;
