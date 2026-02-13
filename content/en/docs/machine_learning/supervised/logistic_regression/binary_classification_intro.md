---
title: Binary Classification Intro
description: Binary Classification Intro
date: 2026-02-13
weight: 221
math: true
---

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/logistic_regression/binary_classification_intro/slide_01_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Binary Classification" >}}
- Binary Classification
{{< imgproc "images/machine_learning/supervised/logistic_regression/binary_classification_intro/slide_02_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Binary Classification with Linear Regression" >}}
- Binary Classification with Linear Regression
{{< imgproc "images/machine_learning/supervised/logistic_regression/binary_classification_intro/slide_03_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Goal 🎯" >}}
- Find the decision boundary, i.e,
- the equation of the separating hyperplane.
\[z=w^{T}x+w_{0}\]
{{< /panel >}}

{{< panel color="navy" title="Decision Boundary" >}}
- Value of tells us how far is the point from the decision boundary and on which side.
- Note: Weight 🏋️‍♀️ vector ‘w' is a normal to the hyperplane, pointing towards the positive class (y=1).
{{< /panel >}}

{{< panel color="blue" title="Distance of Points from Separating Hyperplane" >}}
- For points exactly on the decision boundary
- = 0
- Positive (+ve) labeled points
- > 0
- Negative (-ve) labeled points
- < 0
{{< /panel >}}

{{< panel color="orange" title="Missing Link 🔗" >}}
- The distance of a point from the hyperplane can range from
- to + .
- So we need a link 🔗 to transform the geometric distance to probability.
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/logistic_regression/binary_classification_intro/slide_08_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Sigmoid Function (a.k.a Logistic Function)" >}}
- Maps the output of a linear equation to a value between 0 and 1, allowing the result to be interpreted as a probability.
- If the distance ‘z' is large and positive, (High confidence).
- If the distance ‘z' is 0 , (Maximum uncertainty).
\[y^{̂}=\sigma(z)=\frac{1}{1+e^{-z}}\]
{{< /panel >}}

{{< panel color="navy" title="Sigmoid Function" >}}
- Sigmoid Function
{{< imgproc "images/machine_learning/supervised/logistic_regression/binary_classification_intro/slide_10_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="Why is it called Logistic Regression ?" >}}
- Because, we use the logistic (sigmoid) function as the ‘link function'🔗 to
- map 🗺️ the continuous output of the regression into a probability space.
{{< /panel >}}

{{< video "https://youtu.be/sinmvk9LQFU" >}}
<br><br>
```End of Section```