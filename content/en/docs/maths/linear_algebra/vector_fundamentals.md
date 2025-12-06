---
title: Vector Fundamentals
description: Vector Fundamentals
date: 2025-10-24
weight: 2
math: true
---


{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfJU-jKjugdLnNJj0GsT9kH" 
        "Linear Algebra for AI & ML | Full Course Videos">}}
<br>
{{< question >}}
Why study Vectors?
{{< /question >}}

{{< answer >}}
Vector is a fundamental concept used to describe the real world, which has magnitude and direction, 
e.g., force, velocity, electromagnetism, etc. <br>
It is used to describe the surrounding space, e.g, lines, planes, 3D space, etc. <br>
And, In machine learning, vectors are used to represent data, both the input features and the output of a model.
{{< /answer >}}
<br>

{{< definition >}}
**Vector:** <br>
It is a collection of scalars(numbers) that has both magnitude and direction. <br>
Geometrically, it is a line segment in space characterized by its length(magnitude) and direction. <br>
By convention, we represent vectors as column vectors. <br>
e.g.: 
\(\vec{x} = \mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}_{\text{n×1}}\) i.e 'n' rows and 1 column. <br>

*Important: In machine learning, we will use **bold** notation \(\mathbf{v}\) to represent vectors, instead 
of arrow notation \(\mathbf{v}\).* <br>

**Transpose:** <br>
Swap the rows and columns, i.e, a column vector becomes a row vector after transpose. <br>
e.g:
\(\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_d \end{bmatrix}_{\text{d×1}}\) <br><br>

\(\mathbf{v}^\mathrm{T} = \begin{bmatrix} v_1 & v_2 & \cdots & v_d \end{bmatrix}_{\text{1×d}}\) 

<br>

**Length of Vector:**<br>
The length (or magnitude or norm) of a vector \(\mathbf{v}\) is the distance from the origin to the point represented <br> 
by \(\mathbf{v}\) in n-dimensional space. <br>

\(\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_d \end{bmatrix}_{\text{d×1}}\) <br><br>

_Length of vector_:  
\[\mathbf{v} = \|\mathbf{v}\| = 
 \mathbf{v} \cdot \mathbf{v} = \mathbf{v}^\mathrm{T}\mathbf{v}
 = \sqrt{v_1^2 + v_2^2 + \cdots + v_d^2}\]

*Note: The length of a **zero vector** is **0**.* <br>

**Direction of Vector:**<br>
The direction of a vector tells us where the vector points in space, independent of its length. <br>

_Direction of vector:_
\[\mathbf{v} = \frac{\vec{v}} {\|\mathbf{v}\|} \]

{{</ definition >}}
<br>

{{< definition >}}
**Vector Space:** <br>
It is a collection of vectors that can be added together and scaled by numbers (scalars), such that, 
the results are still in the same space. <br>
Vector space or linear space is a non-empty set of vectors equipped with 2 operations:<br>
1. **Vector addition**: for any 2 vectors \(a, b\), \(a + b\) is also in the same vector space. <br>
2. **Scalar multiplication**: for a vector \(\mathbf{v}\), \(\alpha\mathbf{v}\) is also in the same vector space;
where \(\alpha\) is a scalar. <br>
*Note: These operations must satisfy certain rules (called axioms), such as, 
associativity, commutativity, distributivity, existence of a zero vector, and additive inverses.* <br>

e.g.: Set of all points in 2D is a vector space. <br>
{{</ definition >}}

{{< alert color="success" title="Vector Operations" >}}
**Addition:** <br>
We can only add vectors of the same dimension. <br>
- Commutative: \(a + b = b + a\)
- Associative: \(a + (b + c) = (a + b) + c\)

e.g: lets add 2 real d-dimensional vectors, \(\mathbf{u} , \mathbf{v} \in \mathbb{R}^{d \times 1}\): <br>
\(\mathbf{u} = \begin{bmatrix} u_1 \\ u_2 \\ \vdots \\ u_d \end{bmatrix}_{\text{d×1}}\), 
\(\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_d \end{bmatrix}_{\text{d×1}}\) <br><br>
\(\mathbf{u} + \mathbf{v} = \begin{bmatrix} u_1+v_1 \\ u_2+v_2 \\ \vdots \\ u_d+v_d \end{bmatrix}_{\text{d×1}}\)
<br>

**Multiplication:** <br>
**1. Multiplication with Scalar:** <br>
All elements of the vector are multiplied with the scalar. <br>
- \(c(\mathbf{u} + \mathbf{v}) = c(\mathbf{u}) + c(\mathbf{v})\)
- \((c+d)\mathbf{v} = c\mathbf{v} + d\mathbf{v}\)
- \((cd)\mathbf{v} = c(d\mathbf{v})\)

e.g:
\(\alpha\mathbf{v} = \begin{bmatrix} \alpha v_1 \\ \alpha v_2 \\ \vdots \\ \alpha v_d \end{bmatrix}_{\text{d×1}}\) <br><br>

**2.Inner (Dot) Product:** <br>
Inner(dot) product \(\mathbf{u} \cdot \mathbf{v}\) of 2 vectors gives a **scalar** output. <br>
The two vectors must be of the same dimensions. <br>
- \(\mathbf{u} \cdot \mathbf{v} = u_1v_1 + u_2v_2 + \cdots + u_dv_d\)

_Dot product:_ <br>
\(\mathbf{u} \cdot \mathbf{v} = \mathbf{u}^\mathrm{T} \mathbf{v}\)
= \(\begin{bmatrix} u_1 & u_2 & \cdots & u_d \end{bmatrix}_{\text{1×d}} 
\cdot 
\begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_d
\end{bmatrix}_{\text{d×1}} = u_1v_1 + u_2v_2 + \cdots + u_dv_d\) <br><br>

Geometrically, \(\mathbf{u} \cdot \mathbf{v}\) = \(|u||v|cos\theta\) <br>
where \(\theta\) is the angle between \(\mathbf{u}\) and \(\mathbf{v}\).

![](https://robosathi.com/images/vector_dot_product.png)

\(\mathbf{u} = \begin{bmatrix} 1 \\ \\ 2 \\ \end{bmatrix}_{\text{2×1}}\), 
\(\mathbf{v} = \begin{bmatrix} 3 \\ \\ 4 \\ \end{bmatrix}_{\text{2×1}}\)

\(\mathbf{u} \cdot \mathbf{v}\) = \(|u||v|cos\theta = 1 \times 3 + 2 \times 4 = 11\)

**2.Outer (Tensor) Product:** <br>
Outer (tensor) product \(\mathbf{u} \otimes \mathbf{v}\) of 2 vectors gives a **matrix** output. <br>
The two vectors must be of the same dimensions. <br>

_Tensor product:_ <br>
\(\mathbf{u} \otimes \mathbf{v} = \mathbf{u} \mathbf{v}^\mathrm{T} \)
= \(\begin{bmatrix} u_1 \\ u_2 \\ \vdots \\ u_d \end{bmatrix}_{\text{d×1}}
\otimes
\begin{bmatrix} v_1 & v_2 & \cdots & v_d \end{bmatrix}_{\text{1×d}}
= \begin{bmatrix}
u_1v_1 & u_1v_2 & \cdots & u_1v_d \\
u_2v_1 & u_2v_2 & \cdots & u_2v_n \\
\vdots & \vdots & \ddots & \vdots \\
u_dv_1 & u_dv_2 & \cdots & u_dv_d
\end{bmatrix}
\in \mathbb{R}^{d \times d}\) <br><br>

e.g: <br>
\(\mathbf{u} = \begin{bmatrix} 1 \\ \\ 2 \\ \end{bmatrix}_{\text{2×1}}\), 
\(\mathbf{v} = \begin{bmatrix} 3 \\ \\ 4 \\ \end{bmatrix}_{\text{2×1}}\) 

<br><br>

\(\mathbf{u} \otimes \mathbf{v} = \mathbf{u} \mathbf{v}^\mathrm{T} \)
= \(\begin{bmatrix} 1 \\ \\ 2 \\ \end{bmatrix}_{\text{2×1}}
\otimes
\begin{bmatrix} 3 & 4  \end{bmatrix}_{\text{1×2}}
= \begin{bmatrix}
1 \times 3 & 1 \times 4 \\
\\
2 \times 3 & 2 \times 4 \\
\end{bmatrix}
_{\text{2×2}}
= \begin{bmatrix}
3 & 4 \\
\\
6 & 8 \\
\end{bmatrix}
_{\text{2×2}}\)

<br><br>
*Note: We will NOT discuss about cross product \(\mathbf{u} \times \mathbf{v}\); product perpendicular to both vectors.*

{{< /alert >}}
<br><br>

{{< definition >}}
**Linear Combination:** <br>
A vector \(\mathbf{v}\) is a linear combination of vectors \(\mathbf{u}_1, \mathbf{u}_2, \cdots, \mathbf{u}_n\) if: <br><br>
\(\mathbf{v} = \alpha_1 \mathbf{u}_1 + \alpha_2 \mathbf{u}_2 + \cdots + \alpha_k \mathbf{u}_k\) <br>
where \(\alpha_1, \alpha_2, \cdots, \alpha_k\) are scalars. <br>
{{</ definition >}}
<br>

{{< definition >}}
**Linear Independence:** <br>
A set of vectors are linearly independent if NO vector in the set can be expressed as a linear combination of 
the other vectors in the set. <br>
<br>
The only solution for : <br>
\(\alpha_1 \mathbf{u}_1 + \alpha_2 \mathbf{u}_2 + \cdots + \alpha_k \mathbf{u}_k\) = 0 <br>
is \(\alpha_1 = \alpha_2, \cdots, = \alpha_k = 0\). <br>

e.g.: <br>
1. The below 3 vectors are linearly **independent**. <br>
\(\mathbf{u} = \begin{bmatrix} 1 \\ 1 \\ 1 \\ \end{bmatrix}_{\text{3×1}}\), 
\(\mathbf{v} = \begin{bmatrix} 1 \\ 2 \\ 3 \\ \end{bmatrix}_{\text{3×1}}\),
\(\mathbf{w} = \begin{bmatrix} 1 \\ 3 \\ 6 \\ \end{bmatrix}_{\text{3×1}}\)

2. The below 3 vectors are linearly **dependent**. <br>
\(\mathbf{u} = \begin{bmatrix} 1 \\ 1 \\ 1 \\ \end{bmatrix}_{\text{3×1}}\), 
\(\mathbf{v} = \begin{bmatrix} 1 \\ 2 \\ 3 \\ \end{bmatrix}_{\text{3×1}}\),
\(\mathbf{w} = \begin{bmatrix} 2 \\ 4 \\ 6 \\ \end{bmatrix}_{\text{3×1}}\) 
<br><br>
because, \(\mathbf{w} = 2\mathbf{v}\), and we have a non-zero solution for the below equation: <br>
\(\alpha_1 \mathbf{u} + \alpha_2 \mathbf{v} + \alpha_3 \mathbf{w} = 0\); <br>
\(\alpha_1 = 0, \alpha_2 = -2, \alpha_3 = 1\) is a valid non-zero solution.

***Note**:*
1. A common method to check linear independence is to arrange the column vectors in a matrix form and 
calculate its determinant, if _determinant ≠ 0_, then the vectors are linearly independent. 
2. If _number of vectors > number of dimensions_, then the vectors are linearly dependent.<br>
Since, the \((n+1)^{th}\) vector can be expressed as a linear combination of the other 'n' vectors in n-dimensional space.
3. In machine learning, if a feature can be expressed in terms of other features, then it is linearly dependent, <br>
and the feature is NOT bringing any new information. <br>
e.g.: In 2 dimensions, 3 vectors \(\mathbf{x_1}, \mathbf{x_2}, \mathbf{x_3} \) are linearly dependent.

{{</ definition >}}
<br><br>

{{< definition >}}
**Span:** <br>
Span of a set of vectors is the geometric shape by all possible linear combinations of those vectors, such as, 
line, plane, or higher dimensional volume. <br>
e.g.: <br>
1. Span of a single vector (1,0) is the entire X-axis.
2. Span of 2 vectors (1,0) and (0,1) is the entire X-Y (2D) plane, as any vector in 2D plane can be expressed as a 
linear combination of the 2 vectors - (1,0) and (0,1).
{{</ definition >}}

<br>

{{< definition >}}
**Basis:** <br>
It is the minimal set of linearly independent vectors that spans or defines the entire vector space, 
providing a unique co-ordinate system for every vector within the space. <br>
Every vector in the vector space can be represented as a unique linear combination of the basis vectors. <br>
e.g.: 
1. X-axis(1,0) and Y-axis(0,1) are the basis vectors of 2D space or form the co-ordinate system. <br>
2. \(\mathbf{u} = (3,1)\) and \(\mathbf{v} = (-1, 2) \) are the basis of skewed or parallelogram co-ordinate system. <br>

**_Note_: Basis = Dimensions**

{{</ definition >}}

<br><br>

{{< definition >}}
**Orthogonal Vectors:** <br>
Two vectors are orthogonal if their dot product is 0. <br>
A set of vectors \(\mathbf{x_1}, \mathbf{x_2}, \cdots ,\mathbf{x_n} \) are said to be orthogonal if: <br>
\(\mathbf{x_i} \cdot \mathbf{x_j} = 0 \forall i⍯j\), for every pair, i.e, every pair must be orthogonal. <br>
e.g.: <br>
1. \(\mathbf{u} = (1,0)\) and \(\mathbf{v} = (0,1) \) are orthogonal vectors. <br>
2. \(\mathbf{u} = (1,0)\) and \(\mathbf{v} = (1,1) \) are NOT orthogonal vectors. <br>

*Note:* 
1. Orthogonal vectors are linearly independent, but the inverse may NOT be true, <br>
i.e, linear independence does NOT imply that vectors are orthogonal.
e.g.: <br>
Vectors \(\mathbf{u} = (2,0)\) and \(\mathbf{v} = (1,3) \) are linearly independent but NOT orthogonal. <br>
Since, \(\mathbf{u} \cdot \mathbf{v} = 2*1 + 3*0 = 2 ⍯ 0\). <br>

2. Orthogonality is the most extreme case of linear independence, i.e \(90^{\degree}\) apart or perpendicular. <br>

{{</ definition >}}

<br>

{{< definition >}}
**Orthonormal Vectors:** <br>
Orthonormal vectors are vectors that are orthogonal and have unit length. <br>
A set of vectors \(\mathbf{x_1}, \mathbf{x_2}, \cdots ,\mathbf{x_n} \) are said to be orthonormal if: <br>
\(\mathbf{x_i} \cdot \mathbf{x_j} = 0 \forall i⍯j\) and \(\|\mathbf{x_i}\| = 1\), i.e, **unit vector**. <br>

e.g.: <br>
1. \(\mathbf{u} = (1,0)\) and \(\mathbf{v} = (0,1) \) are orthonormal vectors. <br>
2. \(\mathbf{u} = (1,0)\) and \(\mathbf{v} = (0,2) \) are NOT orthonormal vectors. <br>

{{</ definition >}}
<br>

{{< definition >}}
**Orthonormal Basis:** <br>
It is a set of vectors that functions as a basis for a space while also being orthonormal, <br>
meaning each vector is a unit vector (has a length of 1) and all vectors are mutually perpendicular (orthogonal) to each other. <br>
A set of vectors \(\mathbf{x_1}, \mathbf{x_2}, \cdots ,\mathbf{x_n} \) are said to be orthonormal basis of a vector space
\(\mathbb{R}^{n \times 1}\), if every vector: <br>
\[ 
\mathbf{y} = \sum_{k=1}^n \alpha_k \mathbf{x_k}, \quad \forall ~ \mathbf{y} \in \mathbb{R}^{n \times 1} \\
\text {and } \quad \mathbf{x_1}, \mathbf{x_2}, \cdots ,\mathbf{x_n} \text { are orthonormal vectors}
\]
e.g.:
1. \(\mathbf{u} = (1,0)\) and \(\mathbf{v} = (0,1) \) form an orthonormal basis for 2-D space. <br>
2. \(\mathbf{u} = (\frac{1}{\sqrt{2}},\frac{1}{\sqrt{2}})\) and \(\mathbf{v} = (-\frac{1}{\sqrt{2}},-\frac{1}{\sqrt{2}}) \) 
also form an orthonormal basis for 2-D space. <br>

*Note: In a n-dimensional space, there are only \(n\) possible orthonormal bases.*
{{</ definition >}}
<br>

{{< video "https://www.youtube.com/watch?v=LzLswBOf_vM&t=1s" >}}

<br><br>
```End of Section```