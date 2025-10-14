---
title: Probability Density Function
description: Probability Density Function of a Continuous Random Variable
date: 2025-10-14
weight: 7
math: true
---

{{% pageinfo %}}
In this section, we will understand Probability Density Function of a Continuous Random Variable.<br>
{{% /pageinfo %}}

{{< definition >}}
**Probability Density Function(PDF):** <br>
This is a function used for continuous random variables to describe the likelihood of the variable taking on a value
within a specific range or interval. <br>
Since, at any given point the probability of a continuous random variable is zero, 
we find the probability within a given range. <br>
*Note: Called **'density'** because probability is spread continuously over a range of values 
rather than being concentrated at a single point as in PMF.* <br>
e.g: _Uniform_, _Gaussian_, _Exponential_, etc. <br><br>

*Note: PDF is a continuous function \(f(x)\). <br>
It is also the derivative of Cumulative Distribution Function (CDF) \(F_X(x)\)* <br><br>
\(PDF = f(x) = F'(X) = \frac{dF_X(x)}{dx} \)

{{</ definition >}}

{{< alert title="Key properties of PDF" color="success" >}}
1. **Non-Negative:** Function must be non-negative everywhere i.e \(f(x) \ge 0 \forall x\). <br>
2. **Sum = 1:** Total area under curve must be equal to 1. <br>
\( \int_{-\infty}^{\infty} f(x) \,dx = 1\) <br>
3. Probability of a continuous random variable in the range [a,b] is given by - <br>
\( P(a \le x \le b) = \int_{a}^{b} f(x) \,dx\)
{{< /alert >}}

{{< alert title="Note" color="warning" >}}
We use a general term **Probability Distribution Function** for both **PMF**(_discrete_) and **PDF**(_continuous_) 
because both describe how the probability is distributed across a random variable's entire domain.
{{< /alert >}}

For example: <br>
Consider a line segment/interval from \(\Omega = [0,2] \) <br>
Random variable \(X(\omega) = \omega\) <br>
i.e \(X(1) = 1 ~and~ X(1.1) = 1.1 \) <br>

$$
F_X(x) = P(X \leq x) =
\begin{cases}
\frac{x}{2} & \text{if } x \in [0,2] \\
1 & \text{if } x > 2 \\
0 & \text{if } x < 0
\end{cases}
$$
<br>

$$
\begin{aligned}
PDF = f_X(x) = \frac{dF_X(x)}{dx} \\
\end{aligned}
$$
$$
\text{PDF } = f_X(x) =
\begin{cases}
\dfrac{1}{2}, & x \in [0,2] \\
0, & \text{otherwise.}
\end{cases}
$$

![](https://robosathi.com/images/pdf_uniform.png)
<br>
*Note: If we know the PDF of a continuous random variable, then we can find the probability of any given region/interval
by calculating the area under the curve.* <br><br>

{{< video "https://www.youtube.com/watch?v=aa9hiJhQvvI" >}}

<br><br>

```End of Section```