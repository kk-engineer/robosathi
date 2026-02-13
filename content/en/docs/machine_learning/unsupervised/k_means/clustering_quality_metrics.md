---
title: Clustering Quality Metrics
description: Clustering Quality Metrics
date: 2026-02-13
weight: 315
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxddB_on_ZQ0pzP6C6gRHR_i" 
"K Means Clustering | All Videos" >}}

<br>

{{< panel color="blue" title="How to Evaluate Quality of Clustering?" >}}
- 👉 Elbow Method: Quickest to compute; good for initial EDA.
- 👉 Dunn Index: Focuses on the ‘gap' between the closest clusters.
- 👉 Silhouette Score: Balances compactness and separation.
- 👉 Domain specific knowledge and system constraints.
{{< /panel >}}

{{< panel color="orange" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/k_means/clustering_quality_metrics/slide_02_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Elbow Method" >}}
- Heuristic used to determine the optimal number of clusters (k) for clustering by visualizing how the quality of clustering improves as ‘' increases.
- The goal 🎯is to find a value of ‘k' where adding more clusters provides a diminishing return in terms of variance reduction.
{{< /panel >}}

{{< panel color="red" title="Dunn Index [0, )" >}}
- Clustering quality evaluation metric that measures:
- separation (between clusters) and
- compactness (within clusters)
- Note: A higher Dunn Index value indicates better clustering, meaning clusters are well-separated from each other and compact.
{{< /panel >}}

{{< panel color="navy" title="Dunn Index Formula" >}}
- Dunn Index Formula
\[DI=\frac{Minimum Inter-Cluster Distance (between different clusters)}{Maximum Intra-Cluster Distance (within a cluster)}\]
\[DI=\frac{min_{1≤i<j≤k}\delta(C_{i},C_{j})}{max_{1≤l≤k}Δ(C_{l})}\]
{{< /panel >}}

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/k_means/clustering_quality_metrics/slide_06_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/k_means/clustering_quality_metrics/slide_07_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Dunn Index Formula (Explanation)" >}}
- (Inter-Cluster Distance):
- Measures how ‘far apart' the clusters are. Distance between the two closest points of different clusters (Single-Linkage distance).
- (Intra-Cluster Diameter):
- Measures how ‘spread out' a cluster is.
- Distance between the two furthest points within the same cluster (Complete-Linkage distance).
\[\delta(C_{i},C_{j})=min_{x∈C_{i},y∈C_{j}}d(x,y)\]
\[Δ(C_{l})=max_{x,y∈C_{l}}d(x,y)\]
{{< /panel >}}

{{< video "https://youtu.be/zNBTK8iRyx0" >}}
<br><br>
```End of Section```