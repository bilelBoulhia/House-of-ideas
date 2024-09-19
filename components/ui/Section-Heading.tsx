
import { motion } from "framer-motion"
import { InfiniteMovingCards } from "@/components/ui/infinite-carousel"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

type AnimatedHeading = {
  sentence: string[]
  className?: string
  size?: VariantProps<typeof Variants>["size"]
}

const Variants = cva("flex flex-row items-center text-center justify-center", {
  variants: {
    size: {
      default: "iphone5:text-2xl z-12 medium-phone:text-3xl large-phone:text-5xl",
      xl: "text-3xl sm:text-5xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

export const AnimatedHeading = ({ sentence, className, size }: AnimatedHeading) => {
  return (
    <div className={Variants({ size })}>
      <div className="relative flex-row flex items-end w-full justify-end">
        <motion.h2
          initial={{ opacity: 1, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
          className="uppercase font-bold text-center text-black dark:text-white font-sans tracking-tight"
        >
          {sentence[0]}
        </motion.h2>

        <div
          className={cn("absolute inset-0 h-full", className)}
          style={{
            zIndex: -1,
            left: "-100vw",
            right: "0",
          }}
        />
      </div>

      <div className="flex-row flex items-start w-full justify-start">
        <motion.span
          style={{ zIndex: -2 }}
          viewport={{ once: true }}
          initial={{ opacity: 1, x: '-100%' }}
          whileInView={{ opacity: 1, x: 5 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.6 }}
          className="uppercase font-bold text-center bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 font-sans tracking-tight"
        >
          {sentence[1]}
        </motion.span>
      </div>
    </div>
  )
}