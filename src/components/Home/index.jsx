import React, { useEffect } from 'react';

import '../../assets/css/Home/Home.scss';
import Header from './Header';
import Inspiration from './Inspiration';
import Box from './ChooseImg';
const Home = () => {
	return (
		<div className=''>
			<Header />
			<Inspiration />
			<Box />
		</div>
	);
};

export default Home;
