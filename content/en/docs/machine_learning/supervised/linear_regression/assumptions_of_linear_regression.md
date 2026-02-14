---
title: Assumptions
description: Assumptions Of Linear Regression
date: 2026-02-14
weight: 13
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxde_X17sF7iN6rnQgFlBDC-" 
"Linear Regression | All Videos" >}}
<br>

{{< panel color="blue" title="Assumptions" >}}
Linear Regression works **reliably** only when certain key 🔑 **assumptions** about the data are met.
- Linearity
- Independence of Errors (No Auto-Correlation)
- Homoscedasticity (Equal Variance)
- Normality of Errors
- No Multicollinearity
- No Endogeneity (Target not correlated with the error term)
{{< /panel >}}

{{< panel color="orange" title="Linearity" >}}
Relationship between features and target 🎯 is **linear** in **parameters**.

**Note**: Polynomial regression is linear regression. <br>
\(y=w_0 +w_1x_1+w_2x_2^2 + w_3x_3^3\)

{{< /panel >}}


{{< panel color="navy" title="Independence of Errors (No Auto-Correlation)" >}}
Residuals (errors) should not have a visible pattern or **correlation** with one another (most common in time-series ⏰ data).

**Risk**: <br>
If errors are correlated, standard errors will be underestimated, making variables look 'statistically significant' when they are not.

**Test**:
- Durbin–Watson test
- Autocorrelation plots (ACF)
- Residuals vs time

{{< imgproc "images/machine_learning/supervised/linear_regression/assumptions_of_linear_regression/slide_05_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Homoscedasticity" >}}
Constant variance of errors; Var(ϵ|X)=σ

**Risk**: <br>
Standard errors become biased, leading to unreliable hypothesis tests (t-tests, F-tests).

**Test**:
- Breusch–Pagan test
- White test

**Fix**:
- Log transform
- Weighted Least Squares(WLS)
{{< /panel >}}

{{< panel color="blue" title="Normality of Errors" >}}
Error terms should follow a normal distribution; (Required for small datasets.)

**Note**: Because of Central Limit Theorem, with a large enough sample size, this becomes less critical for estimation.

**Risk**: Hypothesis testing (calculating p-values and confidence intervals), we assume the error terms follow a normal distribution.

**Test**:
- Q-Q plot
- Shapiro-Wilk Test

{{< imgproc "images/machine_learning/supervised/linear_regression/assumptions_of_linear_regression/slide_08_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< imgproc "images/machine_learning/supervised/linear_regression/assumptions_of_linear_regression/slide_09_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="rust" title="No Multicollinearity" >}}
Features should not be highly correlated with each other.

**Risk**:
- High correlation makes it difficult to determine the unique, individual impact of each feature. This leads to high variance in model parameter estimates, small changes in data cause large swings in parameters.
- Model interpretability issues.

**Test**:
- Variance Inflation Factor(VIF)VIF > 5 → concern, VIF > 10 → serious issue

**Fix**:
- PCA
- Remove redundant features
{{< /panel >}}

{{< panel color="charcoal" title="No Endogeneity (Exogeneity)" >}}
Error term must be uncorrelated with the features; E[ϵ|X] = 0

**Risk**:
- Parameters will be biased and inconsistent.

**Test**:
- Hausman Test
- Durbin-Wu-Hausman (DWH) Test

**Fix**:
- Controlled experiments.
{{< /panel >}}

{{< video "https://youtu.be/hNV8bWe8IdQ" >}}
<br><br>
```End of Section```
