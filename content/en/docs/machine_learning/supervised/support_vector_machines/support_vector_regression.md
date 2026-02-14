---
title: Support Vector Regression
description: Support Vector Regression
date: 2026-02-14
weight: 257
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfFECdHEHPM6NjErmLmg2Ff" 
"Support Vector Machine | All Videos" >}}

<br>

{{< panel color="blue" title="Intuition 💡" >}}
- Imagine a ‘tube' of radius surrounding the regression line.
- Points inside the tube are considered ‘correct' and incur zero penalty.
- Points outside the tube are penalized based on their distance from the tube's boundary.
{{< /panel >}}

{{< panel color="orange" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/support_vector_machines/support_vector_regression/slide_02_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Ignore Errors" >}}
- SVR ignores errors as long as they are within a certain distance () from the true value.
- This makes SVR inherently robust to noise and outliers, as it does not try to fit every single point perfectly, only those that ‘matter' to the structure of the data.
- Note: Standard regression (like OLS) tries to minimize the squared error between the prediction and every data point.
{{< /panel >}}

{{< panel color="red" title="Optimization (Primal Formulation)" >}}
- Subject to constraints:
- (Upper boundary)
- (Lower boundary)
- (Slack/Error cannot be negative)
- Epsilon(): The width of the tube. Increasing ‘' results in fewer support vectors and a smoother (flatter) model.
- Slack Variables (): How far a point lies outside the upper and lower boundaries of the tube.
- C: The trade-off between the flatness of the model and the extent to which deviations larger than 7 are tolerated.
{{< /panel >}}

{{< panel color="navy" title="Loss Function" >}}
- SVR uses a specific loss function that is 0 when the error<‘'.
- The solution becomes sparse, because the loss is zero for points inside the tube.
- Only the Support Vectors, i.e, points outside or on the boundary of the tube have non-zero Lagrange multipliers ().
- Note: default value in scikit-learn.
{{< /panel >}}

{{< panel color="blue" title="(Wolfe) ‘Dual' Optimization" >}}
- Subject to:
- : point is inside the tube.
- : support vectors; points on or outside the tube.
- Note: cannot both be non-zero for the same point; a point cannot be simultaneously above and below the tube.
\[max_{\alpha,\alpha^{*}}\sum_{i=1}^{n}y_{i}(\alpha_{i}-\alpha_{i}^{*})-ϵ\sum_{i=1}^{n}(\alpha_{i}+\alpha_{i}^{*})-\frac{1}{2}\sum_{i=1}^{n}\sum_{j=1}^{n}(\alpha_{i}-\alpha_{i}^{*})(\alpha_{j}-\alpha_{j}^{*})(x_{i}^{T}x_{j})\]
\[0≤\alpha_{i},\alpha_{i}^{*}≤C\]
{{< /panel >}}

{{< panel color="orange" title="Inference & Kernel Trick" >}}
- 👉 For non-linear SVR we replace dot product with kernel function .
- ✅ Model needs to store only support vectors, i.e, points where.
- ⭐️ for a point that lies exactly on the boundary, so we can use that to calculate the bias ():
- Since,
\[f(z)=\sum_{i∈SV}(\alpha_{i}-\alpha_{i}^{*})K(x_{i},z)+w_{0}\]
\[w_{0}=y_{i}-\sum_{j∈SV}(\alpha_{j}-\alpha_{j}^{*})K(x_{j},x_{i})-ϵ\]
{{< /panel >}}

{{< video "https://youtu.be/hAUFhP6N0u8" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/support_vector_machines/rbf_kernel" >}}">Previous: RBF Kernel</a></span>
<span style="margin-left:auto;"></span>
</div>
<!-- nav-panel:end -->

```End of Section```