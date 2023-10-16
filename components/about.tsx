"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import Image from 'next/image'

export default function About() {
  const { ref } = useSectionInView('About', 0.99)

  return (
    <motion.section
      ref={ref} 
      className='mb-28 max-w-[45rem]
      text-center leading-8 sm:mb-5 scroll-mt-28'
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}
      transition={{delay: 0.175}}
      id={"about"}
    >
        <SectionHeading>About me</SectionHeading>
        <p>
            After graduating with a degree in{" "}
            <span className="font-medium">English Literature</span>, I discovered a
            passion for IT. I enrolled in a computer networking program, and a few years 
            later, started a bootcamp in{" "}<span className="font-medium">front-end web development</span>.{" "}
            <span className="italic">What I enjoy the most about programming</span> is the
            problem-solving. I <span className="underline">love</span> the
            feeling of finally unlocking a solution. My core stack
            is{" "}
            <span className="font-medium">
            React/Next.js
            </span>
            {" "} and I am always on the look out for new technologies to learn. Lately I've been digging into 
            Typescript, Firebase, and Redux. I am currently searching for a{" "}
            <span className="font-medium">full-time position</span> as a front-end developer.
        </p>

        <p>
            <span className="italic">When I'm not coding</span>, I write <span className="font-medium">fiction</span>, rock climb, 
            and skateboard. I also like to read sci-fi and fantasy novels and enjoy many different genres of music.
            I live near the St. Laurence river and care for two cats named Bungee and Percy.
        </p>
    </motion.section>
  )
}
