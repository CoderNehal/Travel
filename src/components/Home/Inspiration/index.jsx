import React from 'react';
import img1 from '../../../assets/images/insp1.jpg';
import { inspirationData } from '../../../data/insipirationData';
import Card from './Card/Card';
const Inspiration = () => {
	return (
		<div className='px-12 lg:px-24 py-6 lg:py-10'>
			<h3 className='text-4xl  '>Inspiration for your next trip</h3>
			<div className='wrapper mb-10 lg:pt-28 flex flex-col lg:flex-row justify-center lg:justify-evenly items-center  lg:h-96 py-5 '>
				{/* <div class='max-w-sm lg:m-5 lg:ml-0 mt-10  rounded overflow-hidden shadow-lg'>
					<img class='w-full' src={img1} alt='' />
					<div class='px-6 py-4'>
						<div class='font-bold text-xl mb-2'>The Coldest Sunset</div>
						<p class='text-gray-700 text-base'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Voluptatibus quia, nulla! Maiores et perferendis eaque,
							exercitationem praesentium nihil.
						</p>
					</div>
					<div class='px-6 pt-4 pb-2'>
						<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							#photography
						</span>
						<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							#travel
						</span>
						<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
							#winter
						</span>
					</div>
				</div> */}
				{inspirationData.map((item, index) => {
					return <Card item={item} key={index} />;
				})}
			</div>
		</div>
	);
};

export default Inspiration;
