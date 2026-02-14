---
title: Probabilistic Interpretation
description: Probabilistic Interpretation of Linear Regression
date: 2026-02-14
weight: 4
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxde_X17sF7iN6rnQgFlBDC-" 
"Linear Regression | All Videos" >}}
<br>

{{< panel color="blue" title="Probabilistic Interpretation" >}}
Explains why we use **ordinary least squares** error to find the model **weights/parameters**.
{{< /panel >}}

{{< panel color="green" title="Model Assumptions" >}}
**Error = Random Noise, Un-modeled effects**

\[
\begin{align*}
\epsilon_i = y_i - \hat{y_i} \\
\implies y_i = \hat{y_i} + \epsilon_i \\
\because \hat{y_i} = x_i^Tw \\
\therefore y_i = x_i^Tw + \epsilon_i \\
\end{align*}
\]
**Actual value(\(y_i\)) = Deterministic linear predictor(\(x_i^Tw\)) + Error term(\(\epsilon_i\))**
{{< /panel >}}

{{< panel color="orange" title="Error Assumptions" >}}
- **Independent and Identically Distributed (I.I.D)**: <br>
Each error term is independent of others.
- **Normal (Gaussian) Distributed**: <br>
Error follows a normal distribution with mean = 0 and a constant variance, .

This implies that the target variable itself is a **random variable**, normally distributed around the linear relationship.
\[(y_{i}|x_{i};w)∼N(x_{i}^{T}w,\sigma^{2})\]

{{< imgproc "images/machine_learning/supervised/linear_regression/probabilistic_interpretation/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< imgproc "images/machine_learning/supervised/linear_regression/probabilistic_interpretation/slide_05_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< question >}}
Why is Error terms distribution considered to be Gaussian ?
{{< /question >}}

{{< answer >}}
**Central Limit Theorem (CLT)** states that for a sequence of I.I.D random variables, 
the distribution of the sample mean(sum) approximates to a **normal distribution**, 
*regardless* of the original population distribution.
{{< imgproc "images/machine_learning/supervised/linear_regression/probabilistic_interpretation/slide_07_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /answer >}}

{{< panel color="green" title="Probability Vs Likelihood" >}}
- **Probability (Forward View)**: <br>
Quantifies the chance of observing a specific outcome given a known, fixed model.
- **Likelihood (Backward/Inverse View)**:<br>
Inverse concept used for inference (working backward from results to causes). It is a function of the parameters and measures how ‘likely' a specific set of parameters makes the observed data appear.
{{< imgproc "images/machine_learning/supervised/linear_regression/probabilistic_interpretation/slide_09_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Maximum Likelihood Estimate (MLE)" >}}
*‘Find the most plausible explanation for what I see.'*

The goal of the probabilistic interpretation is to find the parameters ‘w' that maximize the probability (likelihood) of observing the given dataset.

**Assumption**: Training data is I.I.D.
\[
\begin{align*}
Likelihood &= \mathcal{L}(w) \\
\mathcal{L}(w) &= p(y|x;w) \\
&= \prod_{i=1}^N p(y_i| x_i; w) \\
&= \prod_{i=1}^N \frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(y_i-x_i^Tw)^2}{2\sigma^2}}
\end{align*}
\]
{{< /panel >}}

{{< panel color="red" title="Issue with Likelihood" >}}
Maximizing the likelihood function is mathematically complex due to the **product term** and the exponential function.

A common simplification is to maximize the **log-likelihood** function instead, which converts the product into a sum.

**Note**: Log is a strictly monotonically increasing function.
{{< /panel >}}

{{< panel color="green" title="Solution: Log Likelihood" >}}

\[
\begin{align}
log \mathcal{L}(w) &= log \prod_{i=1}^N \frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(y_i-x_i^Tw)^2}{2\sigma^2}} \\
&= \sum_{i=1}^N log(\frac{1}{\sigma\sqrt{2\pi}}) + log (e^{-\frac{(y_i-x_i^Tw)^2}{2\sigma^2}}) \\
log \mathcal{L}(w)  &= Nlog(\frac{1}{\sigma\sqrt{2\pi}}) - \sum_{i=1}^N
\frac{(y_i-x_i^Tw)^2}{2\sigma^2} \\ 
\end{align}
\]
**Note**: The first term is constant w.r.t ‘w'.

So, we need to find parameters ‘w' that maximize the log likelihood.
\[ 
\begin{align}
log \mathcal{L}(w) & \propto -\frac{1}{2\sigma^2} \sum_{i=1}^N (y_i-x_i^Tw)^2 \\ 
& \because \frac{1}{2\sigma^2} \text{ is constant} \\
log \mathcal{L}(w) & \propto -\sum_{i=1}^N (y_i-x_i^Tw)^2 \\ 
\end{align}
\]
{{< /panel >}}

{{< panel color="red" title="Ordinary Least Squares" >}}

\[
\begin{align*}
log \mathcal{L}(w) &\propto -\sum_{i=1}^N (y_i-x_i^Tw)^2 \\
\underset{w}{\mathrm{max}}\ -\sum_{i=1}^N (y_i-x_i^Tw)^2 &= \underset{w}{\mathrm{min}}\ \sum_{i=1}^N (y_i-x_i^Tw)^2
\end{align*}
\]
**Maximizing** the log-likelihood is equivalent to **minimizing** the sum of squared errors, which is the exact 
objective of the ordinary least squares (OLS) method.

\[
\underset{w}{\mathrm{min}}\ J(w) = \underset{w}{\mathrm{min}}\ \sum_{i=1}^N (y_i - x_i^Tw)^2
\]
{{< /panel >}}

{{< video "https://youtu.be/qsfTfotxU_8" >}}
<br><br>
<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/linear_regression/linear_regression" >}}">Previous: Linear Regression</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/linear_regression/convex_function" >}}">Next: Convex Function</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```
