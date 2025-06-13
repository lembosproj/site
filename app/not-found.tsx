import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Terminal } from "lucide-react"

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col">
            <main className="flex-1 flex items-center justify-center">
                <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
                    <div className="flex flex-col items-center justify-center space-y-8 text-center">
                        <div className="flex items-center gap-2">
                            <Image src="/logo.svg" alt="Lembos Logo" width={50} height={50} className="h-12 w-12" />
                            <span className="text-2xl font-bold">Lembos</span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">404</h1>
                            <h2 className="text-3xl font-semibold tracking-tight">Page Not Found</h2>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                                The resource you're looking for doesn't exist or has been moved.
                            </p>
                        </div>

                        <div className="relative w-full max-w-lg overflow-hidden rounded-lg border bg-background p-2 shadow-lg">
                            <div className="flex items-center border-b bg-muted/50 px-4 py-2">
                                <div className="flex gap-1">
                                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                </div>
                            </div>
                            <div className="overflow-x-auto p-4 font-mono text-sm text-muted-foreground">
                <pre>
                  <code className="grid gap-1">
                    <span className="text-green-500">$ lembos</span> find --resource=page
                    <span className="text-primary-light">Searching for resource...</span>
                    <span className="text-status-error-light">Error: Resource not found</span>
                    <span className="text-green-500">$ lembos</span> suggest
                    <span className="text-primary-light">✓ Suggestion: Return to home page</span>
                  </code>
                </pre>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button className="bg-primary-dark hover:bg-primary-darker text-white" asChild>
                                <Link href="/">
                                    <div className="flex items-center gap-2">
                                        <Terminal className="h-4 w-4" />
                                        Return to Home
                                    </div>
                                </Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="#docs">View Docs</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="w-full border-t py-6 md:py-0">
                <div className="container flex flex-col items-center justify-between gap-4 py-4 md:h-16 md:flex-row md:py-0">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Lembos. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">
                            Terms
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">
                            Privacy
                        </Link>
                        <Link href="#" className="text-sm text-muted-foreground hover:underline">
                            Contact
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    )
}
