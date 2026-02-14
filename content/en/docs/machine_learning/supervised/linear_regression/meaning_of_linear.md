---
title: Meaning of 'Linear'
description: Meaning of 'Linear' in Linear Regression
date: 2026-02-11
weight: 1
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxde_X17sF7iN6rnQgFlBDC-" 
"Linear Regression | All Videos" >}}
<br>

{{< question >}}
What is the meaning of “linear” in Linear Regression ?
{{</ question >}}

{{< answer >}}
Equation of a line is of the form \(y = mx + c\). <br>
To represent a **line** in 2D space, we need 2 things: <br>
1. **m** = slope or **direction** of the line <br>
2. **c** = y-intercept or **distance** from the **origin** <br>

{{< imgproc "images/machine_learning/supervised/linear_regression/line.png" Resize "800x" >}}{{< /imgproc >}}

Similarly,<br>
A **hyperplane** is a lower (d-1) dimensional **sub-space** that **divides** a d-dimensional space into 2 **distinct** parts.
**Equation of a hyperplane:** 
\[y = w_1x_1 + w_2x_2+ \dots + w_nx_n + w_0 \\[5pt]
\implies y = w^Tx + w_0\]
Here, **‘y’** is expressed as a **linear combination** of **parameters** - \( w_0, w_1, w_2,  \dots, w_n \)
<br>
Hence - **Linear** means the model is **‘linear’** with respect to its ***parameters*** NOT the **variables**.
<br>
[Read more about Hyperplane]({{<ref  "/docs/maths/linear_algebra/hyperplane/"  >}}) 
<br>
{{< imgproc "images/machine_learning/supervised/linear_regression/hyperplane.png" Resize "800x" >}}{{< /imgproc >}}

{{</ answer >}}

{{< panel color="green" title="Polynomial Features ✅" >}}
\[ y = w_1x_1 + w_2x_2 + w_3x_1^2 + w_4x_2^3 + w_0 \] 
can be rewritten as:
\[y = w_1x_1 + w_2x_2 + w_3x_3 + w_4x_4 + w_0\]
where, \(x_3 = x_1^2 ~ and ~ x_4 = x_2^3 \) <br>
\(x_3 ~ and ~ x_4 \) are just 2 new (polynomial) variables. <br>
And, **‘y’** is still a **linear combination** of **parameters**: \(w_0, w_1, \dots w_4\)
{{< imgproc "images/machine_learning/supervised/linear_regression/hypersurface.png" Resize "800x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Non-Linear Features ✅" >}}
\[ y = w_1log(x) + w_2\sqrt{x}+ w_0 \] 
can be rewritten as:
\[y = w_1x_1 + w_2x_2 + w_0\]
where, \(x_1 = log(x) ~ and ~ x_2 = \sqrt{x} \) <br>
\(x_1 ~ and ~ x_2 \) are are transformations of variable \(x\). <br>
And, **‘y’** is still a **linear combination** of **parameters**: \(w_0, w_1, ~and~ w_2\)
{{< imgproc "images/machine_learning/supervised/linear_regression/non_linear_features.png" Resize "800x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="rust" title="Non-Linear Parameters ❌" >}}
\[ y = x_1^{w_1} + x_2^{w_2} +  w_0 \] 
Even if we take log, we get:
\[log(y) = w_1log(x_1) + w_2log(x_2) + log(w_0)\]
here, \(log(w_0) \) parameter is NOT linear.<br>
{{< imgproc "images/machine_learning/supervised/linear_regression/exponential.png" Resize "800x" >}}{{< /imgproc >}}
{{< /panel >}}
<br>

{{< panel color="blue" title="Importance of Linearity" >}}
*Linearity* in **parameters** allows to use *Ordinary Least Squares (OLS)* to find the *best-fit* coefficients by solving 
a set of linear equations, making estimation *straightforward*.
{{< /panel >}}

{{< video "https://youtu.be/iRioqzKpJI4" >}}
<br><br>
<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/linear_regression/meaning_of_regression" >}}">Next: Meaning of 'Regression</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```