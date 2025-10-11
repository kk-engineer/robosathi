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


{{< question >}}
Why do we need to understand what is **Probability** ?
{{</question >}}

{{< answer >}} 
Because the world around us is very uncertain, and **Probability** acts as - <br> the *fundamental language* 
to *understand*, *express* and *deal* with this *uncertainty*. 
{{</ answer >}}

For example:<br>
1. Toss a fair coin, \(P(H) = P(T) = 1/2\) <br>
2. Roll a die, \(P(1) = P(2) = P(3) = P(4) = P(5) = P(6) = 1/6\) <br>
3. Email classifier, \(P(spam) = 0.95 ,~ P(not ~ spam) = 0.05\)

{{< definition >}} 
**Probability:**<br> Numerical measure of chance or likelihood that an event will occur. 
{{</ definition >}}
Range: \([0,1]\) <br>
\(P(0)\): Highly unlikely <br>
\(P(1)\): Almost certain <br>

{{< definition >}} 
**Event:**<br> An outcome or a set of possible outcomes of an experiment. 
{{</ definition >}}
For example:<br>
1. Toss a fair coin, set of possible outcomes: \(\{H,T\}\) <br>
2. Roll a die, set of possible outcomes: \(\{1,2,3,4,5,6\}\) <br>
3. Roll a die, event \(A = \{1,2\} => P(A) = 2/6 = 1/3\) 
4. Email classifier, set of possible outcomes: \(\{spam,not ~spam\}\)

