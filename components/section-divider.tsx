"use client"

import { motion } from 'framer-motion'
import React from 'react'

//this is an empty div with height and width specified, and a rounded border. It is used to create a divider between sections.
//The framer-motion props here control the divider to make it start at 0(invisible) and then grow to normal scale(1)

export default function SectionDivider() {
  return (
    <motion.div className='bg-gray-200 my-24 h-16 w-1
        rounded-full hidden sm:block dark:bg-opacity-20'
        initial={{ opacity: 0, y:100 }}
        animate={{ opacity: 1, y:0 }}
        transition={{delay: 0.125}}
    ></motion.div>
  )
}
