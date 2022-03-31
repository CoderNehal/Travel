import React from 'react';

import GloblCard from './GlobalCard';
import { data } from '../../../data/GlobalData';
const Global = () => {
	return (
		<div className='w-screen  bg-black text-white px-8 lg:px-28  lg:py-40'>
			<h1 className='text-3xl lg:text-4xl font-bold uppercase tracking-wider pb-6'>
				Global Top
			</h1>
			{data.map((item, index) => (
				<GloblCard key={index} data={item} />
			))}
		</div>
	);
};

export default Global;
