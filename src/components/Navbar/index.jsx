import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ham from '../../assets/images/ham.png';
import ham1 from '../../assets/images/darkHam1.png';
import cancel from '../../assets/images/cancel.png';
import '../../assets/css/Navbar/Navbar.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { Travelcontext } from '../../utils/Context/ContextAPI';
import Logo from '../../utils/svgviewer-png-output.png';
const Navbar = () => {
	const [Sidebar, setSidebar] = useState(false);
	const [offset, setOffset] = useState(0);
	const [flag] = useContext(Travelcontext);
	useEffect(() => {}, [flag]);

	const activeStyle = {
		borderBottom: '2px solid red',
	};
	const activeStyleSideBar = {
		borderBottom: '4px solid #0000cd',
	};

	return (
		<>
			<AnimatePresence>
				{Sidebar && (
					<motion.div
						initial={{ x: '-100vw', opacity: 0 }}
						animate={{
							x: '0',
							opacity: 1,
							transition: { duration: 0.5, type: 'tween', ease: 'easeInOut' },
						}}
						exit={{
							x: '100vw',
							opacity: 0,
							transition: {
								duration: 0.5,
								delay: 0.8,
								type: 'tween',
								ease: 'easeInOut',
							},
						}}
						style={{ height: '100vh' }}
						className='fixed z-50   top-0 left-0 w-full  Navbar  overflow-hidden p-20 py-30 '>
						<div className='content   h-full w-full flex flex-col justify-evenly items-center'>
							{Sidebar && (
								<motion.div
									initial={{ scale: 0 }}
									animate={{
										scale: 1,
										transition: {
											duration: 0.3,
											delay: 0.7,
											ease: 'easeInOut',
										},
									}}
									exit={{
										rotate: '180deg',
										transition: {
											duration: 0.7,
											ease: 'easeInOut',
										},
									}}
									className='cross cursor-pointer absolute top-10 right-10'
									onClick={() => setSidebar(false)}>
									<img src={cancel} className='w-7 h-7 ' alt='' />
								</motion.div>
							)}
							{Sidebar && (
								<>
									{' '}
									<motion.div
										id='home'
										initial={{ y: '20%', opacity: 0 }}
										animate={{
											y: 0,
											opacity: 1,
											transition: {
												duration: 0.3,
												delay: 0.5,
												ease: 'easeInOut',
											},
										}}
										exit={{
											y: '20%',
											opacity: 0,
											transition: { duration: 0.5, ease: 'easeInOut' },
										}}
										className='border-black text-5xl'
										onClick={() => setSidebar(false)}>
										<NavLink
											style={({ isActive }) =>
												isActive ? activeStyleSideBar : undefined
											}
											to={`/`}>
											Home
										</NavLink>
									</motion.div>
									<motion.div
										id='about'
										initial={{ y: '20%', opacity: 0 }}
										animate={{
											y: 0,
											opacity: 1,
											transition: {
												duration: 0.3,
												delay: 0.8,
												ease: 'easeInOut',
											},
										}}
										exit={{
											y: '20%',
											opacity: 0,
											transition: {
												duration: 0.5,
												delay: 0,
												ease: 'easeInOut',
											},
										}}
										className='border-black text-5xl'
										onClick={() => setSidebar(false)}>
										<NavLink
											style={({ isActive }) =>
												isActive ? activeStyleSideBar : undefined
											}
											to={`/about`}>
											About
										</NavLink>
									</motion.div>
									<motion.div
										id='gallery'
										initial={{ y: '20%', opacity: 0 }}
										animate={{
											y: 0,
											opacity: 1,
											transition: {
												duration: 0.3,
												delay: 1.1,
												ease: 'easeInOut',
											},
										}}
										exit={{
											y: '20%',
											opacity: 0,
											delay: 1,
											transition: { duration: 0.5, ease: 'easeInOut' },
										}}
										className='border-black text-5xl'
										onClick={() => setSidebar(false)}>
										<NavLink
											style={({ isActive }) =>
												isActive ? activeStyleSideBar : undefined
											}
											to={`/gallery`}>
											Gallery
										</NavLink>
									</motion.div>
									<motion.div
										id='contact'
										initial={{ y: '20%', opacity: 0 }}
										animate={{
											y: 0,
											opacity: 1,
											transition: {
												duration: 0.3,
												delay: 1.4,
												ease: 'easeInOut',
											},
										}}
										exit={{
											y: '20%',
											opacity: 0,
											delay: 1.5,
											transition: { duration: 0.5, ease: 'easeInOut' },
										}}
										className='border-black text-5xl whitespace-nowrap'
										onClick={() => setSidebar(false)}>
										<NavLink
											style={({ isActive }) =>
												isActive ? activeStyleSideBar : undefined
											}
											to={`/contact`}>
											Contact us
										</NavLink>
									</motion.div>
								</>
							)}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<div
				className={`fixed  overflow-x-hidden z-40   Navbar w-screen  font-bold  h-10 text-xl  md:text-2xl flex justify-between items-center px-5 py-8 md:px-32 md:py-8 ${
					flag ? 'text-white bg-black glass' : 'text-black '
				}`}>
				<img className=' h-16 md:h-20' src={Logo} alt='' />

				<div
					className='hamburger cursor-pointer lg:hidden '
					onClick={() => setSidebar(!Sidebar)}>
					{flag ? (
						<img className='h-6 w-6' src={ham1} alt='' />
					) : (
						<img className='h-6 w-6' src={ham} alt='' />
					)}
				</div>
				<ul className=' hidden lg:flex justify-between items-baseline '>
					<li id='home' className='border-black mx-4 lg:mx-6 text-base'>
						<NavLink
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
							to={`/`}>
							Home
						</NavLink>
					</li>
					<li id='about' className='border-black mx-4 lg:mx-6 text-base '>
						<NavLink
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
							to={`/about`}>
							About
						</NavLink>
					</li>
					<li id='gallery' className='border-black mx-4 lg:mx-6 text-base'>
						<NavLink
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
							to={`/gallery`}>
							Gallery
						</NavLink>
					</li>
					<li
						id='contact'
						className='border-black mx-4 lg:mx-6 text-base  lg:mr-12'>
						<NavLink
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
							to={`/contact`}>
							Contact us
						</NavLink>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navbar;
