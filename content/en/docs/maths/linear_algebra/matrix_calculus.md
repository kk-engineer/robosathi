---
title: Vector & Matrix Calculus
description: Vector & Matrix Calculus
date: 2025-10-27
weight: 7
math: true
---


{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfJU-jKjugdLnNJj0GsT9kH" 
        "Linear Algebra for AI & ML | Full Course Videos">}}

{{< alert color="success" title="Vector Derivative" >}}
Let \(\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}_{\text{n×1}}\) be a vector, i.e, \(\mathbf{x} \in \mathbb{R}^n\).
<br><br>
Let \(f(x)\) be a function that maps a vector to a scalar, i.e, \(f : \mathbb{R}^n \rightarrow \mathbb{R}\). <br>
The derivative of function \(f(x)\) with respect to \(\mathbf{x}\) is defined as: <br>
\[Gradient = \frac{\partial f(x)}{\partial x} = {f'(x)} = \nabla f(x)
= \begin{bmatrix} \frac{\partial x_1}{\partial x} \\ \frac{\partial x_2}{\partial x} \\ \vdots \\ 
\frac{\partial x_n}{\partial x} \end{bmatrix}_{\text{n×1}} \]
<br>
_Assumption: All the first order partial derivatives exist._

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

\[\tag{1}\frac{\partial y}{\partial x} = \begin{bmatrix} \frac{\partial y}{\partial x_1} \\ \frac{\partial y}{\partial x_2} 
\\ \vdots \\ \frac{\partial y}{\partial x_k} \\ \vdots \\ \frac{\partial y}{\partial x_n} \end{bmatrix} \]

Let's calculate \(\frac{\partial y}{\partial x_k}\), i.e, for the \(k^{th}\) element and sum it over 1 to n. <br>
The \(k^{th}\) element \(x_k\) will appear 2 times in the below summation, i.e,  when \(i=k ~and~ j=k\) <br>

\[
y = \sum_{i=1}^n \sum_{j=1}^n x_i a_{ij} x_j \\
\text { when }  i=k, \quad y = \sum_{j=1}^n x_k a_{kj} x_j \\
\text { when }  j=k, \quad  y = \sum_{i=1}^n x_i a_{ik} x_k \\[10pt]
\frac{\partial y}{\partial x_k} =  \frac{\partial }{\partial x_k} (\sum_{i=1}^n \sum_{j=1}^n x_i a_{ij} x_j) \\[10pt]
=> \frac{\partial y}{\partial x_k} = \sum_{j=1}^n \frac{\partial }{\partial x_k} x_k a_{kj} x_j + 
\sum_{i=1}^n \frac{\partial }{\partial x_k}x_i a_{ik} x_k \\
=> \frac{\partial y}{\partial x_k} = \sum_{j=1}^n 1 \cdot a_{kj} x_j + 
\sum_{i=1}^n x_i a_{ik} \cdot 1 \\
\because \sum_{j=1}^n x_j = \sum_{i=1}^n x_i \text { we can combine both terms } \\
=> \frac{\partial y}{\partial x_k} = \sum_{i=1}^n (a_{ki} + a_{ik}) x_i \\
\text{ Note, that: } \sum_{i=1}^n a_{ki} \text{ is k-th row of A, and } 
\sum_{i=1}^n a_{ik} \text{ is k-th row of } A^T \\[10pt]
\text{ from (1) above:  }\frac{\partial y}{\partial x} = \sum_{k=1}^n \frac{\partial y}{\partial x_k} \\
=> \frac{\partial y}{\partial x} = \sum_{k=1}^n \sum_{i=1}^n (a_{ki} + a_{ik}) x_i \\[10pt]
\therefore \frac{\partial y}{\partial x} = \frac{\partial}{\partial x}(\mathbf{x^TAx}) =  \mathbf{(A + A^T) x} \\[10pt]
\text{ if } \mathbf{A = A^T} \text{ then, }  \\[10pt]
\frac{\partial y}{\partial x} = \frac{\partial }{\partial x}(\mathbf{x^TAx}) =  \mathbf{2Ax} \\
\]
<br>

{{< /alert >}}

{{< alert color="secondary" title="Jacobian Matrix" >}}
Above, we saw the **gradient** of a **scalar valued function**, i.e, a function that maps a vector to a scalar, i.e, 
\(f : \mathbb{R}^n \rightarrow \mathbb{R}\). <br>
There is another kind of function called **vector valued function**, i.e, a function that maps a vector to another vector, i.e, 
\(f : \mathbb{R}^n \rightarrow \mathbb{R}^m\). <br><br>

The **Jacobian** is the matrix of all **first-order partial derivatives** of a **vector-valued function**, 
while the **gradient** is a vector representing the partial derivatives of a **scalar-valued function**. 
<br>
- Jacobian matrix provides the best linear approximation of a vector valued function near a given point, 
similar to how a derivative/gradient is the best linear approximation for a scalar valued function
<br>

_Note: Gradient is a special case of the Jacobian; 
it is the **transpose** of the Jacobian for a scalar valued function._ 
<br><br>
Let, \(f(x)\) be a function that maps a vector to another vector, i.e, \(f : \mathbb{R}^n \rightarrow \mathbb{R}^m\) 
<br><br>
\(f(x)_{m \times 1} = \mathbf{A_{m \times n}x_{n \times 1}}\), where, <br><br>
\(\quad
\mathbf{A} = 
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
_{\text{m x n}}
\), 
\(\mathbf{x} = \begin{bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{bmatrix}_{\text{n x 1}}\),
\(f(x) = \begin{bmatrix} f_1(x) \\ f_2(x) \\ \vdots \\ f_m(x) \end{bmatrix}_{\text{m x 1}}\)
<br><br>
\[\frac{\partial f(x)}{\partial x} = f'(x) =  
\begin{bmatrix}
\frac{\partial f_1}{\partial x_1}  & \frac{\partial f_1}{\partial x_2} & \cdots & \frac{\partial f_1}{\partial x_n} \\
\frac{\partial f_2}{\partial x_1}  & \frac{\partial f_2}{\partial x_2} & \cdots & \frac{\partial f_2}{\partial x_n} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial f_m}{\partial x_1}  & \frac{\partial f_m}{\partial x_2} & \cdots & \frac{\partial f_m}{\partial x_n}
\end{bmatrix}
_{\text{m x n}}
\]
<br><br>
The above matrix is called **Jacobian matrix** of \(f(x)\).

_Assumption: All the first order partial derivatives exist._
<br>
{{< /alert >}}

{{< alert color="secondary" title="Hessian Matrix" >}}
**Hessian Matrix:** <br>
It is a square matrix of **second-order partial derivatives** of a **scalar-valued function**. <br>
This is used to characterize the **curvature** of a function at a give point.
<br><br>

Let, \(f(x)\) be a function that maps a vector to a scalar value, i.e, \(f : \mathbb{R}^n \rightarrow \mathbb{R}\) 
<br>
The Hessian matrix is defined as: <br>
\[Hessian = \frac{\partial f^2(x)}{\partial x \partial x^T } = \nabla^2 f(x) = 
\begin{bmatrix} \frac{\partial^2 f(x)}{\partial x_1^2} & 
\frac{\partial^2 f(x)}{\partial x_1 \partial x_2} & \cdots & \frac{\partial^2 f(x)}{\partial x_1 \partial x_n} \\
\frac{\partial^2 f(x)}{\partial x_2 \partial x_1} & \frac{\partial^2 f(x)}{\partial x_2^2} & \cdots & 
\frac{\partial^2 f(x)}{\partial x_2 \partial x_n} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial^2 f(x)}{\partial x_n \partial x_1} & \frac{\partial^2 f(x)}{\partial x_n \partial x_2} & \cdots & 
\frac{\partial^2 f(x)}{\partial x_n^2}
\end{bmatrix}
_{\text{n x n}}
\]
<br>
*Note: Most functions in Machine Learning where second-order partial derivatives are continuous, the Hessian is symmetrix.*
<br><br>
\( H_{i,j} = H_{j,i} =  \frac{\partial f^2(x)}{\partial x_i \partial x_j } = \frac{\partial f^2(x)}{\partial x_j \partial x_i } \)
<br><br>

e.g: <br>
1. \(f(x) = \mathbf{x^TAx}\), where, A is a symmetric matrix, and f(x) is a scalar valued function.
<br><br>
\(Gradient = \frac{\partial }{\partial x}(\mathbf{x^TAx}) =  2\mathbf{Ax}\), since A is symmetric.
<br><br>
\(Hessian = \frac{\partial^2 }{\partial x^2}(\mathbf{x^TAx}) =  \frac{\partial }{\partial x}2\mathbf{Ax} = 2\mathbf{A}\)
<br><br>

2. \(f(x,y) = x^2 + y^2\)
<br><br>
\(Gradient = \nabla f = \begin{bmatrix} \frac{\partial f}{\partial x}\\ \\ \frac{\partial f}{\partial x} \end{bmatrix} 
= \begin{bmatrix} 2x+0 \\ \\ 0+2y \end{bmatrix} = \begin{bmatrix} 2x \\ \\ 2y \end{bmatrix}\)
<br><br>
\(Hessian = \nabla^2 f = \begin{bmatrix} \frac{\partial^2 f}{\partial x^2} & \frac{\partial^2 f}{\partial x \partial y}\\ 
\\ \frac{\partial^2 f}{\partial y \partial x} & \frac{\partial^2 f}{\partial y^2} \end{bmatrix} 
= \begin{bmatrix} 2 & 0 \\ \\ 0 & 2 \end{bmatrix}\)

{{< /alert >}}

{{< alert color="success" title="Matrix Derivative" >}}
Let, A is a mxn matrix, i.e \(A \in \mathbb{R}^{m \times n}\) 
<br><br>
\(\mathbf{A} = 
\begin{bmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
_{\text{m x n}}
\)
<br><br>
Let f(A) be a function that maps a matrix to a **scalar** value, i.e, \(f : \mathbb{R}^{m \times n} \rightarrow \mathbb{R}\) 
<br>
, then derivative of function f(A) w.r.t A is defined as: 
<br><br>
\[\frac{\partial f}{\partial A} = f'(A) =  
\begin{bmatrix}
\frac{\partial f}{\partial a_{11}}  & \frac{\partial f}{\partial a_{12}} & \cdots & \frac{\partial f}{\partial a_{1n}} \\
\frac{\partial f}{\partial a_{21}}  & \frac{\partial f}{\partial a_{22}} & \cdots & \frac{\partial f}{\partial a_{2n}} \\
\vdots & \vdots & \ddots & \vdots \\
\frac{\partial f}{\partial a_{m1}}  & \frac{\partial f}{\partial a_{m2}} & \cdots & \frac{\partial f}{\partial a_{mn}}
\end{bmatrix}
_{\text{m x n}} \\[20pt]
=> (\frac{\partial f}{\partial A})_{(i,j)} = \frac{\partial f}{\partial a_{ij}}
\]

e.g.:
1. Let, A is a square matrix, i.e \(A \in \mathbb{R}^{n \times n}\) <br>
and f(A) = trace(A) = \(a_{11} + a_{22} + \cdots + a_{nn}\)
<br><br>
We know that: <br>
\((\frac{\partial f}{\partial A})_{(i,j)} = \frac{\partial f}{\partial a_{ij}}\)
<br><br>
Since, the trace only contains diagonal elements, 
<br><br>
=> \((\frac{\partial f}{\partial A})_{(i,j)}\) = 0 for all \(i ⍯ j\)
<br><br>
similarly, \((\frac{\partial f}{\partial A})_{(i,i)}\) = 1 for all \(i=j\)
<br><br>
=> \(
\frac{\partial Tr(A)}{\partial A} =
\begin{cases}
1, & \text{if } i=j \\
\\
0, & \text{if } i⍯j
\end{cases}
\)
<br><br>
\(\frac{\partial f}{\partial A} = \frac{\partial Tr(A)}{\partial A}
\begin{bmatrix}
1 & 0 & \cdots & 0 \\
0 & 1& \cdots & 0 \\
\vdots & \vdots & \ddots & \vdots \\
0 & 0 & \cdots & 1
\end{bmatrix} = \mathbf{I}
\)
<br><br>
Therefore, derivative of trace(A) w.r.t A is an identity matrix.
{{< /alert >}}

{{< video "https://www.youtube.com/watch?v=41B-VWrwxKY&t=1s" >}}
<br><br>
```End of Section```
