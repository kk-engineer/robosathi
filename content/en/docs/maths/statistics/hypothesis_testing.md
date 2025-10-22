---
title: Hypothesis Testing
description: Hypothesis Testing
date: 2025-10-22
weight: 5
math: true
---

{{% pageinfo %}}
In this section, we will understand about Hypothesis Testing, along with a framework for Hypothesis Testing. <br>
{{% /pageinfo %}}

{{< alert color="success" title="Hypothesis" >}}
An idea that is suggested as a possible explanation for a phenomenon, but has not been found to be true.
{{< /alert >}}

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
<br><br>

{{< definition >}}
**Hypothesis Testing:** <br>
It is a statistical inference framework used to make decisions about a population parameter, such as, the mean, variance,
distribution, correlation, etc., based on a sample of data.
It provides a formal method to evaluate competing claims. <br>

**Null Hypothesis (\(H_0\)):** <br>
Status quo or no-effect or no difference statement; almost always contains a statement of equality.<br>

**Alternative Hypothesis (\(H_1 ~or~ H_a\)):** <br>
The statement representing an effect, a difference, or a relationship. <br>
It must be true if the null hypothesis is rejected.
{{< /definition >}}

{{< alert color="dark" title="Types of Hypothesis Testing" >}}
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
{{< /alert >}}

{{< alert color="secondary" title="Framework for Hypothesis Testing" >}}
We can structure any hypothesis test in 6 steps as follows: <br><br>
**Step 1**: Define the null and alternative hypotheses. <br>
**Step 2**: Select a relevant statistical test for the task with associated test statistic. <br>
**Step 3**: Calculate the test statistic under null hypothesis. <br>
**Step 4**: Select a significance level (\(\alpha\)), i.e, the maximum acceptable false positive rate; <br>
typically - 5% or 1%. <br>
**Step 5**: Compute the p-value from the observed value of test-statistic. <br>
**Step 6**: Make a decision to either accept or reject the null hypothesis, based on the significance level (\(\alpha\)). <br>

{{< /alert >}}

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
\[t_{obs} = \frac{m_{m1} - m_{m2}}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}\] <br>
s: Standard Deviation <br>
n: Sample Size <br>

_Note: If the 2 means are very close then \(t_{obs} \approx 0\)._ <br>

**Step 4**: _Suppose significance level (\(\alpha\)) = 5% or 0.05._ <br>

**Step 5**: _Compute the p-value from the observed value of test-statistic._ <br>
**P-Value**: <br>
\[p_{value} =  \mathbb{P}(t \geq t_{obs} | H_0)\] <br>
p-value = area under curve = probability of observing test statistic \( \ge t_{obs} \) if the null hypothesis is true. <br>
<br>
![](https://robosathi.com/images/p_value.png)

**Step 6**: _Accept or reject the null hypothesis, based on the significance level (\(\alpha\))._ <br>
If \(p_{value} < \alpha\), we reject the null hypothesis and accept the alternative hypothesis and vice versa. <br>
*Note: In the above example \(p_{value} < \alpha\), so we reject the null hypothesis.* <br>

{{< /answer >}}







<br><br>
```End of Section```


