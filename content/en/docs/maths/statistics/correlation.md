---
title: Correlation
description: Covariance & Correlation
date: 2025-10-21
weight: 3
math: true
---

{{% pageinfo %}}
In this section, we will understand about Correlation and Covariance. <br>
{{% /pageinfo %}}

{{< definition >}}
**Covariance:** <br>
It measures the direction of linear relationship between two variables \(X\) and \(Y\). <br>

\[Population ~ Covariance(X,Y) = \sigma_{xy} = \frac{1}{N}\sum_{i=1}^{N}(x_i - \mu_{x})(y_i - \mu_{y})\] <br>
\(N\) = size of population <br>
\(\mu_{x}\) = population mean of \(X\) <br>
\(\mu_{y}\) = population mean of \(Y\) <br>

\[Sample ~ Covariance(X,Y) = s_{xy} = \frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})\] <br>
\(n\) = size of sample <br>
\(\bar{x}\) = sample mean of \(X\) <br>
\(\bar{y}\) = sample mean of \(Y\) <br>

*Note: We have a term (n-1) instead of n in the denominator to make it an unbiased estimate, called Bessel's Correction.* <br>

If both \((x_i - \bar{x})\) and \((y_i - \bar{y})\) have the _same_ sign, then the product is _positive(+ve)_. <br>
If both \((x_i - \bar{x})\) and \((y_i - \bar{y})\) have _opposite_ signs, then the product is _negative(-ve)_. <br>
The final value of covariance depends on the sum of the above individual products. <br>

\(
\begin{aligned}
\text{Cov}(X, Y) &> 0 &&\Rightarrow \text{ } X \text{ and } Y \text{ increase or decrease together} \\
\text{Cov}(X, Y) &= 0 &&\Rightarrow \text{ } \text{No linear relationship} \\
\text{Cov}(X, Y) &< 0 &&\Rightarrow \text{ } \text{If } X \text{ increases, } Y \text{ decreases (and vice versa)}
\end{aligned}
\)

**Limitation:** <br>
Covariance is scale-dependent, i.e, units of X and Y impact its magnitude.<br> 
This makes it hard to make comparisons of covariance across different datasets. <br>
E.g: Covariance between age and height will NOT be same as the covariance between years of experience and salary. <br> 

*Note:It only measures the direction of the relationship, but does NOT give any information about the strength of the relationship.* <br>

{{</ definition >}}
For example: <br>
1. \(X = [1, 2, 3] \) and \(Y = [2, 4, 6] \) <br>
Let's calculate the covariance: <br>
\(\text{Cov}(X, Y) = \frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})\) <br>
\(\bar{x} = 2\) and \(\bar{y} = 4\) <br>
\(\text{Cov}(X, Y) = \frac{1}{3-1}[(1-2)(2-4) + (2-2)(4-4) + (3-2)(6-4)]= 0\) <br>
\( = \frac{1}{2}[2+0+2]= 2\) <br>
=> Cov(X,Y) > 0 i.e if X increases, Y increases and vice versa. <br>

<br><br>

{{< definition >}}
**Correlation:** <br>
It measures both the strength and direction of the linear relationship between two variables \(X\) and \(Y\). <br>
It is a standardized version of covariance that gives a dimensionless measure of linear relationship. <br>

There are 2 popular ways to calculate correlation coefficient: <br>
1. Pearson Correlation Coefficient (r) <br>
2. Spearman Rank Correlation Coefficient (\(\rho\))<br>
{{</ definition >}}
<br>

{{< definition >}}
**Pearson Correlation Coefficient (r):** <br>
It is a standardized version of covariance and most widely used measure of correlation. <br>
*Assumption:* Data is normally distributed. <br><br>
\[r_{xy} = \frac{Cov(X, Y)}{\sigma_{x} \sigma_{y}}\] <br>
\(\sigma_{x}\) and \(\sigma_{y}\) are the standard deviations of \(X\) and \(Y\). <br>

Range of \(r\) is between -1 and 1. <br>
\(r = 1\) => perfect +ve linear relationship between X and Y <br>
\(r = -1\)  => perfect -ve linear relationship between X and Y <br>
\(r = 0\) => NO linear relationship between X and Y. <br>

*Note: A correlation coefficient of 0.9 means that there is a strong linear relationship between X and Y, 
irrespective of their units.* <br>
{{</ definition >}}
For example:
1. \(X = [1, 2, 3] \) and \(Y = [2, 4, 6] \) <br>
Let's calculate the covariance: <br>
\(\text{Cov}(X, Y) = \frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})\) <br>
\(\bar{x} = 2\) and \(\bar{y} = 4\) <br>
\(\text{Cov}(X, Y) = \frac{1}{3-1}[(1-2)(2-4) + (2-2)(4-4) + (3-2)(6-4)]= 0\) <br>
\( => \text{Cov}(X, Y) = \frac{1}{2}[2+0+2]= 2\) <br>

Let's calculate the standard deviation of \(X\) and \(Y\): <br>
\(\sigma_{x} = \sqrt{\frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2} \) <br>
\(= \sqrt{\frac{1}{3-1}[(1-2)^2 + (2-2)^2 + (3-2)^2]}\) <br>
\(= \sqrt{\frac{1+0+1}{2}} =\sqrt{\frac{2}{2}} = 1 \) <br>

Similarly, we can calculate the standard deviation of \(Y\): <br>
\(\sigma_{y} = \sqrt{\frac{1}{n-1}\sum_{i=1}^{n}(y_i - \bar{y})^2} \) <br>
\(= \sqrt{\frac{1}{3-1}[(2-4)^2 + (4-4)^2 + (6-4)^2]}\) <br>
\(= \sqrt{\frac{4+0+4}{2}} =\sqrt{\frac{8}{2}} = 2 \) <br>

Now, we can calulate the  pearson correlation coefficient (r): <br>
\(r_{xy} = \frac{Cov(X, Y)}{\sigma_{x} \sigma_{y}}\) <br>
=> \(r_{xy} = \frac{2}{1* 2}\) <br>
=> \(r_{xy} = 1\) <br>
Therefore, we can say that there is a strong +ve linear relationship between X and Y.
<br><br>


{{< definition >}}
**Spearman Rank Correlation Coefficient (\(\rho\)):** <br>
It is a measure of the strength and direction of the monotonic relationship between two ranked variables \(X\) and \(Y\).<br>
It captures monotonic relationship, meaning the variables move in the same or opposite direction, <br>
but not necessarily a linear relationship. 
- It is used when Pearson's correlation is not suitable, such as, ordinal data, or when the continuous data does not 
meet the assumptions of linear methods, such as, Pearson's correlation.
- Non-parametric measure of correlation that uses ranks instead of raw data.
- Quantifies how well the ranks of one variable predict the ranks of the other variable.
- Range of \(\rho\) is between -1 and 1. <br>

\[\rho_{xy} = 1 - \frac{6\sum_{i}d_i^2}{n(n^2-1)}\] <br>
{{</ definition >}}
For example:
1. Compute the correlation of ranks awarded to a group of 5 students by 2 different teacherrs. <br>
| Student  | Teacher A Rank | Teacher B Rank  | \(d_i\) | \(d_i^2\) |
|----------|----------------|----------------|---------|-----------|
| S1        | 1             | 2     | -1    | 1 |
| S2        | 2             | 1            | 1     | 1 |
| S3        | 3             | 3            | 0     | 0 |
| S4        | 4             | 5            | -1    | 1 |
| S5        | 5             | 4            | 1     | 1 |

\(\sum_{i}d_i^2 = 4 \) <br>
\( n = 5 \) <br>
\(\rho_{xy} = 1 - \frac{6\sum_{i}d_i^2}{n(n^2-1)}\) <br>
=> \(\rho_{xy} = 1 - \frac{6*4}{5(5^2-1)}\) <br>
=> \(\rho_{xy} = 1 - \frac{24}{5*24}\) <br>
=> \(\rho_{xy} = 1 - \frac{1}{5}\) <br>
=> \(\rho_{xy} = 0.8\) <br>
Therefore, we can say that there is a strong +ve correlation between the ranks given by teacher A and teacher B.
<br><br>

2. \(X = [1, 2, 3] \) and \(Y = [1, 8, 27] \) <br>
Here, Spearman's rank correlation coefficient \(\rho\) will be perfect 1 as there is a monotonic relationship i.e
as X increases, Y increases and vice versa. <br>
But, the Pearson's correlation coefficient (r) will be slightly less than 1 i.e r = 0.9662.
<br><br>

{{< alert color="success" title="Correlation Application" >}}
Correlation is very useful in feature selection for training machine learning models.
1. If 2 features are highly correlated => they provide redundant information.
- One of the features can be removed without significant loss of information.
- Keeping both can cause issues, such as, multicollinearity.
2. If a feature is highly correlated with the target variable => this feature is a strong predictor, so keep it.
- A feature with very low or near zero correlation with the target variable may be considered for removal,
as they have little predictive power.
{{< /alert >}}

{{< alert color="warning" title="Correlation Vs Causation" >}}
**Causation** means that one variable directly causes the change in another variable, i.e, direct cause->effect relationship. <br>
Whereas, **correlation** means that two variables move together.

- _Correlation_ does NOT imply _Causation_.
  - Correlation simply shows an _association_ between two variables that could be coincidental or due to some third, unobserved, factor.

**E.g**: Election results and stock market - there may be some correlation between the two, <br> 
but establishing clear causal links is difficult. 
{{< /alert >}}

```End of Section```