import { motion } from 'framer-motion';
import React from 'react';
import '../../assets/css/SuccessModal/SuccessModal.scss';
const SuccessModal = ({ err, closeModal }) => {
	return (
		<div>
			<div
				id='popup-modal'
				tabIndex='-1'
				className='  overflow-y-auto overflow-x-hidden fixed flex flex-col justify-center items-center top-1/2 -translate-y-1/4 md:translate-y-0 right-0 left-0 z-30 md:inset-0 h-screen md:h-full'>
				<motion.div
					initial={{ scale: 0, opacity: 0 }}
					animate={{
						scale: 1,
						opacity: 1,
						transition: {
							duration: 0.75,
							ease: 'easeInOut',
						},
					}}
					exit={{
						scale: 0,
						opacity: 0,
						transition: {
							ease: 'easeInOut',
						},
					}}
					className='  p-4 w-full max-w-md h-full md:h-auto'>
					<div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
						<div className=' absolute right-0  p-2 '>
							<button
								onClick={(e) => closeModal()}
								type='button'
								className='text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center  dark:hover:text-white'
								data-modal-toggle='popup-modal'>
								<svg
									className='w-6 h-6'
									fill='currentColor'
									viewBox='0 0 20 20'
									xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
										clipRule='evenodd'
									/>
								</svg>
							</button>
						</div>
						{err.length !== 0 ? (
							<h1 className=' p-6  text-center text-2xl text-red-500'>{err}</h1>
						) : (
							<div className='p-6  text-center'>
								<div>
									<div
										className='animation-ctn scale-50 '
										style={{ height: '154px' }}>
										<motion.div
											initial={{ display: 'none ' }}
											animate={{
												display: 'block',
												transition: {
													delay: 0.5,
												},
											}}
											className='icon icon--order-success svg  '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												width='154px'
												height='154px'
												className='mx-auto'>
												<g fill='none' stroke='#22AE73' strokeWidth={2}>
													<circle
														cx={77}
														cy={77}
														r={72}
														style={{
															strokeDasharray: '480px, 480px',
															strokeDashoffset: '960px',
														}}
													/>
													<circle
														id='colored'
														fill='#22AE73'
														cx={77}
														cy={77}
														r={72}
														style={{
															strokeDasharray: '480px, 480px',
															strokeDashoffset: '960px',
														}}
													/>
													<polyline
														className='st0'
														stroke='#fff'
														strokeWidth={10}
														points='43.5,77.8 63.7,97.9 112.2,49.4 '
														style={{
															strokeDasharray: '100px, 100px',
															strokeDashoffset: '200px',
														}}
													/>
												</g>
											</svg>
										</motion.div>
									</div>
								</div>
								<h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
									Your response has been recorded, You will recieve a
									acknowledgement mail soon...
								</h3>
							</div>
						)}
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default SuccessModal;
