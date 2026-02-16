---
title: Data Leakage
description: Data Leakage
date: 2026-02-14
weight: 404
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxcg0tJ0CAqPKjDk6Ry_atqu" 
"Feature Engineering | All Videos" >}}

<br>

{{< panel color="blue" title="Data Leakage 💦" >}}
⭐️ Occurs when **information** ℹ️ NOT available at **inference** time is used during training 🏃‍♂️, 
leading to **good** training performance, but **poor** real‑world 🌎 performance.
{{< /panel >}}

{{< panel color="rust" title="Target Leakage" >}}
⭐️  **Including** features that are only **available** **after** the **event** we are trying to predict.
- e.g. Including _number_of_late_payments_ in a model to predict whether a person applying for a bank **loan** 💵 will **default** ?
{{< /panel >}}

{{< panel color="green" title="Temporal Leakage 💦" >}}
⭐️ Using **future** data to **predict** the **past**.
- **Fix**: Use **Time-Series** ⏰ Cross-Validation (**Walk-forward validation**) instead of **random** shuffling.
{{< /panel >}}

{{< panel color="navy" title="Train-Test Contamination" >}}
⭐️ Applying **preprocessing** (like global **StandardScaler** or **Mean_Imputation**) on the **entire** dataset before **splitting**.
- **Fix**: Compute mean, variance, etc. only on the training 🏃‍♂️data and use the same for validation and test data.
{{< /panel >}}

{{< video "https://youtu.be/6pP9meuusNw" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/feature_engineering/feature_engineering" >}}">Previous: Feature Engineering</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/feature_engineering/model_interpretability" >}}">Next: Model Interpretability</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```