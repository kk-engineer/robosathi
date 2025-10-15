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
<br>

{{< definition >}}
**Uniform Distribution:** <br>
All the outcomes within the given range are equally likely to occur. <br>
Also known as 'fair' distribution. <br>
_Note: This is a natural starting point to understand randomness in general. <br>_
<br> 
\[ X \sim U(a,b) \]
$$
\begin{aligned}
PDF = f(x) =
\begin{cases}
\frac{1}{b-a} & \text{if } x \in [a,b] \\
0 & \text{~otherwise }
\end{cases}
\end{aligned}
$$
<br>
**Mean** = **Median** = \( \frac{a+b}{2} ~if~ x \in [a,b] \) <br>
**Variance** = \( \frac{(b-a)^2}{12} \) <br><br>
Standard uniform distribution: \( X \sim U(0,1) \)
$$
\begin{aligned}
PDF = f(x) =
\begin{cases}
1 & \text{if } x \in [0,1] \\
0 & \text{~otherwise }
\end{cases}
\end{aligned}
$$

PDF in terms of mean(\(\mu\)) and standard deviation(\(\sigma\)) - <br>

$$
\begin{aligned}
PDF = f(x) =
\begin{cases}
\frac{1}{2\sigma\sqrt{3}} & \text{if } \mu -\sigma\sqrt{3} \le x  \le \mu + \sigma\sqrt{3}\\
0 & \text{~otherwise }
\end{cases}
\end{aligned}
$$

{{</ definition >}}
For example: <br>
- Random number generator that generates a random number between 0 and 1. <br>

![](https://robosathi.com/images/uniform_pdf.png)
{{< alert color="warning" >}}**Graph**: PDF of Uniform Distribution.{{< /alert >}}
![](https://robosathi.com/images/uniform_cdf.png)
{{< alert color="warning" >}}**Graph**: CDF of Uniform Distribution.{{< /alert >}}

{{< definition >}}
**Gaussian(Normal) Distribution:** <br>
It is a continuous probability distribution characterized by a symmetrical, bell-shaped curve with 
most data clustered around the central average, with frequency of values decreasing as they move away from the center.<br>
- Most outcomes are average; extremely low or extremely high values are rare. <br>
- Characterised by mean and standard deviation/variance. <br>
- Peak at mean = median, symmetric around mean. <br>
*Note: Most important and widely used distribution.* <br>
<br> 
\[ X \sim N(\mu, \sigma^2) \]
$$
\begin{aligned}
PDF = f(x) =
\dfrac{1}{\sqrt{2\pi}\sigma}e^{-\dfrac{(x-\mu)^2}{2\sigma^2}} \\
\end{aligned}
$$
<br>
**Mean** = \(\mu\) <br>
**Variance** = \(\sigma^2\) <br>

Standard normal distribution: \[ Z \sim N(0,1) ~i.e~ \mu = 0, \sigma^2 = 1 \] <br>
Any normal distribution can be standardized using Z-score transformation:
$$
\begin{aligned}
Z = \dfrac{X-\mu}{\sigma}
\end{aligned}
$$
{{</ definition >}}

For example:
- Human height, IQ scores, blood-pressure etc. <br>
- Measurement of errors in scientific experiments. <br>

![](https://robosathi.com/images/gaussian_pdf.png)
{{< alert color="warning" >}}**Graph**: PDF of Gaussian Distribution.{{< /alert >}}
![](https://robosathi.com/images/gaussian_cdf.png)
{{< alert color="warning" >}}**Graph**: CDF of Gaussian Distribution.{{< /alert >}}

{{< alert title="68-95-99 Rule" color="success" >}} 
- 68.27% of the data lie within 1 standard deviation of the mean i.e \(\mu \pm \sigma\) <br>
- 95.45% of the data lie within 2 standard deviations of the mean i.e \(\mu \pm 2\sigma\)<br>
- 99.73% of the data lie within 3 standard deviations of the mean i.e \(\mu \pm 3\sigma\) <br>
{{< /alert >}}
<br> <br>

{{< definition >}}
**Exponential Distribution:** <br>
It is used to model the amount of time until a specific event occurs. <br>
Given that:
1. Events occur with a known constant average rate.<br>
2. Occurrence of an event is independent of the time since the last event. <br><br>
**Parameters**: <br>
**Rate parameter**: \(\lambda\): Average number of events per unit time <br>
**Scale parameter**: \(\mu ~or~ \beta \): Mean time between events <br>
**Mean** = \(\frac{1}{\lambda}\) <br>
**Variance** = \(\frac{1}{\lambda^2}\) <br>
\[ \lambda = \dfrac{1}{\beta} =  \dfrac{1}{\mu}\] <br>

$$
\begin{aligned}
PDF = f(x) = \lambda e^{-\lambda x} ~~~ \forall ~~~  x \ge 0 ~~~\&~~~  \lambda > 0 \\
CDF = F(x) = 1 - e^{-\lambda x} ~~~ \forall ~~~  x \ge 0 ~~~\&~~~  \lambda > 0
\end{aligned}
$$
{{</ definition >}}
<br><br>

![](https://robosathi.com/images/exponential_pdf.png)
{{< alert color="warning" >}}**Graph**: PDF of Exponential Distribution.{{< /alert >}}
![](https://robosathi.com/images/exponential_cdf.png)
{{< alert color="warning" >}}**Graph**: CDF of Exponential Distribution.{{< /alert >}}

{{< question >}}
At a bank, a teller spends 4 minutes, on an average, with every customer. What is the probability that a randomly 
selected customer will be served in less than 3 minutes? <br>
{{</ question >}}

{{< answer >}}
Mean time to serve 1 customer = \(\mu\) = 4 minutes <br>
So, \(\lambda\) = average number of customers served per unit time =  \(1/\mu\) = 1/4 = 0.25 minutes <br>
Probability to serve a customer in less than 3 minutes can be found using CDF - <br>
\[ F(x) = P(X \le x) = 1 - e^{-\lambda x}\] <br>
$$
\begin{aligned}
P(X \leq 3) &= 1 - e^{0.25*3} \\
&= 1 - e^{-0.75} \\
&= 1 - 0.47 \\
&\approx 0.53 \\
&\approx 53\%
\end{aligned}
$$
So, probability of a customer being served in less than 3 minutes is 53%(approx). <br>
{{</ answer >}}
<br>

{{< question >}}
At a bank, a teller spends 4 minutes, on an average, with every customer. What is the probability that a randomly 
selected customer will be served in greater than 2 minutes? <br>
{{</ question >}}

{{< answer >}}
\[ CDF = F(x) = P(X \le x) = 1 - e^{-\lambda x} \\
\text{Total probability} = P(X \le x) + P(X > x) = 1\\
=>  1 - e^{-\lambda x} + P(X > x) = 1 \\
=> P(X > x) =  e^{-\lambda x}
\] <br>
In this case x = 2 minutes, and \(\lambda\) = 0.25 so, <br>
\[ P(X > 2) =  e^{-\lambda x} \\
= e^{-0.25*2} \\
= e^{-0.5} \\
= 0.6065 \\
\approx 60.65\% \] <br>
So, probability of a customer being served in greater than 2 minutes is 60%(approx). <br>
{{</ answer >}}


<br><br>
```End of Section```