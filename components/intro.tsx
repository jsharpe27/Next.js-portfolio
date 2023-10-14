"use client"

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Intro() {
    const { ref } = useSectionInView('Home', 0.5)
    const  {setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

  return (
    <section
        ref={ref}
        id="home" className='mb-28 max-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'> 
        <div className='flex items-center 
             justify-center'>
            <div className='relative'>
                {/* The framer-motion props here control the image of me to make it start at 0(invisible) and then grow to normal scale(1) */}
                <motion.div
                initial={{ opacity: 0, scale:0 }}
                animate={{ opacity: 1, scale:1 }}
                transition={{
                    type: "tween",
                    duration: 0.2,
                }}
                >
                    <Image 
                        src="/mebungie.jpg" 
                        alt='a photo of Jordan Sharpe'
                        width='172'
                        height='172'
                        quality='95'
                        priority={true}
                        className='rounded-full
                        object-cover border-[0.35rem]
                        shadow-xl border-white'
                    />
                </motion.div>

                {/* The framer-motion props here control the emoji to make it start at 0(invisible) and then grow to normal scale(1) 
                There is also a stiffness, delay, duration etc properties for the transition prop*/}
                <motion.span className='absolute bottom-0 right-0
                                 text-4xl'
                                initial={{ opacity: 0, scale:0 }}
                                animate={{ opacity: 1, scale:1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 125,
                                    delay: 0.1,
                                    duration: 0.7
                                }}
                >
                    👋
                </motion.span>
            </div>

            
        </div>

          {/* The framer-motion props control the "sliding up" effect of the intro heading, both the position and opacity */}
        <motion.h1 className='mb-10 px-4 text-2xl 
        font-medium !leading-[1.5] sm:text-4xl mt-[5rem]'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        >
            <span className='font-bold'>Hi, I'm Jordan Sharpe.</span> I'm a{' '}
            <span className='font-bold'>web developer</span> based in Montréal, Canada.
            I love building <span className='italic'>clean and responsive sites & apps</span>. My focus is{' '}
            <span className='underline'>React (Next.js)</span>
        </motion.h1>

        {/* The framer-motion props control the "sliding up" effect of the links, both the position and opacity
        AND with a slight transtion: delay property so that the heading arrives "first" */}
        <motion.div className='flex flex-col sm:flex-row
            items-center justify-center gap-2 px-4
            text-lg font-medium mt-[5rem]'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.1,
            }}
            >
            
            {/* Link stuff. Pretty cool hover effects, and the Download Resume actually downloads the file.
            We are import several icons from react-icons */}
            <Link href='#contact' 
                className='group bg-gray-900 text-white px-7
                py-3 flex items-center gap-2 rounded-full
                outline-none focus:scale-110 hover:scale-110
                hover:bg-gray-950 active:scale-105
                transition'
                onClick={() => {
                    setActiveSection('Contact')
                    setTimeOfLastClick(Date.now())
                }}
            >
                Contact me here <BsArrowRight 
                className='opacity-70 group-hover:translate-x-1 transition' />
            </Link>

            <a className='group bg-white text-gray-900 px-7
            py-3 flex items-center gap-2 rounded-full
            outline-none focus:scale-110 hover:scale-110
            active:scale-105 transition cursor-pointer
            borderBlack dark:bg-white/10 dark:text-white/60'
            href="/JordanSharpeResume.pdf" download>
                Download Resume <HiDownload 
                className='opacity-60 
                group-hover:translate-y-1 transition'/>
            </a>


            <a className='bg-white p-4 flex 
            items-center gap-2 rounded-full text-gray-700
            focus:scale-[1.15] hover:scale-[1.15]
            active:scale-105 transition cursor-pointer
            borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-white/60'
            href="https://www.linkedin.com/in/jordan-sharpe-ba949259/" target="_blank">
                <BsLinkedin />
            </a>
            <a className='bg-white p-4 flex text-[1.35rem]
            items-center gap-2 rounded-full text-gray-700
            focus:scale-[1.15] hover:scale-[1.15]
            active:scale-105 transition cursor-pointer
            borderBlack hover:text-gray-950 dark:bg-white/10 dark:text-white/60'
            href="https://github.com/jsharpe27" target="_blank">
                <FaGithubSquare />
            </a>

        </motion.div>
    </section>
  )
}
