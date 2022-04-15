import React, { useContext, useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { Travelcontext } from '../../utils/Context/ContextAPI';
import { useInView } from 'react-intersection-observer';
import SuccessModal from '../SuccessModal';
import { AnimatePresence } from 'framer-motion';
const ContactUs = () => {
	const [flag, setflag] = useContext(Travelcontext);
	const { ref, inView } = useInView({
		threshold: 0,
	});
	const [showModal, setshowModal] = useState(false);
	const [error, seterror] = useState('');
	useEffect(() => {
		if (inView) {
			setflag(false);
		}
	}, [inView]);

	const handleForm = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_hrxizej',
				'template_j58ecfo',
				e.target,
				process.env.REACT_APP_USER_ID
			)
			.then((result) => {
				setshowModal(true);
			})
			.catch((err) => {
				setshowModal(true);
				seterror(err);
			});
	};
	return (
		<div className='mt-20 bg-slate-50'>
			<section className='text-gray-600 body-font relative'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='flex flex-col text-center w-full mb-12'>
						<h1
							ref={ref}
							className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
							Contact Us
						</h1>
						<p className='lg:w-2/3 mx-auto leading-relaxed text-lg'>
							If you like my work feel free to give me a feedback by feeling
							this form
						</p>
					</div>
					<div className='lg:w-1/2 md:w-2/3 mx-auto'>
						<form
							onSubmit={(e) => handleForm(e)}
							className='flex flex-wrap -m-2'>
							<div className='p-2 w-1/2'>
								<div className='relative'>
									<label
										htmlFor='name'
										className='leading-7 text-sm text-gray-600'>
										Name
									</label>
									<input
										type='text'
										id='name'
										name='name'
										className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-slate-50 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
										required
									/>
								</div>
							</div>
							<div className='p-2 w-1/2'>
								<div className='relative'>
									<label
										htmlFor='email'
										className='leading-7 text-sm text-gray-600'>
										Email
									</label>
									<input
										type='email'
										id='email'
										name='email'
										className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-slate-50 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
										required
									/>
								</div>
							</div>
							<div className='p-2 w-full'>
								<div className='relative'>
									<label
										htmlFor='message'
										className='leading-7 text-sm text-gray-600'>
										Message
									</label>
									<textarea
										id='message'
										name='message'
										className='w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-slate-50 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'></textarea>
								</div>
							</div>
							<div className='p-2 w-full mt-4'>
								<button
									type='submit'
									className='flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
									Send
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
			<AnimatePresence>
				required
				{showModal && (
					<SuccessModal err={error} closeModal={(e) => setshowModal(false)} />
				)}
			</AnimatePresence>
		</div>
	);
};

export default ContactUs;
