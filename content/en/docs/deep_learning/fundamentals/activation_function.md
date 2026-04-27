---
title: Activation Functions
description: Activation Functions - Sigmoid, TanH, ReLU, Softmax
date: 2026-04-27
weight: 3
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxe749nPGDV2cd6SR6zIZIJl" 
"Deep Learning Fundamentals | Full Course" >}}

{{< question >}}
Why do we need activation function?
{{< /question >}}

{{< answer >}}
Activation Function introduces **non-linearity**, which allows networks to learn complex patterns in the data.
{{</ answer >}}

{{< question >}}
Why is non-linearity important ?
{{< /question >}}

{{< answer >}}
Real-world data (images, speech, text, financial trends) is rarely linear.
Non-linearity allows the network to learn and represent complex mappings between inputs and outputs. <br>
- It enables the network to become a ‘Universal Function Approximator’.
{{</ answer >}}

{{< panel color="orange" title="Universal Approximation Theorem" >}}
A neural network with following properties can approximate any continuous function.
- at least one hidden layer 
- nonlinear activation

🎯 This theorem is the mathematical reason - why neural networks are so powerful.
{{< /panel >}}

{{< question >}}
What if we do not use any activation function ?
{{< /question >}}

{{< answer >}}
A deep neural network without any non-linear activation collapses into a single linear layer.

 Say, if, f(x) = ax and g(x) = bx, <br>
then, g(f(x)) = g(ax) = (ba)x = cx <br>
where, c = ba (another constant) 

Effectively, both the linear functions _g(f(x))_ can be represented by another single linear function _h(x)_.

❌ So depth becomes useless.
{{</ answer >}}


{{< panel color="grey" title="Common Activation Functions" >}}
- Sigmoid
- Tanh (Hyperbolic Tangent)
- ReLU (Rectified Linear Unit)
  - Leaky ReLU
- Softmax
{{< /panel >}}

{{< panel color="blue" title="Sigmoid" >}}
A mathematical function with a characteristic "S"-shaped curve (sigmoid curve) that maps any real-valued number 
into a range between 0 and 1.

\[\sigma(x) = \frac{1}{1 + e^{-x}}\]

**Usage:** <br>
Mostly used in binary classification output layers.

**Issue:** <br>
Suffers from _vanishing gradient_ (gradients become near-zero for high or low input values), which slows down training.

{{< imgproc "images/deep_learning/fundamentals/activation_function/sigmoid.png" Resize "800x" >}}{{< /imgproc >}}

{{< imgproc "images/deep_learning/fundamentals/activation_function/sigmoid_derivative.png" Resize "800x" >}}{{< /imgproc >}}

[Read more about Differentiation]({{<ref  "/docs/maths/calculus/calculus_fundamentals/#differentiation"  >}})
{{< /panel >}}

{{< panel color="red" title="Hyperbolic Tangent (TanH)" >}}
A mathematical function with a S-shaped curve that maps any real-valued number into a range between -1 and 1. <br>
It is zero-centered, making it more effective than the sigmoid function for hidden layers in neural networks.

\[tanh(x) = 2\sigma(2x) - 1 = \frac{e^x - e^{-x}}{e^x + e^{-x}}\]

**Benefit:** <br>
Makes optimization faster as the data is zero-centered.

**Issue:** <br>
TanH also suffers from _vanishing gradient_ (gradients become near-zero for high or low input values), which slows down training.

{{< imgproc "images/deep_learning/fundamentals/activation_function/tanh.png" Resize "800x" >}}{{< /imgproc >}}

{{< imgproc "images/deep_learning/fundamentals/activation_function/tanh_derivative.png" Resize "800x" >}}{{< /imgproc >}}

[Read more about Differentiation]({{<ref  "/docs/maths/calculus/calculus_fundamentals/#differentiation"  >}})
{{< /panel >}}

{{< panel color="green" title="Rectified Linear Unit (ReLU)" >}}
A mathematical function that outputs the input value directly if it is positive, and zero otherwise. <br>
Computationally simple; very fast to compute; does not saturate in the positive direction.

\[ReLU(x) = \text{max}(0,x)\]

**Benefit:** <br>
It is computationally efficient and helps mitigate the ‘vanishing gradient’ problem, making it the most popular choice for hidden layers.

**Issue:** <br>
_‘Dying ReLU’_ problem: negative inputs result in a zero gradient, meaning the neuron stops learning (no weight updates).

{{< imgproc "images/deep_learning/fundamentals/activation_function/relu.png" Resize "800x" >}}{{< /imgproc >}}

{{< imgproc "images/deep_learning/fundamentals/activation_function/relu_derivative.png" Resize "800x" >}}{{< /imgproc >}}

[Read more about Differentiation]({{<ref  "/docs/maths/calculus/calculus_fundamentals/#differentiation"  >}})
{{< /panel >}}

{{< panel color="magenta" title="Leaky Rectified Linear Unit (Leaky ReLU)" >}}
Instead of setting negative input values to zero like a standard ReLU, Leaky ReLU allows a small, 
non-zero gradient (slope) for negative values. <br>
This ensures that neurons continue learning (even for negative values).

\[Leaky ~ ReLU(x) = \text{max}(\alpha x,x)\] 
where ‘\(\alpha\)’ is a small constant (e.g., 0.01)

**Benefit:** <br>
Fixes the ‘dying ReLU’ problem.

{{< imgproc "images/deep_learning/fundamentals/activation_function/leaky_relu.png" Resize "800x" >}}{{< /imgproc >}}

{{< imgproc "images/deep_learning/fundamentals/activation_function/Leaky_relu_derivative.png" Resize "800x" >}}{{< /imgproc >}}

[Read more about Differentiation]({{<ref  "/docs/maths/calculus/calculus_fundamentals/#differentiation"  >}})
{{< /panel >}}

{{< panel color="grey" title="Softmax" >}}
Multivariate activation function that takes a vector of raw scores (logits) and converts them into a 
probability distribution; sum of probabilities = 1.


\[\sigma(\mathbf{z})_i = \frac{e^{z_i}}{\sum_{j=1}^K e^{z_j}}\] 
where ‘K’ = number of classes

**Usage:** <br>
Almost exclusively used in the output layer of multi-class classification networks.

{{< imgproc "images/deep_learning/fundamentals/activation_function/softmax.png" Resize "800x" >}}{{< /imgproc >}}

**Example:** <br>
Consider an AI model reading a product review to categorize the customer's mood into three classes:
Positive,Neutral, or Negative.

| Class | Score (Logit) | Softmax |
|-------|---------------|---------|
| Positive | 3 | 82.1% |
| Neutral | 1 | 11.1% |
| Negative | 0.5 | 6.7% |

\[\sigma(\mathbf{z})_i = \frac{e^{z_i}}{\sum_{j=1}^K e^{z_j}}\] 
\[ 
\begin{aligned}
\text{softmax(positive) } = \frac{e^{3}}{e^3 + e^1 + e^{0.5}} \\[10pt]
= \frac{20.085}{20.085 + 2.718 + 1.649} \\[10pt]
= \frac{20.085}{24.452} \\[10pt]
= 0.821 \text { or } 82.1\%
\end{aligned}
\]

Similarly, you can calculate for negative and neutral sentiments.
{{< /panel >}}

{{< video "https://youtu.be/CIq0lBUOz3w" >}}

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/deep_learning/fundamentals/xor_problem" >}}">Previous: XOR Problem</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/deep_learning/fundamentals/optimization_method" >}}">Next: Optimization Methods</a></span>
</div>
<!-- nav-panel:end -->
