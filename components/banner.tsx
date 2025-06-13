"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BannerProps {
  message: string
  variant?: "info" | "warning"
}

export function Banner({ message, variant = "info" }: BannerProps) {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div
      className={`w-full py-2 px-4 text-center text-white relative ${
        variant === "info" ? "bg-primary-main" : "bg-status-warning-light"
      }`}
    >
      <p className="text-sm font-medium">{message}</p>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 text-white hover:bg-primary-darker hover:text-white"
        onClick={() => setIsVisible(false)}
        aria-label="Close banner"
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  )
}
