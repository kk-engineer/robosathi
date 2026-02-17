---
title: Gaussian Mixture Models
description: Introduction to Gaussian Mixture Models
date: 2026-02-14
weight: 341
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxcF-fY0gn6FSxSgKT84rvpV" 
"Gaussian Mixture Model (GMM) | All Videos" >}}

<br>

{{< panel color="red" title="Issue with K-Means" >}}
- K-means uses Euclidean distance and assumes that clusters are spherical (isotropic) and have the same variance across all dimensions.
- Places a circle or sphere around each centroid.
  - What if the clusters are elliptical ? 🤔

👉K-Means Fails with Elliptical Clusters.
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/introduction_gaussian_mixture_models/slide_02_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="Gaussian Mixture Model (GMM)" >}}
💡GMM: 'Probabilistic evolution' of K-Means

⭐️ GMM provides **soft assignments** and can model **elliptical clusters** by accounting for variance and correlation between features.

**Note**: GMM assumes that all data points are generated from a **mixture** of a finite number of **Gaussian Distributions** 
with **unknown parameters**.

👉GMM can Model Elliptical Clusters.
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/introduction_gaussian_mixture_models/slide_03_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="What is a Mixture Model" >}}
💡_**'Combination of probability distributions'**_.

👉**Soft Assignment**: Instead of a simple 'yes' or 'no' for cluster membership, a data point is assigned 
a set of probabilities, one for each cluster.

e.g: A data point might have a 60% probability of belonging to cluster 'A', 30% probability for cluster 'B', 
and 10% probability for cluster 'C'.

👉Gaussian Mixture Model Example:
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/introduction_gaussian_mixture_models/slide_07_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Gaussian PDF" >}}
\[{\displaystyle {\mathcal {N}}({\boldsymbol {\mu }},\,{\boldsymbol {\sigma }})}: 
f(x\,|\,\mu ,\sigma ^{2})=\frac{1}{\sqrt{2\pi \sigma ^{2}}}\exp \left\{-\frac{(x-\mu )^{2}}{2\sigma ^{2}}\right\}\]
\[ \text{ Multivariate Gaussian, } {\displaystyle {\mathcal {N}}({\boldsymbol {\mu }},\,{\boldsymbol {\Sigma }})}:
f(\mathbf{x}\,|\,\mathbf{\mu },\mathbf{\Sigma })=\frac{1}{\sqrt{(2\pi )^{n}|\mathbf{\Sigma }|}}\exp \left\{-\frac{1}{2}(\mathbf{x}-\mathbf{\mu })^{T}\mathbf{\Sigma }^{-1}(\mathbf{x}-\mathbf{\mu })\right\}\]

**Note**: The term \(1/(\sqrt{2\pi \sigma ^{2}})\) is a normalization constant to ensure the total area under the curve = 1.

👉Multivariate Gaussian Example:
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/introduction_gaussian_mixture_models/slide_08_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Gaussian Mixture" >}}
Whenever we have multivariate Gaussian, then the variables may be independent or correlated.

👉Feature Covariance:
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/introduction_gaussian_mixture_models/slide_10_01.png" Resize "1400x" >}}{{< /imgproc >}}

👉Gaussian Mixture with PDF
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/introduction_gaussian_mixture_models/slide_11_01.png" Resize "1400x" >}}{{< /imgproc >}}

👉Gaussian Mixture (2D)
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/introduction_gaussian_mixture_models/gmm_2d.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/-R3-LNuF_NE" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/unsupervised/dbscan/dbscan" >}}">Previous: DBSCAN</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/unsupervised/gaussian_mixture_model/latent_variable_model" >}}">Next: Latent Variable Model</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```