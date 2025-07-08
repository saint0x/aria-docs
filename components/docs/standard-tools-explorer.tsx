"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CodeBlock, InlineCode } from "@/components/docs/layout"
import { Keyword, Variable, String, Func, Type, Plain } from "@/components/code"

const toolsData = [
  {
    name: "createPlanTool",
    description: "Generates structured execution plans for complex objectives.",
    agentName: "PlanningAgent",
    agentDescription: "An agent that creates detailed plans to achieve a goal.",
  },
  {
    name: "ponderTool",
    description: "Performs deep cognitive analysis and structured thinking.",
    agentName: "ThinkingAgent",
    agentDescription: "An agent that performs deep analysis on a topic.",
  },
  {
    name: "parseDocumentTool",
    description: "Intelligently analyzes documents and extracts information.",
    agentName: "DocumentAnalysisAgent",
    agentDescription: "An agent that parses and extracts information from documents.",
  },
  {
    name: "readFileTool",
    description: "Securely reads files and extracts metadata.",
    agentName: "FileReaderAgent",
    agentDescription: "An agent that reads content from the local file system.",
  },
  {
    name: "webSearchTool",
    description: "Performs web searches using the Serper API.",
    agentName: "WebSearchAgent",
    agentDescription: "An agent that can search the web for information.",
  },
  {
    name: "writeCodeTool",
    description: "Generates production-ready code from a prompt or spec.",
    agentName: "CodeWriterAgent",
    agentDescription: "An agent that writes code based on a specification.",
  },
  {
    name: "writeFileTool",
    description: "Securely writes content to files.",
    agentName: "FileWriterAgent",
    agentDescription: "An agent that writes content to the local file system.",
  },
]

export const StandardToolsExplorer = () => {
  return (
    <Accordion type="single" collapsible className="w-full border border-border rounded-lg shadow-sm">
      {toolsData.map((tool, index) => (
        <AccordionItem value={tool.name} key={tool.name} className={index === toolsData.length - 1 ? "border-b-0" : ""}>
          <AccordionTrigger className="text-base font-medium hover:no-underline px-4 py-3 hover:bg-backgroundSubtle/50">
            <InlineCode>{tool.name}</InlineCode>
          </AccordionTrigger>
          <AccordionContent className="pt-2 pb-4 px-4">
            <p className="text-foregroundMuted text-sm mb-4">{tool.description}</p>
            <CodeBlock>
              <Func>@agent</Func>
              <Plain>({`{`}</Plain>
              <br />
              {"  "}
              <Variable>description</Variable>
              <Plain>: </Plain>
              <String>"{tool.agentDescription}"</String>
              <Plain>,</Plain>
              <br />
              {"  "}
              <Variable>tools</Variable>
              <Plain>: [</Plain>
              <Type>{tool.name}</Type>
              <Plain>],</Plain>
              <br />
              <Plain>{`}`})</Plain>
              <br />
              <Keyword>export class</Keyword> <Type>{tool.agentName}</Type>
              <Plain> {`{...}`}</Plain>
            </CodeBlock>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
