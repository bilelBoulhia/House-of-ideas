'use client'
import React from 'react'
import {  EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'


type PropType = {
    options?: EmblaOptionsType
    children: React.ReactNode[]

}

const EmblaCarousel: React.FC<PropType> = ({options, children}) => {

    const [emblaRef] = useEmblaCarousel(options)


    return (
        <section className="max-w-full mx-auto">
            <div className="" ref={emblaRef}>

                <div className="flex -ml-4 touch-pan-y">

                    {children}
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel











