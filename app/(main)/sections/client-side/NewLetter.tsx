"use client"

import React, { useState} from "react"
import {Mail} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Tables} from "@/utils/DatabaseTypes";
import {insert} from "@/app/lib/supabase/client-api";
import Toast from "@/components/ui/toast";
import {useForm} from "react-hook-form";
import { SubmitHandler} from "react-hook-form"
import { m } from "framer-motion"
import {shadowVariants} from "@/utils/types";
export default function CoolNewsletter() {
    const [showToast, setShowToast] = useState(false)
    const {register,handleSubmit, formState: {errors}, reset
    } = useForm<Tables<'newsletter'>>()

    const onSubmit: SubmitHandler<Tables<'newsletter'>> = (data) => {

        const insertdata = async (data: Tables<'newsletter'>) => {
            try {
                const issuccess = await insert<Tables<'newsletter'>>('newsletter', data).catch(r => console.error(r));
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
        <section className="relative overflow-hidden py-16  m-12 sm:py-24 w-full">
            <m.div
                initial="hidden"
                viewport={{once: true}}
                whileInView="visible"
                variants={shadowVariants}
                className="absolute inset-0  bg-gradient-to-br from-purple-800 via-violet-700 to-pink-600  transform -skew-y-6"></m.div>
            <div className="relative mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="bg-white/10  backdrop-blur-lg rounded-lg shadow-xl overflow-hidden">
                    <div className="px-6  py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:p-20">
                        <div className="lg:w-0 lg:flex-1">
                            <m.h2
                                initial={{x:'-104%'}}
                                whileInView={{x:0}}
                                viewport={{once: true}}
                                transition={{duration: 0.5, delay: 0.4, ease: "easeInOut"}}
                                className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                                Get updates about upcoming events
                            </m.h2>
                            <p className="mt-4 max-w-3xl text-lg text-purple-100">
                               subscribe to our news letter so you can Get the lasatest
                                updates about upcoming events and workshops
                            </p>
                        </div>
                        <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                            <form className="sm:flex" onSubmit={handleSubmit(onSubmit)}>
                                <div
                                    className="min-w-0 flex-1">
                                    <label htmlFor="email" className="sr-only ">
                                        Email address
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder=" your email"
                                        {...register("email", {
                                            required: "email is required",
                                            pattern: {
                                                value: /\S+@\S+\.\S+/,
                                                message: "Please enter a valid email address"
                                            }
                                        })}
                                        className="placeholder:text-white bg-white/20 text-white placeholder-white border-0  focus-visible:ring-2  focus-visible:ring-purple-400 "
                                    />

                                    {errors.email && <p className="text-red-500 text-sm mt-1 self-start">{errors.email.message}</p>}
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <Button
                                        type='submit'

                                        className="w-full flex items-center justify-center  bg-violet-500  group hover:bg-violet-600 text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                                    >

                                        <Mail className="mr-2  transition-transform transform group-hover:scale-110   h-5 w-5"/>

                                        subscribe
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Toast
                show={showToast}
                message="thank you for subscribing"
                onClose={() => setShowToast(false)}
            />

        </section>
    )
}