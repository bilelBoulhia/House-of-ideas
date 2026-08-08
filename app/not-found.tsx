'use client'

import { useState, useEffect } from 'react'
import { m} from 'framer-motion'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export default function NotFound() {
    const router = useRouter()
    const [countdown, setCountdown] = useState(10)

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer)
                    router.push('/')
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(timer)
    }, [router])

    return (
        <div className="min-h-screen w-full   flex flex-col items-center justify-center  p-4">
            <m.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <h1 className="text-6xl  font-bold mb-4">404</h1>
                <h2 className="text-3xl font-semibold mb-6">Oops! Page Not Found</h2>
            </m.div>

            <m.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-lg mb-8"
            >
                The page you're looking for has vanished into the digital void.
            </m.div>

            <div className="space-y-4">
                <Button
                    variant="outline"
                    onClick={() => router.back()}
                    className="mr-4"
                >
                    Go Back
                </Button>
                <Button
                    onClick={() => router.push('/')}
                >
                    Return Home
                </Button>
            </div>

            <m.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-12 text-center"
            >
                <p className="text-sm mb-2">Redirecting to home in</p>
                <div className="flex items-center justify-center">
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <span className="text-2xl font-bold">{countdown}</span>
                </div>
            </m.div>

            <m.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ duration: 10, ease: "linear" }}
            />
        </div>
    )
}