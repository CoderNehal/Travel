import React from 'react';

const style = {
	minHeight: '25.5rem',
};
const Card = ({ item }) => {
	return (
		<div
			style={style}
			className=' w-80  lg:m-5 lg:ml-0 mt-10  rounded-xl  shadow-lg relative '>
			<div className=' h-full w-full '>
				<img class='w-full  lg:h-40 xl:h-48 rounded-t-xl ' src={item.img} alt='' />
			</div>
			<div className='h-1/2 '>
				<div class='px-6 py-4'>
					<div class='font-bold text-2xl md:text-xl mb-2'>{item.location}</div>
					<p class='text-gray-700 text-lg md:text-base overflow-hidden'>
						Location : {item.description}
					</p>
				</div>
				<div class=' absolute bottom-0 px-6 pt-4 pb-2 w-full border-t-2 border-gray-100 '>
					{item.tags.map((tag, index) => {
						return (
							<span class=' cursor-pointer inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-thin text-gray-700 mr-2 mb-2'>
								#{tag}
							</span>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Card;
