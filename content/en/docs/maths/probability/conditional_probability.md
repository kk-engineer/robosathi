---
title: Conditional Probability
description: Conditional Probability & Bayes Theorem
date: 2025-10-12
weight: 3
math: true
---

{{% pageinfo %}}
In this section, we will understand all the concepts related to Conditional Probability and Bayes' Theorem.<br>
{{% /pageinfo %}}

{{< playlist "https://youtube.com/playlist?list=PLnpa6KP2ZQxcI3JyTIwOTKXY7ANhw__v1&si=MNoo5fxBo_10dLuM" >}}
<br>

{{< definition >}}
**Conditional Probability**: <br>
It is the probability of an event occurring, given that another event has already occurred.<br>
Allows us to update probability when additional information is revealed.
{{< /definition >}}
<br>
\[P(A \mid B) = \frac{P(A \cap B)}{P(B)}\]

{{< definition >}}
**Chain Rule**: <br>
\(P(A \cap B) = P(B)*P(A \mid B)\) or <br>
\(P(A \cap B) = P(A)*P(B \mid A)\)
{{< /definition >}}

For example:
1. Roll a die, sample space: \(\Omega = \{1,2,3,4,5,6\}\) <br>
    Event A = Get a 5 = \(\{5\} => P(A) = 1/6\)<br>
    Event B = Get an odd number = \(\{1, 3, 5\} => P(B) = 3/6 = 1/2\)

$$
\begin{aligned}
\because (A \cap B) = \{5\} ~  => P(A \cap B) = 1/6 \\
P(A \mid B) &= \frac{P(A \cap B)}{P(B)} \\
&= \frac{1/6}{1/2} \\
&= 1/3
\end{aligned}
$$

{{< video "https://youtu.be/pIJ2EX2uwDI?si=QIYVlZf_gpS2FwRd" >}}
<br>

{{< definition >}}
**Bayes' Theorem**: <br>
It is a formula that uses conditional probability. <br>
It allows us to update our belief about an event's probability based on new evidence.
{{< /definition >}}

We know from conditional probability and chain rule that:
$$
\begin{aligned}
P(A \cap B) = P(B)*P(A \mid B) \\
P(A \cap B) = P(A)*P(B \mid A) \\
P(A \mid B) = \frac{P(A \cap B)}{P(B)}
\end{aligned}
$$

Combining all the above equations gives us the **Bayes' Theorem**:
$$
\begin{aligned}
P(A \mid B) = \frac{P(A)*P(B \mid A)}{P(B)}
\end{aligned}
$$

![](https://robosathi.com/images/bayes_theorem.png)

For example:
1. Roll a die, sample space: \(\Omega = \{1,2,3,4,5,6\}\) <br>
    Event A = Get a 5 = \(\{5\} => P(A) = 1/6\)<br>
    Event B = Get an odd number = \(\{1, 3, 5\} => P(B) = 3/6 = 1/2\)<br>
*Task*: Find the probability of getting a 5 given that you rolled an odd number.<br>

\(P(B \mid A) = 1\) = Probability of getting an odd number given that we have rolled a 5. <br>

$$
\begin{aligned}
P(A \mid B) &= \frac{P(A) * P(B \mid A)}{P(B)} \\
&= \frac{1/6 * 1}{1/2} \\
&= 1/3
\end{aligned}
$$

    