---
title: Primal Dual Equivalence
description: Primal Dual Equivalence
date: 2026-02-13
weight: 254
math: true
---

{{< panel color="blue" title="Intuition💡" >}}
- The Primal form is intuitive but computationally expensive in high dimensions.
- ➡️ Number of new features = , grows roughly as
- d= number of dimensions (features)p = degree of polynomial
- Note: The Dual form is what enables the Kernel Trick 🪄.
{{< /panel >}}

{{< panel color="orange" title="Optimization (Primal Formulation)" >}}
- Subject to constraints:
- (The ‘softened' margin constraint)
- (Slack/Error cannot be negative)
{{< /panel >}}

{{< panel color="green" title="Lagrangian" >}}
- We start with the Soft-Margin Primal objective and incorporate its constraints using Lagrange Multipliers
- Note: Inequality conditions must be.
\[L(w,w_{0},ξ,\alpha,\mu)=\frac{1}{2}∥w∥^{2}+C\sum_{i=1}^{n}ξ_{i}-\sum_{i=1}^{n}\alpha_{i}y_{i}(w^{T}x_{i}+w_{0})-1+ξ_{i}-\sum_{i=1}^{n}\mu_{i}ξ_{i}\]
{{< /panel >}}

{{< panel color="red" title="Lagrangian Objective" >}}
- The Lagrangian function has two competing objectives:
- Minimization: We want to minimize w.r.t primal variables (, ) to find the hyperplane with the largest possible margin.
- Maximization: We want to maximize w.r.t dual variables (, ) to ensure all training constraints are satisfied.
- Note: A point that is simultaneously a minimum for one set of variables and a maximum for another is, by definition, a saddle point.
\[L(w,w_{0},ξ,\alpha,\mu)=\frac{1}{2}∥w∥^{2}+C\sum_{i=1}^{n}ξ_{i}-\sum_{i=1}^{n}\alpha_{i}y_{i}(w^{T}x_{i}+w_{0})-1+ξ_{i}-\sum_{i=1}^{n}\mu_{i}ξ_{i}\]
{{< /panel >}}

{{< panel color="navy" title="Karush–Kuhn–Tucker (KKT) Conditions" >}}
- To find the Dual, we find the saddle point by taking partial derivatives with respect to the primal variables and equating them to 0.
{{< /panel >}}

{{< panel color="blue" title="Expansion" >}}
- Expansion
\[\frac{1}{2}w^{T}w+C\sum_{i=1}^{n}ξ_{i}-\sum_{i=1}^{n}\alpha_{i}y_{i}(w^{T}x_{i}+w_{0})-1+ξ_{i}-\sum_{i=1}^{n}\mu_{i}ξ_{i}\]
\[=\frac{1}{2}\sum_{i}\alpha_{i}y_{i}x_{i}^{T}.(\sum_{j}\alpha_{j}y_{j}x_{j})+C\sum_{i=1}^{n}ξ_{i}+\sum_{i=1}^{n}-\alpha_{i}y_{i}\sum_{j=1}^{n}\alpha_{j}y_{j}x_{j}^{T}x_{i}-w_{0}\sum_{i=1}^{n}\alpha_{i}y_{i}+\sum_{i=1}^{n}\alpha_{i}(1-ξ_{i})+\sum_{i=1}^{n}\mu_{i}.(-ξ_{i})\]
\[=\sum_{i=1}^{n}\alpha_{i}-\frac{1}{2}\sum_{i}\sum_{j}\alpha_{i}\alpha_{j}y_{i}y_{j}(x_{i}⋅x_{j})-w_{0}\sum_{i=1}^{n}\alpha_{i}y_{i}_{⏟}_{=0,K.K.T}+\sum_{i=1}^{n}ξ_{i}(C-\alpha_{i}-\mu_{i})_{⏟}_{=0,K.K.T}\]
\[=\sum_{i=1}^{n}\alpha_{i}-\frac{1}{2}\sum_{i}\sum_{j}\alpha_{i}\alpha_{j}y_{i}y_{j}(x_{i}⋅x_{j})\]
{{< /panel >}}

{{< panel color="orange" title="(Wolfe) ‘Dual' Optimization" >}}
- subject to: and
- = 0, for non support vectors (correct side)
- , for free support vectors (exactly on the margin)
- , for bounded support vectors (misclassified or inside margin)Note: Sequential Minimal Optimization (SMO) algorithm is used to find optimal values.
\[\frac{1}{2}∥w∥^{2}+C\sum_{i=1}^{n}ξ_{i}-\sum_{i=1}^{n}\alpha_{i}y_{i}(w^{T}x_{i}+w_{0})-1+ξ_{i}-\sum_{i=1}^{n}\mu_{i}ξ_{i}\]
\[=max_{\alpha}\sum_{i=1}^{n}\alpha_{i}-\frac{1}{2}\sum_{i,j=1}^{n}\alpha_{i}\alpha_{j}y_{i}y_{j}(x_{i}⋅x_{j})\]
{{< /panel >}}

{{< panel color="green" title="Inference Time ⏰" >}}
- 🎯To classify unseen point :
- ✅ From the KKT stationarity condition, we know:
- 👉 Substituting this into the equation:
- Note: Even if you have 1 million training points, if only 500 are support vectors, the summation only runs for 500 terms. All other points have and vanish.
\[f(x_{q})=sign\sum_{i=1}^{n}\alpha_{i}y_{i}(x_{i}^{T}x_{q})+w_{0}\]
{{< /panel >}}

{{< video "https://youtu.be/S7Pb--OmXII" >}}
<br><br>
```End of Section```