---
title: "Economics: Build vs Buy"
description: "You can rent intelligence, you can't rent accountability: build, adopt, buy or partner, per component, with the arithmetic"
date: 2026-10-16
weight: 16
math: true
---

{{< playlist "" "Agentic AI | Full Course" >}}

{{< panel color="gold" title="Overview" id="overview" >}}
This course built a gatekeeper, guardrails, memory governance, hallucination checks and an evaluation harness. Should a production team build all of that? Mostly not. Some of it, absolutely.
These notes give the tools to tell which: a per-component framing with four options (build, adopt, buy, partner), the arithmetic of ROI, payback, NPV, total cost of ownership and break-even volume, and the non-financial factors that often decide the matter.

By the end of these notes you should be able to:
- frame build-versus-buy per component rather than per agent;
- compute ROI, payback, NPV and a break-even volume, and interpret them;
- explain why the falling price of model capability changes what is worth building;
- recommend what to build, adopt and buy for an agent, and justify it.
{{< /panel >}}

{{< panel color="green" title="Point of View" id="cold_open" >}}
This course built a Gatekeeper, guardrails, memory governance, hallucination checks, an eval harness. Should _you_ build all of that?
**Mostly, no. Some of it, absolutely.** These notes are about telling which, with numbers.

{{< /panel >}}

{{< definition title="Four Options, Per Component" >}}
"_Should we build or buy an AI agent?_" is the **wrong grain**. An agent is a dozen components, and the right answer differs per component. And there are **four** options, not two:

| Option | Means | The catch |
|---|---|---|
| **Build** | Write and own it | You own every upgrade and every on-call page |
| **Adopt** | Open source | **Free to license, not free to own**: integration, upgrades, maintenance |
| **Buy** | A vendor's product or API | You pay for someone else's scale and roadmap |
| **Partner** | A vendor builds with you, on your data | Shared control |

**Our own stack, by source**:

| Source | Components |
|---|---|
| **Built** | Gatekeeper and business rules · loop governor · guardrail orchestration · grounding checks · context pipeline · memory governance · analytics contract · eval oracle + golden set |
| **Adopted** | LangGraph · MCP SDK · DuckDB · Presidio · NLI and intent models · DeepEval · Promptfoo · Rill · Pydantic · sqlglot |
| **Bought** | Hosted foundation models · hosted safety classifiers · a tracing UI (optional) |

{{< keyidea >}}**Decide per component, never per "agent".** We built the control plane and the data; we adopted or bought the runtime.{{< /keyidea >}}
{{< /definition >}}

{{< panel color="gold" title="What the Data Says (and Doesn't)" id="data" >}}
One data point the industry argues about: MIT NANDA's _The GenAI Divide: State of AI in Business 2025_.

- **~95%** of companies' generative-AI pilots in its dataset showed little or no measurable P&L impact.
- Purchases from specialised vendors and partnerships succeeded about **67%** of the time; **internal builds about a third as often**.
- More than half of budgets went to sales and marketing tools, while the biggest ROI was in **back-office** automation.

It is survey- and interview-based, and its definition of "_success_" has been debated. But the direction matches practice.

{{< keyidea >}}**Building should be a deliberate choice, not the default.**{{< /keyidea >}}
{{< /panel >}}

{{< panel color="green" title="ROI, Payback, NPV" id="roi" >}}
The three numbers a CFO will ask for, over a stated horizon (e.g. 3 years):

\[\text{ROI} = \frac{\text{benefit} - \text{cost}}{\text{cost}} \qquad \text{Payback} = \frac{\text{one-off cost}}{\text{monthly net benefit}} \qquad \text{NPV} = \sum_t \frac{\text{benefit}_t - \text{cost}_t}{(1 + r)^t}\]

- **ROI**: how much you get back per dollar spent.
- **Payback**: months until it has paid for itself.
- **NPV**: money later is worth less than money now; discounting at rate \(r\) says by how much.

**Where an agent's benefit comes from**:
- ‍**Labour**: deflected tickets, shorter handle time.
- ⏩ **Cycle time**: faster refunds, faster research.
- **Revenue**: conversion, retention.
- **Risk avoided**: losses prevented.

{{< keyidea >}}**Risk avoided is real money, and the benefit most often left out.**{{< /keyidea >}}
{{< /panel >}}

{{< panel color="orange" title="Total Cost of Ownership" id="tco" >}}
**TCO** is everything something costs over its life, not the sticker price:

| | **Build** | **Buy** |
|---|---|---|
| Up front | Engineers × months | Integration · onboarding |
| Running | Infrastructure · on-call · upgrades | Seats or usage, **growing with volume** |
| Hidden | Evals, red-teaming, model regressions | Workarounds for gaps · data egress · price rises |
| Leaving | Nothing to leave | **Exit cost**: data, rewrites |
| Always | **Opportunity cost**: what those engineers didn't build | **Vendor risk** |

**Costs specific to agents**, each an instance of an earlier chapter:

| Cost | Why it recurs |
|---|---|
| **Model churn** | Every model change can regress behaviour, so you need [evals]({{<ref "/docs/agentic_ai/evals" >}}) to change models safely |
| **Guardrail upkeep** | Attack phrasing evolves ([Agent Security]({{<ref "/docs/agentic_ai/agent_security_principles" >}})) |
| **Policy drift** | Rules and golden labels must follow policy changes |
| **Trace volume** | Per-trace fees grow with traffic ([Observability]({{<ref "/docs/agentic_ai/observability_analytics/#langsmith" >}})) |
| **Human review** | Escalations need people ([Levels of Automation]({{<ref "/docs/agentic_ai/levels_of_automation/#ironies" >}})) |

{{< keyidea >}}**An agent shifts work to review and maintenance; it rarely deletes it.**{{< /keyidea >}}
{{< /panel >}}

{{< panel color="magenta" title="Break-Even Volume" id="break_even" >}}
The one formula that settles most cost arguments. **Build** has a high fixed cost (a team) and a low variable cost (tokens); **buy** has a low fixed cost and a high variable cost (a per-resolution fee):

\[C_{\text{build}} = F_b + v_b Q \qquad C_{\text{buy}} = F_v + v_v Q \qquad\Rightarrow\qquad Q^* = \frac{F_b - F_v}{v_v - v_b}\]

**Below \(Q^*\), buy is cheaper; above it, build is.**

{{< panel color="green" title="Example" >}}
_Illustrative_: build at $48k/month fixed + $0.125 per resolution; buy at $15k/month + $1.00 per resolution:
{{< /panel >}}

\[Q^* = \frac{48{,}000 - 15{,}000}{1.00 - 0.125} \approx 37{,}700 \text{ resolutions/month} \approx 94\text{k tickets at a 40\% resolution rate}\]

{{< keyidea >}}**Know your Q**, now and in two years.{{< /keyidea >}}

**Plan for the price curve.** The cost of a given level of model capability has been falling roughly **10× per year** (a16z, _LLMflation_, 2024):
- **Don't build** what the curve will commoditise, e.g. a custom-trained or [fine-tuned]({{<ref "/docs/natural_language_processing/llm/#sft" >}}) model to save tokens: it competes with a price that falls 10× a year.
- **Do build** what the curve doesn't touch: **rules, data, evals, authority**. Their value _rises_ as tokens get cheaper, because cheaper tokens mean more agent traffic to govern.
- Keep switching cheap: models and judges behind configuration, so you can ride the curve.

{{< /panel >}}

{{< panel color="orange" title="Eight Factors Beyond Price" id="factors" >}}
| Factor | The question to ask |
|---|---|
| **Differentiation** | Does it make us better than competitors, or is it plumbing? |
| **Liability · control** | If it's wrong, who pays, and can we explain the decision to a regulator? |
| **Data sensitivity** | May this data leave our boundary at all? |
| **Time-to-value** | What does a six-month build cost in delayed benefit? |
| ‍**Talent** | Can we hire and keep the people to run it? |
| **Volume** | Where are we relative to \(Q^*\), now and later? |
| **Rate of change** | Is the field moving faster than we can keep up? |
| **Exit cost** | If the vendor triples its price, what does leaving cost? |

**Differentiation × maturity** sorts most components:

| | **Low differentiation for us** | **High differentiation for us** |
|---|---|---|
| **Mature market** | **Buy / adopt** (a database, a BI tool, a safety classifier) | **Buy the core, build the edge** (a bought model; your prompts, skills, evals around it) |
| **Immature market** | **Adopt open source, stay thin**, and wait for the market | **Build** (your authority rules, your grounding rules) |

{{< keyidea >}}**Build only where you're different and nobody sells it well.**{{< /keyidea >}}
{{< /panel >}}

{{< panel color="magenta" title="What to Build: The Control Plane and the Data" id="what_to_build" >}}
**1 · The authority layer** ([Gatekeeper]({{<ref "/docs/agentic_ai/what_is_an_ai_agent/#gatekeeper" >}}), business rules, mandates, limits).
The liability is yours, and no vendor knows your refund policy, limits or escalation paths. The economics:

\[\text{expected loss} = P(\text{wrong action}) \times \text{cost per wrong action} \times \text{volume}\]

{{< panel color="cyan" title="Example" >}}
_Illustrative_: 0.1% × $80 × 1,000,000 refunds/year ≈ **$80,000/year** in direct loss, before chargebacks, regulators or the press.
A deterministic Gatekeeper is a few engineer-weeks to build and near-zero marginal cost per call.
{{< /panel >}}
{{< keyidea >}}**You can rent intelligence. You can't rent accountability.**{{< /keyidea >}}

**2 · Your evaluation data.** Adopt the frameworks (DeepEval, Promptfoo); **build the data**: golden cases labelled from your policy, oracle rules, attacks against your tools. Nobody can sell you that.
A core eval run costs minutes and a few dollars; one bad model upgrade that refunds the wrong order for a day can cost more than a year of runs.
{{< keyidea >}}**Without evals you can't switch to the cheaper model safely.**{{< /keyidea >}}

**3 · Domain checks.**

| Check | Generic API | Ours |
|---|---|---|
| Refund-state claims | Doesn't know the state machine | [Direct record check]({{<ref "/docs/agentic_ai/hallucination_checks/#direct_check" >}}) · ~0 per call |
| Prose grounding | A hosted call per reply | Local NLI · ~0 per call |
| Jailbreak · safety | A maintained classifier | **Bought** |

{{< keyidea >}}**Build checks that need your knowledge; buy ones that need a dataset.**{{< /keyidea >}}

**4 · Facts and adapters.** The [analytics contract]({{<ref "/docs/agentic_ai/observability_analytics/#analytics_contract" >}}) is cheap to build, near-free to run and vendor-neutral (sample the vendor's trace view; keep the full record yourself).
**Thin adapters** around every bought service (model chain, judge client, guard chain) make switching a configuration change, not a rewrite.
{{< keyidea >}}**An adapter buys you a cheap exit: it keeps every "buy" reversible.**{{< /keyidea >}}
{{< /panel >}}

{{< panel color="red" title="What to Buy or Adopt" id="what_to_buy" >}}
**Models and inference: buy capability.** Training a frontier model is orders of magnitude beyond an agent team's budget, and prices keep falling. Self-hosting open weights has its own break-even:

\[\text{self-host pays when}\quad \frac{\text{GPU \$/hour}}{\text{tokens served/hour}} < \text{API \$/token}\quad \text{at real, sustained utilisation}\]

An idle GPU still bills. Self-host only for **utilisation**, **data residency**, or a **missing feature** (e.g. [constrained decoding]({{<ref "/docs/agentic_ai/guardrails_loop_control_state/#validate_constrain" >}})).
Small local models (intent classifiers, NLI, summarisers) are the exception worth running yourself: tiny, CPU-only, zero marginal cost, called every turn.

**Adopt open-source plumbing**: a graph runtime with checkpoints, a protocol SDK, an analytics engine, NER, validation, a SQL parser, eval runners. Zero licence cost; you pay in integration and upgrades.
**Wrap it where it touches the domain** (a durability runner around the checkpointer, a governed source around the MCP SDK), so an upgrade or swap stays local.

**Buy specialised classifiers and trace UIs**: a safety classifier's value is an adversarial dataset that keeps up with new attacks; building that means labelling and retraining forever.
Keep deterministic rules underneath and [fail closed]({{<ref "/docs/agentic_ai/agent_security_principles/#moderation" >}}). A trace UI pays when debugging hours are real; sample it.

{{< keyidea >}}**Buy what needs a dataset you'd have to maintain forever.**{{< /keyidea >}}

**When buying pays**:

| Trigger | Because |
|---|---|
| \(Q < Q^*\) | At low volume, their variable cost beats your fixed cost |
| Time-to-value | Live in weeks vs quarters to build |
| Non-differentiating | Customers never see plumbing |
| Their scale | Shared R&D: datasets, training |
| Certifications | SOC 2, ISO 27001, HIPAA: costly to earn alone |
| Talent gap | You can't staff it well |

Whatever you buy, **negotiate the exit**: data export, price caps, an adapter on your side.

[Read more about Supervised Fine-Tuning (SFT)]({{<ref "/docs/natural_language_processing/llm/#sft" >}})  
[Read more about Parameter-Efficient Fine-Tuning (PEFT)]({{<ref "/docs/natural_language_processing/llm/#peft" >}})  
[Read more about Large Language Models]({{<ref "/docs/natural_language_processing/llm/" >}})
{{< /panel >}}

{{< panel color="grey" title="A Worked Example: A Support Agent" id="worked_example" >}}
Every number is **illustrative**; the method is the point. Plug in your own.

**Inputs**: 50,000 tickets/month; the agent fully resolves 40% → **20,000 resolutions**; each saves $5 of human handling → **$100,000/month** benefit.

| | **Build** | **Buy** |
|---|---|---|
| One-off | $360k (4 engineers × 6 months × $15k) | $60k (2 engineers × 2 months) |
| Team · infra | $48k/month (3 engineers + infra) | $15k/month (1 engineer) |
| Per resolution | $0.125 (tokens, guards) | $1.00 (vendor fee) |
| **Monthly cost @ 50k tickets** | 48k + 0.125 × 20k = **$50.5k** | 15k + 1.00 × 20k = **$35k** |
| **Payback** | 360 ÷ (100 − 50.5) ≈ **7.3 months** | 60 ÷ (100 − 35) ≈ **< 1 month** |
| **3-year ROI** | (3.6M − 2.18M) ÷ 2.18M ≈ **65%** | (3.6M − 1.32M) ÷ 1.32M ≈ **173%** |

At this volume, **buy wins on money**. Now change one input, volume:

| Tickets/month | Build | Buy | Winner |
|---|---|---|---|
| 50k | $50.5k | $35k | Buy |
| 100k | $53k | $55k | Roughly even |
| 200k | $58k | $95k | **Build**, by $37k every month |

The crossover is the break-even from earlier, about 94k tickets a month.

{{< keyidea >}}**The money answer moves with volume; the control answer doesn't.** The authority rules, the evals and the facts are yours to build **either way**, even when you buy the agent.{{< /keyidea >}}
{{< /panel >}}

{{< panel color="cyan" title="The Recommendation" id="recommendation" >}}
This course built most things because it is a **teaching platform**: you can't explain a Gatekeeper you didn't write. That's a legitimate reason here, and not one a product team has. For a production team:

| | |
|---|---|
| **Build** | The **control plane and the data**: authority, domain checks, the analytics contract, golden sets, attacks, policies |
| **Adopt** | Open-source plumbing, **wrapped at the domain edge** |
| **Buy** | Models, safety classifiers, trace UIs, **behind adapters**, with the exit negotiated |
| **Revisit** | At every order-of-magnitude change in volume or price |

{{< keyidea >}}**Build what makes you accountable and different; rent the rest.**{{< /keyidea >}}
{{< /panel >}}

{{< question >}}
A team wants to fine-tune its own model to save inference cost on a support agent handling 30k tickets a month. What would you ask before agreeing?
{{< /question >}}

{{< answer >}}
- **Where are they relative to \(Q^*\)?** At 30k tickets the fixed cost of a team and GPUs may never pay back.
- **The price curve**: a saving that competes with prices falling ~10× a year evaporates fast.
- **Utilisation**: will self-hosted GPUs run at sustained high utilisation, or bill while idle?
- **Is it differentiating?** Probably not: the model is commodity. The money is better spent on what the curve doesn't touch (authority rules, domain checks, eval data) and on an adapter that keeps switching to a cheaper hosted model a config change.
{{< /answer >}}

{{< panel color="magenta" title="Summary" id="recap" >}}
- **Decide per component**: build, adopt, buy or partner.
- **Know the arithmetic**: ROI, payback, NPV, TCO, and break-even \(Q^*\).
- **Build the control plane and the data**: their value rises as tokens get cheaper.
- **Buy the commodity**, behind adapters, with the exit negotiated.

_You can rent intelligence. You can't rent accountability._
{{< /panel >}}

{{< panel color="grey" title="Further Reading" id="further_reading" >}}
- MIT NANDA, [_The GenAI Divide: State of AI in Business 2025_](https://www.artificialintelligence-news.com/wp-content/uploads/2025/08/ai_report_2025.pdf) (2025), preliminary and survey-based.
- Fortune, [_MIT report: 95% of generative AI pilots at companies are failing_](https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/) (18 Aug 2025).
- Appenzeller (a16z), [_Welcome to LLMflation: LLM inference cost is going down fast_](https://a16z.com/llmflation-llm-inference-cost/) (Nov 2024).
{{< /panel >}}

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/agentic_ai/system_design_resilience" >}}">Previous: System Design: Resilience</a></span>
<span></span>
</div>
<!-- nav-panel:end -->
