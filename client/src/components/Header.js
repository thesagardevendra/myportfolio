import React, { useState } from 'react'
import { Bio, NavlinkList } from '../constants';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [themeState, setThemeState] = useState(false);
    const [sidebarState, setSidebarState] = useState(false);
    themeState ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
    const isDark = () => {
        setThemeState(!themeState);
    }
    const scrollToTop = () => {
        setSidebarState(false)
        window.scrollTo(0, 0);
    }
    return (
        <header className='h-[75px] z-10 fixed top-0 w-screen  px-2 pl-0 flex items-center lg:justify-around justify-between border-b dark:border-gray-500 border-gray-400 dark:bg-gray-50 bg-gray-950'>
            <div className='flex md:whitespace-nowrap items-center text-rose-500 md:text-xl font-semibold justify-center space-x-0.5'>
                {/* <span>const Title =</span> */}
                <NavLink onClick={scrollToTop} to="profile" className='md:text-2xl text-xl pl-2 md:pl-5  text-cyan-500 font-semibold w-10 md:w-auto'>{Bio.name}</NavLink>
            </div>
            <div className='hidden lg:flex  items-center space-x-7  font-medium text-base'>
                {NavlinkList.map((navLinkData) => {
                    return <NavLink key={navLinkData.name} className={({ isActive }) =>
                        [
                            isActive ? "text-cyan-500 underline" : "hover:text-cyan-500 dark:hover:text-cyan-500 hover:scale-105 text-white dark:text-gray-500 transition-all  cursor-pointer",
                        ].join('')
                    } onClick={scrollToTop} to={navLinkData.link} >{navLinkData.name}</NavLink >
                })}
            </div>
            <div className='flex items-center md:gap-3 gap-2.5 md:pr-5'>
                <button onClick={isDark} className=''>
                    <div className={`${themeState ? '' : 'hidden'}  relative`} >
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ strokeLinecap: 'round', strokeWidth: '2', strokeLinejoin: 'round' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="h-6 w-6 text-gray-950"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ fillRule: 'evenodd', clipRule: 'evenodd' }} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="block text-gray-950 h-3 w-3 absolute left-3 top-0"><path d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"></path></svg>
                    </div>
                    <div className={`${themeState ? 'hidden' : ''}  relative`}>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{ strokeLinecap: 'round', strokeWidth: '2', strokeLinejoin: 'round' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" className="h-6 w-6 text-white"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    </div>

                </button>



                {/* <i  className={`${themeState ? 'far fa-moon text-cyan-500 ' : 'fa fa-sun text-yellow-500'}   text-xl cursor-pointer`}></i> */}
                <a href={Bio.github} rel='noreferrer' target='_blank' className='bg-cyan-500 px-3 hover:scale-105 transition-all duration-300 py-1.5 rounded md:text-base text-xs text-white  lg:block'>Github Profile <i className='fa fa-external-link ml-1'></i></a>
                <i onClick={() => setSidebarState(!sidebarState)} className={`${sidebarState ? 'fa-times' : 'fa-bars'} lg:hidden cursor-pointer text-2xl fa  text-cyan-500 w-5 transition-all duration-150`}></i>
            </div>
            <div className={`${sidebarState ? 'h-48' : 'h-0'} transition-all duration-150 ease-in-out  absolute top-[74px] rounded-b lg:hidden w-full p-0 shadow-xl bg-gray-900 dark:bg-white`}>
                <div className={`${sidebarState ? 'flex' : 'hidden'}  transition-all duration-700 flex-col p-3 gap-3 font-medium text-base`}>
                    {NavlinkList.map((navLinkData) => {
                        return <NavLink key={navLinkData.name} className={({ isActive }) =>
                            [
                                isActive ? "text-cyan-500 underline" : "hover:text-cyan-500 dark:hover:text-cyan-500 hover:scale-105 text-white dark:text-gray-500 transition-all  cursor-pointer",
                            ].join('')
                        } onClick={ scrollToTop } to={navLinkData.link} >{navLinkData.name}</NavLink >
                    })}
                </div>
            </div>
        </header>
    )
}

export default Header