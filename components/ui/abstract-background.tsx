"use client"

import { useEffect, useRef } from "react"

export default function AbstractBackground() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return
            const { clientX, clientY } = e
            const { width, height } = containerRef.current.getBoundingClientRect()
            const x = (clientX / width - 0.5) * 20
            const y = (clientY / height - 0.5) * 20

            containerRef.current.style.setProperty("--mouse-x", `${x}px`)
            containerRef.current.style.setProperty("--mouse-y", `${y}px`)
        }

        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 overflow-hidden "
        >

            <svg className="absolute left-0 right-0 top-0 h-40 w-full" viewBox="0 0 1000 200" preserveAspectRatio="none">
                <path
                    d="M0,100 C300,0 400,200 500,100 C600,0 700,200 1000,100 L1000,0 L0,0 Z"
                    className="fill-violet-100/30 transition-colors duration-700 dark:fill-violet-600/10"
                >
                    <animate
                        attributeName="d"
                        dur="20s"
                        repeatCount="indefinite"
                        values="M0,100 C300,0 400,200 500,100 C600,0 700,200 1000,100 L1000,0 L0,0 Z;
                        M0,100 C200,200 300,0 500,100 C700,200 800,0 1000,100 L1000,0 L0,0 Z;
                        M0,100 C300,0 400,200 500,100 C600,0 700,200 1000,100 L1000,0 L0,0 Z"
                    />
                </path>
            </svg>

            {/* Large circle */}
            <div className="absolute -right-32 -top-32 h-[40rem] w-[40rem] rounded-full bg-gradient-to-br from-violet-200/40 to-fuchsia-200/40 backdrop-blur-3xl transition-all duration-700 hover:scale-105 dark:from-violet-800/20 dark:to-fuchsia-800/20" />

            {/* Medium circle */}
            <div className="absolute -bottom-20 -left-20 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-rose-200/30 to-amber-200/30 backdrop-blur-3xl transition-all duration-700 hover:scale-105 dark:from-rose-900/20 dark:to-amber-900/20" />

            {/* Small shapes */}
            <div className="absolute left-1/4 top-1/4 h-32 w-32 rounded-full bg-gradient-to-r from-sky-200/30 to-emerald-200/30 backdrop-blur-3xl transition-all duration-700 hover:scale-110 dark:from-sky-900/20 dark:to-emerald-900/20" />

            <div className="absolute bottom-1/4 right-1/3 h-48 w-48 rounded-full bg-gradient-to-r from-purple-200/30 to-pink-200/30 backdrop-blur-3xl transition-all duration-700 hover:scale-110 dark:from-purple-900/20 dark:to-pink-900/20" />

            {/* Floating rectangles */}
            <div className="absolute left-1/3 top-1/2 h-24 w-64 -rotate-12 rounded-2xl bg-gradient-to-r from-blue-200/20 to-cyan-200/20 backdrop-blur-3xl transition-all duration-700 hover:rotate-0 dark:from-blue-900/10 dark:to-cyan-900/10" />

            <div className="absolute right-1/4 top-1/3 h-32 w-48 rotate-45 rounded-2xl bg-gradient-to-r from-teal-200/20 to-emerald-200/20 backdrop-blur-3xl transition-all duration-700 hover:rotate-90 dark:from-teal-900/10 dark:to-emerald-900/10" />

            {/* Subtle animated shape */}
            <div
                className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-200/10 to-fuchsia-200/10 backdrop-blur-3xl transition-colors duration-700 dark:from-violet-800/5 dark:to-fuchsia-800/5"
                style={{
                    transform: `translate(calc(-50% + var(--mouse-x, 0px)), calc(-50% + var(--mouse-y, 0px)))`,
                }}
            />
        </div>
    )
}

