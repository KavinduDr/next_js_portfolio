import React from 'react'
import Image from "next/image";
import { StickyScroll } from './ui/sticky-scroll-reveal';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';

const content = [
  {
    title: "Mobile Event Planner",
    description:
      "A mobile application to plan your events ahead of time. Built with flutter and dart. Utilises firebase as the backend of this project.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/event-planner.png"
          width={300}
          height={300}
          className="h-full w-full object-fill"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "A Breast Cancer Prediction Application",
    description:
      "An application with Graphical User Interface to predict breast cancers of a certain person. Built with python and tensorflow, this application uses neural networks to make the prediction process",
    content: (
        <Image
          src="/cancer.png"
          width={300}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="linear board demo"
        />
    ),
  },
  // {
  //   title: "Version control",
  //   description:
  //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //   content: (
  //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
  //       Version control
  //     </div>
  //   ),
  // },
  // {
  //   title: "Running out of content",
  //   description:
  //     "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
  //   content: (
  //     <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
  //       Running out of content
  //     </div>
  //   ),
  // },
];

const MyProjects = () => {
  return (
    <div className='py-20' id='projects'>
      <h1 className='heading'>
        A small selection of {' '}
        <span className='text-purple'>recent projects</span>
      </h1>
      {content.map((content) => (
        <CardContainer className='inter-var'>
          <CardBody className='bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  '>
            <CardItem translateZ="50" className='text-xl font-bold text-neutral-600 dark:text-white'>
              {content.title}
            </CardItem>
            <CardItem as='p' translateZ='60' className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              {content.description}
            </CardItem>
            <CardItem translateZ="100"
              className="w-full mt-4">
              {content.content}
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  )
}

export default MyProjects