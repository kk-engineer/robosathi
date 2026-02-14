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

{{< panel color="blue" title="Use Case 🐝" >}}
- Data Compression
- Noise Reduction
- Feature Extraction: Create a smaller set of meaningful features from a larger one.
- Data Visualization: Project 🚀 high-dimensional data down to 2 or 3 dimensions.
- Assumption: Linear relationship between features.
{{< /panel >}}

{{< panel color="orange" title="Intuition 💡" >}}
- ‘Information = Variance'
- ☁️ Imagine a cloud of points in 2D space.
- 👀 Look for the direction (axis) along which the data is most ‘spread out'.
- 🚀 By projecting data onto this axis, we retain the maximum amount of information (variance).
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/dimensionality_reduction/pca/slide_03_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/dimensionality_reduction/pca/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Principal Component Analysis" >}}
- 🧭 Finds the direction of maximum variance in the data.
- Note: Some loss of information will always be there in dimensionality reduction, because there will be some variability in data along the direction that is dropped, and that will be lost.
{{< /panel >}}

{{< panel color="blue" title="Goal 🎯" >}}
- Fundamental goal of PCA is to find the new set of orthogonal axes, called the principal components, onto which the data can be projected 🚀, such that, the variance of the projected data is maximum.
{{< /panel >}}

{{< panel color="orange" title="PCA as Optimization Problem 🦀" >}}
- PCA seeks a direction 🧭, represented by a unit vector onto which data can be projected to maximize variance.
- The projection of a mean centered data point onto is .
- The variance of these projections can be expressed as , where is the data's covariance matrix.
{{< /panel >}}

{{< panel color="green" title="Why Variance of Projection is ?" >}}
- Data: Let is the mean centered () dataset.
- Projection of point on is
- Variance of projected points (since ):💡Since,
- 💡Since, Covariance Matrix,
- 👉 Therefore,
{{< /panel >}}

{{< panel color="red" title="Constrained 🐣 Optimization" >}}
- To prevent infinite variance, PCA constrains to be a unit vector ().
- Note: This constraint forces the optimization algorithm to focus purely on the direction that maximizes variance, rather than allowing it to artificially inflate the variance by increasing the length of the vector.
\[maximizeu^{T}\Sigmau,subject tou^{T}u=1\]
{{< /panel >}}

{{< panel color="navy" title="Constrained Optimization Solution 🦉" >}}
- ⏲️Lagrangian function:
- 🔦 To find that maximizes above constrained optimization:
- Since,
- 💎 This is the standard Eigenvalue Equation.
- 🧭 So, the optimal directions are the eigenvectors of the covariance matrix .
{{< /panel >}}

{{< panel color="blue" title="🦣 Maximum Variance" >}}
- 👁️ To see which eigenvector maximizes variance, substitute the result back into the variance equation:
- 🧭 Since the variance equals the eigenvalue , the direction that maximizes variance is the eigenvector associated with the largest eigenvalue.
\[Variance=u^{T}\Sigmau=u^{T}(\lambdau)=\lambda(u^{T}u)=\lambda\]
{{< /panel >}}

{{< panel color="orange" title="PCA Algorithm ⚙️" >}}
- Center the data:
- Compute the Covariance Matrix:
- Compute Eigenvectors and Eigenvalues of .
- Sort eigenvalues in descending order and select the top eigenvectors.
- Project the original data onto the subspace: where, , matrix formed by eigenvectors corresponding to largest eigenvalues.
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/dimensionality_reduction/pca/slide_13_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/xJ2I0Rsu9i8" >}}
<br><br>
```End of Section```