"use client"

import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa'

export default function intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1 , scale:1}} transition={{type:"tween", duration:0.2}}>
                    <Image src="/harsh-profile.png" alt='profile-picture'
                    width={192} height={192} quality="95" priority={true}
                    className='h-24 w-24 border-[0.35rem] rounded-full border-white object-cover shadow-xl'
                    />
                </motion.div>
                
                <motion.span className='text-4xl absolute bottom-0 right-0'
                    initial={{opacity:0, scale:0}}
                    animate={{opacity:1 , scale:1}}
                    transition={{type:"spring", duration:0.7, stiffness:125, delay:0.1}}
                >
                    👋
                </motion.span>
            </div>
        </div>
        <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
        initial={{y: 100,opacity: 0}}
        animate={{y:0, opacity:1}}
        >
        <span className="font-bold">Hello, I&#39;m Harsh Bhavsar.</span> I&#39;m a{" "}
        <span className="font-bold">software engineer</span> with{" "}
        <span className="font-bold">3 years</span> of experience. I&#39;m
        passionate about crafting{" "}
        <span className="italic">high-quality sites and applications</span>. My
        focus is <span className="underline">React (Next.js)</span> and{" "}
        <span className="underline">Machine Learning</span>.
        </motion.h1>
        <motion.div className='flex items-center justify-center flex-col sm:flex-row gap-3 px-4 text-lg font-medium'
        initial={{y: 100,opacity: 0}}
        animate={{y:0, opacity:1}}
        transition={{
            delay:0.1
        }}
        >
            <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105  hover:bg-gray-950  transition'>Contact me here<BsArrowRight className='opacity-70 group-hover:translate-x-1 transition mt-0.5'/></Link>

            <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10'href='/Harsh Bhavsar.pdf' download>Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/></a>

            <a className='bg-white p-4 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-[1.15] active:scale-[1.15] hover:text-gray-950 transition cursor-pointer border border-black/10' href="https://www.linkedin.com/in/harsh-bhavsar-71a3a0113/" target='_blank'><BsLinkedin/></a>

            <a className='bg-white p-4 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10' href="https://github.com/hbhavsar1002" target='_blank'><FaGithubSquare/></a>
        </motion.div>
    </section>
  )
}
