"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { flatNavItems } from "@/lib/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"

export const PageNavigation = () => {
  const pathname = usePathname()
  const currentIndex = flatNavItems.findIndex((item) => item.href === pathname)

  if (currentIndex === -1) {
    return null
  }

  const prevPage = currentIndex > 0 ? flatNavItems[currentIndex - 1] : null
  const nextPage = currentIndex < flatNavItems.length - 1 ? flatNavItems[currentIndex + 1] : null

  return (
    <div className="mt-16 grid gap-4 border-t border-border pt-8 md:grid-cols-2">
      {prevPage ? (
        <Link
          href={prevPage.href}
          className="group flex flex-col items-start gap-2 rounded-lg border border-border p-4 text-left transition-all hover:bg-backgroundSubtle"
        >
          <div className="flex items-center gap-2 text-sm font-medium text-foregroundMuted">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Previous
          </div>
          <div className="font-semibold text-foreground">{prevPage.name}</div>
        </Link>
      ) : (
        <div />
      )}
      {nextPage ? (
        <Link
          href={nextPage.href}
          className="group flex flex-col items-end gap-2 rounded-lg border border-border p-4 text-right transition-all hover:bg-backgroundSubtle"
        >
          <div className="flex items-center gap-2 text-sm font-medium text-foregroundMuted">
            Next
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
          <div className="font-semibold text-foreground">{nextPage.name}</div>
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
