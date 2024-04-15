import React, { useEffect, useState } from 'react'
import { Bio, NavlinkList } from '../constants';
import {  NavLink } from 'react-router-dom';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState('');
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        let tempDate = new Date().getFullYear()
        setCurrentYear(tempDate)
    }, [])
    return (
        <div className='text-white w-full flex flex-col justify-center relative items-center gap-8 pb-20'>
              <hr className='border border-cyan-500  my-14 w-11/12 ' />
            <div className='text-cyan-500 md:text-2xl text-xl font-semibold'>Sagar Devendra</div>
            <div className='flex flex-wrap  items-center justify-center md:gap-7 gap-4 px-2  font-medium text-base'>
                {NavlinkList.map((navLinkData) => {
                    return <NavLink key={navLinkData.name} className={({ isActive }) =>
                        [
                            isActive ? "text-cyan-500 underline " : "hover:text-cyan-500 dark:hover:text-cyan-500 hover:scale-105 text-white dark:text-gray-500 transition-all  cursor-pointer",
                        ].join('')
                    } onClick={scrollToTop}  to={navLinkData.link} >{navLinkData.name}</NavLink >
                })}
            </div>
            <div className='flex items-center gap-5'>
                <a href={Bio.facebook}  ><i className='fab text-2xl dark:text-gray-500 fa-facebook'></i></a>
                <a href={Bio.github}  ><i className='fab text-2xl dark:text-gray-500 fa-github'></i></a>
                <a href={Bio.twitter}  ><i className='fab text-2xl dark:text-gray-500 fa-x-twitter'></i></a>
                <a href={Bio.linkedin}  ><i className='fab text-2xl dark:text-gray-500 fa-linkedin'></i></a>
                <a href={Bio.insta}  ><i className='fab text-2xl dark:text-gray-500 fa-instagram'></i></a>
            </div>
            <div className='text-sm dark:text-gray-500'>Sagar Devendra &copy; {currentYear} . All rights reserved.</div>
            <div style={{ boxShadow: 'rgba(6, 182, 212, 0.4) 10px 42px 369px 220px' }} className='w-44 absolute bottom-0  right-0'></div>
        </div>
    )
}

export default Footer