import { motion } from 'framer-motion';
import React from 'react';

import '../../assets/css/About/About.scss';

const container = {
	visible: {
		transition: {
			staggerChildren: 0.025,
		},
	},
};

const About = () => {
	return (
		<div className=' bg-nature   flex justify-between px-12 md:px-24 w-screen '>
			<motion.div
				initial='hidden'
				animate='visible'
				variants={container}
				className='titles -mt-20 flex flex-col justify-center '>
				<div className='hero-title text-lime-700  uppercase '>
					<motion.p
						initial={{ y: '60%', opacity: 0 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: { ease: 'easeInOut', duration: 1 },
						}}
						className='md:-mb-8  drop-shadow-lg shadow-black text-7xl md:text-8xl'>
						tera
					</motion.p>

					<motion.p
						initial={{ y: '60%', opacity: 0 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: { ease: 'easeInOut', duration: 1, delay: 0.5 },
						}}
						className='drop-shadow-lg shadow-black text-7xl md:text-8xl'>
						Mukaam gamale
					</motion.p>
				</div>
				<motion.div
					initial={{ y: '60%', opacity: 0 }}
					animate={{
						y: 0,
						opacity: 1,
						transition: { ease: 'easeInOut', duration: 1, delay: 1 },
					}}
					className='subtitle text-center md:text-left pl-4    text-2xl md:text-3xl'>
					Choose where to roam
				</motion.div>
			</motion.div>
		</div>
	);
};

export default About;
