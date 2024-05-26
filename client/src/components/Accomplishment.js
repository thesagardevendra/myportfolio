import React from 'react'
import { Bio } from '../constants'
import logo from '../assets/SMFGFavicon.svg'

const Accomplishment = () => {
    return (
        <div className='flex flex-col md:px-20 px-4 md:pt-32 pt-24 relative' style={{ zIndex: 1 }}>
            <div style={{ boxShadow: 'rgb(6, 182, 212,0.4) 67px 43px 135px 157px', zIndex: -1 }} className='h-52 absolute top-52  left-0'></div>
            <div className='text-cyan-500 flex flex-wrap md:text-5xl items-center text-[35px] font-semibold '><i className='fa fa-history text-yellow-500 md:text-6xl text-5xl mr-3'></i>Accomplishment</div>
            <div className='text-gray-400 select-text selection:text-white selection:bg-cyan-500 md:text-lg font-light my-8 md:w-10/12'>{Bio.accomplishmentDescription}</div>

            <ol className="relative border-s dark:border-gray-500 my-8 border-cyan-500">
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-14 h-10 rounded-full -start-7 ">
                        <img alt='SMFG' className='h-10 rounded w-10  bg-white p-0.5' src={logo} />
                    </span>
                    <h3 className="flex items-center mb-1 ml-2 text-lg font-semibold text-cyan-500 dark:text-gray-500">SMFG India (Formerly Fullerton India) Credit Company Limited<span className="dark:bg-cyan-200 dark:text-cyan-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-cyan-900 text-cyan-300 ms-3">Present</span></h3>
                    <time className=" ml-2 mb-2 flex items-center gap-2 text-sm font-normal  text-gray-400 dark:text-gray-500">April 1st, 2024 - Present</time>
                    <div className='flex flex-col md:flex-row md:items-center gap-2'>
                    <span className="dark:bg-cyan-200 w-28 dark:text-cyan-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded  bg-cyan-700 text-gray-100 ">Promoted As</span>
                        <p className="  text-base font-normal text-gray-500 dark:text-gray-400">
                           Manager - IT Development</p>
                    </div>

                </li>
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-14 h-10 rounded-full -start-7 ">
                        <img alt='SMFG' className='h-10 rounded w-10  bg-white p-0.5' src={logo} />
                    </span>
                    <h3 className="flex items-center mb-1 ml-2 text-lg font-semibold text-cyan-500 dark:text-gray-500">SMFG India (Formerly Fullerton India) Credit Company Limited</h3>
                    <time className=" ml-2 mb-2 flex items-center gap-2 text-sm font-normal  text-gray-400 dark:text-gray-500">October 1st, 2023 - March 31st, 2024</time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 ml-2">Assitant Manager - IT Development</p>
                </li>
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-14 h-10 rounded-full -start-7 ">
                        <img alt='Fullerton Logo' className='h-10 rounded w-10  bg-white p-0.5' src='https://banksdirect.in/images/fullerton-india-logo.png' />
                    </span>
                    <h3 className="flex items-center mb-1 ml-2 text-lg font-semibold text-cyan-500 dark:text-gray-500">Fullerton India Credit Company Limited</h3>
                    <time className=" ml-2 mb-2 flex items-center gap-2 text-sm font-normal  text-gray-400 dark:text-gray-500">September 30th, 2022 - September 30th, 2023</time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 ml-2">Assitant Manager - Full Stack Development</p>
                </li>
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-14 h-10 rounded-full -start-7 ">
                        <img alt='Aion Logo' className='h-10 rounded w-10  bg-white p-0.5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-6IdKeO4rTVryfwGvW0ji8T-LlPMvxMtQ2sRG8jFZmg&' />
                    </span>
                    <h3 className="flex items-center mb-1 ml-2 text-lg font-semibold text-cyan-500 dark:text-gray-500">
                        Aion Infosystems Private Limited
                    </h3>
                    <time className=" ml-2 mb-2 flex items-center gap-2 text-sm font-normal  text-gray-400 dark:text-gray-500">September 22nd, 2021 - September 29th, 2022</time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 ml-2">Software Developer</p>
                </li>
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-14 h-10 rounded-full -start-7 ">
                        <img alt='Crio Logo' className='h-10 rounded w-10 object-contain bg-white p-0.5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjHs7GsF8cxV0NEu0-p4OQQ0u6SY-tnvlRXElVOXbmIg&s' />
                    </span>

                    <h3 className="flex items-center mb-1 ml-2 text-lg font-semibold text-cyan-500 dark:text-gray-500">Crio.Do
                    </h3>
                    <time className=" ml-2 mb-2 flex items-center gap-2 text-sm font-normal  text-gray-400 dark:text-gray-500">February 1st, 2020 - September 30th, 2021 </time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 ml-2">Student Trainee</p>
                </li>
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-14 h-10 rounded-full -start-7 ">
                        <img alt='SIES Logo' className='h-10 rounded w-10  bg-white p-0.5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnIqBC3RTJgSi_1krPk6V5MomkuNGi4LGIPET_qm6L6A&s' />
                    </span>

                    <h3 className="flex items-center mb-1 ml-2 text-lg font-semibold text-cyan-500 dark:text-gray-500">SIES College of Commerce and Economics
                        {/* <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span> */}
                    </h3>
                    <time className=" ml-2 mb-2 flex items-center gap-2 text-sm font-normal  text-gray-400 dark:text-gray-500">June 1st, 2017 - September 30th, 2020</time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 ml-2">Bachelor of Science in Information Technology (BSc IT)</p>
                </li>
            </ol>


        </div>
    )
}

export default Accomplishment