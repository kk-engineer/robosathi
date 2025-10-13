---
title: Probability Distribution
description: Probability Distribution of Random Variables
date: 2025-10-12
weight: 5
math: true
---

{{% pageinfo %}}
In this section, we will understand all the concepts related to Probability Distribution of a Random Variable.<br>
{{% /pageinfo %}}

{{< playlist "https://youtube.com/playlist?list=PLnpa6KP2ZQxcI3JyTIwOTKXY7ANhw__v1&si=MNoo5fxBo_10dLuM" >}}
{{< definition >}}
**Random Variable:** <br>
A random variable is a function that maps a the outcomes of a sample space to a real number.<br>
Random Variable X represent as, \(X: \Omega \to \mathbb{R} \) <br>
It maps abstract outcomes of a random experiment to concrete numerical values required for mathematical analysis.
{{< /definition >}}
<br>
For example:
1. Toss a coin 2 times, sample space: \(\Omega = \{HH,HT, TH, TT\}\) <br>
    The above random experiment of coin tosses can be mapped to a random variable \(X: \Omega \to \mathbb{R} \) <br>
    \(X: \Omega = \{HH,HT, TH, TT\} \to \mathbb{R}) \) <br>
    Say, if we count the number of heads, then  
    $$
    \begin{aligned}
    X(0) = \{TT\} = 1 \\
    X(1) = \{HT, TH\} = 2 \\
    X(2) = \{HH\} = 1 \\
    \end{aligned}
    $$
    Similar, output will be observed for number of tails.

*Depending upon the nature of output, random variables are of 2 types - **Discrete** and **Continuous**.*  

{{< definition >}}
**Discrete Random Variable:**  
A random variable whose possible outcomes are finite or countably infinite.  
Typically obtained by counting.  
Discrete random variable cannot take any value between 2 consecutive values.  
{{< /definition >}}
For example:  
1. The number of heads in 2 coin tosses can be 0, 1 or 2 but NOT 1.5.



