import React from 'react';
import tent from '../../../assets/images/tent.jpg';
import '../../../assets/css/Home/ChooseImg.scss';
const Box = () => {
	return (
		<div className='w-screen -mt-32 lg:-mt-4  -ml-1 h-96 lg:h-48rem relative'>
			<div className='light h-1/2 w-full pl-1 flex justify-center '>
				<img
					className=' -ml-1 object-cover   w-full px-4 lg:px-12 h-full lg:h-150  mt-28 lg:mt-24 '
					src={tent}
					alt=''
				/>

				<div className='title absolute text-2xl lg:text-6xl text-white bottom-24 lg:bottom-40 flex flex-col  items-center'>
					<p> Let your curiosity do the booking</p>
					<div className='bg-white text-black  text-lg lg:text-3xl mt-3 lg:mt-8 py-1 lg:py-3  px-4 lg:px-10 rounded-full'>
						<button className='gallery-button '>
							Gallery
						</button>
					</div>
				</div>
			</div>
			<div className='dark h-1/2 w-full bg-black pl-1'></div>
		</div>
	);
};

export default Box;
