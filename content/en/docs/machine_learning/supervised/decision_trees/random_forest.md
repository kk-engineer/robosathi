---
title: Random Forest
description: Random Forest
date: 2026-02-13
weight: 246
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfYIFfsbRfK_M7gObPE_vwU" 
"Decision Tree | All Videos" >}}

<br>

{{< panel color="blue" title="Problem with Bagging" >}}
- If one feature is extremely predictive
- (e.g., ‘Area' for house prices), almost every bootstrap tree will split on that feature at the root.
- This makes the trees(models) very similar, leading to a high correlation ‘'.
\[Var(f_{bagging})=ρ\sigma^{2}+\frac{1-ρ}{B}\sigma^{2}\]
{{< /panel >}}

{{< panel color="orange" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/random_forest/slide_02_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Feature Sub Sampling" >}}
- Choose a random subset of ‘m' features from the total ‘d' features, reducing the correlation ‘' between trees.
- By forcing trees to split on ‘sub-optimal' features, we intentionally increase the variance of individual trees;
- also the bias is slightly increased (simpler trees).
- Standard heuristics:
- Classification:
- Regression:
{{< /panel >}}

{{< panel color="red" title="Math of De-Correlation" >}}
- Because ‘' is the dominant factor in the variance of the ensemble when B is large, the overall ensemble variance Var() drops significantly lower than standard Bagging.
\[Var(f_{rf})=ρ\sigma^{2}+\frac{1-ρ}{B}\sigma^{2}\]
{{< /panel >}}

{{< panel color="navy" title="Over-Fitting" >}}
- A Random Forest will never overfit by adding more trees (B).
- It only converges to the limit .
- Overfitting is controlled by:
- depth of the individual trees.
- size of the feature subset ‘m'.
{{< /panel >}}

{{< panel color="blue" title="When to use Random Forest ?" >}}
- High Dimensionality: 100s or 1000s of features; RF's feature sampling prevents a few features from masking others.
- Tabular Data (with Complex Interactions): Captures non-linear relationships without needing manual feature engineering.
- Noisy Datasets: The averaging process makes RF robust to outliers (especially if using min_samples_leaf).
- Automatic Validation: Need a quick estimate of generalization error without doing 10-fold CV (via OOB Error).
{{< /panel >}}

{{< video "https://youtu.be/Yodq6S8PtZQ" >}}
<br><br>
```End of Section```