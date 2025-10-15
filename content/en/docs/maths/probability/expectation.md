---
title: Expectation
description: Expectation of a Random Variable
date: 2025-10-15
weight: 8
math: true
---

{{% pageinfo %}}
In this section, we will understand Expectation, Variance and Co-Variance of a Random Variable.<br>
{{% /pageinfo %}}

{{< definition >}}
**Expectation:** <br> 
Long run average of the outcomes of a random experiment.<br>
When we talk about '_Expectation_' we mean - on an average. <br>
- Value we expect to get when we repeated an experiment multiple times and took an average of the results.
- Measures the central tendency of a data distribution.
- Similar to 'Center of Mass' in Physics.

*Note: If the probability of each outcome is different, then we take a weighted average.* <br>

**Discrete Case:** <br>
\(E[X] = \sum_{i=1}^{n} x_i.P(X = x_i) \) <br>

**Continuous Case:** <br>
\(E[X] = \int_{-\infty}^{\infty} x.f(x) dx \) <br>
{{< /definition >}}

{{< question >}}
Let's play a game where we flip a fair coin. If we get a head, then you win Rs. 100, and  
if its a tail, then you lose Rs. 50. What is the expected value of the amount that you will win per toss?
{{< /question >}}

{{< answer >}}
Possible outcomes are: \(x_1 = 100 ,~ x_2 = -50 \) <br>
Probability of each outcome is \(P(X = 100) = 0.5,~ P(X = -50) = 0.5 \) <br>
\[
E[X] = \sum_{i=1}^{n} x_i.P(X = x_i) \\
= x_1.P(X = x_1) + x_2.P(X = x_2) \\
= 100*0.5 + (-50)*0.5 \\
= 50 - 25 \\
= 25
\]

Therefore, the expected value of the amount that you will win per toss is Rs. 25 in the long run.
{{< /answer >}}


{{< question >}}
What is the expected value of a continuous uniform random variable distributed over the interval [a,b]?
{{< /question >}}

{{< answer >}}
$$
\text{PDF of continuous uniform random variable } = \\
f_X(x) = 
\begin{cases}
\dfrac{1}{b-a}, & x \in [a,b] \\
0, & \text{otherwise.}
\end{cases}
$$

\[
\text{Expected value of continuous uniform random variable } = \\
E[X] = \int_{-\infty}^{\infty} x.f(x) dx \\
= \int_{-\infty}^{a} x.f(x) dx + \int_{a}^{b} x.f(x) dx + \int_{b}^{\infty} x.f(x) dx\\
\text{Since, the PDF is defined only in the range [a,b] } \\
= 0 + \int_{a}^{b} x.f(x) dx + 0 \\
= \int_{a}^{b} x.f(x) dx \\
= \dfrac{1}{b-a} \int_{a}^{b} x dx \\
= \dfrac{1}{b-a} (\frac{x^2}{2})_{a}^{b} \\
= \dfrac{1}{b-a} * (\frac{b^2 - a^2}{2}) \\
= \dfrac{1}{b-a} * \{\frac{(b+a)(b-a)}{2}\}\\
= \dfrac{b+a}{2} 
\] 
<br>
{{< /answer >}}


<br><br>
```End of Section```