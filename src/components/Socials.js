/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import '../style.css';

const Socials = (props) => {
	const styles = {
		icon: {
			color: props.color,
			borderColor: props.color
		},
		email: {
			fontSize: '18px',
			color: props.color,
			borderColor: props.color
		}
	};
	return (
		<div className="my-container space">
			<a href="mailto:anna.zhang@yale.edu">
				<i class="material-icons fa email" style={styles.email}>
					email
				</i>
			</a>
			<a href="https://www.linkedin.com/in/annazhang2002/" style={styles.icon} class="fa fa-linkedin" alt="Linkedin" />
			<a href="https://github.com/annazhang2002" style={styles.icon} class="fa fa-github" alt="Github" />
			<a
				href="https://www.facebook.com/profile.php?id=100011715346775"
				style={styles.icon}
				class="fa fa-facebook"
				alt="Facebook"
			/>
		</div>
	);
};

export default Socials;
