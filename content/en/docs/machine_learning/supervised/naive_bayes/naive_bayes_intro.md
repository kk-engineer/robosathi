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

{{< panel color="orange" title="Naive Bayes" >}}
📘Simple, fast, and highly effective probabilistic machine learning classifier based on Bayes' theorem.
{{< /panel >}}

{{< panel color="cyan" title="Use Case" >}}
📌Let's understand Naive Bayes through an **Email/Text classification** example.
- Number of words in an email is not fixed.
- Remove all stop words, such as, the, is , are, if, etc.
- Keep only relevant words, i.e, \(w_1, w_2, \dots , w_d\) words.
- We want to do a binary classification - **Spam/Not Spam**.
{{< /panel >}}

{{< panel color="green" title="Bayes' Theorem" >}}
Let's revise Bayes' theorem first: <br>
\[P(S|W)=\frac{P(W|S)\times P(S)}{P(W)}\]

- \(P(S|W)\) is the **posterior probability**: the probability of the email being spam, given the words inside it.
- \(P(W|S)\) is the **likelihood**: how likely is this email's word pattern if it were spam?
- \(P(S)\) is the **prior probability**: The ‘base rate' of spam. 
  - If our dataset has 10,000 emails and 2,000 are spam, then \(P(S)\)=0.2.
- \(P(W)\) is the prior probability of the predictor (**evidence**): total probability of seeing these words across all emails. 
  - 👉Since this is the same for both classes, we treat it as a constant and ignore it during comparison.

{{< /panel >}}

{{< panel color="red" title="Challenge 🤺" >}}
👉Likelihood = \(P(W|S)\) = \(P(w_1, w_2, \dots w_d | S)\)

➡️ For computing the joint distribution of say d=1000 words, we need to learn from possible \(2^{1000}\) combinations.
- \(2^{1000}\) > the atoms in the observable 🔭 universe 🌌.
- We will never have enough training data to see every possible combination of words even once. 
  - Most combinations would have a count of zero.

🦉So, how do we solve this ?
{{< /panel >}}

{{< panel color="blue" title="Naive Assumption" >}}
💡The ‘Naive' assumption is a '**Conditional Independence**' assumption, i.e, we assume each word appears **independently** of the others, **given the class** Spam/Not Spam.
- e.g. In a spam email, the likelihood of ‘Free' and ‘Money' 💵 appearing are treated as independent events, even though they usually appear together.

**Note**: The conditional independence assumption makes the probability calculations easier, i.e, the joint probability
simply becomes the product of individual probabilities, **conditional** on the label.

\[P(W|S) = P(w_1|S)\times P(w_2|S)\times \dots P(w_d|S) \]

\[\implies P(S|W)=\frac{P(w_1|S)\times P(w_2|S)\times \dots P(w_d|S)\times P(S)}{P(W)}\]
\[\implies P(S|W)=\frac{\prod_{i=1}^d P(w_i|S)\times P(S)}{P(W)}\]
\[\text{Similarly, } P(NS|W)=\frac{\prod_{i=1}^d P(w_i|NS)\times P(NS)}{P(W)}\]

We can generalize it for any number of class labels 'y': <br>
\[\implies P(y|W) \propto \prod_{i=1}^d P(w_i|y)\times P(y) \quad \text{ where, y = class label} \]
\[ P(w_i|y) = \frac{count(w_i ~in~ y)}{\text{total words in class y}} \]

**Note**: We compute the probabilities for both Spam/Not Spam and assign the final label to email, depending upon which probability is higher.
{{< /panel >}}

{{< panel color="green" title="Performance 🏇" >}}
👉Space Complexity: O(d*c)

👉Time Complexity: 
- Training: O(n\*d*c)
- Inference: O(d*c)

Where, 
- d = number of features/dimensions
- c = number of classes
- n = number of training examples
{{< /panel >}}

{{< video "https://youtu.be/dWb6CgZQPcg" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/support_vector_machines/support_vector_regression" >}}">Previous: Support Vector Regression</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/naive_bayes/naive_bayes_issues" >}}">Next: Naive Bayes Issues</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```