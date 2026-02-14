---
title: Naive Bayes Intro
description: Naive Bayes Intro
date: 2026-02-14
weight: 261
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxftG4rRbOU9q6nFrt-Taqi7" 
"Naive Bayes' | All Videos" >}}

<br>

{{< panel color="blue" title="Use Case" >}}
- Let's understand Naive Bayes through an Email/Text classification example.
- Number of words not fixed.
- Remove all stop words, such as, the, is , are, if, etc.
- Keep only relevant words, words.
- We want to do a binary classification - Spam/Not Spam.
{{< /panel >}}

{{< panel color="orange" title="Naive Bayes" >}}
- Simple, fast, and highly effective probabilistic machine learning classifier based on Bayes' theorem.
{{< /panel >}}

{{< panel color="green" title="Bayes' Theorem" >}}
- P(S|W) is the posterior probability: the probability of the email being spam, given the words inside it.
- P(W|S) is the likelihood: how likely is this email's word pattern if it were spam?
- P(S) is the prior probability: The ‘base rate' of spam. If our dataset has 10,000 emails and 2,000 are spam, then P(S)=0.2.
- P(W) is the prior probability of the predictor (evidence): total probability of seeing these words across all emails. 👉Since this is the same for both classes, we treat it as a constant and ignore it during comparison.
\[P(S|W)=\frac{P(W|S)×P(S)}{P(W)}\]
{{< /panel >}}

{{< panel color="red" title="Challenge 🤺" >}}
- Likelihood = P(W|S) =
- For computing the joint distribution of say d=1000 words, we need to learn from possible combinations.
- > the atoms in the observable 🔭 universe 🌌.
- We will never have enough training data to see every possible combination of words even once. Most combinations would have a count of zero.
{{< /panel >}}

{{< panel color="navy" title="Naive Assumption" >}}
- The ‘Naive' assumption is a Conditional Independence assumption, i.e, we assume each word appears independently of the others, given the class Spam/Not Spam.
- e.g. In a spam email, the likelihood of ‘Free' and ‘Money' 💵 appearing are treated as independent events, even though they usually appear together.
{{< /panel >}}

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/naive_bayes/naive_bayes_intro/slide_06_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Naive Bayes" >}}
- , similarly,
- Note: We compute the probabilities for Spam/Not Spam and assign the final label to email, depending upon which probability is higher.
\[P(S|W)=\frac{P(w_{1}|S)×P(w_{2}|S)×…P(w_{d}|S)×P(S)}{P(W)}\]
\[⟹P(y|W)∝\prod_{i=1}^{d}P(w_{i}|y)×P(y)\]
\[P(w_{i}|y)=\frac{count(w_{i}iny)}{total words in class y}\]
{{< /panel >}}

{{< panel color="green" title="Performance 🏇" >}}
- Space 🌌Complexity: O(d*c)
- Training Time ⏰ Complexity: O(n*d*c)
- Inference Time ⏰ Complexity: O(d*c)
- d = number of features/dimensions
- c = number of classes
- n = number of training examples
{{< /panel >}}

{{< video "https://youtu.be/dWb6CgZQPcg" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/naive_bayes/naive_bayes_issues" >}}">Next: Naive Bayes Issues</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```