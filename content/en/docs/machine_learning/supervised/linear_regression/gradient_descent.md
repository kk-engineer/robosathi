---
title: Gradient Descent
description: Gradient Descent
date: 2026-02-14
weight: 6
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxde_X17sF7iN6rnQgFlBDC-" 
"Linear Regression | All Videos" >}}
{{< panel color="blue" title="Goal 🎯" >}}
Minimize the cost 💰function.
\[J(w)=\frac{1}{2n}(y-Xw)^{2}\]
**Note**: The 1/2 term is included simply to make the derivative cleaner (it cancels out the 2 from the square).
{{< /panel >}}

{{< panel color="red" title="Issues with Normal Equation" >}}
Normal Equation (Closed-form solution) jumps straight to the optimal point in one step.
\[w=(X^{T}X)^{-1}X^{T}y\]
But it is not always feasible and computationally expensive 💰(due to inverse calculation 🧮)
{{< /panel >}}

{{< panel color="green" title="Gradient Descent 🎢" >}}
An iterative optimization algorithm slowly nudges parameters ‘w' towards a value that minimize the cost💰 function.

{{< imgproc "images/machine_learning/supervised/linear_regression/gradient_descent/slide_05_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="Algorithm ⚙️" >}}
1. Initialize the weights/parameters with random values. 
2. Calculate the gradient of the cost function at current parameter values. 
3. Update the parameters using the gradient. 
\[ w_{new} = w_{old} - \eta \frac{\partial{J(w)}}{\partial{w_{old}}} \]
\( \eta \) = learning rate or step size to take for each parameter update. 
4. Repeat 🔁 steps 2 and 3 iteratively until convergence (to minima).

{{< imgproc "images/machine_learning/supervised/linear_regression/gradient_descent/slide_07_01.png" Resize "1400x" >}}{{< /imgproc >}}

{{< /panel >}}

{{< panel color="green" title="Gradient Calculation" >}}
\[
\begin{align*}
&J(w) = \frac{1}{2n} (y - Xw)^2 \\
&\frac{\partial{J(w)}}{\partial{w}} = 
\frac{\partial{(\frac{1}{2n} (y - Xw)^2)}}{\partial{w}}
\end{align*}
\]
**Applying chain rule**:
\[
\begin{align*}
&\text{Let } u = (y - Xw) \\
&\text{Derivative of } u^2 \text{ w.r.t 'w' }= 2u.\frac{\partial{u}}{\partial{w}} \\
\frac{\partial{(\frac{1}{2n} (y - Xw)^2)}}{\partial{w}} &= \frac{1}{\cancel2n}.\cancel2(y - Xw).\frac{\partial{(y - Xw)}}{\partial{w}} \\
&= \frac{1}{n}(y - Xw).X^T.(-1) \\
\therefore \frac{\partial{J(w)}}{\partial{w}} &= \frac{1}{n}X^T(Xw - y)
\end{align*}
\]

**Note**: \(\frac{∂(a^{T}x)}{∂x}=a\)

**Update parameter** using gradient:
\[ w_{new} = w_{old} - \eta'. X^T(Xw - y) \]
{{< /panel >}}

{{< panel color="blue" title="Learning Rate" >}}
- Most important hyper parameter of gradient descent.
- Dictates the size of the steps taken down the cost function surface.

**Small \(\eta\) ->**
{{< imgproc "images/machine_learning/supervised/linear_regression/gradient_descent/slide_11_01.png" Resize "1400x" >}}{{< /imgproc >}}
**Large \(\eta\) ->**
{{< imgproc "images/machine_learning/supervised/linear_regression/gradient_descent/slide_11_02.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Learning Rate Techniques" >}}
- **Learning Rate Schedule**: <br>
The learning rate is **decayed** (reduced) over time. <br>
Large steps initially and **fine-tuning** near the minimum, e.g., step decay or exponential decay.
- **Adaptive Learning Rate Methods**: <br>
Automatically adjust the learning rate for each parameter ‘w' based on the **history of gradients**. <br>
Preferred in modern **deep learning** as they require less manual tuning, e.g., Adagrad, RMSprop, and Adam.
{{< /panel >}}

{{< video "https://youtu.be/I23bqvGWPEM" >}}

{{< panel color="green" title="Types of Gradient Descent 🎢">}}
Batch, Stochastic, Mini-Batch are classified by **data usage** for gradient calculation in each iteration.
- Batch Gradient Descent (BGD): *Entire Dataset*
- Stochastic Gradient Descent (SGD): *Random Point*
- Mini-Batch Gradient Descent (MBGD): *Subset*
{{< /panel >}}

{{< panel color="navy" title="Batch Gradient Descent 🎢 (BGD)" >}}
Computes the gradient using **all** the data points in the dataset for parameter update in each iteration.

\[w_{new} = w_{old} - \eta.\text{(average of all ’n’ gradients)}\]

🔑**Key Points**:
- Slow 🐢 steps towards convergence, i.e, TC = O(n).
- Smooth, direct path towards minima.
- Minimum number of steps/iterations.
- Not suitable for large datasets; impractical for Deep Learning, as n = millions/billions.
{{< /panel >}}

{{< panel color="orange" title="Stochastic Gradient Descent 🎢 (SGD)" >}}
Uses only 1 data point selected randomly from dataset to compute gradient for parameter update in each iteration.
\[w_{new} = w_{old} - \eta.\text{(gradient at any random data point)}\]

🔑**Key Points**:
- Computationally fastest 🐇 per step; TC = O(1).
- Highly noisy, zig-zag path to minima.
- High variance in gradient estimation makes path to minima volatile, requiring a careful decay of learning rate to ensure convergence to minima.
{{< /panel >}}

{{< panel color="blue" title="Mini Batch Gradient Descent 🎢 (MBGD)" >}}
- Uses small randomly selected subsets of dataset, called mini-batch, (1<k<n), to compute gradient for parameter update in each iteration.
\[w_{new} = w_{old} - \eta.\text{(average gradient of ‘k' data points)}\]

🔑**Key Points**:
- Moderate time ⏰ consumption per step; TC = O(k<n).
- Less noisy, and more reliable convergence than stochastic gradient descent.
- More efficient and faster than batch gradient descent.
- Standard optimization algorithm for Deep Learning.Note: Vectorization on GPUs allows for parallel processing of mini-batches; also GPUs are the reason for the mini-batch size to be a power of 2.
{{< /panel >}}

{{< panel color="grey" title="BGD vs SGD vs Mini-BGD" >}}
{{< imgproc "images/machine_learning/supervised/linear_regression/types_of_gradient_descent/slide_08_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< imgproc "images/machine_learning/supervised/linear_regression/types_of_gradient_descent/slide_09_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/3Nt-lWj4Wvs" >}}

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/linear_regression/convex_function" >}}">Previous: Convex Function</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/linear_regression/polynomial_regression" >}}">Next: Polynomial Regression</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```