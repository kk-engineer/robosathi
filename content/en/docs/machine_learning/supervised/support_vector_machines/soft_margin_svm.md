---
title: Soft Margin SVM
description: Soft Margin SVM
date: 2026-02-14
weight: 3
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfFECdHEHPM6NjErmLmg2Ff" 
"Support Vector Machine | All Videos" >}}

{{< panel color="blue" title="Intuition" >}}
Imagine the margin is a fence .
- **Hard Margin**: fence is made of steel. <br>
_Nothing can cross it_.
- **Soft Margin**: fence is made of rubber(porous). <br>
Some points can ‘push' into the margin or even **cross over** to the wrong side, but we charge them a **penalty** for doing so.

{{< imgproc "images/machine_learning/supervised/support_vector_machines/soft_margin_svm/slide_03_01.tif" Resize "1400x" >}}{{< /imgproc >}}

**Problem** <br>
Distance of all positive labelled points from the decision boundary are not the same:
- Distance of positive labelled points must be  \(\ge 1\)
- But, distance of noise points (actually positive points) \(x_1, x_2 ~\&~ x_3\) < 1

{{< /panel >}}

{{< panel color="green" title="Slack Variable" >}}
So, we introduce a **slack** variable or allowance for **error** term, \(\xi_i\) (pronounced ‘xi') for every single data point.
\[y_i.(w^Tx_i + w_0) \ge 1 - \xi_i, ~ \forall i  = 1,2,\dots, n\]
\[
\implies \xi_i \ge 1 - y_i.(w^Tx_i + w_0) \\
also, ~ \xi_i \ge 0 
\]

\[So, ~ \xi _{i}=\max (0,1-y_{i}\cdot (w^Tx_i + w_0))\]
_Note_: The above error term is also called '**Hinge Loss**'.
{{< imgproc "images/machine_learning/supervised/support_vector_machines/soft_margin_svm/slide_06_01.png" Resize "1400x" >}}{{< /imgproc >}}
**Hinge**
{{< imgproc "images/machine_learning/supervised/support_vector_machines/soft_margin_svm/slide_06_02.png" Resize "200x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="Slack/Error Term Interpretation" >}}
\[\xi _{i}=\max (0,1-y_{i}\cdot f(x_{i}))\]
- \(\xi_i = 0\) : **Correctly classified** and outside (or on) the margin.
- \(0 < \xi_i \le 1 \) : **Within the margin** but on the correct side of the decision boundary.
- \(\xi_i > 0\): On the **wrong side** of the decision boundary (**misclassified**).

e.g.:
Since, the noise point are +ve (\(y_i=1\)) labeled:
\[\xi _{i}=\max (0,1-f(x_{i}))\]

- \(x_1, (d=+0.5)\): \(\xi _{i}=\max (0,1-0.5) = 0.5\)
- \(x_2, (d=-0.5)\): \(\xi _{i}=\max (0,1-(-0.5))= 1.5\)
- \(x_3, (d=-1.5)\): \(\xi _{i}=\max (0,1-(-1.5)) = 2.5\)

{{< imgproc "images/machine_learning/supervised/support_vector_machines/soft_margin_svm/slide_09_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Goal of Soft Margin SVM" >}}
\[\text{Maximize the width of margin: } \min_{w, w_0} \frac{1}{2} {\|w\|^2}\]
\[\text{Minimize violation or sum of slack/error terms: } \sum \xi_i\]
{{< /panel >}}

{{< panel color="green" title="Optimization (Primal Formulation)" >}}
\[\min_{w, w_0, \xi} \underbrace{\frac{1}{2} \|w\|^2}_{\text{Regularization}} + \underbrace{C \sum_{i=1}^n \xi_i}_{\text{Error Penalty}}\]

Subject to **constraints**:
1. \(y_i(w^T x_i + b) \geq 1 - \xi_i\): The ‘softened' margin constraint.
2. \(\xi_i \geq 0\): Slack/Error cannot be negative.

**Note**: We use a **hyper-parameter** ‘**C**' to control the trade-off.
{{< /panel >}}

{{< panel color="red" title="Hyper-Parameter 'C' Tuning" >}}
- **Large ‘C'**: **Over-Fitting**; <br>
Misclassifications are expensive . <br>
Model tries to keep the errors as low as possible. <br>
- **Small ‘C'**: **Under-Fitting**; <br>
Margin width is more important than individual errors. <br>
Model will ignore outliers/noise to get a ‘cleaner'(wider) boundary.
{{< /panel >}}

{{< panel color="cyan" title="Hinge Loss View" >}} 
\[ \text{Hinge loss: } \xi _{i}=\max (0,1-y_{i}\cdot (w^Tx_i + w_0))\]

\[ \min_{w, b} \frac{1}{2} \|w\|^2 + C \sum_{i=1}^n \text{HingeLoss}(y_i, f(x_i))\]

**Note**: SVM is just **L2-Regularized Hinge Loss minimization**, as Logistic Regression minimizes Log-Loss.
{{< imgproc "images/machine_learning/supervised/support_vector_machines/soft_margin_svm/slide_14_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/LofkdQ6rCPA" >}}
<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/support_vector_machines/hard_margin_svm" >}}">Previous: Hard Margin SVM</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/support_vector_machines/primal_dual_equivalence" >}}">Next: Primal Dual Equivalence</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```