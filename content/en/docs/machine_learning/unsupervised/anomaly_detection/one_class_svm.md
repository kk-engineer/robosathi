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

{{< panel color="green" title="Use Case (Novelty Detection)🐝" >}}
⭐️Only **one class** of data (normal, non-outlier) is **available** for training, making standard **supervised learning** 
models **impossible**.

e.g. Only normal observations are available for fraud detection, cyber attack, fault detection etc.
{{< /panel >}}

{{< panel color="cyan" title="Intuition" >}}
{{< imgproc "images/machine_learning/unsupervised/anomaly_detection/one_class_svm/slide_02_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Problem 🦀" >}}
🦂 The core problem is to build a model that can **distinguish** between '**normal**' and '**anomalous**' data 
when we only have examples of the '**normal**' class during training.

🦖 We need to find a **decision boundary** that is as compact as possible while still **encompassing** the **bulk** of the 
training data.
{{< /panel >}}

{{< panel color="green" title="Solution 🦉" >}}
💡Instead of finding a **hyperplane** that separates _two different classes_, we find a hyperplane that best **separates** the 
normal data points from the **origin** (0,0) in the feature space 🚀.
{{< /panel >}}

{{< panel color="blue" title="Goal 🎯" >}}
🦍 Define a **boundary** for a single class in **high-dimensional** space where data might be **non-linearly** distributed 
(e.g.'U' shape).

🦧 Use the **Kernel Trick** to project data into a higher-dimensional space and find a **hyperplane** 
that **separates** the data from the origin with the **maximum margin**.
{{< /panel >}}

{{< panel color="orange" title="One Class SVM" >}}
⭐️OC-SVM, as introduced by Bernhard Schölkopf et al., uses a hyperplane 'H' defined by a weight vector \(\mathbf{w}\)
and a bias term \(\rho\).

👉Solve the following optimization problem:
\[\min _{\mathbf{w},\xi _{i},\rho }\frac{1}{2}||\mathbf{w}||^{2}+\frac{1}{\nu N}\sum _{i=1}^{N}\xi _{i}-\rho \]

Subject to constraints:
\[\mathbf{w}\cdot \phi (\mathbf{x}_{i})\ge \rho -\xi _{i}\quad \text{and}\quad \xi _{i}\ge 0,\quad \text{for\ }i=1,\dots ,N\]
{{< /panel >}}

{{< panel color="grey" title="Explanation of Terms" >}}
- \(\mathbf{x}_{i}\): i-th training data point.
- \(\phi (\mathbf{x}_{i})\): RBF kernel function \(K(x, y) = \exp(-\gamma \|x-y\|^2)\) that maps the data into a higher-dimensional feature space, making it easier to separate from the origin.
- \(\mathbf{w}\): normal vector to the separating hyperplane.
- \(\rho\): scalar bias term that determines the offset of the hyperplane from the origin.
- \(\xi_i\): Slack variables that allow some data points to fall on the ‘wrong' side of the hyperplane (inside the anomalous region) to prevent overfitting.
- N: total number of training points.
- \(\nu\): hyper-parameter between 0 and 1. It acts as an upper bound on the fraction of outliers (training data points outside the boundary) and a lower bound on the fraction of support vectors.
{{< /panel >}}

{{< panel color="green" title="Working 🦇" >}}
-  \(\frac{1}{2}\|\mathbf{w}\|^{2}\): aims to **maximize** the **margin/compactness** of the region.
- \(\frac{1}{\nu N}\sum _{i=1}^{N}\xi _{i}-\rho\): **penalizes** points (outliers) that **violate** the *boundary constraints*.

After solving the optimization problem using standard **quadratic programming** techniques, 
we obtain the optimal \(\mathbf{w}^{*}\) and \(\rho ^{*}\).

For a new data point \(x_{new}\), decision function is:
\[f(\mathbf{x}_{\text{new}})=\text{sign}(\mathbf{w}^{*}\cdot \phi (\mathbf{x}_{\text{new}})-\rho ^{*})\]
- \(f(\mathbf{x}_{\text{new}})\ge 0\): normal point.
- \(f(\mathbf{x}_{\text{new}})< 0\): anomalous point (outlier).

{{< imgproc "images/machine_learning/unsupervised/anomaly_detection/one_class_svm/oc_svm_plot.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/E_P-IF40zrU" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/unsupervised/anomaly_detection/elliptic_envelope" >}}">Previous: Elliptic Envelope</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/unsupervised/anomaly_detection/local_outlier_factor" >}}">Next: Local Outlier Factor</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```