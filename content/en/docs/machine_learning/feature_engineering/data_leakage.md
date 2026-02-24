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

{{< panel color="blue" title="Data Leakage" >}}
⭐️ Occurs when a model is trained using data that would not be available during real-world predictions, 
leading to **good** training performance, but **poor** real‑world 🌎 performance. <br>
It is essentially the model '**cheating**' by inadvertently accessing information about the target variable.

👉Any information from the **validation/test** set must NOT influence **training**, _directly_ or _indirectly_. <br>
❓So, how do we prevent this leakage of information or data leakage from training to validation or test set ? <br>
{{< /panel >}}

{{< panel color="orange" title="Train-Test Contamination" >}}
- ❌ **Wrong**: Applying preprocessing (like global StandardScaler, Mean_Imputation, Target_Encoding etc.) on the entire dataset before splitting.
- ✅ **Right**: Compute mean, variance, etc. only on the training data and use the same for validation and test data.

**Preventing Leakage in Cross-Validation**:
- ❌ **Wrong**: Perform preprocessing (e.g., scaling, normalization, missing value imputation) on the entire dataset before passing it to **cross_val_score**.
- ✅ **Right**: Use sklearn.pipeline.Pipeline; **Pipeline** ensures that the 'validation fold' remains unseen until the transformation is applied using the training fold's parameters.
{{< /panel >}}


{{< panel color="rust" title="Temporal Leakage" >}}
This happens in **Time Series** ⏰ data.
- ❌ **Wrong**: Use standard random CV; it allows the model to '**peek into the future**'.
- ✅ **Right**: Use **Time-Series Nested Cross-Validation** (Forward Chaining) instead of **random** shuffling.
{{< /panel >}}


{{< panel color="green" title="Target Leakage" >}}
- ❌ **Wrong**: Include features that are only available after the event we are trying to predict and are proxy for the target.
  - e.g. Including number_of_late_payments in a model to predict whether a person applying for a bank loan will default ?
- ✅ **Right**: Do not include such features during training.

**Group Leakage**:
- ❌ **Wrong**: If you have multiple rows that are **correlated** (same user).
  - For the same patient or user, you put some rows in Train and others in Test.
- ✅ **Right**: Use **GroupKFold** to ensure all data from a specific group stays together in one fold.
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