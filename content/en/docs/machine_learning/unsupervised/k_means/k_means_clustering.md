---
title: K Means Clustering
description: K Means Clustering
date: 2026-02-13
weight: 311
math: true
---

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/k_means/k_means_clustering/slide_01_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Limitation of Supervised Learning" >}}
- In real-world 🌍 systems, labeled data is scarce and expensive 💰.
- Unsupervised learning discovers inherent structure without human annotation.
- Clustering answers: "Given a set of points, what natural groupings exist?"
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/k_means/k_means_clustering/slide_03_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Real-World 🌍 Motivations" >}}
- Customer Segmentation: Group users by behavior without predefined categories.
- Image Compression: Reduce color palette by clustering pixel colors.
- Anomaly Detection: Points far from any cluster are outliers.
- Data Exploration: Understand structure before building supervised models.
- Preprocessing: Create features from cluster assignments.
{{< /panel >}}

{{< panel color="navy" title="Key Insight 💡" >}}
- Clustering assumes that ‘similar' points should be grouped together.
- But what is ‘similar'? This assumption drives everything.
{{< /panel >}}

{{< panel color="blue" title="Problem Statement ✍️" >}}
- Given:
- Dataset X = {x₁, x₂, ..., xₙ} where xᵢ ∈ ℝᵈ.
- Desired number of clusters ‘k'.
- Find:
- Cluster assignments C = {C₁, C₂, ..., Cₖ}.
- Such that points within clusters are ‘similar'.
- And points across clusters are ‘dissimilar'.
{{< /panel >}}

{{< panel color="orange" title="Clustering" >}}
- Clustering
{{< imgproc "images/machine_learning/unsupervised/k_means/k_means_clustering/slide_07_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Optimization Perspective 👀" >}}
- This is fundamentally an optimization problem.
- We need:
- An objective function (what makes a clustering ‘good'?)
- An algorithm to optimize it (how do we find good clusters?)
- Evaluation metrics (how do we measure quality?)
{{< /panel >}}

{{< panel color="red" title="Optimization" >}}
- Objective function:
- Minimize the within-cluster sum of squares (WCSS).
- Where:
- C = {C₁, ..., Cₖ} are cluster assignments.
- μⱼ is the centroid (mean) of cluster Cₖ.
- ||·||² is squared Euclidean distance.
- Note: Every point belongs to one and only one cluster.
\[J(C,\mu)=\sum_{j=1}^{k}\sum_{x_{i}∈C_{j}}∥x_{i}-\mu_{j}∥^{2}\]
{{< /panel >}}

{{< panel color="navy" title="Variance Decomposition" >}}
- Total Variance = Within-Cluster Variance + Between-Cluster Variance
- K-Means minimizes within-Cluster variance, which implicitly maximizes between-cluster separation.
- Geometric Interpretation:
- Each point is ‘pulled' toward its cluster center.
- The objective measures total squared distance of all points to their centers.
- Lower J(C, μ) means tighter, more compact clusters.
- Note: K-Means works best when clusters are roughly spherical, similarly sized, and well-separated.
{{< /panel >}}

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/k_means/k_means_clustering/slide_11_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Combinatorial Explosion 💥" >}}
- The problem requires partitioning 'n' observations into ‘k' distinct, non-overlapping clusters, which is given by the Stirling number of the second kind, which grows at a rate roughly equal to .
\[S(n,k)=\frac{1}{k!}\sum_{j=0}^{k}(-1)^{k-j}\frac{k}{j}j^{n}\]
\[S(100,2)=2^{100-1}-1=2^{99}-1\]
{{< /panel >}}

{{< video "https://youtu.be/s2-eu_hjepQ" >}}
<br><br>
```End of Section```