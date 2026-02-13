---
title: Lloyds Algorithm
description: Lloyds Algorithm
date: 2026-02-13
weight: 312
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxddB_on_ZQ0pzP6C6gRHR_i" 
"K Means Clustering | All Videos" >}}

<br>

{{< panel color="blue" title="Idea 💡" >}}
- Since, we cannot enumerate all partitions (i.e, partitioning 'n' observations into ‘k' distinct, non-overlapping clusters), Lloyd's algorithm provides a local search heuristic (approximate algorithm).
{{< /panel >}}

{{< panel color="orange" title="Lloyd's Algorithm ⚙️" >}}
- Iterative method for partitioning 'n' data points into ‘k' groups by repeatedly assigning data points to the nearest centroid (mean) and then recalculating centroids until assignments stabilize, aiming to minimize within-cluster variance.
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/k_means/lloyds_algorithm/slide_03_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Lloyd's Algorithm ⚙️" >}}
- 📥Input: X = {x₁, ..., xₙ}, ‘k' (number of clusters)
- 📤Output: ‘C' (clusters), ‘μ' (centroids)
- 👉Steps:
- 1. Initialize: Randomly choose ‘k' cluster centroids μ₁, ..., μₖ.
- 2. Repeat until convergence, i.e, until cluster assignments and centroids no longer change significantly.
- a) Assignment: Assign each data point to the cluster whose centroid is closest (usually using Euclidean distance).
- For each point xᵢ: cᵢ = argminⱼ ||xᵢ - μⱼ||²
- b) Update: Recalculate the centroid (mean) of each cluster.
- For each cluster j: μⱼ = (1/|Cⱼ|) Σₓᵢ∈Cⱼ xᵢ
{{< /panel >}}

{{< panel color="navy" title="Issues🚨" >}}
- Initialization sensitive, different initialization may lead to different clusters.
- Tries to make each cluster of same size that may not be the case in real world.
- Tries to make each cluster with same density(variance)
- Does not work well with non-globular(spherical) data.
{{< /panel >}}

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/k_means/lloyds_algorithm/slide_06_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< imgproc "images/machine_learning/unsupervised/k_means/lloyds_algorithm/slide_06_02.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/k_means/lloyds_algorithm/slide_07_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/twGZVVPGA4E" >}}
<br><br>
```End of Section```