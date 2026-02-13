---
title: Data Distribution Shift
description: Data Distribution Shift
date: 2026-02-13
weight: 501
math: true
---

{{< panel color="blue" title="Distribution Shift or Data Drift 🦣" >}}
- The data a model works with changes over time ⏰, which causes this model's predictions to become less accurate as time passes⏳.
{{< /panel >}}

{{< panel color="orange" title="Bayes' Theorem 🐒" >}}
- P(X | Y): Likelihood of X given Y (joint distribution)
- P(Y | X) : Model (Posterior)
- P(Y): Prior probability of the output Y.P(X): Evidence (marginal probability of the input X).
\[P(Y|X)=\frac{P(X|Y)⋅P(Y)}{P(X)}\]
{{< /panel >}}

{{< panel color="green" title="Covariate Shift (P(X) Changes)" >}}
- The input data distribution seen during training is different from the distribution seen during inference.
- 👉 P(X)(input) changes, but P(Y|X) (model) remains same.
- e.g. Self-driving car 🚗 trained on a bright, sunny day is used during foggy winter.
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< imgproc "images/machine_learning/ml_system/data_distribution_shift/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Label Shift or Prior Probability Shift (P(Y) Changes)" >}}
- The output distribution changes, but for a given output, the input distribution remains the same.
- 👉 P(Y) (output) changes, but P(X|Y) remains the same.
- 😷 e.g. Flu-detection model is trained during summer, when only 1% of patients have flu.
- The same model is used during winter when 40% of patients have flu.
- 🍎 Prior probability of having flu P(Y) has changed from 1% to 40%, but the symptoms for a person to have flu P(X|Y) remains same.
{{< /panel >}}

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/ml_system/data_distribution_shift/slide_06_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Concept Drift or Posterior Shift (P(Y|X) Changes)" >}}
- The relationship between inputs and outputs changes.
- i.e the very definition of what you are trying to predict changes.
- 👉 Concept drifts are cyclic or seasonal.
- e.g. ‘Normal' spending behavior in 2019 became ‘Abnormal' during 2020 lockdowns 🔐.
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/ml_system/data_distribution_shift/slide_08_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/1hXmxGC2okE" >}}
<br><br>
```End of Section```