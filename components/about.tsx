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
            passion for IT and enrolled in a computer networking program. A few years 
            later while working as a Techincal Support Analyst, I began manually testing my company's web app and this sparked a hobby interest in web development.
            which has let me grow my QA skills through coding.{" "}
            <span className="italic">What I enjoy the most about working as part of a developer team</span> is the
            problem-solving. 
        </p>
    </motion.section>
  )
}
