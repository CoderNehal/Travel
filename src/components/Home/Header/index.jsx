import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
const container = {
	visible: {
		transition: {
			staggerChildren: 0.125,
		},
	},
};

const Header = () => {
	const navigate = useNavigate();
	return (
		<div className=' bg-nature   flex justify-center px-3  md:px-24 w-screen '>
			<motion.div
				initial='hidden'
				animate='visible'
				variants={container}
				className='titles -mt-20 flex flex-col justify-center leading-tight md:leading-normal '>
				<div className='hero-title text-violet-700  uppercase  flex flex-col items-center'>
					<motion.p
						initial={{ y: '60%', opacity: 0 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: { ease: 'easeInOut', duration: 1 },
						}}
						className='md:-mb-8 drop-shadow-lg border-yellow-200 md:border-b-2   shadow-black text-7xl md:text-8xl text-center lg:text-left '>
						Where the
					</motion.p>

					<motion.p
						initial={{ y: '60%', opacity: 0 }}
						animate={{
							y: 0,
							opacity: 1,
							transition: { ease: 'easeInOut', duration: 1, delay: 0.5 },
						}}
						className='drop-shadow-lg border-yellow-200 md:border-b-2 md:pt-10   shadow-black text-7xl md:text-8xl text-center mb-5 lg:mv-0'>
						journey begins
					</motion.p>
				</div>

				<motion.div
					initial={{ y: '60%', opacity: 0 }}
					animate={{
						y: 0,
						opacity: 1,
						transition: { ease: 'easeInOut', duration: 1, delay: 1 },
					}}
					className=' flex'>
					<button
						onClick={(e) => navigate('/gallery')}
						className='px-8 py-3 subtitle font-thin  text-center  md:text-left  rounded-full text-xl bg-green-300 border-2 border-green-300 text-black mx-auto hover:bg-transparent hover:text-white transition-colors ease-in-out duration-100'>
						Start your journey
					</button>
				</motion.div>
			</motion.div>
		</div>
	);
};

export default Header;
