---
title: Principal Component Analysis
description: Principal Component Analysis
date: 2025-10-26
weight: 5
math: true
---

{{% pageinfo %}}
In this section we will understand Principal Component Analysis.<br>
{{% /pageinfo %}}

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfJU-jKjugdLnNJj0GsT9kH" 
        "Linear Algebra for AI & ML | Full Course Videos">}}
<br>
{{< question >}}
In the diagram below, if we need to reduce the dimensionality of the data to 1, which feature should be dropped?
![](https://robosathi.com/images/pca_example_1.png)
{{< /question >}}

{{< answer >}}
Whenever we want to reduce the dimensionality of the data, we should aim to minimize information loss. <br>
Since, information = variance, we should drop the feature that brings least information, i.e, has least variance. <br>
Therefore, drop the feature 1.
{{</ answer >}}
<br>

{{< question >}}
What if the variance in both directions is same ? <br>
What should be done in this case? Check the diagram below.<br>
![](https://robosathi.com/images/pca_example_2.png)
{{< /question >}}

{{< answer >}}
Here, since the variance in both directions is approximately same, in order to capture maximum variance in data, <br>
we will rotate the f1-axis in the direction of maximum spread/variance of data, i.e, f1'-axis and then we can 
drop f2'-axis, which is **perpendicular** to f1'-axis.

{{</ answer >}}


<br>

{{< definition >}}
**Principal Component Analysis (PCA)** <br>
It is a **dimensionality reduction** technique that finds the direction of maximum variance in the data. <br>
*Note: Some **loss of information** will always be there in dimensionality reduction, because there will be some variability
in data along the direction that is dropped, and that will be lost.* <br><br>

**Goal:** <br>
Fundamental goal of PCA is to find the new set of **orthogonal axes**, called the **principal components**, onto which
the data can be projected, such that, the **variance** of the **projected** data is **maximum**. <br><br>

Say, we have data, \(D:X \in \mathbb{R}^{n \times d}\), <br>
**n** is the number of samples <br>
**d** is the number of features or dimensions of each data point. <br>
In order to find the directions of maximum variance in data, we will use the **covariance matrix** of data.<br>
**Covariance matrix** (**C**) summarizes the **spread** and **relationship** of the data in the original d-dimensional space. <br>
\(C_{d \times d} = \frac{1}{n-1}X^TX \), where \(X\) is the data matrix. <br>
*Note: (n-1) in the denominator is for unbiased estimation(Bessel's correction) of covariance matrix.* <br>
\(C_{ii}\) is the variance of the \(i^{th}\) feature. <br>
\(C_{ij}\) is the co-variance between feature \(i\) and feature \(j\). <br>
Trace(C) = Sum of diagonal elements of C = Total variance of data. <br>

**Algorithm:** <br>
1. Data is first mean centered, i.e, make mean = 0, i.e, subtract mean from each data point. <br>
\(X = X - \mu\) <br>
2. Compute the covariance matrix with mean centered data. <br>
\(C = \frac{1}{n-1}X^TX \), 
\( \quad
\Sigma = 
\begin{bmatrix}
var(f_1) & cov(f_1f_2) & \cdots & cov(f_1f_d) \\
cov(f_2f_1) & var(f_2) & \cdots & cov(f_2f_d) \\
\vdots & \vdots & \ddots & \vdots \\
cov(f_df_1) & cov(f_df_2) & \cdots & var(f_d)
\end{bmatrix}
_{\text{d x d}}
\)
3. Perform the eigen value decomposition of covariance matrix. <br>
\( C = Q \Lambda Q^T \) <br>
\(C\): Orthogonal matrix of eigen vectors of covariance matrix. <br>
_New rotated axes or prinicipal components of the data._ <br>
\(\Lambda\): Diagonal matrix of eigen values of covariance matrix. <br>
_Scaling of variance along new eigen basis._ <br>
*Note: Eigen values are sorted in descending order, i.e \( \lambda_1 \geq \lambda_2 \geq \cdots \geq \lambda_d \).* <br>

4. Project the data onto the new axes or principal components/directions. <br>
*Note: k < d = reduced dimensionality.* <br>
\(X_{new} = Z = XQ_k\) <br>
\(X_{new}\): Projected data or principal component score <br>

{{</ definition >}}
<br>

{{< question >}}
What is the variance of the projected data?
{{< /question >}}

{{< answer >}}
Variance of projected data is given by the eigen value of the co-variance matrix. <br>
Covariance of projected data = \((XQ)^TXQ \)
\[ 
\begin{aligned}
(XQ)^TXQ &= Q^TX^TXQ, \quad \text{ since, } (AB)^T = B^TA^T \\
&= Q^TQ \Lambda Q^TQ, \quad \text{ since, } C = X^TX = Q \Lambda Q^T \\
&= \Lambda, \quad \text{ since Q is orthogonal, }  Q^TQ = I \\
\end{aligned}
\]
Therefore, the diagonal matrix \( \Lambda \) captures the variance along every principal component direction. <br>
{{</ answer >}}

<br><br>
```End of Section```