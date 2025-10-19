---
title: Law of Large Numbers
description: Law of Large Numbers
date: 2025-10-17
weight: 13
math: true
---

{{% pageinfo %}}
In this section, we will understand Law of Large Numbers.<br>
- Weak Law of Large Numbers (WLLN)
- Strong Law of Large Numbers (SLLN)
{{% /pageinfo %}}

{{< playlist "https://youtube.com/playlist?list=PLnpa6KP2ZQxcI3JyTIwOTKXY7ANhw__v1&si=MNoo5fxBo_10dLuM" >}}
<br>

{{< definition >}}
**Weak Law of Large Numbers (WLLN):** <br>
This law states that given a sequence of independent and identically distributed (IID) samples \(X_1, X_1, \dots, X_n\)
from a random variable with finite mean, the sample mean (\(\bar{X_n}\)) **converges in probability** to 
the expected value \(E[X]\) or population mean (\( \mu \)).

\[
\lim_{n\rightarrow\infty} P(|\bar{X_n} - E[X]| \ge \epsilon) = 0, \forall ~ \epsilon >0 \\[10pt] \\[10pt]
\frac{1}{n} \sum_{i=1}^{n} X_i \xrightarrow{Probability} E[X], \text{ as } n \rightarrow \infty
\]
<br>

*Note: Does NOT guarantee that sample mean will be close to population mean, <br> 
but instead says that - the probability of sample mean being far away from the population mean is low.*

{{</ definition >}}
For example:
- Toss a coin large number of times \('n'\), as \(n \rightarrow \infty\), the proportion of heads will probably be very 
close to \(0.5\). <br>
However, it does NOT rule out the possibility of a rare sequence, e.g., getting 10 consecutive heads. <br>
But, the probability of such a rare event is extremely low. <br>

<br><br>

{{< definition >}}
**Strong Law of Large Numbers (SLLN):** <br>
This law states that given a sequence of independent and identically distributed (IID) samples \(X_1, X_1, \dots, X_n\)
from a random variable with finite mean, the sample mean (\(\bar{X_n}\)) **converges almost surely** to 
the expected value \(E[X]\) or population mean (\( \mu \)).

\[
P(\lim_{n\rightarrow\infty} \bar{X_n} = E[X]) = 1, \text{ as } n \rightarrow \infty \\[10pt]
\frac{1}{n} \sum_{i=1}^{n} X_i \xrightarrow{Almost ~ Sure} E[X], \text{ as } n \rightarrow \infty
\]
<br>

*Note:*
- It guarantees that the sequence of sample averages itself converges to population mean, with exception of set of 
outcomes that has probability = 0.
- Almost certain guarantee; Much stronger statement than Weak Law of Large Numbers.

{{</ definition >}}
For example:
- Toss a coin large number of times \('n'\), as \(n \rightarrow \infty\), the proportion of heads will converge 
to \(0.5\), with probability = 1. <br>
This means that a sequence where the proportion of heads never settles down to 0.5, is a probability = 0 event. <br>

**Application:**
- Almost sure convergence ensures ML model's reliability by guaranteeing that the average error on a large dataset will
converge to the true error. <br>
Thus, providing confidence that model will perform consistently and accurately on unseen data.
<br>

{{< video "https://www.youtube.com/watch?v=ZIXMVF6t834&t=1s" >}}

<br><br>

```End of Section```