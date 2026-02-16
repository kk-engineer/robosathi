---
title: Clustering Quality Metrics
description: Clustering Quality Metrics
date: 2026-02-14
weight: 315
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxddB_on_ZQ0pzP6C6gRHR_i" 
"K Means Clustering | All Videos" >}}

<br>

{{< panel color="orange" title="How to Evaluate Quality of Clustering?" >}}
- 👉 **Elbow Method**: Quickest to compute; good for initial EDA (Exploratory Data Analysis).
- 👉 **Dunn Index**: Focuses on the ‘gap' between the closest clusters.
- 👉 **Silhouette Score**: Balances compactness and separation.
- 👉 _Domain specific knowledge and system constraints_.
{{< /panel >}}

{{< panel color="blue" title="Elbow Method" >}}
⭐**️Heuristic** used to determine the **optimal** number of **clusters** (k) for clustering by visualizing how the 
quality of clustering improves as 'k' increases.

🎯The goal is to find a value of 'k' where adding more clusters provides a **diminishing return** in terms of variance reduction.
{{< imgproc "images/machine_learning/unsupervised/k_means/clustering_quality_metrics/slide_02_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Dunn Index [0, \(\infty\))" >}}
⭐️Clustering quality evaluation metric that measures: **separation** (between clusters) and **compactness** (within clusters)

**Note**: A higher Dunn Index value indicates better clustering, meaning clusters are well-separated from each other and compact.

👉**Dunn Index Formula**:
\[DI = \frac{\text{Minimum Inter-Cluster Distance(between different clusters)}}{\text{Maximum Intra-Cluster Distance(within a cluster)}}\]
\[DI = \frac{\min_{1 \le i < j \le k} \delta(C_i, C_j)}{\max_{1 \le l \le k} \Delta(C_l)}\]
{{< imgproc "images/machine_learning/unsupervised/k_means/clustering_quality_metrics/slide_06_01.png" Resize "1400x" >}}{{< /imgproc >}}

👉Let's understand the terms in the above formula:

- \(\delta(C_i, C_j)\) (**Inter-Cluster Distance**):
  - Measures how ‘**far apart**’ the clusters are. 
  - Distance between the two closest points of different clusters (**Single-Linkage distance**).
  \[\delta(C_i, C_j) = \min_{x \in C_i, y \in C_j} d(x, y)\]

- \(\Delta(C_l)\) (**Intra-Cluster Diameter**):
  - Measures how ‘**spread out**’ a cluster is. 
  - Distance between the two furthest points within the same cluster (**Complete-Linkage distance**).
  \[\Delta(C_l) = \max_{x, y \in C_l} d(x, y)\]
{{< /panel >}}

{{< panel color="navy" title="Measure of Closeness" >}}
- **Single Linkage (MIN)**: Uses the **minimum** distance between any two points in different clusters. 
- **Complete Linkage (MAX)**: Uses the **maximum** distance between any two points in same cluster.
{{< /panel >}}

{{< video "https://youtu.be/zNBTK8iRyx0" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/unsupervised/k_means/k_medoid" >}}">Previous: K Medoid</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/unsupervised/k_means/silhouette_score" >}}">Next: Silhouette Score</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```