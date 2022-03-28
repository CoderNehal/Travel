import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../../assets/css/Navbar/Navbar.scss';
const Navbar = () => {
	const activeStyle = {
		borderBottom: '2px solid red',
	};
	return (
		<div className='fixed overflow-x-hidden z-50   Navbar w-screen  font-bold  h-10 text-xl  md:text-2xl flex justify-between items-center px-5 py-8 md:px-32 md:py-8 '>
			Travels
			<ul className='flex justify-between items-baseline '>
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
