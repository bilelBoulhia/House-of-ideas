import Image, {StaticImageData} from "next/image";
import clsx from "clsx";
import {AnimatePresence, motion} from "framer-motion";
import React, {HTMLProps, useState} from "react";
import {cn} from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority"



const MovieCardVariants = cva(
    "min-w-0 ",
    {
        variants: {
            size: {
                default: "iphone5:flex-[0_0_45%] slighty-large-phone:flex-[0_0_35%] large-phone:flex-[0_0_33%] tablet:flex-[0_0_28%] extra-large-tablet:flex-[0_0_25%] laptop:flex-[0_0_15%]",
                small:"w-[9rem]"

            },
        },
        defaultVariants: {
            size: "default",

        },
    }
)


interface Props extends HTMLProps<HTMLDivElement>,VariantProps<typeof MovieCardVariants>  {
    label:string,
    image:StaticImageData | string,
    size:any,
    className?: string,


}





const MovieCard: React.FC<Props> = ({ label, image, size, className, ...props }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={cn(MovieCardVariants({ size, className }))}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            {...props}
        >
            <div className="h-full flex flex-col items-center justify-center font-semibold select-none">
                <div className="relative w-full aspect-[3/4] mb-4">
                    <Image
                        src={image}
                        alt={label}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-xl shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3)] transition-all duration-500 ease-in-out"
                    />
                    <div
                        className={clsx(
                            isHovered ? 'absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent rounded-xl' : ''
                        )}
                    />
                </div>



                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ opacity: 0, y: 1 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                            className="text-[0.75rem] w-full absolute mt-5 text-center font-bold text-white font-sans tracking-tight"
                        >
                            {label.toUpperCase()}
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </div>
    )
}

export default MovieCard;
