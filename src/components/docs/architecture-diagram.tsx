import type React from "react"
import { cn } from "@/lib/utils"

// A styled node for the diagram, more "squarish"
const DiagramNode = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div
    className={cn(
      "bg-background border border-border rounded-lg px-6 py-3 text-center text-sm font-medium text-foreground shadow-sm",
      "min-w-[180px] max-w-[240px] flex-shrink-0", // Control width for a squarer look
      className,
    )}
  >
    {children}
  </div>
)

// A vertical connector line
const DiagramArrow = () => <div className="h-6 w-px bg-border/80 mx-auto" />

// The text label for a connection
const DiagramLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="text-xs text-foregroundMuted font-normal tracking-wide py-2">{children}</div>
)

// Horizontal Bidirectional Connector using SVG for a cleaner look
const HorizontalConnector = () => (
  <svg width="80" height="10" className="mx-4 flex-shrink-0" viewBox="0 0 80 10">
    <defs>
      <marker id="arrowhead" markerWidth="5" markerHeight="4" refX="5" refY="2" orient="auto-start-reverse">
        <polygon points="0 0, 5 2, 0 4" className="fill-current text-border/80" />
      </marker>
    </defs>
    <line
      x1="5"
      y1="5"
      x2="75"
      y2="5"
      className="stroke-current text-border/80"
      strokeWidth="1.5"
      markerEnd="url(#arrowhead)"
      markerStart="url(#arrowhead)"
    />
  </svg>
)

// A container for a group of related nodes
const Subgraph = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="w-full border border-dashed border-border/60 rounded-xl p-6 mt-12 relative bg-backgroundSubtle/30">
    <div className="absolute -top-5 left-1/2 -translate-x-1/2">
      <div className="bg-background px-2">
        <div className="border border-border rounded-md px-3 py-1 text-xs font-semibold text-foregroundMuted uppercase tracking-wider">
          {title}
        </div>
      </div>
    </div>
    {children}
  </div>
)

export const ArchitectureDiagram = () => {
  return (
    <div className="font-sans p-4 flex flex-col items-center w-full overflow-x-auto">
      <DiagramNode>Aria SDK Source Code</DiagramNode>
      <DiagramArrow />
      <DiagramLabel>arc build</DiagramLabel>
      <DiagramArrow />
      <DiagramNode>.aria Bundle</DiagramNode>
      <DiagramArrow />
      <DiagramLabel>arc upload</DiagramLabel>
      <DiagramArrow />
      <DiagramNode>Aria Firmware</DiagramNode>
      <DiagramArrow />

      {/* Orchestrator Row */}
      <div className="relative w-full flex justify-center my-2">
        <DiagramNode className="font-bold border-2 border-foreground/90 bg-background shadow-lg z-10">
          Orchestrator Agent
        </DiagramNode>

        {/* Connection to macOS App */}
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 flex items-center ml-[120px] z-0">
          {" "}
          {/* 120px is half of max-w-240px */}
          <HorizontalConnector />
          <DiagramNode>macOS App</DiagramNode>
        </div>
      </div>

      <DiagramArrow />

      <Subgraph title="Orchestrator Capabilities">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
          {/* Column 1: Containerization */}
          <div className="flex flex-col items-center space-y-3">
            <DiagramNode>Quilt Container Engine</DiagramNode>
            <DiagramArrow />
            <DiagramNode>Ephemeral Containers</DiagramNode>
          </div>

          {/* Column 2: Agentic Execution */}
          <div className="flex flex-col items-center space-y-3">
            <DiagramNode>Standard Tools</DiagramNode>
            <DiagramArrow />
            <DiagramNode>.aria Custom Logic</DiagramNode>
          </div>

          {/* Column 3: Context & Memory */}
          <div className="flex flex-col items-center space-y-3">
            <DiagramNode>Context & Memory</DiagramNode>
            <DiagramArrow />
            <div className="flex flex-col items-center space-y-3 w-full">
              <DiagramNode>Short-Term Memory</DiagramNode>
              <DiagramNode>Long-Term State (DB)</DiagramNode>
            </div>
          </div>
        </div>
      </Subgraph>
    </div>
  )
}
