import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Sidebar } from "@/components/sidebar"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="px-2 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 w-full max-w-xs sm:max-w-sm">
        <div className="p-4 border-b">
          <Link to="/getting-started" className="flex items-center" onClick={() => setOpen(false)}>
            <span className="font-medium text-lg">Aria Developer Docs</span>
          </Link>
        </div>
        <div className="p-4 h-[calc(100vh-8rem)] overflow-y-auto">
          <Sidebar />
        </div>
        <div className="p-4 border-t">
          <Button className="w-full" size="lg">
            Download Aria for macOS
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
