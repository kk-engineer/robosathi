---
title: Probability Mass Function
description: Probability Mass Function of a Discrete Random Variable
date: 2025-10-14
weight: 6
math: true
---

{{% pageinfo %}}
In this section, we will understand Probability Mass Function of a Discrete Random Variable.<br>
{{% /pageinfo %}}

{{< definition >}}
**Probability Mass Function(PMF):** <br>
It gives the exact value of a probability for a discrete random variable at a specific value \(x\).<br>
It assigns a "non-zero" mass or probability to a specific countable outcome.<br>
*Note: Called **'mass'** because probability is concentrated at a single discrete point.* <br>
\(PMF = P(X=x)\) <br>
e.g: _Bernoulli_, _Binomial_, _Multinomial_, _Poisson_ etc. <br><br>
Commonly visualised as a bar chart. <br>
*Note: PMF = Jump at a given point in CDF.* <br><br>
\(PMF = P_x(X=x_i) = F_X(X=x_i) - F_X(X=x_{i-1})\)
{{</ definition >}}

![](https://robosathi.com/images/cdf_example_1.png)

{{< alert title="Key properties of PMF" color="success" >}}
1. **Non-Negative:** Probability of any value 'x' must be non-negative i.e \(P(X=x) \ge 0 ~\forall x~\). <br>
2. **Sum = 1:** Sum of probabilities of all possible outcomes must be 1. <br>
\( \sum_{x} P(X=x) = 1 \) <br>
3. For any value that the discrete random variable can NOT take, the probability must be zero.
{{< /alert >}}

{{< video "https://youtu.be/xExee4sdtnU?si=cPkCyQ7NNYdfGIt5" >}}
<br>

{{< definition >}}
**Bernoulli Distribution:** <br>
It models a single event with two possible outcomes, _success_ (1) or _failure_ (0), with a fixed probability of success, 
**'p'**. <br>
**p** = Probability of _success_ <br>
**1-p** = Probability of _failure_ <br>
**Mean** = p <br>
**Variance** = p(1-p) <br>
*Note: A single trial that adheres to these conditions is called a **Bernoulli trial**.* <br>
\(PMF, P(x) = p^x(1-p)^{1-x}\), where \(x \in \{0,1\}\) <br>
{{</ definition >}}
For example: 
1. Toss a coin, we get heads or tails. <br>
2. Result of a test, pass or fail. <br>
3. Machine learning, binary classification model. <br><br>

{{< definition >}}
**Binomial Distribution:** <br>
It extends the Bernoulli distribution by modeling the number of successes that occur over a fixed number of 
independent trials. <br>
**n** = Number of trials <br>
**k** = Number of successes <br>
**p** = Probability of _success_ <br>
**Mean** = np <br>
**Variance** = np(1-p) <br><br>
\(PMF, P(x=k) = \binom{n}{k}p^k(1-p)^{n-k}\), where \(k \in \{0,1,2,3,...,n\}\) <br>
\(\binom{n}{k} = \frac{n!}{k!(n-k)!}\) i.e number of ways to achieve '_k_' successes in '_n_' independent trials. <br>

*Note: Bernoulli is a special case of Binomial distribution where n = 1.* <br>
{{</ definition >}}
For example:
- Counting number of heads(success) in 'n' coin tosses. <br>

{{< alert title="Assumptions" color="warning" >}}
1. Trials are independent. <br>
2. Probability of success remains constant for every trial. <br>
{{< /alert >}}
<br>
![](https://robosathi.com/images/binomial.png)
<br><br>

{{< question >}}
What is the probability of getting exactly 2 heads in 3 coin tosses? <br>
{{</ question >}}

{{< answer >}}
Total number of outcomes in 3 coin tosses = 2^3 = 8 <br>
Desired outcomes i.e 2 heads in 3 coin tosses = \(\{HHT, HTH, THH\}\) = 3 <br>
Probability of getting exactly 2 heads in 3 coin tosses = \(\frac{3}{8}\) = 0.375 <br>
*Now lets solve the question using the binomial distribution formula.* <br>
\[P(k=2) = \binom{3}{2}p^2(1-p)^{3-2} \\
= \frac{3!}{2!(3-2)!}(0.5)^2(0.5) \\
= 3*0.25*0.5 = 3*0.125 = 0.375\] <br>
{{</ answer >}}
<br>

{{< question >}}
What is the probability of winning a lottery 1 out of 10 times, given that the probability of winning a single lottery 
= 1/3? <br>
{{</ question >}}
{{< answer >}}
Number of successes, k = 1 <br>
Number of trials, n = 10 <br>
Probability of success, p = 1/3 <br>
Probability of winning lottery, P(k=1) = \[\binom{10}{1}p^1(1-p)^{10-1} \\
= \frac{10!}{1!(10-1)!}(1/3)^1(2/3)^9 \\
= 10*0.333*0.026 = 0.866 \approx 8.66\% \] <br>
{{</ answer >}}
<br>

{{< video "https://youtu.be/Rbs_bE3fP7U?si=NUavMSxzS1fbCqEF" >}}
<br>

{{< definition >}}
**Poisson Distribution:** <br>
It expresses the probability of an event happening a certain number of times 'k' within a fixed interval of time. <br>
Given that:
1. Events occur with a known constant rate.<br>
2. Occurrence of an event is independent of the time since the last event. <br><br>
Parameters: <br>
\(\lambda\): Expected number of events per interval <br>
**Mean** = \(\lambda\) <br>
**Variance** = \(\lambda\)<br>
\(k\) = Number of events in the same interval <br>
PMF = Probability of 'k' events in the same interval <br>
\[PMF = \lambda^ke^{-\lambda}/k!\]
*Note: Useful to count data where total population size is large but the probability of an individual event is small.* <br>
{{</ definition >}}
For example: 
1. Model the number of customers arrival at a service center per hour. <br>
2. Number of website clicks in a given time period. <br><br>

![](https://robosathi.com/images/poisson_pmf.png)
{{< alert color="warning" >}}**Graph**: PMF of Poisson Distribution.{{< /alert >}}

{{< question >}}
A company receives, on an average, 5 customer emails per hour. What is the probability of receiving exactly 3 emails
in the next hour? <br>
{{</ question >}}
{{< answer >}}
Expected (average) number of emails per hour, \(\lambda\) = 5 <br>
Probability of receiving exactly k=3 emails in the next hour =  <br>
\[P(k=3) = \lambda^3e^{-\lambda} / 3! \\
= 5^3e^{-5} / 3! = 125*e^{-5} / 6 \\
= 125*0.00674 / 6 \approx 0.14 ~or~ 14\%  \] <br>
{{</ answer >}}
<br>

{{< video "https://youtu.be/M49tlndZvxI?si=0H7yCO8IquopO2ud" >}}

<br><br>
```End of Section```