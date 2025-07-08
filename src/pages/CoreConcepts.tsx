import { DocSection, DocSubSection, CodeBlock, InlineCode } from "@/components/docs/layout"
import { Keyword, Variable, String, Comment, Func, Type, Plain } from "@/components/code"

const concepts = [
  {
    title: "Tools",
    description:
      "Reusable, single-purpose functions that agents can invoke. They are the foundational building blocks of agent capabilities.",
  },
  {
    title: "Agents",
    description: "Autonomous AI entities that use tools to accomplish complex tasks.",
  },
  {
    title: "Teams",
    description: "Groups of specialized agents that collaborate to handle multi-faceted objectives.",
  },
  {
    title: "Pipelines",
    description: "Multi-step workflows that orchestrate agents and tools in a predefined sequence.",
  },
]

const CoreConceptsList = () => (
  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
    {concepts.map((concept) => (
      <div
        key={concept.title}
        className="border border-border rounded-lg p-5 transition-all hover:bg-backgroundSubtle/50 hover:border-foreground/20"
      >
        <h4 className="font-medium text-base text-foreground">{concept.title}</h4>
        <p className="text-sm text-foregroundMuted mt-1.5 leading-relaxed">{concept.description}</p>
      </div>
    ))}
  </div>
)

export function CoreConcepts() {
  return (
    <DocSection id="core-concepts" title="Core Concepts">
      <p className="text-lg">
        The Aria ecosystem is built on four core concepts that work together to create powerful AI systems.
      </p>
      <CoreConceptsList />
      <DocSubSection title="Code vs. Configuration">
        <p>
          Aria is designed to separate core logic from behavioral configuration. This allows you to fine-tune your AI
          system's behavior without changing the underlying, tested code.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <strong>
              Code (<InlineCode>.ts</InlineCode>):
            </strong>{" "}
            This is where you define the required parameters and the core implementation (the "how"). This includes
            function signatures and the business logic of your tools.
          </li>
          <li>
            <strong>
              Configuration (<InlineCode>aria.toml</InlineCode>):
            </strong>{" "}
            This is where you manage behavioral aspects (the "what" and "when"). This includes optional settings like
            LLM models, temperature, timeouts, and system prompts.
          </li>
        </ul>
        <p className="mt-4">
          For example, a tool's required `location` parameter is defined in the code, but its `timeout` can be
          overridden in the configuration file.
        </p>
        <CodeBlock>
          <Comment># src/main.ts - The required `location` is in the code.</Comment>
          <br />
          <Func>@tool</Func>
          <Plain>({`{...}`})</Plain>
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
            {` }`}) {`{...}`}
          </Plain>
          <br />
          <Plain>{`}`}</Plain>
        </CodeBlock>
        <CodeBlock lang="toml">
          <Comment># aria.toml - Behavioral settings are configured here.</Comment>
          <br />
          <Plain>[tools.getWeather]</Plain>
          <br />
          <Variable>timeout</Variable>
          <Plain> = </Plain>
          <String>10000</String>
          <br />
          <Variable>cache_duration</Variable>
          <Plain> = </Plain>
          <String>300</String>
        </CodeBlock>
      </DocSubSection>
    </DocSection>
  )
}