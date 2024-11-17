'use client'
import React, { useState, useEffect, useRef } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { NewHiIcon} from "@/components/ui/Icons"

import {m, useScroll} from "framer-motion"
import useScrollAnimations from "@/app/lib/hooks/useScrollAnimations";
import {ThemeSwitcher} from "@/components/theme-switcher";
import AnimatedNavBarBg from "@/components/navigation/ui/animated-navbar-background";
import {useRouter,usePathname} from 'next/navigation'
import {CloseIcon} from "@/components/ui/Icons";

interface Item {
    label: string
    href: string
}

const links: Item[] = [
    { label: "Formations", href: "/#Formations" },
    { label: "Events", href: "/#Events" },
    { label: "Workshops", href: "/#Workshops" },
    { label: "Reviews", href: "/#Reviews" },

]
export default function Navbar() {
    const router = useRouter()
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const [isOpen, setIsOpen] = useState(false)
    const navRef = useRef<HTMLDivElement>(null)
    const toggleMenu = () => setIsOpen(!isOpen)
    const animations = useScrollAnimations(scrollYProgress,480,0.2)



    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
        document.removeEventListener("mousedown", handleClickOutside)
        }
     }, [])

    return (
        <>

            <div className={`block slighty-large-phone:hidden ${isOpen ? "hidden" : "block"}`}>
                <Button
                    variant="ghost"
                    size="icon"
                    className='block slighty-large-phone:hidden hover:bg-transparent fixed top-4 left-4 '
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <Menu className="h-6 w-6"/>
                </Button>

                <NewHiIcon animate={false}   className='float-right  relative size-20 p-4  '/>
            </div>





            <div
                className={`z-40 block slighty-large-phone:hidden fixed inset-0 backdrop-blur-sm transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            />

            <nav
                ref={navRef}
                className={`block slighty-large-phone:hidden bg-white  dark:bg-black z-50 fixed top-0 left-0 bottom-0 w-64 shadow-lg transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >

                <Button
                    variant="link"
                    size="icon"
                    className="absolute top-4 right-0"
                    onClick={toggleMenu}
                    aria-label="Close menu"
                >
                    <CloseIcon className="h-6 w-6"/>
                </Button>
                <div className="flex flex-col  h-full">


                    <ul className="flex-grow py-10">
                        <ThemeSwitcher/>
                        {links.map((item, index) => (
                            <m.li
                                animate={{
                                    opacity: isOpen ? 1 : 0,
                                    scale: isOpen ? 1 : 0.3,
                                    x: isOpen ? 0 : -50,
                                }}
                                transition={{
                                    duration: 0.2,
                                    delay: isOpen ? index * 0.1 + 0.5 : 0,
                                }}
                                key={item.href}
                            >
                                <a
                                    href={item.href}
                                    className="block  font-bold px-4 py-2 text-3xl hover:bg-neutral-800/20 hover:text-accent-foreground transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </a>
                            </m.li>
                        ))}


                    </ul>
                </div>
            </nav>
            <nav className="relative m-[2px]">
                <div className='relative flex-row items-center p-1  justify-center hidden slighty-large-phone:flex'>

                    <AnimatedNavBarBg {...animations} />
                    <NewHiIcon animate={true} className='size-[3rem]'/>
                    {links.map((section, index) => (
                            <Button  variant='link' onClick={() => router.push(section.href)} key={index}>{section.label}</Button>
                    ))}
                    <ThemeSwitcher/>
                 </div>
            </nav>
        </>
)
}