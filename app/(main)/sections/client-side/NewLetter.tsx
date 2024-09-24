"use client"

import {useState} from "react"
import {Mail} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"

export default function CoolNewsletter() {
    const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        setEmail("")
        alert("Thank you for subscribing!")
    }

    return (
        <section className="relative overflow-hidden py-16  m-12 sm:py-24 w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-violet-700 to-pink-600  transform -skew-y-6"></div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-lg shadow-xl overflow-hidden">
                    <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:p-20">
                        <div className="lg:w-0 lg:flex-1">
                            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                                Get updates about upcoming events
                            </h2>
                            <p className="mt-4 max-w-3xl text-lg text-purple-100">
                               subscribe to our news letter so you can Get the lasatest
                                updates about upcoming events and workshops
                            </p>
                        </div>
                        <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                            <form className="sm:flex" onSubmit={handleSubmit}>
                                <div className="min-w-0 flex-1">
                                    <label htmlFor="email" className="sr-only ">
                                        Email address
                                    </label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder=" your email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="placeholder:text-white bg-white/20 text-white placeholder-white border-purple-300 focus:ring-purple-500 focus:border-purple-500"
                                    />
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full flex items-center justify-center bg-violet-500 hover:bg-violet-600 text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                                    >
                                        <Mail className="mr-2 h-4 w-4"/>
                                        {isSubmitting ? "Subscribing..." : "Subscribe"}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}