---
title: PCA
description: PCA
date: 2026-02-14
weight: 361
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxc3nlviPEjCfl5drLYy2aRF" 
"Dimensionality Reduction Techniques | All Videos" >}}

<br>

{{< panel color="green" title="Use Case 🐝" >}}
- **Data Compression**
- **Noise Reduction**
- **Feature Extraction**: Create a smaller set of meaningful features from a larger one.
- **Data Visualization**: Project high-dimensional data down to 2 or 3 dimensions.

**Assumption**: _Linear relationship between features_.
{{< /panel >}}

{{< panel color="cyan" title="Intuition 💡" >}}
💡_'Information = Variance'_

☁️ Imagine a cloud of points in 2D space. <br>
👀 Look for the direction (axis) along which the data is most '**spread out**'. <br>

🚀 By **projecting** data onto this axis, we retain the maximum amount of **information** (variance).

👉**Example 1: Var(Feature 1) < Var(Feature 1)**
{{< imgproc "images/machine_learning/unsupervised/dimensionality_reduction/pca/slide_03_01.png" Resize "1400x" >}}{{< /imgproc >}}

👉**Example 2: Red line shows the direction of maximum variance**
{{< imgproc "images/machine_learning/unsupervised/dimensionality_reduction/pca/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Principal Component Analysis" >}}
🧭 _Finds the direction of maximum variance in the data._

**Note**: Some _loss of information_ will always be there in dimensionality reduction, 
because there will be some variability in data along the direction that is dropped, and that will be **lost**.
{{< /panel >}}

{{< panel color="blue" title="Goal 🎯" >}}
Fundamental goal of PCA is to find the new set of **orthogonal axes**, called the **principal components**, 
onto which the data can be projected, such that, the **variance** of the projected data is **maximum**.
{{< /panel >}}

{{< panel color="grey" title="PCA as Optimization Problem 🦀" >}}
- PCA seeks a direction 🧭, represented by a unit vector \(\hat{u}\) onto which data can be projected to maximize variance.
- The projection of a mean centered data point \(x_i\) onto \(u\) is \(u^Tx_i\).
- The variance of these projections can be expressed as \(u^{T}\Sigma u\), where \(\Sigma\) is the data's covariance matrix.
{{< /panel >}}

{{< panel color="green" title="Why Variance of Projection is \(u^{T}\Sigma u\)?" >}}
- Data: Let \(X = \{x_{1},x_{2},\dots ,x_{n}\}\) is the mean centered (\(\bar{x} = 0\)) dataset.
- Projection of point \(x_i\) on \(u\) is \(z_i = u^Tx_i\)
- Variance of projected points (since \(\bar{x} = 0\)):
\[\text{Var}(z)=\frac{1}{n}\sum _{i=1}^{n}z_{i}^{2}=\frac{1}{n}\sum _{i=1}^{n}(x_{i}^{T}u)^{2}\]
- 💡Since,  \((x_{i}^{T}u)^{2} = (u^{T}x_{i})(x_{i}^{T}u)\) \( \implies\text{Var}(z)=u^{T}\left(\frac{1}{n}\sum _{i=1}^{n}x_{i}x_{i}^{T}\right)u\)
- 💡Since, Covariance Matrix, \(\Sigma = \left(\frac{1}{n}\sum _{i=1}^{n}x_{i}x_{i}^{T}\right)\)
- 👉 Therefore, \(\text{Var}(z)=u^{T}\Sigma u\)
{{< /panel >}}

{{< panel color="red" title="Constrained 🐣 Optimization" >}}
👉 To prevent infinite variance, PCA constrains \(u\) to be a unit vector (\(\|u\|=1\)).
\[\text{maximize\ }u^{T}\Sigma u, \quad \text{subject\ to\ }u^{T}u=1\]
**Note**: This constraint forces the optimization algorithm to focus **purely** on the _direction that maximizes variance_, 
rather than allowing it to _artificially inflate_ the variance by increasing the length of the vector.
{{< /panel >}}

{{< panel color="green" title="Constrained Optimization Solution 🦉" >}}
⏲️ Lagrangian function: \(L(u,\lambda )=u^{T}\Sigma u-\lambda (u^{T}u-1)\) <br>
🔦 To find \(u\) that maximizes above constrained optimization:
\[\frac{\partial L}{\partial u} = 0\]
\[\implies 2\Sigma u - 2\lambda u = 0 \implies \Sigma u = \lambda u\]
\[\because \frac{\partial }{\partial x}x^{T}Ax=2Ax \text{ for symmetric } A\]

💎 This is the standard **Eigenvalue Equation**. <br>
🧭 So, the optimal directions \(u\) are the eigenvectors of the covariance matrix \(\Sigma\). <br>

👉 To see which eigenvector maximizes variance, substitute the result back into the variance equation:
\[\text{Variance}=u^{T}\Sigma u=u^{T}(\lambda u)=\lambda (u^{T}u)=\lambda \]

🧭 Since the variance equals the eigenvalue \(\lambda\), the direction \(u\) that maximizes variance is the eigenvector associated with the largest eigenvalue.
{{< /panel >}}

{{< panel color="blue" title="PCA Algorithm ⚙️" >}}
1. **Center** the data: \(X = X - \mu\)
2. Compute the **Covariance Matrix**: \(\Sigma = \frac{1}{n-1} X^T X\)
3. Compute **Eigenvectors** and **Eigenvalues** of \(\Sigma\) .
4. **Sort** **eigenvalues** in **descending** order and select the **top** 'k' **eigenvectors**.
5. **Project** the original data onto the subspace: \(Z = X W_k\) where, \(W_{k}=[u_{1},u_{2},\dots ,u_{k}]\) , matrix 
formed by 'k' **eigenvectors** corresponding to 'k' largest **eigenvalues**.

{{< imgproc "images/machine_learning/unsupervised/dimensionality_reduction/pca/slide_13_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="grey" title="Drawbacks" >}}
- Cannot model non-linear relationships. 
- Sensitive to outliers.
{{< /panel >}}

{{< video "https://youtu.be/xJ2I0Rsu9i8" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/unsupervised/anomaly_detection/ransac" >}}">Previous: RANSAC</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/unsupervised/dimensionality_reduction/tsne" >}}">Next: t-SNE</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```