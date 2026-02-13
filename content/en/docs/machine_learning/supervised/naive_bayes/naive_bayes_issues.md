---
title: Naive Bayes Issues
description: Naive Bayes Issues
date: 2026-02-13
weight: 262
math: true
---

{{< panel color="blue" title="Naive Bayes" >}}
- Simple, fast, and highly effective probabilistic machine learning classifier based on Bayes' theorem.
\[P(y|W)∝\prod_{i=1}^{d}P(w_{i}|y)×P(y)\]
\[P(w_{i}|y)=\frac{count(w_{i}iny)}{total words in class y}\]
{{< /panel >}}

{{< panel color="orange" title="Problem # 1" >}}
- What if at runtime we encounter a word that was never seen during training ?
- e.g. A word ‘crypto' appears in the test email that was not present in training emails; P(‘crypto'|S) =0.
- This will force the entire product to zero.
\[P(w_{i}|S)=\frac{Total count ofw_{i}in all Spam emails}{Total count of all words in all Spam emails}\]
{{< /panel >}}

{{< panel color="green" title="Solution" >}}
- Add ‘Laplace smoothing' to all likelihoods, both during training and test time.
- : number of times word appears in documents of class ‘y'.
- : The total count of all words in documents of class ‘y'.
- (or ):Vocabulary size or total number of unique possible words.
\[P(x_{i}|y)=\frac{count(x_{i},y)+\alpha}{count(y)+\alpha⋅|V|}\]
{{< /panel >}}

{{< panel color="red" title="Example" >}}
- = 0, = 100, (or )= 2, = 1
- = 0, = 100, (or )= 2, = 10,000
- Note: High alpha value may lead to under-fitting. = 1 (recommended)
\[P(w_{i}|S)=\frac{count(w_{i},S)+\alpha}{count(S)+\alpha⋅|V|}\]
{{< /panel >}}

{{< panel color="navy" title="Problem # 2" >}}
- What happens if the number of words ‘d' is very large ?
- Multiplying 500 times will result in a number so small a computer 💻 cannot store it (underflow).
- Note: Computers have a limit to store floating point numbers, e.g., 32 bit: 1.175 x 10
{{< /panel >}}

{{< panel color="blue" title="Solution" >}}
- Take ‘Logarithm' that will convert the product to sum.
\[P(y|W)∝\prod_{i=1}^{d}P(w_{i}|y)×P(y)\]
\[log(P(y|W))∝\sum_{i=1}^{d}log(P(w_{i}|y))+log(P(y))\]
{{< /panel >}}

{{< video "https://youtu.be/_lGBf0QoHls" >}}
<br><br>
```End of Section```