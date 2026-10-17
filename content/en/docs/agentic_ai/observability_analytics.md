---
title: "Observability & Analytics"
description: "One trace id from a single turn to the whole fleet: logs, spans, facts, audit, OpenTelemetry, dashboards"
date: 2026-10-16
weight: 13
---

{{< playlist "" "Agentic AI | Full Course" >}}

{{< panel color="gold" title="Overview" id="overview" >}}
A non-deterministic agent cannot be reproduced; it can only be recorded. The same input may take a different path tomorrow, so if a turn was not recorded when it happened, it is gone.
**Observability** is the practice of recording enough, in the right shape, to answer three different questions: what happened in this turn, why it happened, and how the whole fleet is doing.

These notes build that practice around a single trace identifier, compare a homegrown design with the OpenTelemetry standard and its emerging conventions for generative AI, and describe analytics as a platform contract from which dashboards are generated.

By the end of these notes you should be able to:
- explain traces and spans, and why one identifier must join logs, facts, traces and audit records;
- compare a homegrown telemetry design with the OpenTelemetry GenAI conventions, and plan a migration;
- define fleet metrics once and generate dashboards from them;
- set rules for exporting traces safely to a third-party tool.
{{< /panel >}}

{{< panel color="gold" title="One Id, Three Views" id="cold_open" >}}
Run one customer turn and copy its **trace id**. Then:
1. Search the log files for that id: the whole turn appears, across every subsystem's file.
2. Open the same id in the tracing UI: the turn's run tree, with timings.
3. Open the dashboard: resolution rate, groundedness and fallback rate for the whole fleet.

**One id, three views**: what happened in this turn, why, and how the whole fleet is doing.
{{< /panel >}}

{{< definition title="Observability" >}}
📘 One agent, three questions, three tools:

| Question | Tool | What it shows |
|---|---|---|
| 🔎 **What happened in _this_ turn?** | A **trace** | Every model call, tool, check, retry and fallback, in order, with timings |
| 🧾 **Why did it happen?** | The **logs** | Full structured detail from every subsystem: the authoritative record |
| 📈 **How is the fleet doing?** | **Analytics** | Aggregates over thousands of turns: resolution rate, groundedness, p95 latency |

**Monitoring** answers questions you knew to ask in advance. **Observability** lets you ask _new_ questions after the fact, which, for a non-deterministic agent, is most of them.

💡 **You can't reproduce a non-deterministic turn. You can only record it.**
{{< /definition >}}

{{< panel color="blue" title="What a Trace Is" id="trace" >}}
A **trace** is one request's whole journey. It is made of **spans**, one per unit of work (an HTTP call, a database query, a model call), each with a start, an end, a **parent**, and attributes.
The **trace id** is shared by every span in it.

**W3C Trace Context** standardises how the id travels between services: the `traceparent` header carries a version, a **32-hex-character trace id**, a 16-hex span id, and flags.

📌 An e-commerce checkout touches the web tier, cart, pricing, payments, inventory and email. When checkout is slow, the trace shows which of six services spent the time.
**Without a shared id: six logs and a guess. With one: the slow span.**

**Agents need tracing more than ordinary services.** One customer turn can be:

```mermaid
graph LR
    S["Screens · PII, injection, safety"] --> C[Context assembly] --> I[Intent] --> M1[Model call] --> G[Gatekeeper] --> E[Execute tool] --> M2[Model call] --> H[Hallucination check] --> R["Repair call (maybe)"]
```

Some calls retry; some fall back to a backup model; and **the same input may take a different path tomorrow**.
So the bar is: **every hop recorded, under one id, redacted before it's written.**
{{< /panel >}}

{{< panel color="green" title="Our Trace Id, in Four Places" id="trace_id" >}}
**One turn is one trace**: the agent binds a fresh 32-hex id when a turn starts, in the W3C shape.
It is **ambient**: context variables hold the agent, session, channel and trace id, so every log line any subsystem writes during the turn leads with them.
It is bound at turn start and **reset at turn end**, so a turn's identity never leaks into the next one.

An id is only as useful as the number of places it joins. Ours appears in four:

| Place | How |
|---|---|
| **Log lines** | Every line of the turn, in every subsystem's file |
| **Facts** | The turn's row, and every model call, tool proposal and check row of the turn |
| **Tracing UI** | The turn's root run id **is** the trace id |
| **Audit** | Audit entries and PII-vault rows carry it: "_who revealed what, during which turn_" joins too |

**Four records, four jobs**, joined by one id:

| Record | Holds | Answers |
|---|---|---|
| **Logs** | Everything, per subsystem, local | _Why did it happen?_ |
| **Spans** | Trace tree · latency · cost | _What happened, in what order?_ |
| **Facts** | Five grains, append-only | _How often, how fast, how much?_ |
| **Audit** | Every decision and its reason | _Who decided, on what authority?_ |

**Logging rules**: structured, one rotating file per subsystem (llm, tools, gatekeeper, memory, context, security, hallucination check...), written independently of any UI, and **redacted** before anything is exported.
Decorators log a call/return pair around functions; failures are **always re-raised**.

💡 **A tracer that hides an exception hides the one event worth tracing.**
{{< /panel >}}

{{< panel color="orange" title="OpenTelemetry and the GenAI Conventions" id="otel" >}}
**OpenTelemetry (OTel)** is a CNCF standard for telemetry: three signals (**traces, metrics, logs**), one data model, vendor-neutral.

```mermaid
graph LR
    SDK["API + SDK · in your process"] -->|OTLP| COL["Collector · receive, process, export"] --> B["Any backend · Jaeger, Tempo, Datadog, Langfuse, LangSmith..."]
```

- **Semantic conventions**: agreed attribute names, so every backend knows `http.response.status_code` is the status code.
- **GenAI semantic conventions**: the same for model calls, tools and agents: `gen_ai.*` attributes, and span names like `chat {model}`, `execute_tool {tool}`, `invoke_agent {agent}`.
  Status: **Development**, still changing (e.g. `gen_ai.system` was renamed `gen_ai.provider.name`).

**Where a homegrown stack typically stands**, attribute by attribute:

| OTel GenAI | Ours | Status |
|---|---|---|
| Trace id (W3C) | 32-hex trace id | ✅ Aligned |
| `gen_ai.provider.name` · `gen_ai.request.model` | Provider and model per attempt | Renamed |
| `gen_ai.usage.input_tokens` / `output_tokens` | Prompt / completion (+ cached) tokens | Renamed |
| `gen_ai.response.finish_reasons` | Finish reason | Renamed |
| `gen_ai.conversation.id` · `gen_ai.agent.id` | Session id · agent id | Renamed |
| `gen_ai.operation.name` · span names | Roles (answerer, planner) and tool stages | Different |
| Guardrails, retries, cost | Check rows, attempt numbers, cost | **Beyond the spec** |

💡 **Mostly the same data under our names; the gap is the wire, not the content.**

**The real gaps**, named precisely:

| Gap | Consequence |
|---|---|
| No OTel SDK, no OTLP | A collector can't ingest the telemetry as-is |
| No propagation | A subprocess (e.g. an [MCP server]({{<ref "/docs/agentic_ai/model_context_protocol" >}}) over stdio) isn't in the turn's trace |
| Metrics in SQL | No `gen_ai.client.token.usage` / `operation.duration` histograms |
| Content capture | Full payload kept locally; exported redacted |
| Span semantics | No span kind, no OTel status codes |

**Why it's that way**: local-first in one process (nothing to propagate across, until MCP); **facts beat spans for analytics** (grains, append-only rows, NULL-versus-zero semantics); a moving standard (emitting early means migrating twice).
And because every fact is written at **one choke point**, adding OTel is one adapter, not instrumentation scattered through the code.

**The path to OTel**:
1. An exporter at the four choke points: turn → `invoke_agent` span; model chain → `chat {model}` per attempt; tool path → `execute_tool {tool}`; check recorder → a span or event per check.
2. Map fields to `gen_ai.*` attributes (one table, in config).
3. Keep the trace id (already W3C-shaped).
4. Propagate `traceparent` into the MCP subprocess, in each request's `_meta` (stdio has no headers).
5. OTLP to a Collector, exporting to whatever backend the team uses.
6. **Keep the facts**: they remain the analytics contract.

💡 **Keep the facts for analytics; add spans for interoperability.**
{{< /panel >}}

{{< panel color="magenta" title="Analytics Is a Platform Contract" id="analytics_contract" >}}
Every agent gets the common metrics **without writing analytics code**. Facts are recorded only at platform **choke points the agent can't bypass**:

```mermaid
graph LR
    A[Task API] --> F[("Facts")]
    B[Turn bracket] --> F
    C[Model chain] --> F
    D[Tool path] --> F
    E[Check recorder] --> F
```

- **Five grains**: task event, turn, model attempt, tool proposal, check.
- **Common keys** on every fact, stamped from the bound context: agent, session, task, turn, step, channel, time.
- **Append-only**; schema changes are additive; a column is never repurposed.
- **NULL ≠ 0**: NULL means _not observed_ (the feature was off); 0 means _observed, and none happened_. Every formula ignores NULLs.
- Tiers: **1** the platform catalogue · **2** an agent's own tables and metrics · **3** eval scores ([Evals]({{<ref "/docs/agentic_ai/evals" >}})).

💡 **A new agent appears on the dashboard by running turns.**

**Metrics, defined once** (name, SQL, direction, default SLO target), read by dashboards, the analytics MCP server and an ops agent alike:

| Metric | Formula (sketch) | Better |
|---|---|---|
| `resolution_rate` | Successful ÷ terminal tasks | Higher |
| `groundedness` | Claims supported ÷ checked ([E09]({{<ref "/docs/agentic_ai/hallucination_checks" >}})) | Higher |
| `hallucination_turn_rate` | Turns with an unsupported claim | Lower |
| `fallback_rate` | Attempts served by a backup model | Lower |
| `tool_call_validity` | Proposals that reached execution | Higher |
| `loop_abort_rate` | Turns that hit the step cap ([E06]({{<ref "/docs/agentic_ai/guardrails_loop_control_state/#loop_control" >}})) | Lower |
| `block_rate` | Screened messages blocked, by check ([E11]({{<ref "/docs/agentic_ai/agent_security_principles" >}})) | Context |
| `tokens_per_resolved_task` | Tokens of resolved ÷ resolved tasks | Lower |

💡 **A formula written twice drifts. Write it once, in the semantic layer.**
{{< /panel >}}

{{< panel color="cyan" title="Dashboards as Code: From a Turn to a Tile" id="dashboards" >}}
**Rill** is an open-source, BI-as-code dashboard tool built on DuckDB: models are SQL, metric views are YAML, dashboards are files, so a dashboard is **reviewable and generated**, like code.

```mermaid
graph LR
    T["Turn · facts at choke points"] --> DB[("Observability DuckDB · one writer")]
    DB --> PQ["Parquet export · atomic rename, columns checked"]
    PQ --> GEN["Generated Rill project · from the semantic layer"]
    GEN --> DASH[Dashboard]
    PQ --> MCP["Analytics MCP server"]
```

1. The agent appends facts to its own database (one writer, its own process).
2. **Export**: readers must not open a live database, so each curated view is rendered to Parquet, written to a temporary name and **renamed into place** (a reader never sees half a file). Columns are checked against the semantic layer on every export: an undocumented or vanished column fails the export, not a dashboard.
3. **Generate** the dashboard project from the semantic layer: one fleet page, plus a page per agent with its Tier-2 metrics.
4. **Serve**, and refresh by re-exporting.

💡 **Dashboards are generated, never hand-written: a hand-written measure is a second copy of a formula.**
{{< /panel >}}

{{< panel color="navy" title="LangSmith: One Run per Turn" id="langsmith" >}}
**LangSmith** is LangChain's hosted platform for tracing, debugging and evaluating LLM apps: a trace is a tree of runs (chain, llm, tool...), **threads** group a conversation's traces, **projects** group an app's.

How we use it: **one root run per turn, whose id _is_ the turn's trace id**. Everything the turn causes nests under it (graph nodes, model calls, tool executions).
One project per agent; thread = session. Settings: off by default; a **sample rate** (lower in production); graph steps sent as **what changed**, not the whole state again.

**Two rules for every export**:
1. 🔐 **Nothing unredacted leaves the machine**: input and output hooks run the [PII redactor]({{<ref "/docs/agentic_ai/agent_security_principles/#pii" >}}) over every string of every run. The local log keeps the full payload.
2. 🛟 **Export never fails a turn**: a missing key, a dead endpoint, a rejected batch is logged, and the turn carries on.

💡 **The local trace is the record; the tracing UI is a view of it.**

**Which tool, which question**:

| Question | Tool |
|---|---|
| Why did this one turn refund the wrong order? | Logs (search the trace id), then the run tree |
| Which model call was slow in this turn? | Run tree · spans |
| Has groundedness dropped since Tuesday's deploy? | The dashboard |
| Ask the data a question in English | An ops agent over the [analytics MCP server]({{<ref "/docs/agentic_ai/model_context_protocol" >}}) |
{{< /panel >}}

{{< question >}}
Average latency looks fine, yet users say the assistant is "sometimes painfully slow". Where do you look, in which order?
{{< /question >}}

{{< answer >}}
Start at the **fleet view**: p95/p99 latency, `fallback_rate` and `loop_abort_rate` over time, to see when and for whom it got slow.
Then pick a slow turn and follow its **trace id**: the run tree shows which span dominates (a retry storm, a fallback model, a long tool call, extra loop iterations), and the **logs** for the same id explain why.
{{< /answer >}}

{{< panel color="gold" title="Summary" id="recap" >}}
- 🆔 **One turn, one trace id**: W3C-shaped, on every log line, fact, run and audit row.
- 🧾 **Logs are the record**: per subsystem, structured, never swallowing a failure.
- 🔌 **OTel**: the same data under our names; the gaps are the wire and propagation.
- 📊 **Facts → Parquet → generated dashboards**; the tracing UI is a redacted view of a turn.

💡 _Record at choke points, and every view is one adapter away._
{{< /panel >}}

**Further reading**
- W3C, [_Trace Context_](https://www.w3.org/TR/trace-context/) Recommendation.
- OpenTelemetry, [_Traces and spans_](https://opentelemetry.io/docs/concepts/signals/traces/)
- OpenTelemetry, [_Semantic Conventions for Generative AI_](https://opentelemetry.io/docs/specs/semconv/gen-ai/)
- Rill Data, [_Rill_](https://www.rilldata.com/) BI-as-code dashboards on DuckDB.
- LangChain, [_LangSmith documentation_](https://docs.smith.langchain.com/)

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/agentic_ai/evals" >}}">Previous: Evals</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/agentic_ai/model_context_protocol" >}}">Next: Model Context Protocol</a></span>
</div>
<!-- nav-panel:end -->
