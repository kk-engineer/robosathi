---
title: Independent & Identically Distributed
description: Independent & Identically Distributed (I.I.D) Random Variables
date: 2025-10-17
weight: 11
math: true
---

{{% pageinfo %}}
In this section, we will understand Independent & Identically Distributed(I.I.D) Random Variables.<br>
{{% /pageinfo %}}

{{< playlist "https://youtube.com/playlist?list=PLnpa6KP2ZQxde666MKUXEIGtQXHaJxpdj" 
        "Probability for AI & ML | Full Course Videos">}}
<br>

There are 2 parts in I.I.D, "**Independent**" and "**Identically Distributed**". <br> 
Let's revisit and understand the **independence** of random variables first. <br>

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
Let's go through few examples to understand the independence of random variables. <br>
For example: <br>

1. Toss a coin + Roll a die. <br>
\[
X = 
\begin{cases}
1 & \text{if Heads}  \\
\\
0 & \text{if Tails} 
\end{cases} \\
\text{} \\
Y = \{1,2,3,4,5,6\} \\
\text{} \\
\text{ Joint probability is all possible combinations of X and Y i.e 2x6 = 12 } \\[10pt]
\text{ Sample space: } \Omega = \{ (H,1), (H,2), (H,3), (H,4), (H,5), (H,6), \\
(T,1), (T,2), (T,3), (T,4), (T,5), (T,6) \}
\]

Here, clearly, X and Y are independent. <br>

2. Toss a coin twice. <br>
\(X\) = Number of heads = \(\{0,1,2\}\) <br>
\(Y\) = Number of tails = \(\{0,1,2\}\) <br>

X, Y are NOT independent, but mutually exclusive, because if we know about one, then we automatically know about the other. <br>

3. \(X\) is a continuous uniform random variable \( X \sim U(-1,1) \). <br>
\(Y = 2X\). <br>

\[
f_X(x) = 
\begin{cases} 
\frac{1}{b-a} = \frac{1}{1-(-1)} = \frac{1}{2}  & \text{if } x \in [a,b]  \\
\\
0 & \text{otherwise} 
\end{cases} \\
\text{}\\
E[X] = \text{ mean } =  \frac{a+b}{2} = \frac{-1+1}{2} = 0 \\
\]
<br>
Let's check for independence of \(X\) and \(Y\) i.e \(E[XY] = E[X]E[Y]\) or not? <br>
\[
\text{We know that: } E[X] = 0\\
E[Y] = E[2X] = 2E[X] = 0 \\
\tag{1} E[X]E[Y] = 0
\]
Now, lets calculate the value of \(E[XY]\): <br>
\[
\begin{aligned}
E[XY] &= E[X.2X] = 2.E[X^2] \\
&= 2*\int_{-1}^{1} x^2 dx = 2*{\frac{x^3}{3}} \bigg|_{-1}^1 \\
&= \frac{2}{3}*\{1^3-(-1)^3\} 
& = \frac{2}{3}*2 = \frac{4}{3} \\
\tag{2} E[XY] &= \frac{4}{3}
\end{aligned}
\]
<br>

From (1) and (2), we can say that:
\[
E[XY] ⍯ E[X]E[Y] \\
\]
Hence, \(X\) and \(Y\) are NOT independent.
<br><br>
[Read more about Integration]({{<ref  "/docs/maths/calculus/calculus_fundamentals" >}})
<br><br>

{{< definition >}}
**Identically Distributed** <br>
Random variable X is said to be identically distributed if each sample comes from the same probability distribution,
such as, Gaussian, Bernoulli, Uniform, etc with the same properties i.e mean, variance, etc are same. <br>
Similarly, random variables X & Y are said to be identically distributed if they belong to the same probability distribution.<br> <br>
{{</ definition >}}
<br>

{{< definition >}}
**Independent & Identically Distributed(I.I.D)** <br>
I.I.D assumption for samples(data points) in a dataset means that the samples are:
- Independent, i.e, each sample is independent of the other.
- Identically distributed, i.e, each sample is drawn from the same probability distribution.
{{</ definition >}}
For example: <br>
- We take the heights of a random sample of people to estimate the average height of the population of a city.
  - Here 'independent' assumption means that the height of each person in the sample is independent of the other person.<br>
  Usually, heights of members of the same family may be highly correlated.<br> 
  However, for practical purposes, we can assume that all the heights are independent of one another.
  - And, for 'identically distributed' - we can assume that all the heights are from the same Gaussian distribution with some mean and variance.
<br>

{{< video "https://www.youtube.com/watch?v=vE3suVMRH0o&t=1s" >}}

<br><br>
```End of Section```