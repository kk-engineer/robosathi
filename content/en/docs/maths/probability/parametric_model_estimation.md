---
title: Parametric Model Estimation
description: Parametric Model Estimation
date: 2025-10-18
weight: 16
math: true
---

{{% pageinfo %}}
In this section, we will understand Parametric Model Estimation via two philosophical approaches. <br>
1. Frequentist: Parameter \(\Theta\) is fixed, but unknown.
2. Bayesian: Parameter \(\Theta\) itself is unknown, so we model it as a random variable with a probability distribution.
{{% /pageinfo %}}

{{< playlist "https://youtube.com/playlist?list=PLnpa6KP2ZQxcI3JyTIwOTKXY7ANhw__v1&si=MNoo5fxBo_10dLuM" >}}
<br>

{{<definition >}}
**Parametric Model Estimation:** <br>
It is the process of finding the best-fitting finite set of parameters \(\Theta\) for a model that assumes a 
specific probability distribution for the data. <br>
It involves using the dataset to estimate the parameters (like the mean and standard deviation of a normal distribution) 
that define the model. <br><br>
\(P(X \mid \Theta) \) : Probability of seeing data \(X: (X_1, X_2, \dots, X_n) \), given the parameters \(\Theta\) of the 
underlying probability distribution from which the data is assumed to be generated.

*Goal of estimation:* <br>
We observed data, \( D = \{X_1, X_2, \dots, X_n\} \), and we want to infer the the unknow parameters \(\Theta\) 
of the underlying probability distribution, assuming that the data is generated I.I.D. <br>
[Read more for I.I.D]({{<ref "/docs/maths/probability/independent_identically_distributed" >}})

*Note: Most of the time, from experience, we know the underlying probability distribution of data, 
such as, Bernoulli, Gaussian, etc.*
{{</ definition >}}
<br>
There are 2 philosophical approaches to estimate the parameters of a parametric model: <br>
1. **Frequentist**: 
- Parameters \(\Theta\) is fixed, but unknown, only data is random.
- It views probability as the long-run frequency of events in repeated trials; e.g toss a coin 'n' times.
- It is favoured when the sample size is large.
- For example, Maximum Likelihood Estimation(MLE), Method of Moments, etc.

2. **Bayesian**: 
- Parameters \(\Theta\) itself is unknown, so we model it as a random variable with a probability distribution.
- It views probability as a degree of belief that can be updated with new evidence, i.e. data. <br>
 Thus, integrating prior knowledge with data to express the uncertainty about the parameters.
- It is favoured when the sample size is small, as it uses prior belief about the data distribution too.
- For example, Maximum A Posteriori Estimation(MAP), Minimum Mean Square Error Estimation(MMSE), etc..
<br><br>

{{<definition >}}
**Maximum Likelihood Estimation:** <br>
It is the most popular frequentist approach to estimate the parameters of a model. <br>
This method helps us find the parameters \(\Theta\) that make the data most probable.

**Likelihood Function:** <br>
Say, we have data, \(D = X_1, X_2, \dots, X_n\) are I.I.D discrete random variable with PMF = \(P_{\Theta}(.)\) <br>
Then, the likelihood function is the probability of observing the data, \(D = \{X_1, X_2, \dots, X_n\}\), 
given the parameters \(\Theta\).

\[ 
\begin{aligned}
\mathcal{L_{X_1, X_2, \dots, X_n}}(\Theta) &= P_{\Theta}(X_1, X_2, \dots, X_n) \\
&= \prod_{i=1}^{n} P_{\Theta}(X_i) \text{ ~ since, I.I.D } \\
\text{ for continuous case: } \\
& = \int_{\Theta} f_{\Theta}(x_i) d\theta
\end{aligned}
\]

**Task:** <br>
Find the value of parameter \(\Theta_{ML}\) that maximizes the likelihood function.

\[
\begin{aligned}
\underset{\Theta}{\mathrm{argmax}}\  \mathcal{L_{X_1, X_2, \dots ,X_n}}(\Theta) &= \Theta_{ML}(X_1, X_2, \dots, X_n) \\
&= \prod_{i=1}^{n} P_{\Theta}(X_i)
\end{aligned}
\]

In order to find the parameter \(\Theta_{ML}\) that maximises the likelihood function, <br>
we need to take the first derivative of the likelihood function with respect to \(\Theta\) and equate it to zero. <br>
But, taking derivative of a product is challenging, so we will take the logarithm on both sides. <br>
*Note: Log is a monotonically increasing function, i.e, as x increases, log(x) increases too.* <br>

Let us denote the **log-likelihood function** as \(\bar{L}\).

\[
\begin{aligned}
\mathcal{\bar{L}_{X_1, X_2, \dots ,X_n}}(\Theta) &= log [\prod_{i=1}^{n} P_{\Theta}(X_i)] \\
&= \sum_{i=1}^{n} log P_{\Theta}(X_i) \\
\end{aligned}
\]

Therefore, **Maximum Likelihood Estimation** is the parameter \(\Theta_{ML}\) that maximises the log-likelihood function.
\[
\Theta_{ML}(X_1, X_2, \dots, X_n) = \underset{\Theta}{\mathrm{argmax}}\ \bar{L}_{X_1, X_2, \dots ,X_n}(\Theta) 
\]

{{</ definition >}}

For example: 
1. Let's do a maximum likelihood estimation of parameters \(\theta\) for the **Bernoulli** distribution.
\(X_1, X_2, \dots, X_n\) are I.I.D. *Bernoulli* random variable with PMF as below: <br>
\[
P(X_i = 1) = \theta \\
P(X_i = 0) = 1 - \theta
\]
We need to estimate the parameter \(\theta\). <br>
Let, \(n_1 = \) number of 1's in the dataset. <br>

\[
\begin{aligned}
\text{Likelihood Function: } \\
\mathcal{L_{X_1, X_2, \dots, X_n}}(\Theta) &= \prod_{i=1}^{n} P_{\Theta}(X_i) \\
&= \theta^{n_1} (1 - \theta)^{n - n_1} \\
\text{Log-Likelihood Function: } \\
\bar{L}_{X_1, X_2, \dots, X_n}(\Theta) &= log [\theta^{n_1} (1 - \theta)^{n - n_1}] \\
&= n_1 log \theta + (n - n_1) log (1 - \theta) \\
\text{Maximum Likelihood Estimation: } \\
\Theta_{ML} &= \underset{\Theta}{\mathrm{argmax}}\ \bar{L}_{X_1, X_2, \dots, X_n}(\Theta) \\
&= \underset{\Theta}{\mathrm{argmax}}\ n_1 log \theta + (n - n_1) log (1 - \theta) \\
\end{aligned}
\]

In order to find the parameter \(\theta_{ML}\), we need to take the first derivative of the log-likelihood function
with respect to \(\theta\) and equate it to zero. <br>

\[
\begin{aligned}
\Theta_{ML} &= \underset{\Theta}{\mathrm{argmax}}\ n_1 log \theta + (n - n_1) log (1 - \theta) \\
=>& \frac{d}{d\theta} (n_1 log \theta + (n - n_1) log (1 - \theta))  = 0\\
=>& \frac{n_1}{\theta} + \frac{(n - n_1)}{1 - \theta}*(-1) = 0 \\
=>& \frac{n_1}{\theta} = \frac{(n - n_1)}{1 - \theta} \\
=>& n_1 - n_1\theta = n\theta  - n_1\theta\\
=>& n_1 = n\theta \\
=>& \theta = \frac{n_1}{n} \text{ ~ i.e proportion of 1's} \\
\end{aligned}
\]

Say, **e.g.**, we have 10 observations for the Bernoulli random variable as: 1,0,1,1,0,1,1,0,1,0. <br>
Then, the parameter \(\Theta_{ML} = \frac{6}{10} = 0.6\) i.e proportion of 1's. <br>

2. Let's do a maximum likelihood estimation of parameters \(\mu\) and \(\sigma\) for the **Gaussian** distribution. <br>
\(X_1, X_2, \dots, X_n\) are I.I.D. *Gaussian* \( \sim N(\mu, \sigma^2) \)  <br>
\(x_1, x_2, \dots, x_n\) are the realisations/observations of the random variable. <br><br>

\[
\begin{aligned}
\text{Likelihood Function: } \\
\mathcal{L_{X_1, X_2, \dots, X_n}}(\Theta) &= \prod_{i=1}^{n} f_{\mu, \sigma}(X_i) \\
&= \prod_{i=1}^{n} \frac{1}{\sqrt{2\pi\sigma^2}} e^{-\frac{(x_i - \mu)^2}{2\sigma^2}} \\
&= (\frac{1}{\sqrt{2\pi\sigma^2}})^n \prod_{i=1}^{n} e^{-\frac{(x_i - \mu)^2}{2\sigma^2}} \\
\text{Log-Likelihood Function: } \\
\bar{L}_{X_1, X_2, \dots, X_n}(\Theta) &= log [(\frac{1}{\sqrt{2\pi\sigma^2}})^n \prod_{i=1}^{n} e^{-\frac{(x_i - \mu)^2}{2\sigma^2}}] \\
&= log (2\pi\ \sigma^2)^{\frac{-n}{2}}  - \sum_{i=1}^{n} \frac{(x_i - \mu)^2}{2\sigma^2} \\
=> \bar{L}_{X_1, X_2, \dots, X_n}(\Theta) &= -\frac{n}{2} log (2\pi) -nlog(\sigma) - \frac{1}{2\sigma^2} \sum_{i=1}^{n} (x_i - \mu)^2 \\
\end{aligned}
\]
_Note: Here, the first term \( -\frac{n}{2} log (2\pi) \) is a constant wrt both \(\mu\) and \(\sigma\), so we can ignore the term._ <br>

**Maximum Likelihood Estimation:** <br>
\[
\mu_{ML}, \sigma_{ML} = \underset{\mu, \sigma}{\mathrm{argmax}}\ \bar{L}_{X_1, X_2, \dots, X_n}(\Theta) \\
\]
Instead of finding \(\mu\) and \(\sigma\) that maximises the log-likelihood function, <br>
we can find \(\mu\) and \(\sigma\) that minimises the negative of the log-likelihood function. <br>
\[
\mu_{ML}, \sigma_{ML} = \underset{\mu, \sigma}{\mathrm{argmin}}\ -\bar{L}_{X_1, X_2, \dots, X_n}(\Theta) \\
\mu_{ML}, \sigma_{ML} = \underset{\mu, \sigma}{\mathrm{argmin}}\ nlog(\sigma) + \frac{1}{2\sigma^2} \sum_{i=1}^{n} (x_i - \mu)^2 
\]

Now, lets differentiate the log likelihood function wrt \(\mu\) and \(\sigma\) separately to get \(\mu_{ML}, \sigma_{ML}\). <br><br>
Lets, calculate \(\mu_{ML}\) first by taking the derivative of the log-likelihood function wrt \(\mu\) and equating it to 0. <br>

\[
\begin{aligned}
&\frac{d}{d\mu} \bar{L}_{X_1, X_2, \dots, X_n}(\Theta) = \frac{d}{d\mu} [nlog(\sigma) + \frac{1}{2\sigma^2} \sum_{i=1}^{n} (x_i - \mu)^2] = 0 \\
&=> 0 + \frac{2}{2\sigma^2} \sum_{i=1}^{n} (x_i - \mu)*(-1) = 0\\
&=> \sum_{i=1}^{n} x_i - n\mu = 0 \\
&=> n\mu = \sum_{i=1}^{n} x_i \\
&=> \mu_{ML} = \frac{1}{n} \sum_{i=1}^{n} x_i \\
\end{aligned}
\]

Similarly, we can calculate \(\sigma_{ML}\) by taking the derivative of the log-likelihood function wrt \(\sigma\) 
and equating it to 0. <br>

\[
\begin{aligned}
\frac{d}{d\sigma} \bar{L}_{X_1, X_2, \dots, X_n}(\Theta) &= \frac{d}{d\sigma} [nlog(\sigma) +  \frac{1}{2\sigma^2} \sum_{i=1}^{n} (x_i - \mu)^2] = 0 \\
=> \sigma^2_{ML} = \frac{1}{n} \sum_{i=1}^{n} (x_i - \mu_{ML})^2
\end{aligned}
\]

*Note: In general MLE is biased, i.e does NOT give an unbiased estimate => divides by \(n\) instead of \((n-1)\).* <br>
<br><Br>

{{<definition >}}
**Bayesian Statistics:** <br>
Bayesian statistics model parameters by updating initial beliefs (prior probabilities) with observed data to form 
a final belief (posterior probability) using Bayes' Theorem. <br>
Instead of a single point estimate, it provides a probability distribution over possible parameter values, 
which allows to quantify uncertainty and yields more robust models, especially with limited data.<br>

**Bayes' Theorem:** <br>
\[
P(\Theta \mid X) = \frac{P(\Theta)P(X \mid \Theta)}{P(X)}
\]

\(P(\Theta)\): **Prior**: Initial distribution of \(\Theta\) before seeing the data. <br> 
\(P(X \mid \Theta)\): **Likelihood**: Conditional distribution of data \(X\), given the parameter \(\Theta\). <br> 
\(P(\Theta \mid X)\): **Posterior**: Conditional distribution of parameter \(\Theta\), given the data \(X\). <br>
\(P(X)\): **Evidence**: Probability of seeing the data \(X\). <br>

{{</ definition >}}


<br><br>
```End of Section```