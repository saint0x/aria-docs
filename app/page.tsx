import type React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Keyword, Variable, String, Comment, Func, Type, Plain } from "@/components/code"
import { redirect } from "next/navigation"

export default function RootPage() {
  redirect("/getting-started")
}

const DocsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
      <Header />
      <div className="container mx-auto flex-1 flex flex-col lg:flex-row">
        <Sidebar />
        <main className="flex-1 w-full lg:w-3/4 lg:pl-12 py-10 animate-slide-up-fade-in">
          <DocsContent />
        </main>
      </div>
      <Footer />
    </div>
  )
}

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
      <Link href="#" className="flex items-center">
        <span className="font-medium text-lg">Aria Developer Docs</span>
      </Link>
      <nav className="hidden md:flex items-center gap-6 text-sm">
        <Link
          href="https://www.whoisaria.co"
          className="font-medium text-foregroundMuted hover:text-foreground transition-colors"
        >
          Blog
        </Link>
        <Link
          href="#syntax-reference"
          className="font-medium text-foregroundMuted hover:text-foreground transition-colors"
        >
          API Reference
        </Link>
        <Link href="#" className="font-medium text-foregroundMuted hover:text-foreground transition-colors">
          GitHub
        </Link>
      </nav>
      <Button className="hidden md:flex" size="lg">
        Download Aria for macO
      </Button>
    </div>
  </header>
)

const Sidebar = () => {
  const navItems = [
    { name: "Getting Started", href: "#getting-started" },
    { name: "Core Concepts", href: "#core-concepts" },
    { name: "Syntax Reference", href: "#syntax-reference" },
    { name: "Runtime Decorators", href: "#runtime-decorators" },
    { name: "Architecture", href: "#architecture" },
    { name: "CLI Reference", href: "#cli-reference" },
    { name: "Migration Guide", href: "#migration-guide" },
  ]

  return (
    <aside className="w-full lg:w-1/4 lg:sticky lg:top-16 h-full lg:h-[calc(100vh-4rem)] py-10 border-b lg:border-b-0 lg:border-r border-border">
      <nav className="space-y-1 pr-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center px-4 py-2.5 text-foregroundMuted hover:bg-backgroundSubtle hover:text-foreground rounded-md transition-colors font-medium"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

const DocsContent = () => (
  <div className="space-y-24">
    <DocSection id="getting-started" title="Getting Started">
      <p className="text-lg">
        The Aria SDK is a revolutionary framework for building autonomous AI agents, tools, teams, and pipelines. It
        provides a decorator-based TypeScript syntax that makes it incredibly easy to create sophisticated AI systems
        that can be compiled into portable <code>.aria</code> bundles and deployed to the Aria Runtime.
      </p>
      <DocSubSection title="Development Workflow">
        <ol className="list-decimal list-inside space-y-2">
          <li>
            <strong>Initialize Project:</strong> Use <code>arc new [project-name]</code> to scaffold a new project. This
            creates `src/main.ts`, `aria.toml`, and other necessary files.
          </li>
          <li>
            <strong>Build Components:</strong> Define your tools, agents, and pipelines in `src/main.ts` using our
            decorator syntax.
          </li>
          <li>
            <strong>Validate & Build:</strong> Run <code>arc check</code> to validate and <code>arc build</code> to
            compile your project into a portable <code>.aria</code> bundle.
          </li>
          <li>
            <strong>Deploy & Run:</strong> Upload your bundle to the Aria Runtime with <code>arc upload</code> and
            execute your agents.
          </li>
        </ol>
      </DocSubSection>
    </DocSection>

    <DocSection id="core-concepts" title="Core Concepts">
      <p className="text-lg">
        The Aria ecosystem is built on four core concepts that work together to create powerful AI systems.
      </p>
      <ul className="space-y-4">
        <li>
          <strong>Tools:</strong> Reusable, single-purpose functions that agents can invoke. They are the foundational
          building blocks of agent capabilities, like sending emails or searching the web.
        </li>
        <li>
          <strong>Agents:</strong> Autonomous AI entities that use tools to accomplish complex tasks. Agents understand
          natural language, reason about problems, and decide which tools to use.
        </li>
        <li>
          <strong>Teams:</strong> Groups of specialized agents that collaborate to handle multi-faceted objectives,
          using coordination strategies to work together effectively.
        </li>
        <li>
          <strong>Pipelines:</strong> Multi-step workflows that orchestrate agents and tools in a predefined sequence,
          ensuring reliable and repeatable execution of processes.
        </li>
      </ul>
    </DocSection>

    <DocSection id="syntax-reference" title="Syntax Reference">
      <p className="text-lg">
        Define your AI components with our intuitive, decorator-based syntax. All components are defined within a class
        in your <code>src/main.ts</code> file.
      </p>
      <DocSubSection title="Tools">
        <p>
          Tools are methods decorated with <code>@tool</code>. They are the actions your agents can perform.
        </p>
        <CodeBlock>
          <Func>@tool</Func>
          <Plain>({`{`}</Plain>
          <br />
          {"  "}
          <Variable>name</Variable>
          <Plain>: </Plain>
          <String>"getWeather"</String>
          <Plain>,</Plain>
          <br />
          {"  "}
          <Variable>description</Variable>
          <Plain>: </Plain>
          <String>"Get current weather for a specified location."</String>
          <Plain>,</Plain>
          <br />
          {"  "}
          <Variable>parameters</Variable>
          <Plain>: [{`{ `}</Plain>
          <Variable>name</Variable>
          <Plain>: </Plain>
          <String>"location"</String>
          <Plain>, </Plain>
          <Variable>type</Variable>
          <Plain>: </Plain>
          <String>"string"</String>
          <Plain>, </Plain>
          <Variable>required</Variable>
          <Plain>: </Plain>
          <Keyword>true</Keyword>
          <Plain>{` }`}]</Plain>
          <br />
          <Plain>{`}`})</Plain>
          <br />
          <Keyword>export class</Keyword> <Type>GetWeatherTool</Type>
          <Plain> {`{`}</Plain>
          <br />
          {"  "}
          <Keyword>async</Keyword> <Func>execute</Func>
          <Plain>(params: {`{ `}</Plain>
          <Variable>location</Variable>
          <Plain>: </Plain>
          <Type>string</Type>
          <Plain>
            {` }`}) {`{`}
          </Plain>
          <br />
          {"    "}
          <Comment>// Implementation...</Comment>
          <br />
          {"    "}
          <Keyword>return</Keyword>
          <Plain> {`{ `}</Plain>
          <Variable>success</Variable>
          <Plain>: </Plain>
          <Keyword>true</Keyword>
          <Plain>, </Plain>
          <Variable>result</Variable>
          <Plain>: {`{...}`}</Plain>
          <Plain>{` }`};</Plain>
          <br />
          {"  "}
          <Plain>{`}`}</Plain>
          <br />
          <Plain>{`}`}</Plain>
        </CodeBlock>
      </DocSubSection>
      <DocSubSection title="Agents">
        <p>
          Agents are methods decorated with <code>@agent</code>. They orchestrate tools to achieve goals.
        </p>
        <CodeBlock>
          <Func>@agent</Func>
          <Plain>({`{`}</Plain>
          <br />
          {"  "}
          <Variable>description</Variable>
          <Plain>: </Plain>
          <String>"An AI assistant that provides weather information."</String>
          <Plain>,</Plain>
          <br />
          {"  "}
          <Variable>tools</Variable>
          <Plain>: [</Plain>
          <String>"getWeather"</String>
          <Plain>],</Plain>
          <br />
          {"  "}
          <Variable>llm</Variable>
          <Plain>: {`{ `}</Plain>
          <Variable>provider</Variable>
          <Plain>: </Plain>
          <String>"openai"</String>
          <Plain>, </Plain>
          <Variable>model</Variable>
          <Plain>: </Plain>
          <String>"gpt-4o-mini"</String>
          <Plain>{` }`}</Plain>
          <br />
          <Plain>{`}`})</Plain>
          <br />
          <Keyword>export class</Keyword> <Type>WeatherAssistant</Type>
          <Plain> {`{`}</Plain>
          <br />
          {"  "}
          <Keyword>async</Keyword> <Func>run</Func>
          <Plain>(task: </Plain>
          <Type>string</Type>
          <Plain>) {`{`}</Plain>
          <br />
          {"    "}
          <Comment>// Agent logic is handled by the runtime.</Comment>
          <br />
          {"    "}
          <Keyword>return</Keyword>
          <Plain> {`{ `}</Plain>
          <Variable>success</Variable>
          <Plain>: </Plain>
          <Keyword>true</Keyword>
          <Plain>{` }`};</Plain>
          <br />
          {"  "}
          <Plain>{`}`}</Plain>
          <br />
          <Plain>{`}`}</Plain>
        </CodeBlock>
      </DocSubSection>
    </DocSection>

    <DocSection id="runtime-decorators" title="Runtime Decorators">
      <p className="text-lg">
        The Aria Runtime provides powerful system services through decorators, giving your agents access to logging,
        database, and more.
      </p>
      <CodeBlock>
        <Func>@agent</Func>
        <Plain>({`{ `}</Plain>
        <Comment>...</Comment>
        <Plain>{` }`})</Plain>
        <br />
        <Keyword>export class</Keyword> <Type>MyAgent</Type>
        <Plain> {`{`}</Plain>
        <br />
        {"  "}
        <Func>@log.info</Func>
        <Plain>()</Plain>
        <br />
        {"  "}
        <Func>logInfo</Func>
        <Plain>!: (message: </Plain>
        <Type>string</Type>
        <Plain>, data?: </Plain>
        <Type>any</Type>
        <Plain>) {"=>"} </Plain>
        <Type>void</Type>
        <Plain>;</Plain>
        <br />
        <br />
        {"  "}
        <Func>@db.set</Func>
        <Plain>(</Plain>
        <String>"user:preferences"</String>
        <Plain>)</Plain>
        <br />
        {"  "}
        <Func>savePrefs</Func>
        <Plain>!: (data: </Plain>
        <Type>any</Type>
        <Plain>) {"=>"} </Plain>
        <Type>Promise</Type>
        <Plain>&lt;</Plain>
        <Type>void</Type>
        <Plain>&gt;;</Plain>
        <br />
        <br />
        {"  "}
        <Keyword>async</Keyword> <Func>run</Func>
        <Plain>() {`{`}</Plain>
        <br />
        {"    "}
        <Keyword>this</Keyword>
        <Plain>.</Plain>
        <Func>logInfo</Func>
        <Plain>(</Plain>
        <String>"Agent execution started."</String>
        <Plain>);</Plain>
        <br />
        {"    "}
        <Keyword>await</Keyword> <Keyword>this</Keyword>
        <Plain>.</Plain>
        <Func>savePrefs</Func>
        <Plain>({`{ `}</Plain>
        <Variable>theme</Variable>
        <Plain>: </Plain>
        <String>"dark"</String>
        <Plain>{` }`});</Plain>
        <br />
        {"  "}
        <Plain>{`}`}</Plain>
        <br />
        <Plain>{`}`}</Plain>
      </CodeBlock>
    </DocSection>

    <DocSection id="architecture" title="Architecture">
      <p className="text-lg">
        The Aria ecosystem is composed of the Arc Compiler, which processes your TypeScript code, and the Aria Runtime,
        which executes the compiled bundles.
      </p>
      <DocSubSection title="Arc Compiler">
        <p>
          Arc (Aria Compiler) is a TypeScript AST parser that transforms your decorator-based code into executable{" "}
          <code>.aria</code> bundles. It extracts both decorator metadata and the complete implementation code, enabling
          seamless registration with the runtime.
        </p>
        <div className="my-8 flex justify-center">
          <div className="p-6 border border-border rounded-lg bg-backgroundSubtle">
            <MermaidDiagram />
          </div>
        </div>
      </DocSubSection>
    </DocSection>

    <DocSection id="cli-reference" title="CLI Reference">
      <p className="text-lg">
        The <code>arc</code> CLI is your primary tool for interacting with the Aria ecosystem.
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
    </DocSection>
  </div>
)

const DocSection = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
  <section id={id} className="scroll-mt-24">
    <h2 className="text-4xl font-light border-b border-border pb-4 mb-8">{title}</h2>
    <div className="space-y-6 text-base text-foregroundMuted leading-relaxed">{children}</div>
  </section>
)

const DocSubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-12">
    <h3 className="text-2xl font-medium mb-6">{title}</h3>
    <div className="space-y-4">{children}</div>
  </div>
)

const CodeBlock = ({ children, lang = "typescript" }: { children: React.ReactNode; lang?: string }) => (
  <div className="my-6">
    <pre className="bg-backgroundSubtle text-foreground rounded-lg p-6 border border-border overflow-x-auto text-sm shadow-sm">
      <code className={`language-${lang} font-mono`}>{children}</code>
    </pre>
  </div>
)

const MermaidDiagram = () => (
  <div className="flex justify-center items-center">
    <code className="mermaid">
      {`graph TD
    A["TypeScript Source (.ts)"] -- "arc build" --> B(Arc Compiler);
    B --> C{AST Parser};
    C --> D[Decorator Metadata Extraction];
    C --> E[Implementation Code Extraction];
    D & E --> F(Manifest & Code Bundler);
    F --> G[Portable .aria Bundle];
    G -- "arc upload" --> H(Aria Runtime);`}
    </code>
  </div>
)

const Footer = () => (
  <footer className="border-t border-border">
    <div className="container mx-auto px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-foregroundMuted">
      <p>&copy; {new Date().getFullYear()} Aria Compute Company. All rights reserved.</p>
      <div className="flex gap-6 mt-4 sm:mt-0">
        <Link href="#" className="hover:text-foreground transition-colors">
          Twitter
        </Link>
        <Link href="#" className="hover:text-foreground transition-colors">
          GitHub
        </Link>
        <Link href="#" className="hover:text-foreground transition-colors">
          Contact
        </Link>
      </div>
    </div>
  </footer>
)
