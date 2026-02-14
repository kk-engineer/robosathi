---
title: Hard Margin SVM
description: Hard Margin SVM
date: 2026-02-14
weight: 252
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfFECdHEHPM6NjErmLmg2Ff" 
"Support Vector Machine | All Videos" >}}

<br>

{{< panel color="blue" title="Classification Problem" >}}
- Classification Problem
{{< imgproc "images/machine_learning/supervised/support_vector_machines/hard_margin_svm/slide_01_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Assumptions" >}}
- Data is perfectly linearly separable, i.e, there must exist a hyperplane that can perfectly separate the data into two distinct classes without any misclassification.
- No noise or outliers that fall within the margin or on the wrong side of the decision boundary. Note: Even a single outlier can prevent the algorithm from finding a valid solution or drastically affect the boundary's position, leading to poor generalization.
{{< /panel >}}

{{< panel color="green" title="Distance Between Margins" >}}
- 🐎 Distance(signed) of a hyperplane from origin =
- 🦣 Margin width = distance()
- = =
- distance() =
\[\pi=w^{T}x+w_{0}=0 \\ \pi^{+}=w^{T}x+w_{0}=+1 \\ \pi^{-}=w^{T}x+w_{0}=-1\]
{{< /panel >}}

{{< panel color="red" title="Distance of Hyperplane from Origin" >}}
- Distance of Hyperplane from Origin
{{< imgproc "images/machine_learning/supervised/support_vector_machines/hard_margin_svm/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Goal 🎯" >}}
- Separating hyperplane is exactly equidistant from and .
- We want to maximize the margin between +ve(🐶) and -ve (😸) points.
{{< /panel >}}

{{< panel color="blue" title="Constraint" >}}
- Combining above two constraints:
\[w^{T}x_{i}+w_{0}≥+1fory_{i}=+1\]
\[w^{T}x_{i}+w_{0}≤-1fory_{i}=-1\]
\[y_{i}.(w^{T}x_{i}+w_{0})≥1\]
{{< /panel >}}

{{< panel color="orange" title="Optimization ⚖️" >}}
- s.t.
{{< /panel >}}

{{< panel color="green" title="Primal Problem" >}}
- To maximize the margin, we must minimize .
- s.t.
- Note: Hard margin SVM will not work if the data has a single outlier or slight overlap.
\[min_{w,w_{0}}\frac{1}{2}∥w∥^{2}\]
{{< /panel >}}

{{< video "https://youtu.be/uPjOC92Hcq0" >}}
<br><br>
```End of Section```