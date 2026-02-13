---
title: Log Loss
description: Log Loss
date: 2026-02-13
weight: 222
math: true
---

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/logistic_regression/log_loss/slide_01_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Binary Classification" >}}
- Binary Classification
{{< imgproc "images/machine_learning/supervised/logistic_regression/log_loss/slide_02_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Log Loss" >}}
- Log Loss =
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/logistic_regression/log_loss/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Cost Function" >}}
- We need to find the weights 🏋️‍♀️ ‘w' that minimize the cost 💵 function.
\[J(w)=-\frac{1}{n}\sum[y_{i}log(y_{i}^{̂})+(1-y_{i})log(1-y_{i}^{̂})]\]
{{< /panel >}}

{{< panel color="blue" title="Gradient Descent" >}}
- Gradient Descent
\[w_{new}=w_{old}-η.\frac{∂J(w)}{∂w_{old}}\]
{{< /panel >}}

{{< panel color="orange" title="Gradient Calculation" >}}
- Chain Rule:
- Cost Function:
- Prediction:
- Distance of Point:
\[\frac{∂J(w)}{∂w}=\frac{∂J(w)}{∂y^{̂}}.\frac{∂y^{̂}}{∂z}.\frac{∂z}{∂w}\]
{{< /panel >}}

{{< panel color="green" title="Cost 💰Function Derivative" >}}
- How loss changes w.r.t prediction ?
\[J(w)=-\sum[ylog(y^{̂})+(1-y)log(1-y^{̂})]\]
\[\frac{∂J(w)}{∂y^{̂}}=-[\frac{y}{y^{̂}}-\frac{1-y}{1-y^{̂}}] \\ =-[\frac{y-yy^{̂}-y^{̂}+yy^{̂}}{y^{̂}(1-y^{̂})}] \\ ∴\frac{∂J(w)}{∂y^{̂}}=\frac{y^{̂}-y}{y^{̂}(1-y^{̂})}\]
{{< /panel >}}

{{< panel color="red" title="Prediction Derivative" >}}
- How prediction changes w.r.t distance ?
\[y^{̂}=\sigma(z)=\frac{1}{1+e^{-z}}\]
\[\frac{∂y^{̂}}{∂z}=\frac{∂\sigma(z)}{∂z}=\sigma^{′}(z) \\ \sigma^{′}(z)=\sigma(z)(1-\sigma(z)) \\ ∴\frac{∂y^{̂}}{∂z}=y^{̂}(1-y^{̂})\]
{{< /panel >}}

{{< panel color="navy" title="Sigmoid Derivative" >}}
- Sigmoid Derivative
\[\sigma(z)=\frac{1}{1+e^{-z}}\]
\[Letu=1+e^{-z} \\ ⟹\sigma(z)=\frac{1}{u},so, \\ \frac{∂\sigma(z)}{∂z}=\frac{∂\sigma(z)}{∂u}.\frac{∂u}{∂z} \\ \frac{∂\sigma(z)}{∂u}=-\frac{1}{u^{2}}=-\frac{1}{(1+e^{-z})^{2}} \\ and\frac{∂(1+e^{-z})}{∂z}=-e^{-z}\]
{{< /panel >}}

{{< panel color="blue" title="Sigmoid Derivative (continued…)" >}}
- Sigmoid Derivative (continued…)
\[\sigma(z)=\frac{1}{1+e^{-z}}\]
\[\frac{∂\sigma(z)}{∂z}=\frac{∂\sigma(z)}{∂u}.\frac{∂u}{∂z} \\ \frac{∂\sigma(z)}{∂z}=-\frac{1}{(1+e^{-z})^{2}}.-e^{-z}=\frac{e^{-z}}{(1+e^{-z})^{2}} \\ 1-\sigma(z)=1-\frac{1}{1+e^{-z}}=\frac{e^{-z}}{1+e^{-z}} \\ \frac{∂\sigma(z)}{∂z}=\frac{1}{1+e^{-z}}.\frac{e^{-z}}{1+e^{-z}} \\ ∴\frac{∂\sigma(z)}{∂z}=\sigma(z).(1-\sigma(z))\]
{{< /panel >}}

{{< panel color="orange" title="Distance Derivative" >}}
- How distance changes w.r.t weight 🏋️‍♀️ ?
- ,
\[z=w^{T}x+w_{0}\]
{{< /panel >}}

{{< panel color="green" title="Gradient Calculation (combined)" >}}
- Chain Rule:
{{< /panel >}}

{{< panel color="red" title="Cost 💰Function Derivative" >}}
- Gradient = Error x Input
- Error = : how far is prediction from the truth?
- Input = : contribution of specific feature to the error.
\[\frac{∂J(w)}{∂w}=\sum(y_{i}^{̂}-y_{i}).x_{i}\]
{{< /panel >}}

{{< panel color="navy" title="Gradient Descent (update)" >}}
- Gradient Descent (update)
\[w_{new}=w_{old}-η.\sum_{i=1}^{n}(y_{i}^{̂}-y_{i}).x_{i}\]
{{< /panel >}}

{{< panel color="blue" title="Why MSE can NOT be used as Loss Function?" >}}
- Mean Squared Error (MSE) can not be used to quantify error/loss in binary classification because:
- Convexity : MSE combined with Sigmoid is non-convex, so, Gradient Descent can get trapped in local minima.
- Penalty: MSE does not appropriately penalize mis-classifications in binary classification.
{{< /panel >}}

{{< panel color="orange" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/logistic_regression/log_loss/slide_17_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/logistic_regression/log_loss/slide_18_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/zCBnS3XT61Y" >}}
<br><br>
```End of Section```