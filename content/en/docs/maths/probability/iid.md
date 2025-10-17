---
title: I.I.D
description: Independent & Identically Distributed (I.I.D) Random Variables
date: 2025-10-17
weight: 11
math: true
---

{{% pageinfo %}}
In this section, we will understand Independent & Identically Distributed(I.I.D) Random Variables.<br>
{{% /pageinfo %}}

There are 2 parts in IID, Independent and Identically Distributed. <br> 
Let's revisit and understand independence of random variables first. <br>

{{< definition >}}
**Independence of Random Variables** <br>
It means that the knowing the outcome of one random variable does not impact the probability of the other random variable. <br>
Two random variables X & Y are independent if: <br>

\[
CDF = F_{X,Y}(x,y) = F_{X}(x)F_{Y}(y) \\
\text{ }\\
\text{Generalised for 'n' random variables:} \\
CDF = F_{X_1,X_2,...,X_n}(x_1,x_2,...,x_n) = \prod_{i=1}^{n}F_{X_i}(x_i) \\
\text{Discrete case: } \\
PMF = P_{X,Y}(x,y) = P_{X}(x)P_{Y}(y) \\
\text{ }\\
\text{Continuous case: } \\
PDF = f_{X,Y}(x,y) = f_{X}(x)f_{Y}(y) \\
\]
<br>

- _We know that if 2 random variables X,Y are independent, then their covariance is zero, 
since there is no linear relationship between them._ <br>
- _But the converse may NOT be true, i.e, if the covariance is zero, then we can say for sure that the random variables 
are independent._ <br>

[Read more about Covariance]({{<ref  "/docs/maths/probability/expectation"  >}})
\[
\text{For independent events: }\\
Cov(X,Y) = E[XY] - E[X]E[Y] = 0 \\
=> E[XY] = E[X]E[Y] \\
\text{ }\\
\text{We know that:  }\\
Var(X+Y) = Var(X) + Var(Y) + 2Cov(X,Y) \\
\text{ }\\
\text{But, for independent events Cov(X,Y)=0}, so: \\
Var(X+Y) = Var(X) + Var(Y) \\
\]

{{</ definition >}}
Let's go through few examples to understand independence of random variables. <br>
For example: <br>

1. Toss a coin + Roll a die. <br>
\[
X = 
\begin{cases}
1 & \text{if Heads}  \\
0 & \text{if Tails} 
\end{cases} \\
\text{} \\
Y = \{1,2,3,4,5,6\} \\
\text{} \\
\Omega = \{ (H,1), (H,2), (H,3), (H,4), (H,5), (H,6), \\
(T,1), (T,2), (T,3), (T,4), (T,5), (T,6) \}
\]

Here, clearly, X and Y are independent. <br>

2. Toss a coin twice. <br>