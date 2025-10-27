---
title: Vector & Matrix Calculus
description: Vector & Matrix Calculus
date: 2025-10-27
weight: 7
math: true
---

{{% pageinfo %}}
In this section we will understand Derivatives of Vector & Matrix, Jacobian and Hessian.<br>
{{% /pageinfo %}}

{{< alert color="success" title="Vector Derivative" >}}
Let \(\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}_{\text{n×1}}\) be a vector, i.e, \(\mathbf{x} \in \mathbb{R}^n\).
<br><br>
Let \(f(x)\) be a function that maps the vector to a scalar, i.e, \(f : \mathbb{R}^n \rightarrow \mathbb{R}\). <br>
The derivative of function \(f(x)\) with respect to \(\mathbf{x}\) is defined as: <br>
\[Gradient = \frac{\partial f(x)}{\partial x} = {f'(x)} = \nabla f(x)
= \begin{bmatrix} \frac{\partial x_1}{\partial x} \\ \frac{\partial x_2}{\partial x} \\ \vdots \\ 
\frac{\partial x_n}{\partial x} \end{bmatrix}_{\text{n×1}} \]
<br>

e.g.: <br>
1. \(f(x) = a^Tx\), where, 
\(\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}\),
\(\quad a = \begin{bmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{bmatrix}\),
\(\quad a^T = \begin{bmatrix} a_1 & a_2 & \cdots & a_n \end{bmatrix}\) 
<br><br>
\(=> f(x) = a^Tx = a_1x_1 + a_2x_2 + \cdots + a_nx_n\)
<br><br>
\(=> \frac{\partial f(x)}{\partial x} = \begin{bmatrix} \frac{\partial x_1}{\partial x} \\ \frac{\partial x_2}{\partial x} 
\\ \vdots \\ \frac{\partial x_n}{\partial x} \end{bmatrix} \)
\(=\begin{bmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{bmatrix} = a \)
<br>
\( => f'(x) = a \)

<br><br>

2. Now, let's find the derivative for a bit complex, but very widely used function. <br>
\(f(x) = \mathbf{x^TAx} \quad\), where, 
\(\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}\), so, 
\(\quad x^T = \begin{bmatrix} x_1 & x_2 & \cdots & x_n \end{bmatrix}\), 
<br><br>
**A** is a **square** matrix,
\(
\mathbf{A} = 
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1k} & \cdots a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2k} & \cdots a_{2n} \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
a_{k1} & a_{k2} & \cdots & a_{kk} & \cdots a_{kn} \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
a_{n1} & a_{n2} & \cdots & a_{nk} & \cdots a_{nn}
\end{bmatrix}
_{\text{n x n}}
\)
<br><br>
So, \(
\mathbf{A^T} = 
\begin{bmatrix}
a_{11} & a_{21} & \cdots & a_{k1} & \cdots a_{n1} \\
a_{12} & a_{22} & \cdots & a_{k2} & \cdots a_{n2} \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
a_{1k} & a_{2k} & \cdots & a_{kk} & \cdots a_{nk} \\
\vdots & \vdots & \ddots & \vdots & \vdots \\
a_{1n} & a_{2n} & \cdots & a_{kn} & \cdots a_{nn}
\end{bmatrix}
_{\text{n x n}}
\)
<br><br>

\[f(x) = y = \mathbf{x^TAx} = \sum_{i=1}^n \sum_{j=1}^n x_i a_{ij} x_j\]

\[\frac{\partial y}{\partial x} = \begin{bmatrix} \frac{\partial y}{\partial x_1} \\ \frac{\partial y}{\partial x_2} 
\\ \vdots \\ \frac{\partial y}{\partial x_k} \\ \vdots \\ \frac{\partial y}{\partial x_n} \end{bmatrix} \]

Let's calculate \(\frac{\partial y}{\partial x_k}\), i.e, for the \(k^{th}\) element and sum it over 1 to n. <br>
The \(k^{th}\) element \(x_k\) will appear 2 times in the below summation, i.e,  when \(i=k ~and~ j=k\) <br>

\[
y = \sum_{i=1}^n \sum_{j=1}^n x_i a_{ij} x_j \\
\text { when }  i=k, \quad y = \sum_{j=1}^n x_k a_{kj} x_j \\
\text { when }  j=k, \quad  y = \sum_{i=1}^n x_i a_{ik} x_k \\ 
\]

<br><br>

{{< /alert >}}



<br><br>
```End of Section```
