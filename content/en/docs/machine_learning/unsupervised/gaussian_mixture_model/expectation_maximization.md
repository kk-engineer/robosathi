---
title: Expectation Maximization
description: Expectation Maximization
date: 2026-02-14
weight: 343
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxcF-fY0gn6FSxSgKT84rvpV" 
"Gaussian Mixture Model (GMM) | All Videos" >}}

<br>

{{< panel color="blue" title="GMM as Latent Variable Model" >}}
- GMM is a latent variable model, where the variable is a latent (hidden) variable that indicates which specific Gaussian component generated a particular data point.
{{< /panel >}}

{{< panel color="orange" title="Chicken 🐓 & Egg 🥚 Problem" >}}
- If we knew the parameters () we could easily calculate which cluster ‘z' each point belongs to (using probability).
- If we knew the cluster assignments ‘z' of each point, we could easily calculate the parameters for each cluster (using simple averages).
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/expectation_maximization/slide_03_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/expectation_maximization/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Break the Loop 🔁" >}}
- Guess one (cluster assignment ‘z') to find the other, i.e,
- (parameters ).
{{< /panel >}}

{{< panel color="blue" title="Goal 🎯" >}}
- ⛳️ Find latent cluster indicator variable .
- 🍬 But is a ‘hard' assignment (either ‘0' or ‘1').
- 🦆 Because we do not observe ‘z', we use another variable ‘Responsibility' () as a ‘soft' assignment (value between 0 and 1).
- 🐣 is the expected value of the latent variable , given the observed data and parameters .
- Note: is the posterior probability (or ‘responsibility') that cluster takes for explaining data point .
{{< /panel >}}

{{< panel color="orange" title="Indicator Variable ➡ Responsibility" >}}
- Using Bayes' Theorem, we derive responsibility (posterior probability that component ‘k' generated data point ) by combining the prior/weights () and the likelihood ().
- Bayes' Theorem:
\[\gamma_{ik}=P(z_{ik}=1∣x_{i},\theta)=\frac{P(z_{ik}=1)P(x_{i}∣z_{ik}=1)}{P(x_{i})}\]
\[\gamma_{ik}=\frac{\pi_{k}N(x_{i}∣\mu_{k},\Sigma_{k})}{\sum_{j=1}^{K}\pi_{j}N(x_{i}∣\mu_{j},\Sigma_{j})}\]
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/expectation_maximization/slide_08_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/expectation_maximization/slide_09_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/expectation_maximization/slide_10_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/expectation_maximization/slide_11_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Expectation Maximization Algorithm ⚙️" >}}
- Initialization: Assign initial values to parameters (), often using K-Means results.
- Expectation Step (E): Calculate responsibilities; provides ‘soft' assignments of points to clusters.
- Maximization Step (M): Update parameters using responsibilities as weights to maximize the expected log-likelihood.
- Convergence: Repeat E and M steps until the change in log-likelihood falls below a threshold.
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/expectation_maximization/slide_13_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Expectation Step" >}}
- Given our current guess of the clusters, what is the probability that point came from cluster ‘k' ?
- : Probability that a randomly selected data point belongs to the component before we even look at the specific value of , such that and .
\[\gamma(z_{ik})=p(z_{i}=k|x_{i},\theta^{(old)})=\frac{\pi_{k}^{(old)}N(x_{i}|\mu_{k}^{(old)},\Sigma_{k}^{(old)})}{\sum_{j=1}^{K}\pi_{j}^{(old)}N(x_{i}|\mu_{j}^{(old)},\Sigma_{j}^{(old)})}\]
{{< /panel >}}

{{< panel color="navy" title="Maximization Step" >}}
- Update the parameters() by calculating weighted versions of the standard MLE formulas using responsibilities as weight 🏋️‍♀️.
- where, is the effective number of points assigned to component ‘k'.
\[\mu_{k}^{(new)}=\frac{1}{N_{k}}\sum_{i=1}^{N}\gamma(z_{ik})x_{i}\]
\[\Sigma_{k}^{(new)}=\frac{1}{N_{k}}\sum_{i=1}^{N}\gamma(z_{ik})(x_{i}-\mu_{k}^{(new)})(x_{i}-\mu_{k}^{(new)})^{⊤}\]
\[\pi_{k}^{(new)}=\frac{N_{k}}{N}\]
{{< /panel >}}

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/expectation_maximization/slide_16_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/SG_G4thCTF4" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/unsupervised/gaussian_mixture_model/latent_variable_model" >}}">Previous: Latent Variable Model</a></span>
<span style="margin-left:auto;"></span>
</div>
<!-- nav-panel:end -->

```End of Section```