---
title: Hypothesis Testing
description: Hypothesis Testing
date: 2025-10-22
weight: 6
math: true
---


{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfGbwZaKtx_nIi_DNWMK8mX" 
        "Statistics for AI & ML | Full Course Videos">}}

{{< panel color="green" title="Hypothesis" >}}
An idea that is suggested as a possible explanation for a phenomenon, but has not been found to be true.
{{< /panel >}}

{{< question >}}
Why do we need **Hypothesis Testing**?
{{</ question >}}

{{< answer >}}
**Hypothesis Testing** is used to determine whether a claim or theory about a population is supported by a sample data, <br>
by assessing whether observed difference or patterns are likely due to chance or represent a true effect.
- It allows companies to test marketing campaigns or new strategies on a small scale before committing to larger investments.
- Based on the results of hypothesis testing, we can make reliable inferences about the whole group based on a representative sample.
- It helps us determine whether an observed result is statistically significant finding, or if it could have just happened by random chance.
{{< /answer >}}

{{< definition title="Hypothesis Testing" >}}
It is a statistical inference framework used to make decisions about a population parameter, such as, the mean, variance,
distribution, correlation, etc., based on a sample of data.
It provides a formal method to evaluate competing claims. <br>

**Null Hypothesis (\(H_0\)):** <br>
Status quo or no-effect or no difference statement; almost always contains a statement of equality.<br>

**Alternative Hypothesis (\(H_1 ~or~ H_a\)):** <br>
The statement representing an effect, a difference, or a relationship. <br>
It must be true if the null hypothesis is rejected.
{{< /definition >}}

{{< panel color="green" title="Types of Hypothesis Testing" >}}
1. **Test of Means:** <br>
- 1-Sample Mean Test: Compare sample mean to a known population mean.
- 2-Sample Mean Test: Compare means of 2 populations.
- Paired Mean Test: Compare means when data is paired, e.g., before vs. after test.

2. **Test of Median:** <br>
- Mood's Median Test
- Sign Test
- Wilcoxon Signed Rank Test (non-parametric)

3. **Test of Variance:** <br>
- Chi-Square Test for a single variance
- F-Test to compare variances of 2 populations

4. **Test of Distribution(Goodness of Fit):** <br>
- Kolmogorov-Smirnov Test
- Shapiro-Wilk Test
- Anderson-Darling Test
- Chi-Square Goodness of Fit Test

5. **Test of Correlation:** <br>
- Pearson's Correlation Coefficient Test
- Spearman's Rank Correlation Test
- Kendall's Tau Correlation Test
- Chi-Square Test of Independence

6. **Regression Test:** <br>
- T-Test: For regression coefficients
- F-Test: For overall regression significance
{{< /panel >}}

{{< video "https://youtu.be/u1DsXg2G7_c?si=m78ntxJv_uVGXF6b" >}}

{{< panel color="orange" title="Framework for Hypothesis Testing" >}}
We can structure any hypothesis test in 6 steps as follows: <br><br>
**Step 1**: Define the null and alternative hypotheses. <br>
**Step 2**: Select a relevant statistical test for the task with associated test statistic. <br>
**Step 3**: Calculate the test statistic under null hypothesis. <br>
**Step 4**: Select a significance level (\(\alpha\)), i.e, the maximum acceptable false positive rate; <br>
typically - 5% or 1%. <br>
**Step 5**: Compute the p-value from the observed value of test-statistic. <br>
**Step 6**: Make a decision to either accept or reject the null hypothesis, based on the significance level (\(\alpha\)). <br>

{{< /panel >}}

{{< question >}}
Perform a hypothesis test to compare the mean recovery time of 2 medicines.
{{< /question >}}

{{< answer >}}
Say, the data, D: <patient_id, med_1/med_2, recovery_time(in days)> <br>
We need some metric to compare the recovery times of 2 medicines. <br>
We can use the mean recovery time as the metric, because we know that we can use following techniques for comparison: <br>
1. _2-Sample T-Test_; if \(n < 30\) and population standard deviation \(\sigma\) is _unknown_.
2. _2-Sample Z-Test_; if \(n \ge 30\) and population standard deviation \(\sigma\) is _known_.

*Note: Let's assume the sample size \(n < 30\), because medical tests usually have small sample sizes.* <br>
=> We will use the 2-Sample **T-Test**; we will continue using T-Test throughout the discussion.

**Step 1**: _Define the null and alternative hypotheses._ <br>
**Null Hypothesis** \(H_0\): The mean recovery time of 2 medicines is the same i.e \(Mean_{m1} = Mean_{m2}\) or \(m_{m1} = m_{m2}\). <br>
**Alternate Hypothesis** \(H_a\): \(m_{m1} < m_{m2}\) (1-Sided T-Test) or \(m_{m1} ⍯ m_{m2}\) (2-Sided T-Test). <br>

**Step 2**: _Select a relevant statistical test for the task with associated test statistic._ <br>
Let's do a 2 sample **T-Test**, i.e, \(m_{m1} < m_{m2}\)

**Step 3**: _Calculate the test statistic under null hypothesis_.<br>
**Test Statistic**:<br>
For 2 sample T-Test:
\[t_{obs} = \frac{m_{m_1} - m_{m_2}}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}\] <br>
s: Standard Deviation <br>
n: Sample Size <br>

_Note: If the 2 means are very close then \(t_{obs} \approx 0\)._ <br>

**Step 4**: _Suppose significance level (\(\alpha\)) = 5% or 0.05._ <br>

**Step 5**: _Compute the p-value from the observed value of test-statistic._ <br>
**P-Value**: <br>
\[p_{value} =  \mathbb{P}(t \geq t_{obs} | H_0)\] <br>
p-value = area under curve = probability of observing test statistic \( \ge t_{obs} \) if the null hypothesis is true. <br>
<br>
{{< imgproc "images/maths/statistics/p_value_1.png" Resize "800x" >}}{{< /imgproc >}}

**Step 6**: _Accept or reject the null hypothesis, based on the significance level (\(\alpha\))._ <br>
If \(p_{value} < \alpha\), we reject the null hypothesis and accept the alternative hypothesis and vice versa. <br>
*Note: In the above example \(p_{value} < \alpha\), so we reject the null hypothesis.* <br>

{{< /answer >}}

{{< video "https://youtu.be/t_6o-RlcBDI?si=Szy5cFwMYrFKBa1w&t=1" >}}

{{< panel color="green" title="Left or Right Sided (Tailed) Test" >}}
We need to do a left or right sided test, or a 2-sided test, this depends upon our alternate hypothesis and test statistic. <br>

Let's continue our 2 sample mean T-test to understand the concept: <br>
\[t_{obs} = \frac{m_{m_1} - m_{m_2}}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}\]

**Left Sided/Tailed Test:** <br>
\(H_a\): Mean recovery time of medicine 1 < medicine 2, i.e,  \(m_{m_1} < m_{m_2}\) <br>
=> \(m_{m_1} - m_{m_2} < 0\) <br>
\[t_{obs} = \frac{m_{m_1} - m_{m_2}}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}\]
Since, the denominator in above equation is always positive.<br>
=> \(t_{obs} < 0\) <br>
Therefore, we need to do a left sided/tailed test. <br>
<br>
{{< imgproc "images/maths/statistics/left_tailed.png" Resize "800x" >}}{{< /imgproc >}}

So, we want \(t_{obs}\) to be very negative to confidently conclude that alternate hypothesis is true. <br>

**Right Sided/Tailed Test:** <br>
\(H_a\): Mean recovery time of medicine 1 > medicine 2, i.e,  \(m_{m_1} > m_{m_2}\) <br>
=> \(m_{m_1} - m_{m_2} > 0\) <br>
Similarly, here we need to do a right sided/tailed test. <br>


**2 Sided/Tailed Test:** <br>
\(H_a\): Mean recovery time of medicine 1 ⍯ medicine 2, i.e,  \(m_{m_1} ⍯ ~ m_{m_2}\) <br>
=> \(m_{m_1} - m_{m_2} < 0\)  or \(m_{m_1} - m_{m_2} > 0\)<br>
If \(H_a\) is true then \(t_{obs}\) is a large -ve value or a large +ve value. <br> 
\[t_{obs} = \frac{m_{m_1} - m_{m_2}}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}\]
Since, t-distribution is symmetric, we can divide the significance level \(\alpha\) into 2 equal parts. <br>
i.e \(\alpha = 2.5\%\) on each side. <br>

{{< imgproc "images/maths/statistics/two_sided.png" Resize "800x" >}}{{< /imgproc >}}

So, we want \(t_{obs}\) to be very negative or very positive to confidently conclude that the alternate hypothesis is true.
We accept \(H_a\) if \(t_{obs} < t^1_{\alpha/2}\)  or \(t_{obs} > t^2_{\alpha/2}\).

*Note: For critical applications '\(\alpha\)' can be very small i.e. 0.1% or 0.01%, e.g medicine.* <br>
{{< /panel >}}

{{< video "https://www.youtube.com/watch?v=1pM0UfNgEQI&t=1s" >}}

{{< definition title="Significance Level (\(\alpha\))" >}}
It is the probability of wrongly rejecting a true null hypothesis, known as a Type I error or false +ve rate. <br>
- Tolerance level of wrongly accepting alternate hypothesis.
- If the p-value < \(\alpha\), we reject the null hypothesis and conclude that the finding is statistically NOT so significant..

{{< /definition >}}

{{< definition title="Critical Value" >}}
It is a specific point on the test-statistic distribution that defines the boundaries of the null hypothesis 
acceptance/rejection region. <br>
- It tells us that at what value (\(t_{\alpha}\)) of test statistic will the area under curve be equal to the significance level \(\alpha\).
- For a right tailed/sided test:
  - if \(t_{obs} > t_{\alpha} => p_{value} < \alpha\); therefore, reject null hypothesis.
  - if \(t_{obs} < t_{\alpha} => p_{value} \ge \alpha\); therefore, failed to reject null hypothesis.

{{< imgproc "images/maths/statistics/critical_value.png" Resize "800x" >}}{{< /imgproc >}}
{{< /definition >}}

{{< definition title="Power of Test" >}}
It is the probability that a hypothesis test will correctly reject a false null hypothesis (\(H_{0}\)) 
when the alternative hypothesis (\(H_{a}\)) is true.
- Power of test = \(1 - \beta\)
- Probability of correctly accepting alternate hypothesis (\(H_{a}\))
- \(\alpha\): Probability of wrongly accepting alternate hypothesis \(H_{a}\)
- \(\beta\): Probability of wrongly rejecting alternate hypothesis \(H_{a}\)

{{< imgproc "images/maths/statistics/power_of_test.png" Resize "800x" >}}{{< /imgproc >}}
{{< /definition >}}
<br>

{{< question >}}
Does having a large sample size make a hypothesis test more powerful?
{{< /question >}}

{{< answer >}}
Yes, having a large sample size makes a hypothesis test more powerful. <br>
- As n increases, sample mean \(\bar{x}\) approaches the population mean \(\mu\).
- Also, as n increases, t-distribution approaches normal distribution.
{{</ answer >}}

{{< video "https://www.youtube.com/watch?v=DFY2cKy4Sjg&t=1s" >}}

{{< panel color="cyan" title="P-Value">}}
P-value only measures whether the observed change is statistically significant.
{{< /panel >}}

{{< definition title="Effect Size" >}}
It is a standardized objective measure that complements p-value by clarifying whether a statistically significant 
finding has any real world relevance. <br>
It quantifies the magnitude of relationship between two variables. <br>
- Larger effect size => more impactful effect.
- Standardized (mean centered + variance scaled) measure allows us to compare the imporance of effect across various
studies or groups, even with different sample sizes.

Effect size is measured using Cohen's d formula: <br>
\[
d = \frac{\bar{X_1} - \bar{X_2}}{s_p} \\[10pt]
s_p = \sqrt{\frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2}}
\]
\(\bar{X}\): Sample mean <br>
\(s_p\): Pooled Standard deviation <br>
\(n\): Sample size <br>
\(s\): Standard deviation <br>

*Note: Theoretically, Cohen's d value can range from negative infinity to positive infinity. <br>
but for practical purposes, we use the following value: <br>
small effect (\(d=0.2\)), medium effect (\(d=0.5\)), and large effect (\(d\ge 0.8\)).*
- More overlap => less effect i.e low Cohen's d value.
{{< imgproc "images/maths/statistics/effect_size.png" Resize "800x" >}}{{< /imgproc >}}
{{</ definition >}}

For example: <br>
- A study on drug trials finds that patients taking a new drug had statistically significant <br>
improvement (p-value<0.05), compared to a placebo group.
1. Small effect size: Cohen's d = 0.1 => drug had minimal effect.
2. Large effect size: Cohen's d = 0.8 => drug produced substantial improvement.

{{< video "https://www.youtube.com/watch?v=AfawJHBRQOc&t=01s" >}}
<br><br>

```End of Section```


