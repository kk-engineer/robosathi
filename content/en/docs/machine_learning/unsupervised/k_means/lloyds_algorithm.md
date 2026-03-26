---
title: Lloyds Algorithm
description: Lloyds Algorithm
date: 2026-02-14
weight: 312
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxddB_on_ZQ0pzP6C6gRHR_i" 
"K Means Clustering | All Videos" >}}

{{< panel color="cyan" title="Idea 💡" >}}
Since, we cannot enumerate all partitions (i.e, partitioning 'n' observations into ‘k' distinct, non-overlapping clusters), 
Lloyd's algorithm provides a local search **heuristic** (**approximate** algorithm).
{{< /panel >}}

{{< panel color="green" title="Lloyd's Algorithm ⚙️" >}}
Iterative method for partitioning 'n' data points into ‘k' groups by repeatedly assigning data points to the nearest centroid (mean) and then recalculating centroids until assignments stabilize, aiming to minimize within-cluster variance.

📥Input: X = {x₁, ..., xₙ}, ‘k' (number of clusters)

📤Output: ‘C' (clusters), ‘μ' (centroids)

👉**Steps**:
1. **Initialize**: Randomly choose ‘k' cluster centroids μ₁, ..., μₖ.
2. **Repeat until convergence**, i.e, until cluster assignments and centroids no longer change significantly.
- a) **Assignment**: Assign each data point to the cluster whose centroid is closest (usually using Euclidean distance).
  - For each point xᵢ: cᵢ = argminⱼ ||xᵢ - μⱼ||²
- b) **Update**: Recalculate the centroid (mean) of each cluster.
  - For each cluster j: μⱼ = (1/|Cⱼ|) Σₓᵢ∈Cⱼ xᵢ
{{< /panel >}}

{{< panel color="red" title="Issues🚨" >}}
- Initialization sensitive, different initialization may lead to different clusters.
- Tries to make each cluster of same size that may not be the case in real world.
- Tries to make each cluster with same density(variance)
- Does not work well with non-globular(spherical) data.

👉See how 2 different runs of K-Means algorithm gives totally different clusters.
{{< imgproc "images/machine_learning/unsupervised/k_means/lloyds_algorithm/slide_06_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< imgproc "images/machine_learning/unsupervised/k_means/lloyds_algorithm/slide_06_02.png" Resize "1400x" >}}{{< /imgproc >}}

👉Also, K-Means does not work well with non-spherical clusters, or clusters with different densities and sizes.
{{< imgproc "images/machine_learning/unsupervised/k_means/lloyds_algorithm/slide_07_01.png" Resize "1400x" >}}{{< /imgproc >}}

{{< /panel >}}

{{< panel color="green" title="Solutions" >}}
✅ Do multiple runs 🏃‍♂️and choose the clustering with minimum error. <br>
✅ Do not select initial points randomly, but some logic, such as, K-means++ algorithm. <br>
✅ Use hierarchical clustering or density based clustering DBSCAN.
{{< /panel >}}

{{< video "https://youtu.be/twGZVVPGA4E" >}}
<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/unsupervised/k_means/k_means_clustering" >}}">Previous: K Means</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/unsupervised/k_means/k_means_plus_plus" >}}">Next: K Means++</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```