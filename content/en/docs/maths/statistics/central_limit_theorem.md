---
title: Central Limit Theorem
description: Central Limit Theorem & Confidence Interval
date: 2025-10-21
weight: 4
math: true
---

{{% pageinfo %}}
In this section, we will understand about Central Limit Theorem & Confidence Interval. <br>
{{% /pageinfo %}}

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

{{< definition >}}
**Confidence Interval:** <br>
It is a range of values that is likely to contain the true population mean, based on a sample. <br>
Instead of giving a point estimate, it gives a range of values with confidence level. <br><br>

For normal distribution, confidence interval : <br>
\[ CI = \bar{X} \pm Z\frac{\sigma}{\sqrt{n}} \]
\(\bar{X}\): Sample mean <br>
\(Z\): Z-score corresponding to confidence level <br>
\(n\): Sample size <br>
\( \sigma \): Population Standard Deviation <br>

**Applications:** <br>
- A/B testing, i.e., compare 2 or more versions of a product.
- ML model performance evaluation, i.e, instead of giving a single performance score of say 85%, <br>
it is better to provide a 95% confidence interval, such as, [82.5%, 87.8%]. <br>
{{</ definition >}}

{{< alert color="warning" >}}
95% confidence interval does NOT mean there is a 95% chance that the true mean lies in the specific calculated interval.<br>
- It just means that if we repeat the sampling process many times, then 95% of of those calculated intervals will capture 
or contain the true population mean \(\mu\).
- Also, we cannot say there is 95% probability that the true mean is within that specific range because true population 
mean is a fixed constant, NOT a random variable.
{{< /alert >}}

For example: <br>
Let's suppose we want to measure the average weight of a certain species of dog. <br>
We want to estimate the true population
mean \(\mu\) using confidence interval. <br>
*Note: True average weight = 30 kg, but this is NOT known to us.*

| Sample Number | Sample Mean | 95% Confidence Interval | Did it capture \(\mu\) ? |
|---------------|-------------|-------------------------|--------------------------|
| 1             | 29.8 kg     | (28.5, 31.1)            | Yes                      |
| 2             | 30.4 kg     | (29.1, 31.7)            | Yes                      |
| 3             | 31.5 kg     | (30.2, 32.8)            | No                       |
| 4             | 28.1 kg     | (26.7, 29.3)            | No                      |
| -             | -           | -                       | -                        |
| -             | -           | -                       | -                        |
| -             | -           | -                       | -                        |
| 100           | 29.9 kg     | (28.6, 31.2)            | Yes                      |

- We generated 100 confidence intervals(CI) each based on different samples.
- 95% CI guarantees that, in long run, 95 out of 100 CIs will include the true average weight, i.e, \(\mu=30kg\),
and may be will miss 5 out of 100 times.
<br><br>

{{< question >}}
Suggest which company is offering a better salary? <br>
Below is the details of the salaries based on a survey of 50 employees. <br>
|Company| Average Salary(INR) | Standard Deviation |
|--------|---------------|--------------------|
|A| 36 lpa | 7 lpa |
|B| 40 lpa | 14 lpa |
{{< /question >}}

{{< answer >}}
For comparison, let's calculate the 95% confidence interval for the average salaries of both companies A and B. <br>
We know that: <br>
\( CI = \bar{X} \pm Z\frac{\sigma}{\sqrt{n}} \) <br>
Margin of Error(MoE) \( = Z\frac{\sigma}{\sqrt{n}} \) <br>
Z-Score for 95% CI = 1.96 <br>

\(MoE_A = 1.96*\frac{7}{\sqrt{50}} \approx 1.94 \) <br>
=> 95% CI for A = \(36 \pm 1.94 \) = [34.06, 37.94] <br><br>

\(MoE_B = 1.96*\frac{14}{\sqrt{50}} \approx 3.88\) <br>
=> 95% CI for B = \(40 \pm 3.88 \) = [36.12, 43.88] <br>

We can see that initially company B's salary looked obviously better, <br>
but after calculating the 95% CI, we can see that there is a significant overlap in the salaries of two companies,<br>
i.e [36.12, 37.94].
{{</ answer >}}
<br>
{{< video "https://youtu.be/vQb9l9Zw3Hs?si=AxRVhQwFgbhtIeKf" >}}

<br><br>
```End of Section```