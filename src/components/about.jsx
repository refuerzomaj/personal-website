import React from 'react'

const about = () => {
  return (
    <div className=' bg-black py-25 px-10 z-4 h-full grid gap-10' id='about'>
      {/*About Me Section*/}
      <div className='max-w-[1000px] mx-auto grid gap-10 leading-7 animate-slide-in-top'>
        <h1 className='text-3xl sm:text-5xl font-extrabold 
                      bg-gradient-to-r from-orange-400 via-white to-orange-400
                      text-transparent bg-clip-text drop-shadow-lg'>About Me</h1>
        <div className='border-1 p-6 bg-neutral-950/80 border-slate-600/20 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer duration-300'>
          
          <p className='text-white text-1xl'>I’m a passionate Web Developer with 3 years of experience, who began my journey as a freelancer on Fiverr, creating functional and visually engaging websites for clients worldwide. I’ve since worked remotely with Agility Outsourcing, a UK-based company, and MG Computing as a part-time developer. My expertise lies in WordPress and Elementor, including building and customizing WordPress themes to meet unique client needs. I also have hands-on experience in React and React.js, developing responsive and dynamic user interfaces. I’m continuously enhancing my skills as a developer, driven by a passion for clean code, creative design, and crafting seamless digital experiences.</p>
        </div>
      </div>
      {/*My Education Section*/}
      <div className='max-w-[1000px] pt-8 mx-auto gap-6 grid lg:grid-cols-2 animate-slide-in-top'>
        <div className='grid gap-6'>
          <h1 className='text-3xl sm:text-5xl font-extrabold 
                      bg-gradient-to-r from-orange-400 via-white to-orange-400
                      text-transparent bg-clip-text drop-shadow-lg'>Education</h1>
          <div className='group border-1 p-6 bg-neutral-950/80 border-slate-600/40 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer duration-300'>
            <div className='grid gap-2'>
              <h3 className='text-2xl text-orange-400/80 font-extrabold group-hover:text-white'>2018-2022</h3>
              <p className='text-2xl text-white font-bold'>BACHELOR OF SCIENCE IN AVIATION INFORMATION TECHNOLOGY</p>
              <p className='text-xl text-white'>Philippine State College of Aeronautics</p>
            </div>
          </div>
        </div>
        
      </div>
      {/*My Certification Section*/}
      <div className='max-w-[1000px] pt-8 mx-auto gap-6 animate-slide-in-top'>
        
        <div className='grid gap-6'>
          <h1 className='text-3xl sm:text-5xl font-extrabold 
                      bg-gradient-to-r from-orange-400 via-white to-orange-400
                      text-transparent bg-clip-text drop-shadow-lg'>Certificates</h1>
          {/* Certificates */}
          <div className='grid lg:grid-cols-2 gap-6'>
            <div className='group border-1 p-6 bg-neutral-950/80 border-slate-600/40 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer duration-300'>
              <div className='grid gap-2'>
                <h3 className='text-2xl text-orange-400/80 font-extrabold group-hover:text-white'>April 02, 2024</h3>
                <p className='text-2xl text-white font-extrabold uppercase'>Certificate of Completion in Become a Wordpress Developer: Unlocking Power with Code</p>
                <p className='text-xl text-white'>Udemy</p>
              </div>
            </div>
            <div className='group border-1 p-6 bg-neutral-950/80 border-slate-600/40 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer duration-300'>
              <div className='grid gap-2'>
                <h3 className='text-2xl text-orange-400/80 font-extrabold group-hover:text-white'>Sep 12, 2023</h3>
                <p className='text-2xl text-white font-extrabold uppercase'>Certificate of Attendance in Cybersecurity</p>
                <p className='text-xl text-white'>Xaltius Pte Ltd</p>
              </div>
            </div>
            <div className='group border-1 p-6 bg-neutral-950/80 border-slate-600/40 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer duration-300'>
              <div className='grid gap-2'>
                <h3 className='text-2xl text-orange-400/80 font-extrabold group-hover:text-white'>Nov 12 - Dec 07, 2021</h3>
                <p className='text-2xl text-white font-extrabold uppercase'>Certificate of Completion in Creative Web Design</p>
                <p className='text-xl text-white'>Mindtech Training and Development Institue Inc.</p>
              </div>
            </div>
            <div className='group border-1 p-6 bg-neutral-950/80 border-slate-600/40 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer duration-300'>
              <div className='grid gap-2'>
                <h3 className='text-2xl text-orange-400/80 font-extrabold group-hover:text-white'>Aug 26 - Sep 22, 2021</h3>
                <p className='text-2xl text-white font-extrabold uppercase'>Certificate of Completion in Web Development</p>
                <p className='text-xl text-white'>Mindtech Training and Development Institue Inc.</p>
              </div>
            </div>
            <div className='group border-1 p-6 bg-neutral-950/80 border-slate-600/40 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer duration-300'>
              <div className='grid gap-2'>
                <h3 className='text-2xl text-orange-400/80 font-extrabold group-hover:text-white'>Aug 09 - 20, 2021</h3>
                <p className='text-2xl text-white font-extrabold uppercase'>Certificate of Completion in Python Programming Essentials</p>
                <p className='text-xl text-white'>Department of Information and Communication Technology</p>
              </div>
            </div>
            <div className='group border-1 p-6 bg-neutral-950/80 border-slate-600/40 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer duration-300'>
              <div className='grid gap-2'>
                <h3 className='text-2xl text-orange-400/80 font-extrabold group-hover:text-white'>June 11, 2021</h3>
                <p className='text-2xl text-white font-extrabold uppercase'>Certificate of Participation in Visual Basic .Net Tools for Data Visualization</p>
                <p className='text-xl text-white'>Department of Information and Communication Technology</p>
              </div>
            </div>
            <div className='group border-1 p-6 bg-neutral-950/80 border-slate-600/40 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer duration-300'>
              <div className='grid gap-2'>
                <h3 className='text-2xl text-orange-400/80 font-extrabold group-hover:text-white'>April 12 - 16 2021</h3>
                <p className='text-2xl text-white font-extrabold uppercase'>Certificate of Attendance in Digital Transformative Technologies Training</p>
                <p className='text-xl text-white'>Department of Information and Communication Technology</p>
              </div>
            </div>
            <div className='group border-1 p-6 bg-neutral-950/80 border-slate-600/40 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer duration-300'>
              <div className='grid gap-2'>
                <h3 className='text-2xl text-orange-400/80 font-extrabold group-hover:text-white'>May 29, 2020</h3>
                <p className='text-2xl text-white font-extrabold uppercase'>Certificate of Participation in Introduction to Cryptography</p>
                <p className='text-xl text-white'>IECEP Cavite Governor</p>
              </div>
            </div>
            <div className='group border-1 p-6 bg-neutral-950/80 border-slate-600/40 rounded-4xl hover:bg-orange-700/80 hover:border-orange-500/90 hover:cursor-pointer duration-300'>
              <div className='grid gap-2'>
                <h3 className='text-2xl text-orange-400/80 font-extrabold group-hover:text-white'>Oct 18 - Dec 05, 2017</h3>
                <p className='text-2xl text-white font-extrabold uppercase'>Career Entry Course for Software Developer Using Java</p>
                <p className='text-xl text-white'>Technical Education and Skills Development</p>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  )
}

export default about