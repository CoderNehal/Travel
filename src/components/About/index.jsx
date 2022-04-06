import React from 'react';

import '../../assets/css/About/About.scss';
import AboutText from './AboutText/AboutText';

import family from '../../assets/images/people.jpg';
import Founder from './Founder';
const About = () => {
	return (
		<>
			<img
				className='family mt-16 md:mt-0   object-cover'
				src={family}
				alt=''
			/>
			<AboutText />
			<Founder />
		</>
	);
};

export default About;
