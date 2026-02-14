---
title: Extra Trees
description: Extra Trees
date: 2026-02-14
weight: 7
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfYIFfsbRfK_M7gObPE_vwU" 
"Decision Tree | All Videos" >}}

<br>

{{< panel color="red" title="Issue with Decision Trees/Random Forest" >}}
💡In a standard Decision Tree or Random Forest, the algorithm searches for the optimal split point (the threshold 's') 
that maximizes Information Gain or minimizes MSE.

👉This search is:
- **computationally expensive** (sort + mid-point) and
- tends to **follow the noise** in the training 🏃‍♂️data.
{{< /panel >}}

{{< panel color="navy" title="Adding Randomness" >}}
Adding randomness (right kind) in ensemble averaging **reduces** correlation/variance.
\[Var(f_{bag})=ρ\sigma^{2}+\frac{1-ρ}{B}\sigma^{2}\]
{{< /panel >}}

{{< panel color="green" title="Extremely Randomized (ExtRa) Trees" >}}
- **Random Thresholds**: Instead of searching for the best split point (computationally expensive 💰) for a feature, 
it picks a threshold at random from a uniform distribution between the feature's local minimum and maximum.
- **Entire Dataset**: Uses entire training dataset (default) for every tree; no bootstrapping.
- **Random Feature Subsets**: Random subset of m<n features is used in each decision tree.
{{< /panel >}}

{{< panel color="navy" title="Mathematical Intuition" >}}
\[Var(f_{et})=ρ\sigma^{2}+\frac{1-ρ}{B}\sigma^{2}\]
Picking thresholds randomly has two effects:
- Structural correlation between trees becomes extremely low.
- Individual trees are ‘weaker' and have higher bias than a standard optimized tree.

👉The massive drop in ‘\(\rho\)' often outweighs the slight increase in bias, leading to an overall ensemble that is 
smoother and more robust to noise than a standard Random Forest.

**Note**: Extra Trees are almost always grown to full depth, as they may need extra splits to find the same decision boundary.

{{< /panel >}}

{{< panel color="green" title="When to use Extra Trees ?" >}}
- **Performance**: Significantly faster to train, as it does not sort data to find optimal split.
<br>**Note**: If we are working with billions of rows or thousands of features, ET can be 3x to 5x faster than a Random Forest(RF).
- **Robustness to Noise**: By picking thresholds randomly, tends to ‘handle' the noise more effectively than RF.
- **Feature Importance**: Because ET is so randomized, it often provides more ‘stable' feature importance scores. 

**Note**: It is less likely to favor a high-cardinality feature (e.g. zip-code) just because it has more potential split points.
{{< /panel >}}

{{< video "https://youtu.be/0nryszSur1A" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/decision_trees/random_forest" >}}">Previous: Random Forest</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/decision_trees/boosting" >}}">Next: Boosting</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```