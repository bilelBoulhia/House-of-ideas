'use client'

import React, {ComponentPropsWithRef, HTMLAttributes, useCallback, useEffect, useRef, useState} from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from "@/lib/utils"
import {motion, useInView, useTransform, useViewportScroll} from "framer-motion";
type UseDotButtonType = {
    selectedIndex: number
    scrollSnaps: number[]
    onDotButtonClick: (index: number) => void
}

interface PropType extends HTMLAttributes<HTMLDivElement> {
    options?: EmblaOptionsType
    children: React.ReactNode[]
    className?: string
}

const EmblaCarousel: React.FC<PropType> = ({ options, children, className, ...props }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
        return (
        <section className={cn("max-w-full mx-auto m-5 ", className)} {...props}>
            <motion.div
                initial={{opacity:0,x:200}}
                whileInView={{ opacity: 1, x: 0,transition: { duration: 0.5 } }}

                className="relative" ref={emblaRef}>
                <motion.div


                    className="flex touch-pan-y ">
                    {children}
                </motion.div>
            </motion.div>
            <div className="flex justify-center gap-2 mt-4">
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={cn(
                            "w-2 h-2 rounded-full transition-colors",
                            index === selectedIndex ? "bg-purple-300" : "bg-gray-300"
                        )}
                    />
                ))}
            </div>
        </section>
    )
}

const useDotButton = (
    emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const onDotButtonClick = useCallback(
        (index: number) => {
            if (!emblaApi) return
            emblaApi.scrollTo(index)
        },
        [emblaApi]
    )

    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
        setScrollSnaps(emblaApi.scrollSnapList())
    }, [])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onInit(emblaApi)
        onSelect(emblaApi)
        emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onInit, onSelect])

    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick
    }
}

type DotButtonProps = ComponentPropsWithRef<'button'>

const DotButton: React.FC<DotButtonProps> = ({ className, ...props }) => {
    return (
        <button
            type="button"
            className={cn("focus:outline-none", className)}
            {...props}
        />
    )
}

export default EmblaCarousel