import React, { Component } from 'react';
import '../style.css';

import Colors from '../colors';

const Socials = () => {
	return (
		<div className="my-container space">
			<i class="material-icons fa" style={{ fontSize: '18px' }}>
				email
			</i>
			<a href="#" class="fa fa-linkedin" />
			<a href="#" class="fa fa-github" />
			<a href="#" class="fa fa-facebook" />
		</div>
	);
};

export default Socials;
