import React from 'react'
import Typewriter from 'typewriter-effect';
import Sagar from '../assets/Sagar.jpg';
import { Bio } from '../constants';

const Profile = () => {
    return (
        <div  className='flex flex-col md:px-20 px-3 md:pt-20 pt-24 relative' style={{ zIndex: 1 }}>
            
            <div style={{ boxShadow: 'rgb(6, 182, 212,0.3) 67px 43px 135px 157px', zIndex: -1 }} className='h-52 absolute top-52  left-0'></div>
            <div className='md:text-[45px] text-white flex md:my-8 flex-col text-2xl lg:items-end  lg:flex-row gap-6 dark:text-gray-500 font-bold'>
                <img alt='user icon' src={Sagar} className='md:h-64 rounded md:w-64 w-full  object-contain' />
                <div className='flex flex-col lg:gap-6 md:gap-8 gap-1.5 '>
                    <span className=''>Hi, There!</span>
                    <div> I'm <span className=''>{Bio.name}</span></div>
                    <div className='flex items-center font-bold md:text-4xl text-xl  md:space-x-2 space-x-1'>
                        <span>I am a</span>
                        <span className='text-cyan-500 '>
                            <Typewriter options={{ strings: Bio.roles, autoStart: true, loop: true, }} />
                        </span>
                    </div>
                </div>

            </div>
            <div className='text-gray-400 select-text selection:text-white selection:bg-cyan-500 md:text-lg font-light my-8 mt-3 lg:mt-0 md:w-10/12'>{Bio.description}</div>
            <ol className='flex flex-wrap flex-grow gap-10 my-3 pt-0 md:px-5 px-2'>
                <li className='flex text-white flex-col space-y-2 '>
                    <span className=' dark:text-gray-500  font-semibold md:text-lg'><i className='fa fa-file mr-1'></i> Curriculum Vitae</span>
                    <a href='tel:9372925369' className='bg-cyan-500 hover:scale-105 transition-all text-sm duration-300 w-[130px] text-center font-semibold  px-3 py-2 mb-5  rounded text-white'>Check Now<i className='fa fa-external-link  ml-2'></i></a>
                </li>
                <li className='flex text-white flex-col space-y-2 '>
                    <span className=' dark:text-gray-500  font-semibold md:text-lg'><i className='fa fa-phone rotate-90 mr-1'></i> +91-9372925369</span>
                    <a href='tel:9372925369' className='bg-cyan-500 hover:scale-105 transition-all text-sm duration-300 w-[120px] text-center font-semibold  px-3 py-2 mb-5  rounded text-white'>Call Now<i className='fa fa-external-link  ml-2'></i></a>
                </li>
                <li className='flex text-white flex-col space-y-2 '>
                    <span className=' dark:text-gray-500 font-semibold md:text-lg '><i className='fa fa-envelope mr-1'></i> sagarselvaraj059@gmail.com </span>
                    <a href='mailto:sagarselvaraj059@gmail.com' className='bg-cyan-500 hover:scale-105 transition-all text-sm duration-300  w-[120px] text-center font-semibold  px-3 py-2 mb-5  rounded text-white'>Mail Now <i className='fa fa-external-link  ml-2'></i></a>
                </li>
            </ol>
        </div>
    )
}
export default Profile

// rgb(6, 182, 212,0.5) 35px 45px 100px 100px
