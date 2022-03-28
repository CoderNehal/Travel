import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ham from '../../assets/images/ham.png';
import '../../assets/css/Navbar/Navbar.scss';
const Navbar = () => {
	const activeStyle = {
		borderBottom: '2px solid red',
	};
	return (
		<div className='fixed overflow-x-hidden z-40   Navbar w-screen  font-bold  h-10 text-xl  md:text-2xl flex justify-between items-center px-5 py-8 md:px-32 md:py-8 '>
			Travels
			<div className='hamburger cursor-pointer lg:hidden '>
				{/* <div
					style={{ zIndex: '100' }}
					className='sidebar top-0 left-0  bg-red-700 border-black border-2 absolute w-screen'>
					A
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					<br />
					A
				</div> */}
				<img className='h-6 w-6' src={ham} alt='' />
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
	);
};

export default Navbar;
