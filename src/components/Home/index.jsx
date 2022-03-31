import React, { useEffect } from 'react';

import '../../assets/css/Home/Home.scss';
import Header from './Header';
import Inspiration from './Inspiration';
import Box from './ChooseImg';
import Global from './Global';
const Home = () => {
	return (
		<div className=''>
			<Header />
			<Inspiration />
			<Box />
			<Global />
		</div>
	);
};

export default Home;
