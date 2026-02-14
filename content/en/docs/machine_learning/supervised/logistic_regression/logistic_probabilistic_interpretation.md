---
title: Probabilistic Interpretation
description: Probabilistic Interpretation of Logistic Regression
date: 2026-02-14
weight: 5
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxdNo7m8fKMx-pseLizEoU6Z" 
"Logistic Regression | All Videos" >}}

<br>
{{< panel color="green" title="Why do we use Log Loss in Binary Classification?" >}}
To understand that let's have a look 👀at the statistical assumptions.
{{< /panel >}}

{{< panel color="orange" title="Bernoulli Assumption" >}}
We **assume** that our target variable ‘y' follows a **Bernoulli distribution**, i.e, has exactly 2 outputs **success/failure**.
- P(Y=1|X) = p
- P(Y=0|X) = 1- p

Combining above 2 into 1 equation gives:
- P(Y=y|X) = \(p^y(1-p)^{1-y}\)
{{< /panel >}}

{{< panel color="blue" title="Maximum Likelihood Estimate (MLE)" >}}
_'Find the most plausible explanation for what I see.'_

We want to **find** the **weights** 🏋️‍♀️‘w' that **maximize** the **likelihood** of seeing the **data**.
- Data, D = \(\{ (x_i, y_i)_{i=1}^n , \quad y_i \in \{0,1\} \}\)

We do this by maximizing likelihood function.
{{< /panel >}}

{{< panel color="navy" title="Likelihood Function" >}}
\[\mathcal{L}(w) = \prod_{i=1}^n [p_i^{y_i}(1-p_i)^{1-y_i}]\]

**Assumption**: Training data is I.I.D.
{{< /panel >}}

{{< panel color="red" title="Problem 🦀" >}}
Multiplying many small probabilities is computationally difficult and prone to numerical errors.
{{< /panel >}}

{{< panel color="green" title="Solution🦉" >}}
A common simplification is to maximize the log-likelihood function instead, which converts the product into a sum.

**Note**: Log is a strictly monotonically increasing function.
{{< /panel >}}

{{< panel color="blue" title="Log Likelihood Function" >}}
\[
\begin{align*}
log\mathcal{L}(w) &= \sum_{i=1}^n log [p_i^{y_i}(1-p_i)^{1-y_i}] \\
\therefore log\mathcal{L}(w) &= \sum_{i=1}^n [ y_ilog(p_i) + (1-y_i)log(1-p_i)]
\end{align*}
\]
**Maximizing** the log-likelihood is same as **minimizing** the **negative** of log-likelihood.
\[
\begin{align*}
\underset{w}{\mathrm{max}}\ log\mathcal{L}(w) &= \underset{w}{\mathrm{min}} - log\mathcal{L}(w) \\
\underset{w}{\mathrm{min}} - log\mathcal{L}(w) &= - \sum_{i=1}^n [ y_ilog(p_i) + (1-y_i)log(1-p_i)] \\
\underset{w}{\mathrm{min}} - log\mathcal{L}(w) &= \text {Log Loss}
\end{align*}
\]

{{< /panel >}}


{{< panel color="cyan" title="Inference" >}}
**Log Loss** is not chosen **arbitrarily**, but it follows directly from **Bernoulli assumption** and **MLE**.
{{< /panel >}}

{{< video "https://youtu.be/kb_6_SImy6A" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/logistic_regression/log_odds" >}}">Previous: Log Odds</a></span>
<span style="margin-left:auto;"></span>
</div>
<!-- nav-panel:end -->

```End of Section```