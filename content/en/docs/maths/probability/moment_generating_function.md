---
title: Moment Generating Function
description: Moment Generating Function
date: 2025-10-15
weight: 9
math: true
---

{{% pageinfo %}}
In this section, we will understand Moments of a probability distribution and Moment Generating Function.<br>
{{% /pageinfo %}}

{{< playlist "https://youtube.com/playlist?list=PLnpa6KP2ZQxde666MKUXEIGtQXHaJxpdj" 
        "Probability for AI & ML | Full Course Videos" >}}
<br>

{{< definition >}}
**Moments:** <br>
They are statistical measures that describe the characteristics of a probability distribution, 
such as its central tendency, spread/variability, and asymmetry. <br>
_Note_: We will discuss '_raw_' and '_central_' moments. <br><br>
_Important moments:_ <br>
1. **Mean** : Central tendency 
2. **Variance** : Spread/variability 
3. **Skewness** : Asymmetry 
4. **Kurtosis** : Tailedness
{{</ definition >}}
<br>
{{< video "https://youtu.be/VR-yHsEGyww?si=i-JZqbPxFrErODeP" >}}
<br>

{{< definition >}}
**Moment Generating Function:** <br>
It is a function that simplifies computation of moments, such as, the mean, variance, skewness, and kurtosis,
by providing a compact way to derive any moment of a random variable through differentiation. <br>
- Provides an alternative to PDFs and CDFs of random variables.
- A powerful property of the MGF is that its \(n^{th}\) derivative, when evaluated at \((t=0)\) = 
the \(n^{th}\) moment of the random variable.

\[
\text{MGF of random variable X is the expected value of } e^{tX} \\
MGF = M_X(t) = E[e^{tX}]
\]

*Not all probability distributions have MGFs; sometimes, integrals may not converge and moment may not exist.* <br>

\[
\begin{aligned}
e^x = 1 + \frac{x}{1!} + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots + \frac{x^n}{n!} + \cdots\\
e^{tX} = 1 + \frac{tx}{1!} + \frac{(tx)^2}{2!} + \frac{(tx)^3}{3!} + \cdots + \frac{(tx)^n}{n!} + \cdots\\
\end{aligned}
\]

Since, \(MGF = M_X(t) = E[e^{tX}] \), we can write the MGF as: <br>
\[
\begin{aligned}
M_X(t) &= E[e^{tX}] \\
&= 1 + \frac{t}{1!}E[X] + \frac{t^2}{2!}E[X^2] + \frac{t^3}{3!}E[X^3] + \cdots + \frac{t^n}{n!}E[X^n] + \cdots \\
\end{aligned}
\]

Say, \( E[X^n] = m_n \), where \(m_n\) is the \(n^{th}\) moment of the random variable, then:
\[
M_X(t) = 1 + \frac{t}{1!}m_1 + \frac{t^2}{2!}m_2 + \frac{t^3}{3!}m_3 + \cdots + \frac{t^n}{n!}m_n + \cdots \\
\]

***Important**: Differentiating \(M_X(t)\) with respect to \(t\), \(i\) times, and setting \((t =0)\) gives us 
the \(i^{th}\) moment of the random variable.*

\[
\frac{dM_X(t) }{dt} = M'_X(t) = 0 + m_1 + \frac{2t}{2!}m_2 + \frac{3t^2}{3!}m_3 + \cdots + \frac{nt^n-1}{n!}m_n + \cdots \\
\]
Set \(t=0\), to get the first moment:
\[
\frac{dM_X(t) }{dt} = M'_X(t) = m_1
\]

Similarly, second moment =  \(M''_X(t) = m_2 = E[X^2]\) <br>
And, \(n^{th}\) derivative = \(M^{(n)}_X(t) = m_n = E[X^n]\) <br>

\[
E[X^n] = \frac{d^nM_X(t)}{dt^n} \bigg|_{t=0}
\]

e.g: \( Var[X] = M''_X(0) - (M'_X(0))^2 \) <br><br>

*Note: If we know the MGF of a random variable, then we do NOT need to do integration or summation to find the moments.* <br>
***Continuous***:
\[
M_X(t) = E[e^{tX}] = \int_{-\infty}^{\infty} e^{tx} f_X(x) dx 
\]

***Discrete***:
\[
M_X(t) = E[e^{tX}] = \sum_{i=1}^{\infty} e^{tx} P(X=x)
\]
<br>
[Read more about Integration & Differentiation]({{<ref  "/docs/maths/calculus/calculus_fundamentals" >}})
{{</ definition >}}

{{< video "https://youtu.be/KEqqV54Raz8?si=6wjZKKChX9XWyEoY" >}}

<br><br>
```End of Section```