---
title: Gradient Descent
description: Gradient Descent for Optimization
date: 2025-10-31
weight: 5
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfzDh2D3OqVo-piGAZQPWDj" 
        "Calculus for AI & ML | Full Course Videos">}}

{{< panel color="orange" title="Gradient Based Optimization" >}}
_Till now, we have understood how to formulate a minimization problem as a mathematical optimization problem. <br> 
Now, lets take a step forward and understand how to solve these optimization problems._ <br>

We will focus on two important iterative gradient based methods: <br>
1. **Gradient Descent**: First order method, uses only the gradient.
2. **Newton's Method**: Second order method, used both the gradient and the Hessian.

{{< /panel >}}

{{< definition >}}
**Gradient Descent:** <br>
It is a **first order** iterative optimization algorithm that is used to find the local **minimum** of a **differentiable** function. <br>
It **iteratively** adjusts the **parameters** of the model in the direction **opposite** to the gradient of cost function,
since moving opposite to the direction of gradient leads towards the **minima**. <br>
<br>

**Algorithm:** <br>
1. Initialize the weights/parameters with random values.
2. Calculate the gradient of the cost function at current parameter values.
3. Update the parameters using the gradient.
\[
w_{new} = w_{old} - \eta \cdot \frac{\partial f}{\partial w_{old}} \\[10pt]
\eta: \text{ learning rate or step size to take for each parameter update}
\]

4. Repeat steps 2 and 3 iteratively until convergence (to minima).

{{< imgproc "images/maths/calculus/optimization/gradient_descent.png" Resize "800x" >}}{{< /imgproc >}}

{{</ definition >}}

{{< panel color="green" title="Types of Gradient Descent" >}}
There are 3 types of Gradient Descent:
1. **Batch Gradient Descent**
2. **Stochastic Gradient Descent**
3. **Mini-Batch Gradient Descent**

**Batch Gradient Descent (BGD):** <br>
Computes the gradient using **all** the data points in the dataset for parameter update in each iteration. <br>
Say, number of data points in the dataset is \(n\). <br>
Let, the loss function for individual data point be \(l_i(w)\) <br>
\[
l_i(w) = (y_i -\hat{y}_i)^2 \\[10pt]
L(w) = \frac{1}{n} \sum_{i=1}^{n} l_i(w) \\[10pt]
\frac{\partial L}{\partial w} = \frac{1}{n} \sum_{i=1}^{n} \frac{\partial l_i}{\partial w} \\[10pt]
w_{new} = w_{old} - \eta \cdot \frac{\partial L}{\partial w_{old}} \\[10pt]
w_{new} = w_{old} - \eta \cdot (\text{average of all 'n' gradients})
\]

**Key Points:** <br>
1. **Slow** steps towards convergence, i.e, TC = O(n).
2. Smooth, **direct** path towards minima.
3. Number of steps/iterations is **minimum**.
4. **Not** suitable for **large** datasets; impractical for Deep Learning, as n = millions/billions.

<br><br>

**Stochastic Gradient Descent (SGD):** <br>
It uses only 1 data point selected randomly from dataset to compute gradient for parameter update in each iteration. <br>
\[
\frac{\partial L}{\partial w} \approx \frac{\partial l_i}{\partial w}, \text { say i = 5} \\[10pt]
w_{new} = w_{old} - \eta \cdot (\text{gradient of i-th data point})
\]

**Key Points:** <br>
1. Computationally **fastest** per step; TC = O(1).
2. Highly noisy, **zig-zag** path to minima.
3. High variance in gradient estimation makes path to minima volatile, requiring a careful **decay** of learning rate
\(\eta\) to ensure convergence to minima.

<br><br>

**Mini Batch Gradient Descent (MBGD):** <br>
It uses small **randomly** selected subsets of dataset, called **mini-batch**, (1<k<n) to compute gradient for 
parameter update in each iteration. <br>
\[
\frac{\partial L}{\partial w} = \frac{1}{n} \sum_{i=1}^{k} \frac{\partial l_i}{\partial w} , \text { say k = 32} \\[10pt]
w_{new} = w_{old} - \eta \cdot (\text{average gradient of k data points})
\]

**Key Points:** <br>
1. **Moderate** time consumption per step; TC = O(k<n).
2. Less noisy, and more **reliable** convergence than stochastic gradient descent.
3. More **efficient** and **faster** than batch gradient descent.
4. Standard optimization algorithm for Deep Learning. <br>
*Note: Vectorization on GPUs allows for parallel processing of mini-batches; 
also GPUs are the reason for the mini-batch size to be a power of 2.*

{{< /panel >}}

{{< video "https://youtu.be/OdYNB1KRwKo?si=AzdYvM6hpkQEK9Kc&t=3350" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/maths/calculus/optimization" >}}">Previous: Optimization</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/maths/calculus/newton's_method" >}}">Next: Newton's Method</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```