import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import dateFormat from 'dateformat';
import emailjs from 'emailjs-com';
import cancel from '../../assets/images/cancel.png';
import '../../assets/css/Modal/Modal.scss';

const Modal = ({ closeModal, data, number, price, date, names }) => {
	const localDate = new Date(date);
	const [success, setsuccess] = useState(false);
	const [details, setdetails] = useState(false);
	const [email, setemail] = useState('');
	const sendMail = (e) => {
		const finalNames = names.filter((name) => name.length !== 0);
		const members = finalNames.map((name) => '<br />' + name).join(',');

		emailjs
			.send(
				'service_hrxizej',
				'template_3q5fboo',
				{
					email: email,
					location: data.city,
					address: data.address,
					names: members,
					sDate: dateFormat(localDate, 'dddd, mmmm dS, yyyy'),
					nDate: dateFormat(
						localDate.setDate(localDate.getDate() + 6),
						'dddd, mmmm dS, yyyy'
					),
				},
				process.env.REACT_APP_USER_ID
			)
			.then(
				(result) => {
					setsuccess(true);
				},
				(error) => {
					
				}
			);
	};

	return (
		<div>
			<div className='fixed  left-0 top-0 h-screen bg-black bg-opacity-50  px-4 w-screen flex items-center justify-center'>
				<motion.div
					initial={{ y: '-100vh' }}
					animate={{
						y: 0,
						transition: {
							duration: 0.75,
							ease: 'easeInOut',
						},
					}}
					exit={{
						y: '100vh',
						transition: {
							duration: 0.75,
							ease: 'easeInOut',
						},
					}}
					className='bg-white rounded-lg md:max-w-xl md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative'>
					<AnimatePresence>
						{details ? (
							success ? (
								<div className='wrapper pb-6 md:px-20 flex flex-col justify-center items-center'>
									<img
										onClick={(e) => closeModal()}
										src={cancel}
										className=' absolute cursor-pointer w-5 h-5 top-0 right-0 m-5 '
										alt=''
									/>
									<svg
										className='checkmark m-5 '
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 52 52'>
										<circle
											className='checkmark__circle'
											cx='26'
											cy='26'
											r='25'
											fill='none'
										/>
										<path
											className='checkmark__check'
											fill='none'
											d='M14.1 27.2l7.1 7.2 16.7-16.8'
										/>
									</svg>
									<p>Payment successfull !</p>
									<small className='text-sm md:text-base text-gray-500'>
										Check spam mails{' '}
									</small>
								</div>
							) : (
								<div className=' md:w-96  mx-auto   rounded-lg'>
									<div className='w-full h-auto py-4 px-2 md:p-4  flex items-center '>
										<h1 className='w-full'>Credit Card</h1>
										<a
											href
											className='w-full text-right text-sm font-semibold text-indigo-700'>
											Other payment methods
										</a>
									</div>
									<div className=' w-full h-auto py-4 px-0 md:p-4  pt-0 md:border'>
										<form>
											<div className='mb-4 px-3 text-lg py-1 bg-white rounded-sm border-b-2 border-gray-300 focus-within:text-gray-900 focus-within:border-gray-500'>
												<label
													htmlFor='cc-name'
													className='text-xs tracking-wide uppercase font-semibold'>
													Email
												</label>
												<input
													id='cc-email'
													value={email}
													onChange={(e) => setemail(e.target.value)}
													type='email'
													name='cc-email'
													className='w-full h-8 focus:outline-none'
													placeholder='abc@gamil.com'
													required
												/>
											</div>
											<div className='mb-4 px-3 text-lg py-1 bg-white rounded-sm border-b-2 border-gray-300 focus-within:text-gray-900 focus-within:border-gray-500'>
												<label
													htmlFor='cc-name'
													className='text-xs tracking-wide uppercase font-semibold'>
													Name on card
												</label>
												<input
													id='cc-name'
													type='text'
													name='cc-name'
													className='w-full h-8 focus:outline-none'
													placeholder='e.g. John E Cash'
													required
												/>
											</div>
											<div className='mb-4 px-3 text-lg py-1 bg-white rounded-sm border-b-2 border-gray-300 focus-within:text-gray-900 focus-within:border-gray-500'>
												<label
													htmlFor='cc-number'
													className='text-xs tracking-wide uppercase font-semibold'>
													Credit card number
												</label>
												<input
													id='cc-number'
													type='number'
													name='cc-number'
													className='w-full h-8 focus:outline-none'
													placeholder='16-digit card number'
													required
												/>
											</div>
											<div className='flex mb-8 px-3 text-lg py-1 bg-white rounded-sm border-b-2 border-gray-300 focus-within:border-gray-500'>
												<div className='w-full focus-within:text-gray-900'>
													<label
														htmlFor
														className='text-xs tracking-wide uppercase font-semibold'>
														Card expiry
													</label>
													<input
														id='cc-expiry'
														type='text'
														maxLength={5}
														onChange={(e) => {
															if (e.currentTarget.value.length == 2) {
																e.target.value = e.target.value.concat('/');
															}
														}}
														className='w-full h-8 focus:outline-none'
														placeholder='MM / YY'
														required
													/>
												</div>
												<div className='w-auto focus-within:text-gray-900'>
													<label
														htmlFor
														className='text-xs tracking-wide uppercase font-semibold'>
														CVV
													</label>
													<input
														id='cc-cvv'
														type='password'
														className='w-full h-8 focus:outline-none'
														maxLength={3}
													/>
												</div>
											</div>
											<button
												onClick={(e) => {
													sendMail();
												}}
												className='h-12  rounded-full text-lg w-full  bg-indigo-600 tracking-wide  text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-600'>
												Confirm Payment
											</button>
										</form>
									</div>
								</div>
							)
						) : (
							<div className=''>
								<div className='md:flex  items-center py-4'>
									<div className=' mb-4  md:ml-4 rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-10 w-10 text-green-500'
											viewBox='0 0 20 20'
											fill='currentColor'>
											<path
												fillRule='evenodd'
												d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
												clipRule='evenodd'
											/>
										</svg>
									</div>
									<div className=' md:px-4 md:mt-0  text-center  md:text-left'>
										<p className='font-bold tracking-wider '>Hurrayyy!!</p>
										<p className='text-sm md:text-base text-gray-700 mt-1'>
											Thank you for trusting us.... We are exited to travel with
											you.
											<br />
											<p className='pb-2'>
												You are total <b>{number}</b> members
											</p>
											<p className='pb-2'>
												Location: <b>{data.address}</b>
											</p>
											<p className='pb-2'>
												Start Date:{' '}
												<b>{dateFormat(localDate, 'dddd, mmmm dS, yyyy')}</b>
											</p>
											<p className='pb-2'>
												End Date:{' '}
												<b>
													{dateFormat(
														localDate.setDate(localDate.getDate() + 6),
														'dddd, mmmm dS, yyyy'
													)}
												</b>
											</p>
										</p>
									</div>
								</div>

								<div className='text-center md:text-right mt-4 md:flex md:justify-end'>
									<button
										onClick={(e) => {
											setdetails(true);
										}}
										className='block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-green-500 text-white rounded-lg font-semibold text-sm md:ml-2 md:order-2'>
										Pay ₹ {(price * number).toLocaleString()}
									</button>
									<button
										onClick={closeModal}
										className='block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 text-white bg-red-600 rounded-lg font-semibold text-sm mt-4
							md:mt-0 md:order-1'>
										Cancel
									</button>
								</div>
							</div>
						)}
					</AnimatePresence>
				</motion.div>
			</div>
		</div>
	);
};

export default Modal;
