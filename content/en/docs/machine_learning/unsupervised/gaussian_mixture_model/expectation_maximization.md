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

{{< panel color="cyan" title="GMM as Latent Variable Model" >}}
⭐️GMM is a latent variable model, where the variable \(z_i\) is a latent (hidden) variable that indicates which specific
Gaussian component or cluster generated a particular data point.
{{< /panel >}}

{{< panel color="orange" title="Chicken 🐓 & Egg 🥚 Problem" >}}
- If we knew the parameters (\(\mu, \Sigma, \pi\)) we could easily calculate which cluster 'z' each point belongs to (using probability).
- If we knew the cluster assignments 'z' of each point, we could easily calculate the parameters for each cluster (using simple averages).

🦉But we do not know either of them, as the parameters of the Gaussians - we aim to find and 
cluster indicator latent variable is hidden.
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/expectation_maximization/slide_03_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/expectation_maximization/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="rust" title="Break the Loop 🔁" >}}
⛓️‍💥Guess one, i.e, cluster assignment 'z' to find the other, i.e, parameters \(\mu, \Sigma, \pi\).
{{< /panel >}}

{{< panel color="blue" title="Goal 🎯" >}}
⛳️ _Find latent cluster indicator variable \(z_{ik}\)._

But \(z_{ik}\) is a '**hard' assignment**' (either '0' or '1').
- 🦆 Because we do not observe 'z', we use another variable '**Responsibility**' (\(\gamma_{ik}\)) as 
a '**soft**' assignment (_value between 0 and 1_).
- 🐣 \(\gamma_{ik}\) is the **expected value** of the **latent variable** \(z_{ik}\), given the observed data \(x_{i}\) and 
parameters \(\Theta\).
\[\gamma _{ik}=E[z_{ik}\mid x_{i},\theta ]=P(z_{ik}=1\mid x_{i},\theta )\]

**Note**: \(\gamma_{ik}\) is the **posterior probability** (or '**responsibility**') that **cluster** 'k' takes for 
**explaining** data point \(x_{i}\).
{{< /panel >}}

{{< panel color="blue" title="Indicator Variable ➡ Responsibility" >}}
\[\gamma _{ik}=E[z_{ik}\mid x_{i},\theta ]=P(z_{ik}=1\mid x_{i},\theta )\]
⭐️Using Bayes' Theorem, we derive **responsibility** (_posterior probability that component 'k' generated data point \(x_i\)_) 
by combining the **prior/weights** (\(\pi_k\)) and the **likelihood** (\(\mathcal{N}(x_{i}\mid \mu _{k},\Sigma _{k})\)).

\[\gamma _{ik}= P(z_{ik}=1\mid x_{i},\theta ) = \frac{P(z_{ik}=1)P(x_{i}\mid z_{ik}=1)}{P(x_{i})}\]
\[\gamma _{ik}=\frac{\pi _{k}\mathcal{N}(x_{i}\mid \mu _{k},\Sigma _{k})}{\sum _{j=1}^{K}\pi _{j}\mathcal{N}(x_{i}\mid \mu _{j},\Sigma _{j})}\]
👉**Bayes' Theorem**:  \(P(A|B)=\frac{P(B|A)\cdot P(A)}{P(B)}\)

👉 GMM Densities at point
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/expectation_maximization/slide_08_01.png" Resize "1400x" >}}{{< /imgproc >}}

👉GMM Densities at point (different cluster weights)
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/expectation_maximization/slide_09_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Expectation Maximization Algorithm ⚙️" >}}
1. **Initialization**: Assign initial values to parameters (\(\mu, \Sigma, \pi\)), often using K-Means results.
2. **Expectation Step (E)**: Calculate responsibilities; provides ‘soft' assignments of points to clusters.
3. **Maximization Step (M)**: Update parameters using responsibilities as weights to maximize the expected log-likelihood.
4. **Convergence**: **Repeat** 'E' and 'M' steps until the change in log-likelihood falls below a threshold.
{{< /panel >}}

{{< panel color="orange" title="Expectation Step" >}}
👉Given our current guess of the clusters, what is the probability that point \(x_i\) came from cluster 'k' ?
\[\gamma (z_{ik})=p(z_{i}=k|\mathbf{x}_{i},\mathbf{\theta }^{(\text{old})})=\frac{\pi _{k}^{(\text{old})}\mathcal{N}(\mathbf{x}_{i}|\mathbf{\mu }_{k}^{(\text{old})},\mathbf{\Sigma }_{k}^{(\text{old})})}{\sum _{j=1}^{K}\pi _{j}^{(\text{old})}\mathcal{N}(\mathbf{x}_{i}|\mathbf{\mu }_{j}^{(\text{old})},\mathbf{\Sigma }_{j}^{(\text{old})})}\]

\(\pi_k\) : Probability that a randomly selected data point \(x_i\) belongs to the k-th component before we even look 
at the specific value of \(x_i\), such that \(\pi_k \ge 0\) and \(\sum _{k=1}^{K}\pi _{k}=1\).
{{< /panel >}}

{{< panel color="navy" title="Maximization Step" >}}
👉Update the parameters (\(\mu, \Sigma, \pi\)) by calculating weighted versions of the standard MLE formulas using responsibilities as weight 🏋️‍♀️.

\[
\begin{align*}
&\bullet \mathbf{\mu }_{k}^{(\text{new})}=\frac{1}{N_{k}}\sum _{i=1}^{N}\gamma (z_{ik})\mathbf{x}_{i} \\
&\bullet  \mathbf{\Sigma }_{k}^{(\text{new})}=\frac{1}{N_{k}}\sum _{i=1}^{N}\gamma (z_{ik})(\mathbf{x}_{i}-\mathbf{\mu }_{k}^{(\text{new})})(\mathbf{x}_{i}-\mathbf{\mu }_{k}^{(\text{new})})^{\top } \\ 
&\bullet  \pi _{k}^{(\text{new})}=\frac{N_{k}}{N}
\end{align*}
\]
- where, \(N_{k}=\sum _{i=1}^{N}\gamma (z_{ik})\) is the **effective** number of points assigned to component ‘k'.
{{< /panel >}}

{{< video "https://youtu.be/SG_G4thCTF4" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/unsupervised/gaussian_mixture_model/latent_variable_model" >}}">Previous: Latent Variable Model</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/unsupervised/anomaly_detection/anomaly_detection_introduction" >}}">Next: Anomaly Detection</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```