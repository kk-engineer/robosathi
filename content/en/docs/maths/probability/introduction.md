---
title: Introduction
description: Introduction to Probability
weight: 2
math: true
---

{{% pageinfo %}}

This section will introduce you to basic terminologies and definitions used in probability for AI & ML.<br>
[Probability Videos Playlist](https://youtube.com/playlist?list=PLnpa6KP2ZQxcI3JyTIwOTKXY7ANhw__v1&si=MNoo5fxBo_10dLuM)

{{% /pageinfo %}}


{{< alert >}} {{% color "green" %}} **Question: Why do we need to understand what is Probability ?** {{% /color %}}{{< /alert >}}
{{< alert >}} {{% color "purple" %}} Because the world around us is very uncertain, and "Probability" acts as - <br> the fundamental language to understand, express and deal with this uncertainty. {{% /color %}}{{< /alert >}}

For example:<br>
1. Toss a fair coin, \(P(H) = P(T) = 1/2\) <br>
2. Throw a dice, \(P(1) = P(2) = P(3) = P(4) = P(5) = P(6) = 1/6\) <br>
3. Email classifier, \(P(spam) = 0.95 ,~ P(not ~ spam) = 0.05\)

{{< alert >}} {{% color "blue" %}} **Probability**:<br> Numerical measure of chance or likelihood that an event will occur. {{% /color %}}{{< /alert >}}
Range: \([0,1]\) <br>
\(P(0)\): Highly unlikely <br>
\(P(1)\): Almost certain <br>

{{< alert >}} {{% color "blue" %}} **Event**:<br> An outcome or a set of possible outcomes of an experiment. {{% /color %}}{{< /alert >}}
Range: \([0,1]\) <br>
For example:<br>
1. Toss a fair coin, set of possible outcomes: \(\{H,T\}\) <br>
2. Throw a dice, set of possible outcomes: \(\{1,2,3,4,5,6\}\) <br>
3. Email classifier, set of possible outcomes: \(\{spam,not ~spam\}\)