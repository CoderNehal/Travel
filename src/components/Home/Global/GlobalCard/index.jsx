import React from 'react';
import Tilt from 'react-parallax-tilt';
import './index.scss';
const GloblCard = ({ data }) => {
	return (
		<Tilt
			tiltMaxAngleX={10}
			tiltMaxAngleY={10}
			perspective={800}
			transitionSpeed={2500}
			gyroscope={true}>
			<div
				className={`flex GlobalCard justify-center items-center lg:justify-start lg:items-start   py-12 cursor-pointer relative  ${
					data.id % 2 == 0 ? 'flex-row-reverse' : ''
				}`}>
				<img
					className='w-screen lg:w-3/4  h-40 lg:h-26rem object-cover '
					src={data.img}
					alt=''
				/>

				<div
					className={`lg:absolute lg:w-80  lg:px-10  lg:py-12 lg:my-0 lg:h-80  lg:top-1/2 lg:-translate-y-1/2
                    ${ data.id % 2 != 0 ? 'right-40' : 'left-40' } card-info bg-white text-black custom-shadow w-full my-auto px-4  py-6 `}>
					<span className=' border-b-2 border-gray-400 text-base lg:text-xl  card-title font-semibold text-blue-700 pr-10'>
						{data.title}
					</span>
					<p className='hidden lg:block pt-4 leading-6'>{data.description}</p>
					<p className=' lg:hidden pt-4 leading-6'>{data.ShortDescription}</p>
				</div>
			</div>
		</Tilt>
	);
};

export default GloblCard;
