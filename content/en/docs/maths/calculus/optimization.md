---
title: Optimization
description: Loss Function, Convexity & Optimization
date: 2025-10-30
weight: 3
math: true
---


{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfzDh2D3OqVo-piGAZQPWDj" 
        "Calculus for AI & ML | Full Course Videos">}}
<br>
{{< question >}}
Whenever we build a Machine Learning model, we try to make sure that the model makes least mistakes in its predictions.<br>
How do we measure and minimize these mistakes in predictions made by the model? <br>
{{</ question >}}

{{< answer >}}
To measure, how wrong the are the predictions made by a Machine Learning model, every model is formulated as <br>
minimizing a loss function.
{{</ answer >}}

{{< panel color="blue" title="Loss Function" >}}
**Loss Function:** <br>
It quantifies error of a single data point in a dataset. <br>
e.g.: Squared Loss, Hinge Loss, Absolute Loss, etc, for a single data point. <br>


**Cost Function:** <br>
It is the average of all losses over the entire dataset. <br>
e.g.: Mean Squared Error(MSE), Mean Absolute Error(MAE), etc. <br>

**Objective Function:** <br>
It is the over-arching objective of an optimization problem, representing the function that is minimized or maximized. <br>
e.g.: Minimize MSE. <br>

_Let's understant this through an example:_ <br>
**Task:** <br>
Predict the price of a company's stock based on its historical data. <br>

**Objective Function:** <br>
Minimize the difference between actual and predicted price. <br>
Let, \(y\): original or actual price <br>
\(\hat y\): predicted price <br>
<br>
Say, the dataset has 'n' such data points. <br>
**Loss Function:** <br>
loss = \( y - \hat y \) for a single data point. <br>
We want to minimize the loss for all 'n' data points. <br>

**Cost Function:** <br>
We want to minimize the average/total loss over all 'n' data points. <br>
So, what are the ways ?
1. We take a simple **sum** of all the losses, but this can be misleading, as loss for a <br> 
single data point can be +ve or -ve, we can get a net-zero loss even for very large losses, when we sum them all.
2. We take the sum of **absolute** value of each loss, i.e, \( |y - \hat y| \), this way the losses will not cancel out each other. <br>
But the absolute value function is NOT differentiable at y=0, and this can cause issues in optimisation algorithms,
such as, gradient descent. 
<br>
[Read more about Differentiability]({{<ref  "/docs/maths/calculus/calculus_fundamentals"  >}})
<br><br>
3. So, we choose **squared loss**, i.e, \( (y - \hat y)^2 \), this solves the above issues.
<br><br>
*Note: In general,  we refer to the cost function as the loss function also, the terms are used interchangeably.*
<br><br>
Cost = **Loss** = **Mean Squared Error**(MSE)
\[\frac{1}{n} \sum_{i=1}^{n} (y_i - \hat y_i)^2 \]
The **task** is to **minimize** the above **loss**. <br>

**Key Points:** <br>
1. Loss is the bridge between 'data' and 'optimization'.
2. Good loss functions are differentiable and convex.
{{< /panel >}}

{{< video "https://youtu.be/4ck0Mv6cYUU" >}}

{{< panel color="orange" title="Convexity" >}}
**Convexity:** <br>
It refers to a property of a function where a line segment connecting any two points on its graph 
lies above or on the graph itself. <br>
A convex function is curved upwards. <br>
It is always described by a convex set. <br>
<br>
{{< imgproc "images/maths/calculus/optimization/convex.png" Resize "800x" >}}{{< /imgproc >}}

{{< imgproc "images/maths/calculus/optimization/non_convex.png" Resize "800x" >}}{{< /imgproc >}}


**Convex Set:** <br>
A convex set is a set of points in which the straight line segment connecting any two points in the set lies 
entirely within that set. <br>
A set \(C\) is convex if for any two points \(x\) and \(y\) in \(C\), the convex combination <br>
\(\theta x+(1-\theta )y\) is also in \(C\) for all values of \(\theta \) where \(0\le \theta \le 1\).
<br><br>

A function \(f: \mathbb{R}^n \rightarrow \mathbb{R}\) is convex if for all values of \(x,y\) and \(0\le \theta \le 1\), 

\[
f(\theta x + (1-\theta )y) \le \theta f(x) + (1-\theta )f(y)
\]

**Second-Order Test:** <br>
If a function is twice differentiable, i.e, 2nd derivative exists, then the function is convex, 
if and only if, the **Hessian** is **positive semi-definite** for all points in its domain. <br>

[Read more about Hessian]({{<ref  "/docs/maths/linear_algebra/matrix_calculus"  >}})
<br>

**Positive Definite:** <br>
A symmetric matrix is positive definite if and only if: <br>
1. Eigenvalues are all strictly positive, or
2. For any non-zero vector \(z\), the quadratic form \(z^THz > 0\)

*Note: If the Hessian is positive definite, then the function is convex; has upward curvature in all directions.*
<br><br>

**Positive Semi-Definite:** <br>
A symmetric matrix is positive semi-definite if and only if: <br>
1. Eigenvalues are all non-negative (i.e, greater than or equal to zero), or
2. For any non-zero vector \(z\), the quadratic form \(z^THz \ge 0\)

*Note: If the Hessian is positive definite, then the function is not strictly convex, but flat in some directions.*

[Read more about Eigen Values]({{<ref  "/docs/maths/linear_algebra/eigen_value_decomposition"  >}})
<br>
{{< /panel >}}

{{< video "https://youtu.be/apPRfDxWvbM" >}}

{{< panel color="blue" title="Optimization" >}}
All machine learning algorithms minimize loss (mostly), so we need to find the **optimum parameters** for the model that
minimizes the loss. <br>
This is an **optimization** problem, i.e, find the **best solution** from a set of **alternatives**. <br>
*Note: Convexity ensures that there is only 1 minima for the loss function.* 
<br><br>

**Optimization:** <br>
It is the iterative procedure of finding the optimum parameter \(x^*\) that minimizes the loss function f(x).
\[
x^* = \underset{x}{\mathrm{argmin}}\  f(x)
\]
<br>
Let's formulate an optimization problem for a model to minimize the MSE loss function discussed above: <br>
\[
Loss = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat y_i)^2 \\[10pt]
\text { We need to find the weights } w, w_0 \text{ of the model that minimize our MSE loss: } \\[10pt]
\underset{w, w_0}{\mathrm{argmin}}\  \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat y_i)^2
\]

*Note: To minimize the loss, we want \(y_i, \hat y_i\) to be as close as possible,
for that we want to find the optimum weights \(w, w_0\) of the model.*

{{< imgproc "images/maths/calculus/optimization/optimization_minima.png" Resize "800x" >}}{{< /imgproc >}}

**Important:** <br>
**Deep Learning** models have **non-convex** loss function, so it is **challenging** to reach the **global** minima, 
so any **local** minima is also a **good enough** solution. <br>
<br>
[Read more about Maxima-Minima]({{<ref  "/docs/maths/calculus/calculus_fundamentals"  >}})

{{< /panel >}}

{{< video "https://youtu.be/IIRTTngB5UE" >}}

{{< panel color="orange" title="Constrained Optimization" >}}
**Constrained Optimization:** <br>
It is an **optimization** process to find the best possible solution (min or max), but within a set of **limitations** or
**restrictions** called **constraints**. <br>
Constraints **limit** the range of **acceptable** values; they can be **equality** constraints or **inequality** constraints. <br>
e.g.: <br>
Minimize f(x) subject to following constraints: <br>
**Equality** Constraints: \( g_i(x) = c_i \forall ~i \in \{1,2,3, \ldots, n\} \) <br>
**Inequality** Constraints: \( h_j(x) \le d_j \forall ~j \in \{1,2,3, \ldots, m\}\) <br>

<br>

**Lagrangian Method:** <br>
Lagrangian method converts a **constrained** optimization problem to an **unconstrained** optimization problem, 
by introducing a new variable called **Lagrange multiplier** (\(\lambda\)). <br>

*Note: Addition of Lagrangian function that incorporates the constraints, 
makes the problem solvable using standard calculus.* <br>

e.g.: <br>
Let f(x) be the objective function with single equality constraint \(g(x) = c\), <br>
then the Lagrangian function \( \mathcal{L}\) is defined as: <br>
\[
\mathcal {L}(\lambda, x) = f(x) - \lambda(g(x) - c)
\]

Now, the above constrained optimization problem becomes an unconstrained optimization problem: <br>
\[
\underset{x^*}{\mathrm{argmin}}\  \mathcal{L}(\lambda, x)
= \underset{x^*}{\mathrm{argmin}}\  f(x) - \lambda(g(x) - c)
\]

By solving the above unconstrained optimization problem, 
we get the optimum solution for the original constrained problem. <br>

{{< /panel >}}

{{< question >}}
Find the point on the line 2x + 3y = 13 that is closest to the origin.
{{</ question >}}

{{< answer >}}
**Objective**: To minimize the distance between point (x,y) on the line 2x + 3y = 13 and the origin (0,0). <br>
distance, d = \(\sqrt{(x-0)^2 + (y-0)^2}\) <br>
=> Objective function = minimize distance = \( \underset{x^*, y^*}{\mathrm{argmin}}\ f(x,y) = 
\underset{x^*, y^*}{\mathrm{argmin}}\ x^2+y^2\) 
<br>
**Constraint**: Point (x,y) must be on the line 2x + 3y = 13. <br>
=> Constraint (equality) function = \(g(x,y) = 2x + 3y - 13 = 0\) <br>
**Lagragian** function = 
\[
\mathcal{L}(\lambda, x, y) = f(x,y) - \lambda(g(x,y)) \\[10pt]
=> \mathcal{L}(\lambda, x, y) = x^2+y^2 - \lambda(2x + 3y - 13) 
\]
To find the optimum solution, we solve the below unconstrained optimization problem. <br>
\[
\underset{x^*, y^*, \lambda}{\mathrm{argmin}}\  \mathcal{L}(\lambda, x, y)
= \underset{x^*, y^*, \lambda}{\mathrm{argmin}}\  x^2+y^2 - \lambda(2x + 3y - 13)
\]
Take the derivative and equate it to zero. <br>
Since, it is multi-variable function, we take the partial derivatives, w.r.t, x, y and \(\lambda\). <br>
\[
\tag{1} \frac{\partial}{\partial x} \mathcal{L}(\lambda, x, y) = 
\frac{\partial}{\partial x} (x^2+y^2 - \lambda(2x + 3y - 13)) = 0 \\[10pt]
 => 2x - 2\lambda = 0 \\[10pt]
=> x = \lambda
\]
<br>
\[
\frac{\partial}{\partial y} \mathcal{L}(\lambda, x, y) = 
\frac{\partial}{\partial y} (x^2+y^2 - \lambda(2x + 3y - 13)) = 0 \\[10pt]
\tag{2} => 2y - 3\lambda = 0 \\[10pt]
=> y = \frac{3}{2} \lambda
\]
<br>
\[
\frac{\partial}{\partial \lambda} \mathcal{L}(\lambda, x, y) = 
\frac{\partial}{\partial \lambda} (x^2+y^2 - \lambda(2x + 3y - 13)) = 0 \\[10pt]
\tag{3} => -2x -3y + 13 = 0
\]
<br>
Now, we have 3 variables and 3 equations (1), (2) and (3), lets solve them. <br>
\[
-2x -3y + 13 = 0 \\[10pt]
=> 2x + 3 y = 13 \\[10pt]
=> 2*\lambda + 3*\frac{3}{2} \lambda = 13 \\[10pt]
=> \lambda(2+9/2) = 13 \\[10pt]
=> \lambda = 13 * \frac{2}{13} \\[10pt]
=> \lambda = 2
=> x = \lambda = 2 \\[10pt]
=> y = \frac{3}{2} \lambda = \frac{3}{2} * 2 = 3\\[10pt]
=> x = 2, y = 3
\]

Hence, the point (x=2, y=3) on the line 2x + 3y = 13 that is closest to the origin.
{{</ answer >}}

{{< video "https://youtu.be/BDogM9wBQPo" >}}

{{< panel color="cyan" title="Note">}}
To solve the optimization problem, there are many methods, such as, **analytical method**, which gives the **normal equation** for the linear regression,
but we will discuss that method later in detail, when we have understood what is linear regression? <br> <br>
Normal Equation for linear regression:
\[
w^* = (X^TX)^{-1}X^Ty
\]
**X**: Feature variables <br>
**y**: Vector of all observed target values <br>
{{< /panel >}}

{{< video "https://www.youtube.com/watch?v=OdYNB1KRwKo&t=1s" >}}

<br><br>
<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/maths/calculus/calculus_fundamentals" >}}">Previous: Calculus Fundamentals</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/maths/calculus/gradient_descent" >}}">Next: Gradient Descent</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```