---
title: Regularization
description: Regularization in Logistic Regression
date: 2026-02-14
weight: 3
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxdNo7m8fKMx-pseLizEoU6Z" 
"Logistic Regression | All Videos" >}}

<br>

{{< question >}}
What happens to the weights of Logistic Regression if the data is perfectly linearly separable?
{{</ question >}}

{{< answer >}}
The weights 🏋️‍♀️ will tend towards infinity, preventing a stable solution.

The model tries to make probabilities exactly 0 or 1, but the sigmoid function never reaches these limits, 
leading to extreme weights 🏋️‍♀️ to push  probabilities near the extremes.

- **Distance of Point**: \(z = \mathbf{w^Tx} + w_0\)
- **Prediction**: \(\hat{y} = \sigma(z) = \frac{1}{1 + e^{-z}}\)
- **Log loss**: \(-[y_ilog(\hat{y_i}) + (1-y_i)log(1-\hat{y_i})] \)

{{< imgproc "images/machine_learning/supervised/logistic_regression/logistic_regularization/slide_06_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{</ answer >}}

{{< panel color="red" title="Why is it a problem ?" >}}
**Overfitting**: <br>
Model becomes perfectly accurate on training 🏃‍♂️data but **fails** to **generalize**, performing poorly on unseen data.
{{< /panel >}}

{{< panel color="green" title="Solution 🦉" >}}
**Regularization**: <br>
Adds a penalty term to the loss function, **discouraging** weights 🏋️‍♀️ from _becoming too large_.
{{< /panel >}}

{{< panel color="navy" title="L1 Regularization" >}}
\[ 
\begin{align*}
\underset{w}{\mathrm{min}}\ J_{reg}(w) = \underset{w}{\mathrm{min}}\ 
& \underbrace{- \sum_{i=1}^n [y_i\log(\hat{y_i}) + (1-y_i)\log(1-\hat{y_i})]}_{\text{Log Loss}} \\
& \underbrace{+ \lambda_1 \sum_{j=1}^n |w_j|}_{\text{L1 Regularization}} \\
\end{align*}
\]
{{< /panel >}}

{{< panel color="blue" title="L2 Regularization" >}}
\[ 
\begin{align*}
\underset{w}{\mathrm{min}}\ J_{reg}(w) = \underset{w}{\mathrm{min}}\ 
& \underbrace{- \sum_{i=1}^n [y_i\log(\hat{y_i}) + (1-y_i)\log(1-\hat{y_i})]}_{\text{Log Loss}} \\
& \underbrace{+ \lambda_2 \sum_{j=1}^n w_j^2}_{\text{L2 Regularization}} \\
\end{align*}
\]

[Read more about Regularization]({{<ref  "/docs/machine_learning/supervised/linear_regression/regularization"  >}})
{{< /panel >}}

{{< video "https://youtu.be/Pmq6AH-MrSg" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/logistic_regression/log_loss" >}}">Previous: Log Loss</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/logistic_regression/log_odds" >}}">Next: Log Odds</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```