"use client"

import { useState } from "react"
import { CodeBlock } from "@/components/docs/layout"
import { Keyword, Variable, String, Comment, Func, Type, Plain } from "@/components/code"

const fileStructure = {
  name: "researchAgent",
  type: "folder",
  children: [
    {
      name: "src/",
      type: "folder",
      children: [
        {
          name: "main.ts",
          type: "file",
          content: (
            <CodeBlock>
              <Keyword>import</Keyword> <Plain> </Plain>
              <Type>aria</Type>
              <Plain> </Plain>
              <Keyword>from</Keyword> <String>"aria-sdk"</String>
              <Plain>;</Plain>
              <br />
              <br />
              <Func>@aria.agent</Func>
              <Plain>({`{`}</Plain>
              <br />
              {"  "}
              <Variable>description</Variable>
              <Plain>: </Plain>
              <String>"An agent that researches topics online."</String>
              <Plain>,</Plain>
              <br />
              {"  "}
              <Variable>tools</Variable>
              <Plain>: [</Plain>
              <String>"WebSearch"</String>
              <Plain>],</Plain>
              <br />
              <Plain>{`}`})</Plain>
              <br />
              <Keyword>export class</Keyword> <Type>ResearchAgent</Type>
              <Plain> {`{`}</Plain>
              <br />
              {"  "}
              <Keyword>async</Keyword> <Func>run</Func>
              <Plain>(task: </Plain>
              <Type>string</Type>
              <Plain>) {`{`}</Plain>
              <br />
              {"    "}
              <Comment>// The runtime will orchestrate the agent and tools.</Comment>
              <br />
              {"  "}
              <Plain>{`}`}</Plain>
              <br />
              <Plain>{`}`}</Plain>
            </CodeBlock>
          ),
        },
      ],
    },
    {
      name: "config/",
      type: "folder",
      children: [
        {
          name: "llm.xml",
          type: "file",
          content: (
            <CodeBlock lang="xml">
              <Plain>{`<?`}</Plain>
              <Type>xml</Type> <Variable>version</Variable>
              <Plain>=</Plain>
              <String>"1.0"</String> <Variable>encoding</Variable>
              <Plain>=</Plain>
              <String>"UTF-8"</String>
              <Plain>{`?>`}</Plain>
              <br />
              <Plain>{`<`}</Plain>
              <Type>aria-sdk-guide</Type>
              <Plain>{`>`}</Plain>
              <br />
              {"  "}
              <Plain>{`<`}</Plain>
              <Type>metadata</Type>
              <Plain>{`>`}</Plain>
              <br />
              {"    "}
              <Plain>{`<`}</Plain>
              <Type>title</Type>
              <Plain>{`>`}</Plain>
              Aria SDK - Complete LLM Integration Guide
              <Plain>{`</`}</Plain>
              <Type>title</Type>
              <Plain>{`>`}</Plain>
              <br />
              {"    "}
              <Plain>{`<`}</Plain>
              <Type>version</Type>
              <Plain>{`>`}</Plain>
              1.0.0
              <Plain>{`</`}</Plain>
              <Type>version</Type>
              <Plain>{`>`}</Plain>
              <br />
              {"    "}
              <Plain>{`<`}</Plain>
              <Type>purpose</Type>
              <Plain>{`>`}</Plain>
              Enable any LLM to instantly understand and build with the Aria SDK
              <Plain>{`</`}</Plain>
              <Type>purpose</Type>
              <Plain>{`>`}</Plain>
              <br />
              {"  "}
              <Plain>{`</`}</Plain>
              <Type>metadata</Type>
              <Plain>{`>`}</Plain>
              <br />
              {"  "}
              <Comment>{`<!-- ... and so on -->`}</Comment>
              <br />
              <Plain>{`</`}</Plain>
              <Type>aria-sdk-guide</Type>
              <Plain>{`>`}</Plain>
            </CodeBlock>
          ),
        },
      ],
    },
    {
      name: "package.json",
      type: "file",
      content: (
        <CodeBlock lang="json">
          <Plain>{`{`}</Plain>
          <br />
          {'  "'}
          <Variable>name</Variable>
          {'": "'}
          <String>researchAgent</String>
          {'",'}
          <br />
          {'  "'}
          <Variable>version</Variable>
          {'": "'}
          <String>1.0.0</String>
          {'",'}
          <br />
          {'  "'}
          <Variable>dependencies</Variable>
          {'": {'}
          <br />
          {'    "'}
          <Variable>aria-sdk</Variable>
          {'": "'}
          <String>latest</String>
          {'"'}
          <br />
          {"  }"}
          <br />
          <Plain>{`}`}</Plain>
        </CodeBlock>
      ),
    },
    {
      name: "aria.toml",
      type: "file",
      content: (
        <CodeBlock lang="toml">
          <Comment># researchAgent - Aria Project Configuration</Comment>
          <br />
          <Comment># Generated by arc new</Comment>
          <br />
          <br />
          <Plain>[</Plain>
          <Type>project</Type>
          <Plain>]</Plain>
          <br />
          <Variable>name</Variable>
          <Plain> = </Plain>
          <String>"researchAgent"</String>
          <br />
          <Variable>version</Variable>
          <Plain> = </Plain>
          <String>"0.1.0"</String>
          <br />
          <Variable>description</Variable>
          <Plain> = </Plain>
          <String>"An agent that researches topics online"</String>
          <br />
          <Variable>authors</Variable>
          <Plain> = [</Plain>
          <String>"Developer"</String>
          <Plain>]</Plain>
          <br />
          <br />
          <Plain>[</Plain>
          <Type>build</Type>
          <Plain>]</Plain>
          <br />
          <Variable>target</Variable>
          <Plain> = </Plain>
          <String>"typescript"</String>
          <br />
          <Variable>output</Variable>
          <Plain> = </Plain>
          <String>"dist/researchAgent.aria"</String>
          <br />
          <Variable>source_dirs</Variable>
          <Plain> = [</Plain>
          <String>"src"</String>
          <Plain>]</Plain>
          <br />
          <Variable>exclude</Variable>
          <Plain> = [</Plain>
          <String>"node_modules"</String>
          <Plain>, </Plain>
          <String>"dist"</String>
          <Plain>, </Plain>
          <String>"target"</String>
          <Plain>, </Plain>
          <String>".git"</String>
          <Plain>]</Plain>
          <br />
          <br />
          <Plain>[</Plain>
          <Type>runtime</Type>
          <Plain>]</Plain>
          <br />
          <Variable>bun_version</Variable>
          <Plain> = </Plain>
          <String>"latest"</String>
          <br />
          <br />
          <Comment># Decorator defaults for agents, tools, teams, and pipelines</Comment>
          <br />
          <Plain>[</Plain>
          <Type>defaults.agent</Type>
          <Plain>]</Plain>
          <br />
          <Comment># llm = {`{ provider = "openai", model = "gpt-4-turbo" }`}</Comment>
          <br />
          <Comment># temperature = 0.7</Comment>
          <br />
          <Comment># max_tokens = 2000</Comment>
        </CodeBlock>
      ),
    },
    {
      name: "tsconfig.json",
      type: "file",
      content: (
        <CodeBlock lang="json">
          <Plain>{`{`}</Plain>
          <br />
          {'  "'}
          <Variable>compilerOptions</Variable>
          {'": {'}
          <br />
          {'    "'}
          <Variable>target</Variable>
          {'": "'}
          <String>ESNext</String>
          {'",'}
          <br />
          {'    "'}
          <Variable>module</Variable>
          {'": "'}
          <String>ESNext</String>
          {'",'}
          <br />
          {'    "'}
          <Variable>strict</Variable>
          {'": "'}
          <Keyword>true</Keyword>
          {'",'}
          <br />
          {'    "'}
          <Variable>experimentalDecorators</Variable>
          {'": "'}
          <Keyword>true</Keyword>
          {'"'}
          <br />
          {"  }"}
          <br />
          <Plain>{`}`}</Plain>
        </CodeBlock>
      ),
    },
  ],
}

const FileTree = ({ item, isLast, prefix }: { item: any; isLast: boolean; prefix: string }) => {
  const [isOpen, setIsOpen] = useState(item.type === "folder" && prefix.length < 2)
  const isFolder = item.type === "folder"

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const connector = isLast ? "└─" : "├─"
  const newPrefix = prefix + (isLast ? "  " : "│ ")

  return (
    <div>
      <div className="flex items-center py-0.5 hover:bg-black/5 rounded-md px-1 cursor-pointer" onClick={handleToggle}>
        <span className="text-foregroundMuted">
          {prefix}
          {connector}
        </span>
        <span className="ml-2 flex items-center">
          {isFolder && <span className="mr-1 w-4 text-foregroundMuted">{isOpen ? "▾" : "▸"}</span>}
          {item.name}
        </span>
      </div>
      {isOpen && isFolder && (
        <div>
          {item.children.map((child: any, index: number) => (
            <FileTree key={child.name} item={child} isLast={index === item.children.length - 1} prefix={newPrefix} />
          ))}
        </div>
      )}
      {isOpen && !isFolder && item.content && (
        <div className="mt-2" style={{ paddingLeft: `${prefix.length + 4}ch` }}>
          {item.content}
        </div>
      )}
    </div>
  )
}

export const InteractiveFileExplorer = () => {
  return (
    <div className="bg-backgroundSubtle rounded-lg border border-border p-4 shadow-sm font-mono text-sm text-foreground">
      <div className="font-semibold mb-2">{fileStructure.name}</div>
      {fileStructure.children.map((item, index) => (
        <FileTree key={item.name} item={item} isLast={index === fileStructure.children.length - 1} prefix="" />
      ))}
    </div>
  )
}
