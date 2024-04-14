import React, { useState } from 'react'
import { Bio, NavlinkList } from '../constants';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [themeState, setThemeState] = useState(false);
    themeState ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    const isDark = () => {
        setThemeState(!themeState);
    }
    const scrollToTop = () => {
        window.scrollTo(0, 0);
        console.log("hieee");
    }
    return (
        <header className='h-[75px] z-10 fixed top-0 w-screen lg:px-3 md:px-5 px-2  flex items-center lg:justify-around justify-between border-b dark:border-gray-500 border-gray-400 dark:bg-gray-50 bg-gray-950'>
            <div className='flex whitespace-nowrap items-center text-rose-500 md:text-xl font-semibold justify-center space-x-0.5'>
                {/* <span>const Title =</span> */}
                <span className='md:text-2xl text-cyan-500 font-semibold'>{Bio.name}</span>
            </div>
            <div className='hidden lg:flex  items-center space-x-7  font-medium text-base'>
                {NavlinkList.map((navLinkData) => {
                    return <NavLink className={({ isActive }) =>
                        [
                            isActive ? "text-cyan-500 underline" : "hover:text-cyan-500 dark:hover:text-cyan-500 hover:scale-105 text-white dark:text-gray-500 transition-all  cursor-pointer",
                        ].join('')
                    } onClick={scrollToTop} to={navLinkData.link} >{navLinkData.name}</NavLink >
                })}
            </div>
            <i onClick={isDark} className={`${themeState ? 'fa-moon text-cyan-500 ' : 'fa-sun text-yellow-500'}  fa text-xl cursor-pointer`}></i>
            <a href={Bio.github} target='_blank' className='bg-cyan-500 px-3 hover:scale-105 transition-all duration-300 py-1.5 rounded text-white hidden lg:block'>Github Profile <i className='fa fa-external-link ml-1'></i></a>
            <i className='lg:hidden fa fa-bars text-cyan-500 '></i>
        </header>
    )
}

export default Header