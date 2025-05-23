'use client'
import { project_cards } from '@/data'
import React, { useEffect, useRef } from 'react'
import Card from './Card'
import { useScroll } from 'framer-motion';

const SmoothProjects = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start center', 'end end']
    })
    return (
        <div className='py-20 flex flex-col'>
            <h1 className='heading'>
                A small selection of {' '}
                <span className='text-purple'>recent projects</span>
            </h1>
            <div ref={container} id='projects' className='mt-[10vh] mb-[10vh]'>
                {

                    project_cards.map((project, i) => {
                        const targetScale = 1 - ((project_cards.length - i) * 0.05);
                        return <Card key={i} {...project} i={i} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />

                    })

                }
            </div>
        </div>

    )
}

export default SmoothProjects