---
title: Z-Test
description: Z-Test
date: 2025-10-22
weight: 7
math: true
---

{{% pageinfo %}}
In this section, we will understand Z-Test. <br>
{{% /pageinfo %}}

{{< definition >}}
**Z-Test:** <br>
It is a statistical test used to determine whether there is a significant difference between mean of 2 groups or sample and population mean. <br>
- It is a parametric test, since it assumes data to be normally distributed.
- Appropriate when:
  - sample size \(n \ge 30\).
  - population standard deviation \(\sigma \) is known.
- It is based on Gaussian/normal distribution.
- It compares the difference between means relative to _standard error_, i.e, standard deviation of sampling distribution of sample mean.

There are 2 types of Z-Test:
- _1-Sample Z-Test_: Used to compare the mean of a sample mean with a population mean.
- _2-Sample Z-Test_: Used to compare the sample means of 2 independent samples.
{{</ definition >}}
<br>

{{< definition >}}
**Z-Score:** <br>
It is a standardized score that measures how many standard deviations a particular data point is away from the population mean \(\mu\).
- Transform a normal distribution \(\mathcal{N}(\mu, \sigma^2)\) to a standard normal distribution \(Z \sim \mathcal{N}(0, 1)\).
- Standardized score helps us compare values from different normal distributions.

Z-score is calculated as:
\[Z = \frac{x - \mu}{\sigma}\]
x: data point <br>
\(\mu\): population mean <br>
\(\sigma\): population standard deviation

e.g: 
1. Z-score of 1.5 => data point is 1.5 standard deviations above the mean.
2. Z-score of -2.0 => data point is 2.0 standard deviations below the mean.

Z-score helps to define probability areas: <br>
- 68% of the data points fall within \(\pm 1 \sigma\).
- 95% of the data points fall within \(\pm 2 \sigma\).
- 99.7% of the data points fall within \(\pm 3 \sigma\).

*Note:* <br>
- Z-Test applies the concept of Z-score to sample mean rather than a single data point.

{{</ definition >}}
<br>

{{< definition >}}
**1-Sample Z-Test:** <br>
It is used to test whether the sample mean \(\bar{x}\) is significantly different from a known population mean \(\mu\). <br>

Test Statistic: <br>
\[
Z = \frac{\bar{x} - \mu}{\sigma / \sqrt{n}}
\]
\(\bar{x}\): sample mean <br>
\(\mu\): hypothesized population mean <br>
\(\sigma\): population standard deviation <br>
\(n\): sample size <br>
\(\sigma / \sqrt{n}\): standard error of mean

[Read more about Standard Error]({{<ref  "/docs/maths/statistics/clt_ci"  >}})

*Note: Test statistic Z follows a standard normal distribution \(Z \sim \mathcal{N}(0, 1)\).*

{{</ definition >}}
<br>

{{< definition >}}
**2-Sample Z-Test:** <br>
It is used to test whether the sample means \(\bar{x_1}\) and \(\bar{x_2}\) of 2 independent samples are significantly different from each other. <br>
Test Statistic: <br>
\[
Z = \frac{\bar{x_1} - \bar{x_2}}{\sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}}
\]
\(\bar{x_1}\): sample mean of first sample <br>
\(\bar{x_2}\): sample mean of second sample <br>
\(\sigma_1\): population standard deviation of first sample <br>
\(\sigma_2\): population standard deviation of second sample <br>
\(n_1\): sample size of first sample <br>
\(n_2\): sample size of second sample <br>

*Note: Test statistic Z follows a standard normal distribution \(Z \sim \mathcal{N}(0, 1)\).*

{{</ definition >}}
<br>

{{< question >}}
Average time to run a ML model is 120 seconds with a known standard deviation of 15 seconds. <br>
After applying a new optimisation, and n=100 runs, yields a sample mean of 117 seconds. <br>
Does the optimisation significantly reduce the runtime of the model? <br>
Consider the significance level of 5%.
{{</ question >}}

{{< answer >}}
Null Hypothesis: \(\mu = 120\) seconds, i.e, no change. <br>
Alternative Hypothesis: \(\mu < 120\) seconds => left tailed test. <br>

We will use 1-sample Z-Test to test the hypothesis. <br>
Test Statistic: <br>
\[
t_{obs} = \frac{\bar{x} - \mu}{\sigma / \sqrt{n}} \\[10pt]
= \frac{117 - 120}{\frac{15}{\sqrt{100}}} \\[10pt]
= \frac{-3}{\frac{15}{10}} = \frac{-30}{15}\\[10pt]
=> t_{obs} = -2
\]

Since, significance level \(\alpha\) = 5% =0.05. <br>
Critical value \(Z_{0.05}\) = -1.645 <br>
_Important_: Find the value of \(Z_{\alpha}\) in [Z-Score Table](https://www.craftonhills.edu/current-students/tutoring-center/mathematics-tutoring/distribution_tables_normal_studentt_chisquared.pdf)

![](https://robosathi.com/images/one_sample_z_test.png)

Our \(t_{obs}\) is much more extreme than the the critical value \(Z_{0.05}\), => p-value < 5%. <br>
Hence, we reject the null hypothesis. <br>
Therefore, there is a statistically significant evidence that the new optimisation reduces the runtime of the model.
{{</ answer >}}
<br>

{{< definition >}}
**Z Test of Proportion:** <br>
It is a statistical hypothesis test used to determine if there is a significant difference between the proportion 
of a characteristic in two independent samples or to compare a sample proportion to a known population value <br>
- It is used when dealing with categorical data, such as, success/failure, male/female, yes/no etc.

It is of 2 types:
1. _1-Sample Z-Test of Proportion_: Used to test whether the observed proportion in a sample differs from hypothesized proportion.
2. _2-Sample Z-Test of Proportion_: Used to compare whether the 2 independent samples differ in their proportions.

The categorical data,i.e success/failure, is discrete that can be modeled as **Bernoulli** distribution. <br>
Let's understand how this Bernoulli random variable can be approximated as a **Gaussian** distribution for a very large sample size,
using **Central Limit Theorem**.<br>
[Read more about Central Limit Theorem]({{<ref  "/docs/maths/statistics/clt_ci"  >}})

*Note:We will not prove the complete thing, but we will understand the concept in enough depth for clarity.* <br>

**Sampling Distribution of a Proportion:** <br>
\(Y \sim Bernoulli(p)\) <br>
\(X \sim Binomial(n,p)\) <br> 
E[X] = mean = np <br>
Var[X] = variance = np(1-p)  <br>
X = total number of successes <br>
p = true probability of success <br>
n = number of trials <br>
Proportion of Success in sample =  Sample Proportion = \(\hat{p} = \frac{X}{n}\) <br>
e.g.: If n=100 people were surveyed, and 40 said yes, then \(\hat{p} = \frac{40}{100} = 0.4\) <br>

\[
E[\hat{p}] = \frac{1}{n} E[X] = \frac{np}{n} = p  \\[10pt]
Var[\hat{p}] = Var[\frac{X}{n}] = \frac{Var[X]}{n^2} = \frac{np(1-p)}{n^2} =\frac{p(1-p)}{n}  \\[10pt]
\]

By Central Limit Theorem, we can state that for very large 'n' Binomial distribution's mean and variance can be used as an 
approximation for Gaussian/Normal distribution: <br>
\[
X \sim Binomial(n,p) \xrightarrow{n \rightarrow \infty}  X \approx N(np, np(1-p))  \\[10pt]
\]
Since, \(\hat{p} = \frac{X}{n}\) <br>
We can say that: <br>
\[
\hat{p} \xrightarrow{n \rightarrow \infty}  \approx N[p, \frac{p(1-p)}{n}]   \\[10pt]
\]
Mean = \(\mu_{\hat{p}} = p\) = True proportion of success in the entire population <br>
Standard Error = \(SE_{\hat{p}} = \sqrt{Var[\frac{X}{n}]} = \sqrt{\frac{p(1-p)}{n}}\) = Standard Deviation of the sample proportion <br>

*Note: Large Sample Condition - Approximation is only valid when expected number of successes and failures are both > 10 (sometimes 5).* <br>
\(np \ge 10 ~and~ n(1-p) \ge 10\)

{{</ definition >}}
<br>

{{< definition >}}
**1-Sample Z-Test of Proportion:** <br>
It is used to test whether the observed proportion in a sample differs from hypothesized proportion. <br>
\(\hat{p} = \frac{X}{n}\): Proportion of success observed in a sample <br>
\(p_0\): Specific propotion value under the null hypothesis <br>
\(SE_0\): Standard error of sample proportion under the null hypothesis <br>
Z-Statistic: Measures how many standard errors is the observed sample proportion \(\hat{p}\) away from \(p_0\) <br> 
Test Statistic: <br>
\[
Z = \frac{\hat{p} - p_0}{SE_0} = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}}
\]
{{</ definition >}}
<br>

{{< definition >}}
**2-Sample Z-Test of Proportion:** <br>
It is used to compare whether the 2 independent samples differ in their proportions.
- Standard test used in A/B testing.

\[
\bar{p} = \frac{total ~ successes}{total ~ sample  ~ size}
\]
{{</ definition >}}


<br><br>

```End of Section```