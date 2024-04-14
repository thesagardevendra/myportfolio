import React from 'react'
import { Bio, skills } from '../constants'

const Proficiency = () => {
  return (
    <div id='proficiency' className='flex flex-col md:px-20 px-4 md:pt-32 pt-24 relative' style={{ zIndex: 1 }}>
      <div style={{ boxShadow: 'rgb(6, 182, 212,0.4) 67px 43px 135px 157px', zIndex: -1 }} className='h-52 absolute top-52  left-0'></div>
      <div className='text-cyan-500 text-5xl font-semibold'><i className='fa fa-cogs text-yellow-500 text-6xl mr-3'></i>Proficiency</div>
      <div className='text-gray-400 select-text selection:text-white selection:bg-cyan-500 md:text-lg font-light my-8 md:w-10/12'>{Bio.skillsDescription}</div>

      <div>
        
        <div>{skills.map((skillList) => (
          
          <div>
            <div className='dark:text-gray-500 text-white text-4xl  font-bold pt-10 pb-5'>{skillList.title}</div>
            <div className='flex flex-wrap items-center gap-7'>
              {skillList.skills.map((item) => (
                <div className='flex flex-col gap-2 justify-center items-center'>
                  <div className='h-20 w-20 p-1 rounded bg-white shadow-2xl flex items-center justify-center'>
                    <img className=' h-full w-full object-cover ' src={item.image} />
                  </div>
                  <span className='text-white dark:text-gray-500 font-semibold text-xl w-28 text-center'>{item.name}</span>
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
