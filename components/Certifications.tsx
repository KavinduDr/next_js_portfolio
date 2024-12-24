import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { Card, CardContent } from "@/components/ui/card"
import { certifications } from '@/data'

const Certifications = () => {
    return (
        <div className='py-20' id='projects'>
            <h1 className='heading mb-5'>
                A small collection of {' '}
                <span className='text-purple'>my certifications</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full max-w-sm"
                >
                    <CarouselContent>
                        {certifications.map((certification) => (
                            <CarouselItem key={certification.id} className="md:basis-1/2 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <img src={certification.img} alt={certification.title} className="h-full w-full object-contain" />
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}

export default Certifications