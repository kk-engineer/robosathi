---
title: Vector Norms
description: Vector & Matrix Norms
date: 2025-10-29
weight: 8
math: true
---

{{% pageinfo %}}
In this section we will understand about Vector Norms.<br>
{{% /pageinfo %}}

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfJU-jKjugdLnNJj0GsT9kH" 
        "Linear Algebra for AI & ML | Full Course Videos">}}
<br>
{{< definition >}}
**Vector Norm:** <br>
It is a measure of the size of a vector or distance from the origin. <br>
Vector norm is a function that maps a vector to a real number, i.e, \({\| \cdot \|} : \mathbb{R}^n \rightarrow \mathbb{R}\).
<br>
Vector Norm should satisfy following 3 properties: <br>
1. **Non-Negativity:** <br>
Norm is always greater than or equal to zero, <br>
\( {\| x \|} \ge 0\), and \( {\| x \|} = 0\), if and only if \(\vec{x} = \vec{0}\). <br>
2. **Homogeneity (or Scaling):** <br>
\( {\| \alpha x \|} = |\alpha| {\| x \|} \). <br>
3. **Triangle Inequality:** <br>
\( {\| x + y \|} \le {\| x \|} + {\| y \|} \).
<br>

**P-Norm:** <br>
It is a generalised form of most common family of vector norms. <br>
It is defined as: <br>
\[ {\| x \|}_p = (\sum_{i=1}^n |x_i|^p)^{1/p} \] <br>
We can change the value of \(p\) to get different norms.

**L1 Norm:** <br>
It is the sum of absolute values of all the elements of a vector; also known as **Manhattan** distance. <br>
**p=1**: <br>
\[ {\| x \|_1} = \sum_{i=1}^n |x_i| = |x_1| + |x_2| + ... + |x_n| \]

**L2 Norm:** <br>
It is the square root of the sum of squares of all the elements of a vector; also known as **Euclidean** distance. <br>
**p=2**: <br>
\[ {\| x \|_2} =  (\sum_{i=1}^n x_i^2)^{1/2} = \sqrt{x_1^2 + x_2^2 + ... + x_n^2} \]

**L-\(infty\) Norm:** <br>
It is the maximum of absolute values of all the elements of a vector; also known as **Chebyshev** distance. <br>
**p=\infty**: <br>
\[ {\| x \|_\infty} = \max |x_i| = \lim_{p \to \infty}  (\sum_{i=1}^n |x_i|^p)^{1/p}\]
{{</ definition >}}
For example: 
1. Let, vector \(\mathbf{x} = \begin{bmatrix} 3 \\  \\ -4 \end{bmatrix}\), then <br>
\({\| x \|_1} = |3| + |-4| = 7\)
<br>
\({\| x \|_2} = \sqrt{3^2 + (-4)^2} = \sqrt{25} = 5\)
<br>
\({\| x \|_\infty} = max(|3|, |-4|) = max(3, 4) = 4\)
<br><br>

{{< definition >}}
**Matrix Norm:** <br>
It is a function that assigns non-negative size or magnitude to a matrix. <br>
Matrix Norm is a function that maps a matrix to a non-negative real number, i.e, \({\| \cdot \|} : \mathbb{R}^{m \times n} \rightarrow \mathbb{R}\)
<br>
It should satisfy following 3 properties: <br>
1. **Non-Negativity:** <br>
Norm is always greater than or equal to zero, <br>
\( {\| x \|} \ge 0\), and \( {\| x \|} = 0\), if and only if \(\vec{x} = \vec{0}\). <br>
2. **Homogeneity (or Scaling):** <br>
\( {\| \alpha x \|} = |\alpha| {\| x \|} \). <br>
3. **Triangle Inequality:** <br>
\( {\| x + y \|} \le {\| x \|} + {\| y \|} \).
<br>

There are 2 types of matrix norms: <br>
1. Element wise norms, e.g,, Frobenius norm
2. Vector induced norms Frobenius Norm: <br>
<br><br>

**Frobenius Norm:** <br>
It is equivalent to the Euclidean norm of the matrix if it were flattened into a single vector. <br>
If A is a matrix of size \(m \times n\), then, Frobenius norm is defined as: <br>
\[ {\| A \|_F} = \sqrt{\sum_{i=1}^m \sum_{j=1}^n a_{ij}^2} = \sqrt{Trace(A^TA)} = \sqrt{\sum_i \sigma_i^2}\]
<br>
\(\sigma_i\) is the \(i\)th singular value of matrix A.
<br><br>

**Vector Induced Norm:** <br>
It measures the maximum stretching a matrix can apply when multiplied with a vector, <br>
where the vector has a unit length under the chosen vector norm. <br>

**Matrix Induced by Vector P-Norm:** <br>
**P-Norm**: <br>
\[ {\| A \|_p} = \max_{{\| x \|_p} =1} \frac{\| Ax \|_p}{\| x \|_p} \]
<br>
**P=1 Norm**: <br>
\[ {\| A \|_1} = \max_{1 \le j \le n } \sum_{i=1}^m |a_{ij}| =
\text{ max absolute column sum } \]

**P=\(\infty\) Norm**: <br>
\[ {\| A \|_\infty} = \max_{1 \le i \le m } \sum_{j=1}^n |a_{ij}| =
\text{ max absolute row sum } \]

**P=2 Norm**: <br>
Also called **Spectral** norm, i.e, maximum factor by which the matrix can stretch a unit vector in **Euclidean** norm. <br>
\[ {\| A \|_2} = \sigma_{max}(A) =
\text{ max singular value of matrix } \]

{{</ definition >}}

For example:
1. Let, matrix \(\mathbf{A} = \begin{bmatrix} a_{11} & a_{12} \\ \\ a_{21} & a_{22} \end{bmatrix}\), then find Frobenius norm.<br><br>
\({\| A \|_F} = \sqrt{a_{11}^2 +  a_{12}^2 + a_{21}^2 +  a_{22}^2}\)
<br><br>
\(\mathbf{A}^T = \begin{bmatrix} a_{11} & a_{22} \\ \\ a_{12} & a_{22} \end{bmatrix}\)
<br><br>
=> \(\mathbf{A^TA} = 
\begin{bmatrix} a_{11} & a_{22} \\ \\ a_{12} & a_{22} \end{bmatrix}
\begin{bmatrix} a_{11} & a_{12} \\ \\ a_{21} & a_{22} \end{bmatrix}
= \begin{bmatrix} a_{11}^2 + a_{12}^2 & a_{11}.a_{21} + a_{12}.a_{22} \\ \\ a_{21}.a_{11} + a_{22}.a_{12} & a_{21}^2 + a_{22}^2 \end{bmatrix}
\)
<br><br>
Therefore, \(Trace(\mathbf{A^TA}) = a_{11}^2 + a_{12}^2 + a_{21}^2 + a_{22}^2\)
<br><br>
=> \({\| A \|_F} = \sqrt{Trace(A^TA)} = \sqrt{a_{11}^2 +  a_{12}^2 + a_{21}^2 +  a_{22}^2}\)
<br><br>

2. Let, matrix \(\mathbf{A} = \begin{bmatrix} 1 & -2 & 3 \\ \\ 4 & 5 & -6 \end{bmatrix}\), then <br><br>

Column 1 absolute value sum = |1|+|4| = 5 <br>
Column 2 absolute value sum = |-2|+|5|= 7 <br>
Column 3 absolute value sum = |3|+|-6|= 9 <br>

Row 1 absolute value sum = |1|+|-2|+|3| = 6 <br>
Row 2 absolute value sum = |4|+|5|+|-6| = 15 <br>

\({\| A \|_1} = max(5,7,9) = 9\) = max column absolute value sum. <br>
\({\| A \|_\infty} = max(6,15) = 15\) = max row absolute value sum.

3. Let, matrix \(\mathbf{A} = \begin{bmatrix} 2 & 1 \\ \\ 1 & 2 \end{bmatrix}\), then find spectral norm. <br>
Spectral norm can be found using the singular value decomposition, in order to get the largest singular value. <br>
\({\| A \|_2} = \sigma_{max}(A) \) <br>

\(\mathbf{A} = \mathbf{U \Sigma V^T} \) , where
\(\mathbf{U} = \mathbf{AA^T} \),
\(\mathbf{V} = \mathbf{A^TA} \)
<br><br>
Let's find the largest eigen value of \(\mathbf{A^TA} \), square root of which will give the largest singular value of \(\mathbf{A}\). <br>
<br>
\( \mathbf{V} = \mathbf{A^TA} = 
\begin{bmatrix} 2 & 1 \\ \\ 1 & 2 \end{bmatrix}
\begin{bmatrix} 2 & 1 \\ \\ 1 & 2 \end{bmatrix}
= \begin{bmatrix} 5 & 4 \\ \\ 4 & 5 \end{bmatrix}
\)
<br><br>
Now, lets find the eigen values of the above matrix **V**: <br>
\(det(V-\lambda I) = 0 \) <br><br>
=> \(
det\begin{bmatrix} 5 - \lambda & 4 \\ \\ 4 & 5- \lambda \end{bmatrix} = 0
\)
<br><br>
=> \( (5 - \lambda)^2 - 16 = 0 \) <br>
=> \( (5 - \lambda)  = \pm 4 \) <br>
=> \( (5 - \lambda)  = 4 \)  or \( (5 - \lambda)  = -4 \) <br>
=> \( \lambda = 1 \)  or \( \lambda = 9 \)<br>
=> Largest Singular Value = Square root of largest eigen value = \(\sqrt{9} = 3\)  <br>
Therefore, \({\| A \|_2} = \sigma_{max}(A) = 3\)
<br><br>

