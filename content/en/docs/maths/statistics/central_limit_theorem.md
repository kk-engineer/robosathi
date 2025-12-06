---
title: Central Limit Theorem
description: Central Limit Theorem
date: 2025-10-21
weight: 4
math: true
---


{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfGbwZaKtx_nIi_DNWMK8mX" 
        "Statistics for AI & ML | Full Course Videos">}}
<br>
Before we understand the Central Limit Theorem, let's understand a few related concepts. <br>

{{< definition >}}
**Population Mean:** <br>
It is the true average of the entire group. <br>
It describe the central tendency of the entire population. <br>

\( \mu = \frac{1}{N}\sum_{i=1}^{N}x_i \) <br>
N: Number of data points <br>

{{</ definition >}}
<br>

{{< definition >}}
**Sample Mean:** <br>
It is the average of a smaller representative subset (a sample) of the entire population. <br>
It provides an estimate of the population mean. <br>

\( \bar{x} = \frac{1}{n}\sum_{i=1}^{n}x_i \) <br>
n: size of sample <br>
{{</ definition >}}
<br>

{{< definition >}}
**Law of Large Numbers:** <br>
This law states that as the number of I.I.D samples from a population increases, <br>
the sample mean converges to the true the population mean. <br>
In other words, a long-run average of a repeated random variable approaches the expected value. <br>
{{</ definition >}}
<br>

{{< definition >}}
**Central Limit Theorem:** <br>
This law states that for a sequence of of I.I.D random variables \( X_1, X_2, \dots, X_n \), <br>
with finite mean and variance, the distribution of the sample mean \( \bar{X} \) approaches a normal distribution 
as \( n \rightarrow \infty \), regardless of its original population distribution. <br>
The distribution of the sample mean is : \( \bar{X} \sim N(\mu, \sigma^2/n)\)
<br><br>

Let, \( X_1, X_2, \dots, X_n \) are I.I.D random variables. <br>
- Population mean =  \(E[X_i] =  \mu < \infty\)
- Population Variance =  \(Var[X_i] = \sigma^2 < \infty \)
- Sample mean = \( \bar{X_n} = \frac{1}{n}\sum_{i=1}^{n}X_i = \frac{1}{n}(X_1 + X_2+ \dots +X_n)  \)
- Variance of sample means = \( Var[\bar{X_n}] = Var[\frac{1}{n}(X_1+ X_2+ \dots+ X_n)]\)

Now, let's calculate the variance of sample means. <br>
We know that: <br>
1. \(Var[X+Y] = Var[X] + Var[Y] \), for independent random variables X and Y.
2. \(Var[cX] = c^2Var[X] \), for constant 'c'.

Let's apply above 2 rules on the variance of sample means equation above:
\[
\begin{aligned}
Var[\bar{X_n}] &= Var[\frac{1}{n}(X_1+ X_2+ \dots+ X_n)] \\
&= \frac{1}{n^2}[Var[X_1+ X_2+ \dots+ X_n]] \\
&= \frac{1}{n^2}[Var[X_1] + Var[X_2] + \dots + Var[X_n]] \\
\text{We know that: } Var[X_i] = \sigma^2 \\
&= \frac{1}{n^2}[\sigma^2 + \sigma^2 + \dots + \sigma^2] \\
&= \frac{n\sigma^2}{n^2} \\
=> Var[\bar{X_n}] &= \frac{\sigma^2}{n}
\end{aligned}
\]

Since, standard deviation = \(\sigma = \sqrt{Variance}\) <br>
Therefore, Standard Deviation\([\bar{X_n}] = \sqrt{\frac{\sigma^2}{n}} = \frac{\sigma}{\sqrt{n}}\) <br>
The standard deviation of the sample means is also known as "**Standard Error**". <br>

*Note: We can also standardize the sample mean, i.e, mean centering and variance scaling.<br>
Standardisation helps us to use the Z-tables of normal distribution.* <br>

We know that, a standardized random variable \(Y_i = \frac{X_i - \mu}{\sigma}\) <br>
Similarly, standardized sample mean: <br>
\[
Z_n = \frac{\bar{X_n} - \mu}{\sqrt{Var[\bar{X_n}]}} =  \frac{ \frac{1}{n}\sum_{i=1}^{n}X_i  - \mu}{\frac{\sigma}{\sqrt{n}}} \\
= \frac{\sum_{i=1}^{n}X_i  - n\mu}{\sigma\sqrt{n}} \xrightarrow{Distribution} N(0,1) , \text{ as } n \rightarrow \infty \\
Z_n \text{ converges in distribution to } N(0,1), \text{ as } n \rightarrow \infty
\]

*Note: For practical purposes, \(n \ge 30\) is considered as a sufficient sample size for the CLT to hold.* <br>
{{</ definition >}}
For example: <br>
1. Let's collect the data for height of people in a city to find the average height of people in the city. <br>
- Sample size (n) = 100 <br>
- And then repeat this data collection process 1000 times. 
- For each of these 1000 (k) samples, calculate the sample mean \(X_1, X_2, \dots, X_{1000(k)} \)
- Now, when we plot these 1000(k) sample means, the resulting distribution will be very close to a normal/Gaussian distribution. <br>
\(\bar{X_n} \sim N(\mu, \sigma^2/n)\), for large n, typically \(n \ge 30\). <br>

*Note:*
- *'k' = a large number of repetitions allows us to observe the distribution of sample means after plotting.*
- *'n' = number of samples in each repetition is fixed for any given calculation of sample mean \(\bar{X_n}\).*
<br><br>

{{< question >}}
Why variance must be finite??
{{< /question >}}

{{< answer >}}
The variance must be finite, else, the sample mean will NOT converge to a normal distribution. <br>
If a distribution has a heavy tail, then the expected value calculation diverges.<br>
e.g: <br>
1. Cauchy distribution has infinite mean and infinite variance.
2. Pareto distribution (with low alpha) has infinite variance, such as distribution of wealth.  
{{</ answer >}}
<br>

{{< video "https://youtu.be/GcHz8vOggnc?si=326B1_v-egzrLZDh" >}}

<br><br>
```End of Section```