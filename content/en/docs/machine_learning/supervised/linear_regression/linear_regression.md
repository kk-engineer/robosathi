---
title: Linear Regression
description: Linear Regression
date: 2026-02-12
weight: 3
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxde_X17sF7iN6rnQgFlBDC-" 
"Linear Regression | All Videos" >}}
<br>

{{< panel color="blue" title="Predict Salary" >}}
Let's understand linear regression using an example to predict salary.

Predict the salary 💰 of an IT employee, based on various factors, such as, years of experience, domain, role, etc.
{{< imgproc "images/machine_learning/supervised/linear_regression/salary_prediction.png" Resize "400x" >}}{{< /imgproc >}}

Let's start with a simple problem and predict the salary using only one input feature.

**Goal** 🎯 : Find the line of best fit.

**Plot: Salary vs Years of Experience**
\[y = mx + c = w_1x + w_0\]
**Slope** = \(m = w_1 \) <br>
**Intercept** = \(c = w_0\) <br>

{{< imgproc "images/machine_learning/supervised/linear_regression/salary_yoe.png" Resize "1400x" >}}{{< /imgproc >}}
Similarly, if we include other factors/features impacting the salary 💰, such as, domain, role, etc, 
we get an equation of a fitting **hyperplane**:

\[y = w_1x_1 + w_2x_2 + \dots + w_dx_d + w_0\]
where, 
\[ 
\begin{align*}
x_1 &= \text{Years of Experience} \\
x_2 &= \text{Domain (Tech, BFSI, Telecom, etc.)} \\ 
x_3 &= \text{Role (Dev, Tester, DevOps, ML, etc.)} \\
x_d &= d^{th} ~ feature \\
w_0 &= \text{Salary of 0 years experience} \\
\end{align*} 
\]
{{< /panel >}}

{{< question >}}
What is the dimensions of the fitting hyperplane?
{{</ question >}}

{{< answer >}}
**Space** = 'd' features + 1 target variable = **'d+1' dimensions** 
<br>
In a **'d+1' dimensional *space***, we try to fit a **'d' dimensional *hyperplane***.
{{< imgproc "images/machine_learning/supervised/linear_regression/fitting_hyperplane.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /answer >}}

{{< video "https://youtu.be/ylgshdNFtc8" >}}

{{< panel color="green" title="Parameters/Weights of the Model" >}}
Let, **data** = \( {(x_i, y_i)}_{i=1}^N ; ~ x_i \in R^d , y_i \in R^d\) <br>
where, N = number of training samples.
<br>
{{< imgproc "images/machine_learning/supervised/linear_regression/linear_regression_data.png" Resize "800x" >}}{{< /imgproc >}}

*Note: Fitting hyperplane (\(y = w_1x_1 + w_2x_2 + \dots + w_dx_d + w_0\)) is the model.*
<br>
**Objective** 🎯: find the parameters/weights (\(w_0, w_1, w_2, \dots w_d \)) of the model.
<br>
 
\(\mathbf{w} = \begin{bmatrix} w_1 \\ w_2 \\ \vdots \\ w_d \end{bmatrix}_{\text{d x 1}}\)
\( \mathbf{x_i} = \begin{bmatrix} x_{i_1} \\ x_{i_2} \\ \vdots \\ x_{i_d} \end{bmatrix}_{\text{d x 1}} \)
\( \mathbf{y} = \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_i \\ \vdots \\ y_n \end{bmatrix}_{\text{n x 1}} \)
\( X = 
\begin{bmatrix}
x_{11} & x_{12} & \cdots & x_{1d} \\
x_{21} & x_{22} & \cdots & x_{2d} \\
\vdots & \vdots & \ddots & \vdots \\
x_{i1} & x_{i2} & \cdots & x_{id} \\
\vdots & \vdots & \ddots & \vdots \\
x_{n1} & x_{n2} & \cdots & x_{nd} \\
\end{bmatrix}
_{\text{n x d}}
\)
<br>
**Prediction**: \[ \hat{y_i} = w_1x_{i_1} + w_2x_{i_2} + \dots + w_dx_{i_d} + w_0 \]
\[ i^{th} \text{ Prediction } = \hat{y_i} = x_i^Tw + w_0\]
**Error = Actual - Predicted**
\[ \epsilon_i = y_i - \hat{y_i}\]

**Goal** 🎯: Minimize error between actual and predicted.
{{< /panel >}}

{{< panel color="navy" title="Loss 💸 Function" >}}
We can **quantify** the **error** for a **single** data point in following ways:
- **Absolute error** = \(|y_i - \hat{y_i}|\)
- **Squared error** = \((y_i - \hat{y_i})^2\)
{{< /panel >}}

{{< panel color="red" title="Issues with Absolute Value function" >}}
- **Not differentiable** at x=0, required for gradient descent.
- **Constant gradient**, i.e \(\pm 1\), model learns at same rate, whether the error is large or small.

{{< imgproc "images/machine_learning/supervised/linear_regression/absolute_value_function.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Cost 💰 Function" >}}
**Average loss** across all data points. <br>

**Mean Squared Error (MSE)** = \[ J(w) = \frac{1}{n} \sum_{i=1}^N (y_i - \hat{y_i})^2 \]
{{< imgproc "images/machine_learning/supervised/linear_regression/mean_squared_error.png" Resize "1400x" >}}{{< /imgproc >}}

{{< /panel >}}

{{< panel color="green" title="Optimization" >}}
\[
\begin{align*}
\underset{w_0, w}{\mathrm{min}}\ J(w) &= \underset{w_0, w}{\mathrm{min}}\ \frac{1}{n} \sum_{i=1}^N (y_i - \hat{y_i})^2 \\
&= \underset{w_0, w}{\mathrm{min}}\ \frac{1}{n} \sum_{i=1}^N (y_i - (x_i^Tw + w_0))^2 \\
&= \underset{w_0, w_1, w_2, \dots w_d}{\mathrm{min}}\ \frac{1}{n} \sum_{i=1}^N (y_i - (w_1x_{i_1} + w_2x_{i_2} + \dots + w_dx_{i_d} + w_0))^2 \\
\underset{w_0, w}{\mathrm{min}}\ J(w) &= \underset{w_0, w_1, w_2, \dots w_d}{\mathrm{min}}\ \frac{1}{n} \sum_{i=1}^N y_i^2 + w_0^2 + w_1^2x_{i_1}^2 + w_2^2x_{i_2}^2 + \dots + w_d^2x_{i_d}^2 + \dots \\
\end{align*}
\]
The above equation is **quadratic** in \(w_0, w_1, w_2, \dots w_d \).

Below is an image of a **Paraboloid** in 3D, similarly we will have a *Paraboloid* in 'd' dimensions.
{{< imgproc "images/machine_learning/supervised/linear_regression/paraboloid.png" Resize "1400x" >}}{{< /imgproc >}}

{{< /panel >}}

{{< panel color="orange" title="Find the Minima" >}}
In order to find the **minima** of the **cost function** we need to take its **derivative** w.r.t weights and equate to 0.

\[
\begin{align*}
\frac{\partial{J(w)}}{\partial{w_0}} = 0 \\
\frac{\partial{J(w)}}{\partial{w_1}} = 0 \\
\frac{\partial{J(w)}}{\partial{w_2}} = 0 \\
\vdots \\
\frac{\partial{J(w)}}{\partial{w_d}} = 0 \\
\end{align*}
\]

We have **‘d+1’** linear equations to solve for **‘d+1’ weights** \(w_0, w_1, w_2, \dots , w_d\).

But solving ‘d+1’ system of linear equations (called the **'normal equations’**) is *tedious* and NOT used for practical purposes.
{{< /panel >}}

{{< video "https://youtu.be/KgCVUd0A9bU" >}}

{{< panel color="blue" title="Matrix Form of Cost Function" >}}
\[ J(w) = \frac{1}{n} \sum_{i=1}^n (y_i - \hat{y_i})^2 \]
\[ J(w) = \frac{1}{n} (y - Xw)^2 \]

where, 
\(\mathbf{w} = \begin{bmatrix} w_1 \\ w_2 \\ \vdots \\ w_d \end{bmatrix}_{\text{d x 1}}\)
\( \mathbf{x_i} = \begin{bmatrix} x_{i_1} \\ x_{i_2} \\ \vdots \\ x_{i_d} \end{bmatrix}_{\text{d x 1}} \)
\( \mathbf{y} = \begin{bmatrix} y_1 \\ y_2 \\ \vdots \\ y_i \\ \vdots \\ y_n \end{bmatrix}_{\text{n x 1}} \)
\( X = 
\begin{bmatrix}
x_{11} & x_{12} & \cdots & x_{1d} \\
x_{21} & x_{22} & \cdots & x_{2d} \\
\vdots & \vdots & \ddots & \vdots \\
x_{i1} & x_{i2} & \cdots & x_{id} \\
\vdots & \vdots & \ddots & \vdots \\
x_{n1} & x_{n2} & \cdots & x_{nd} \\
\end{bmatrix}
_{\text{n x d}}
\)
<br>
**Prediction**: \[ \hat{y_i} = w_1x_{i_1} + w_2x_{i_2} + \dots + w_dx_{i_d} + w_0 \]
<br>

Let's **expand** the cost function J(w):
\[
\begin{align*}
J(w) &= \frac{1}{n} (y - Xw)^2 \\
&= \frac{1}{n} (y - Xw)^T(y - Xw) \\
&= \frac{1}{n} (y^T - w^TX^T)(y - Xw) \\
J(w) &= \frac{1}{n} (y^Ty - w^TX^Ty - y^TXw + w^TX^TXw)
\end{align*}
\]

Since,\(w^TX^Ty\), is a **scalar**, so it is equal to its **transpose**.
\[ w^TX^Ty = (w^TX^Ty)^T = y^TXw\]
\[ J(w) = \frac{1}{n} (y^Ty - y^TXw - y^TXw + w^TX^TXw)\]
\[ J(w) = \frac{1}{n} (y^Ty - 2y^TXw + w^TX^TXw) \]

**Note**: \(X^2 = X^TX\) and \((AB)^T = B^TA^T\)

{{< /panel >}}

{{< panel color="green" title="Normal Equation" >}}
To find the **minimum**, take the derivative of  cost function J(w)  w.r.t ‘w’, and equate to 0 vector.
\[\frac{\partial{J(w)}}{\partial{w}} = \vec{0}\]

\[
\begin{align*}
&\frac{\partial{[\frac{1}{n} (y^Ty - 2y^TXw + w^TX^TXw)]}}{\partial{w}}  = 0\\
& \implies 0 - 2X^Ty + (X^TX + X^TX)w = 0 \\
& \implies \cancel{2}X^TXw = \cancel{2} X^Ty \\
& \therefore \mathbf{w} = (X^TX)^{-1}X^T\mathbf{y}
\end{align*}
\]

**Note**: \(\frac{\partial{(a^T\mathbf{x})}}{\partial{\mathbf{x}}} = a\) and 
\(\frac{\partial{(\mathbf{x}^TA\mathbf{x})}}{\partial{\mathbf{x}}} = (A + A^T)\mathbf{x}\)

This is the **closed-form** solution of **normal equations**.

{{< /panel >}}

{{< panel color="red" title="Issues with Normal Equation">}}
- Inverse may NOT exist (**non-invertible**).
- **Time complexity** of calculating the **inverse** is **O(n^3)**.
{{< /panel >}}

{{< panel color="blue" title="Pseudo Inverse">}}
If the inverse does NOT exist then we can use the approximation of the inverse, also called **Pseudo Inverse**
or **Moore Penrose Inverse** (\(A^+\)).

Moore Penrose Inverse ( \(A^+\)) is calculated using **Singular Value Decomposition (SVD)**.

**SVD** of \(A = U \Sigma V^T\)

**Pseudo Inverse** \(A^+ = V \Sigma^+ U^T\)

Where, \(\Sigma^+\) is a transpose of \(\Sigma\) with reciprocals of non-zero singular values on its diagonals.
<br>
e.g:
\[ \Sigma = \begin{bmatrix} 5 & 0 & 0 \\\\ 0 & 2 & 0 \end{bmatrix} \]
\[
\Sigma ^{+}=\left[\begin{matrix}1/5&0\\ 0&1/2\\ 0&0\end{matrix}\right]=\left[\begin{matrix}0.2&0\\ 0&0.5\\ 0&0\end{matrix}\right]
\]

**Note**: Time Complexity = O(mn^2)
{{< /panel >}}

{{< video "https://youtu.be/E-1kMEymBuA" >}}
<br><br>
```End of Section```