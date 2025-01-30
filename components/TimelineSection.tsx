'use client'
import Image from 'next/image';
import React from 'react'
import { Timeline } from './ui/timeline';

const TimelineSection = () => {

    const data = [
        {
            title: "HaXtreme 2.0 - 2023",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        HaXtreme 2.0 was organised by IEEE Student Branch of University of Ruhuna. Even though the team cannot win the event, it was a great experience to be a part of it.
                    </p>
                </div>
            ),
        },
        {
            title: "IEEEXtreme 17.0 - 2023",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        I was participated IEEExtreme 17.0 with a team as Team InceptionB and we have achieved 116th of Sri lankan ranking and 1467 of global ranking. That was a great experience to be a participant of the IEEExtreme 17.0.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image src={"/ieeextreme_17.png"} alt='ieeextreme_17' width={300} height={300} className="w-full h-full object-cover" />
                    </div>
                </div>
            ),
        },
        {
            title: "RED CYPHER 1.0 - 2024",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        Red Cyber 1.0 was organized by the Computer Society of the University of Ruhuna. It was the first of its kind within a government university in Sri Lanka.
                    </p>
                </div>
            ),
        },
        {
            title: "XTREME ENCODE",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        A thrilling coding competition which was organised by IEEE Region 10 in collaboration with ENCIDE MACE. It was a great experience to participate in the competition.
                    </p>
                    <div className="grid grid-cols-2 gap-4">

                    </div>
                </div>
            ),
        },
        {
            title: "MoraXtreme 9.0 - 2024",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        MoraXtreme 9.0 was organised by the IEEE Students branch University of Moratuwa. As a team Me and other members were able to secure 29th place in the competition.
                    </p>
                    <div className="grid grid-cols-2 gap-4">

                    </div>
                </div>
            ),
        },
        {
            title: "Dextron - 2024",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        DEXTRON is an exciting robotics competition organized by the ET Community at the Institute of Technology University of Moratuwa. As a team, I have participated under the name of TENET.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image src={"/dextron_final.jpg"} alt='dextron_final' width={300} height={300} className="w-full h-full object-cover" />
                    </div>
                </div>
            ),
        },
        {
            title: "AI-Sprint - 2024 : 2025",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
                        AI-Sprint is a part of the competition series of Codefest which is organised by SLIIT. AI_Sprint is mainly powered by Sysco Labs where the participants required to come up with solutions to the real world problems that are in the Sysco warehouses. In the finals as Team Inception, me and my team members was able to secure the 2nd place in the competitions. It was a great experience since every finalists were able to get a mentor from Sysco Labs. Their experience was very helpfull for our achievement.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <Image src={"/ai_sprint_win.jpg"} alt='ai_sprint_win' width={300} height={300} className="w-full h-full object-cover" />
                        <Image src={"/ai_sprint_group.jpg"} alt='ai-sprint-group' width={300} height={300} className="w-full h-full object-cover" />
                    </div>
                </div>
            ),
        },
    ];


    return (
        <div className='w-full'>
            <h1 className='heading'>
                I&apos;ve {' '}
                <span className='text-purple'> participated</span>
            </h1>
            <Timeline data={data} />
        </div>
    )
}

export default TimelineSection