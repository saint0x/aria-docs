import { DocSection } from "@/components/docs/layout"
import { ArchitectureDiagram } from "@/components/docs/architecture-diagram"

export default function ArchitecturePage() {
  return (
    <DocSection id="architecture" title="Architecture">
      <div className="mt-8 flex justify-center">
        <div className="p-6 border border-border rounded-lg bg-backgroundSubtle w-full">
          <ArchitectureDiagram />
        </div>
      </div>
    </DocSection>
  )
}
