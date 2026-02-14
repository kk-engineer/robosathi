---
title: Convex Function
description: Convex Function
date: 2026-02-14
weight: 5
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxde_X17sF7iN6rnQgFlBDC-" 
"Linear Regression | All Videos" >}}
<br>

{{< panel color="blue" title="Convexity" >}}
Refers to a property of a function where a line segment connecting any two points on its graph lies above or on the graph itself.
- A convex function is curved upwards.

{{< imgproc "images/machine_learning/supervised/linear_regression/convex_function/slide_01_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< imgproc "images/machine_learning/supervised/linear_regression/convex_function/slide_03_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Is MSE Cost function Convex ? YES ✅" >}}
MSE cost function J(w) is convex because its Hessian (H) is always positive semi definite.
\[\nabla J(\mathbf{w})=\frac{1}{n}\mathbf{X}^{T}(\mathbf{Xw}-\mathbf{y})\]
\[\mathbf{H}=\frac{\partial (\nabla J(\mathbf{w}))}{\partial \mathbf{w}^{T}}=\frac{1}{n}\mathbf{X}^{T}\mathbf{X}\]
\[\therefore \mathbf{H} = \nabla^2J(w) =  \frac{1}{n} \mathbf{X}^{T}\mathbf{X}\]
{{< imgproc "images/machine_learning/supervised/linear_regression/convex_function/slide_05_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="MSE: Positive Semi Definite (Proof)" >}}
A matrix H is **positive semi-definite** *if and only if* for any non-zero vector ‘z', the quadratic form \(z^THz \ge 0\).

For the Hessian of J(w),
\[ z^THz = z^T(\frac{1}{n}X^TX)z = \frac{1}{n}(Xz)^T(Xz) \]

\((Xz)^T(Xz) = \lVert Xz \rVert^2\) = squared L2 norm (magnitude) of the vector

**Note**: The squared norm of any real-valued vector is always \(\ge 0\).
{{< /panel >}}

{{< video "https://youtu.be/PIWtSJvxYFs" >}}
<br><br>
<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/linear_regression/probabilistic_interpretation" >}}">Previous: Probabilistic Interpretation</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/linear_regression/gradient_descent" >}}">Next: Gradient Descent</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```