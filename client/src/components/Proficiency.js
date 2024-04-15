import React from 'react'
import { Bio, skills } from '../constants'

const Proficiency = () => {
  return (
    <div id='proficiency' className='flex flex-col md:px-20 px-4 md:pt-32 pt-24 relative' style={{ zIndex: 1 }}>
      <div style={{ boxShadow: 'rgb(6, 182, 212,0.4) 67px 43px 135px 157px', zIndex: -1 }} className='h-52 absolute top-52  left-0'></div>
      <div className='text-cyan-500 flex flex-wrap md:text-5xl items-center gap-1  text-4xl font-semibold'><i className='fa fa-cogs text-yellow-500 md:text-6xl text-5xl mr-3'></i>Proficiency</div>
      <div className='text-gray-400 select-text selection:text-white selection:bg-cyan-500 md:text-lg font-light my-8 md:w-10/12'>{Bio.skillsDescription}</div>

      <div>
        
        <div>{skills.map((skillList) => (
          
          <div key={skillList.title}>
            <div className='dark:text-gray-500 text-white md:text-4xl text-2xl  font-bold md:pt-10 pt-4 pb-5'>{skillList.title}</div>
            <div className='flex flex-wrap items-center md:gap-7 gap-2'>
              {skillList.skills.map((item) => (
                <div key={item.name} className='flex flex-col gap-2 justify-center items-center'>
                  <div className='md:h-20 md:w-20 h-14 w-14 p-1 rounded bg-white shadow-2xl flex items-center justify-center'>
                    <img alt={item.name} className=' h-full w-full object-cover ' src={item.image} />
                  </div>
                  <span className='text-white dark:text-gray-500 font-semibold md:text-xl text-sm md:w-28 w-[75px] text-center'>{item.name}</span>
                </div>
              ))}
            </div>

          </div>
        ))}</div>
        <div style={{ boxShadow: 'rgb(6, 182, 212,0.3) 67px 43px 135px 157px', zIndex: -1 }} className='h-52 absolute bottom-96  right-44'></div>
      </div>
    </div>
  )
}

export default Proficiency
