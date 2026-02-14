---
title: Logistic Regularization
description: Logistic Regularization
date: 2026-02-14
weight: 3
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxdNo7m8fKMx-pseLizEoU6Z" 
"Logistic Regression | All Videos" >}}

<br>

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/logistic_regression/logistic_regularization/slide_01_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Binary Classification" >}}
- Binary Classification
{{< imgproc "images/machine_learning/supervised/logistic_regression/logistic_regularization/slide_02_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="What happens to the weights of Logistic Regression if the data is perfectly linearly separ" >}}
- The weights 🏋️‍♀️ will tend towards infinity, preventing a stable solution.
{{< /panel >}}

{{< panel color="red" title="Equations" >}}
- Distance of Point:
- Prediction:
- Log loss:
{{< /panel >}}

{{< panel color="navy" title="Problem 🦀" >}}
- The model tries to make probabilities exactly 0 or 1, but the sigmoid function never reaches these limits, leading to extreme weights 🏋️‍♀️ to push probabilities near the extremes.
{{< /panel >}}

{{< panel color="blue" title="Sigmoid Function" >}}
- Sigmoid Function
{{< imgproc "images/machine_learning/supervised/logistic_regression/logistic_regularization/slide_06_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Why is it a problem ?" >}}
- Overfitting: Model becomes perfectly accurate on training 🏃‍♂️data but fails to generalize, performing poorly on unseen data.
{{< /panel >}}

{{< panel color="green" title="Solution 🦉" >}}
- Regularization: Adds a penalty term to the loss function, discouraging weights 🏋️‍♀️ from becoming too large.
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/logistic_regression/logistic_regularization/slide_09_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="L1 Regularization" >}}
- L1 Regularization
\[min_{w}J_{reg}(w)=min_{w}-\sum_{i=1}^{n}[y_{i}log(y_{i}^{̂})+(1-y_{i})log(1-y_{i}^{̂})] \\ +\lambda_{1}.\sum_{j=1}^{n}|w_{j}|\]
{{< /panel >}}

{{< panel color="blue" title="L2 Regularization" >}}
- L2 Regularization
\[min_{w}J_{reg}(w)=min_{w}-\sum_{i=1}^{n}[y_{i}log(y_{i}^{̂})+(1-y_{i})log(1-y_{i}^{̂})] \\ +\lambda_{2}.\sum_{j=1}^{n}w_{j}^{2}\]
{{< /panel >}}

{{< video "https://youtu.be/Pmq6AH-MrSg" >}}
<br><br>
```End of Section```