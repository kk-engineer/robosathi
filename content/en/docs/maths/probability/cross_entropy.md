---
title: Cross Entropy & KL Divergence
description: Cross Entropy & KL Divergence
date: 2025-10-18
weight: 15
math: true
---

{{% pageinfo %}}
In this section, we will understand Entropy, Cross Entropy, KL Divergence & JS Divergence.<br>
All these topics come from the field of '_Information Theory_' and can be understood through the lens of <br>
'_Information_' or '_Surprise_'.
{{% /pageinfo %}}

{{< playlist "https://youtube.com/playlist?list=PLnpa6KP2ZQxcI3JyTIwOTKXY7ANhw__v1&si=MNoo5fxBo_10dLuM" >}}
<br>

{{< definition >}}
**Surprise Factor:** <br>
It is a measure of the amount of information gained when a specific, individual event occurs, and is defined based on 
the probability of that event. <br>
It is defined as the negative logarithm of the probability of the event. <br>
- It is also called '_Surprisal_'.

\[
S(x) = -log(P(x)))
\]

*Note: Logarithm(for base > 1) is a monotonically increasing function, so as x increases, log(x) also increases.*
- So, if probability P(x) increases, then surprise factor S(x) decreases.
- Common events have a high probability of occurrence, hence a low surprise factor.
- Rare events have a low probability of occurrence, hence a high surprise factor.

*Units*:
- The unit of surprise factor with log base 2 is **bits**. <br>
- with base 'e' or natural log its **nats** (natural units of information). <br>
{{</ definition >}}
<br><br>

{{< definition >}}
**Entropy:** <br>
It conveys how much 'information' we expect to gain from a random event. <br>
- Entropy is the average or expected value of surprise factor of a random variable.
- More uniform the distribution ⇒ greater average surprise factor, since all possible outcomes are equally likely.

\[
H(X) = E[-log(P(x)] = -\sum_{x \in X} P(x)log(P(x))
\]
{{</ definition >}}

{{< answer >}}
- _Case 1_: <br>
    Toss a _fair_ coin; \(P(H) = P(T) = 0.5 = 2^{-1}\) <br>
    Surprise factor (Heads or Tails) = \(-log(P(x)) =  -log_2(0.5) = -log_2(2^{-1}) = 1~bit\) <br>
    Entropy = \( \sum_{x \in X} P(x)log(-P(x))  = 0.5*1 + 0.5*1 = 1 ~bit \)
    
- _Case 2_:<br>
    Toss a _biased_ coin; \(P(H) = 0.9 P(T) = 0.1 \) <br>
    Surprise factor (Heads) = \(-log(P(x)) =  -log_2(0.9) \approx 0.15 ~bits \) <br>
    Surprise factor (Tails) = \(-log(P(x)) =  -log_2(0.1) \approx 3.32 ~bits\)<br>
    Entropy = \( \sum_{x \in X} P(x)log(-P(x)) = 0.9*0.15 + 0.1*3.32 \approx 0.47 ~bits\) <br>

Therefore, a biased coin is less surprising on an average than a fair coin, hence lower entropy.
{{</ answer >}}
<br><br>

{{< definition >}}
**Cross Entropy:** <br>
It is a measure of the average '_information gain_' or '_surprise_' when using an imperfect model (\Q\) to encode events 
from a true model \(P\). <br>
- It measures how surprised we are on an average, if the true distribution is \(P\), but we predict using another distribution 
\(Q\). <br>

\[
H(P,Q) = E[-log(Q(x)] = -\sum_{i=1}^n P(x_i)log(Q(x_i)) \\[10pt]
\text{ where true distribution of X} \sim P \text{ but the predictions are made using another distribution } Q
\]
{{</ definition >}}
{{< answer >}}
A model is trained to classify images as '_cat_' or '_dog_'. Say, for an input image the true label is '_cat_', 
so the true distribution: <br>
\(P = [1.0 ~(cat), 0.0 ~(dog)]\). <br>
Let's calculate the cross-entropy for the outputs of 2 models A & B. <br>
- _Model A_: <br>
\(Q_A = [0.8 ~(cat), 0.2 ~(dog)]\) <br>
Cross Entropy = \(H(P, Q_A) = -\sum_{i=1}^n P(x_i)log(Q_A(x_i)) \) <br>
\(= -[1*log_2(0.8) + 0*log_2(0.2)] \approx 0.32 ~bits\) <br>
*Note: This is very low cross-entropy, since the predicted value is very close to actual, i.e low surprise.* <br>

- _Model B_: <br>
\(Q_B = [0.2 ~(cat), 0.8 ~(dog)]\) <br>
Cross Entropy = \(H(P, Q_B) = -\sum_{i=1}^n P(x_i)log(Q_B(x_i)) \) <br>
\(= -[1*log_2(0.2) + 0*log_2(0.8)] \approx 2.32 ~bits\) <br>
*Note: Here the cross-entropy is very high, since the predicted value is quite far from the actual truth, i.e high surprise.* <br>
{{</ answer >}}
<br><br>

{{< definition >}}
**Kullback Leibler (KL) Divergence:** <br>
It measures the information lost when one probability distribution \(Q\) is used to approximate another distribution \(P\). <br>
It quantifies the '_extra cost_' in bits needed to encode data using the approximate distribution \(Q\) instead of 
the true distribution \(P\). <br>

**KL Divergence = Cross Entropy(P,Q) - Entropy(P)**
\[
\begin{aligned}
D_{KL}(P \parallel Q) &= H(P, Q) - H(P) \\
&= -\sum_{i=1}^n P(x_i)log(Q(x_i)) - [-\sum_{i=1}^n P(x_i)log(P(x_i))] \\[10pt]
&= \sum_{i=1}^n P(x_i)[log(P(x_i)) - log(Q(x_i)) ] \\[10pt]
D_{KL}(P \parallel Q) &= \sum_{i=1}^n P(x_i)log(\frac{P(x_i)}{Q(x_i)}) \\[10pt]
\text{ For continuous case: } \\
D_{KL}(P \parallel Q) &= \int_{-\infty}^{\infty} p(x)log(\frac{p(x)}{q(x)})dx
\end{aligned}
\]

*Note:*
- If \(P = Q\) ,i.e, P and Q are the same distributions, then KL Divergence = 0.
- KL divergence is NOT symmetrical ,i.e, \(D_{KL}(P \parallel Q) ⍯ (D_{KL}(Q \parallel P)\).
{{</ definition >}}

{{< answer >}}
Using the same cat, dog classification problem example as mentioned above. <br>
A model is trained to classify images as '_cat_' or '_dog_'. Say, for an input image the true label is '_cat_', 
so the true distribution: <br>
\(P = [1.0 ~(cat), 0.0 ~(dog)]\). <br>
Let's calculate the KL divergence for the outputs of the 2 models A & B. <br>
Let's calculate entropy first, and we can reuse the cross-entropy values calculated above already. <br>
Entropy: \(H(P) = -\sum_{x \in X} P(x)log(P(x)) = -[1*log_2(1) + 0*log_2(0)] = 0 ~bits\) <br>
*Note: \(0*log_2(0) = 0\), is an approximation hack, since \(log(0)\) is undefined.* <br>

- _Model A_: <br>
\( D_{KL}(P \parallel Q) = H(P, Q) - H(P) = 0.32 - 0 = 0.32 ~bits \) <br>
Model A incurs an additional 0.32 bits of surprise due to its imperfect prediction. <br> 

- _Model B_: <br>
\( D_{KL}(P \parallel Q) = H(P, Q) - H(P) = 2.32 - 0 = 2.32 ~bits \) <br>
Model B has much more '_information loss_' or incurs higher '_penalty_' of 2.32 bits as its prediction was from from the truth. <br>
{{</ answer >}}
<br><br>

{{< definition >}}
**Jensen-Shannon Divergence:** <br>
It is a smoothed and symmetric version of the Kullback-Leibler (KL) divergence and is calculated by averaging the <br>
KL divergences between each of the two distributions and their combined average distribution. <br>
- Symmetrical and smoothed version of KL divergence.
- Always finite; KL divergence can be infinite if \( P ⍯ 0 ~and~ Q = 0 \).
  - Makes JS divergence more stable for ML models where some predicted probabilities may be exactly 0. 

\[
D_{JS}(P \parallel Q) = \frac{1}{2}[D_{KL}(P \parallel M) + D_{KL}(Q \parallel M)] \\
\text{ where: } M = \frac{P + Q}{2}
\]

{{</ definition >}}

{{< answer >}}
Let's continue the cat and dog image classification example discussed above.<br>
A model is trained to classify images as '_cat_' or '_dog_'. Say, for an input image the true label is '_cat_', 
so the true distribution: <br>
\(P = [1.0 ~(cat), 0.0 ~(dog)]\). <br><br>
**Step 1**: Calculate the average distribution M.<br>
\[
M = \frac{P + Q}{2} = \frac{1}{2} [[1.0, 0.0] + [0.8, 0.2]] \\[10pt]
=> M = [0.9, 0.1]
\]

**Step 2**: Calculate \(D_{KL}(P \parallel M)\).<br>
\[
\begin{aligned}
D_{KL}(P \parallel M) &= \sum_{i=1}^n P(x_i)log_2(\frac{P(x_i)}{M(x_i)}) \\[10pt]
&= 1*log_2(\frac{1}{0.9}) + 0*log_2(\frac{0}{0.1}) \\[10pt]
& = log_2(1.111) + 0 \\[10pt]
=> D_{KL}(P \parallel M) &\approx 0.152 ~bits \\[10pt]
\end{aligned}
\]

**Step 3**: Calculate \(D_{KL}(Q \parallel M)\).<br>

\[
\begin{aligned}
D_{KL}(Q \parallel M) &= \sum_{i=1}^n Q(x_i)log_2(\frac{Q(x_i)}{M(x_i)}) \\[10pt]
&= 0.8*log_2(\frac{0.8}{0.9}) + 0.2*log_2(\frac{0.2}{0.1}) \\[10pt]
&= 0.8*log_2(0.888) + 0.2*log_2(2) \\[10pt]
&= 0.8*(-0.17) + 0.2*1 \\[10pt]
&= -0.136 + 0.2 \\[10pt]
=> D_{KL}(Q \parallel M) &\approx 0.064 ~bits \\[10pt]
\end{aligned}
\]

**Step 4**: Finally, lets put all together to calculate \(D_{JS}(P \parallel Q)\).<br>

\[
\begin{aligned}
D_{JS}(P \parallel Q) &= \frac{1}{2}[D_{KL}(P \parallel M) + D_{KL}(Q \parallel M)] \\[10pt]
&= \frac{1}{2}[0.152 + 0.064] \\[10pt]
&= \frac{1}{2}*0.216 \\[10pt]
=> D_{JS}(P \parallel Q) &= 0.108 ~ bits \\[10pt]
\end{aligned}
\]

Therefore, lower JS divergence value => P and Q are more similar. <br>
{{</ answer >}}

<br><br>
```End of Section```