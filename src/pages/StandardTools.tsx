import { DocSection, DocSubSection, InlineCode } from "@/components/docs/layout"
import { StandardToolsExplorer } from "@/components/docs/standard-tools-explorer"

export function StandardTools() {
  return (
    <DocSection id="standard-tools" title="Standard Tools">
      <p className="text-lg">
        The Aria SDK comes with a suite of powerful, built-in tools that your agents can use out-of-the-box. Click on any tool below to see
          its purpose and an example.
      </p>
      <DocSubSection>
        <div className="mt-8">
          <StandardToolsExplorer />
        </div>
        <p className="mt-8 text-sm text-foregroundMuted">
          Note: All tools implement comprehensive error handling, execution time tracking, and return structured{" "}
          <InlineCode>ToolResult</InlineCode> objects with success status, results, errors, and metadata.
        </p>
      </DocSubSection>
    </DocSection>
  )
}