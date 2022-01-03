import React from 'react';
import '../style.css';

const Tag = (props) => {
	const color = props.tag.color;
	const name = props.tag.name;
	return (
		<div
			className="my-container center"
			style={{ borderRadius: '20px', backgroundColor: color, margin: '5px' }}
		>
			<p style={styles.tagText}>{name}</p>
		</div>
	);
};

const styles = {
	tagText: {
		padding: '5px',
		paddingLeft: '20px',
		paddingRight: '20px',
		marginBottom: '0px',
		fontSize: '10px',
		color: 'black',
	}
};

export default Tag;
