import Link from "next/link"
import Image from "next/image"
import { Terminal, Code, GitBranch, Server, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Banner } from "@/components/banner"
// Import the MobileMenu component at the top of the file
import { MobileMenu } from "@/components/mobile-menu"

export default function Home() {
  return (
      <div className="flex min-h-screen flex-col overflow-x-hidden">
        <Banner message="🚧 This site is still under construction. We're working hard to improve it! 🚧" />
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Image src="/logo.svg" alt="Lembos Logo" width={40} height={40} className="h-10 w-10" />
              <span className="text-xl font-bold">Lembos</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#principles" className="text-sm font-medium hover:text-primary-light">
                Principles
              </Link>
              <Link href="#features" className="text-sm font-medium hover:text-primary-light">
                Features
              </Link>
              <Link href="#why" className="text-sm font-medium hover:text-primary-light">
                Why Lembos
              </Link>
            </nav>
            <div className="flex items-center gap-2 sm:gap-4">
              <ThemeToggle />
              <div className="hidden sm:flex items-center gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="#docs">View Docs</Link>
                </Button>
                <Button size="sm" className="bg-primary-dark hover:bg-primary-darker text-white" asChild>
                  <Link href="#get-started">Get Started</Link>
                </Button>
              </div>
              {/* Replace the mobile menu button with the MobileMenu component */}
              <MobileMenu />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 border-b">
            <div className="container px-4 md:px-6">
              <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Ship Software with Confidence
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Lembos is your internal developer platform built on Kubernetes, GitOps, and Backstage. Accelerate
                      delivery, standardize operations, and empower teams with golden paths.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button className="bg-primary-dark hover:bg-primary-darker text-white" asChild>
                      <Link href="#get-started">Get Started</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="#docs">View Docs</Link>
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-8 lg:mt-0">
                  <div className="relative w-full max-w-full overflow-hidden rounded-lg border bg-background p-2 shadow-lg">
                    <div className="flex items-center border-b bg-muted/50 px-4 py-2">
                      <div className="flex gap-1">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="overflow-x-auto p-4 font-mono text-sm text-muted-foreground">
                    <pre className="w-full">
                      <code className="grid gap-1">
                        <span className="text-green-500">$ kubectl</span> get lembos
                        <span className="text-muted">NAME STATUS VERSION AGE</span>
                        <span>app-1 Running v1.2.3 2d</span>
                        <span>app-2 Running v1.0.0 5h</span>
                        <span className="text-green-500">$ lembos</span> deploy --app=my-service
                        <span className="text-primary-light">✓ Configuration validated</span>
                        <span className="text-primary-light">✓ Resources provisioned</span>
                        <span className="text-primary-light">✓ Deployment successful</span>
                        <span className="text-green-500">Deployment complete! Access your service at:</span>
                        <span className="text-secondary-main">https://my-service.example.com</span>
                      </code>
                    </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Principles */}
          <section id="principles" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Core Principles</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Lembos is built on a foundation of principles that prioritize developer experience and operational
                    excellence.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-8">
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 shadow-sm">
                  <div className="rounded-full border bg-background p-2.5">
                    <Code className="h-6 w-6 text-primary-main" />
                  </div>
                  <h3 className="text-xl font-bold">Platform as a Product</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Focused on developer experience and user feedback
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 shadow-sm">
                  <div className="rounded-full border bg-background p-2.5">
                    <GitBranch className="h-6 w-6 text-primary-main" />
                  </div>
                  <h3 className="text-xl font-bold">Golden Paths</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Standardized workflows for delivery and infrastructure
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 shadow-sm">
                  <div className="rounded-full border bg-background p-2.5">
                    <Server className="h-6 w-6 text-primary-main" />
                  </div>
                  <h3 className="text-xl font-bold">Developer Self-Service</h3>
                  <p className="text-sm text-muted-foreground text-center">Autonomous app and environment management</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 shadow-sm">
                  <div className="rounded-full border bg-background p-2.5">
                    <Terminal className="h-6 w-6 text-primary-main" />
                  </div>
                  <h3 className="text-xl font-bold">Reduced Cognitive Load</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Abstracts away complexity and infra internals
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-4 shadow-sm">
                  <div className="rounded-full border bg-background p-2.5">
                    <Users className="h-6 w-6 text-primary-main" />
                  </div>
                  <h3 className="text-xl font-bold">Inclusive Collaboration</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Built for dev, ops, and security teams alike
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section id="features" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Lembos provides a comprehensive set of features to streamline your software delivery process.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
                <div className="flex flex-col space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Application Configuration Management</h3>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Centralized, version-controlled, and secure config storage</li>
                    <li>Support for environment-specific values and secrets</li>
                  </ul>
                </div>
                <div className="flex flex-col space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Infrastructure Orchestration</h3>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Declarative and automated provisioning</li>
                    <li>Policy-compliant resource allocation</li>
                  </ul>
                </div>
                <div className="flex flex-col space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Environment Management</h3>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Isolation and lifecycle management for dev/stage/prod</li>
                    <li>Consistent environment configuration across stages</li>
                  </ul>
                </div>
                <div className="flex flex-col space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Deployment Management</h3>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Automated rollouts with rollback support</li>
                    <li>Advanced deployment strategies (canary, blue-green)</li>
                  </ul>
                </div>
                <div className="flex flex-col space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Role-Based Access Control</h3>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Fine-grained RBAC with team/org scoping</li>
                    <li>Comprehensive audit trails for compliance</li>
                  </ul>
                </div>
                <div className="flex flex-col space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Developer Portal</h3>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Service catalog and documentation</li>
                    <li>Self-service tools and templates</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Why Lembos */}
          <section id="why" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Lembos?</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Lembos transforms how your organization builds, deploys, and manages applications.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Increased Efficiency</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Accelerated developer workflows with automated processes and standardized patterns.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Improved Collaboration</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Unified platform for multiple personas, breaking down silos between teams.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Enhanced Security</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Central RBAC and policy enforcement ensuring consistent security practices.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <h3 className="text-xl font-bold">Scales With You</h3>
                  <p className="text-sm text-muted-foreground text-center">
                    Designed for evolving infrastructure and teams, growing alongside your organization.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-burst text-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to streamline software delivery?
                  </h2>
                  <p className="max-w-[900px] text-white/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join the growing community of teams using Lembos to accelerate their development workflows.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row justify-center">
                  <Button size="lg" className="bg-white text-primary-dark hover:text-foreground hover:bg-primary/90 group-[.destructive]:hover:border-destructive/30" asChild>
                    <Link href="https://github.com/lembosproj" target="_blank" rel="noopener noreferrer">
                      <div className="flex items-center gap-2">
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                        </svg>
                        Check it out on GitHub
                      </div>
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-secondary-main hover:text-white hover:bg-primary-darker">
                    Join Community
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-secondary-main hover:text-white hover:bg-primary-darker">
                    Read the Docs
                  </Button>
                </div>
              </div>
            </div>
          </section>
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
