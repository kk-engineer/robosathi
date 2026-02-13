---
title: XgBoost
description: XgBoost
date: 2026-02-13
weight: 2494
math: true
---

{{< panel color="blue" title="XgBoost (Extreme Gradient Boosting)" >}}
- An optimized and highly efficient implementation of gradient boosting.
- Widely used in competitive data science (like Kaggle) due to its speed and performance.
- Note: Research project developed by Tianqi Chen during his doctoral studies at the University of Washington.
{{< /panel >}}

{{< panel color="orange" title="Algorithmic Optimizations" >}}
- 🔵 Second order Derivative
- 🔵 Regularization
- 🔵 Sparsity-Aware Split Finding
{{< /panel >}}

{{< panel color="green" title="Second order Derivative" >}}
- Uses second derivative (Hessian), i.e, curvature, in addition to first derivative (gradient) to optimize the objective function more quickly and accurately than GBDT.
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/xgboost/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/xgboost/slide_05_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="Regularization" >}}
- Adds explicit regularization terms (L1/L2 on leaf weights and tree complexity) into the boosting objective, helping reduce over-fitting.
\[Objective=\sum_{i=1}^{n}L(y_{i},y^{̂}_{i})_{⏟}_{Training Loss}+\gammaT+\frac{1}{2}\lambda\sum_{j=1}^{T}w_{j}^{2}+\alpha\sum_{j=1}^{T}|w_{j}|_{⏟}_{Regularization (The Tax)}\]
{{< /panel >}}

{{< panel color="orange" title="Sparsity-Aware Split Finding" >}}
- Real-world data often contains many missing values or zero-entries (sparse data).
- XGBoost introduces a ‘default direction' for each node.
- During training, it learns the best direction (left or right) for missing values to go, making it significantly faster and more robust when dealing with sparse or missing data.
{{< /panel >}}

{{< video "https://youtu.be/0YhR50u26nk" >}}
<br><br>
```End of Section```