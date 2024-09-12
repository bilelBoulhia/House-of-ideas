import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../../../../cinema-app/lib/utils"

const TagVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",

            },

        },
        defaultVariants: {
            variant: "default",
        },
    }
)

export interface TagProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof TagVariants> {}

function Tag({ className, variant, ...props }: TagProps) {
    return (
        <div className={cn(TagVariants({ variant }), className)} {...props} />
    )
}

export { Tag, TagVariants }
