import React, { Component } from 'react';
import '../style.css';
import Colors from '../values/colors';

import ScrollAnimation from 'react-animate-on-scroll'

import Socials from '../atoms/Socials';

class Hero extends Component {
	constructor(props) {
		super(props);
		this.state = {
			windowWidth: 0,
			windowHeight: 0
		};
		this.updateDimensions = this.updateDimensions.bind(this);
	}

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener('resize', this.updateDimensions);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}

	updateDimensions() {
		let windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
		let windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0;

		this.setState({ windowWidth, windowHeight });
	}

	render() {
		if (this.state.windowWidth > 768) {
			return (
				<div className="hero-img">
					<video loop autoPlay muted id="bg-video">
						<source src={require('../images/bg_video.mp4')} type="video/mp4" />
					</video>
					<div className="my-container between heroContainer">
						<div className="my-container column-dir ">
							<ScrollAnimation animateIn='slideInLeft'>
								<h1 className="heroAnna">
									Anna<br /> Zhang
							</h1>
							</ScrollAnimation>
						</div>
						<div className="my-container column-dir heroText">
							<ScrollAnimation animateIn='slideInRight'>
								<p className="bio">
									An undergrad CS student passionate about computer science, sustainability, and
									psychology.
							</p>
								<Socials color={Colors.white} />
							</ScrollAnimation>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className="hero-img">
					<video loop autoPlay muted id="bg-video">
						<source src={require('../images/bg_video.mp4')} type="video/mp4" />
					</video>
					<div
						className="my-container center heroContainer column-dir"
						style={{ height: this.state.windowHeight }}
					>
						<h1 className="heroAnna">Anna Zhang</h1>
						<div className="my-container column-dir heroText">
							<p className="bio">
								An undergrad CS student passionate about computer science, sustainability, and
								psychology.
							</p>
							<Socials color={Colors.white} />
						</div>
					</div>
				</div>
			);
		}
	}
}

export default Hero;
