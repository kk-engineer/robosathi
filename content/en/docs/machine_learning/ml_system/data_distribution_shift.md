---
title: Data Distribution Shift
description: Data Distribution Shift
date: 2026-02-14
weight: 501
math: true
---

{{< playlist " https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfu7gGVAzvIvolLZeH8Ddb1" 
"Machine Learning System | All Videos" >}}

<br>

{{< panel color="blue" title="Distribution Shift or Data Drift 🦣" >}}
⭐️ The data a model works with changes over time ⏰, which causes this model's predictions to become 
**less accurate** as time passes⏳.
{{< /panel >}}

{{< panel color="orange" title="Bayes' Theorem" >}}
\[P(Y|X)=\frac{P(X|Y)\cdot P(Y)}{P(X)}\]
- P(X | Y): Likelihood of X given Y (joint distribution)
- P(Y | X) : Model (Posterior)
- P(Y): Prior probability of the output Y.
- P(X): Evidence (marginal probability of the input X).

{{< /panel >}}

{{< panel color="green" title="Covariate Shift (P(X) Changes)" >}}
⭐️The input data distribution seen during training is different from the distribution seen during inference.

👉 P(X)(input) changes, but P(Y|X) (model) remains same.
- e.g. Self-driving car 🚗 trained on a bright, sunny day is used during foggy winter.
{{< /panel >}}

{{< panel color="navy" title="Label Shift or Prior Probability Shift (P(Y) Changes)" >}}
⭐️The output distribution changes, but for a given output, the input distribution remains the same.

👉 P(Y) (output) changes, but P(X|Y) remains the same.
- 😷 e.g. Flu-detection model is trained during summer, when only 1% of patients have flu.
  - The same model is used during winter when 40% of patients have flu.
  - 🍎 Prior probability of having flu P(Y) has changed from 1% to 40%, but the symptoms for a person to have flu P(X|Y) remains same.
{{< /panel >}}

{{< panel color="blue" title="Concept Drift or Posterior Shift (P(Y|X) Changes)" >}}
⭐️ The relationship between inputs and outputs changes.
<br> i.e the very definition of what you are trying to predict changes.

👉 Concept drifts are cyclic or seasonal.
- e.g. ‘Normal' spending behavior in 2019 became ‘Abnormal' during 2020 lockdowns 🔐.
{{< /panel >}}

{{< video "https://youtu.be/1hXmxGC2okE" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/feature_engineering/model_interpretability" >}}">Previous: Model Interpretability</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/ml_system/retraining_strategies" >}}">Next: Retraining Strategies</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```