---
title: Decision Trees Introduction
description: Decision Trees Introduction
date: 2026-02-14
weight: 1
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfYIFfsbRfK_M7gObPE_vwU" 
"Decision Tree | All Videos" >}}

<br>

{{< panel color="grey" title="How do we classify the below dataset ?" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/decision_trees_introduction/slide_01_01.tif" Resize "1400x" >}}{{< /imgproc >}}

💡It can be written as nested 🕸️ if else statements.

e.g: To classify the left bottom corner red points we can write: <br>
👉if (FeatureX1 <1 & FeatureX2 <1)

⭐️Extending the logic for all, we have an if else ladder like below:
{{< imgproc "images/machine_learning/supervised/decision_trees/decision_trees_introduction/slide_03_01.tif" Resize "1400x" >}}{{< /imgproc >}}

👉Final decision boundaries will be something like below:
{{< imgproc "images/machine_learning/supervised/decision_trees/decision_trees_introduction/slide_04_01.tif" Resize "1400x" >}}{{< /imgproc >}}

{{< /panel >}}

{{< panel color="green" title="What is a Decision Tree 🌲?" >}}
- Non-parametric model.
- Recursively partitions the feature space.
- Top-down, greedy approach to iteratively select feature splits.
- Maximize purity of a node, based on metrics, such as, Information Gain 💵 or Gini 🧞‍♂️Impurity.

**Note**: We can extract the if/else logic of the decision tree and write in C++/Java for better performance.
{{< /panel >}}

{{< panel color="blue" title="Computation 💻" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/decision_trees_introduction/computation_complexity.png" Resize "1400x" >}}{{< /imgproc >}} 
{{< /panel >}}

{{< panel color="orange" title="Decision Tree 🌲 Analysis" >}}
⭐️Building an optimal decision tree 🌲 is a **NP-Hard** problem. <br>
👉(Time Complexity: **Exponential**; combinatorial search space)
- **Pros**
  - No standardization of data needed.
  - Highly interpretable.
  - Good runtime performance.
  - Works for both classification & regression.
- **Cons**
  - Number of dimensions should not be too large. (Curse of dimensionality)
  - Overfitting.
  {{< /panel >}}

{{< panel color="navy" title="When to use Decision Tree 🌲" >}}
- As base learners in ensembles, such as, bagging(RF), boosting(GBDT), stacking, cascading, etc.
- As a baseline, interpretable, model or for quick feature selection.
- Runtime performance is important.
{{< /panel >}}

{{< video "https://youtu.be/yBNQERShy-A" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/k_nearest_neighbors/bias_variance_tradeoff" >}}">Previous: Bias Variance Tradeoff</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/decision_trees/purity_metrics" >}}">Next: Purity Metrics</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```