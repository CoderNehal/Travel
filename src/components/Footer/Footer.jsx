import React, { useContext, useEffect } from 'react';
import { FooterLinks } from '../../data/FooterLinks';
import '../../assets/css/Footer/Footer.scss';
import { useInView } from 'react-intersection-observer';
import { Travelcontext } from '../../utils/Context/ContextAPI';
const Footer = () => {
	const { ref, inView } = useInView({
		threshold: 0,
	});

	const [flag, setflag] = useContext(Travelcontext);
	useEffect(() => {
		if (inView) setflag(true);
	}, [inView]);
	return (
		<div
			ref={ref}
			className='bg-black w-screen lg:px-28 lg:py-12  text-white border-t-2 border-gray-400 '>
			<footer className='footer-1 pb-8 pt-4 sm:py-10 '>
				<div className='mx-auto px-4'>
					<div className='sm:flex  sm:flex-wrap  md:py-4'>
						{FooterLinks.map((link, index) => {
							return (
								<div
									className='px-0 border-b-2 py-4 md:py-4  sm:w-1/2 md:w-1/4 xl:w-1/6 '
									key={index}>
									<h5 className='text-xl font-bold mb-6'>{link.Name}</h5>
									<ul className='list-none footer-links'>
										{link.urls.map((url, index) => {
											return (
												<li className='mb-2' key={index}>
													<a
														href={url.link}
														className=' mb-1 border-b border-solid border-transparent hover:border-blue-500  hover:text-blue-500 transition-all ease-in-out '>
														{url.name}
													</a>
												</li>
											);
										})}
									</ul>
								</div>
							);
						})}
						<div className=' mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto'>
							<h5 className='text-xl font-bold mb-6 sm:text-center xl:text-left'>
								Stay connected
							</h5>
							<div className='flex sm:justify-center xl:justify-start  '>
								<a
									target={'_blank'}
									href='https://github.com/CoderNehal'
									className='w-10 h-10   border-2 border-gray-400 rounded-full text-center py-1 text-gray-600 hover:text-white hover:bg-black hover:border-blue-600'>
									<i className='p-2  fa-brands fa-github'></i>
								</a>
								<a
									target={'_blank'}
									href='https://www.instagram.com/nehal.jsx/'
									className='w-10 h-10   border-2 border-gray-300 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-pink-600 hover:border-orange-500'>
									<i className='p-2  fa-brands fa-instagram'></i>
								</a>
								<a
									target={'_blank'}
									href='nehalughade1221@gmail.com'
									className='w-10 h-10   border-2 border-gray-400 rounded-full text-center py-1 ml-2 text-gray-600 hover:text-white hover:bg-red-600  hover:border-yellow-600'>
									<i className='p-2  fa-solid fa-at'></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
			<div className='credits  flex justify-center'>
				<span className='md:border cursor-pointer    py-2 md:w-auto  break-words text-center px-2  md:px-20'>
					2022 © all rights reserved & Made with ❤️ by{' '}
					<a
						className='underline hover:text-red-500 transition-all duration-200 ease-in-out     '
						target={'_blank'}
						href='https://github.com/CoderNehal'>
						Nehal Ughade
					</a>
				</span>
			</div>
		</div>
	);
};

export default Footer;
