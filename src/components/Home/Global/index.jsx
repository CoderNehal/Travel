import React, { useContext, useEffect } from 'react';

import GloblCard from './GlobalCard';
import { data } from '../../../data/GlobalData';
import { Travelcontext } from '../../../utils/Context/ContextAPI';
import { useInView } from 'react-intersection-observer';
const Global = () => {
	const [flag, setflag] = useContext(Travelcontext);
	const { ref, inView } = useInView();
	useEffect(() => {

		if (inView) {
			setflag(true);
		}
		if (!inView) {
			setflag(false);
		}
	}, [flag, inView]);

	return (
		<div
			ref={ref}
			className='w-screen  bg-black text-white px-4 lg:px-28  lg:py-40'>
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
