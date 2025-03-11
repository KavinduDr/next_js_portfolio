import React from 'react'
import InfiniteMenu from './ui/InfiniteMenu/InfiniteMenu'
import { tech_items } from '@/data'

const Tech_stack = () => {
    return (
        <div className='py-20' id='tech_stack'>
            <h1 className='heading'>
                My Tech {' '}
                <span className='text-purple'>Stack</span>
            </h1>
            <div className='mt-10'>
                <InfiniteMenu items={tech_items} />
            </div>
        </div>
    )
}

export default Tech_stack