---
title: Log Odds
description: Log Odds
date: 2026-02-13
weight: 224
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxdNo7m8fKMx-pseLizEoU6Z" 
"Logistic Regression | All Videos" >}}

<br>

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/logistic_regression/log_odds/slide_01_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="What is the meaning of Odds ?" >}}
- Odds compare the likelihood of an event happening vs. not happening.
- Odds =
- = probability of success
{{< /panel >}}

{{< panel color="green" title="Log Odds (Logit) Assumption" >}}
- In logistic regression we assume that Log-Odds (the log of the ratio of positive class to negative class) is a linear function of inputs.
- Log-Odds (Logit) = log
{{< /panel >}}

{{< panel color="red" title="Log Odds (Logit)" >}}
- Log Odds = log
\[z=w^{T}x+w_{0}\]
\[log_{e}(\frac{p}{1-p})=z \\ ⟹\frac{p}{1-p}=e^{z}\]
{{< /panel >}}

{{< panel color="navy" title="Log Odds (Logit) (Continued)" >}}
- Log Odds (Logit) (Continued)
\[\frac{p}{1-p}=e^{z} \\ ⟹p=e^{z}-p.e^{z} \\ ⟹p=\frac{e^{z}}{1+e^{z}} \\ divide numerator and denominator bye^{z} \\ ⟹p=\frac{1}{1+e^{-z}}Sigmoid function\]
{{< /panel >}}

{{< panel color="blue" title="Sigmoid Function" >}}
- Sigmoid function is the inverse of
- log-odds (logit) function, it converts the log-odds back to probability,
- and vice-versa.
{{< /panel >}}

{{< panel color="orange" title="Range of Values 🏔️" >}}
- Probability: 0 to 1
- Odds: 0 to +
- Log Odds: - to +
{{< /panel >}}

{{< video "https://youtu.be/UDAhIFDxK1g" >}}
<br><br>
```End of Section```