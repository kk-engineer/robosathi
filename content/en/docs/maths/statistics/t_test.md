---
title: T-Test
description: Student's T-Test
date: 2025-10-22
weight: 7
math: true
---


{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfGbwZaKtx_nIi_DNWMK8mX" 
        "Statistics for AI & ML | Full Course Videos">}}
<br>
{{< definition >}}
**T-Test:** <br>
It is a statistical test that is used to determine whether the sample mean is equal to a hypothesized value or <br> 
is there a significant difference between the sample means of 2 groups. <br>
- It is a parametric test, since it assumes data to be approximately normally distributed.
- Appropriate when:
  - sample size n < 30.
  - population standard deviation \(\sigma\) is unknown.
- It is based on Student's t-distribution.
{{</ definition >}}
<br>

{{< definition >}}
**Student's t-distribution:** <br>
It is a continuous probability distribution that is a symmetrical, bell-shaped curve similar
to the normal distribution but with heavier tails. <br>
- Shape of the curve or mass in tail is controlled by degrees of freedom.

![](https://robosathi.com/images/t_distribution.png)

There are 3 types of T-Test: <br>
1. **1-Sample T-Test**: Test if sample mean differs from hypothesized value.
2. **2-Sample T-Test**: Test whether there is a significant difference between the means of two independent groups.
3. **Paired T-Test**: Test whether 2 related samples differ, e.g., before and after.
{{</ definition >}}
{{< alert color="secondary" title="Degrees of Freedom (\(\nu\))" >}}
It represents the number of independent pieces of information available in the sample to estimate the variability in the data.<br>
Generally speaking, it represents the number of independent values that are free to vary in a dataset when 
estimating a parameter. <br>
e.g.: If we have k observations and their sum = 50. <br>
The sum of (k-1) terms can be anything, but the kth term is fixed at 50 - (sum of other (k-1) terms). <br>
So, we have only (k-1) terms that can change independently, therefore, the DOF(\(\nu\)) = k-1.
{{< /alert >}}

{{< video "https://www.youtube.com/watch?v=tdgmwh0DZJU&t=1s" >}}
<br>
{{<definition >}}
**1-Sample T-Test:** <br>
It is used to test whether the sample mean is equal to a known/hypothesized value. <br>
Test statistic (t):
\[
t = \frac{\bar{x} - \mu}{s/\sqrt{n}}
\]
where, <br>
\(\bar{x}\): sample mean <br>
\(\mu\): hypothesized value <br>
\(s\): sample standard deviation <br>
\(n\): sample size <br>
\(\nu = n-1 \): degrees of freedom <br>

{{</ definition >}}

{{< question >}}
A developer claims that the new algorithm improves API response time by 100 ms, on an average. <br>
Tester ran the test 20 times and found the average API repsonse time to be 115 ms, with a standard deviation of 25 ms. <br>
Is the developer's claim valid?
{{</ question >}}

{{< answer >}}
Let's verify developer's claim using the tester's test results using 1 sample t-test. <br>
Null hypothesis: \(H_0\) = The average API response time is 100 ms, i.e, \(\bar{x} = \mu\). <br>
Alternative hypothesis: \(H_a\) = The average API response time > 100 ms, i.e, \(\bar{x} > \mu\) => right tailed test. <br>
Hypothesized mean \(\mu\) = 100 ms <br>
Sample mean \(\bar{x}\) = 115 ms <br>
Sample standard deviation \(s\) = 25 ms <br>
Sample size \(n\) = 20 <br>
Degrees of freedom \(\nu\) = 19 <br>

\( t_{obs} = \frac{\bar{x} - \mu}{s/\sqrt{n}}\) = \(\frac{115 - 100}{25/\sqrt{20}}\) <br>
= \(\frac{15\sqrt{20}}{25} = \frac{3\sqrt{20}}{5} \approx 2.68\) <br>

Let significance level \(\alpha\) = 5% =0.05. <br>
Critical value \(t_{0.05}\) = 1.729 <br>
_Important: Find the value of \(t_{\alpha}\) in [T-table](https://www.sjsu.edu/faculty/gerstman/StatPrimer/t-table.pdf)_ <br>

![](https://robosathi.com/images/one_sample_t_test.png)

Since \(t_{obs}\) > \(t_{0.05}\), we reject the null hypothesis. <br>
And, accept the alternative hypothesis that the API response time is significantly > 100 ms. <br>
Hence, the developer's claim is NOT valid.
{{</ answer >}}
<br>
{{< video "https://www.youtube.com/watch?v=pQ6owcLIpms&t=1s" >}}
<br>

{{< definition >}}
**2-Sample T-Test:** <br>
It is used to determine whether there is a significant difference between the means of two independent groups. <br>
There are 2 types of 2-sample t-test: <br>
1. *Unequal Variance*
2. *Equal Variance*

**Unequal Variance:** <br>
In this case, the variance of 2 independent groups is not equal. <br>
Also called, Welch's t-test. <br>
Test statistic (t):
\[
t = \frac{\bar{x}_1 - \bar{x}_2}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}} \\[10pt]
\text{ Degrees of freedom (Welch-Satterthwaite): } \\[10pt]
\nu = \frac{[\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}]^2}{\frac{s_1^4}{n_1^2(n_1-1)} + \frac{s_2^4}{n_2^2(n_2-1)}}
\]

**Equal Variance:** <br>
In this case, both samples come from equal or approximately equal variance. <br>
Test statistic (t):
\[ 
t = \frac{\bar{x}_1 - \bar{x}_2}{s_p\sqrt{\frac{1}{n_1} + \frac{1}{n_2}}} \\[10pt]
\text{ Pooled variance } s_p: \\[10pt]
s_p = \sqrt{\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1 + n_2 - 2}}
\]
Here, degrees of freedom (for equal variance) \(\nu\) = \(n_1 + n_2 - 2\).

\(\bar{x}\): sample mean <br>
\(s\): sample standard deviation <br>
\(n\): sample size <br>
\(\nu\): degrees of freedom <br>

{{</ definition >}}

{{< question >}}
The AI team wants to validate whether the new ML model accuracy is better than the existing model's accuracy. <br>
Below is the data for the existing model and the new model. <br>
|     |New Model (A) | Existing Model (B)|
| --- | --- | --- |
| Sample size (n)     | 24 | 18 |
| Sample mean (\(\bar{x}\))     | 91% | 88% |
| Sample std. dev. (s) | 4% | 3% |


Given that the variance of accuracy scores of new and existing models are almost same.
{{</ question >}}

{{< answer >}}
Now, let's follow our hypothesis testing framework. <br>
Null hypothesis: \(H_0\):  The accuracy of new model is same as the accuracy of existing model. <br>
Alternative hypothesis: \(H_a\): The new model's accuracy is better/greater than the existing model's accuracy => right tailed test <br>

Let's solve this using 2 sample T-Test, since the sample size n < 30. <br>
Since the variance of 2 sample are almost equal then we can use the pooled variance method. <br>

Next let's compute the test statistic, under null hypothesis. <br>
\[
s_p = \sqrt{\frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1 + n_2 - 2}} \\[10pt]
= \sqrt{\frac{(23)4^2 + (17)3^2}{24+18-2}} \\[10pt]
= \sqrt{\frac{23*16 + 17*9}{40}} = \sqrt{\frac{521}{40}} \\[10pt]
=> s_p \approx 3.6 \\[10pt]
t_{obs} = \frac{\bar{x}_1 - \bar{x}_2}{s_p\sqrt{\frac{1}{n_1} + \frac{1}{n_2}}} \\[10pt]
= \frac{91-88}{3.6\sqrt{\frac{1}{24} + \frac{1}{18}}} \\[10pt]
= \frac{3}{3.6*0.31} \\[10pt]
=> t_{obs} \approx 2.68 \\[10pt]
\]
DOF \(\nu\) = \(24+18-2\) = 42 - 2 = 40 <br>
Let significance level \(\alpha\) = 5% =0.05. <br>
Critical value \(t_{0.05}\) = 1.684 <br>
_Important: Find the value of \(t_{\alpha}\) in [T-table](https://www.sjsu.edu/faculty/gerstman/StatPrimer/t-table.pdf)_ <br>

![](https://robosathi.com/images/two_sample_t_test.png)

Since \(t_{obs}\) > \(t_{0.05}\), we reject the null hypothesis. <br>
And, accept the alternative hypothesis that the new model has better accuracy than the existing model. <br>
{{</ answer >}}
<br>
{{< video "https://www.youtube.com/watch?v=MnJfCKaCYSU&t=1s" >}}

<br><br>
```End of Section```