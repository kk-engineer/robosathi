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

{{< playlist "https://youtube.com/playlist?list=PLnpa6KP2ZQxde666MKUXEIGtQXHaJxpdj" 
        "Probability for AI & ML | Full Course Videos">}}
<br>

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
= \int_{-\infty}^{a} x.f(x) dx + \int_{a}^{b} x.f(x) dx + \int_{b}^{\infty} x.f(x) dx\\[0.5em]
\text{Since, the PDF is defined only in the range [a,b] } \\[0.5em]
= 0 + \int_{a}^{b} x.f(x) dx + 0 \\
= \int_{a}^{b} x.f(x) dx \\
= \dfrac{1}{b-a} \int_{a}^{b} x dx \\[0.5em] 
= \dfrac{1}{b-a} (\frac{x^2}{2})_{a}^{b} \\[0.5em]
= \dfrac{1}{b-a} * (\frac{b^2 - a^2}{2}) \\[0.5em]
= \dfrac{1}{b-a} * \{\frac{(b+a)(b-a)}{2}\}\\
= \dfrac{b+a}{2} 
\] 
<br>
{{< /answer >}}
<br>

{{< definition >}}
**Variance:** <br>
It is the average of the squared differences from the mean. <br>
- Measures the spread or variability in the data distribution. <br>
- If the variance is low, then the data is clustered around the mean i.e less variability; <br>
and if the variance is high, then the data is widely spread out i.e high variability.<br>

Variance in terms of expected value, where \(E[X] = \mu\), is given by:

\[
\begin{aligned}
Var[X] &= E[(X - E[X])^2] \\
&= E[X^2 + E[X]^2  - 2XE[X]] \\
&= E[X^2] + E[X]^2 - 2E[X]E[X]  \\
&= E[X^2] + E[X]^2 - 2E[X]^2  \\
Var[X] &= E[X^2] - E[X]^2 \\
\end{aligned}
\]

*Note: This is the computational formula for variance, as it is easier to calculate than the 
average of square distances from mean.* <br>
{{</ definition >}}

{{< question >}}
What is the variance of a continuous uniform random variable distributed over the interval [a,b]?
{{< /question >}}

{{< answer >}}
PDF of continuous uniform random variable = 
$$
\begin{aligned}
f_X(x) &= 
\begin{cases}
\dfrac{1}{b-a}, & x \in [a,b] \\
0, & \text{otherwise.}
\end{cases} \\
\end{aligned}
$$

\[
\begin{aligned}
\text{Expected value = mean } = \\[0.5em]
E[X] = \dfrac{b+a}{2} \\[0.5em]
Var[X] = E[X^2] - E[X]^2 
\end{aligned}
\]

We know \(E[X]\) already, now we will calculate \(E[X^2]\):

\[
\begin{aligned}
E[X] &= \int_{-\infty}^{\infty} x.f(x) dx \\
E[X^2] &= \int_{-\infty}^{\infty} x^2.f(x) dx \\
&= \int_{-\infty}^{a} x^2f(x) dx + \int_{a}^{b} x^2f(x) dx + \int_{b}^{\infty} x^2f(x) dx\\
&= 0 + \int_{a}^{b} x^2f(x) dx + 0 \\
&= \int_{a}^{b} x^2f(x) dx \\
&= \dfrac{1}{b-a} \int_{a}^{b} x^2 dx \\
&= \dfrac{1}{b-a} * \{\frac{x^3}{3}\}_{a}^{b} \\
&= \dfrac{1}{b-a} * \{\frac{b^3 - a^3}{3}\} \\
&= \dfrac{1}{b-a} * \{\frac{(b-a)(b^2+ab+a^2)}{3}\} \\
E[X^2] &= \dfrac{b^2+ab+a^2}{3}
\end{aligned}
\]

Now, we know both \(E[X]\) and \(E[X^2]\), so we can calculate \(Var[X]\):
\[
\begin{aligned}
Var[X] &= E[X^2] - E[X]^2 \\
&= \dfrac{b^2+ab+a^2}{3} - \dfrac{(b+a)^2}{4} \\
&= \dfrac{b^2+ab+a^2}{3} - \dfrac{b^2+2ab+a^2}{4} \\
&= \dfrac{4b^2+4ab+4a^2-3b^2-6ab-3a^2}{12} \\
&= \dfrac{b^2-2ab+a^2}{12} \\
Var[X]&= \dfrac{(b-a)^2}{12}
\end{aligned}
\]
{{< /answer >}}
<br>

{{< definition >}}
**Co-Variance:** <br>
It is the measure of how 2 variables X & Y vary together. <br>
It gives the direction of the relationship between the variables. <br>

\[
\begin{aligned}
\text{Cov}(X, Y) &> 0 &&\Rightarrow \text{ } X \text{ and } Y \text{ increase or decrease together} \\[0.5em]
\text{Cov}(X, Y) &= 0 &&\Rightarrow \text{ } \text{No linear relationship} \\[0.5em]
\text{Cov}(X, Y) &< 0 &&\Rightarrow \text{ } \text{If } X \text{ increases, } Y \text{ decreases (and vice versa)}
\end{aligned}
\]

*Note: For both direction as well as magnitude, we use Correlation.* <br>
Let's use expectation to compute the co-variance of two random variables X & Y: <br>
\[
\begin{aligned}
Cov(X,Y) &= E[(X-E[X])(Y-E[Y])] \\
&\text{where, E[X] = mean of X and E[Y] = mean of Y} \\
& = E[XY - YE[X] -XE[Y] + E[X]E[Y] \\
&= E[XY] - E[Y]E[X] - \cancel{E[X]E[Y]} + \cancel{E[X]E[Y]} \\
Cov(X,Y) &= E[XY] - E[X]E[Y] \\
\end{aligned}
\]

*Note:*
- *In a multivariate setting, relationship between all the pairs of random variables are summarized in 
a square symmetrix matrix called 'Co-Variance Matrix' \(\Sigma\).* <br>
- *Covariance of a random variable with self gives the variance, hence the diagonals of covariance matrix are variances.* <br>

\[
\begin{aligned}
Cov(X,Y) &= E[XY] - E[X]E[Y] \\
Cov(X,X) &= E[X^2] - E[X]^2 = Var[X] \\
\end{aligned}
\]
{{</ definition >}}

{{< video "https://youtu.be/F83gibIzCho?si=PKKtqYJK5Qp69vPY&t=1" >}}

<br><br>
```End of Section```