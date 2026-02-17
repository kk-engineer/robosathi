---
title: Independence of Events
description: Independence of Events
date: 2025-10-12
weight: 4
math: true
---

{{< playlist "https://youtube.com/playlist?list=PLnpa6KP2ZQxde666MKUXEIGtQXHaJxpdj" 
        "Probability for AI & ML | Full Course Videos">}}
<br>

{{< definition title="Independence of Events" >}}
Two events are independent if the occurrence of one event does not affect the probability of the other event.<br>
There are 3 types of independence of events: <br>
- Mutual Independence
- Pair-Wise Independence
- Conditional Independence
{{< /definition >}}

{{< definition title="Mutual Independence" >}}
Joint probability of two events is equal to the product of the individual probabilities of the two events.<br>
\(P(A \cap B) = P(A)*P(B)\)

*Joint probability*: The probability of two or more events occurring simultaneously.<br>
\(P(A \cap B)\) or \(P(A, B)\)
{{< /definition >}}

{{< panel color="rust" title="Example" >}}
1. Toss a coin and roll a die - <br>
    \(A\) = Get a heads; \(P(A)=1/2\) <br>
    \(B\) = Get an odd number; \(P(B)=1/2\)

\[
\begin{aligned}
P(A \cap B) &= P(\text{Heads and Odd}) \\
&= \frac{1}{2} * \frac{1}{2} \\
&= \frac{1}{4} \\
\\
\text{also } P(A) * P(B) &= \frac{1}{2} * \frac{1}{2} \\
&= \frac{1}{4}
\end{aligned}
\]

=> A and B are mutually independent. <br>
{{< /panel >}}

{{< definition title="Pair-Wise Independence" >}}
Every pair of events in the set is independent.<br>
_Pair-wise independence != Mutual independence._
{{< /definition >}}

{{< panel color="rust" title="Example" >}}
1. Toss 3 coins; <br>
    For 2 tosses, sample space: \(\Omega = \{HH,HT, TH, TT\}\) <br>
    \(A\) = First and Second toss outcomes are same i.e \(\{HH, TT\}\); \(P(A)= 2/4 = 1/2\) <br>
    \(B\) = Second and Third toss outcomes are same i.e \(\{HH, TT\}\); \(P(B)= 2/4 = 1/2\) <br>
    \(C\) = Third and First toss outcomes are same i.e \(\{HH, TT\}\); \(P(C)= 2/4 = 1/2\) <br>

Now, pair-wise independence of the above events A & B is - \(P(A \cap B)\) <br>
\(P(A \cap B)\) => Outcomes of first and second toss are same & <br> 
outcomes of second and third toss are same. <br>
=> Outcomes of all the three tosses are same. <br><br>
Total number of outcomes = 8 <br>
Desired outcomes = \(\{HHH, TTT\}\) = 2 <br>
=> \(P(A \cap B) = 2/8 = 1/4 = P(A) * P(B) = 1/2 * 1/2 = 1/4\) <br>

Therefore, \(A\) and \(B\) are pair-wise independent. <br>
Similarly, we can also prove that \(A\) and \(C\) and \(B\) and \(C\) are also pair-wise independent.
<br>

Now, let's check for **mutual independence** of the above events A, B & C. <br>
\(P(A \cap B \cap C) = P(A)*P(B)*P(C)\) <br>
\(P(A \cap B \cap C)\) = Outcomes of all the three tosses are same i.e \(\{HHH, TTT\}\) <br>
Total number of outcomes = 8 <br>
Desired outcomes = \(\{HHH, TTT\}\) = 2 <br>
So, \(P(A \cap B \cap C)\) = 2/8 = 1/4 <br>
But, \(P(A)*P(B)*P(C) = 1/2*1/2*1/2 = 1/8\) <br>
Therefore \(P(A \cap B \cap C)\) ≠ \(P(A)*P(B)*P(C)\) <br>
=> \(A, B, C\) are **NOT** mutually independent but only **pair wise independent**. <br>
{{< /panel >}}

{{< definition title="Conditional Independence" >}}
Two events A & B are conditionally independent given a third event C, <br>
if they are independent given that C has occurred. <br>
Occurrence of C changes the context, causing the events A & B to become independent of each other.
{{< /definition >}}

{{< panel color="rust" title="Example" >}}
{{< imgproc "images/maths/probability/conditional_independence.png" Resize "800x" >}}{{< /imgproc >}}

\[
\begin{aligned}
A = 10 ,~ B = 10  ,~ C = 20  ~and~  \Omega = 50 \\
P(A) = 10/50 = 1/5 \\
P(B) = 10/50 = 1/5 \\
P(A) * P(B) = 1/5*1/5 =1/25 \\
P(A \cap B) = 3/50 \\
\text{clearly, } P(A \cap B) ~⍯ ~P(A) * P(B) \\
\end{aligned}
\]
=> _A & B are **NOT** independent._<br>
Now, let's check for _conditional independence_ of A & B given C. <br>

\[
\begin{aligned}
P(A \mid C) &= \frac{P(A \cap C)}{P(C)} = 4/20 = 1/5 \\
P(B \mid C) &= \frac{P(B \cap C)}{P(C)} = 5/20 = 1/4 \\
P(A \mid C) * P(B \mid C) &= 1/5 * 1/4 = 1/20  \\
P(A \cap B \mid C) &= \frac{P(A \cap B \cap C)}{P(C)} = 1/20 \\
\text{clearly, } P(A \cap B \mid C) &= P(A \mid C)*P(B \mid C) \\
\end{aligned}
\]

_Therefore, A & B are **conditionally independent** given C._
{{< /panel >}}

{{< video "https://youtu.be/Rhvj1e1Q84Q?si=999FWQPg6kLnP4rE&t=1" >}}
<br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/maths/probability/conditional_probability" >}}">Previous: Conditional Probability</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/maths/probability/cumulative_distribution_function" >}}">Next: Cumulative Distribution Function</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```

