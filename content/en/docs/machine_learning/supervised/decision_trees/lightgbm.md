---
title: LightGBM
description: LightGBM
date: 2026-02-14
weight: 15
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfYIFfsbRfK_M7gObPE_vwU" 
"Decision Tree | All Videos" >}}

<br>

{{< panel color="navy" title="LightGBM (Light Gradient Boosting Machine)" >}}
⭐️Developed by **Microsoft**, this framework is designed for high speed and efficiency with large datasets.

👉It grows trees leaf-wise rather than level-wise and uses Gradient-based One-Side Sampling (GOSS) to speed 🐇 up the finding of optimal split points.
{{< /panel >}}

{{< panel color="orange" title="Algorithmic Optimizations" >}}
🔵 Gradient-based One Side Sampling (GOSS) <br>
🔵 Exclusive Feature Bundling (EFB) <br>
🔵 Leaf-wise Tree Growth Strategy <br>
{{< /panel >}}

{{< panel color="green" title="Gradient-based One Side Sampling (GOSS)" >}}
- ❌ Traditional GBDT uses all data instances for gradient calculation, which is inefficient.
- ✅ GOSS **focuses** 🔬on instances with **larger gradients** (those that are less well-learned or have higher error).
- 🐛 Keeps all instances with **large gradients** but randomly samples from those with small gradients.
- 🦩This way, it prioritizes the most informative examples for training, significantly reducing the data used and speeding up 🐇 the process while maintaining accuracy.
{{< /panel >}}

{{< panel color="navy" title="Exclusive Feature Bundling (EFB)" >}}
- 🦀 High-dimensional data often contains many sparse, mutually exclusive features (features that never take a non-zero value simultaneously, such as, One Hot Encoding (OHE)).
- 💡 EFB bundles the **non-overlapping** features into a **single**, dense feature, reducing the number of features, without losing much information, saving computation.
{{< /panel >}}

{{< panel color="green" title="Leaf-wise Tree Growth Strategy" >}}
- ❌ Traditional gradient boosting machines (like XGBoost), the trees are built level-wise (BFS-like), meaning all nodes at the current level are split before moving to the next level.
- ✅ LightGBM maintains a set of all **potential leaves** that can be split at any given time and selects the leaf (for splitting) that provides the maximum gain across the entire tree, regardless of its depth.

**Note**: Need mechanisms to avoid **over-fitting**.
{{< /panel >}}

{{< video "https://youtu.be/OTDLjYxInp0" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/decision_trees/xgboost" >}}">Previous: XgBoost</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/decision_trees/catboost" >}}">Next: CatBoost</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```