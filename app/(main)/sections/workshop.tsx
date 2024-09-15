'use client'
import {motion} from "framer-motion";
import {FlipText} from "@/components/ui/FlipText";
import Carousel from "@/components/ui/Carousel";
import {Button} from "@/components/ui/button";
import MovieCard from "@/components/ui/movie-card";
import c1 from '@/app/assets/workshop images/image (1).png'
import c2 from '@/app/assets/workshop images/image (2).png'
import c3 from '@/app/assets/workshop images/image (3).png'
import Image, {StaticImageData} from "next/image";
interface CourseData {
    role: string
    name: string
    picture: StaticImageData
    details: string
}
const data: CourseData[] = [
    {
        role: 'project management',
        name: 'Maya Ait Aissi',
        picture: c1,
        details: 'Et blandit non sit ac egestas risus non.',
    },

]

/*
*    {
        role: 'Public Speaking',
        name: 'Toufik KOURTAA',
        picture: c2,
        details: 'Et blandit non sit ac egestas risus non.',
    },
    {
        role: 'MARKETING DIGITAL',
        name: 'Youcef Boukhalfa',
        picture: c3,
        details: 'Et blandit non sit ac egestas risus non.',
    },*/
export default function Workshop() {
    return (

        <div className="flex-1 flex w-full items-center  overflow-hidden flex-col gap-2">

            <div className="relative w-full overflow-hidden">
                <motion.h2
                    initial={{opacity: 0, x: 0}}
                    whileInView={{opacity: 1, x: -120}}
                    transition={{duration: 0.5, ease: "easeInOut"}}
                    className="iphone5:text-xl medium-phone:text-3xl large-phone:text-4xl uppercase font-semibold text-center text-black dark:text-white font-sans tracking-tight"
                >
                    <FlipText>Our</FlipText>
                    <motion.span
                        className='bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-600 via-violet-500 to-pink-900 absolute whitespace-nowrap'
                        initial={{opacity: 0, x: '100%'}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{
                            type: 'spring',
                            stiffness: 100,
                            damping: 15,
                            delay: 0.5
                        }}
                    >
                        Workshop
                    </motion.span>
                </motion.h2>
            </div>

            <Carousel useArrows={false}>
                {data.map((course, index) => (
                    <div key={index} className="bg-neutral-800 rounded-lg overflow-hidden shadow-lg">
                        <div className="bg-purple-200 p-4">
                            <div
                                className="bg-purple-500 text-white text-xs font-semibold px-2 py-1 rounded inline-block mb-2">
                                {course.role.toUpperCase()}
                            </div>
                            <h2 className="text-2xl font-semibold text-gray-800">
                                with Mrs <span className="text-purple-600">{course.name}</span>
                            </h2>
                        </div>
                        <div className="p-4">
                            <div className="w-full h-48 bg-gray-300 rounded-md mb-4">

                                <Image
                                    src={course.picture}
                                    alt={course.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-purple-600 mb-2">{course.role.toUpperCase()}</h3>
                            <p className="text-gray-600">{course.details}</p>
                        </div>
                        <div className="p-4 flex justify-between">
                            <Button variant="default" className="w-1/2 mr-2">
                                Free
                            </Button>
                            <Button variant="default" className="w-1/2 mr-2">
                                Inscrier Now
                            </Button>
                        </div>
                    </div>

                ))}
            </Carousel>
        </div>
    )
}