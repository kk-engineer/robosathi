---
title: Decision Trees For Regression
description: Decision Trees For Regression
date: 2026-02-14
weight: 3
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfYIFfsbRfK_M7gObPE_vwU" 
"Decision Tree | All Videos" >}}

<br>

{{< panel color="blue" title="Decision Trees for Regression" >}}
Decision Trees can also be used for Regression tasks but using a different metrics.

⭐️Metric:
- Mean Squared Error (MSE)
- Mean Absolute Error (MAE)

👉Say we have a following dataset, that we need to fit using decision trees:
{{< imgproc "images/machine_learning/supervised/decision_trees/decision_trees_for_regression/slide_02_01.tif" Resize "1400x" >}}{{< /imgproc >}}

👉Decision trees try to find the decision splits, building step functions that approximate the actual curve,
as shown below:
{{< imgproc "images/machine_learning/supervised/decision_trees/decision_trees_for_regression/slide_03_01.tif" Resize "1400x" >}}{{< /imgproc >}}

👉Internally the decision tree (if else ladder) looks like below:
{{< imgproc "images/machine_learning/supervised/decision_trees/decision_trees_for_regression/slide_04_01.tif" Resize "1400x" >}}{{< /imgproc >}}

{{< /panel >}}

{{< question >}}
Can we use decision trees for all kinds of regression?
Or is there any limitation ?
{{< /question >}}

{{< answer >}}
Decision trees **cannot** predict values outside the range of the training data, i.e, **extrapolation**.

Let's understand the **interpolation** and **extrapolation** cases one by one.
{{< /answer >}}

{{< panel color="navy" title="Interpolation ✅" >}}
⭐️Predicting values **within** the range of features and targets observed during training 🏃‍♂️.
- Trees capture discontinuities perfectly, because they are piece-wise constant.
- They do not try to force a smooth line where a ‘jump' exists in reality.

e.g: Predicting a house 🏡 price 💰 for a 3-BHK home when you have seen 2-BHK and 4-BHK homes in that same neighborhood.
{{< /panel >}}

{{< panel color="blue" title="Extrapolation ❌" >}}
⭐️Predicting values **outside** the range of training 🏃‍♂️data.

**Problem**: <br>
Because a tree outputs the mean of training 🏃‍♂️ samples in a leaf, it cannot predict a value higher than the 
**highest** ‘y' it saw during training 🏃‍♂️.
- **Flat-Line**: Once a feature ‘X' goes beyond the training boundaries, the tree falls into the same ‘last' leaf forever.

e.g: Predicting the price 💰 of a house 🏡 in 2026 based on data from 2010 to 2025.
{{< /panel >}}

{{< video "https://youtu.be/HPaxpAJfyGk" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/decision_trees/purity_metrics" >}}">Previous: Purity Metrics</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/decision_trees/regularization" >}}">Next: Regularization</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```