---
title: Introduction Gaussian Mixture Models
description: Introduction Gaussian Mixture Models
date: 2026-02-13
weight: 341
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxcF-fY0gn6FSxSgKT84rvpV" 
"Gaussian Mixture Model (GMM) | All Videos" >}}

<br>

{{< panel color="blue" title="Issue with K-Means" >}}
- K-means uses Euclidean distance and assumes that clusters are spherical (isotropic) and have the same variance across all dimensions.
- ⭐️ Places a circle or sphere around each centroid.
- What if the clusters are elliptical ? 🤔
{{< /panel >}}

{{< panel color="orange" title="K-Means Fails with Elliptical Clusters" >}}
- K-Means Fails with Elliptical Clusters
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/introduction_gaussian_mixture_models/slide_02_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="GMM can Model Elliptical Clusters" >}}
- GMM can Model Elliptical Clusters
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/introduction_gaussian_mixture_models/slide_03_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Gaussian Mixture Model (GMM)" >}}
- GMM: ‘Probabilistic evolution' of K-Means
- GMM provides soft assignments and can model elliptical clusters by accounting for variance and correlation between features.
- Note: GMM assumes that all data points are generated from a mixture of a finite number of Gaussian Distributions with unknown parameters.
{{< /panel >}}

{{< panel color="navy" title="Mixture Model" >}}
- ‘Combination of probability distributions'
- Soft Assignment: Instead of a simple ‘yes' or ‘no' for cluster membership, a data point is assigned a set of probabilities, one for each cluster.
- e.g: A data point might have a 60% probability of belonging to cluster ‘A', 30% probability for cluster ‘B', and 10% probability for cluster ‘C'.
{{< /panel >}}

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/introduction_gaussian_mixture_models/slide_06_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Gaussian Mixture Model" >}}
- Gaussian Mixture Model
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/introduction_gaussian_mixture_models/slide_07_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Multivariate Gaussian" >}}
- Multivariate Gaussian
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/introduction_gaussian_mixture_models/slide_08_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Gaussian PDF" >}}
- :
- Note: The term is a normalization constant to ensure the total area under the curve = 1.
{{< /panel >}}

{{< panel color="navy" title="Feature Covariance" >}}
- Feature Covariance
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/introduction_gaussian_mixture_models/slide_10_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="Gaussian Mixture with PDF" >}}
- Gaussian Mixture with PDF
{{< imgproc "images/machine_learning/unsupervised/gaussian_mixture_model/introduction_gaussian_mixture_models/slide_11_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/-R3-LNuF_NE" >}}
<br><br>
```End of Section```