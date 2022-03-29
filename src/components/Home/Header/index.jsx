import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
const container = {
	visible: {
		transition: {
			staggerChildren: 0.025,
		},
	},
};
const Header = () => {
	return (
		<div className=' bg-nature  flex justify-between  md:px-24 w-screen '>
			<motion.div
				initial='hidden'
				animate='visible'
				variants={container}
				className='titles -mt-20 flex flex-col justify-center '>
				<div className='hero-title text-blue-700  uppercase  flex flex-col'>
					<motion.p
						initial={{ y: '60%', opacity: 0 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: { ease: 'easeInOut', duration: 1 },
						}}
						className='md:-mb-8  drop-shadow-lg shadow-black text-7xl md:text-8xl text-center lg:text-left'>
						World
					</motion.p>

					<motion.p
						initial={{ y: '60%', opacity: 0 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: { ease: 'easeInOut', duration: 1, delay: 0.5 },
						}}
						className='drop-shadow-lg shadow-black text-7xl md:text-8xl text-center mb-5 lg:mv-0'>
						of paradise
					</motion.p>
				</div>
				<motion.div
					initial={{ y: '60%', opacity: 0 }}
					animate={{
						y: 0,
						opacity: 1,
						transition: { ease: 'easeInOut', duration: 1, delay: 1 },
					}}
					className='subtitle text-center  md:text-left  rounded-2xl py-2 px-6  border border-yellow-200  bg-gray-400 backdrop-blur-xl shadow-lg text-white   text-2xl md:text-3xl mx-auto lg:mx-0 '>
					Choose where to roam
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Header;
