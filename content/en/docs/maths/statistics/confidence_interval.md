---
title: Confidence Interval
description: Confidence Interval
date: 2025-10-21
weight: 5
math: true
---

{{% pageinfo %}}
In this section, we will understand about Confidence Interval. <br>
{{% /pageinfo %}}


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