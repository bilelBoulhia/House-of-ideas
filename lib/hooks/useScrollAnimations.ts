'use client'

import { useState, useEffect } from 'react'
import { MotionValue, useTransform } from "framer-motion"

export default function useScrollAnimations(scrollYProgress: MotionValue<number>, minW: number, duration: number) {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {

    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)


    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const widthPercentage = useTransform(scrollYProgress, [0, duration], [100, 0])

  const width = useTransform(widthPercentage, (latest) =>
    Math.max(minW, (latest / 100) * windowWidth)
  )

  const borderRadius = useTransform(scrollYProgress, [0, 0.3], [1, 8])

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    [
    'hsl(var(--navbar-background-start) / 0)',
    'hsl(var(--navbar-background-end) / 1)'
  ]
  )


  return { width, borderRadius, backgroundColor }
}