import {ChevronLeft, ChevronRight} from 'lucide-react'
import React, {ComponentPropsWithRef, HTMLAttributes, useCallback, useEffect, useState} from 'react'
import {EmblaOptionsType, EmblaCarouselType} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {cn} from "@/app/lib/utils"


type UseArrowButtonsType = {
    canScrollPrev: boolean
    canScrollNext: boolean
    onPrevButtonClick: () => void
    onNextButtonClick: () => void
}

interface PropType extends HTMLAttributes<HTMLDivElement> {
    options?: EmblaOptionsType
    children: React.ReactNode
    className?: string
    useArrows?: boolean
    slideClassName?: string
}

const EmblaCarousel: React.FC<PropType> = ({
                                               options,
                                               children,
                                               className,
                                               slideClassName,
                                               useArrows = false,
                                               ...props
                                           }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        ...options,
        align: 'center',
        containScroll: 'trimSnaps',
    })

    const {canScrollPrev, canScrollNext, onPrevButtonClick, onNextButtonClick} = useArrowButtons(emblaApi)

    return (
        <section className={cn("w-full mx-auto mt-5  relative ", className)} {...props}>
            <div className="overflow-hidden  " ref={emblaRef}>
                <div className="flex">
                    {React.Children.map(children, (child, index) => (
                        <div key={index} className={cn(" min-w-0 relative  ", slideClassName)}>
                            {child}
                        </div>
                    ))}
                </div>
            </div>
            {useArrows && (
                <>
                    <ArrowButton
                        onClick={onPrevButtonClick}
                        disabled={!canScrollPrev}
                        className="absolute  left-2 top-1/2 transform -translate-y-1/2 z-10"
                    >
                        <ChevronLeft className="w-6  h-6"/>
                    </ArrowButton>
                    <ArrowButton
                        onClick={onNextButtonClick}
                        disabled={!canScrollNext}
                        className="absolute right-2  top-1/2 transform -translate-y-1/2 z-10"
                    >
                        <ChevronRight className="w-6 h-6"/>
                    </ArrowButton>
                </>
            )}
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