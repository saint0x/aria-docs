import type React from "react"
import { DocSection, InlineCode, CodeBlock } from "@/components/docs/layout"
import Link from "next/link"
import { Func, String, Comment } from "@/components/code"

const QuickLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="font-medium text-foreground hover:underline">
    {children}
  </Link>
)

export default function GettingStartedPage() {
  return (
    <DocSection id="getting-started" title="Getting Started">
      <p className="text-lg">
        The Aria SDK is our framework for building tools, agents, teams, and pipelines. It provides a TypeScript syntax
        to create agentic logic compiled into portable <InlineCode>.aria</InlineCode> bundles and deployed to the Aria
        Firmware, where it is instantly accessible from your macOS app.
      </p>

      <p className="mt-8">Get started by installing the Aria SDK:</p>
      <CodeBlock lang="bash">
        <Comment>// bun</Comment>
        <br />
        <Func>bun</Func> <Func>add</Func> <String>aria-sdk</String>
        <br />
        <br />
        <Comment>// npm</Comment>
        <br />
        <Func>npm</Func> <Func>install</Func> <String>aria-sdk</String>
      </CodeBlock>

      <div className="mt-12">
        <h3 className="text-2xl font-medium mb-6">Where to go next?</h3>
        <div className="space-y-3 pl-4 border-l-2 border-border">
          <p>
            To understand the fundamental building blocks of Aria →{" "}
            <QuickLink href="/core-concepts">Core Concepts</QuickLink>
          </p>
          <p>
            For a complete guide to our decorator-based syntax →{" "}
            <QuickLink href="/syntax-reference">Syntax Reference</QuickLink>
          </p>
          <p>
            To learn about runtime API's like db usage and tasks →{" "}
            <QuickLink href="/api-reference">API Reference</QuickLink>
          </p>
          <p>
            To explore the built-in tools available to your agents →{" "}
            <QuickLink href="/standard-tools">Standard Tools</QuickLink>
          </p>
          <p>
            To see an interactive example project → <QuickLink href="/examples">Examples</QuickLink>
          </p>
          <p>
            To learn about the command-line experience → <QuickLink href="/aria-compiler">Aria Compiler</QuickLink>
          </p>
          <p>
            To understand how the full distributed system works together →{" "}
            <QuickLink href="/architecture">Architecture</QuickLink>
          </p>
        </div>
      </div>
    </DocSection>
  )
}
