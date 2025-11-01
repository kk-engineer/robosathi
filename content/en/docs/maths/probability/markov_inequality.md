---
title: Markov's Inequality
description: Markov's, Chebyshev's Inequality & Chernoff Bound
date: 2025-10-17
weight: 14
math: true
---

{{% pageinfo %}}
In this section, we will understand Markov's, Chebyshev's Inequality & Chernoff Bound.<br>
{{% /pageinfo %}}

{{< playlist "https://youtube.com/playlist?list=PLnpa6KP2ZQxde666MKUXEIGtQXHaJxpdj" 
        "Probability for AI & ML | Full Course Videos" >}}
<br>

{{< definition >}}
**Markov's Inequality:** <br>
It gives an upper bound for the probability that a non-negative random variable will NOT exceed, based on its expected value. <br>

\[
P(X \ge a) \le \frac{E[X]}{a}
\]

*Note: It gives a very loose upper bound.*
<br><br>
[Read more about Expectation]({{<ref  "/docs/maths/probability/expectation" >}})
{{</ definition >}}
<br>

{{< question >}}
A restaurant, on an average, expects to serve 50 customers per hour. <br>
What is the probability that the restaurant will serve more than 200 customers in the next hour?
{{</ question >}}

{{< answer >}}
\[
P(X \ge 200) \le \frac{E[X]}{200} = \frac{50}{200} = 0.25
\]
Hence, a 25% chance of serving more than 200 customers.
{{</ answer >}}
<br>

{{< question >}}
Consider a test where the average score is 70/100 marks. <br>
What is the probability that a randomly selected student gets a score of 90 marks or more?
{{</ question >}}

{{< answer >}}
\[
P(X \ge a) \le \frac{E[X]}{a} \\[10pt]
P(X \ge 90) \le \frac{70}{90} \approx 0.78
\]
Hence, there is a 78% chance that a randomly selected student gets a score of 90 marks or more.
{{</ answer >}}
<br><br>

{{< definition >}}
**Chebyshev's Inequality:** <br>
It states that the probability of a random variable deviating from its mean is small if its variance is small. <br>
- It is a more powerful version of Markov's Inequality. <br>
- It uses variance of the distribution in addition to the expected value or mean. <br>
- Also, it does NOT assume the random variable to be non-negative. <br>
- _It uses more information about the data i.e mean and variance_. <br>

\[
P(|X - E[X]| \ge k) \le \frac{E[(X - E[X])^2]}{k^2} \text{ ; k > 0 } \\[10pt]
\text{ We know that: } Var[X] = E[(X - E[X])^2] \\[10pt]
=> P(\big|X - E[X]\big| \ge k) \le \frac{Var[X]}{k^2}
\]

*Note: It gives a tighter upper bound than Markov's Inequality.*
{{</ definition >}}
<br>

{{< question >}}
Consider a test where the average score is 70/100 marks. <br>
What is the probability that a randomly selected student gets a score of 90 marks or more? <br>
Given the standard deviation of the test score is 10 marks.
{{</ question >}}

{{< answer >}}
Given, the standard deviation of the test score \(\sigma\) = 10 marks. <br>
=> Variance = \(\sigma^2\) = 100 <br>

\[
P(\big|X - E[X]\big| \ge k) \le \frac{Var[X]}{k^2} \\[10pt]
E[X] = 70, Var[X] = 100 \\[10pt]
P(X \ge 90) \le P(\big|X - 70\big| \ge 20) \\[10pt]
P(\big|X - 70\big| \ge 20) \le \frac{100}{20^2} = \frac{1}{4} = 0.25 
\]
Hence, Chebyshev's Inequality gives a far tighter upper bound of 25% than Markov's Inequality of 78%(approx).
{{</ answer >}}
<br><br>

{{< definition >}}
**Chernoff Bound:** <br>
It is an upper bound on the probability that a random variable deviates from its expected value. <br>
It's an exponentially decreasing bound on the "tail" of a random variable's distribution, 
which can be calculated using its moment generating function. <br>
- It is used for sum or average of independent random variables (not necessarily identically distributed).
- It provides exponentially tighter bounds, better than Chebyshev's Inequality's quadratic decay.
- It uses all moments to capture the full shape of the distribution, using the moment generating function(MGF).

\[
P(X \ge c) \le e^{-tc}E[e^{tX}] , \forall t>0\\[10pt]
\text{ where } E[e^{tX}] \text{ is the Moment Generating Function of } X
\]
<br>
**Proof:** <br>
\[
P(X \ge c) = P(e^{tX} \ge e^{tc}), \text{ provided } t>0 \\[10pt]
\text{ using Markov's Inequality: } \\[10pt]
P(e^{tX} \ge e^{tc}) \le \frac{E[e^{tX}]}{e^{tc}} =e^{-tc}E[e^{tX}] \\[10pt]
\]
<br>
For the sum of 'n' independent random variables,
\[
P(S_n \ge c) \le e^{-tc}(M_x(t))^n \\[10pt]
\text{ where } M_x(t) \text{ is the Moment Generating Function of } X \\[10pt]
\]
*Note: Used to compute how far the sum of independent random variables deviate from their expected value.*
<br><br>
[Read more about Moment Generating Function]({{<ref  "/docs/maths/probability/moment_generating_function" >}})
{{</ definition >}}

{{< video "https://youtu.be/m9Aqmnt89Tg?si=jYJREpH4arHA_m2h&t=1" >}}

<br><br>
```End of Section```