---
title: Log Odds
description: Log Odds
date: 2026-02-14
weight: 4
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxdNo7m8fKMx-pseLizEoU6Z" 
"Logistic Regression | All Videos" >}}

<br>

{{< panel color="green" title="What is the meaning of Odds ?" >}}
Odds compare the likelihood of an event **happening** vs. **not happening**.

**Odds** = \(\frac{p}{1-p}\)
- p = probability of success
{{< /panel >}}

{{< panel color="blue" title="Log Odds (Logit) Assumption" >}}
In logistic regression we assume that Log-Odds (the log of the ratio of positive class to negative class) is a linear function of inputs.

**Log-Odds (Logit)** = \(log_e \frac{p}{1-p}\)
{{< /panel >}}

{{< panel color="green" title="Log Odds (Logit)" >}}
**Log Odds** = \(log_e \frac{p}{1-p} = z\)
\[z=w^{T}x+w_{0}\]
\[
\begin{align*}
&log_{e}(\frac{p}{1-p}) = z \\ 
&⟹\frac{p}{1-p} = e^{z} \\
&\implies  p = e^z - p.e^z \\ 
&\implies  p = \frac{e^z}{1+e^z} \\
&\text { divide numerator and denominator by } e^z \\
&\implies  p  = \frac{1}{1+e^{-z}}  \quad \text { i.e, Sigmoid function}
\end{align*}
\]
{{< /panel >}}

{{< panel color="blue" title="Sigmoid Function" >}}
**Sigmoid function** is the **inverse** of log-odds (logit) function, it converts the **log-odds** back to **probability**, 
and vice versa.
{{< /panel >}}

{{< panel color="orange" title="Range of Values" >}}
- Probability: 0 to 1
- Odds: 0 to + \(\infty\)
- Log Odds: -\(\infty\) to +\(\infty\)
{{< /panel >}}

{{< video "https://youtu.be/UDAhIFDxK1g" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/logistic_regression/logistic_regularization" >}}">Previous: Regularization</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/logistic_regression/logistic_probabilistic_interpretation" >}}">Next: Probabilistic Interpretation</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```