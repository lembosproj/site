"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 py-4">
          <Link
            href="#features"
            className="text-lg font-medium hover:text-primary-light"
            onClick={() => setOpen(false)}
          >
            Features
          </Link>
          <Link
            href="#principles"
            className="text-lg font-medium hover:text-primary-light"
            onClick={() => setOpen(false)}
          >
            Principles
          </Link>
          <Link href="#why" className="text-lg font-medium hover:text-primary-light" onClick={() => setOpen(false)}>
            Why Lembos
          </Link>
          <div className="flex flex-col gap-2 pt-4">
            <Button asChild>
              <Link href="#get-started" onClick={() => setOpen(false)}>
                Get Started
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#docs" onClick={() => setOpen(false)}>
                View Docs
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
