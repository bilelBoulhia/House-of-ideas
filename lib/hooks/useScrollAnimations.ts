import {MotionValue, useTransform} from "framer-motion";

export  default  function useScrollAnimations(scrollYProgress: MotionValue<number>,minW:number,duration:number) {
  const widthPercentage = useTransform(scrollYProgress, [0, duration], [100, 0])

  const width = useTransform(widthPercentage, (latest) =>
    Math.max(minW, (latest / 100) * window.innerWidth)
  )
  const borderRadius = useTransform(scrollYProgress, [0,0.3], [1, 18])

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['rgba(0, 10, 20, 0)', 'rgba(0, 10, 20, 1)']
  )

  return { width, borderRadius, backgroundColor }
}