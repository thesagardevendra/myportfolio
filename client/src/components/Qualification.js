import React from 'react'
import { Bio } from '../constants'

const Qualification = () => {
    return (
        <div className='flex flex-col md:px-20 px-4 md:pt-32 pt-24 relative' style={{ zIndex: 1 }}>
            <div style={{ boxShadow: 'rgb(6, 182, 212,0.4) 67px 43px 135px 157px', zIndex: -1 }} className='h-52 absolute top-52  left-0'></div>
            <div className='text-cyan-500 gap-1 flex flex-wrap md:text-5xl items-center text-4xl font-semibold'><i className='fa fa-graduation-cap text-yellow-500 md:text-6xl text-5xl mr-3'></i>Qualification</div>
            <div className='text-gray-400 select-text selection:text-white selection:bg-cyan-500 md:text-lg font-light my-8 md:w-10/12'>{Bio.qualificationDescription}</div>
            <ol className="relative border-s dark:border-gray-500 my-8 border-cyan-500">
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
                        <img alt='SIES Logo' className='h-10 rounded w-10  bg-white p-0.5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9fekm0Pa1My63pvf1nIJIvN3-seWfjRZP5yaGUMRMw&s' />
                    </span>
                    <h3 className="flex items-center mb-1 ml-2 text-lg font-semibold text-cyan-500 dark:text-gray-500">University of Mumbai</h3>
                    <time className=" ml-2 mb-2 flex items-center gap-2 text-sm font-normal  text-gray-400 dark:text-gray-500">June 1st, 2017 - September 30th, 2020</time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 ml-2">Bachelor of Science in Information Technology (BSc IT)</p>
                </li>
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-14 h-10 rounded-full -start-7 ">
                        <img alt='SIWS' className='h-10 rounded w-10  bg-white p-0.5' src='https://dvsl.in/candidateform/logo.png' />
                    </span>
                    <h3 className="flex items-center mb-1 ml-2 text-lg font-semibold text-cyan-500 dark:text-gray-500 md:w-1/2">SIWS College N.R. Swamy College of Commerce and Economics & SMT.Thirumalai College of Science</h3>
                    <time className=" ml-2 mb-2 flex items-center gap-2 text-sm font-normal  text-gray-400 dark:text-gray-500">June 1st, 2016 - March 31st, 2017</time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 ml-2">HSC (Higher Secondary Certificate)</p>
                </li>
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-14 h-10 rounded-full -start-7 ">
                        <img alt='SIWS' className='h-10 rounded w-10  bg-white p-0.5' src='https://dvsl.in/candidateform/logo.png' />
                    </span>
                    <h3 className="flex items-center mb-1 ml-2 text-lg font-semibold text-cyan-500 dark:text-gray-500">South Indian Welfare Society High School</h3>
                    <time className=" ml-2 mb-2 flex items-center gap-2 text-sm font-normal  text-gray-400 dark:text-gray-500">June 1st, 2015 - March 31st, 2016</time>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 ml-2">SSC (Secondary School Certificate)</p>
                </li>
            </ol>
        </div>
    )
}

export default Qualification