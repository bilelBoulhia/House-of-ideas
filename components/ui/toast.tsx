import {useState, useEffect} from 'react'
import {X} from 'lucide-react'
import {cn} from "@/app/lib/utils"

interface ToastProps {
    message: string
    type?: 'success' | 'error'
    duration?: number
}

export const Toast = ({message, type = 'success', duration = 3000}: ToastProps) => {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
        }, duration)

        return () => clearTimeout(timer)
    }, [duration])

    if (!isVisible) return null

    return (
        <div
            className={cn(
                "fixed bottom-4 right-4 z-50 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow",
                type === 'success' && "bg-green-100",
                type === 'error' && "bg-red-100"
            )}
            role="alert"
        >
            <div className="text-sm font-normal">{message}</div>
            <button
                type="button"
                className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8"
                onClick={() => setIsVisible(false)}
                aria-label="Close"
            >
                <X className="w-5 h-5"/>
            </button>
        </div>
    )
}