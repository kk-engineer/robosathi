---
title: K Means Plus Plus
description: K Means Plus Plus
date: 2026-02-13
weight: 313
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxddB_on_ZQ0pzP6C6gRHR_i" 
"K Means Clustering | All Videos" >}}

<br>

{{< panel color="blue" title="Issues with Random Initialization" >}}
- If two initial centroids belong to the same natural cluster, the algorithm will likely split that natural cluster in half and be forced to merge two other distinct clusters elsewhere to compensate.
- Inconsistent; different runs may lead to different clusters.
- Slow convergence; Centroids may need to travel much farther across the feature space, requiring more iterations.
{{< /panel >}}

{{< panel color="orange" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/k_means/k_means_plus_plus/slide_02_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< imgproc "images/machine_learning/unsupervised/k_means/k_means_plus_plus/slide_02_02.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="K-Means++" >}}
- Addresses the issue due to random initialization by aiming to spread out the initial centroids across the data points.
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/k_means/k_means_plus_plus/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="K-Means++ Algorithm ⚙️" >}}
- Select the first centroid: Choose one data point randomly from the dataset to be the first centroid.
- Calculate distances: For every data point x not yet selected as a centroid, calculate the distance, D(x), between x and the nearest centroid chosen so far.
- Select the next centroid: Choose the next centroid from the remaining data points with a probability proportional to D(x)^2. This makes it more likely that a point far from existing centroids is selected, ensuring the initial centroids are well-dispersed.
{{< /panel >}}

{{< panel color="blue" title="K-Means++ Algorithm ⚙️ (continued)" >}}
- Repeat: Repeat steps 2 and 3 until ‘k' number of centroids are selected.
- Run standard K-means: Once the initial centroids are chosen, the standard k-means algorithm proceeds with assigning data points to the nearest centroid and iteratively updating the centroids until convergence.
{{< /panel >}}

{{< panel color="orange" title="Problem 🚨" >}}
- If our data is extremely noisy (outliers), the probabilistic logic () might accidentally pick an outlier as a cluster center.
{{< /panel >}}

{{< video "https://youtu.be/fkrVpuAy_LE" >}}
<br><br>
```End of Section```