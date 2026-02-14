---
title: LightGBM
description: LightGBM
date: 2026-02-14
weight: 2495
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfYIFfsbRfK_M7gObPE_vwU" 
"Decision Tree | All Videos" >}}

<br>

{{< panel color="blue" title="LightGBM (Light Gradient Boosting Machine)" >}}
- Developed by Microsoft, this framework is designed for high speed and efficiency with large datasets.
- It grows trees leaf-wise rather than level-wise and uses Gradient-based One-Side Sampling (GOSS) to speed up the finding of optimal split points.
{{< /panel >}}

{{< panel color="orange" title="Algorithmic Optimizations" >}}
- 🔵 Gradient-based One Side Sampling (GOSS)
- 🔵 Exclusive Feature Bundling (EFB)
- 🔵 Leaf-wise Tree Growth Strategy
{{< /panel >}}

{{< panel color="green" title="Gradient-based One Side Sampling (GOSS)" >}}
- ❌ Traditional GBDT uses all data instances for gradient calculation, which is inefficient.
- ✅ GOSS focuses 🔬on instances with larger gradients (those that are less well-learned or have higher error).
- 🐛 Keeps all instances with large gradients but randomly samples from those with small gradients.
- 🦩This way, it prioritizes the most informative examples for training, significantly reducing the data used and speeding up 🐇 the process while maintaining accuracy.
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/lightgbm/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Exclusive Feature Bundling (EFB)" >}}
- 🦀 High-dimensional data often contains many sparse, mutually exclusive features (features that never take a non-zero value simultaneously, such as, One Hot Encoding (OHE)).
- 💡 EFB bundles the non-overlapping features into a single, dense feature, reducing the number of features, without losing much information, saving computation.
{{< /panel >}}

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/lightgbm/slide_06_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Leaf-wise Tree Growth Strategy" >}}
- ❌ Traditional gradient boosting machines (like XGBoost), the trees are built level-wise (BFS-like), meaning all nodes at the current level are split before moving to the next level.
- ✅ LightGBM maintains a set of all potential leaves that can be split at any given time and selects the leaf (for splitting) that provides the maximum gain across the entire tree, regardless of its depth.Note: Need mechanisms to avoid over-fitting.
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/lightgbm/slide_08_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/OTDLjYxInp0" >}}
<br><br>
```End of Section```