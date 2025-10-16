---
title: Joint & Marginal
description: Joint, Marginal & Conditional Probability
date: 2025-10-16
weight: 10
math: true
---

{{% pageinfo %}}
In this section, we will understand Joint, Marginal & Conditional Probability.<br>
So far, we have dealt with a single random variable.<br>
Now, let's explore the probability distributions of 2 or more random variables occurring together.<br>
{{% /pageinfo %}}

{{< playlist "https://youtube.com/playlist?list=PLnpa6KP2ZQxcI3JyTIwOTKXY7ANhw__v1&si=MNoo5fxBo_10dLuM" >}}
<br>

{{< definition >}}
**Joint Probability Distribution:** <br>
It describes the probability of 2 or more random variables occurring simultaneously. <br>
- The random variables can be from different distributions, such as, discrete and continuous. <br>

**Joint CDF:** <br>
\[
F_{X,Y}(a,b) = P(X \le a, Y \le b),~ -\infty < a, b < \infty
\]
**Discrete Case:** <br>
\[
F_{X,Y}(a,b) = P(X \le a, Y \le b) = \sum_{x_i \le a} \sum_{y_j \le b} P(X = x_i, Y = y_j)
\]
**Continuous Case:** <br>
\[
F_{X,Y}(a,b) = P(X \le a, Y \le b) = \int_{-\infty}^{a} \int_{-\infty}^{b} f_{X,Y}(x,y) dy dx
\]

**Joint PMF:** <br>
\[
P_{X,Y}(x,y) = P(X = x, Y = y)
\]
*Key Properties:*
1. \(P(X = x, Y = y) \ge 0 ~ \forall (x,y) \)
2. \( \sum_{i} \sum_{j} P(X = x_i, Y = y_j) = 1 \)

**Joint PDF:** <br>
\[
f_{X,Y}(x,y) = \frac{\partial^2 F_{X,Y}(x,y)}{\partial x \partial y} \\
f_{X,Y}(x,y) = \iint_{A \in \mathbb{R}^2} f_{X,Y}(x,y) dy dx
\]

*Key Properties:*
1. \(f_{X,Y}(x,y) \ge 0 ~ \forall (x,y) \)
2. \( \int_{-\infty}^{\infty} \int_{-\infty}^{\infty} f_{X,Y}(x,y) dy dx = 1 \)
<br>
{{</ definition >}}
For example:
- If we consider 2 random variables, say, height(X) and weight(Y), then the joint distribution will tell us 
the probability of finding a person having a particular height and weight.


<br><br>
```End of Section```