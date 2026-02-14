---
title: Decision Trees For Regression
description: Decision Trees For Regression
date: 2026-02-14
weight: 243
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfYIFfsbRfK_M7gObPE_vwU" 
"Decision Tree | All Videos" >}}

<br>

{{< panel color="blue" title="Decision Trees can also be used for Regression tasks." >}}
- Metric:
- Mean Squared Error (MSE)
- Mean Absolute Error (MAE)
{{< /panel >}}

{{< panel color="orange" title="Regression Dataset 📈" >}}
- Regression Dataset 📈
{{< imgproc "images/machine_learning/supervised/decision_trees/decision_trees_for_regression/slide_02_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Decision Tree Fit (Step Function)" >}}
- Decision Tree Fit (Step Function)
{{< imgproc "images/machine_learning/supervised/decision_trees/decision_trees_for_regression/slide_03_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Decision Tree If Else (Split)" >}}
- Decision Tree If Else (Split)
{{< imgproc "images/machine_learning/supervised/decision_trees/decision_trees_for_regression/slide_04_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Interpolation ✅" >}}
- Predicting values within the range of features and targets observed during training 🏃‍♂️.
- Trees capture discontinuities perfectly, because they are piece-wise constant.
- They do not try to force a smooth line where a ‘jump' exists in reality.
- e.g: Predicting a house 🏡 price 💰 for a 3-BHK home when you have seen 2-BHK and 4-BHK homes in that same neighborhood.
{{< /panel >}}

{{< panel color="blue" title="Extrapolation ❌" >}}
- Predicting values outside the range of training 🏃‍♂️data.
- Problem:
- Because a tree outputs the mean of training 🏃‍♂️ samples in a leaf, it cannot predict a value higher than the highest ‘y' it saw during training 🏃‍♂️.
- Flat-Line: Once a feature ‘X' goes beyond the training boundaries, the tree falls into the same ‘last' leaf forever.
- e.g Predicting the price 💰 of a house 🏡 in 2026 based on data from 2010–2025.
{{< /panel >}}

{{< video "https://youtu.be/HPaxpAJfyGk" >}}
<br><br>
```End of Section```