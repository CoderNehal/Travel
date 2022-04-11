import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/css/GallertCard/GalleryCard.scss';
const GalleryCard = ({ data }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: {
					duration: 0.3,
				},
			}}
			className='gallery-card p-4    sm:w-1/2 lg:w-1/3   '>
			<Link to={`/locations/${data.city}`}>
				<div className='inner-card cursor-pointer relative  overflow-hidden'>
					<div className=' overlay justify-center items-center font-semibold text-2xl md:text-3xl lg:text-2xl xl:text-3xl z-10 absolute text-white   w-full h-full hover-wali-div'>
						<p className=' hover:scale-125 transition duration-150 ease-in-out '>
							{data.city}
						</p>
					</div>
					<div className='gallery-imgbox h-full'>
						<img
							className=' w-screen h-56 md:h-64 md:w-full object-cover object-center'
							src={data.img}
							alt=''
						/>
					</div>
					<div className='  gallery-tag text-lg sm:text-base md:text-sm  xl:text-lg text-center pt-2  md:pt-2 xl:pt-5 bg-red-600 border text-white h-full translate-x-1/2 translate-y-1/2 absolute w-full  top-0 -rotate-45 '>
						Starts from ₹{data.price[0]}
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default GalleryCard;
