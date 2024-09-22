'use client'

import {useState, useRef, useCallback} from 'react'
import {useForm} from 'react-hook-form'

// @ts-ignore
import ReCAPTCHA from "react-google-recaptcha"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Button} from "@/components/ui/button"
import {Toast} from '@/components/ui/toast'

type FormData = {
    firstName: string
    lastName: string
    email: string
    university: string
    field: string
    phone: string
}

export default function SubscribeForm() {
    const [toastMessage, setToastMessage] = useState('')
    const [toastType, setToastType] = useState<'success' | 'error'>('success')
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>()
    const recaptchaRef = useRef<ReCAPTCHA>(null)

    const onSubmit = useCallback(async (data: FormData) => {
        if (!recaptchaRef.current) {
            setToastMessage('reCAPTCHA not loaded')
            setToastType('error')
            return
        }

        try {
            const recaptchaResponse = await recaptchaRef.current.executeAsync()
            if (!recaptchaResponse) {
                setToastMessage('Please complete the reCAPTCHA')
                setToastType('error')
                return
            }

            const response = await fetch("/api/validateRecaptcha", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({recaptchaResponse}),
            })

            if (response.ok) {
                // reCAPTCHA validation passed
                const formResponse = await fetch("/api/email", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                })

                if (formResponse.ok) {
                    setToastMessage(`Thank you for subscribing, ${data.firstName}! We'll be in touch soon.`)
                    setToastType('success')
                } else {
                    throw new Error('Form submission failed')
                }
            } else {
                // reCAPTCHA validation failed
                setToastMessage('reCAPTCHA validation failed. Please try again.')
                setToastType('error')
            }
        } catch (error) {
            setToastMessage('An error occurred. Please try again.')
            setToastType('error')
        } finally {
            recaptchaRef.current?.reset()
        }
    }, [])

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="border-b border-gray-900/10 pb-12 text-left">
                    <h2 className="text-2xl font-semibold leading-7">Personal Information</h2>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        This information will only appear to Mods. Please ensure it's correct so we can contact you.
                    </p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <Label htmlFor="first-name">First name</Label>
                            <Input
                                id="first-name"
                                {...register("firstName", {required: "First name is required"})}
                                className="mt-2"
                            />
                            {errors.firstName &&
                                <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                        </div>

                        <div className="sm:col-span-3">
                            <Label htmlFor="last-name">Last name</Label>
                            <Input
                                id="last-name"
                                {...register("lastName", {required: "Last name is required"})}
                                className="mt-2"
                            />
                            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                        </div>

                        <div className="sm:col-span-4">
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
                            <Label htmlFor="university">University</Label>
                            <Input
                                id="university"
                                {...register("university", {required: "University is required"})}
                                className="mt-2"
                            />
                            {errors.university &&
                                <p className="text-red-500 text-sm mt-1">{errors.university.message}</p>}
                        </div>

                        <div className="sm:col-span-3">
                            <Label htmlFor="field">Field</Label>
                            <Input
                                id="field"
                                {...register("field", {required: "Field is required"})}
                                className="mt-2"
                            />
                            {errors.field && <p className="text-red-500 text-sm mt-1">{errors.field.message}</p>}
                        </div>

                        <div className="sm:col-span-3">
                            <Label htmlFor="phone">Phone number</Label>
                            <Input
                                id="phone"
                                type="tel"
                                {...register("phone", {
                                    required: "Phone number is required",
                                    pattern: {
                                        value: /^[0-9]{10}$/,
                                        message: "Invalid phone number, should be 10 digits"
                                    }
                                })}
                                className="mt-2"
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                        </div>

                        <div className="sm:col-span-full">
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                size="invisible"
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
                            />
                        </div>

                        <div className="sm:col-span-full">
                            <div className="flex items-center space-x-2">
                                <Button type="submit">Submit</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            {toastMessage && <Toast message={toastMessage} type={toastType}/>}
        </>
    )
}