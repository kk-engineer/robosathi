---
title: Binary Classification
description: Binary Classification
date: 2026-02-14
weight: 1
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxdNo7m8fKMx-pseLizEoU6Z" 
"Logistic Regression | All Videos" >}}

<br>

{{< panel color="grey" title="Binary Classification" >}}
{{< imgproc "images/machine_learning/supervised/logistic_regression/binary_classification_intro/slide_02_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< question >}}
Why can't we use Linear Regression for binary classification ?
{{</ question >}}

{{< answer >}}
Linear regression tries to find the best fit line, 
but we want to find the line or **decision boundary** that clearly **separates** the two classes.
{{< imgproc "images/machine_learning/supervised/logistic_regression/binary_classification_intro/slide_03_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{</ answer >}}

{{< panel color="green" title="Goal 🎯" >}}
Find the decision boundary, i.e, the equation of the separating hyperplane.
\[z=w^{T}x+w_{0}\]
{{< /panel >}}

{{< panel color="navy" title="Decision Boundary" >}} 
Value of \(z = \mathbf{w^Tx} + w_0\) tells us how far is the point from the decision boundary and on which side. 

**Note**: Weight 🏋️‍♀️ vector ‘w' is **normal/perpendicular** to the hyperplane, pointing towards the positive class (y=1).
{{< /panel >}}

{{< panel color="blue" title="Distance of Points from Separating Hyperplane" >}}
- For points exactly on the decision boundary
 \[z = \mathbf{w^Tx} + w_0 = 0 \]
- **Positive** (+ve) labeled points
 \[ z = \mathbf{w^Tx} + w_0 > 0 \]
- **Negative** (-ve) labeled points
 \[ z = \mathbf{w^Tx} + w_0 < 0 \]
{{< /panel >}}

{{< panel color="red" title="Missing Link 🔗" >}}
The distance of a point from the hyperplane can range from \(-\infty\) to \(+ \infty\).
<br>So we need a link 🔗 to transform the geometric distance to probability.
{{< /panel >}}

{{< panel color="blue" title="Sigmoid Function (a.k.a Logistic Function)" >}}
Maps the output of a linear equation to a value between 0 and 1, allowing the result to be interpreted as a probability.
\[\hat{y} = \sigma(z) = \frac{1}{1 + e^{-z}}\]
- If the distance ‘z' is large and positive, \(\hat{y} \approx 1\) (High confidence).
- If the distance ‘z' is 0, \(\hat{y} = 0.5\) (Maximum uncertainty).

{{< imgproc "images/machine_learning/supervised/logistic_regression/binary_classification_intro/slide_10_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Why is it called Logistic Regression ?" >}}
Because, we use the logistic (sigmoid) function as the ‘link function'🔗 to map 🗺️ the continuous output of the regression into a probability space.
{{< /panel >}}

{{< video "https://youtu.be/sinmvk9LQFU" >}}
<br><br>
<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/logistic_regression/log_loss" >}}">Next: Log Loss</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```