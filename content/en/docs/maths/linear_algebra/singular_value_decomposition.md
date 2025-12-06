---
title: Singular Value Decomposition
description: Singular Value Decomposition
date: 2025-10-26
weight: 6
math: true
---


{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfJU-jKjugdLnNJj0GsT9kH" 
        "Linear Algebra for AI & ML | Full Course Videos">}}
<br>
{{< definition >}}
**Singular Value Decomposition (SVD):** <br>
It decomposes any matrix into a rotation, a scaling (based on singular values), and another rotation. <br>
It is a generalization of the eigen value decomposition(for square matrix) to rectangular matrices. <br>
Any rectangular matrix can be decomposed into a product of three matrices using SVD, as follows: <br>
\[\mathbf{A}_{m \times n} = \mathbf{U}_{m \times m}  \mathbf{\Sigma}_{m \times n}  \mathbf{V}^T_{n \times n} \] <br>
\(\mathbf{U}\): Set of orthonormal eigen vectors of \(\mathbf{AA^T}_{m \times m} \) <br>
\(\mathbf{V}\): Set of orthonormal eigen vectors of \(\mathbf{A^TA}_{n \times n} \) <br>
\(\mathbf{\Sigma}\): Rectangular diagonal matrix, whose diagonal values are called **singular** values;
**square root** of **non-zero** **eigen** values of \(\mathbf{AA^T}\). <br>

*Note: The number of non-zero diagonal entries in \(\mathbf{\Sigma}\) = rank of matrix \(\mathbf{A}\).* <br>
***Rank (r)**: Number of linearly independent rows or columns of a matrix.*

\( \Sigma = \begin{bmatrix}
\sigma_{11} & 0 & \cdots & 0 \\
\\
0 & \sigma_{22} & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
\cdots & \cdots & \sigma_{rr} & \vdots \\
0 & 0 & \cdots & 0
\end{bmatrix}
\),
such that, \(\sigma_{11} \geq \sigma_{22} \geq \cdots \geq \sigma_{rr}\), r = rank of \(\mathbf{A}\).
<br><br>

Singular value decomposition, thus refers to the set of scale factors \(\mathbf{\Sigma}\) that are fundamentally
linked to the matrix's **singularity** and **rank**.
<br>
![](https://robosathi.com/images/singular_value_decomposition.png)
<br>

{{</ definition >}}
<br>
{{< alert color="secondary" title="Properties of Singular Values" >}}
1. All singular values are non-negative.
2. Square roots of the eigen values of the matrix \(\mathbf{AA^T}\) or \(\mathbf{A^TA}\).
3. Arranged in non-decreasing order.
\(\sigma_{11} \geq \sigma_{22} \geq \cdots \geq \sigma_{rr} \ge 0\) <br>

*Note: If rank of matrix < dimensions, then 1 or more of the singular values are zero, i.e, dimension collapse.*
{{< /alert >}}

![](https://robosathi.com/images/svd_example_1.png)
<br>

{{< question >}}
Suppose a satellite takes picture of objects in space and sends them to earth. Size of each picture = 1000x1000 pixels. <br>
How can we compress the image size to save satellite bandwidth?
{{</ question >}}

{{< answer >}}
We can perform singular value decomposition on the image matrix and find the minimum number of top ranks required to <br>
to successfully reconstruct the original image back. <br>
Say we performed the SVD on the image matrix and found that top 20 rank singular values, out of 1000, are sufficient to 
tell what the picture is about. <br>

\(\mathbf{A} = \mathbf{U}  \mathbf{\Sigma} \mathbf{V}^T \) 
\( = u_1 \sigma_1 v_1^T + u_2 \sigma_2 v_2^T + \cdots + u_r \sigma_r v_r^T \), where \(r = 20\) <br>
A = sum of 'r=20' matrices of rank=1. <br>
Now, we need to send only the \(u_i, \sigma_i , v_i\) values for i=20, i.e, top 20 ranks to earth <br>
and then do the calculation to reconstruct the approximation of original image. <br>
\(\mathbf{u} = \begin{bmatrix} u_1 \\ u_2 \\ \vdots \\ u_{1000} \end{bmatrix}\)
\(\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_{1000} \end{bmatrix}\)

So, we need to send data corresponding to 20 (rank=1) matrices, i.e, \(u_i, v_i ~and~  \sigma_i\) = (1000 + 1000 + 1)*20
= 2000*20 pixels (approx)

Therefore, compression rate = (2000*20)/(10^6) = 1/25 <br>
{{</ answer >}}

<br>

{{< alert color="secondary" title="Applications of SVD" >}}
1. **Image compression**.
2. **Low Rank Approximation**: Compress data by keeping top rank singular values. 
3. **Noise Reduction**: Capture main structure, ignore small singular values.
4. **Recommendation Systems**: Decompose user-item rating matrix to discover underlying user preferences and make recommendations.
{{</ alert >}}
<br>

{{< definition >}}
**Low Rank Approximation:** <br>
The process of **approximating** any matrix by a matrix of a lower rank, using singular value decomposition. <br>
It is used for data compression. <br>

Any matrix A of rank 'r' can be written as sum of rank=1 outer products:
\[
\mathbf{A} = \mathbf{U}  \mathbf{\Sigma} \mathbf{V}^T = \sum_{i=1}^{r} \sigma_i \mathbf{u}_i \mathbf{v}_i^T
\]
\( \mathbf{u}_i : i^{th}\) column vector of \(\mathbf{U}\) <br>
\( \mathbf{v}_i^T : i^{th}\) column vector of \(\mathbf{V}^T\) <br>
\( \sigma_i : i^{th}\) singular value, i.e, diagonal entry of \(\mathbf{\Sigma}\) <br><br>

Since, the singular values are arranged from largest to smallest, i.e, \(\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_r\), <br>
The top ranks capture the vast majority of the information or variance in the matrix. <br> <br>

So, in order to get the best rank-k approximation of the matrix, 
we simply truncate the summation after the k'th term. <br>
\[
\mathbf{A_k} = \mathbf{U}  \mathbf{\Sigma_k} \mathbf{V}^T = \sum_{i=1}^{k} \sigma_i \mathbf{u}_i \mathbf{v}_i^T
\]

The approximation \(\mathbf{A_k}\) is called the **low rank approximation** of \(\mathbf{A}\), 
which is achieved by keeping only the largest singular values and corresponding vectors. <br>

**Applications:** <br>
1. Image compression
2. Data compression, such as, LoRA (Low Rank Adaptation)
{{</ definition >}}
<br>
{{< video "https://www.youtube.com/watch?v=1dQap9e_tkg&t=1s" >}}
<br><br>
```End of Section```