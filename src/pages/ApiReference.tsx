import type React from "react"
import { DocSection, DocSubSection, CodeBlock, InlineCode } from "@/components/docs/layout"
import { Keyword, Variable, String, Comment, Func, Type, Plain } from "@/components/code"

const DecoratorSubSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-10">
    <h4 className="text-xl font-medium mb-4">{title}</h4>
    <div className="space-y-4">{children}</div>
  </div>
)

export function ApiReference() {
  return (
    <div className="space-y-16">
      <DocSection id="api-reference" title="API Reference">
        <p className="text-lg">
          This document provides the definitive reference for all special decorators (<InlineCode>@</InlineCode>) used
          in the Aria Framework. These decorators are the primary mechanism for declaring components, configuring their
          behavior, and interacting with the Aria Runtime's powerful systems like databases, asynchronous tasks, and
          memory.
        </p>
      </DocSection>
      <DocSection id="runtime-system-decorators" title="Runtime System Decorators">
        <p>
          These decorators provide access to the Aria Runtime's stateful and asynchronous systems from within your
          agents and tools.
        </p>

        <DocSubSection title="Database">
          <p>
            The <InlineCode>@db</InlineCode> decorators interact with the runtime's persistent key-value store, scoped
            to the current user and session. This is ideal for storing state, results, and user-specific data.
          </p>
          <DecoratorSubSection title="@db.get(key: string)">
            <p>
              Retrieves a value from the database. The decorator injects the value as a property on the class instance.
            </p>
            <CodeBlock>
              <Func>@agent</Func>
              <Plain>({`{...}`})</Plain>
              <br />
              <Keyword>export class</Keyword> <Type>DataProcessorAgent</Type>
              <Plain> {`{`}</Plain>
              <br />
              {"  "}
              <Func>@db.get</Func>
              <Plain>(</Plain>
              <String>"user:profile"</String>
              <Plain>)</Plain>
              <br />
              {"  "}
              <Variable>userProfile</Variable>
              <Plain>: </Plain>
              <Type>any</Type>
              <Plain>;</Plain>
              <br />
              <br />
              {"  "}
              <Keyword>async</Keyword> <Func>run</Func>
              <Plain>() {`{`}</Plain>
              <br />
              {"    "}
              <Keyword>if</Keyword> <Plain>(</Plain>
              <Keyword>this</Keyword>
              <Plain>.</Plain>
              <Variable>userProfile</Variable>
              <Plain>) {`{`}</Plain>
              <br />
              {"      "}
              <Type>console</Type>
              <Plain>.</Plain>
              <Func>log</Func>
              <Plain>(</Plain>
              <String>{"`Processing data for ${this.userProfile.name}`"}</String>
              <Plain>);</Plain>
              <br />
              {"    "}
              <Plain>{`}`}</Plain>
              <br />
              {"  "}
              <Plain>{`}`}</Plain>
              <br />
              <Plain>{`}`}</Plain>
            </CodeBlock>
          </DecoratorSubSection>
          <DecoratorSubSection title="@db.set(key: string)">
            <p>Returns a setter function that saves a value to the database under the given key.</p>
            <CodeBlock>
              <Func>@agent</Func>
              <Plain>({`{...}`})</Plain>
              <br />
              <Keyword>export class</Keyword> <Type>DataProcessorAgent</Type>
              <Plain> {`{`}</Plain>
              <br />
              {"  "}
              <Func>@db.set</Func>
              <Plain>(</Plain>
              <String>"processing:result"</String>
              <Plain>)</Plain>
              <br />
              {"  "}
              <Variable>saveResult</Variable>
              <Plain>: (result: </Plain>
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
              <Keyword>const</Keyword> <Variable>result</Variable>
              <Plain> = {`{ `}</Plain>
              <Variable>status</Variable>
              <Plain>: </Plain>
              <String>"completed"</String>
              <Plain>, </Plain>
              <Variable>timestamp</Variable>
              <Plain>: </Plain>
              <Type>Date</Type>
              <Plain>.</Plain>
              <Func>now</Func>
              <Plain>()</Plain>
              <Plain>{` }`};</Plain>
              <br />
              {"    "}
              <Keyword>await</Keyword> <Keyword>this</Keyword>
              <Plain>.</Plain>
              <Func>saveResult</Func>
              <Plain>(</Plain>
              <Variable>result</Variable>
              <Plain>);</Plain>
              <br />
              {"  "}
              <Plain>{`}`}</Plain>
              <br />
              <Plain>{`}`}</Plain>
            </CodeBlock>
          </DecoratorSubSection>
        </DocSubSection>

        <DocSubSection title="Memory">
          <p>
            The <InlineCode>@memory</InlineCode> decorators provide access to the agent's short-term, conversational
            memory. This is distinct from the long-term, persistent <InlineCode>@db</InlineCode> store and is optimized
            for fast, in-context data retrieval during a single execution session. [^4]
          </p>
          <DecoratorSubSection title="@memory.get(key: string)">
            <p>
              Retrieves a value from the agent's short-term memory. If the key doesn't exist, it returns{" "}
              <InlineCode>undefined</InlineCode>.
            </p>
            <CodeBlock>
              <Func>@agent</Func>
              <Plain>({`{...}`})</Plain>
              <br />
              <Keyword>export class</Keyword> <Type>ConversationAgent</Type>
              <Plain> {`{`}</Plain>
              <br />
              {"  "}
              <Func>@memory.get</Func>
              <Plain>(</Plain>
              <String>"last_user_message"</String>
              <Plain>)</Plain>
              <br />
              {"  "}
              <Variable>lastMessage</Variable>
              <Plain>?: </Plain>
              <Type>string</Type>
              <Plain>;</Plain>
              <br />
              <br />
              {"  "}
              <Keyword>async</Keyword> <Func>run</Func>
              <Plain>() {`{`}</Plain>
              <br />
              {"    "}
              <Keyword>if</Keyword> <Plain>(</Plain>
              <Keyword>this</Keyword>
              <Plain>.</Plain>
              <Variable>lastMessage</Variable>
              <Plain>) {`{`}</Plain>
              <br />
              {"      "}
              <Type>console</Type>
              <Plain>.</Plain>
              <Func>log</Func>
              <Plain>(</Plain>
              <String>{"`Recalling last message: ${this.lastMessage}`"}</String>
              <Plain>);</Plain>
              <br />
              {"    "}
              <Plain>{`}`}</Plain>
              <br />
              {"  "}
              <Plain>{`}`}</Plain>
              <br />
              <Plain>{`}`}</Plain>
            </CodeBlock>
          </DecoratorSubSection>
          <DecoratorSubSection title="@memory.set(key: string)">
            <p>
              Returns a setter function that saves a value to the agent's short-term memory for the duration of the
              session.
            </p>
            <CodeBlock>
              <Func>@agent</Func>
              <Plain>({`{...}`})</Plain>
              <br />
              <Keyword>export class</Keyword> <Type>ConversationAgent</Type>
              <Plain> {`{`}</Plain>
              <br />
              {"  "}
              <Func>@memory.set</Func>
              <Plain>(</Plain>
              <String>"last_user_message"</String>
              <Plain>)</Plain>
              <br />
              {"  "}
              <Variable>rememberMessage</Variable>
              <Plain>: (message: </Plain>
              <Type>string</Type>
              <Plain>) {"=>"} </Plain>
              <Type>Promise</Type>
              <Plain>&lt;</Plain>
              <Type>void</Type>
              <Plain>&gt;;</Plain>
              <br />
              <br />
              {"  "}
              <Keyword>async</Keyword> <Func>run</Func>
              <Plain>(currentMessage: </Plain>
              <Type>string</Type>
              <Plain>) {`{`}</Plain>
              <br />
              {"    "}
              <Comment>{"// ... process current message"}</Comment>
              <br />
              {"    "}
              <Keyword>await</Keyword> <Keyword>this</Keyword>
              <Plain>.</Plain>
              <Func>rememberMessage</Func>
              <Plain>(</Plain>
              <Variable>currentMessage</Variable>
              <Plain>);</Plain>
              <br />
              {"    "}
              <Type>console</Type>
              <Plain>.</Plain>
              <Func>log</Func>
              <Plain>(</Plain>
              <String>"Saved current message to memory."</String>
              <Plain>);</Plain>
              <br />
              {"  "}
              <Plain>{`}`}</Plain>
              <br />
              <Plain>{`}`}</Plain>
            </CodeBlock>
          </DecoratorSubSection>
        </DocSubSection>

        <DocSubSection title="Asynchronous Tasks">
          <p>
            The <InlineCode>@task</InlineCode> decorators manage long-running, asynchronous operations that can execute
            outside the main agent loop.
          </p>
          <DecoratorSubSection title="@task.launch()">
            <p>
              Returns a function to launch a new asynchronous task. It takes the task type and payload as arguments and
              returns a <InlineCode>task_id</InlineCode>.
            </p>
            <CodeBlock>
              <Func>@agent</Func>
              <Plain>({`{...}`})</Plain>
              <br />
              <Keyword>export class</Keyword> <Type>CodeRunnerAgent</Type>
              <Plain> {`{`}</Plain>
              <br />
              {"  "}
              <Func>@task.launch</Func>
              <Plain>()</Plain>
              <br />
              {"  "}
              <Variable>launchTask</Variable>
              <Plain>: (task: {`{ `}</Plain>
              <Variable>type</Variable>
              <Plain>: </Plain>
              <Type>string</Type>
              <Plain>, </Plain>
              <Variable>payload</Variable>
              <Plain>: </Plain>
              <Type>any</Type>
              <Plain>
                {` }`}) {"=>"}{" "}
              </Plain>
              <Type>Promise</Type>
              <Plain>&lt;</Plain>
              <Type>string</Type>
              <Plain>&gt;;</Plain>
              <br />
              <br />
              {"  "}
              <Keyword>async</Keyword> <Func>run</Func>
              <Plain>() {`{`}</Plain>
              <br />
              {"    "}
              <Keyword>const</Keyword> <Variable>taskId</Variable>
              <Plain> = </Plain>
              <Keyword>await</Keyword> <Keyword>this</Keyword>
              <Plain>.</Plain>
              <Func>launchTask</Func>
              <Plain>({`{`}</Plain>
              <br />
              {"      "}
              <Variable>type</Variable>
              <Plain>: </Plain>
              <String>"container:exec"</String>
              <Plain>,</Plain>
              <br />
              {"      "}
              <Variable>payload</Variable>
              <Plain>: {`{`}</Plain>
              <br />
              {"        "}
              <Variable>image</Variable>
              <Plain>: </Plain>
              <String>"python:3.9-slim"</String>
              <Plain>,</Plain>
              <br />
              {"        "}
              <Variable>command</Variable>
              <Plain>: [</Plain>
              <String>"python"</String>
              <Plain>, </Plain>
              <String>"-c"</String>
              <Plain>, </Plain>
              <String>"print('Hello from a container!')"</String>
              <Plain>],</Plain>
              <br />
              {"      "}
              <Plain>{`}`},</Plain>
              <br />
              {"    "}
              <Plain>{`}`});</Plain>
              <br />
              {"    "}
              <Type>console</Type>
              <Plain>.</Plain>
              <Func>log</Func>
              <Plain>(</Plain>
              <String>{"`Launched container task with ID: ${taskId}`"}</String>
              <Plain>);</Plain>
              <br />
              {"  "}
              <Plain>{`}`}</Plain>
              <br />
              <Plain>{`}`}</Plain>
            </CodeBlock>
          </DecoratorSubSection>
        </DocSubSection>

        <DocSubSection title="Structured Logging">
          <p>
            The <InlineCode>@log</InlineCode> decorators provide access to the runtime's structured logging system. Logs
            are automatically tagged with context like <InlineCode>user_id</InlineCode>,{" "}
            <InlineCode>session_id</InlineCode>, and <InlineCode>agent_name</InlineCode>.
          </p>
          <DecoratorSubSection title="@log.info()">
            <p>Returns a function to write an informational log message.</p>
            <CodeBlock>
              <Func>@agent</Func>
              <Plain>({`{...}`})</Plain>
              <br />
              <Keyword>export class</Keyword> <Type>MyAgent</Type>
              <Plain> {`{`}</Plain>
              <br />
              {"  "}
              <Func>@log.info</Func>
              <Plain>()</Plain>
              <br />
              {"  "}
              <Variable>logInfo</Variable>
              <Plain>: (message: </Plain>
              <Type>string</Type>
              <Plain>, data?: </Plain>
              <Type>any</Type>
              <Plain>) {"=>"} </Plain>
              <Type>void</Type>
              <Plain>;</Plain>
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
              <Plain>, {`{ `}</Plain>
              <Variable>step</Variable>
              <Plain>: </Plain>
              <String>1</String>
              <Plain>{` }`});</Plain>
              <br />
              {"  "}
              <Plain>{`}`}</Plain>
              <br />
              <Plain>{`}`}</Plain>
            </CodeBlock>
          </DecoratorSubSection>
        </DocSubSection>
      </DocSection>
    </div>
  )
}