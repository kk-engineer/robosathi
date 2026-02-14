---
title: Bias Variance Tradeoff
description: Bias Variance Tradeoff
date: 2026-02-14
weight: 234
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxf8kijzBo00irrF7JhvNwhZ" 
"K Nearest Neighbors (KNN) | All Videos" >}}

<br>

{{< panel color="charcoal" title="KNN Dataset" >}}
Let's use this dataset to understand the impact of number of neighbours 'k'.
{{< imgproc "images/machine_learning/supervised/k_nearest_neighbors/bias_variance_tradeoff/slide_01_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="High Bias, Low Variance" >}}
👉If ‘k' is very large, say, k=n,
- model simply predicts the **majority** class of the entire dataset for every query point , i.e, **under-fitting**.
{{< /panel >}}

{{< panel color="orange" title="High Variance, Low Bias" >}}
👉If ‘k' is very small, say, k=1,
- model is highly sensitive to noise or outliers, as it looks at only 1 nearest neighbor, i.e, **over-fitting**.
{{< /panel >}}

{{< panel color="green" title="‘K' Hyper-Parameter Tuning" >}}
Let's plot Error vs 'K' neighbors:
{{< imgproc "images/machine_learning/supervised/k_nearest_neighbors/bias_variance_tradeoff/slide_04_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Over-Fitting Vs Under-Fitting" >}}
- Figure 1: k=1, Over-fitting
- Figure 2: k=n, Under-fitting
- Figure 3: k=11, Lowest Error (Optimum)
{{< imgproc "images/machine_learning/supervised/k_nearest_neighbors/bias_variance_tradeoff/slide_05_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/mti3MVcgUwA" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/k_nearest_neighbors/curse_of_dimensionality" >}}">Previous: Curse Of Dimensionality</a></span>
<span style="margin-left:auto;"></span>
</div>
<!-- nav-panel:end -->

```End of Section```