---
title: Support Vector Regression
description: Support Vector Regression
date: 2026-02-14
weight: 7
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfFECdHEHPM6NjErmLmg2Ff" 
"Support Vector Machine | All Videos" >}}

<br>

{{< panel color="cyan" title="Intuition 💡" >}}
👉Imagine a ‘**tube**' of radius \(\epsilon\) **surrounding** the **regression line**.
- Points inside the tube are considered ‘**correct**' and incur zero penalty.
- Points outside the tube are **penalized** based on their distance from the tube's boundary.
{{< /panel >}}

{{< panel color="green" title="Ignore Errors" >}}
👉SVR ignores errors as long as they are within a certain distance (\(\epsilon\)) from the true value.

🎯This makes SVR inherently robust to noise and outliers, as it does not try to fit every single point perfectly, 
only those that ‘**matter**' to the structure of the data.

**Note**: Standard regression (like OLS) tries to minimize the squared error between the prediction and every data point.
{{< /panel >}}

{{< panel color="blue" title="Optimization (Primal Formulation)" >}}
\[\min_{w, w_0, \xi, \xi^*} \underbrace{\frac{1}{2} \|w\|^2}_{\text{Regularization}} + \underbrace{C \sum_{i=1}^n \xi_i, \xi_i^*}_{\text{Error Penalty}}\]

Subject to constraints:
- \(y_i - (w^T x_i + w_0) \leq \epsilon + \xi_i\): (Upper boundary)
- \((w^T x_i + w_0) - y_i \leq \epsilon + \xi_i^*\): (Lower boundary)
- \(\xi_i, \xi_i^* \geq 0\): (Slack/Error cannot be negative)

**Terms**:
- Epsilon(\(\epsilon\)): The width of the tube. Increasing '\(\epsilon\)' results in fewer support vectors and a smoother (flatter) model.
- Slack Variables (\(\xi_i, \xi_i^*\)): How far a point lies outside the upper and lower boundaries of the tube.
- C: The trade-off between the flatness of the model and the extent to which deviations larger than \(\epsilon\) are tolerated.
{{< /panel >}}

{{< panel color="rust" title="Loss Function" >}}
SVR uses a specific loss function that is 0 when the error<'\(\epsilon\)'.
\[L_\epsilon(y, f(x)) = \max(0, |y - f(x)| - \epsilon)\]
- The solution becomes sparse, because the loss is **zero** for points **inside** the tube.
- Only the **Support Vectors**, i.e, points outside or on the boundary of the tube have **non-zero** Lagrange multipliers (\(\alpha_i\)).

**Note**: \(\epsilon=0.1\) default value in scikit-learn.
{{< /panel >}}

{{< panel color="blue" title="(Wolfe) ‘Dual' Optimization" >}}
\[\max_{\alpha, \alpha^*} \sum_{i=1}^n y_i (\alpha_i - \alpha_i^*) - \epsilon \sum_{i=1}^n (\alpha_i + \alpha_i^*) - \frac{1}{2} \sum_{i=1}^n \sum_{j=1}^n (\alpha_i - \alpha_i^*) (\alpha_j - \alpha_j^*) \mathbf{(x_i^T x_j)}\]

Subject to:
1. \(\sum_{i=1}^n (\alpha_i - \alpha_i^*) = 0\)
2. \(0 \leq \alpha_i, \alpha_i^* \leq C\)

- \(\alpha_i = \alpha_i^* = 0\): point is inside the tube.
- \(|\alpha_i - \alpha_i^*| > 0\) : support vectors; points on or outside the tube.

**Note**: \(\alpha_i , \alpha_i^* \) cannot both be non-zero for the same point; a point cannot be simultaneously above and below the tube.
{{< /panel >}}

{{< panel color="green" title="Inference & Kernel Trick" >}}
\[f(z) = \sum_{i \in SV} (\alpha_i - \alpha_i^*) \mathbf{K(x_i, z)} + w_0\]

- 👉 For non-linear SVR we replace dot product \(x_i^T x_j\) with kernel function \(K(x_i, x_j)\).
- ✅ Model needs to store only support vectors, i.e, points where \(|\alpha_i - \alpha_i^*| > 0\).
- ⭐️\(\xi_i =0 \) for a point that lies exactly on the boundary, so we can use that to calculate the bias (\(w_0\)):

\[w_0 = y_i - \sum_{j \in SV} (\alpha_j - \alpha_j^*) K(x_j, x_i) - \epsilon\]
\[ \text{Since, } y_i - (w^T x_i + w_0) \leq \epsilon + \xi_i\]
{{< /panel >}}

{{< video "https://youtu.be/hAUFhP6N0u8" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/support_vector_machines/rbf_kernel" >}}">Previous: RBF Kernel</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/naive_bayes/naive_bayes_intro" >}}">Next: Naive Bayes Intro</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```