---
title: Naive Bayes Issues
description: Naive Bayes Issues
date: 2026-02-14
weight: 262
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxftG4rRbOU9q6nFrt-Taqi7" 
"Naive Bayes' | All Videos" >}}

<br>

{{< panel color="cyan" title="Naive Bayes" >}}
⭐️Simple, fast, and highly effective probabilistic machine learning classifier based on **Bayes' theorem**.
\[P(y|W) \propto \prod_{i=1}^d P(w_i|y)\times P(y)\]
\[P(w_i|y) = \frac{count(w_i ~in~ y)}{\text{total words in class y}}\]
{{< /panel >}}

{{< panel color="red" title="Problem # 1" >}}
🦀What if at runtime we encounter a word that was never seen during training ?

e.g. A word ‘crypto' appears in the test email that was not present in training emails; P(‘crypto'|S) =0.

👉This will force the entire product to zero.
\[P(w_i|S) = \frac{\text{Total count of } w_i \text{ in all Spam emails}}{\text{Total count of all words in all Spam emails}}\]
{{< /panel >}}

{{< panel color="green" title="Laplace Smoothing" >}}
💡Add ‘**Laplace smoothing**' to all likelihoods, both during training and test time, so that the probability becomes **non-zero**.

\[P(x_{i}|y)=\frac{count(x_{i},y)+\alpha }{count(y)+\alpha \cdot |V|}\]
- \(count(x_{i},y)\) : number of times word appears in documents of class ‘y'.
- \(count(y)\): The total count of all words in documents of class ‘y'.
- \(|V|\)(or \(N_{features}\)):Vocabulary size or total number of unique possible words.

Let's understand this by the examples below:
\[P(w_{i}|S)=\frac{count(w_{i},S)+\alpha }{count(S)+\alpha \cdot |V|}\]

1. \(count(w_{i},S) = 0 \), \(count(S) = 100\), \(|V|\)(or \(N_{features}) =2, \alpha = 1\)
\[P(w_{i}|S)=\frac{ 0+1 }{100 +1 \cdot 2} = \frac{1}{102}\]
2. \(count(w_{i},S) = 0 \), \(count(S) = 100\), \(|V|\)(or \(N_{features}) =2, \alpha = 10,000\)
\[P(w_{i}|S)=\frac{ 0+10,000 }{100 +10,000 \cdot 2} = \frac{10,000}{20,100} \approx \frac{1}{2}\]

**Note**: High alpha value may lead to under-fitting; \(\alpha = 1\) recommended.
{{< /panel >}}

{{< panel color="red" title="Problem # 2" >}}
🦀What happens if the number of words ‘d' is very large ?

👉Multiplying 500 times will result in a number so small a computer 💻 cannot store it (**underflow**).

**Note**: Computers have a limit to store floating point numbers, e.g., 32 bit: \(1.175 x 10^{-38}\)
{{< /panel >}}

{{< panel color="green" title="Logarithm" >}}
💡Take 'Logarithm' that will convert the product to sum.
\[P(y|W) \propto \prod_{i=1}^d P(w_i|y)\times P(y)\]
\[\log(P(y| W)) \propto \sum_{i=1}^d \log(P(w_i|y)) + \log(P(y))\]

**Note**: In the next section we will solve a problem covering all the concepts discussed in this section.
{{< /panel >}}

{{< video "https://youtu.be/_lGBf0QoHls" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/naive_bayes/naive_bayes_intro" >}}">Previous: Naive Bayes Intro</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/naive_bayes/naive_bayes_example" >}}">Next: Naive Bayes Example</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```