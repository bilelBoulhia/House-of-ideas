'use client'

import React, {forwardRef, useImperativeHandle, useRef, useState} from 'react'
import { useForm} from 'react-hook-form'

import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"

import {Tables} from "@/utils/DatabaseTypes";
import {Checkbox} from "@/components/ui/checkbox";
import {insert} from "@/app/lib/supabase/client-api";
import {CheckedState} from "@radix-ui/react-checkbox";


export interface SubscribeFormRef {
    submitForm: () => void;
}

// TODO: make the form abstract instead of duplication
export const EventSubscribeForm = forwardRef(({onSubmit, eventid}: {
    eventid: number,
    onSubmit: (formData: Tables<'eventapplicants'>) => void
}, ref) => {
    const {register, handleSubmit, formState: {errors}} = useForm<Tables<'eventapplicants'>>()
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleFormSubmit = (data: Tables<'eventapplicants'>) => {


        // @ts-ignore
        const newsdata : Tables<'newsletter'> ={

            email : data.email

        }
        if(termsAccepted){
            const insertdata = async (newsdata: Tables<'newsletter'>) => {
                try {
                    await insert<Tables<'newsletter'>>('newsletter', newsdata).catch(r => console.error(r));

                } catch (error) {
                    console.error(error);
                }
            };
            insertdata(newsdata).catch(r => console.error(r));

        }


        const formDataWithWorkshop = {
            ...data,
            eventid: eventid
        };
        onSubmit(formDataWithWorkshop);
    };



    useImperativeHandle(ref, () => ({
        submitForm: () => {
            handleSubmit(handleFormSubmit)();
        }
    }));





    return (
        <>
            <form  onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">

                <div className="border-b border-gray-900/10 pb-12 text-left">
                    <h2 className="text-2xl font-semibold leading-7">Personal Information</h2>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        This information will only appear to Mods. Please ensure it's correct so we can contact you.
                    </p>

                    <div className="mt-10 grid grid-cols-1 p-[1px] gap-x-6 gap-y-5 ">
                        <div className="sm:col-span-1">
                            <Label htmlFor="first-name">First name</Label>
                            <Input
                                id="first-name"
                                {...register("nom", {required: "First name is required"})}
                                className="mt-2"
                            />
                            {errors.nom &&
                                <p className="text-red-500 text-sm mt-1">{errors.nom.message}</p>}
                        </div>

                        <div className="sm:col-span-2">
                            <Label htmlFor="last-name">Last name</Label>
                            <Input
                                id="last-name"
                                {...register("prenom", {required: "Last name is required"})}
                                className="mt-2"
                            />
                            {errors.prenom && <p className="text-red-500  text-sm mt-1">{errors.prenom.message}</p>}
                        </div>


                        <div className="sm:col-span-1">
                            <Label htmlFor="university">University</Label>
                            <Input
                                id="university"
                                {...register("university", {required: "University is required"})}
                                className="mt-2"
                            />
                            {errors.university &&
                                <p className="text-red-500 text-sm mt-1">{errors.university.message}</p>}
                        </div>

                        <div className="sm:col-span-2">
                            <Label htmlFor="field">Field</Label>
                            <Input
                                id="field"
                                {...register("field", {required: "Field is required"})}
                                className="mt-2"
                            />
                            {errors.field && <p className="text-red-500 text-sm mt-1">{errors.field.message}</p>}
                        </div>

                        <div className="sm:col-span-3">
                            <Label htmlFor="email">Email address</Label>
                            <Input
                                id="email"
                                type="email"
                                {...register("email", {
                                    required: "email is required",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Please enter a valid email address"
                                    }
                                })}
                                className="mt-2"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>

                        <div className="sm:col-span-3">
                            <Label htmlFor="phone">Phone number</Label>
                            <Input
                                id="phone"
                                type="tel"
                                {...register("phonenumber", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Invalid phone number, should be 10 digits"
                                    }
                                })}
                                className="mt-2"
                            />
                            {errors.phonenumber &&
                                <p className="text-red-500 text-sm mt-1">{errors.phonenumber.message}</p>}
                        </div>

                        <div className="sm:col-span-3">
                            <Label htmlFor="whyjoinus">Why do you want to join this event</Label>
                            <textarea
                                id="whyjoinus"
                                {...register("whyjoinus", {
                                    required: "the question is required",

                                })}
                                className="mt-2 flex h-20 w-full focus-visible:border-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 "
                            />
                            {errors.whyjoinus &&
                                <p className="text-red-500 text-sm mt-1">{errors.whyjoinus.message}</p>}
                        </div>
                        <div className="sm:col-span-3">
                            <Label htmlFor="howdiduhearaboutus">How did you hear about us</Label>
                            <textarea
                                id="howdiduhearaboutus"
                                {...register("howdiduhearaboutus", {
                                    required: "the question is required",
                                })}
                                className="mt-2 flex h-20 w-full focus-visible:border-white rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 "
                            />
                            {errors.howdiduhearaboutus &&
                                <p className="text-red-500 text-sm mt-1">{errors.howdiduhearaboutus.message}</p>}
                        </div>


                        <div className="sm:col-span-3">
                            <div className="flex items-center">
                                <Checkbox

                                    checked={termsAccepted}
                                    onCheckedChange={(checked: CheckedState) => {
                                        if (typeof checked === "boolean") {
                                            setTermsAccepted(checked);
                                        }
                                    }}
                                    className="mr-2"
                                />
                                <span className="text-sm">Subscribe to our newsletter</span>
                            </div>
                        </div>

                    </div>
                </div>
            </form>

        </>
    )

})