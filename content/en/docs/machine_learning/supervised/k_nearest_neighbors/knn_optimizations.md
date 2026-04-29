---
title: KNN Optimizations
description: KNN Optimizations
date: 2026-02-14
weight: 232
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxf8kijzBo00irrF7JhvNwhZ" 
"K Nearest Neighbors (KNN) | All Videos" >}}

{{< panel color="blue" title="Optimizations" >}}
Naive KNN needs some improvements to fix some of its drawbacks.
- Standardization
- Distance-Weighted KNN
- Mahalanobis Distance
{{< /panel >}}

{{< panel color="green" title="Standardization" >}}
Say one feature is 'Annual Income' (0-1M), and another feature is 'Years of Experience' (0-40). <br>
The Euclidean distance will be almost entirely dominated by income .

So, we do standardization of each feature, such that it has a mean, \(\mu\)=0 and variance,\(\sigma\)=1.
\[z=\frac{x-\mu}{\sigma}\]
{{< /panel >}}

{{< panel color="cyan" title="Distance-Weighted KNN" >}}
Vanilla KNN treats the 1st nearest neighbor and the k-th nearest neighbor as equal. <br>
A neighbor that is 0.1units away should have more influence than a neighbor that is 10 units away.

We assign weight to each neighbor; most common strategy is inverse of squared distance.
\[w_i = \frac{1}{d(x_q, x_i)^2 + \epsilon}\]

**Improvements**:
- Noise/Outlier: Reduces the impact of ‘noise' or ‘outlier' (distant neighbors).
- Imbalanced Data: Closer points dominate, mitigating impact of imbalanced data. 
  - e.g: If you have a query point surrounded by 2 very close ‘Class A' points and 3 distant ‘Class B' points, weighted ️‍♀️ KNN will correctly pick ‘Class A'.
 
{{< /panel >}}

{{< panel color="orange" title="Mahalanobis Distance" >}}
**Problem** <br>
_Euclidean distance_ makes assumption that all the features are independent and provide unique information. <br>
'Height' and 'Weight' are highly correlated. <br>
So, if we use Euclidean distance, we are effectively 'double-counting' the size of the person.

**Mahalanobis distance** measures distance in terms of standard deviations from the mean, accounting for the covariance between features.
\[d(x, y) = \sqrt{(x - y)^T \Sigma^{-1} (x - y)}\]
\(\Sigma\): Covariance matrix of the data
- If \(\Sigma\) is identity matrix, Mahalanobis distance reduces to Euclidean distance.
- If \(\Sigma\) is a diagonal matrix, Mahalanobis distance reduces to Normalized Euclidean distance.

{{< /panel >}}

{{< panel color="red" title="Runtime Issue" >}}
Naive KNN shifts all computation to inference time, and it is very slow.
- To find the neighbor for one query, we must touch every single bit of the ‘nxd' matrix.
- If n=10^9,a single query would take seconds, but we need milliseconds.
{{< /panel >}}

{{< panel color="green" title="Advanced Optimizations" >}}
- Distance Weighted KNN
  - **K-D Trees** (d<20): Recursively partitions space into axis-aligned hyper-rectangles. O(log N ) search.
  - **Ball Trees** : High dimensional data; **Haversine** distance for geospatial data.
- **Approximate Nearest Neighbors (ANN)**
  - **Locality Sensitive Hashing (LSH)**: Uses ‘bucketizing' ️ hashes. Points that are close have a high probability of having the same hash.
  - **Hierarchical Navigable Small World (HNSW)**; Graph of vectors; Search is a ‘greedy walk' across levels.
- **Product Quantization** (Reduce memory footprint of high dimensional vectors)
  - **ScaNN** (Google)
  - **FAISS** (Meta)
- **Dimensionality Reduction** (Mitigate 'Curse of Dimensionality')
  - PCA
{{< /panel >}}

{{< video "https://youtu.be/wakeyfDucBQ" >}}
<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/k_nearest_neighbors/knn_intro" >}}">Previous: KNN Introduction</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/k_nearest_neighbors/curse_of_dimensionality" >}}">Next: Curse Of Dimensionality</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```