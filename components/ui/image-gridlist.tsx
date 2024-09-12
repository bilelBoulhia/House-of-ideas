import {Card} from "./Card";
import clsx from "clsx";
import Image, {StaticImageData} from "next/image";
import {AnimatePresence, motion} from "framer-motion";
import {useState} from "react";
import {CategoryData} from "../../../../../cinema-app/app/(main)/sections/Categories";



const ImageGridlist = ({data}:{data:CategoryData[]})=>{
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="iphone5:h-[80vw] large-phone:h-[30vw]  w-[100%] p-[1px]"
             style={{
                 scrollbarWidth: 'none',
                 msOverflowStyle: 'none',
                 WebkitOverflowScrolling: 'touch',
                 ...{
                     '::-webkit-scrollbar': {
                         display: 'none',
                     },
                 }
             }}
        >
            <div className="relative  flex large-phone:flex-row gap-2 iphone5:flex-col justify-between h-full w-full">
                {data.map((src, index) => (
                    <Card
                        key={index}
                        className={clsx(
                            'card  relative  flex-1  transition-all duration-300 ease-in-out',
                            hoveredIndex === index ? 'flex-[3]' : '',
                        )}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        variant="default"
                    >
                        <div>
                            <Image
                                src={src.Category_cover}
                                className="iphone5:rounded  sm:rounded-2xl medium-phone:rounded-md right-0 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3)] max-h-[20vw] transition-all duration-500 ease-in-out"
                                alt={`Image ${index}`}
                                layout="fill"
                                objectFit="cover"
                            />

                            <div
                                className={clsx(hoveredIndex === index? 'absolute max-h-[20vw]  iphone5:rounded sm:rounded-2xl medium-phone:rounded-md w-full  inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent' : ''
                                )}/>
                        </div>

                        <AnimatePresence>
                            {hoveredIndex === index && (
                                <motion.div
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    exit={{opacity: 0}}
                                    transition={{duration: 0.3}}
                                    className="absolute inset-0 "
                                >

                                    <motion.div
                                        initial={{opacity: 0, y: 10}}
                                        animate={{opacity: 1, y: 0}}
                                        exit={{opacity: 0, y: 10}}
                                        transition={{duration: 0.2, delay: 0.1}}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        <h1 className="cursor-default tablet:text-2xl mb-2 iphone5:text-xs medium-phone:text-2xl  md:text-4xl lg:text-6xl font-bold text-center text-white font-sans  tracking-tight">
                                            {src.Category_name}
                                        </h1>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>


                    </Card>
                ))}
            </div>
        </div>
    );
}
export {ImageGridlist}