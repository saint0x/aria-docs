import type React from "react"
import { DocSection, DocSubSection, CodeBlock, InlineCode } from "@/components/docs/layout"
import { Comment, Plain } from "@/components/code"

const CommandDetail = ({ command, children }: { command: string; children: React.ReactNode }) => (
  <div className="mt-6">
    <h4 className="font-medium text-foreground">
      <InlineCode>{command}</InlineCode>
    </h4>
    <div className="relative pl-5 mt-2">
      <span className="absolute left-1 top-[0.6rem] h-1 w-1 rounded-full bg-foregroundMuted" />
      <p className="text-foregroundMuted text-sm leading-relaxed">{children}</p>
    </div>
  </div>
)

export default function AriaCompilerPage() {
  return (
    <DocSection id="cli-reference" title="Aria Compiler (ar-c)">
      <p className="text-lg">
        The Aria Compiler, better known as (<InlineCode>ar-c</InlineCode>), is your command-line interface for building, validating, and
        deploying your custom workflows to your Aria agent.
      </p>
      <DocSubSection title="Essential Commands">
        <CodeBlock lang="bash">
          <Comment># Create a new project</Comment>
          <br />
          <Plain>arc new my-app</Plain>
          <br />
          <br />
          <Comment># Validate project structure and syntax</Comment>
          <br />
          <Plain>arc check</Plain>
          <br />
          <br />
          <Comment># Build the .aria bundle</Comment>
          <br />
          <Plain>arc build</Plain>
          <br />
          <br />
          <Comment># Upload the bundle to the Aria Runtime</Comment>
          <br />
          <Plain>arc upload</Plain>
          <br />
          <br />
          <Comment># Execute a deployed agent</Comment>
          <br />
          <Plain>arc run AgentName "Your task description"</Plain>
          <br />
          <br />
          <Comment># View execution logs</Comment>
          <br />
          <Plain>arc logs [bundle-id]</Plain>
        </CodeBlock>
      </DocSubSection>

      <DocSubSection title="Command Breakdown">
        <CommandDetail command="arc new">
          Initializes a new Aria project with a specified name. This command scaffolds a complete directory structure,
          including `src/main.ts` for your code, an `aria.toml` configuration file, and other necessary boilerplate to
          get you started instantly.
        </CommandDetail>
        <CommandDetail command="arc check">
          Performs a static analysis of your project. It parses your TypeScript files to validate decorator syntax and
          ensure your implementations are correctly structured, all without performing a full build. It's a fast way to
          catch errors during development.
        </CommandDetail>
        <CommandDetail command="arc build">
          The core compilation step. This command reads your source code, parses the AST, extracts all decorator
          metadata and code implementations, and packages them into a single, portable `.aria` bundle. This bundle
          contains everything the Aria Runtime needs to execute your workflow.
        </CommandDetail>
        <CommandDetail command="arc upload">
          Takes your compiled `.aria` bundle and deploys it to the Aria Firmware. Once uploaded, your agents and tools
          are registered with the runtime and become available for execution via the `run` command or the macOS app.
        </CommandDetail>
        <CommandDetail command="arc run">
          Executes a specific agent or tool that has been deployed to the runtime. You provide the name of the component
          you wish to run, along with any required inputs (like a task description for an agent).
        </CommandDetail>
        <CommandDetail command="arc logs">
          Fetches and streams execution logs from the Aria Runtime for a given bundle or agent session. This is an
          essential tool for debugging the behavior of your agents and monitoring their task execution in real-time.
        </CommandDetail>
      </DocSubSection>
    </DocSection>
  )
}
