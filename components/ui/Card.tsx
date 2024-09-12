import React from "react";
import { cva, type VariantProps } from "class-variance-authority"
import {cn} from "@/lib/utils";



const CardVariants = cva(
    "rounded",
    {
        variants: {
            variant: {
                default:
                    "",
                withBorder:"",


            },
            size: {
                default: "",

            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)


interface CardProps extends React.HTMLAttributes<HTMLDivElement>,VariantProps<typeof CardVariants> {


}
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className,variant, children, ...props }, ref) => {
        return (

            <div  ref={ref} className={cn(CardVariants(props), className)} {...props}>
                {children}
            </div>

        );
    }
);

Card.displayName = "Card";
