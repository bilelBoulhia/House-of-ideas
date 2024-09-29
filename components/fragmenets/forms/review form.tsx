"use client"

import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {ArrowRight} from "lucide-react"
import React, {useState} from "react"
import {useForm, SubmitHandler} from "react-hook-form"
import Toast from "@/components/ui/toast"
import {Tables} from "@/utils/DatabaseTypes";
import {insert} from "@/app/lib/supabase/client-api";
import { motion } from "framer-motion"



export const ReviewForm = () => {
    const [showToast, setShowToast] = useState(false)
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<Tables<'reviews'>>()

    const onSubmit: SubmitHandler<Tables<'reviews'>> = (data) => {

        const insertdata = async (data: Tables<'reviews'>) => {
            try {
                const issuccess = await insert<Tables<'reviews'>>('reviews', data).catch(r => console.error(r));
                if (issuccess) {
                    setShowToast(true);
                    reset()

                }
            } catch (error) {
                console.error(error);
            }
        };
        insertdata(data).catch(r => console.error(r));

    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col  justify-center items-center w-full p-4  md:w-1/2 gap-5 m-9 relative">
                <motion.h2
                    initial={{y:20}}
                    whileInView={{y:0}}
                    transition={{duration:0.6,delay:0.4}}

                    className="text-2xl  font-bold  tracking-tighter sm:text-3xl">Review us</motion.h2>
                <div className="relative  w-full">
                    <Input
                        type="text"
                        placeholder="your name"
                        className="w-full border-white shadow-sm placeholder:text-muted-foreground   text-lg py-6"
                        {...register("reviewer", {
                            required: "name is required",
                            pattern: {
                                value: /^[a-zA-Z\s]+$/,
                                message: "Please enter a valid name"
                            }
                        })}
                    />
                    <Button type='submit'
                            className="absolute right-0 rounded-l-[0px] top-0 bottom-0 h-full w-14 group hover:bg-gray-200">
                        <ArrowRight
                            className="size-10 transition-transform duration-300 ease-in-out transform group-hover:translate-x-1"/>
                    </Button>
                </div>
                {errors.reviewer && <p className="text-red-500 text-sm mt-1 self-start">{errors.reviewer.message}</p>}

                <div className="relative w-full">
          <textarea
              placeholder="Review"
              className="flex  min-h-[150px] w-full rounded-md   bg-transparent px-3 py-2  border-2 border-black/80  dark:border-white text-lg shadow-sm placeholder:text-muted-foreground"
              {...register("review", {
                  required: "Review is required",
                  minLength: {
                      value: 10,
                      message: "Review must be at least 10 characters long"
                  }
              })}
          />
                </div>
                {errors.review && <p className="text-red-500 text-sm mt-1 self-start">{errors.review.message}</p>}
            </form>

            <Toast
                show={showToast}
                message="thank you for your review"
                onClose={() => setShowToast(false)}
            />
        </>
    )
}