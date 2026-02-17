---
title: KNN Introduction
description: K Nearest Neighbors Introduction
date: 2026-02-14
weight: 231
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxf8kijzBo00irrF7JhvNwhZ" 
"K Nearest Neighbors (KNN) | All Videos" >}}

<br>

{{< panel color="red" title="Issues with Linear/Logistic Regression" >}}
- **Parametric models**:
  - Rely on assumption that relationships between data points are linear.
  - For polynomial regression we need to find the degree of polynomial.
- **Training**: 
  - We need to train 🏃‍♂️the model for prediction.
  {{< /panel >}}

{{< panel color="blue" title="K Nearest Neighbors" >}}
- **Simple**: Intuitive way to classify data or predict values by finding similar existing data points (neighbors).
- **Non-Parametric**: Makes no assumptions about the underlying data distribution.
- **No Training Required**: KNN is a ‘**lazy learner**', it does not require a formal training 🏃‍♂️ phase.

{{< imgproc "images/machine_learning/supervised/k_nearest_neighbors/knn_intro/slide_03_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< imgproc "images/machine_learning/supervised/k_nearest_neighbors/knn_intro/slide_01_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="KNN Algorithm" >}}
Given a query point \(x_q\) and a dataset, D = {\((x_i,y_i)_{i=1}^n, \quad x_i,y_i \in \mathbb{R}^d\)}, 
the algorithm finds a set of ‘k' nearest neighbors \(\mathcal{N}_k(x_q) \subseteq D\).

**Inference**:
1. **Choose** a value of ‘**k**' (hyper-parameter); _odd number_. 
2. **Calculate** distance (Euclidean, Cosine etc.) between and every point in dataset and store in a distance list. 
3. **Sort** the distance list in ascending order; choose **top ‘k'** data points. 
4. **Make prediction**:
   - **Classification**: Take _majority vote_ of ‘k' nearest neighbors and assign label. 
   - **Regression**: Take the _mean/median_ of ‘k' nearest neighbors. 

**Note**: Store entire dataset.
{{< /panel >}}

{{< panel color="navy" title="Time & Space Complexity" >}}
- Storing Data: **Space Complexity**: **O(nd)**
- Inference: **Time Complexity** ⏰: **O(nd + nlogn)**

Explanation:
- Distance to all 'n' points in ‘d' dimensions: O(nd)
- Sorting all 'n' data points : O(nlogn)

**Note**: Brute force 🔨 KNN is unacceptable when 'n' is very large, say billions.
{{< /panel >}}

{{< video "https://youtu.be/Ar53hEidonc" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/logistic_regression/logistic_probabilistic_interpretation" >}}">Previous: Probabilistic Interpretation</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/k_nearest_neighbors/knn_optimizations" >}}">Next: KNN Optimizations</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```