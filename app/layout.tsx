import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lembos - Ship Software with Confidence",
  description: "An Internal Developer Platform (IDP) designed to streamline and enhance the software development lifecycle within organizations.",
  icons: {
    shortcut: "/favicon.ico",
    icon: [
        {
          url: "/favicon.png",
          sizes: "16x16",
          type: "image/png"
        },
        {
          url: "/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png"
        },
        {
          url: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          url: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png"
        }
    ],
    apple: {
      url: "/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png"
    },
    other: {
      rel: "mask-icon",
      url: "/safari-pinned-tab.svg",
      color: "#5bbad5"
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
