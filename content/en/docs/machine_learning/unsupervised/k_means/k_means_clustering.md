---
title: K Means
description: K Means Clustering
date: 2026-02-14
weight: 311
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxddB_on_ZQ0pzP6C6gRHR_i" 
"K Means Clustering | All Videos" >}}

{{< panel color="orange" title="Unsupervised Learning" >}}
🌍In real-world systems, **labeled data** is scarce and expensive .

💡**Unsupervised learning** discovers inherent structure **without human annotation**.

👉**Clustering answers**: _"Given a set of points, what natural groupings exist?"_
{{< /panel >}}

{{< panel color="navy" title="Real-World Motivations for Clustering" >}}
- **Customer Segmentation**: Group users by behavior without predefined categories.
- **Image Compression**: Reduce color palette by clustering pixel colors.
- **Anomaly Detection**: Points far from any cluster are outliers.
- **Data Exploration**: Understand structure before building supervised models.
- **Preprocessing**: Create features from cluster assignments.
{{< /panel >}}

{{< panel color="cyan" title="Key Insight " >}}
💡Clustering assumes that '**similar**' points should be **grouped together**.

👉_But what is 'similar'? This assumption drives everything._
{{< /panel >}}

{{< panel color="green" title="Problem Statement" >}}
**Given**:
- Dataset X = {x₁, x₂, ..., xₙ} where xᵢ ∈ ℝᵈ.
- Desired number of clusters ‘k'.

**Find**:
- Cluster assignments C = {C₁, C₂, ..., Cₖ}.
- Such that points within clusters are '**similar**'.
- And points across clusters are '**dissimilar**'.

{{< imgproc "images/machine_learning/unsupervised/k_means/k_means_clustering/slide_07_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="Optimization Perspective" >}}
This is fundamentally an optimization problem, i.e, find parameters such that the value is minimum/maximum.
We need:
- An **objective function** 
  - _what makes a clustering 'good'?_
- An **algorithm** to optimize it 
  - _how do we find good clusters?_
- **Evaluation metrics** 
  - _how do we measure quality?_
  {{< /panel >}}

{{< panel color="red" title="Optimization" >}}
**Objective function**: <br>
👉**Minimize** the **within-cluster sum of squares (WCSS)**.
\[J(C, \mu) = \sum_{j=1}^k \sum_{x_i \in C_j} \underbrace{\|x_i -\mu_j\|^2}_{\text{distance from mean}} \]
- Where:
- C = {C₁, ..., Cₖ} are cluster assignments.
- μⱼ is the centroid (mean) of cluster Cₖ.
- ||·||² is squared Euclidean distance.

**Note**: Every point belongs to one and only one cluster.
{{< /panel >}}

{{< panel color="green" title="Variance Decomposition" >}}
💡_Within-Cluster Sum of Squares (WCSS) is nothing but **variance**._

⭐️ **Total Variance = Within-Cluster Variance + Between-Cluster Variance**

👉K-Means minimizes within-Cluster variance, which implicitly maximizes between-cluster separation.

**Geometric Interpretation**:
- Each point is ‘pulled' toward its cluster center.
- The objective measures total squared distance of all points to their centers.
- Lower J(C, μ) means tighter, more compact clusters.

**Note**: **K-Means** works **best** when clusters are roughly _spherical, similarly sized, and well-separated_.
{{< imgproc "images/machine_learning/unsupervised/k_means/k_means_clustering/slide_11_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Combinatorial Explosion " >}}
⭐️The problem requires partitioning 'n' observations into ‘k' distinct, non-overlapping clusters, which is given by 
the **Stirling number** of the second kind, which grows at a rate roughly equal to \(k^n/k!\).
\[S(n,k)=\frac{1}{k!}\sum _{j=0}^{k}(-1)^{k-j}{k \choose j}j^{n}\]
\[S(100,2)=2^{100-1}-1=2^{99}-1\]
\[2^{99}\approx 6.338\times 10^{29}\]

👉This large number of possible combinations makes the problem **NP-Hard**.

🦉The **k-means** optimization problem is **NP-hard** because it belongs to a class of problems for which no efficient 
(polynomial-time) algorithm is known to exist.

{{< /panel >}}

{{< video "https://youtu.be/s2-eu_hjepQ" >}}
<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/naive_bayes/naive_bayes_example" >}}">Previous: Naive Bayes Example</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/unsupervised/k_means/lloyds_algorithm" >}}">Next: Lloyds Algorithm</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```