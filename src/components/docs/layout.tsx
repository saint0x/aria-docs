import type React from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { PageNavigation } from "@/components/docs/page-navigation"
import { MobileNav } from "@/components/mobile-nav"
import { Sidebar } from "@/components/sidebar"

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Header />
      <div className="container mx-auto flex-1 flex flex-row">
        <aside className="w-64 lg:sticky lg:top-16 h-full lg:h-[calc(100vh-4rem)] py-10 border-r border-border hidden lg:block">
          <Sidebar />
        </aside>
        <main className="flex-1 w-full py-10 animate-slide-up-fade-in px-6">
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
    <div className="container mx-auto flex h-16 items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <MobileNav />
        <Link to="/getting-started" className="flex items-center">
          <span className="font-medium text-lg">Aria Developer Docs</span>
        </Link>
      </div>
      <nav className="hidden lg:flex items-center gap-6 text-sm">
        <Link
          to="https://www.whoisaria.co"
          className="font-medium text-foregroundMuted hover:text-foreground transition-colors"
        >
          Blog
        </Link>
        <Link
          to="/api-reference"
          className="font-medium text-foregroundMuted hover:text-foreground transition-colors"
        >
          API Reference
        </Link>
        <Link to="#" className="font-medium text-foregroundMuted hover:text-foreground transition-colors">
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
    <div className="container mx-auto py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-foregroundMuted px-6">
      <p>&copy; {new Date().getFullYear()} Aria Compute Company. All rights reserved.</p>
      <div className="flex gap-6 mt-4 sm:mt-0">
        <Link to="#" className="hover:text-foreground transition-colors">
          Twitter
        </Link>
        <Link to="#" className="hover:text-foreground transition-colors">
          GitHub
        </Link>
        <Link to="#" className="hover:text-foreground transition-colors">
          Contact
        </Link>
      </div>
    </div>
  </footer>
)

export const DocSection = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24">
    <h2 className="text-4xl font-light border-b border-border pb-4 mb-8">{title}</h2>
    <div className="space-y-6 text-base text-foregroundMuted leading-relaxed">{children}</div>
  </section>
)

export const DocSubSection = ({ title, children }: { title?: string; children: React.ReactNode }) => (
  <div className="mt-12">
    {title && <h3 className="text-2xl font-medium mb-6">{title}</h3>}
    <div className="space-y-4">{children}</div>
  </div>
)

export const CodeBlock = ({ children, lang = "typescript" }: { children: React.ReactNode; lang?: string }) => (
  <div className="my-6">
    <pre className="bg-backgroundSubtle text-foreground rounded-lg p-6 border border-border overflow-x-auto text-sm shadow-sm">
      <code className={`language-${lang} font-mono`}>{children}</code>
    </pre>
  </div>
)

export const InlineCode = ({ children }: { children: React.ReactNode }) => (
  <code className="relative rounded bg-backgroundSubtle px-[0.4rem] py-[0.2rem] font-mono text-sm font-semibold text-foreground border border-border">
    {children}
  </code>
)