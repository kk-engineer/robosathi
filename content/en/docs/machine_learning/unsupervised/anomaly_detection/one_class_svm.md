---
title: One Class SVM
description: One Class SVM
date: 2026-02-14
weight: 353
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxcQTrzlCVhQOtpvVbWsft3a" 
"Anomaly Detection | All Videos" >}}

<br>

{{< panel color="blue" title="Use Case (Novelty Detection)🐝" >}}
- Only one class of data (normal, non-outlier) is available for training, making standard supervised learning models impossible.
- e.g. Only normal observations are available for fraud detection, cyber attack, fault detection etc.
{{< /panel >}}

{{< panel color="orange" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/anomaly_detection/one_class_svm/slide_02_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Problem 🦀" >}}
- 🦂 The core problem is to build a model that can distinguish between ‘normal' and ‘anomalous' data when we only have examples of the ‘normal' class during training.
- 🦖 We need to find a decision boundary that is as compact as possible while still encompassing the bulk of the training data.
{{< /panel >}}

{{< panel color="red" title="Solution 🦉" >}}
- Instead of finding a hyperplane that separates two different classes, we find a hyperplane that best separates the normal data points from the origin (0,0) in the feature space 🚀.
{{< /panel >}}

{{< panel color="navy" title="Task 🎯" >}}
- 🦍 Define a boundary for a single class in high-dimensional space where data might be non-linearly distributed (e.g.'U' shape).
- 🦧 Use the Kernel Trick 🪄 to project data into a higher-dimensional space and find a hyperplane that separates the data from the origin with the maximum margin.
{{< /panel >}}

{{< panel color="blue" title="One Class SVM" >}}
- OC-SVM, as introduced by Bernhard Schölkopf et al., uses a hyperplane ‘H' defined by a weight vector and a bias term .
{{< /panel >}}

{{< panel color="orange" title="One Class SVM (Continued)" >}}
- Solve the following optimization problem:
- Subject to constraints:
\[min_{w,ξ_{i},ρ}\frac{1}{2}||w||^{2}+\frac{1}{νN}\sum_{i=1}^{N}ξ_{i}-ρ\]
\[w⋅ϕ(x_{i})≥ρ-ξ_{i}andξ_{i}≥0,fori=1,…,N\]
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/anomaly_detection/one_class_svm/slide_08_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Explanation of terms 🐒" >}}
- : i training data point.
- : RBF kernel function that maps the data into a higher-dimensional feature space, making it easier to separate from the origin.
- : normal vector to the separating hyperplane.
- : scalar bias term that determines the offset of the hyperplane from the origin.
- : Slack variables that allow some data points to fall on the ‘wrong' side of the hyperplane (inside the anomalous region) to prevent overfitting.
- : total number of training points.
- : hyper-parameter between 0 and 1. It acts as an upper bound on the fraction of outliers (training data points outside the boundary) and a lower bound on the fraction of support vectors.
{{< /panel >}}

{{< panel color="navy" title="Working 🦇" >}}
- : aims to maximize the margin/compactness of the region.
- : penalizes points (outliers) that violate the boundary constraints .
- After solving the optimization problem using standard quadratic programming techniques, we obtain the optimal and .
- For a new data point , decision function is:
- : normal point.
- : anomalous point (outlier).
\[f(x_{new})=sgn(w^{*}⋅ϕ(x_{new})-ρ^{*})\]
{{< /panel >}}

{{< video "https://youtu.be/E_P-IF40zrU" >}}
<br><br>
```End of Section```