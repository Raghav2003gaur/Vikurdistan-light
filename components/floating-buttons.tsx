"use client"

import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Floating WhatsApp Button */}
      {isVisible && (
        <a
          href="https://wa.me/964123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 z-40 group"
        >
          <button className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 animate-bounce">
            <MessageCircle className="w-7 h-7" />
          </button>
        </a>
      )}

      {/* Floating Book Now CTA */}
      {isVisible && (
        <div className="fixed bottom-8 left-8 z-40 hidden sm:block">
          <Button className="h-12 px-6 bg-gradient-to-r from-primary to-accent text-white shadow-2xl hover:shadow-3xl transition-all hover:scale-105 animate-pulse">
            Book Now
          </Button>
        </div>
      )}
    </>
  )
}
