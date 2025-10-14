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
**Probability Mass Function:** <br>
It gives the exact value of a probability for a discrete random variable at a specific value \(x\).<br>
It assigns a "non-zero" mass or probability to a specific countable outcome.<br>
*Note: Called **'mass'** because probability is concentrated at a single discrete point.* <br>
\(PMF = P(X=x)\) <br>
Commonly visualised as a bar chart. <br><br>
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

<br><br>

```End of Section```