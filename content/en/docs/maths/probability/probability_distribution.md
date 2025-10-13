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

{{< definition >}}
**Continuous Random Variable:**  
A random variable that can take any value between a given range/interval.  
Possible outcomes are infinite.
{{< /definition >}}
For example:  
1. A person's height in a given range of say 150cm-200cm.  
    Height can take any value, not just round values, e.g: 150.1cm, 167.95cm, 180.123cm etc.

Now, that we have understood that how random variable can be used to map outcomes of abstract random experiment to real 
values for mathematical analysis, we will move on to the next topic.  
<br>

{{< question >}}
How to calculate the probability of a random variable?
{{< /question >}}

{{< answer >}}
Probability of a random variable is given by something called - _Cumulative Distribution Function (CDF)_. 
{{< /answer >}}

<br>

{{< definition >}}
**Cumulative Distribution Function:**   
It gives the probability of a random variable \(X\) will take for a value \(<=X\).
{{< /definition >}}
<br>






