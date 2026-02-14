---
title: Purity Metrics
description: Purity Metrics
date: 2026-02-14
weight: 242
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfYIFfsbRfK_M7gObPE_vwU" 
"Decision Tree | All Videos" >}}

<br>

{{< panel color="blue" title="Pure Leaf 🍃 Node ?" >}}
- Terminal node where every single data point belongs to the same class.
- Zero Uncertainty.
{{< /panel >}}

{{< panel color="orange" title="If Else Ladder 🪜" >}}
- If Else Ladder 🪜
{{< imgproc "images/machine_learning/supervised/decision_trees/purity_metrics/slide_02_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Entropy" >}}
- Measure ⏱ of uncertainty, randomness, or impurity in a data.
\[H(S)=-\sum_{i=1}^{n}p_{i}log(p_{i})\]
{{< /panel >}}

{{< panel color="red" title="Binary Entropy" >}}
- Binary Entropy
{{< imgproc "images/machine_learning/supervised/decision_trees/purity_metrics/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Surprise 😮 Factor" >}}
- Entropy can also be viewed as the
- ‘average surprise'.
- A highly certain event provides little information when it occurs (low surprise).
- An unlikely event provides a lot of information (high surprise).
{{< /panel >}}

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/purity_metrics/slide_06_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Information Gain💰" >}}
- Measures ⏱ the reduction in entropy (uncertainty) achieved by splitting a dataset based on a specific attribute.
- Note: The goal of a decision tree algorithm is to find the split that maximizes information gain, meaning it removes the most uncertainty from the data.
\[IG=Entropy(Parent)-\frac{N_{left}}{N_{parent}}Entropy(Child_{left})+\frac{N_{right}}{N_{parent}}Entropy(Child_{right})\]
{{< /panel >}}

{{< panel color="green" title="Gini 🧞‍♂️Impurity" >}}
- Measures ⏱ the probability of an element being incorrectly classified if it were randomly labeled according to the distribution of labels in a node.
- Range: 0 (Pure) - 0.5 (Maximum impurity)
- Note: Gini is used in libraries like Scikit-Learn (as the default), because it avoids the computationally expensive 💰 log function.
\[Gini(S)=1-\sum_{i=1}^{n}(p_{i})^{2}\]
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/purity_metrics/slide_09_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Gini Impurity Vs Entropy" >}}
- Gini Impurity is a first-order approximation of Entropy.
- For most of the real-world cases, choosing one over the other results in the exact same tree structure or negligible differences in accuracy.
- When we plot the two functions, they follow nearly identical shapes.
{{< imgproc "images/machine_learning/supervised/decision_trees/purity_metrics/slide_10_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/psxiSAsfFX8" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/decision_trees/decision_trees_introduction" >}}">Previous: Decision Trees Introduction</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/decision_trees/decision_trees_for_regression" >}}">Next: Decision Trees For Regression</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```