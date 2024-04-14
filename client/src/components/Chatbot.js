import React, { useState } from 'react'
import { Bio } from '../constants'
import Sagar from '../assets/Sagar.jpg';

const Chatbot = () => {
    const [showChatBox, setShowChatBox] = useState(false);
    return (
        <div className={`${showChatBox ? 'bottom-0 right-0' : 'bottom-10 right-10'} fixed md:bottom-10  md:right-10  z-50`} >
            <div className={`${showChatBox ? 'flex' : 'hidden'} h-auto w-80  flex-col bg-white shadow-xl md:mb-2 rounded relative`}>
                <i onClick={() => setShowChatBox(false)} className='fa cursor-pointer fa-times absolute top-1.5 text-cyan-800 right-2 text-lg'></i>
                <div className='flex p-3 gap-2 bg-cyan-500 rounded-t items-center' >
                    <img src={Sagar} className='h-12 w-12 rounded-full' />
                    <div className='flex flex-col text-white'>
                        <span className='font-bold'>{Bio.name}</span>
                        <span className='text-xs text-gray-100'>Typically replies within and hour</span>
                    </div>
                </div>
                <div className='flex-grow flex pb-6  flex-col gap-3 dark:bg-cyan-200 bg-cyan-800 rounded-b'>
                    <div className='flex flex-col dark:bg-cyan-400 bg-cyan-700 text-white text-xs m-4 w-2/3 mr-6 justify-center p-2 px-3  rounded-xl mt-6'>
                        <span>Hey, &#128075;</span>
                        <span>Drop me a message and let's talk</span>
                    </div>
                    <a target='_blank' href="https://api.whatsapp.com/send/?phone=9372925369&text='Hey'&type=phone_number&app_absent=0" className='self-center flex gap-3 py-1.5 items-center cursor-pointer font-semibold text-sm bg-cyan-500 text-white p-3 rounded'>
                        <i className='fab fa-whatsapp text-xl'></i>
                        <span>Send Message</span>
                    </a>
                </div>
            </div>
            <div onClick={() => setShowChatBox(true)} className={`${showChatBox ? 'hidden' : ''} dark:bg-white bg-green-500 dark:shadow-xl dark:border-green-500 border-2 border-white  dark:hover:bg-green-200 float-right  h-[60px] w-[60px] relative   cursor-pointer hover:scale-105 transition-all ease-in  flex justify-center items-center rounded-full`}>
                <i className='fa animate-pulse fa-circle text-red-500 text-xs absolute top-0 right-0'></i>
                <i className='fab fa-whatsapp text-[35px] text-white dark:text-green-600'></i>
            </div>
        </div>
    )
}

export default Chatbot