---
title: Logistic Probabilistic Interpretation
description: Logistic Probabilistic Interpretation
date: 2026-02-13
weight: 225
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxdNo7m8fKMx-pseLizEoU6Z" 
"Logistic Regression | All Videos" >}}

<br>

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/logistic_regression/logistic_probabilistic_interpretation/slide_01_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Why do we use Log Loss ?" >}}
- To understand that let's have a look 👀at the statistical assumptions.
{{< /panel >}}

{{< panel color="green" title="Bernoulli Assumption" >}}
- We assume that the our target variable ‘y' follows a Bernoulli distribution, i.e, has exactly 2 outputs success/failure.
- P(Y=1|X) = p
- P(Y=0|X) = 1- p
- P(Y=y|X) =
{{< /panel >}}

{{< panel color="red" title="Maximum Likelihood Estimate (MLE)" >}}
- ‘Find the most plausible explanation for what I see.'
- We want to find the weights 🏋️‍♀️‘w' that maximize the likelihood of seeing the data.
- Data, D =
- We do this by maximizing likelihood function.
{{< /panel >}}

{{< panel color="navy" title="Likelihood Function" >}}
- Assumption: Training data is I.I.D.
\[L(w)=\prod_{i=1}^{n}[p_{i}^{y_{i}}(1-p_{i})^{1-y_{i}}]\]
{{< /panel >}}

{{< panel color="blue" title="Problem 🦀" >}}
- Multiplying many small probabilities is computationally difficult and prone to numerical errors.
{{< /panel >}}

{{< panel color="orange" title="Solution🦉" >}}
- A common simplification is to maximize the
- log-likelihood function instead,
- which converts the product into a sum.
- Note: Log is a strictly monotonically increasing function.
{{< /panel >}}

{{< panel color="green" title="Log Likelihood Function" >}}
- Log Likelihood Function
\[log \mathcal{L}(w)=\sum_{i=1}^{n}log[p_{i}^{y_{i}}(1-p_{i})^{1-y_{i}}] \\ ∴log \mathcal{L}(w)=\sum_{i=1}^{n}[y_{i}log(p_{i})+(1-y_{i})log(1-p_{i})]\]
{{< /panel >}}

{{< panel color="red" title="Maximizing the log-likelihood is same as minimizing the negative of log-likelihood." >}}
- Maximizing the log-likelihood is same as minimizing the negative of log-likelihood.
\[max_{w}log \mathcal{L}(w)=min_{w}-log \mathcal{L}(w) \\ min_{w}-log \mathcal{L}(w)=-\sum_{i=1}^{n}[y_{i}log(p_{i})+(1-y_{i})log(1-p_{i})] \\ min_{w}-log \mathcal{L}(w)=Log Loss\]
{{< /panel >}}

{{< panel color="navy" title="Inference 🦉" >}}
- Log Loss is not chosen arbitrarily but it follows directly from
- Bernoulli assumption and MLE.
{{< /panel >}}

{{< video "https://youtu.be/kb_6_SImy6A" >}}
<br><br>
```End of Section```