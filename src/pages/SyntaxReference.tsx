import { DocSection, DocSubSection, CodeBlock, InlineCode } from "@/components/docs/layout"
import { Keyword, Variable, String, Func, Type, Plain } from "@/components/code"

export function SyntaxReference() {
  return (
    <DocSection id="syntax-reference" title="Syntax Reference">
      <p className="text-lg">
        Build your agentic workflow (however simple or complex) with our intuitive, decorator-based syntax. Your entry
        point is your <InlineCode>src/main.ts</InlineCode> file that comes scaffolded for you.
      </p>
      <DocSubSection title="Tools">
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
          <Plain>: [{`{...}`}]</Plain>
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
            {` }`}) {`{...}`}
          </Plain>
          <br />
          <Plain>{`}`}</Plain>
        </CodeBlock>
      </DocSubSection>
      <DocSubSection title="Agents">
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
          <Plain>]</Plain>
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
          <Plain>) {`{...}`}</Plain>
          <br />
          <Plain>{`}`}</Plain>
        </CodeBlock>
      </DocSubSection>
      <DocSubSection title="Teams">
        <CodeBlock>
          <Func>@team</Func>
          <Plain>({`{`}</Plain>
          <br />
          {"  "}
          <Variable>description</Variable>
          <Plain>: </Plain>
          <String>"A team that researches topics and creates summaries"</String>
          <Plain>,</Plain>
          <br />
          {"  "}
          <Variable>agents</Variable>
          <Plain>: [</Plain>
          <String>"ResearchAgent"</String>
          <Plain>, </Plain>
          <String>"SummaryAgent"</String>
          <Plain>],</Plain>
          <br />
          {"  "}
          <Variable>strategy</Variable>
          <Plain>: {`{`}</Plain>
          <br />
          {"    "}
          <Variable>name</Variable>
          <Plain>: </Plain>
          <String>"sequential"</String>
          <Plain>,</Plain>
          <br />
          {"    "}
          <Variable>description</Variable>
          <Plain>: </Plain>
          <String>"Research first, then summarize"</String>
          <br />
          {"  "}
          <Plain>{`}`}</Plain>
          <br />
          <Plain>{`}`})</Plain>
          <br />
          <Keyword>export class</Keyword> <Type>ResearchTeam</Type>
          <Plain> {`{`}</Plain>
          <br />
          {"  "}
          <Keyword>async</Keyword> <Func>coordinate</Func>
          <Plain>(task: </Plain>
          <Type>string</Type>
          <Plain>) {`{...}`}</Plain>
          <br />
          <Plain>{`}`}</Plain>
        </CodeBlock>
      </DocSubSection>
      <DocSubSection title="Pipelines">
        <CodeBlock>
          <Func>@pipeline</Func>
          <Plain>({`{`}</Plain>
          <br />
          {"  "}
          <Variable>description</Variable>
          <Plain>: </Plain>
          <String>"Analyze weather and send reports"</String>
          <Plain>,</Plain>
          <br />
          {"  "}
          <Variable>variables</Variable>
          <Plain>: {`{...}`},</Plain>
          <br />
          {"  "}
          <Variable>steps</Variable>
          <Plain>: [</Plain>
          <br />
          {"    "}
          <Plain>{`{`}</Plain>
          <br />
          {"      "}
          <Variable>id</Variable>
          <Plain>: </Plain>
          <String>"gather_weather"</String>
          <Plain>,</Plain>
          <br />
          {"      "}
          <Variable>type</Variable>
          <Plain>: </Plain>
          <String>"agent"</String>
          <Plain>, </Plain>
          <Variable>agent</Variable>
          <Plain>: </Plain>
          <String>"WeatherAssistant"</String>
          <Plain>, </Plain>
          <Variable>inputs</Variable>
          <Plain>: {`{...}`}</Plain>
          <br />
          {"    "}
          <Plain>{`}`},</Plain>
          <br />
          {"    "}
          <Plain>{`{`}</Plain>
          <br />
          {"      "}
          <Variable>id</Variable>
          <Plain>: </Plain>
          <String>"send_report"</String>
          <Plain>,</Plain>
          <br />
          {"      "}
          <Variable>type</Variable>
          <Plain>: </Plain>
          <String>"tool"</String>
          <Plain>, </Plain>
          <Variable>tool</Variable>
          <Plain>: </Plain>
          <String>"sendEmail"</String>
          <Plain>, </Plain>
          <Variable>dependencies</Variable>
          <Plain>: [</Plain>
          <String>"gather_weather"</String>
          <Plain>]</Plain>
          <br />
          {"    "}
          <Plain>{`}`}</Plain>
          <br />
          {"  "}
          <Plain>]</Plain>
          <br />
          <Plain>{`}`})</Plain>
          <br />
          <Keyword>export class</Keyword> <Type>WeatherReportPipeline</Type>
          <Plain> {`{...}`}</Plain>
        </CodeBlock>
      </DocSubSection>
    </DocSection>
  )
}