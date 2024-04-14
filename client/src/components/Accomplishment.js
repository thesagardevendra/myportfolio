import React from 'react'
import { Bio } from '../constants'
import logo from '../assets/SMFGFavicon.svg'

const Accomplishment = () => {
    return (
        <div className='flex flex-col md:px-20 px-4 md:pt-32 pt-24 relative' style={{ zIndex: 1 }}>
            <div style={{ boxShadow: 'rgb(6, 182, 212,0.4) 67px 43px 135px 157px', zIndex: -1 }} className='h-52 absolute top-52  left-0'></div>
            <div className='text-cyan-500 text-5xl font-semibold'><i className='fa fa-history text-yellow-500 text-6xl mr-3'></i>Accomplishment</div>
            <div className='text-gray-400 select-text selection:text-white selection:bg-cyan-500 md:text-lg font-light my-8 md:w-10/12'>{Bio.accomplishmentDescription}</div>

            <ol class="relative border-s dark:border-gray-500 my-8 border-cyan-500">
                <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-14 h-10 rounded-full -start-7 ">
                        <img className='h-10 rounded w-10  bg-white p-0.5' src={logo} />
                    </span>
                    <h3 class="flex items-center mb-1 ml-2 text-lg font-semibold text-cyan-500 dark:text-gray-500">SMFG India (Formerly Fullerton India) Credit Company Limited<span class="dark:bg-cyan-200 dark:text-cyan-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-cyan-900 text-cyan-300 ms-3">Present</span></h3>
                    <time class=" ml-2 mb-2 flex items-center gap-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 1st, 2023 - Present<i className='fa fa-circle text-[4px]'></i> 7mon</time>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 ml-2">Assitant Manager - IT Development</p>
                    {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                        <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                    </svg> Download ZIP</a> */}
                </li>
                <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-14 h-10 rounded-full -start-7 ">
                        <img className='h-10 rounded w-10  bg-white p-0.5' src='https://banksdirect.in/images/fullerton-india-logo.png' />
                    </span>
                    <h3 class="flex items-center mb-1 ml-2 text-lg font-semibold text-cyan-500 dark:text-gray-500">Fullerton India Credit Company Limited</h3>
                    <time class=" ml-2 mb-2 flex items-center gap-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 30th, 2022 - September 30th, 2023<i className='fa fa-circle text-[4px]'></i> 1yr</time>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 ml-2">Assitant Manager - Full Stack Development</p>
                    {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="w-3.5 h-3.5 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                        <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                    </svg> Download ZIP</a> */}
                </li>
                <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-14 h-10 rounded-full -start-7 ">
                        <img className='h-10 rounded w-10  bg-white p-0.5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-6IdKeO4rTVryfwGvW0ji8T-LlPMvxMtQ2sRG8jFZmg&' />
                    </span>
                    <h3 class="flex items-center mb-1 ml-2 text-lg font-semibold text-cyan-500 dark:text-gray-500">
                        Aion Infosystems Private Limited
                        {/* <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span> */}
                    </h3>
                    <time class=" ml-2 mb-2 flex items-center gap-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">September 22nd, 2021 - September 29th, 2022<i className='fa fa-circle text-[4px]'></i> 1yr</time>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 ml-2">Software Developer</p>
                </li>
                <li class="mb-10 ms-6">
                    <span class="absolute flex items-center justify-center w-14 h-10 rounded-full -start-7 ">
                        <img className='h-10 rounded w-10 object-contain bg-white p-0.5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjHs7GsF8cxV0NEu0-p4OQQ0u6SY-tnvlRXElVOXbmIg&s' />
                    </span>
                   
                    <h3 class="flex items-center mb-1 ml-2 text-lg font-semibold text-cyan-500 dark:text-gray-500">Crio.Do
                        {/* <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span> */}
                    </h3>
                    <time class=" ml-2 mb-2 flex items-center gap-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 1st, 2020 - September 30th, 2021 <i className='fa fa-circle text-[4px]'></i> 1yr 7mon</time>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 ml-2">Student Trainee</p>
                </li>
                <li class="mb-10 ms-6">
                <span class="absolute flex items-center justify-center w-14 h-10 rounded-full -start-7 ">
                        <img className='h-10 rounded w-10  bg-white p-0.5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnIqBC3RTJgSi_1krPk6V5MomkuNGi4LGIPET_qm6L6A&s' />
                    </span>
                
                    <h3 class="flex items-center mb-1 ml-2 text-lg font-semibold text-cyan-500 dark:text-gray-500">SIES College of Commerce and Economics
                        {/* <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span> */}
                    </h3>
                    <time class=" ml-2 mb-2 flex items-center gap-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 1st, 2017 - September 30th, 2020<i className='fa fa-circle text-[4px]'></i> 4yr 7mon</time>
                    <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 ml-2">Bachelor of Science in Information Technology (BSc IT)</p>
                </li>
            </ol>


        </div>
    )
}

export default Accomplishment