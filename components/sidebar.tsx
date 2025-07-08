"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { navGroups } from "@/lib/navigation"

const ChevronRightIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 16 16" fill="currentColor" height="1em" width="1em" {...props}>
    <path d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z" />
  </svg>
)

export const Sidebar = () => {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<string[]>([])

  useEffect(() => {
    const activeGroup = navGroups.find((group) => group.items.some((item) => pathname === item.href))
    if (activeGroup) {
      setOpenSections((prev) => (prev.includes(activeGroup.title) ? prev : [...prev, activeGroup.title]))
    }
  }, [pathname])

  const toggleSection = (title: string) => {
    setOpenSections((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]))
  }

  return (
    <nav className="space-y-2 pr-4">
      {navGroups.map((group) => (
        <Collapsible
          key={group.title}
          open={openSections.includes(group.title)}
          onOpenChange={() => toggleSection(group.title)}
          className="space-y-1"
        >
          <CollapsibleTrigger className="w-full flex items-center justify-between px-2 py-2 text-sm font-semibold text-foreground hover:bg-backgroundSubtle rounded-md transition-colors group">
            <span>{group.title}</span>
            <ChevronRightIcon
              className={cn(
                "h-4 w-4 text-foregroundMuted transition-transform duration-200",
                openSections.includes(group.title) && "rotate-90",
              )}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="pl-4 pt-1 space-y-1 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            {group.items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center px-3 py-2 rounded-md transition-colors font-medium text-sm",
                  pathname === item.href
                    ? "bg-background text-foreground border border-border shadow-sm"
                    : "text-foregroundMuted hover:bg-backgroundSubtle/50 hover:text-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </nav>
  )
}
