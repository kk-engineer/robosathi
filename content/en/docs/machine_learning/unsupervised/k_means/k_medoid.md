---
title: K Medoid
description: K Medoid
date: 2026-02-14
weight: 314
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxddB_on_ZQ0pzP6C6gRHR_i" 
"K Means Clustering | All Videos" >}}

{{< panel color="orange" title="Issues with K-Means" >}}
- In K-Means, the centroid is the arithmetic mean of the cluster. The **mean** is very **sensitive** to **outliers**.
- **Not interpretable**; centroid is the mean of cluster data points and may not be an actual data point, hence **not representative**.
{{< /panel >}}

{{< panel color="blue" title="Medoid" >}}
⭐**️Medoid** is a specific data point from a dataset that acts as the '**center**' or **most representative member** of its cluster.

👉It is defined as the object within a cluster whose **average dissimilarity** (distance) to all other members in that 
same cluster is the **smallest**.
{{< /panel >}}

{{< panel color="green" title="K-Medoids (PAM) Algorithm" >}}
💡Selects actual data points from the dataset as cluster representatives, called medoids (**most centrally located**).

👉a.k.a **Partitioning Around Medoids**(PAM).

**Steps**:
1. **Initialization**: Select ‘k' data points from the dataset as the initial medoids using K-Means++ algorithm.
2. **Assignment**: Calculate the distance (e.g., Euclidean or Manhattan) from each non-medoid point to all medoids and assign each point to the cluster of its nearest medoid.
3. **Update** (Swap):
- For each cluster, swap current medoid with a non-medoid point from the same cluster.
- For each swap, calculate the total cost (sum of distances from medoid).
- Pick the medoid with minimum cost .
4. **Repeat**: Repeat the assignment and update steps until (**convergence**), i.e, medoids no longer change or 
a maximum number of iterations is reached.

**Note**: Kind of brute-force algorithm, computationally expensive for large dataset.
{{< /panel >}}

{{< panel color="cyan" title="Advantages" >}}
✅ **Robust to Outliers**: Since medoids are actual data points rather than averages, extreme values (outliers) 
do not skew the center of the cluster as they do in K-Means. <br>
✅ **Flexible Distance Metrics**: It can work with any dissimilarity measure (Manhattan, Cosine similarity), making it ideal
for categorical or non-Euclidean data. <br>
✅ **Interpretable Results**: Cluster centers are real observations (e.g., a ‘typical’ customer profile), which makes 
the output easier to explain to stakeholders.
{{< /panel >}}
{{< video "https://youtu.be/10n1TktedhA" >}}
<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/unsupervised/k_means/k_means_plus_plus" >}}">Previous: K Means++</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/unsupervised/k_means/clustering_quality_metrics" >}}">Next: Clustering Quality Metrics</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```