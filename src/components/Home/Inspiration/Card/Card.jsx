import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const style = {
	minHeight: '25.5rem',
};
const Card = ({ item }) => {
	const animation = useAnimation();
	const { ref, inView } = useInView({
		threshold: 0,
	});
	useEffect(() => {
		if (inView) {
			animation.start({
				x: 0,
				transition: {
					x: { duration: 0.75, ease: 'easeInOut' },
					type: 'tween',
				},
			});
		}
		if (!inView) {
			animation.stop({
				opacity: 0,
			});
		}
	}, [inView]);

	return (
		<motion.div
			initial={{ x: item.id % 2 == 0 ? '100%' : '-100%' }}
			animate={animation}
			ref={ref}
			style={style}
			className=' w-80  lg:m-5 lg:ml-0 mt-10  rounded-xl  shadow-lg relative '>
			<Link to={`/locations/${item.city}`}>
				<div className=' h-full w-full '>
					<img
						className='w-full  lg:h-40 xl:h-48 rounded-t-xl '
						src={item.img}
						alt=''
					/>
				</div>
				<div className='h-1/2 '>
					<div className='px-6 py-4'>
						<div className='font-bold text-2xl md:text-xl mb-2'>
							{item.location}
						</div>
						<p className='text-gray-700 text-lg md:text-base overflow-hidden'>
							Location : {item.address}
						</p>
					</div>
					<div className=' absolute bottom-0 px-6 pt-4 pb-2 w-full border-t-2 border-gray-100 '>
						{item.tags.map((tag, index) => {
							return (
								<span
									key={index}
									className=' cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-thin text-gray-700 mr-2 mb-2'>
									#{tag}
								</span>
							);
						})}
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default Card;
