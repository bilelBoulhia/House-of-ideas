'use client'
import React, { useState, useEffect, useRef } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ExcompoIcon } from "@/components/ui/Icons"
import Linkcomp from "@/components/ui/link"
import {motion, useScroll} from "framer-motion"
import useScrollAnimations from "@/lib/hooks/useScrollAnimations";
import {ThemeSwitcher} from "@/components/theme-switcher";


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



function AnimatedBg({ width, borderRadius, backgroundColor }: ReturnType<typeof useScrollAnimations>) {
  return (

          <motion.div
              style={{
                  width,
                  borderRadius,
                  backgroundColor,

                  left: '50%',
                  x: '-50%',
                  zIndex: -1,
              }}
              className='absolute   shadow-sm inset-0'
          />

  )
}

export default function Navbar() {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    const [isOpen, setIsOpen] = useState(false)
    const navRef = useRef<HTMLDivElement>(null)
    const toggleMenu = () => setIsOpen(!isOpen)
    const animations = useScrollAnimations(scrollYProgress,430,0.4)

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
            <Button
                variant="link"
                size="icon"
                className={`block slighty-large-phone:hidden fixed top-4 left-4 ${isOpen ? "hidden" : "block"}`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                <Menu className="h-6 w-6"/>
            </Button>
            <div
                className={`z-40 block slighty-large-phone:hidden fixed inset-0 backdrop-blur-sm transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            />

            <nav
                ref={navRef}
                className={`block slighty-large-phone:hidden  z-50 fixed top-0 left-0 bottom-0 w-64 shadow-lg transform transition-transform duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex flex-col h-full">
                    <ExcompoIcon className='p-4 size-20'/>
                    <ul className="flex-grow py-2">
                        {links.map((item, index) => (
                            <motion.li
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
                                    className="block  font-bold px-4 py-2 text-sm hover:bg-neutral-800/20 hover:text-accent-foreground transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </nav>
            <nav className="relative">
                <div className='relative flex-row items-center p-1  justify-center hidden slighty-large-phone:flex'>

                    <AnimatedBg {...animations} />

                    <ExcompoIcon className='size-14'/>

                    {links.map((link, index) => (
                            <Linkcomp href={link.href} key={index}>{link.label}</Linkcomp>
                    ))}
                    <ThemeSwitcher/>



                    </div>
            </nav>
        </>
)
}