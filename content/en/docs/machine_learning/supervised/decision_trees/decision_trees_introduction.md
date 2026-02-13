---
title: Decision Trees Introduction
description: Decision Trees Introduction
date: 2026-02-13
weight: 241
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfYIFfsbRfK_M7gObPE_vwU" 
"Decision Tree | All Videos" >}}

<br>

{{< panel color="blue" title="Decision Trees Dataset 📈" >}}
- Decision Trees Dataset 📈
{{< imgproc "images/machine_learning/supervised/decision_trees/decision_trees_introduction/slide_01_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="🤔 How do we classify the data ?" >}}
- It can be written as nested 🕸️
- if else statements.
{{< /panel >}}

{{< panel color="green" title="If Else Ladder 🪜" >}}
- If Else Ladder 🪜
{{< imgproc "images/machine_learning/supervised/decision_trees/decision_trees_introduction/slide_03_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Decision Boundaries" >}}
- Decision Boundaries
{{< imgproc "images/machine_learning/supervised/decision_trees/decision_trees_introduction/slide_04_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="What is a Decision Tree 🌲?" >}}
- Non-parametric model.
- Recursively partitions the feature space.
- Top-down, greedy approach to iteratively select feature splits.
- Maximize purity of a node, based on metrics, such as, Information Gain 💵 or Gini 🧞‍♂️Impurity.
{{< /panel >}}

{{< panel color="blue" title="Computation 💻" >}}
- Note: We can extract the if/else logic and write in C++/Java for better performance.
{{< /panel >}}

{{< panel color="orange" title="Decision Tree 🌲 Analysis" >}}
- Building an optimal decision tree 🌲 is a NP-Hard problem.
- (TC: Exponential; combinatorial search space)
- Pros
- No standardization of data needed.
- Highly interpretable.
- Good runtime performance.
- Works for both classification & regression.
- Cons
- Number of dimensions should not be too large. (Curse of dimensionality)
- Overfitting.
{{< /panel >}}

{{< panel color="green" title="When to use Decision Tree 🌲" >}}
- As base learners in ensembles, such as, bagging(RF), boosting(GBDT), stacking, cascading, etc.
- As a baseline, interpretable, model or for quick feature selection.
- Runtime performance.
{{< /panel >}}

{{< video "https://youtu.be/yBNQERShy-A" >}}
<br><br>
```End of Section```