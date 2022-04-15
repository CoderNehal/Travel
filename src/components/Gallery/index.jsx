import React, { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { inspirationData } from '../../data/insipirationData';
import { Travelcontext } from '../../utils/Context/ContextAPI';
import GalleryCard from './GaleryCard/GalleryCard';

const Gallery = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [flag, setflag] = useContext(Travelcontext);
	const { ref, inView } = useInView({
		threshold: 0,
	});
	useEffect(() => {
		if (inView) {
			setflag(false);
		
		}
	}, [inView]);

	return (
		<div ref={ref} className='mt-16 bg-slate-50 md:px-6  lg:px-28 pb-20'>
			<h1 className='text-3xl px-4  tracking-wider py-6 lg:py-10 font-semibold'>
				Gallery
			</h1>

			<div
				ref={ref}
				className=' cards-container flex justify-between items-center  flex-wrap   '>
				{inspirationData.map((data, index) => {
					return <GalleryCard key={index} data={data} />;
				})}
			</div>
		</div>
	);
};

export default Gallery;
