---
title: Vector
description: Vector Fundamentals
date: 2025-10-20
weight: 2
math: true
---

{{% pageinfo %}}
This section will introduce you to basic terminologies and definitions related to Vectors.<br>
{{% /pageinfo %}}

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
<br>

{{< alert color="secondary" title="Vector Operations" >}}
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

**2.Inner(Dot) Product:** <br>
Inner(dot) product \(\mathbf{u} \cdot \mathbf{v}\) of 2 vectors gives a scalar output. <br>
The two vectors must be of the same dimension. <br>
- \(\mathbf{u} \cdot \mathbf{v} = u_1v_1 + u_2v_2 + \cdots + u_dv_d\)

**Transpose:** <br>
Swap the rows and columns, i.e, a column vector becomes a row vector after transpose. <br>
e.g:
\(\mathbf{v} = \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_d \end{bmatrix}_{\text{d×1}}\) <br><br>

\(\mathbf{v}^\mathrm{T} = \begin{bmatrix} v_1 & v_2 & \cdots & v_d \end{bmatrix}_{\text{1×d}}\) <br>

_Dot product:_ <br>
\(\mathbf{u} \cdot \mathbf{v} = \mathbf{u}^\mathrm{T} \mathbf{v}\)
= \(\begin{bmatrix} u_1 & u_2 & \cdots & u_d \end{bmatrix}_{\text{1×d}} \cdot \begin{bmatrix} v_1 \\ v_2 \\ \vdots \\ v_d
\end{bmatrix}_{\text{d×1}} = u_1v_1 + u_2v_2 + \cdots + u_dv_d\) <br><br>

Geometrically, \(\mathbf{u} \cdot \mathbf{v}\) = \(|u||v|cos\theta\) <br>
where \(\theta\) is the angle between \(\mathbf{u}\) and \(\mathbf{v}\).

![](https://robosathi.com/images/vector_dot_product.png)

\(\mathbf{u} = \begin{bmatrix} 1 \\ \\ 2 \\ \end{bmatrix}_{\text{2×1}}\), 
\(\mathbf{v} = \begin{bmatrix} 3 \\ \\ 4 \\ \end{bmatrix}_{\text{2×1}}\)

\(\mathbf{u} \cdot \mathbf{v}\) = \(|u||v|cos\theta = 1 \times 3 + 2 \times 4 = 11\)






{{< /alert >}}

<br><br>
```End of Section```