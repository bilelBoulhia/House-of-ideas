"use client"
import React from "react"

import { useState, useEffect, useRef } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {ExcompoIcon, Testicon} from "@/components/ui/Icons";
import Linkcomp from "@/components/ui/link";
import { stagger, motion } from "framer-motion"
import {Meteors} from "@/components/ui/Meteor-background";

interface Item {
    label: string
    href: string
}
const links: Item[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/Reviews" },
    { label: "Contact", href: "/Workshop" },
]

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const navRef = useRef<HTMLDivElement>(null)
    const toggleMenu = () => setIsOpen(!isOpen)
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

    const staggerList  = stagger(0.1, { startDelay: 0.25 });

    return (

        <>
            <Button
                variant="ghost"
                size="icon"

                className={`block z-5000 slighty-large-phone:hidden fixed top-4 left-4 z-50
            
                    ${isOpen ? "hidden" : "block"}`

            }
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <Menu className="h-6 z-5000 w-6"/>
            </Button>
            <div
                className={` block slighty-large-phone:hidden z-5000 fixed inset-0 backdrop-blur-sm transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            />

            <nav
                ref={navRef}
                className={`block z-5000 slighty-large-phone:hidden dark:bg-black/20 fixed top-0 left-0 bottom-0 w-64  shadow-lg transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >

                <div className="flex z-5000  flex-col h-full">
                    <ExcompoIcon className='p-4 size-20'/>
                    <ul className="flex-grow z-5000 py-2">
                        {links.map((item,index) => (
// @ts-ignore

                            <motion.li
                                animate={{
                                    opacity: isOpen ? 1 : 0,
                                    scale: isOpen ? 1 : 0.3,
                                    x: isOpen ? 0 : -50,
                                }}

                                transition={{
                                    duration: 0.2,
                                    delay: isOpen ? staggerList(index, { startDelay: 0.5 }) : 0,

                            }}


                                key={item.href}>
                                <a
                                    href={item.href}
                                    className="block font-bold px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </nav>
            <nav className=" z-5000 relative">
                <div className='flex-row z-5000  items-center p-1 justify-center hidden slighty-large-phone:flex '>
                    <ExcompoIcon className='size-14' />

                    {links.map((link, index) => (
                        <Linkcomp href={'/'} key={index}>{link.label}</Linkcomp>
                    ))}
                </div>
            </nav>


        </>
    )
}