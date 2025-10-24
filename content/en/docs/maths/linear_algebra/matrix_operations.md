---
title: Matrix
description: Matrix Operations
date: 2025-10-24
weight: 3
math: true
---

{{% pageinfo %}}
This section will understand various Matrix operations, such as, addition, multiplication, determinant, inverse, etc.<br>
{{% /pageinfo %}}

{{< question >}}
Why study Matrix?
{{< /question >}}

{{< answer >}}
Matrices let us store, manipulate, and transform data efficiently. <br>
e.g: <br>
1. Represent a system of linear equations AX=B. 
2. Data representation, such as images, that are stored as a matrix of pixels.
3. When multiplied, matrix, linearly transforms a vector, i.e, its direction and magnitude, making it useful in image rotation, scaling, etc.
{{< /answer >}}

<br>

{{< definition >}}
**Matrix** <br>
It is a two-dimensional array of numbers with a fixed number of rows(m) and columns(n). <br>
e.g: <br>
\(
\mathbf{A} = 
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
_{\text{m x n}}
\)
<br>

**Transpose:** <br>
Swapping rows and columns of a matrix. <br>
\(
\mathbf{A}^T = 
\begin{bmatrix}
a_{11} & a_{21} & \cdots & a_{m1} \\
a_{12} & a_{22} & \cdots & a_{m2} \\
\vdots & \vdots & \ddots & \vdots \\
a_{1n} & a_{2n} & \cdots & a_{mn}
\end{bmatrix}
_{\text{n x m}}
\)
<br><br>
**Important**: \( (AB)^T = B^TA^T \)

**Rank:** <br>
Rank of a matrix is the number of **linearly independent** rows or columns of the matrix. <br>

{{< /definition >}}
<br>

{{< alert color="secondary" title="Matrix Operations" >}}
**Addition:** <br>
We add two matrices by adding the corresponding elements. <br>
They must have same dimensions. <br>

\( \mathbf{A} + \mathbf{B} = 
\begin{bmatrix}
a_{11} + b_{11} & a_{12} + b_{12} & \cdots & a_{1n} + b_{1n} \\
a_{21} + b_{21} & a_{22} + b_{22} & \cdots & a_{2n} + b_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} + b_{m1} & a_{m2} + b_{m2} & \cdots & a_{mn} + b_{mn}
\end{bmatrix}
_{\text{m x n}}
\)
<br>
![](https://robosathi.com/images/matrix_addition.png)

**Multiplication:** <br>
We can multiply two matrices only if their inner dimensions are equal. <br>
\( \mathbf{C}_{m x n} = \mathbf{A}_{m x d} ~ \mathbf{B}_{d x n} \) <br>

\( c_{ij} \) = Dot product of \(i^{th}\) row of **A** and \(j^{th}\) row of **B**. <br>
\( c_{ij} = \sum_{k=1}^{d} A_{ik} * B_{kj} \) <br>
=> \( c_{11} = a_{11} * b_{11} + a_{12} * b_{21} + \cdots + a_{1d} * b_{d1} \) <br><br>

e.g: <br>
\(
\mathbf{A} = 
\begin{bmatrix}
1 & 2 \\
\\
3 & 4
\end{bmatrix}
_{\text{2 x 2}},
\mathbf{B} = 
\begin{bmatrix}
5 & 6 \\
\\
7 & 8
\end{bmatrix}
_{\text{2 x 2}}
\)
<br>

\(
\mathbf{C} = \mathbf{A} \times \mathbf{B} =
\begin{bmatrix}
1 * 5 + 2 * 7 & 1 * 6 + 2 * 8 \\
\\
3 * 5 + 4 * 7 & 3 * 6 + 4 * 8
\end{bmatrix}
_{\text{2 x 2}}
= \begin{bmatrix}
19 & 22 \\
\\
43 & 50
\end{bmatrix}
_{\text{2 x 2}}
\)
<br><br>

**Key Properties:** <br>
1. AB ≠ BA ; NOT commutative <br>
2. (AB)C = A(BC) ; Associative <br>
3. A(B+C) = AB+AC ; Distributive <br>

{{< /alert >}}
<br><br>

{{< alert color="success" title="Square Matrix" >}}
**Square Matrix:** <br>
It is a matrix with same number of rows and columns (m=n). <br><br>

**Diagonal Matrix:** <br>
It is a square matrix with all non-diagonal elements equal to zero. <br>
e.g.: <br>
\( \mathbf{D} = 
\begin{bmatrix}
d_{11} & 0 & \cdots & 0 \\
0 & d_{22} & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & d_{nn}
\end{bmatrix}
_{\text{n x n}}
\)
<br><br>
*Note: Product of 2 diagonal matrices is a diagonal matrix.*

**Lower Triangular Matrix:** <br>
It is a square matrix with all elements **above** the diagonal equal to zero. <br>
e.g.: <br>
\( \mathbf{L} = 
\begin{bmatrix}
l_{11} & 0  & \cdots & 0 \\
l_{21} & l_{22}  & \cdots & 0 \\
\vdots & \vdots & \ddots  & \vdots \\
l_{n1} & l_{n2} & \cdots  & l_{nn} 
\end{bmatrix}
_{\text{n x n}}
\)
<br><br>
*Note: Product of 2 lower triangular matrices is an lower triangular matrix.*
<br>

**Upper Triangular Matrix:** <br>
It is a square matrix with all elements **below** the diagonal equal to zero. <br>
e.g.: <br>
\( \mathbf{U} = 
\begin{bmatrix}
u_{11} & u_{12} & \cdots & u_{1n} \\
0 & u_{22} & \cdots & u_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & u_{nn}
\end{bmatrix}
_{\text{n x n}}
\)
<br><br>
*Note: Product of 2 upper triangular matrices is an upper triangular matrix.*
<br>

**Symmetric Matrix:** <br>
It is a square matrix that is equal to its own **transpose**, i.e, flip the matrix along its diagonal,
it remains **unchanged**. <br>
\( \mathbf{A} = \mathbf{A}^T \) <br>
e.g.: <br>
\( \mathbf{S} = 
\begin{bmatrix}
s_{11} & s_{12} & \cdots & s_{1n} \\
s_{12} & s_{22} & \cdots & s_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
s_{1n} & s_{2n} & \cdots & s_{nn}
\end{bmatrix}
_{\text{n x n}}
\)

*Note: Diagonal matrix is a symmetric matrix.*
<br><br>

**Skew Symmetric Matrix:** <br>
It is a square symmetric matrix where the elements across the diagonal have **opposite signs**. <br>
Also called **Anti Symmetric Matrix**. <br>

\( \mathbf{A} = -\mathbf{A}^T \) <br>
e.g.: <br>
\( \mathbf{S} = 
\begin{bmatrix}
0 & s_{12} & \cdots & s_{1n} \\
-s_{12} & 0 & \cdots & s_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
-s_{1n} & -s_{2n} & \cdots & 0
\end{bmatrix}
_{\text{n x n}}
\)

*Note: Diagonal elements of a skew symmetric matrix are zero, since the number should be equal to its negative.*
<br><br>

**Identity Matrix:** <br>
It is a square matrix with all the **diagonal** values equal to **1**, rest of the elements are equal to zero. <br>
e.g.: <br>
\( \mathbf{I} = 
\begin{bmatrix}
1 & 0 & \cdots & 0 \\
0 & 1 & \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & 1
\end{bmatrix}
_{\text{n x n}}
\)
<br><br>

**Important:**  <br>
\( \mathbf{I} \times \mathbf{A} = \mathbf{A} \times \mathbf{I} = \mathbf{A} \)
{{< /alert >}}


{{< alert color="secondary" title="Operations of Square Matrix" >}}
**Trace:** <br>
It is the sum of the elements on the **main diagonal** of a square matrix. <br>
*Note: Main diagonal is NOT defined for a rectangular matrix.* <br>
\( \text{trace}(A) = \sum_{i=1}^{n} a_{ii} = a_{11} + a_{22} + \cdots + a_{nn}\) <br>

If \( \mathbf{A} \in \mathbb{R}^{m \times n} \), and \( \mathbf{B} \in \mathbb{R}^{n \times m} \), then <br>
\( \text{trace}(AB)_{m \times m} = \text{trace}(BA)_{n \times n} \) <br>

**Determinant:** <br>
It is a scalar value that reveals crucial properties about the matrix and its linear transformation. <br>
1. If determinant = 0 => singular matrix, i.e linearly dependent rows or columns. 
2. Determinant is also equal to the scaling factor of the linear transformation. <br>

\[
|A| = \sum_{j=1}^{n} (-1)^{1+j} \, a_{1j} \, M_{1j}
\]
\(a_{1j} \) = element in the first row and j-th column <br>
\(M_{1j} \) = submatrix of the matrix excluding the first row and j-th column <br>

If n = 2, then, 
\( |A| = a_{11} \, a_{22} - a_{12} \, a_{21} \) <br>

**Singular Matrix:** <br>
A square matrix with **linearly dependent** rows or columns, i.e, **determinant = 0**. <br>
A singular matrix **collapses space**, say, a 3D space, into a 2D space or a higher dimensional space 
to a lower dimensional space, making the transformation impossible to reverse.<br>
Hence, a singular matrix is **NOT invertible**; i.e, inverse does NOT exist. <br>
Singular matrix is also NOT invertible, because the inverse has division by determinant, and its determinant is zero. <br>
*Also called **rank deficient** matrix, because the rank < number of dimensions of the matrix, 
due to the presence of linearly dependent rows or columns.* <br><br>

e.g: Below is a linearly dependent 2x2 matrix. <br>
\( \mathbf{A} = 
\begin{bmatrix}
a_{11} & a_{12} \\
 \\
\beta a_{11} & \beta a_{12}
\end{bmatrix}
_{\text{2 x 2}},
det(\mathbf{A}) = 
a_{11}\cdot \beta a_{12} - a_{12} \cdot \beta a_{11} = 0
\)

*Note:*
1. \( det(A) = det(A^T) \)
2. \( det(\beta A) = \beta^n det(A) \), where n is the number of dimensions of A and \(\beta\) is a scalar.
<br><br>

**Inverse:** <br>
It is a square matrix that when multiplied by the original matrix, gives the identity matrix. <br>
\( \mathbf{A} \mathbf{A}^{-1} =  \mathbf{A}^{-1} \mathbf{A} = \mathbf{I} \) <br><br>

\[
A^{-1} = \frac{1}{|A|} \, \text{adj}(A)
\]

{{< /alert >}}


<br><br>
```End of Section```