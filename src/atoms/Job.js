import React from 'react';
import '../style.css';

const Job = (props) => {
	return (
		<div style={{ width: '100%' }}>
			<div className="my-container between">
				<h3>{props.company}</h3>
				<h4>{props.years}</h4>
			</div>
			<div className="my-container between">
				<h5>{props.position}</h5>
			</div>
		</div>
	);
};

export default Job;
