import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { inspirationData } from '../../data/insipirationData';
import FamilyMemberCard from './FamilyMemberCard';
import { Travelcontext } from '../../utils/Context/ContextAPI';
import { useInView } from 'react-intersection-observer';
const Location = () => {
	const location = useLocation();
	const [CurrentCity, setCurrentCity] = useState({});
	const [normalPrice, setnormalPrice] = useState(0);
	const [premiumPrice, setpremiumPrice] = useState(0);
	const [showForm, setshowForm] = useState(false);
	const [startDate, setStartDate] = useState(new Date());
	const [PeopleCounter, setPeopleCounter] = useState(1);
	const [PCToShow, setPCToShow] = useState(1);
	const [flag, setflag] = useContext(Travelcontext);
	const { ref, inView } = useInView({
		threshold: 0,
	});
	useEffect(() => {
		const currentCityName = location.pathname.slice(11);
		const currentCityData = inspirationData.filter(
			(e) => e.city.toLocaleLowerCase() === currentCityName.toLocaleLowerCase()
		);
		setCurrentCity(...currentCityData);
		setnormalPrice(currentCityData[0].price[0]);
		setpremiumPrice(currentCityData[0].price[1]);
		// console.log(currentCityData[0].price[0]);
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		if (inView) {
			setflag(false);
			console.log('Ok');
		}
	}, [inView]);

	return (
		<div className='mt-16 bg-slate-50  px-4 xl:px-20 py-8 xl:py-12 text-xl '>
			<div className='Location-name md:px-8  xl:px-12 text-black text-2xl md:text-3xl xl:text-4xl'>
				{CurrentCity.location}
			</div>
			<div className='location-container py-6 xl:py-10  flex flex-col  xl:flex-row'>
				<div className='locatiom-imgbox md:px-8 xl:px-12 xl:w-1/2'>
					<img
						className=' h-68 w-full object-cover object-center'
						src={CurrentCity.img}
						alt=''
					/>
					<div className='flex pt-3 md:pt-6 border-b-2 xl:border-0'>
						{Object.keys(CurrentCity).length !== 0 &&
							CurrentCity.tags.map((tag, index) => {
								return (
									<span
										key={index}
										className=' cursor-pointer text-sm  xl:text-xl inline-block bg-gray-200 rounded-full px-3 py-1  font-thin text-gray-700 mr-2 mb-2'>
										#{tag}
									</span>
								);
							})}
					</div>
				</div>
				<div className='location-content w-full pt-6 xl:pt-0  xl:w-1/2 text-lg xl:text-xl md:px-8 xl:px-8 xl:pr-16 flex flex-col '>
					<div className='pb-2 flex flex-col  items-start  '>
						<p className=' border-b-2 flex items-center    '>
							Attraction
							<span className='pl-1'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5 opacity-70'
									viewBox='0 0 20 20'
									fill='currentColor'>
									<path
										fillRule='evenodd'
										d='M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z'
										clipRule='evenodd'
									/>
								</svg>
							</span>
						</p>
						<span className='md:pl-4 opacity-70 pt-2'>
							{CurrentCity.location}
						</span>
					</div>
					<div className='pb-2 flex flex-col items-start  '>
						<p className=' flex  border-b-2  items-center    '>
							Place
							<span className='pl-1 '>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className=' h-5 w-5  opacity-70'
									viewBox='0 0 20 20'
									fill='currentColor'>
									<path
										fillRule='evenodd'
										d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
										clipRule='evenodd'
									/>
								</svg>
							</span>{' '}
						</p>
						<span className='md:pl-4 opacity-70 pt-2'>
							{CurrentCity.address}
						</span>
					</div>
					<div className='pb-2 flex flex-col items-start  '>
						<p className=' border-b-2 flex items-center    '>
							Description
							<span className='pl-1'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5 opacity-70'
									viewBox='0 0 20 20'
									fill='currentColor'>
									<path
										fillRule='evenodd'
										d='M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z'
										clipRule='evenodd'
									/>
								</svg>
							</span>
						</p>
						<span className='md:pl-4 opacity-70 pt-2'>
							{CurrentCity.Description}
						</span>
					</div>
					<div className='pb-2 flex flex-col items-start  '>
						<p className=' border-b-2     '>
							Pricing{' '}
							<small className=' absolute ml-3 opacity-60'>(*per person)</small>
						</p>
						<span className='md:pl-4 opacity-70 pt-2'>
							Normal : ₹ {normalPrice} <br />
							Premium : ₹ {premiumPrice}
						</span>
					</div>
					<div
						ref={ref}
						className='pb-2 flex py-4 lg:px-4 justify-center xl:justify-start '>
						<button
							onClick={(e) => {
								setshowForm(true);
								window.scrollTo(0, 650);
								e.currentTarget.remove();
							}}
							className='px-6 py-2 bg-green-500 text-white  rounded-full hover:bg-transparent hover:text-green-500 transition duration-150 ease-in-out hover:border-green-500 border-2 '>
							{' '}
							Book Now{' '}
						</button>
					</div>
				</div>
			</div>
			{showForm && (
				<div className=' text-lg xl:text-2xl xl:px-12 '>
					<div className='form-header  flex flex-row-reverse md:flex-row justify-between py-6'>
						<p className=''>Total Members: {PCToShow}</p>
						<div className=''>
							<DatePicker
								selected={startDate}
								onChange={(date) => setStartDate(date)}
							/>
						</div>
					</div>
					<div className='border-b-2 '></div>
					<div className='family-members pt-4 '>
						{Array.from(Array(PeopleCounter)).map((card, index) => {
							return (
								<>
									<FamilyMemberCard
										key={index}
										id={index}
										removeFamilyMember={(e) => setPCToShow(PCToShow - 1)}
									/>
								</>
							);
						})}
					</div>
					<div className=' text-center py-4'>
						<button
							onClick={(e) => {
								setPeopleCounter(PeopleCounter + 1);
								setPCToShow(PCToShow + 1);
							}}
							className='w-16 h-16  rounded-full text-4xl font-semibold bg-green-500 text-white'>
							+
						</button>
					</div>
					<div className=' text-center md:text-right py-4'>
						<button
							onClick={(e) => alert('Payment Successfull!')}
							className={` px-8 py-4 rounded-full tracking-wide text-xl font-semibold ${
								PCToShow != 0
									? 'bg-blue-500 text-white'
									: ' text-gray-100 bg-red-500 cursor-not-allowed'
							} `}>
							Confirm booking
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default Location;
