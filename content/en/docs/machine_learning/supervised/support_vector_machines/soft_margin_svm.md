---
title: Soft Margin SVM
description: Soft Margin SVM
date: 2026-02-13
weight: 253
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfFECdHEHPM6NjErmLmg2Ff" 
"Support Vector Machine | All Videos" >}}

<br>

{{< panel color="blue" title="Intuition💡" >}}
- Imagine the margin is a fence 🌉.
- Hard Margin: fence is made of steel.
- Nothing can cross it.
- Soft Margin: fence is made of rubber(porous).Some points can ‘push' into the margin or even cross over to the wrong side, but we charge them a penalty 💵 for doing so.
{{< /panel >}}

{{< panel color="orange" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/support_vector_machines/soft_margin_svm/slide_02_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Classification Problem (labelled noise points)" >}}
- Classification Problem (labelled noise points)
{{< imgproc "images/machine_learning/supervised/support_vector_machines/soft_margin_svm/slide_03_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Issue" >}}
- Distance from decision boundary:
- Positive labelled 1
- Noise 📢 points < 1
{{< /panel >}}

{{< panel color="navy" title="Solution" >}}
- ⚔️ So, we introduce a slack variable or error term
- (pronounced ‘xi') for every single data point .
- So,
- Note: The above error term is also called ‘Hinge Loss'.
\[y_{i}.(w^{T}x_{i}+w_{0})≥1-ξ_{i},∀i=1,2,…,n\]
{{< /panel >}}

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/support_vector_machines/soft_margin_svm/slide_06_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< imgproc "images/machine_learning/supervised/support_vector_machines/soft_margin_svm/slide_06_02.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Slack/Error Term Meaning" >}}
- : Correctly classified and outside (or on) the margin.
- : Within the margin but on the correct side of the decision boundary.
- : On the wrong side of the decision boundary (misclassified).
\[ξ_{i}=max(0,1-y_{i}⋅f(x_{i}))\]
{{< /panel >}}

{{< panel color="green" title="Example" >}}
- Since, the noise 📢 point are +ve () labeled:
- :
\[ξ_{i}=max(0,1-f(x_{i}))\]
{{< /panel >}}

{{< panel color="red" title="Classification Problem (labelled noise points)" >}}
- Classification Problem (labelled noise points)
{{< imgproc "images/machine_learning/supervised/support_vector_machines/soft_margin_svm/slide_09_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Goal 🎯" >}}
- Maximize the width of margin:
- Minimize violation or sum of slack/error terms:
{{< /panel >}}

{{< panel color="blue" title="Optimization (Primal Formulation)" >}}
- Subject to constraints:
- (The ‘softened' margin constraint)
- (Slack/Error cannot be negative)
- Note: We use a hyper-parameter ‘C' to control the trade-off.
{{< /panel >}}

{{< panel color="orange" title="Role of Hyper-Parameter ‘C'" >}}
- Large ‘C': Over-Fitting; Misclassifications are expensive 💰. Model tries to keep the errors as low as possible.
- Small ‘C': Under-Fitting;Margin width is more important than individual errors.Model will ignore outliers/noise 📢 to get a ‘cleaner'(wider) boundary.
{{< /panel >}}

{{< panel color="green" title="Hinge Loss View" >}}
- Hinge loss =
- Note: SVM is just L2-Regularized Hinge Loss minimization, as Logistic Regression minimizes Log-Loss.
\[min_{w,b}\frac{1}{2}∥w∥^{2}+C\sum_{i=1}^{n}HingeLoss(y_{i},f(x_{i}))\]
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/support_vector_machines/soft_margin_svm/slide_14_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/LofkdQ6rCPA" >}}
<br><br>
```End of Section```