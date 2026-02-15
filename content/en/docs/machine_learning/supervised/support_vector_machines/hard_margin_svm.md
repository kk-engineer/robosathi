---
title: Hard Margin SVM
description: Hard Margin SVM
date: 2026-02-14
weight: 2
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfFECdHEHPM6NjErmLmg2Ff" 
"Support Vector Machine | All Videos" >}}

<br>

{{< panel color="red" title="Assumptions of Hard Margin SVM" >}}
- Data is perfectly linearly separable, i.e, there must exist a hyperplane that can perfectly separate the data into two distinct classes without any misclassification.
- No noise or outliers that fall within the margin or on the wrong side of the decision boundary. Note: Even a single outlier can prevent the algorithm from finding a valid solution or drastically affect the boundary's position, leading to poor generalization.
{{< imgproc "images/machine_learning/supervised/support_vector_machines/hard_margin_svm/slide_01_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="Distance Between Margins" >}}
\[
\begin{aligned}
\text{Decision Boundary: } \pi &= \mathbf{w^Tx} + w_0 = 0\\
\text{Upper Margin: }\pi^+ &= \mathbf{w^Tx} + w_0 = +1\\
\text{Lower Margin: }\pi^- &= \mathbf{w^Tx} + w_0 = -1\\
\end{aligned}
\]

- 🐎 Distance(signed) of a hyperplane from origin = \(\frac{-w_0}{\|w\|}\)
- 🦣 Margin width = distance(\(\pi^+, \pi^-\))
- = \(\frac{1-w_0 - (-1 -w_0)}{\|w\|}\) = \(\frac{1-\cancel{w_0} + 1 + \cancel{w_0})}{\|w\|}\)
- distance(\(\pi^+, \pi^-\)) = \(\frac{2}{\|w\|}\)

**Figure: Distance of Hyperplane from Origin**
{{< imgproc "images/machine_learning/supervised/support_vector_machines/hard_margin_svm/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
[Read more about Hyperplane]({{<ref  "/docs/maths/linear_algebra/hyperplane/"  >}}) 
{{< /panel >}}

{{< panel color="orange" title="Goal 🎯" >}}
- Separating hyperplane \(\pi\) is exactly equidistant from \(\pi^+\) and  \(\pi^-\).
- We want to maximize the margin between +ve(🐶) and -ve (😸) points.
{{< /panel >}}

{{< panel color="red" title="Constraint" >}}
\[w^Tx_i + w_0 \ge +1 ~ for ~ y_i = +1 \]
\[w^Tx_i + w_0 \le -1 ~ for ~ y_i = -1 \]
👉Combining above two constraints:
\[y_{i}.(w^{T}x_{i}+w_{0})≥1\]
{{< /panel >}}

{{< panel color="green" title="Optimization ⚖️" >}}
\[\max_{w, w_0} \frac{2}{\|w\|}\]
such that, \(y_i.(w^Tx_i + w_0) \ge 1\)
{{< /panel >}}

{{< panel color="navy" title="Primal Problem" >}}
👉To maximize the margin, we must minimize \(\|w\|\). <br>
Since, distance(\(\pi^+, \pi^-\)) = \(\frac{2}{\|w\|}\)
\[\min_{w, w_0} \frac{1}{2} {\|w\|^2}\]
such that, \(y_i.(w^Tx_i + w_0) \ge 1 ~ \forall i  = 1,2,\dots, n\)

**Note**: Hard margin SVM will not work if the data has a single outlier or slight overlap.
{{< /panel >}}

{{< video "https://youtu.be/uPjOC92Hcq0" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/support_vector_machines/svm_intro" >}}">Previous: SVM Intro</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/support_vector_machines/soft_margin_svm" >}}">Next: Soft Margin SVM</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```