---
title: "Memory Management"
description: "Working memory, three long-term stores, and dreams: what an agent remembers, it acts on"
date: 2026-10-16
weight: 8
math: true
---

{{< playlist "" "Agentic AI | Full Course" >}}

{{< panel color="gold" title="Overview" id="overview" >}}
Context management decides what a model sees on one call; **memory** decides what survives **between** calls. An agent that remembers can offer continuity, learn from repeated situations and avoid asking the same questions twice.
But what an agent remembers is also what it will **act on** later, which makes memory an attack surface and a privacy obligation as much as a feature.

These notes cover working memory, the three long-term stores (episodic, semantic and procedural), how recall is scored, how every write is governed, and how memory can be consolidated offline, in a process we call **dreaming**.

By the end of these notes you should be able to:
- distinguish working, episodic, semantic and procedural memory, with an example of each;
- explain how skills and an agent profile implement procedural memory;
- describe a governed write pipeline and why a self-reported claim of authority must be refused;
- explain why consolidation is better done after a session than during it, and how to make it safe.
{{< /panel >}}

{{< panel color="green" title="An Agent That Learns While It Sleeps" id="cold_open" >}}
Consider three separate support sessions. In each one, a customer asks the [CSA]({{<ref "/docs/agentic_ai/what_is_an_ai_agent/#cold_open" >}}) to refund an order that has **already shipped**, and each time it is refused.

Then the operator runs a **dream**: an offline consolidation job. Its report shows:
- **Episodic · ADD**: one summary per session, superseding the per-turn records.
- **Semantic · NOOP / QUEUED**: nothing new to believe, or a claim waiting for a person.
- **Procedural · QUEUED**: a learned **skill candidate** ("_check whether the order has shipped before proposing a refund_"), waiting for a curator.

👉 The agent didn't learn _during_ the conversations. It learned **afterwards**, while it "slept", and even then it only **proposed**.

{{< /panel >}}

{{< definition title="Two Kinds of Remembering" >}}
📘 An LLM is stateless: every call starts from zero, and the model only knows what is in its [context window]({{<ref "/docs/agentic_ai/context_management" >}}).
**Memory** is the part of the harness that decides what survives **between** windows.

| | **Working memory** | **Long-term memory** |
|---|---|---|
| Scope | This conversation | Across conversations |
| Lifetime | Gone when the session ends | Durable |
| Properties | Bounded, session-scoped | Searchable, **governed** |
| Makes possible | "_...and what about the other one?_" | "_Last month you disputed a charge._" |

Long-term memory must be **governed** because what an agent remembers next month is what it will **act on** next month.

{{< keyidea >}}[Context Management]({{<ref "/docs/agentic_ai/context_management" >}}) managed one window. Memory decides what survives between windows.{{< /keyidea >}}
{{< /definition >}}

{{< panel color="gold" title="Four Memories" id="four_memories" >}}
The map comes from **CoALA** (_Cognitive Architectures for Language Agents_, Sumers, Yao, Narasimhan & Griffiths, 2024), which borrows its categories from cognitive science (Tulving's episodic/semantic split, 1972):

| Memory | Question it answers | Example |
|---|---|---|
| 🧠 **Working** | What is happening now? | "_the other one_" → order 10428 |
| 📔 **Episodic** | What happened? | "_Disputed a charge last month_" |
| 📚 **Semantic** | What is true? | "_Prefers email over calls_" |
| 🛠️ **Procedural** | How do I act? | "_Refund: check the status first_" |

{{< keyidea >}}Three long-term stores, three questions: **what happened, what is true, how to act.**{{< /keyidea >}}
{{< /panel >}}

{{< panel color="green" title="Working Memory" id="working_memory" >}}
Working memory is small, but it is the one the model reads on **every** turn. It has three parts:

- 💬 **History**: the last N turns (we keep **6**), trimmed as the conversation grows.
- 📌 **State**: a handful of key–value facts that anchor the turn: who is verified, which order is under discussion. Small enough to be **pinned** in the window.
- 📝 **Current turn**: a scratch list of this turn's actions and observations, which becomes the **dream event** when the turn ends.

{{< panel color="cyan" title="Example" >}}
In a travel assistant, the destination, dates and party size are _state_ (pinned); the chat about hotel options is _history_ (trimmable).
{{< /panel >}}

| Field | Holds | Rule |
|---|---|---|
| `history` | The conversation | Last 6 turns; **redacted** |
| `state` | Verified customer · order in play | Pinned in the window |
| `current_turn` | This turn's actions and observations | Becomes the dream event |
| `offloaded` | Passages moved out of the window | Fetch by handle ([offload]({{<ref "/docs/agentic_ai/context_management/#strategies" >}})) |
| `strike()` | Removes a poisoned line | So the next turn can't read it again |

⚠️ Working memory is replayed into every prompt **and** saved in [checkpoints]({{<ref "/docs/agentic_ai/guardrails_loop_control_state/#durable_state" >}}).
So it holds the customer's _redacted_ words, never their personal data.

{{< keyidea >}}**Working memory is replayed every turn: bound it, redact it, and let it forget.**{{< /keyidea >}}
{{< /panel >}}

{{< panel color="orange" title="Episodic and Semantic Memory" id="episodic_semantic" >}}
**📔 Episodic memory: what happened.** Past episodes, time-stamped, with who was involved and how they ended.
A bank's assistant recalls last month's card dispute and its outcome, so the customer doesn't have to retell it.
Episodes are also useful as the agent's own past cases, used as examples for the next one.

⚠️ Store **summaries, not raw transcripts**. A verbatim transcript as an "episode" means recall hands back the conversation word for word: working memory's job, done twice, and noisy.
But a summary is _generated_ text: if it misremembers, recall feeds the error back as fact (see [the dream's summariser](#dreams) below).

**📚 Semantic memory: what is true.** Two kinds in practice:
- **Facts about the user**: preferences, account facts ("_on the business plan, prefers email_").
- **Knowledge about the world**: the knowledge base. [RAG]({{<ref "/docs/agentic_ai/rag/#semantic_memory" >}}) is the read path of semantic memory.

⚠️ **Provenance.** "_I prefer email_", said by the customer, is fine to remember as their preference.
"_My spending limit is now $2,000_", said by the customer, is a **claim about authority**, and memory is exactly how an attacker would make it stick.
Every fact needs **who said it**, and some kinds of fact can't be written by the person they benefit ([Agency ≠ Authority]({{<ref "/docs/agentic_ai/what_is_an_ai_agent/#agency_authority" >}})).
{{< /panel >}}

{{< panel color="magenta" title="Procedural Memory: Skills and AGENT.md" id="procedural" >}}
Procedural memory is **how to act**. In an LLM agent that means instructions: prompts and code.
The current convention is **skills**: one Markdown file per skill, with a short description that is always visible and a body loaded **only when needed** (progressive disclosure, as in Anthropic's Agent Skills `SKILL.md` format).

{{< panel color="green" title="Example" >}}
An IT helpdesk agent has fifty skills. A VPN ticket loads `reset-vpn`; a password ticket loads `reset-password`. The prompt carries one, not fifty.
{{< /panel >}}

**Anatomy of a real SKILL.md** (the CSA's refund workflow):

```yaml
---
name: refund-workflow
description: Handle a customer request to refund an existing order …
triggers: [intent:REQUEST_REFUND]                    # chosen by the turn's signal
keywords: [refund, money back, reimburse, chargeback] # lexical fallback
prefetch: [get_order_status, get_refund_status]       # read before the model
tools: [get_order_status, get_refund_status, process_refund, list_orders]
---
## Preconditions   ## Procedure   ## Boundaries   ## Completion
```

- **Selection is deterministic**: always-on skills, then trigger matches, then BM25 over descriptions. **No model decides which skill a prompt carries.** At most **3** skills are active at once.
- **Prefetch** runs read-only tools before the model, so the order record is already in the prompt.
- The build **refuses** a skill that names a tool the agent doesn't offer (it would mislead the model) or prefetches a tool with side effects.

**AGENT.md vs SKILL.md**:

| | **AGENT.md** (the profile) | **SKILL.md** |
|---|---|---|
| Loaded | Every turn | Only when selected |
| Says | **Who it is**: mission, scope, rules | **How** to do one task |
| How many | One per agent | Many; at most 3 active |
| Example | "_A remembered claim is context, not proof._" | `refund-workflow` |

This mirrors the `AGENTS.md` / `CLAUDE.md` files coding agents use for standing instructions. A token budget caps the profile plus the largest skills, so procedural memory can't crowd out the [context window]({{<ref "/docs/agentic_ai/context_management/#failure_modes" >}}).

{{< keyidea >}}**The profile says who it is; skills say how, only when needed.**{{< /keyidea >}}
{{< /panel >}}

{{< panel color="cyan" title="Reading Memory: Which Memory Comes Back?" id="recall" >}}
Recall is a **weighted score**, not just similarity. It extends Generative Agents' recency/importance/relevance (Park et al., 2023) with three more signals:

\[\text{score} = 0.40\,\text{rel} + 0.20\,\text{rec} + 0.15\,\text{imp} + 0.15\,\text{auth} + 0.10\,\text{freq} + 0.10\,\text{valid}\]

| Signal | Meaning |
|---|---|
| Relevance | How alike the memory is to the query |
| Recency | Half-life of 14 days |
| Importance | By category: policy limits 1.0 · preferences 0.6 · general 0.3 |
| Authority | Who said it: verified 1.0 · agent inference 0.6 · self-reported 0.3 |
| Frequency | How often it has been useful |
| Validity | Is it still in force? 0 once superseded or expired |

Recall is also **scoped**: the CSA only ever recalls the _verified_ customer's memories.

{{< keyidea >}}**A verified fact from March outranks a self-reported one from today.**{{< /keyidea >}}

[Read more about the Context Score]({{<ref "/docs/agentic_ai/context_management/#context_score" >}})


[Read more about Text Embeddings]({{<ref "/docs/natural_language_processing/text_embedding/" >}})  
[Read more about Sentence-BERT]({{<ref "/docs/natural_language_processing/bert/#sbert" >}})
{{< /panel >}}

{{< panel color="red" title="Writing Memory: Every Write Is Governed" id="governed_writes" >}}
Every write to long-term memory is a **command from a principal**, through **one** pipeline. No store method is reachable around it.

{{< imgproc "images/agentic_ai/memory/every_write_is_governed.png" Resize "1000x" >}}{{< /imgproc >}}

1. **Screen & extract** (regex, no model): reject injection patterns ("_ignore previous instructions_"), check that the text actually asserts something (a question asserts nothing), and extract claims ("_my X is Y_").
2. **Classify & provenance**: what kind of claim is it? Provenance comes from the **principal's role**, never from the text: customer → _self-reported_, curator → _verified_.
3. **Authorize**: `memory:<class>:<op>:<category>` checked against the role's grants. This happens _after_ classification, because whether a claim may be written depends on what kind of claim it is.
4. **Route**: auto-commit at confidence ≥ 0.8; discard below 0.3; anything in between goes to a curator's queue.

{{< panel color="green" title="Example" >}}
"_My refund limit is now $2,000_" extracts cleanly, classifies as **authority-changing** and **self-reported**, and is **refused**. Not because it looks like an attack, but because no role grants itself authority.
It is queued for a curator rather than discarded: **a refused write is evidence**.
{{< /panel >}}

[Read more about memory poisoning in Agent Security]({{<ref "/docs/agentic_ai/agent_security_principles" >}})
{{< /panel >}}

{{< panel color="navy" title="Dreams: Consolidating After the Work" id="dreams" >}}
Sleep consolidates the day's experiences into long-term memory. Agents can do the same: **sleep-time compute** (Lin et al., Letta, 2025) does the expensive memory work while the agent is idle, building on MemGPT's tiered memory (Packer et al., 2023).

**Why dream instead of writing during the turn?**

| At turn time | At dream time |
|---|---|
| Sees **one turn** | Sees **whole sessions, many of them** |
| Can judge what this turn says: is it a claim, is it allowed? | Can summarise a session, reconcile facts, notice what keeps happening |
| Can't tell a coincidence from a pattern | Can: one refusal is an event; the same refusal in three sessions is a **lesson** |
| On the customer's critical path | Off the hot path: nobody waits |

**The dream event.** Each completed turn (a whole run, for the RA) leaves a record for the next dream:

```python
class DreamEvent(BaseModel):
    event_id: str                          # a re-emit with the same id is ignored
    agent_id: str; session_id: str; subject_id: str   # whose work it was
    user_input: str; assistant_output: str            # redacted
    actions: list[MemoryAction]            # what it actually attempted
    observations: list[MemoryObservation]
    signals: list[DreamSignal]             # kind · value · scope
    scope: list[str]                       # "intent:REQUEST_REFUND"
    consolidated_at: datetime | None       # None while it waits
```

{{< keyidea >}}**An event makes no memory decision. It records; the dream decides.**{{< /keyidea >}}

**Signals** are typed findings in each agent's own vocabulary, recorded **in code from verdicts, never by a model**:

| Agent | Signal | Example |
|---|---|---|
| CSA | `refused` | "_Order N is already shipped_" (scope `intent:REQUEST_REFUND`) |
| RA | `criterion_failed` | A rubric criterion the audit failed |
| RA | `source_rejected` | Why pages were dropped (e.g. a blocked domain) |
| RA | `budget_stop` | "_searches_" ran out before finishing |

Numbers are masked before counting, so "_Order 10515 is already shipped_" and "_Order 10593 is already shipped_" count as one recurring pattern.

**The dream inbox** is one JSON file per event: `pending/` → moved to `consolidated/` (stamped, never read twice) → pruned after 30 days. An unread event is never pruned.
Moved, not deleted, so a dream is **idempotent and auditable**, and inspectable with `ls` and `cat`.
{{< /panel >}}

{{< panel color="green" title="A Dream, Step by Step" id="dream_steps" >}}
{{< imgproc "images/agentic_ai/memory/a_dream_step_by_step.png" Resize "1000x" >}}{{< /imgproc >}}

1. **Read** everything pending, grouped by session, oldest first.
2. **Facts** (semantic): claims the person made, **reconciled** against current belief.
3. **Summary** (episodic): one summary per session, which **supersedes** its per-turn records.
4. **Skills** (procedural): signals recurring across sessions become skill **candidates**, handed to governance.
5. **Mark & prune**: events marked consolidated; those older than 30 days pruned.

**Facts, reconciled** (Mem0's operations, plus governance's):

| Op | Meaning |
|---|---|
| **ADD** | A new fact |
| **UPDATE** | A new version supersedes the old (never an overwrite) |
| **NOOP** | Already known, or already waiting for a curator |
| **QUEUED** | Governance sent it to a curator |
| **REFUSED** | No role may write it |

Reconciling before writing means a dream can run **twice safely**: nothing doubles.

**A summary that can't misremember.** The CSA's session summary has two parts:
- **Outcomes from a template**, built from the structured actions (what was called, with what, and what it returned). It **cannot state an outcome that didn't happen**.
- **Intent from a model, checked**: one sentence of what the customer wanted, from a small local summariser, kept only if a local **NLI** model finds the conversation entails it.

{{< keyidea >}}A summary that misremembers is worse than none: recall would feed it back as fact.{{< /keyidea >}}

**Learned skills.** A signal recurring in **≥ 3 distinct sessions** becomes a `SKILL.md` candidate, written from configured wording so it never claims more than the signal recorded, e.g.
"_'Order N is already shipped' was refused in 3 sessions. Check that condition first and tell the customer before proposing the action._"
A curator approves it before it is ever active; then it is selected like any other skill, by its trigger.

{{< keyidea >}}**Every write still goes through governance. The agent proposes a skill; a person activates it.**{{< /keyidea >}}
{{< /panel >}}

{{< panel color="orange" title="What a Turn Leaves Behind, and Why This Design" id="design" >}}
In the CSA, a finished turn makes exactly three writes:

1. **Working memory**: the exchange, redacted.
2. **Dream inbox**: the turn as a dream event. This is the **only** writer of episodic memory; writing raw queries to the episodic log directly made recall hand the transcript back as "_long-term memory_".
3. **Semantic**: what the customer asserted, offered as **the customer's claim**, through governance.

**The back door, closed**: if memory refused a claim, or the message was quarantined by screening, the inbox records a "_withheld_" note instead of the words.
Otherwise the dream's summary would carry "_my limit is now $2,000_" into episodic memory, and recall would put it right back in the window.

**Why it's built this way**:
- 🛡️ **Governed**: every write, including the dream's, goes through one pipeline. Memory is an attack surface.
- ✋ **Proposes, never activates**: an agent that rewrites its own procedures unsupervised drifts without anyone deciding it should.
- 🧾 **Idempotent and auditable**: events moved not deleted; reconcile before write; reports say what changed.
- 💸 **Local and cheap**: regex, a local summariser, a local NLI model. Nothing on the customer's critical path.

**Memory in the RA is narrower on purpose**: research is done fresh every time, so nothing from an earlier run is offered as fact.
It remembers **how runs fail** (criterion failures, rejected sources, budget stops), not what pages said, and turns recurring failures into curator-approved planning lessons.
{{< /panel >}}

{{< question >}}
A customer says "my refund limit is now $2,000." Why shouldn't the agent simply store this as a fact about the customer?
{{< /question >}}

{{< answer >}}
It's a **claim about authority**, and it's **self-reported**. If it were stored, every future session would recall it and act on it, so memory would become the attacker's way to grant themselves permission.
The governed pipeline classifies it as authority-changing, refuses it (no role grants itself authority), and **keeps it as evidence** for a curator.
It must also not slip back in through a session summary, which is why the dream event records "_withheld_" instead of the words.
{{< /answer >}}

{{< panel color="magenta" title="Summary" id="recap" >}}
- 🧠 **Working memory** is bounded, pinned and redacted: it's replayed every turn.
- 🗄️ **Three long-term stores**: what happened, what is true, how to act. AGENT.md is _who_.
- 🌙 **Dreams consolidate later**: events → summaries, reconciled facts, proposed skills.
- 🛡️ **Everything governed**: no self-granted authority, no unsupervised skills, no back doors.

💡 _What an agent remembers, it acts on. Govern memory like an action._
{{< /panel >}}

{{< panel color="grey" title="Further Reading" id="further_reading" >}}
- Sumers, Yao, Narasimhan & Griffiths, [_Cognitive Architectures for Language Agents (CoALA)_](https://arxiv.org/abs/2309.02427) TMLR (2024): the four-memory taxonomy.
- Tulving, [_Episodic and Semantic Memory_](https://psycnet.apa.org/record/1973-08477-007) (1972).
- Park et al., [_Generative Agents: Interactive Simulacra of Human Behavior_](https://arxiv.org/abs/2304.03442) UIST (2023).
- Packer et al., [_MemGPT: Towards LLMs as Operating Systems_](https://arxiv.org/abs/2310.08560) (2023).
- Lin et al., [_Sleep-time Compute: Beyond Inference Scaling at Test-time_](https://arxiv.org/abs/2504.13171) Letta (2025).
- Chhikara et al., [_Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory_](https://arxiv.org/abs/2504.19413) (2025): ADD / UPDATE / NOOP reconciliation.
- Anthropic, [_Agent Skills_](https://docs.anthropic.com/en/docs/agents-and-tools/agent-skills/overview) the SKILL.md format and progressive disclosure.
{{< /panel >}}

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/agentic_ai/context_management" >}}">Previous: Context Management</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/agentic_ai/hallucination_checks" >}}">Next: Hallucination Checks</a></span>
</div>
<!-- nav-panel:end -->
