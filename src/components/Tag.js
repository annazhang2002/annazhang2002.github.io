import React, { Component } from 'react';
import '../style.css';

import Colors from '../colors';

const Tag = (props) => {
	return (
		<div
			className="my-container center"
			style={{ borderRadius: '20px', backgroundColor: props.color, margin: '5px' }}
		>
			<p style={styles.tagText}>{props.name}</p>
		</div>
	);
};

const styles = {
	tagText: {
		padding: '5px',
		paddingLeft: '20px',
		paddingRight: '20px',
		marginBottom: '0px',
		fontSize: '10px'
	}
};

export default Tag;
