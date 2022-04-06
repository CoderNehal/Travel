import React, { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import founder from '../../../assets/images/founder.jpg';
import { Travelcontext } from '../../../utils/Context/ContextAPI';
const Founder = () => {
	const { ref, inView } = useInView({
		threshold: 0,
	});

	const [flag, setflag] = useContext(Travelcontext);
	useEffect(() => {
		console.log(inView);
		if (inView) setflag(true);
		if (!inView) setflag(false);
	}, [inView]);

	return (
		<div
        
			className=' min-h-screen   bg-black  text-white px-8 lg:px-32 pt-16 lg:py-20'>
			<p className='text-3xl'>Founder</p>
			<div className='main-container   py-16 lg:my-20 pb-12 flex flex-col lg:flex-row  justify-evenly relative'>
				<img
					src={founder}
					alt=''
					className='founder-img  lg:h-28rem pb-6 lg:pb-0 '
				/>
				<p   className='flex flex-col lg:px-8 xl:px-40 '>
					<h1 className=' text-4xl pb-4 '>Nehal Ughade</h1>
					<p className=' pb-6 lg:pb-8 text-lg text-gray-300'>
						Nehal Ugahde is the co-founder and Chief Executive Officer of
						Travels and sets the vision and strategy for the company. In 2017,
						Nehal and Lokesh Patil became Travel's first Hosts. Since then,
						Nehal has overseen Travel's growth to become a community of over
						four million Hosts who have welcomed more than 1 billion guests
						across 220+ countries and regions.
					</p>
					<p ref={ref} className=' pb-6 lg:pb-8 text-lg text-gray-300'>
						A graduate from the Walchand College of Engineering, Nehal has
						embedded his creative roots in Travel's culture, product and
						community. This design-driven approach has enabled a system of trust
						that allows families to enjoy together, and created a unique
						business model that facilitates connection and belonging.
					</p>
				</p>
				<div  className='blank div'></div>
			</div>
		</div>
	);
};

export default Founder;
