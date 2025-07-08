import type React from "react"

export const DocSection = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24">
    <h2 className="text-4xl font-light border-b border-border pb-4 mb-8">{title}</h2>
    <div className="space-y-6 text-base text-foregroundMuted leading-relaxed">{children}</div>
  </section>
)

export const DocSubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-12">
    <h3 className="text-2xl font-medium mb-6">{title}</h3>
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
