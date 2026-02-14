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

{{< panel color="blue" title="KNN Dataset" >}}
- KNN Dataset
{{< imgproc "images/machine_learning/supervised/k_nearest_neighbors/bias_variance_tradeoff/slide_01_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="High Bias, Low Variance" >}}
- If ‘k' is very large, say, k=n,
- the model simply predicts the majority class of the entire dataset for every query point , i.e, under-fitting.
{{< /panel >}}

{{< panel color="green" title="High Variance, Low Bias" >}}
- If ‘k' is very small, say, k=1,
- the model is highly sensitive to noise or outliers, i.e, over-fitting.
{{< /panel >}}

{{< panel color="red" title="‘K' Hyper-Parameter Tuning" >}}
- ‘K' Hyper-Parameter Tuning
{{< imgproc "images/machine_learning/supervised/k_nearest_neighbors/bias_variance_tradeoff/slide_04_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Over-Fitting Vs Under-Fitting" >}}
- Over-Fitting Vs Under-Fitting
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