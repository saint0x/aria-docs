import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PageNavigation } from "@/components/docs/page-navigation"
import { MobileNav } from "@/components/mobile-nav"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Header />
      <div className="container mx-auto flex-1 flex flex-row">
        <main className="flex-1 w-full py-10 animate-slide-up-fade-in">
          {children}
          <PageNavigation />
        </main>
      </div>
      <Footer />
    </div>
  )
}

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
    <div className="container mx-auto flex h-16 items-center justify-between">
      <div className="flex items-center gap-4">
        <MobileNav />
        <Link href="/getting-started" className="flex items-center">
          <span className="font-medium text-lg">Aria Developer Docs</span>
        </Link>
      </div>
      <nav className="hidden lg:flex items-center gap-6 text-sm">
        <Link
          href="https://www.whoisaria.co"
          className="font-medium text-foregroundMuted hover:text-foreground transition-colors"
        >
          Blog
        </Link>
        <Link
          href="/api-reference"
          className="font-medium text-foregroundMuted hover:text-foreground transition-colors"
        >
          API Reference
        </Link>
        <Link href="#" className="font-medium text-foregroundMuted hover:text-foreground transition-colors">
          GitHub
        </Link>
      </nav>
      <Button className="hidden lg:flex" size="lg">
        Download Aria for macOS
      </Button>
    </div>
  </header>
)

const Footer = () => (
  <footer className="border-t border-border">
    <div className="container mx-auto py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-foregroundMuted">
      <p>&copy; {new Date().getFullYear()} Aria Compute Company. All rights reserved.</p>
      <div className="flex gap-6 mt-4 sm:mt-0">
        <Link href="#" className="hover:text-foreground transition-colors">
          Twitter
        </Link>
        <Link href="#" className="hover:text-foreground transition-colors">
          GitHub
        </Link>
        <Link href="#" className="hover:text-foreground transition-colors">
          Contact
        </Link>
      </div>
    </div>
  </footer>
)
