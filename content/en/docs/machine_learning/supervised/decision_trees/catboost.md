---
title: CatBoost
description: CatBoost
date: 2026-02-14
weight: 2496
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfYIFfsbRfK_M7gObPE_vwU" 
"Decision Tree | All Videos" >}}

<br>

{{< panel color="blue" title="CatBoost (Categorical Boosting)" >}}
- 👷 Developed by Yandex, this algorithm is specifically optimized for handling ‘categorical' features without requiring extensive preprocessing (like one-hot encoding).
{{< /panel >}}

{{< panel color="orange" title="Algorithmic Optimizations" >}}
- 🔵 Ordered Target Encoding
- 🔵 Symmetric(Oblivious) Trees
- 🔵 Handling Missing Values
{{< /panel >}}

{{< panel color="green" title="Ordered Target Encoding" >}}
- ❌ Standard target encoding can lead to target leakage, where the model uses information from the target variable during training that would not be available during inference.
- (model ‘cheats' by using a row's own label to predict itself).
- ✅ CatBoost calculates the target statistics (average target value) for each category based only on the history of previous training examples in a random permutation of the data.
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/catboost/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Symmetric (Oblivious) Trees" >}}
- 🦋 Uses symmetric decision trees by default.
- In symmetric trees, the same split condition is applied at each level across the entire tree structure.
- 🦘Does not walk down the tree using ‘if-else' logic, instead it evaluates decision conditions to create a binary index (e.g 101) and jumps directly to that leaf 🍃 in memory 🧠.
{{< /panel >}}

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/catboost/slide_06_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Handling Missing Values" >}}
- ⚙️ CatBoost offers built-in, intelligent handling of missing values and sparse features, which often require manual preprocessing in other GBDT libraries.
- 💡Treats ‘NaN' as a distinct category, reducing the need for imputation.
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/catboost/slide_08_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/h_cyPNctDbY" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/decision_trees/lightgbm" >}}">Previous: LightGBM</a></span>
<span style="margin-left:auto;"></span>
</div>
<!-- nav-panel:end -->

```End of Section```