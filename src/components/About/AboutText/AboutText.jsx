import React, { useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Travelcontext } from '../../../utils/Context/ContextAPI';

const AboutText = () => {
	const [flag, setflag] = useContext(Travelcontext);

	const [ref, inView] = useInView({
		threshold: 0,
	});
	useEffect(() => {
		if (inView) setflag(false);
	}, [inView]);
 const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };

	return (
		<div
			ref={ref}
			className='lg:h-96 px-10 lg:px-80 py-10 lg:py-20 flex flex-col justify-center items-center'>
			<div className='lg:px-20 xl:px-32 tracking-wide '>
				<h2 className='text-3xl '>About us</h2>
				<p className=' text-lg text-gray-700 pt-3 '>
					Since 2017, Travlet has been focused on bringing our customers the
					best in esteem and quality travel game plans. We are enthusiastic
					about movement and sharing the world's marvels on the relaxation
					travel side, and giving corporate explorers hello there contact
					administrations to encourage their business travel needs.
				</p>
			</div>
		</div>
	);
};

export default AboutText;
