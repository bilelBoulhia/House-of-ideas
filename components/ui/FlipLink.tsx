import { motion } from "framer-motion";
import React from "react";

export const FlipLink = ({ children  }:{children:string}) => {
    const DURATION = 0.25;
    const STAGGER = 0.025;
    return (
        <motion.h1
            initial="initial"
            whileHover="hovered"
            whileTap="hovered"
            className=" hover:cursor-default relative block overflow-hidden whitespace-nowrap"
            style={{
                lineHeight: 0.75,

            }}
        >
            <div>
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: 0,
                            },
                            hovered: {
                                y: "-110%",
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
            <div className="absolute inset-0 ">
                {children.split("").map((l, i) => (
                    <motion.span
                        variants={{
                            initial: {
                                y: "100%",
                            },
                            hovered: {
                                y: 0,
                            },
                        }}
                        transition={{
                            duration: DURATION,
                            ease: "easeInOut",
                            delay: STAGGER * i,
                        }}
                        className="inline-block"
                        key={i}
                    >
                        {l}
                    </motion.span>
                ))}
            </div>
        </motion.h1>
    );
};