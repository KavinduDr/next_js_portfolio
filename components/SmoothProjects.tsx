import { project_cards } from '@/data'
import React from 'react'
import Card from './Card'

const SmoothProjects = () => {
    return (
        <div>
            {

                project_cards.map((project, i) => {

                    return <Card key={i} {...project} i={i} />

                })

            }
        </div>
    )
}

export default SmoothProjects