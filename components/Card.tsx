'use client'

import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image'
import React, { useRef } from 'react'

interface CardProps {
    title: string;
    description: string;
    src: string;
    url: string;
    color: string;
    i: number;
    progress: any;
    range: any;
    targetScale: number;
}

const Card: React.FC<CardProps> = ({ title, description, src, url, color, i, progress, range, targetScale }) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    })
    const imageScale = useTransform(scrollYProgress, [0,1], [2,1])
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        // {card container}
        <div className='flex h-[100vh] items-center justify-center sticky top-0'>
        {/* // {card} */}
            <motion.div className='flex flex-col relative h-full w-[1000px] rounded-lg p-[50px] origin-top shadow-md shadow-violet-900' style={{ backgroundColor: color,scale, top:`calc(15vh + ${i * 45}px)`}}>
                <h2 className='text-3xl text-center m-0 font-bold'>{title}</h2>
                {/* {body} */}
                <div className='flex h-[100%] mt-[50px] gap-[50px]'>
                    {/* description */}
                    <div className='w-[40%] relative t-[10%]'>
                        <p className='text-sm md:text-md'>{description}</p>
                        <span className='flex items-center gap-[5px]'>
                            <a className='text-sm decoration-none cursor-pointer' href={url} target="_blank">See More</a>
                            <svg width="22" height="12" viewBox="0 0 22 12" fill="none">

                                <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black" />

                            </svg>
                        </span>
                    </div>
                    {/* image container */}
                    <div className='relative w-[60%] h-[90%] rounded-md overflow-hidden'>
                        {/* inner */}
                        <motion.div className='w-[100%] h-[100%]' style={{scale: imageScale}}>
                            <Image className='object-cover' width={500} height={500} src={src} alt='image' />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Card