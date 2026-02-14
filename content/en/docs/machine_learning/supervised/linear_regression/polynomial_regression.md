---
title: Polynomial Regression
description: Polynomial Regression
date: 2026-02-14
weight: 7
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxde_X17sF7iN6rnQgFlBDC-" 
"Linear Regression | All Videos" >}}
<br>

{{< question >}}
What if our data is more complex than a straight line?
{{< /question >}}

{{< answer >}}
We can use a linear model to fit non-linear data.

Add powers of each feature as new features, then train a linear model on this extended set of features.
{{< imgproc "images/machine_learning/supervised/linear_regression/polynomial_regression/slide_02_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /answer >}}

{{< panel color="navy" title="Polynomial Regression" >}}
**Linear**: \(\hat{y_i} = w_0 + w_1x_{i_1} \)

**Polynomial (quadratic)**: \(\hat{y_i} = w_0 + w_1x_{i_1} + w_2x_{i_1}^2\)

**Polynomial (n-degree)**: \(\hat{y_i} = w_0 + w_1x_{i_1} + w_2x_{i_1}^2 +w_3x_{i_1}^3 + \dots + w_nx_{i_1}^n \)

Above polynomial can be re-written as linear equation:
\[\hat{y_i} = w_0 + w_1X_1 + w_2X_2 +w_3X_3 + \dots + w_nX_n \]
where, \(X_1 = x_{i_1}, X_2 = x_{i_1}^2, X_3 = x_{i_1}^3, \dots, X_n = x_{i_1}^n\)

=> the model is still **linear** w.r.t to its parameters/weights \(w_0, w_1, w_2, \dots , w_n \).

e.g: 
{{< imgproc "images/machine_learning/supervised/linear_regression/polynomial_regression/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}

{{< /panel >}}

{{< panel color="blue" title="Strategy to find Polynomial Features" >}}
- Fit a linear model to the data points.
- Plot the errors.
- If the variance of errors is too high, then try polynomial features.

**Note**: Detect and remove outliers from error distribution.
{{< /panel >}}

{{< panel color="charcoal" title="High Degree Polynomial Regression" >}}

{{< imgproc "images/machine_learning/supervised/linear_regression/polynomial_regression/slide_07_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Conclusion" >}}
- Polynomial model : Over-fitting ❌
- Linear model : Under-fitting ❌
- Quadratic model: Generalizes best ✅
{{< /panel >}}

{{< video "https://youtu.be/b7RYViDf9vk" >}}
<br><br>
```End of Section```
