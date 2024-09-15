'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, {ComponentPropsWithRef, HTMLAttributes, useCallback, useEffect, useRef, useState} from 'react'
import { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from "@/lib/utils"
import {motion, useInView, useTransform, useViewportScroll} from "framer-motion";
type UseArrowButtonsType = {
    canScrollPrev: boolean
    canScrollNext: boolean
    onPrevButtonClick: () => void
    onNextButtonClick: () => void
}

interface PropType extends HTMLAttributes<HTMLDivElement> {
    options?: EmblaOptionsType
    children: React.ReactNode[]
    className?: string
    useArrows ?:boolean
}

const EmblaCarousel: React.FC<PropType> = ({ options, children, className ,useArrows = false, ...props }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const { canScrollPrev, canScrollNext, onPrevButtonClick, onNextButtonClick } = useArrowButtons(emblaApi)
        return (
            <section className={cn("max-w-full mx-auto m-5  ", className)} {...props}>
                <motion.div

                    className="relative" ref={emblaRef}>
                    <motion.div className="flex touch-pan-y ">
                        {children}
                    </motion.div>
                    { useArrows &&(
                    <div className="absolute inset-0 flex justify-between items-center">


                                <ArrowButton
                                    onClick={onPrevButtonClick}
                                    disabled={!canScrollPrev}
                                    className="left-0"
                                >
                                    <ChevronLeft className="w-6 h-6"/>
                                </ArrowButton>
                                <ArrowButton
                                    onClick={onNextButtonClick}
                                    disabled={!canScrollNext}
                                    className="right-0"
                                >
                                    <ChevronRight className="w-6 h-6"/>
                                </ArrowButton>


                    </div>
                    )}
                </motion.div>


            </section>
        )
}

const useArrowButtons = (
    emblaApi: EmblaCarouselType | undefined
): UseArrowButtonsType => {
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
    }, [emblaApi])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
    }, [emblaApi])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setCanScrollPrev(emblaApi.canScrollPrev())
        setCanScrollNext(emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return

        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    return {
        canScrollPrev,
        canScrollNext,
        onPrevButtonClick,
        onNextButtonClick
    }
}

type ArrowButtonProps = ComponentPropsWithRef<'button'>

const ArrowButton: React.FC<ArrowButtonProps> = ({ className, children, ...props }) => {
    return (
        <button
            type="button"
            className={cn(
                "focus:outline-none rounded-full p-2 shadow-md",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                "hover:bg-neutral-800 hover:bg-opacity-70  transition-colors",
                className
            )}
            {...props}
        >
            {children}
        </button>
    )
}

export default EmblaCarousel