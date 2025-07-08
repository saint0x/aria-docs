import { DocSection, DocSubSection, InlineCode } from "@/components/docs/layout"
import { InteractiveFileExplorer } from "@/components/docs/interactive-file-explorer"

export function Examples() {
  return (
    <DocSection id="examples" title="Interactive Examples">
      <DocSubSection title="Research Agent Project">
        <p>
          This example demonstrates a simple <InlineCode>ResearchAgent</InlineCode> that uses a{" "}
          <InlineCode>WebSearchTool</InlineCode>.
        </p>
        <p>It's fully interactive - click on the directories and files to explore a real Aria project!</p>
        <div>
          <InteractiveFileExplorer />
        </div>
      </DocSubSection>
    </DocSection>
  )
}