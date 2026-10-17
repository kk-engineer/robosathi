---
title: "Workflow Design Patterns"
description: "When code picks the next step: six workflow shapes, and where they live in real agents"
date: 2026-10-16
weight: 3
---

{{< playlist "" "Agentic AI | Full Course" >}}

{{< panel color="gold" title="Overview" id="overview" >}}
A surprising amount of what is marketed as "agentic AI" is, structurally, a **workflow**: a sequence of steps fixed in code, in which a language model does some of the work but never decides what happens next.
That is not a criticism. Workflows are predictable, testable and cheap, and most production systems should be mostly workflow.

These notes introduce the one distinction that organises this chapter and the next, **who decides the next step**, and then catalogue six workflow patterns.
For each we give a concrete example, when to use it, and the failure it invites. We finish by locating the patterns inside the course's two reference agents.

By the end of these notes you should be able to:
- tell a workflow from an agent by asking who chooses the next step;
- recognise and draw the six workflow patterns, and choose between them;
- name the characteristic failure of each pattern and the guard against it;
- read a real agent's graph and identify which parts are workflow and which are agentic.
{{< /panel >}}

{{< definition title="Who Decides the Next Step?" >}}
In every agentic system, something decides what happens after each step. There are only two candidates.

In a **workflow**, **code** decides. The path is written down before the run starts: you could print the graph in advance. A model may do work _inside_ a step (summarise this, classify that), but it never chooses which step comes next.
In an **agent**, the **model** decides. The path emerges at run time from the model's choices, so you cannot know in advance how many steps a run will take or in what order. That is the subject of [Agentic Design Patterns]({{<ref "/docs/agentic_ai/agentic_design_patterns" >}}).

| | **Workflow** | **Agent** |
|---|---|---|
| Who picks the next step | Code | The model |
| When the path is known | Before the run | Only at run time |
| Properties | Predictable, testable, cheap | Flexible, open-ended, harder to certify |

The choice between them follows directly from the [three questions]({{<ref "/docs/agentic_ai/levels_of_automation/#three_questions" >}}) of the previous notes. Low cardinality (the situations can be enumerated) points to a workflow.
High cardinality with a bounded blast radius is where it pays to let the model choose.

{{< keyidea >}}**Most production systems are mostly workflow. That is the design, not a compromise.**{{< /keyidea >}}

{{< /definition >}}

{{< panel color="orange" title="1 · Sequential Pipeline" id="sequential" >}}
The simplest and most common pattern: each step's output is the next step's input, in a fixed order.

```mermaid
graph LR
    A[Extract text] --> B[Translate] --> C[Summarise] --> D[Format brief]
```

{{< panel color="cyan" title="Example" >}}
A document-intake system receives a PDF in another language. A parser extracts the text, one model call translates it, another summarises it, and a template formats the brief.
The order never changes. Models work inside two of the four steps, but none of them chooses what comes next.
{{< /panel >}}

**When to use it.** When a task splits naturally into fixed stages, each simpler than the whole. Smaller steps are easier for a model to do well, and each link can be unit-tested and replayed on its own.

**What goes wrong.** Latency adds up across steps, and an early mistake flows downstream: a bad extraction produces a confident summary of nothing.
The guard is a cheap **validation between steps**. If extraction returned an empty page, stop there instead of paying for two model calls to translate and summarise it.
{{< /panel >}}

{{< panel color="green" title="2 · Conditional Branching" id="branching" >}}
Code inspects the input and picks **exactly one branch from a closed set**. This pattern is also called **routing**.

```mermaid
graph LR
    T[Classify ticket] --> B[Billing]
    T --> H[Technical]
    T --> G["General (fallback)"]
    B --> R[Reply]
    H --> R
    G --> R
```

{{< panel color="cyan" title="Example" >}}
A support ticket is classified, first by keyword rules and then by a small classifier, and routed to billing, technical support or a general queue. Anything the classifier is not confident about goes to the general queue rather than to a guess.
{{< /panel >}}

**When to use it.** When inputs fall into known classes that need genuinely different handling: different prompts, different tools, even different models (a small, cheap model for easy questions and a large one for hard ones).

**What goes wrong.** Every misroute is a silent failure, so the **misroute rate becomes your error budget**. Always keep a **fallback branch**, and watch its volume: when it grows, your classes need updating.
Note that a classifier may well be a model, but it is still a workflow: the classifier produces a _label_, and code maps the label to a branch.

[Read more about Binary Classification]({{<ref "/docs/machine_learning/supervised/logistic_regression/binary_classification_intro/" >}})
{{< /panel >}}

{{< panel color="orange" title="3 · Parallel Fan-out / Fan-in" id="fan_out" >}}
A **fixed** set of independent branches runs at the same time, and their results are joined.

```mermaid
graph LR
    C[Contract] --> L[Legal check]
    C --> F[Finance check]
    C --> S[Security check]
    L --> M[Merge report]
    F --> M
    S --> M
```

{{< panel color="cyan" title="Example" >}}
A contract goes to three reviewers at once (legal, finance and security), and a merge step combines their findings into one report. It is always the same three, so the branches are visible on the diagram.
{{< /panel >}}

**When to use it.** When the branches do not depend on each other's output and latency matters. Running them together cuts the latency to that of the **slowest** branch rather than the sum.

**What goes wrong.** The interesting design lives in the **join**. Does the report wait for all three branches, or the first? If the security check times out, do you publish a partial report with a flag, or fail the whole thing?
These questions must be answered explicitly. Parallel calls also hit provider rate limits sooner ([Resilience]({{<ref "/docs/agentic_ai/system_design_resilience" >}})).
{{< /panel >}}

{{< panel color="magenta" title="4 · Map-Reduce" id="map_reduce" >}}
The **same step over N items**, where N is known only at run time, followed by one aggregation.

```mermaid
graph LR
    S[Split into N] --> R1[Summarise review 1]
    S --> R2[Summarise review 2]
    S --> RN[Summarise review N]
    R1 --> C[Combine]
    R2 --> C
    RN --> C
```

{{< panel color="green" title="Example" >}}
Summarise every product review for a product, in parallel (the _map_), then combine the summaries into one report (the _reduce_). There might be 5 reviews today and 500 tomorrow.
{{< /panel >}}

This looks like fan-out, with one important difference: the number of branches is **not on the diagram**. It comes from the data at run time.

**What goes wrong.** Two things. First, **bound N and the concurrency**, or one large input becomes one large bill. Second, test the **reduce** step hardest: it is where contradictions between items get silently averaged away.
{{< /panel >}}

{{< panel color="orange" title="5 · Iterative Loop with a Fixed Cap" id="fixed_loop" >}}
Repeat a step until a check passes, **at most N times**, with the cap set in code.

```mermaid
graph LR
    G[Generate code] --> T{Run tests}
    T -->|"tests fail · at most 3 attempts"| G
    T -->|pass| D[Done]
    T -->|cap reached| H[Hand over to a person]
```

{{< panel color="cyan" title="Example" >}}
A model generates a function; the test suite runs; the failures are fed back; the model tries again, at most three times. On the third failure, the system escalates to a person **with the failing tests attached**, instead of looping forever.
{{< /panel >}}

**Why this is still a workflow.** The stopping rule is code: "_tests pass, or three attempts_". The model writes the code inside the step, but it does not decide whether to go round again. In the next chapter, it does.

**What goes wrong.** A loop without a cap is a runaway bill. Good loops also detect **no progress**: the same failure twice in a row is a reason to stop early. We formalise this as [loop control]({{<ref "/docs/agentic_ai/guardrails_loop_control_state/#loop_control" >}}).
{{< /panel >}}

{{< panel color="red" title="6 · Human-in-the-Loop" id="human_in_loop" >}}
The run **pauses, saves its state, and resumes** when a person decides. This is [level 5]({{<ref "/docs/agentic_ai/levels_of_automation/#sheridan_levels" >}}) of the automation scale, expressed as a workflow shape.

```mermaid
graph LR
    D[Draft email] --> M{Manager}
    M -->|approve| S[Send]
    M -->|reject with a note| R[Revise]
    R --> M
```

{{< panel color="green" title="Example" >}}
A model drafts a marketing email. A manager approves it, and it is sent, or rejects it with a note, and it is revised and comes back.
{{< /panel >}}

**When to use it.** Whenever an approval or an answer is needed before an action that matters.

**What goes wrong.** The pause must be **durable**: the approval may arrive in five minutes or five days, after a deployment or a crash, and the run must resume exactly where it stopped.
That requires checkpointing the run's state ([state management]({{<ref "/docs/agentic_ai/guardrails_loop_control_state/#durable_state" >}})).
And keep what reaches people small: if everything goes to a person, nobody really reviews anything ([the ironies of automation]({{<ref "/docs/agentic_ai/levels_of_automation/#ironies" >}})).
{{< /panel >}}

{{< panel color="navy" title="The Patterns in Real Agents" id="csa_patterns" >}}
Patterns are easiest to understand in a real system. Here is where each one appears in the course's two reference agents, and why it is there.

| Pattern | Where it appears | Why there |
|---|---|---|
| **Sequential** | The CSA's front door; the RA's scope → contract → run | Order is safety: personal data is redacted **before** any hosted screen sees the text |
| **Branching** | The CSA routes a plain status question to a database read; the RA routes `/research` vs a plain question | Cheap answers skip the model entirely |
| **Fan-out / fan-in** | The RA's research batches; deliberately **not** the CSA's screens | Speed in the RA; in the CSA, the privacy order wins over speed |
| **Map-reduce** | The RA's sub-questions, then synthesis | N depends on the question, and is capped |
| **Fixed-N loop** | The CSA's tool loop (≤ 5); the RA's research rounds | Cost and runaway protection |
| **Human-in-the-loop** | CSA refunds over $50; the RA's contract approval | Level 5, checkpointed |

**The support agent's graph.** Compiled with every feature on, the CSA has fifteen nodes, and only one of them lets the model choose the next step:

```mermaid
graph TB
    subgraph FD ["Front door: a sequential pipeline"]
    direction LR
    A[authenticate] --> CO[choose order] --> P1[PII filter] --> P2[injection screen]
    P2 --> P3[moderation] --> P4[deterministic checks] --> CI[classify intent]
    end
    subgraph Core ["The model-driven loop"]
    direction LR
    AC[assemble context] --> PF[prefetch] --> PR[propose]
    PR -->|tool call| EX[execute]
    EX -->|"loop ≤ 5"| PR
    end
    subgraph Close ["Finish"]
    direction LR
    FN[finalize] --> AW[await approval] --> E((END))
    RI[read intent] --> E
    end
    FD --> Core
    Core --> Close
```

Read it as four workflow patterns. The screens from PII filtering to context assembly form a **sequential pipeline**. _Classify intent_ **branches** a plain read away with no model call.
_Propose ⇄ execute_ is a **loop capped at 5** (whether to go round again is the model's choice, but the cap is code). And _await approval_ is a **human-in-the-loop** step, reached only when a refund was escalated.

**The research agent's graphs.** The RA has three graphs, and the router between them is code: a plain question goes to a direct-answer graph; a `/research` request goes to a scoping interview, which ends when you approve a frozen contract; the run graph then researches autonomously and returns a report.

```mermaid
graph LR
    M[message] -->|plain question| AG["answer graph"]
    M -->|/research| SG["scoping graph · an interview"]
    SG -->|"you approve · contract frozen"| RG["run graph · autonomous"]
    RG --> V[report with a verdict]
```

Inside the run graph, a model fills the steps but **code decides where the run goes next**: map-reduce over sub-questions, capped research and gap-filling loops, and a branch after an [independent audit]({{<ref "/docs/agentic_ai/llm_as_a_judge/#auditor" >}}) (gap fill, revise, or finalize).
A scope is a conversation; a run is a job.

{{< /panel >}}

{{< question >}}
An "AI agent" classifies a document, extracts its fields, validates them against a schema, and asks a human when validation fails. Is it an agent?
{{< /question >}}

{{< answer >}}
**No, it is a workflow**: a sequential pipeline with a branch and a human-in-the-loop step. Code picks every next step; models only work inside steps.
That is a good thing. It is predictable, testable and cheap, and it should only become agentic if some step genuinely needs the model to choose what to do next.
{{< /answer >}}

{{< panel color="magenta" title="Summary" id="recap" >}}
- A **workflow** is a system in which **code picks the next step**; models may still work inside steps. An **agent** lets the model pick.
- Six workflow shapes cover most needs: **pipeline, branching, fan-out, map-reduce, capped loop, human-in-the-loop**. Each has a characteristic failure and guard.
- The support agent is **mostly workflow**: one model-driven loop in fifteen nodes. The research agent branches, maps and stops by code; the model fills the steps.

💡 _Before you call it an agent, draw the graph. If code picks every next step, it's a workflow, and that's usually what you want._
{{< /panel >}}

{{< panel color="grey" title="Further Reading" id="further_reading" >}}
- Anthropic, [_Building Effective Agents_](https://www.anthropic.com/research/building-effective-agents) (2024): a catalogue of workflow patterns and when to prefer them over agents.
- LangGraph, [_Documentation_](https://langchain-ai.github.io/langgraph/): the graph runtime used for the reference agents, including branching, fan-out and checkpoints.
- LangGraph, [_Persistence_](https://langchain-ai.github.io/langgraph/concepts/persistence/): how durable pauses for human-in-the-loop steps work.
{{< /panel >}}

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/agentic_ai/levels_of_automation" >}}">Previous: Levels of Automation</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/agentic_ai/agentic_design_patterns" >}}">Next: Agentic Design Patterns</a></span>
</div>
<!-- nav-panel:end -->
