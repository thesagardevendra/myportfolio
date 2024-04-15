import React from 'react'
import desktopImage from '../assets/desktopImage.jpg'
import mobileImage from '../assets/mobileImage.jpg'
import darkImage from '../assets/dark.jpg'
import lightImage from '../assets/light.jpg'
import taskMImage from '../assets/taskm.jpg'
import hotstarImage from '../assets/hotstar.jpg'
import amazonImage from '../assets/amazon.jpg'

const Achievements = () => {
    return (
        <div className='flex flex-col md:px-20 px-4 md:pt-32 pt-24 relative' style={{ zIndex: 1 }}>
            <div style={{ boxShadow: 'rgb(6, 182, 212,0.4) 67px 43px 135px 157px', zIndex: -1 }} className='h-52 absolute top-52  left-0'></div>
            <div className='text-cyan-500 gap-1 flex flex-wrap md:text-5xl items-center text-4xl font-semibold'><i className='fa fa-award text-yellow-500 md:text-6xl text-5xl mr-3'></i>Achievements</div>
            {/* <div className='text-gray-400 select-text selection:text-white selection:bg-cyan-500 md:text-lg font-light my-8 md:w-10/12'>{Bio.accomplishmentDescription}</div> */}
            <ol className="relative border-s dark:border-gray-500 my-8 md:mt-20 border-cyan-500">
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-800 rounded-full -start-3 ring-8 ring-cyan-500 dark:ring-cyan-400 dark:bg-cyan-200">
                        <i className='fa fa-circle text-cyan-500 text-xs'></i>
                    </span>
                    <h3 className="flex items-center mb-1 ml-2 text-xl font-semibold text-cyan-500 dark:text-gray-500">Mobile Friendly Web Pages</h3>
                    <div className='flex flex-col lg:flex-row gap-10 lg:gap-0'>
                        <div className='flex flex-grow flex-col flex-1 justify-between'>
                            <div className=' flex flex-col gap-6 justify-center ml-2 text-sm font-normal  text-gray-400 dark:text-gray-500'>
                                <span>“Crafted with a responsive design, ensuring seamless usability and aesthetic appeal across all devices, from smartphones to tablets, guaranteeing an optimal browsing experience for users on the go.“</span>
                                <a href='https://thesagardevendra.github.io/musica-pp/#/home'  rel="noreferrer" target='_blank' className='bg-cyan-500 px-3 hover:scale-105 transition-all duration-300 py-1.5 w-[150px] text-center rounded -mt-3 text-white  block'>View Live App <i className='fa fa-external-link ml-1 '></i></a>
                                {/* Desktop */}
                                <div className=''>
                                    <div className="relative mx-auto border-gray-800 dark:border-gray-500 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[265px] md:max-w-[512px]">
                                        <div className="rounded-lg overflow-hidden h-[156px] md:h-[240px] bg-gray-800 dark:bg-gray-800">
                                            <img src={desktopImage} className=" object-cover h-[156px] md:h-[240px] w-full rounded-xl" alt="desktop" />
                                        </div>
                                    </div>
                                    <div className="relative mx-auto bg-gray-900 dark:bg-gray-500 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
                                    <div className="relative mx-auto bg-gray-800 dark:bg-gray-600 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
                                </div>
                            </div>
                        </div>

                        <div className='lg:flex-1 -ml-5 sm:-ml-0'>
                            {/* Mobile */}
                            <div className="relative mx-auto border-gray-800 dark:border-gray-500 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl ">
                                {/* <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div> */}
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                                <div className="h-[64px] w-[3px] bg-gray-800 absolute hidden sm:block -end-[17px] top-[142px] rounded-e-lg"></div>
                                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                                    <img src={mobileImage} className="object-cover w-[272px] h-[572px]" alt="mobile" />
                                </div>
                            </div>
                        </div>

                    </div>
                </li>
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-800 rounded-full -start-3 ring-8 ring-cyan-500 dark:ring-cyan-400 dark:bg-cyan-200">
                        <i className='fa fa-circle text-cyan-500 text-xs'></i>
                    </span>
                    <h3 className="flex items-center mb-1 ml-2 text-lg font-semibold text-cyan-500 dark:text-gray-500">Theme Toggling Feature</h3>
                    <div className='flex flex-grow flex-col flex-1 justify-between'>
                        <div className=' flex flex-col gap-6 ml-2 text-sm font-normal  text-gray-400 dark:text-gray-500'>
                            <span className='lg:w-1/2'>“Equipped with a versatile theme toggling feature, users can seamlessly switch between light and dark themes to tailor their browsing experience to their preference. This dynamic functionality enhances readability, reduces eye strain, and provides a personalized interface that adapts to different lighting conditions.”</span>
                            <a href='https://silly-nasturtium-528fd2.netlify.app/home'  rel="noreferrer" target='_blank' className='bg-cyan-500 px-3 hover:scale-105 transition-all duration-300 py-1.5 w-[150px] text-center rounded -mt-3 text-white  block'>View Live App <i className='fa fa-external-link ml-1 '></i></a>
                            <span className='text-red-600'>* You can experience Theme toggling by clicking the above sun icon in the header! </span>
                            {/* Desktop */}
                            <div className='self-start'>
                                <div className="relative mx-auto border-gray-800 dark:border-gray-500 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[265px] md:max-w-[512px]">
                                    <div className="rounded-lg overflow-hidden h-[156px] md:h-[240px] bg-gray-800 dark:bg-gray-800">
                                        <img src={darkImage} className="dark:hidden object-cover h-[156px] md:h-[240px] w-full rounded-xl" alt="dark" />
                                        <img src={lightImage} className="hidden dark:block object-cover h-[156px] md:h-[240px] w-full rounded-xl" alt="light" />
                                    </div>
                                </div>
                                <div className="relative mx-auto bg-gray-900 dark:bg-gray-500 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
                                <div className="relative mx-auto bg-gray-800 dark:bg-gray-600 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-800 rounded-full -start-3 ring-8 ring-cyan-500 dark:ring-cyan-400 dark:bg-cyan-200">
                        <i className='fa fa-circle text-cyan-500 text-xs'></i>
                    </span>
                    <h3 className="flex items-center mb-1 ml-2 text-lg font-semibold text-cyan-500 dark:text-gray-500">E-Commerce Web App</h3>
                    <time className=" ml-2 mb-2 flex items-center gap-2  text-sm lg:w-1/2   text-gray-400 dark:text-gray-500">“I have designed and developed a user-friendly ecommerce platform with a comprehensive product catalog, robust search, and filtering functionality. This platform offers seamless navigation and an intuitive experience for users, allowing them to easily explore a wide range of products. The search and filtering options enable users to quickly find desired items based on various criteria such as price, category, brand, and more, enhancing their shopping experience. Additionally, the platform is fully responsive, ensuring optimal performance and usability across mobile devices, providing users with a consistent experience regardless of the device they use. Overall, this ecommerce platform prioritizes user convenience and accessibility, delivering a seamless and enjoyable shopping experience.”</time>
                    <a href='https://silly-nasturtium-528fd2.netlify.app/home'  rel="noreferrer" target='_blank' className='bg-cyan-500 px-3 hover:scale-105 transition-all duration-300 py-1.5  text-sm mt-3 w-[150px] text-center rounded  text-white  block'>View Live App <i className='fa fa-external-link ml-1 '></i></a>
                </li>
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-800 rounded-full -start-3 ring-8 ring-cyan-500 dark:ring-cyan-400 dark:bg-cyan-200">
                        <i className='fa fa-circle text-cyan-500 text-xs'></i>
                    </span>
                    <h3 className="flex items-center mb-1 ml-2 text-lg font-semibold text-cyan-500 dark:text-gray-500">Music Web Player</h3>
                    <time className=" ml-2 mb-2 flex items-center gap-2  text-sm lg:w-1/2   text-gray-400 dark:text-gray-500">“I have developed a dynamic and user-friendly music web player with responsive screen capabilities, allowing seamless access to music across various devices. The platform features a ‘Liked Songs’ functionality, Additionally, users can follow or unfollow their favorite artists directly from the player. The robust search functionality empowers users to discover new music effortlessly, with intuitive filters for genre, artist, album, and more. Overall, this music web player prioritizes user-friendly navigation and accessibility, providing music enthusiasts with an immersive and enjoyable listening experience.”</time>
                    <a href='https://thesagardevendra.github.io/musica-pp/#/home'  rel="noreferrer" target='_blank' className='bg-cyan-500 px-3 hover:scale-105 transition-all duration-300 py-1.5  text-sm mt-3 w-[150px] text-center rounded  text-white  block'>View Live App <i className='fa fa-external-link ml-1 '></i></a>
                </li>
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-800 rounded-full -start-3 ring-8 ring-cyan-500 dark:ring-cyan-400 dark:bg-cyan-200">
                        <i className='fa fa-circle text-cyan-500 text-xs'></i>
                    </span>
                    <h3 className="flex items-center mb-1 ml-2 text-lg font-semibold text-cyan-500 dark:text-gray-500">SMFG India (Formerly Fullerton India) Credit Company Limited</h3>
                    <div className=' flex flex-col gap-6 ml-2 text-sm font-normal  text-gray-400 dark:text-gray-500'>
                        <ul className=" ml-2 mb-2 flex flex-col items-center gap-2  text-sm lg:w-1/2   text-gray-400 dark:text-gray-500">
                            <li> 1. Validated ICICI Third Party Product Fields: Demonstrated meticulous attention to detail by successfully validating height, weight, and annual income fields in Econsent, aligning with industry standards.</li>
                            <li> 2. Oversaw SMFG Brand Transformation: Exhibited strategic leadership in overseeing the brand transformation across 10+ applications, effectively managing and unifying a diverse portfolio.</li>
                            <li>3. Successfully Launched LASer Portal: Demonstrated innovation and commitment to expanding the organization's digital offerings through the successful launch of the LASer Portal.</li>
                            <li> 4.Addressed Infosec Vulnerabilities: Proactively resolved critical information security vulnerabilities in Service connect and Parivahan, ensuring a secure technology environment.</li>
                            <li>5. Implemented Google Analytics 4: Demonstrated a proactive approach to data analytics by successfully implementing Google Analytics 4 in the HFC Online journey, enhancing understanding of online user behavior.</li>
                            <li>6. Updated Branchlocator Screen: Showcased an understanding of user experience and commitment to keeping technology interfaces up-to-date by updating the branch locator screen in the Service connect application.</li>
                        </ul>
                    </div>
                </li>
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-800 rounded-full -start-3 ring-8 ring-cyan-500 dark:ring-cyan-400 dark:bg-cyan-200">
                        <i className='fa fa-circle text-cyan-500 text-xs'></i>
                    </span>
                    <h3 className="flex items-center mb-1 ml-2 text-lg font-semibold text-cyan-500 dark:text-gray-500"> Aion Infosystems Private Limited</h3>
                    <div className=' flex flex-col gap-6 ml-2 text-sm font-normal  text-gray-400 dark:text-gray-500'>
                        <ul className=" ml-2 mb-2 flex flex-col items-center gap-2  text-sm lg:w-1/2   text-gray-400 dark:text-gray-500">
                            <li>"As a Software Engineer at Aion Infosystem, I spearheaded the development of a cutting-edge Real Estate Management System leveraging ArcGIS 3D maps. By harnessing HTML, CSS, and JavaScript on the frontend, coupled with Node.js and SQL Server on the backend, I led the team in creating a dynamic and intuitive platform. Our transition to React.js for frontend development further enhanced user experience and performance. Through this project, I demonstrated my ability to seamlessly integrate complex GIS technology with modern web development frameworks, ultimately delivering a robust solution tailored to the real estate industry's needs."</li>
                        </ul>
                    </div>
                </li>
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-800 rounded-full -start-3 ring-8 ring-cyan-500 dark:ring-cyan-400 dark:bg-cyan-200">
                        <i className='fa fa-circle text-cyan-500 text-xs'></i>
                    </span>
                    <h3 className="flex items-center mb-1 ml-2 text-lg font-semibold text-cyan-500 dark:text-gray-500">Cloned Website's</h3>

                    <div className=' flex flex-wrap gap-6 ml-2 text-sm mt-5 font-normal  text-gray-400 dark:text-gray-500'>
                        {/* Desktop */}
                        <div className='self-start'>
                            <div className="relative mx-auto border-gray-800 dark:border-gray-500 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[265px] md:max-w-[512px]">
                                <div className="rounded-lg overflow-hidden h-[156px] md:h-[240px] bg-gray-800 dark:bg-gray-800">
                                    <img src={hotstarImage} className=" object-cover h-[156px] md:h-[240px] w-full rounded-xl" alt="hostar" />
                                </div>
                            </div>
                            <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                            </div>

                        </div>
                        <div className='self-start'>
                            <div className="relative mx-auto border-gray-800 dark:border-gray-500 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[265px] md:max-w-[512px]">
                                <div className="rounded-lg overflow-hidden h-[156px] md:h-[240px] bg-gray-800 dark:bg-gray-800">
                                    <img src={amazonImage} className="object-cover h-[156px] md:h-[240px] w-full rounded-xl" alt="amazon" />
                                </div>
                            </div>
                            <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
                                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
                            </div>
                        </div>
                    </div>

                </li>
                <li className="mb-10 ms-6">
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-800 rounded-full -start-3 ring-8 ring-cyan-500 dark:ring-cyan-400 dark:bg-cyan-200">
                        <i className='fa fa-circle text-cyan-500 text-xs'></i>
                    </span>
                    <h3 className="flex items-center mb-1 ml-2 text-lg font-semibold text-cyan-500 dark:text-gray-500">Task Management System <span className="dark:bg-cyan-200 dark:text-cyan-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-cyan-900 text-cyan-300 ms-3">Coming Live Soon</span></h3>
                    <div className=' flex flex-col gap-6 ml-2 text-sm font-normal  text-gray-400 dark:text-gray-500'>
                        <ul className=" ml-2 mb-2 flex flex-col items-center gap-2  text-sm lg:w-1/2   text-gray-400 dark:text-gray-500">
                            <li> 1. Individual Login: Users can create personalized accounts with unique login credentials, ensuring secure access to the task management system and personalized user experiences.</li>
                            <li> 2. Team Invites: Facilitate collaboration by enabling users to invite team members to join projects and collaborate seamlessly within the platform.</li>
                            <li>3. Virtual Collaboration: Empower teams to work together virtually by providing shared workspaces, real-time messaging, and collaborative document editing features.</li>
                            <li> 4. Project Tracking: Track project progress, issues, stories, and epics through comprehensive project management tools, enabling teams to stay organized and focused on project goals.</li>
                            <li>5. Admin and User Roles: Implement role-based access control with distinct admin and user roles, allowing administrators to manage system settings, user permissions, and project access levels.</li>
                        </ul>
                        {/* Desktop */}
                        <div className='self-start'>
                            <div className="relative mx-auto border-gray-800 dark:border-gray-500 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[265px] md:max-w-[512px]">
                                <div className="rounded-lg overflow-hidden h-[156px] md:h-[240px] bg-gray-800 dark:bg-gray-800">
                                    <img src={taskMImage} className="object-cover h-[156px] md:h-[240px] w-full rounded-xl" alt="taskmanagement" />
                                </div>
                            </div>
                            <div className="relative mx-auto bg-gray-900 dark:bg-gray-500 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
                            <div className="relative mx-auto bg-gray-800 dark:bg-gray-600 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
                        </div>


                    </div>
                </li>

            </ol>
        </div>
    )
}

export default Achievements