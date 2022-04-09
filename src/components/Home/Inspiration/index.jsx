import React from 'react';

import { inspirationData } from '../../../data/insipirationData';
import Card from './Card/Card';
const Inspiration = () => {
	return (
		<div className='px-8 lg:px-24 py-6 pt-10 lg:py-10'>
			<h3 className='text-3xl lg:text-4xl '>Inspiration for your next trip</h3>
			<div className='wrapper mb-10 lg:pt-28 flex flex-col lg:flex-row justify-center lg:justify-evenly items-center  lg:h-96 py-5 '>
				{inspirationData.slice(0, 4).map((item, index) => {
					return <Card item={item} key={index} />;
				})}
			</div>
		</div>
	);
};

export default Inspiration;
