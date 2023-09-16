"use client";

import Image from 'next/image'
import { useScroll, motion, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { projectsData } from '@/lib/data';

type ProjectProps = typeof projectsData[number]

export default function Project({title, description, tags, imageUrl}: ProjectProps){
    const ref = useRef<HTMLDivElement>(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]) //This transforms the scrollYProgress value to a new value between 0.8 and 1, to make it more subtle
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]) //this transforms the scrollYProgress value to a new value between 0.6 and 1, to make it more subtle

    return (
            <motion.div
                ref={ref}
                style={{
                    scale: scaleProgress,
                    opacity: opacityProgress
                }}
                className=' group 
                mb-3 sm:mb-8 last:mb-0 
            ' //We use the group class to control the hover effect on the project component, and to control even or odd projects
            >
                <section 
                className=' group bg-gray-100 max-w-[42rem] border
                border-black/5 rounded-lg overflow-hidden sm:pr-8 
                relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 group-even:pl-8
                hover:bg-gray-200 transition'>

            <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 
                sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[20rem]'>
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <p className='mt-2 leading-relaxed text-gray-700'>{description}</p>
                <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
                    {tags.map((tag, index) => (
                        <li className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase 
                        tracker-wider text-white rounded-full' key={index}>{tag}</li>
                    ))}
                </ul>
            </div>
            
            {/* The group class here lets us do the "opposite" position of the image elements*/}
            <Image 
                src={imageUrl} 
                alt="project I worked on" 
                quality={95} 
                className='absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                group-even:right-[initial] group-even:-left-40
                transition
                group-hover:scale-[1.04]
                group-hover:-translate-x-3
                group-hover:translate-y-3
                group-hover:-rotate-2
                
                group-even:group-hover:translate-x-3
                group-even:group-hover:translate-y-3
                group-even:group-hover:rotate-2
                '
            />
            </section>
    </motion.div>
    )
}