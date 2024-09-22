'use client'

import React, {useState} from 'react'
import {useForm} from 'react-hook-form'

import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Button} from "@/components/ui/button"
import {Toast} from '@/components/ui/toast'
import {Tables} from "@/utils/DatabaseTypes";




export default  function SubscribeForm({
     onSubmit,
     workshopId                }: {
     onSubmit: (formData: Tables<'applicants'>) => void
     workshopId?: number
}) {
    const [toastMessage, setToastMessage] = useState('')
    const [toastType, setToastType] = useState<'success' | 'error'>('success')
    const {register, handleSubmit, formState: {errors}, setValue} = useForm<Tables<'applicants'>>()
    const handleFormSubmit = (data: Tables<'applicants'>) => {

        const formDataWithWorkshop = {
            ...data,
            workshopId: workshopId
        }
        onSubmit(formDataWithWorkshop)
    }



    return (
        <>
            <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-8">

                <div className="border-b border-gray-900/10 pb-12 text-left">
                    <h2 className="text-2xl font-semibold leading-7">Personal Information</h2>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        This information will only appear to Mods. Please ensure it's correct so we can contact you.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 ">
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
                            {errors.prenom && <p className="text-red-500 text-sm mt-1">{errors.prenom.message}</p>}
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
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address"
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
                            {errors.phonenumber && <p className="text-red-500 text-sm mt-1">{errors.phonenumber.message}</p>}
                        </div>

                        {/*<div className="sm:col-span-full">*/}
                        {/*    <ReCAPTCHA*/}
                        {/*        ref={recaptchaRef}*/}
                        {/*        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}*/}

                        {/*        data-callback='onSubmit'*/}
                        {/*        onChange={handleRecaptchaChange}*/}
                        {/*    />*/}
                        {/*    {errors.recaptcha &&*/}
                        {/*        <p className="text-red-500 text-sm mt-1">{errors.recaptcha.message}</p>}*/}
                        {/*</div>*/}

                   
                    </div>
                </div>
            </form>
            {toastMessage && <Toast message={toastMessage} type={toastType}/>}
        </>
    )
}