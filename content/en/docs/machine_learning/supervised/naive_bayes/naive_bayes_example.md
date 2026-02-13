---
title: Naive Bayes Example
description: Naive Bayes Example
date: 2026-02-13
weight: 263
math: true
---

{{< panel color="blue" title="Naive Bayes" >}}
- Simple, fast, and highly effective probabilistic machine learning classifier based on Bayes' theorem.
\[log(P(y|W))∝\sum_{i=1}^{d}log(P(w_{i}|y))+log(P(y))\]
\[P(w_{i}|y)=\frac{count(w_{i},y)+\alpha}{count(y)+\alpha⋅|V|}\]
{{< /panel >}}

{{< panel color="orange" title="Email Classification" >}}
- Email Classification
{{< /panel >}}

{{< panel color="green" title="Training Phase" >}}
- 🏛️Class Priors:
- P(Spam) = 2/4 =0.5
- P(Not Spam) = 2/4 = 0.5
- 📕 Vocabulary = { Free, Money, Inside, Scan, Win, Cash, Click, Link, Catch, Up Today, Noon, Project, Meeting }
- |V| = Total unique word count = 14
- 🧮 Class count:
- count(Spam) = 9
- count(Not Spam) = 7
- ✅ Laplace smoothing: = 1
{{< /panel >}}

{{< panel color="red" title="Likelihood of ‘free'" >}}
- P(‘free'| Spam) =
- P(‘free'| Not Spam) =
\[P(w_{i}|y)=\frac{count(w_{i},y)+\alpha}{count(y)+\alpha⋅|V|}\]
{{< /panel >}}

{{< panel color="navy" title="Inference Time" >}}
- Say a new email 📧 arrives - "Free money today"; lets classify.
- P(‘free'| Spam) =
- P(‘money'| Spam) =
- P(‘today'| Spam) =
- P(‘free'| Not Spam) =
- P(‘money'| Not Spam) =
- P(‘today'| Not Spam) =
{{< /panel >}}

{{< panel color="blue" title="Final Score 🏏" >}}
- Score(Spam) = log(P(Spam)) + log(P(‘free'|S)) + log(P(‘money'|S)) + log(P(‘today'|S)) = log(0.5) + log(0.13) + log(0.087) + log(0.043) = -0.301 -0.886 -1.06 -1.366 = -3.614
- Score(Not Spam) = log(P(Not Spam)) + log(P(‘free'|NS)) + log(P(‘money'|NS)) + log(P(‘today'|NS)) = log(0.5) + log(0.047) + log(0.047) + log(0.095) = -0.301 -1.328 -1.328 -1.022 = -3.979
- Since, Score(Spam) (-3.614 )> Score(Not Spam) (-3.979) , the model chooses ‘Spam'.
\[log(P(y|W))∝\sum_{i=1}^{d}log(P(w_{i}|y))+log(P(y))\]
{{< /panel >}}

{{< video "https://youtu.be/ft8eH_laPd4" >}}
<br><br>
```End of Section```