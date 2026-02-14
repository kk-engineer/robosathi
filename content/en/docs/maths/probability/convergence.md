---
title: Convergence
description: Convergence of  Random Variables
date: 2025-10-17
weight: 12
math: true
---


{{< playlist "https://youtube.com/playlist?list=PLnpa6KP2ZQxde666MKUXEIGtQXHaJxpdj" 
        "Probability for AI & ML | Full Course Videos">}}
<br>

{{< definition title="Convergence in Probability" >}}
A sequence of random variables \(X_1, X_1, \dots, X_n\) is said to converge in probability 
to a known random variable \(X\), <br> 
if for every number \(\epsilon >0 \), the following is true:

\[
\lim_{n\rightarrow\infty} P(|X_n - X| > \epsilon) = 0, \forall \epsilon >0
\]
where, <br>
\(X_n\): is the estimator or sample based random variable.<br>
\(X\): is the known or limiting or target random variable. <br>
\(\epsilon\): is the tolerance level or margin of error. <br>
<br>

[Read more about Limits]({{<ref  "/docs/maths/calculus/calculus_fundamentals" >}})
{{< /definition >}}

For example: 
- Toss a fair coin: <br>
Estimator:
<br>
\[
X_n = \begin{cases}
\frac{n}{n+1} & \text{, if Head } \\
\\
\frac{1}{n} & \text{, if Tail} \\
\end{cases} 
\]
<br>
Known random variable (Bernoulli):
<br>
\[
X = \begin{cases}
1 & \text{, if Head } \\
\\
0 & \text{, if Tail} \\
\end{cases} 
\]

\[
X_n - X = \begin{cases}
\frac{n}{n+1} - 1 = \frac{-1}{n+1} & \text{, if Head } \\
\\
\frac{1}{n} - 0 = \frac{1}{n} & \text{, if Tail} \\
\end{cases} 
\]

\[
|X_n - X| = \begin{cases}
\frac{1}{n+1} & \text{, if Head } \\
\\
\frac{1}{n} & \text{, if Tail} \\
\end{cases} 
\]

Say, tolerance level \(\epsilon = 0.1\). <br>
Then,
\[
\lim_{n\rightarrow\infty} P(|X_n - X| > \epsilon) = ?
\]
If **n=5**; <br>
\[
|X_n - X| = \begin{cases}
\frac{1}{n+1} = \frac{1}{6} \approx 0.16 & \text{, if Head } \\
\\
\frac{1}{n} = \frac{1}{5} = 0.2 & \text{, if Tail} \\
\end{cases} 
\]
So, if n=5, then \(|X_n - X| > (\epsilon = 0.1)\). <br>
=> \(P(|X_n - X| \ge (\epsilon=0.1)) = 1\). <br>


if **n=20**; <br>
\[
|X_n - X| = \begin{cases}
\frac{1}{n+1} = \frac{1}{21} \approx 0.04 & \text{, if Head } \\
\\
\frac{1}{n} = \frac{1}{20} = 0.05 & \text{, if Tail} \\
\end{cases} 
\]
So, if n=20, then \(|X_n - X| < (\epsilon=0.1)\). <br>
=> \(P(|X_n - X| \ge (\epsilon=0.1)) = 0\). <br>
=> \(P(|X_n - X| \ge (\epsilon=0.1)) = 0 ~\forall ~n \ge 10\) <br>

Therefore, <br>
\[
\lim_{n\rightarrow\infty} P(|X_n - X| \ge (\epsilon=0.1)) = 0
\]

Similarly, we can prove that if \(\epsilon = 0.01\), then the probability will be equal to 0 for \( n\ge 100 \).<br>
\[
\lim_{n\rightarrow\infty} P(|X_n - X| \ge (\epsilon=0.01)) = 0
\]

*Note: Task is to check whether the sequence of randome variables \(X_1, X_2, \dots, X_n\) converges in probability 
to a known random variable \(X\) as \(n\rightarrow\infty\).*

So, we can conclude that, if \(n > \frac{1}{\epsilon}\), then: <br>
\[
\lim_{n\rightarrow\infty} P(|X_n - X| \ge \epsilon) = 0, \forall ~ \epsilon >0 \\[10pt]
\text{Converges in Probability } \\[10pt]
=> X_n \xrightarrow{Probability} X
\]
<br>

{{< definition title="Almost Sure Convergence" >}}
A sequence of random variables \(X_1, X_2, \dots, X_n\) is said to almost surely converge to a known random variable \(X\), <br> 
for \(n \ge 1\), if the following is true:

\[
P(\lim_{n\rightarrow\infty} X_n = X) = 1 \\[10pt]
\text{Almost Sure or With Probability = 1 } \\[10pt]
=> X_n \xrightarrow{Almost ~ Sure} X
\]
where, <br>
\(X_n\): is the estimator or sample based random variable.<br>
\(X\): is the known or limiting or target random variable. <br>

If, \(X_n \xrightarrow{Almost ~ Sure} X \), => \(X_n \xrightarrow{Probability} X \) <br>
But, converse is NOT true.

*Note: Almost Sure convergence is hardest to satisfy amongst all convergence, such as, convergence in probability, 
convergence in distribution, etc.
<br><br>
[Read more about Limits]({{<ref  "/docs/maths/calculus/calculus_fundamentals" >}})
{{< /definition >}}
For example:
- \(X\) is random variable such that \(X = \frac{1}{2} \), a constant, i.e \(X_1 = X_2 = \dots = X_n = \frac{1}{2}\). <br>
\(Y_1, Y_2,\dots ,Y_n \) are another sequence of random variables, such that : <br>
\[
Y_1 = X_1 \\[10pt]
Y_2 = \frac{X_1 + X_2}{2} \\[10pt]
Y_3 = \frac{X_1 + X_2 + X_3}{3} \\[10pt]
\dots \\
Y_n = \frac{1}{n} \sum_{i=1}^{n} X_i \xrightarrow{Almost ~ Sure} \frac{1}{2}
\]

{{< video "https://www.youtube.com/watch?v=ZIXMVF6t834&t=1s" >}}

<br><br>
<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/maths/probability/independent_identically_distributed" >}}">Previous: Independent & Identically Distributed</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/maths/probability/law_of_large_numbers" >}}">Next: Law of Large Numbers</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```