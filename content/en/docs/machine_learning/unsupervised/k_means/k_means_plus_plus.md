---
title: K Means++
description: K Means++ Algorithm
date: 2026-02-14
weight: 313
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxddB_on_ZQ0pzP6C6gRHR_i" 
"K Means Clustering | All Videos" >}}

<br>

{{< panel color="orange" title="Issues with Random Initialization" >}}
- If two initial centroids belong to the same natural cluster, the algorithm will likely split that natural cluster in half and be forced to merge two other distinct clusters elsewhere to compensate.
- **Inconsistent**; different runs may lead to different clusters.
- **Slow convergence**; Centroids may need to travel much farther across the feature space, requiring more iterations.

👉Example for different K-Means algorithm runs give different clusters
{{< imgproc "images/machine_learning/unsupervised/k_means/k_means_plus_plus/slide_02_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< imgproc "images/machine_learning/unsupervised/k_means/k_means_plus_plus/slide_02_02.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="K-Means++ Algorithm" >}}
💡Addresses the issue due to **random initialization** by aiming to spread out the initial centroids across the data points.

**Steps**:
1. **Select the first centroid**: Choose one data point randomly from the dataset to be the first centroid.
2. **Calculate distances**: For every data point x not yet selected as a centroid, calculate the distance, D(x), between x 
and the nearest centroid chosen so far.
3. **Select the next centroid**: Choose the next centroid from the remaining data points with a probability 
proportional to D(x)^2. <br>
This makes it more likely that a point far from existing centroids is selected, ensuring the initial centroids are well-dispersed.
4. **Repeat**: Repeat steps 2 and 3 until ‘k' number of centroids are selected.
5. **Run standard K-means**: Once the initial centroids are chosen, the standard k-means algorithm proceeds with assigning 
data points to the nearest centroid and iteratively updating the centroids until convergence.
{{< /panel >}}

{{< panel color="red" title="Problem 🚨" >}}
🦀 If our data is extremely **noisy** (outliers), the **probabilistic logic** (\(\propto D(x)^2\)) might accidentally 
**pick** an **outlier** as a **cluster center**.
{{< /panel >}}

{{< panel color="green" title="Solution ✅" >}}
Do robust preprocessing to **remove outliers** or use **K-Medoids** algorithm.
{{< /panel >}}

{{< video "https://youtu.be/fkrVpuAy_LE" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/unsupervised/k_means/lloyds_algorithm" >}}">Previous: Lloyds Algorithm</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/unsupervised/k_means/k_medoid" >}}">Next: K Medoid</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```