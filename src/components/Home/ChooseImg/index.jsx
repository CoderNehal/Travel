import React, {  useEffect } from 'react';
import tent from '../../../assets/images/tent.jpg';
import '../../../assets/css/Home/ChooseImg.scss';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Box = () => {
	const { ref, inView } = useInView({
		threshold: 0,
	});

	const animation = useAnimation();
	useEffect(() => {
		if (inView) {
			
			animation.start({
				opacity: 1,
				transition: {
					duration: 0.75,
					ease: 'easeInOut',
				},
			});
		}
		if (!inView) {
			
			animation.stop({
				opacity: 0,
				transition: {
					duration: 0.75,
					ease: 'easeInOut',
				},
			});
		}
	}, [inView]);

	return (
		<div className='w-screen -mt-32 lg:-mt-4   h-96 lg:h-48rem relative'>
			<motion.div
				className='light h-1/2 w-full pl-1 flex justify-center '
				initial={{ opacity: 0 }}
				animate={animation}>
				<img
					ref={ref}
					className=' object-cover    w-full px-4 lg:px-24  h-full lg:h-150 mt-24 lg:mt-24 '
					src={tent}
					alt=''
				/>

				<div className='title absolute text-2xl lg:text-6xl text-white bottom-28 lg:bottom-40 flex flex-col  items-center'>
					<p> Let your curiosity do the booking</p>
					<div className='bg-white text-black  text-lg lg:text-3xl mt-3 lg:mt-8 py-1 lg:py-3  px-4 lg:px-10 rounded-full'>
						<button className='gallery-button '>Gallery</button>
					</div>
				</div>
			</motion.div>
			<div className='dark h-1/2 w-full bg-black pl-1'></div>
		</div>
	);
};

export default Box;
