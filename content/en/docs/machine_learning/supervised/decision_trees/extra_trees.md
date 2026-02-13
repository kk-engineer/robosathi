---
title: Extra Trees
description: Extra Trees
date: 2026-02-13
weight: 247
math: true
---

{{< panel color="blue" title="Issue with Decision Trees/ RF" >}}
- In a standard Decision Tree or Random Forest, the algorithm searches for the optimal split point (the threshold 's') that maximizes Information Gain or minimizes MSE.
- This search is:
- computationally expensive (sort + mid-point) and
- tends to follow the noise in the training 🏃‍♂️data.
{{< /panel >}}

{{< panel color="orange" title="Adding Randomness" >}}
- Adding randomness (right kind) in ensemble averaging reduces correlation/variance.
\[Var(f_{bag})=ρ\sigma^{2}+\frac{1-ρ}{B}\sigma^{2}\]
{{< /panel >}}

{{< panel color="green" title="Extremely Randomized Trees" >}}
- Random Thresholds: Instead of searching for the best split point (computationally expensive 💰) for a feature, it picks a threshold at random from a uniform distribution between the feature's local minimum and maximum.
- Entire Dataset:Uses entire training dataset (default) for every tree; no bootstrapping.
- Random Feature Subsets:Random subset of m<n features.
{{< /panel >}}

{{< panel color="red" title="Mathematical Intuition" >}}
- Picking thresholds randomly has two effects:
- Structural correlation between trees becomes extremely low.
- Individual trees are ‘weaker' and have higher bias than a standard optimized tree.The massive drop in ‘' often outweighs the slight increase in bias, leading to an overall ensemble that is smoother and more robust to noise than a standard Random Forest.Note: Extra Trees are almost always grown to full depth, as they may need extra splits to find the same decision boundary.
\[Var(f_{et})=ρ\sigma^{2}+\frac{1-ρ}{B}\sigma^{2}\]
{{< /panel >}}

{{< panel color="navy" title="When to use Extra Trees ?" >}}
- Performance:Significantly faster to train, as it does not sort data to find optimal split.Note: If we are working with billions of rows or thousands of features, ET can be 3x to 5x faster than a RF.
- Robustness to Noise:By picking thresholds randomly, tends to ‘handle' the noise more effectively than RF.
- Feature Importance:Because ET is so randomized, it often provides more ‘stable' feature importance scores. Note: It is less likely to favor a high-cardinality feature (e.g. zip-code) just because it has more potential split points.
{{< /panel >}}

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/extra_trees/slide_06_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/0nryszSur1A" >}}
<br><br>
```End of Section```