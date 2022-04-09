import React from 'react';
import { inspirationData } from '../../data/insipirationData';
import GalleryCard from './GaleryCard/GalleryCard';

const Gallery = () => {
	return (
		<div className='mt-20 bg-slate-50 px-6  md:px-28 my-20'>
			<h1 className='text-3xl px-4  tracking-wider py-6 lg:py-10 font-semibold'>Gallery</h1>

			<div className=' cards-container flex justify-between items-center  flex-wrap   '>
				{inspirationData.map((data, index) => {
					return <GalleryCard data={data} />;
				})}
			</div>
		</div>
	);
};

export default Gallery;
