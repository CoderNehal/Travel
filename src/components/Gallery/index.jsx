import React, { useEffect } from 'react';
import { inspirationData } from '../../data/insipirationData';
import GalleryCard from './GaleryCard/GalleryCard';

const Gallery = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className='mt-16 bg-slate-50 md:px-6  lg:px-28 pb-20'>
			<h1 className='text-3xl px-4  tracking-wider py-6 lg:py-10 font-semibold'>
				Gallery
			</h1>

			<div className=' cards-container flex justify-between items-center  flex-wrap   '>
				{inspirationData.map((data, index) => {
					return <GalleryCard key={index} data={data} />;
				})}
			</div>
		</div>
	);
};

export default Gallery;
