---
title: Primal Dual Equivalence
description: Primal Dual Equivalence
date: 2026-02-14
weight: 4
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfFECdHEHPM6NjErmLmg2Ff" 
"Support Vector Machine | All Videos" >}}

<br>

{{< panel color="cyan" title="Intuition💡" >}}
The Primal form is intuitive but computationally expensive in high dimensions.

➡️ Number of new features = \({d+p \choose p}\), grows roughly as \(O(d^{p})\)
- d= number of dimensions (features)
- p = degree of polynomial

**Note**: The Dual form is what enables the Kernel Trick 🪄.
{{< /panel >}}

{{< panel color="green" title="Optimization (Primal Formulation)" >}}
\[\min_{w, w_0, \xi} \underbrace{\frac{1}{2} \|w\|^2}_{\text{Regularization}} + \underbrace{C \sum_{i=1}^n \xi_i}_{\text{Error Penalty}}\]

Subject to **constraints**:
1. \(y_i(w^T x_i + b) \geq 1 - \xi_i\): The ‘softened' margin constraint.
2. \(\xi_i \geq 0\): Slack/Error cannot be negative.

{{< /panel >}}

{{< panel color="orange" title="Lagrangian" >}}
⭐️ We start with the Soft-Margin Primal objective and incorporate its constraints using Lagrange Multipliers
\((\alpha_i, \mu_i \geq 0)\)

\[L(w, w_0, \xi, \alpha, \mu) = \frac{1}{2}\|w\|^2 + C \sum_{i=1}^n \xi_i - \sum_{i=1}^n \alpha_i \left[y_i(w^T x_i + w_0) - 1 + \xi_i \right] - \sum_{i=1}^n \mu_i \xi_i\]
**Note**: Inequality conditions must be \(\le 0\).
{{< /panel >}}

{{< panel color="navy" title="Lagrangian Objective" >}}
👉The Lagrangian function has two competing objectives:
\[L(w, w_0, \xi, \alpha, \mu) = \frac{1}{2}\|w\|^2 + C \sum_{i=1}^n \xi_i - \sum_{i=1}^n \alpha_i \left[y_i(w^T x_i + w_0) - 1 + \xi_i \right] - \sum_{i=1}^n \mu_i \xi_i\]
- **Minimization**: We want to **minimize** \(L(w, w_0, \xi, \alpha, \mu)\) w.r.t **primal** variables (\(w, w_0, \xi_i \) ) to find the hyperplane with the largest possible margin.
- **Maximization**: We want to **maximize** \(L(w, w_0, \xi, \alpha, \mu)\) w.r.t **dual** variables (\(\alpha_i, \mu_i\) ) to ensure all training constraints are satisfied.

**Note**: A point that is simultaneously a **minimum** for one set of variables and a **maximum** for another is, by definition, 
a **saddle point**.

{{< /panel >}}

{{< panel color="rust" title="Karush–Kuhn–Tucker (KKT) Conditions" >}}
👉To find the Dual, we find the saddle point by taking partial derivatives with respect to the primal variables \((w, w_0, \xi)\)
and equating them to 0.

\[\frac{\partial L}{\partial w} = 0 \implies \mathbf{w = \sum_{i=1}^n \alpha_i y_i x_i}\]
\[\frac{\partial L}{\partial w_0} = 0 \implies \mathbf{\sum_{i=1}^n \alpha_i y_i = 0}\]
\[\frac{\partial L}{\partial \xi_i} = 0 \implies C - \alpha_i - \mu_i = 0 \implies \mathbf{0 \leq \alpha_i \leq C}\]
{{< /panel >}}

{{< panel color="blue" title="Primal Expansion" >}}
\[\frac{1}{2}\mathbf{w}^T\mathbf{w} + C \sum_{i=1}^n \xi_i - \sum_{i=1}^n \alpha_i \left[y_i(\mathbf{w}^T x_i + w_0) - 1 + \xi_i\right] - \sum_{i=1}^n \mu_i \xi_i\]
\[ 
\begin{aligned}
= \frac{1}{2} \left(\sum_i \alpha_i y_i x_i \right)^T . \left(\sum_j \alpha_j y_j x_j \right) + C \sum_{i=1}^n \xi_i + \sum_{i=1}^n -\alpha_i y_i \left( \sum_{j=1}^n \alpha_j y_j x_j \right)^T x_i \\ 
-w_0 \sum_{i=1}^n \alpha_i y_i + \sum_{i=1}^n \alpha_i(1-\xi_i) + \sum_{i=1}^n \mu_i. (-\xi_i) \\
\end{aligned}
\]

\[
= \sum_{i=1}^n \alpha_i - \frac{1}{2} \sum_i \sum_j \alpha_i \alpha_j y_i y_j (x_i \cdot x_j) \underbrace{-w_0\sum_{i=1}^n \alpha_i y_i}_{=0, K.K.T}  +  \underbrace{\sum_{i=1}^n \xi_i (C -\alpha_i -\mu_i)}_{=0, K.K.T}
\]

\[
= \sum_{i=1}^n \alpha_i - \frac{1}{2} \sum_i \sum_j \alpha_i \alpha_j y_i y_j (x_i \cdot x_j) 
\]
{{< /panel >}}

{{< panel color="orange" title="(Wolfe) ‘Dual' Optimization" >}}
\[ \frac{1}{2}\|w\|^2 + C \sum_{i=1}^n \xi_i - \sum_{i=1}^n \alpha_i \left[y_i(w^T x_i + w_0) - 1 + \xi_i\right] - \sum_{i=1}^n \mu_i \xi_i\]
\[ = \max_{\alpha} \sum_{i=1}^n \alpha_i - \frac{1}{2} \sum_{i,j=1}^n \alpha_i \alpha_j y_i y_j \mathbf{(x_i \cdot x_j)}\]

subject to: \(0 \leq \alpha_i \leq C\) and \(\sum \alpha_i y_i = 0\)
- \(\alpha_i\)= 0, for non support vectors (correct side)
- \(0 < \alpha_i < C\), for free support vectors (exactly on the margin)
- \(\alpha_i = C\), for bounded support vectors (misclassified or inside margin)

**Note**: **Sequential Minimal Optimization (SMO)** algorithm is used to find optimal \(\alpha_i\) values.
{{< /panel >}}

{{< panel color="green" title="Inference Time ⏰" >}}
🎯To classify unseen point \(x_q\) : \(f(x_q) = \text{sign}(w^T x_q + w_0)\)

✅ From the KKT stationarity condition, we know: \(\mathbf{w} = \sum_{i=1}^n \alpha_i y_i x_i\)

👉 Substituting this into the equation:
\[f(x_q) = \text{sign}\left( \sum_{i=1}^n \alpha_i y_i (x_i^T x_q) + w_0 \right)\]

**Note**: Even if you have 1 million training points, if only 500 are support vectors, the summation only runs for 500 terms. 
<br>All other points have \(\alpha_i = 0\) and vanish.
{{< /panel >}}

{{< video "https://youtu.be/S7Pb--OmXII" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/support_vector_machines/soft_margin_svm" >}}">Previous: Soft Margin SVM</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/support_vector_machines/kernel_trick" >}}">Next: Kernel Trick</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```