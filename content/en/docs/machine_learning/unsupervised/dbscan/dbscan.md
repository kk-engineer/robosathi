---
title: DBSCAN
description: DBSCAN
date: 2026-02-14
weight: 331
math: true
---

{{< panel color="red" title="Issues with K-Means" >}}
- **Non-Convex Shapes**: K-Means can not find ‘crescent' or ‘ring' shape clusters.
- **Noise**: K-Means forces every point into a cluster, even outliers.
{{< /panel >}}

{{< panel color="green" title="Main Question for Clustering ?" >}}
👉K-Means asks:
- _"Which center is closest to this point?"_

👉DBSCAN asks:
- _"Is this point part of a dense neighborhood?"_
{{< /panel >}}

{{< panel color="cyan" title="Intuition 💡" >}}
**Cluster** is a **contiguous region of high density** in the data space, separated from other clusters by areas of low density.
{{< /panel >}}

{{< panel color="orange" title="DBSCAN" >}}
⭐️Groups closely packed data points into clusters based on their density, and marks points that lie alone in low-density regions as outliers or noise.

**Note**: Unlike K-means, DBSCAN can find arbitrarily shaped clusters and does not require the number of clusters to be specified beforehand.
{{< /panel >}}

{{< panel color="blue" title="Hyper-Parameters 🎛️" >}}
1. **Epsilon (eps or \(\epsilon\))**: 
- Radius that defines the neighborhood around a data point.
- If it's too small, many points will be noise, and if too large, distinct clusters may merge.

2. **Minimum Points(minPts or min_samples)**:
- Minimum number of data points required within a point's -neighborhood for that point to be considered a dense region (a core point).
- Defines threshold for 'density'.
- **Rule of thumb**: minPts dimensions + 1; use larger value for **noisy** data (minPts 2*dimensions).
{{< /panel >}}

{{< panel color="grey" title="Types of Points" >}}
- **Core Point**:
  - If it has at least minPts (including itself) within its -neighborhood.
  - Forms the dense backbone of the clusters and can expand them.
- **Border Point**:
  - If it has at fewer than minPts within its -neighborhood but falls within the -neighborhood of a core point.
  - Border points belong to a cluster but cannot expand it further.
- **Noise Point (Outlier)**:
  - If it is neither a core point nor a border point, i.e., it is not density-reachable from any core point.
  - Not assigned to any cluster.
  {{< /panel >}}

{{< panel color="green" title="DBSCAN Algorithm ⚙️" >}}
1. **Random Start**: 
- Mark all points as unvisited; pick an arbitrary unvisited point ‘P' from the dataset.
2. **Density Check**: 
- Check the point P's ϵ-neighborhood.
- If 'P' has at least minPts, it is identified as a core point, and a new cluster is started.
- If it has fewer than minPts, the point is temporarily labeled as noise (it might become a border point later).
3. **Cluster Expansion**: 
- Recursively visit all points in P's ϵ-neighborhood. 
- If they are also core points, their neighbors are added to the cluster.
4. **Iteration** 🔁: 
- This '**density-reachable**' logic continues until the cluster is fully expanded. 
- The algorithm then picks another unvisited point and repeats the process, discovering new clusters or marking more points as noise until all points are processed.

👉DBSCAN can correctly detect non-spherical clusters.
{{< imgproc "images/machine_learning/unsupervised/dbscan/dbscan/slide_11_01.png" Resize "1400x" >}}{{< /imgproc >}}

👉DBSCAN Points and Epsilon-Neighborhood.
{{< imgproc "images/machine_learning/unsupervised/dbscan/dbscan/slide_12_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="When DBSCAN Fails ?" >}}
- **Varying Density Clusters**: 
  - Say A cluster is very dense and B is sparse, a single cannot satisfy both clusters.
- **High Dimensional Data**: 
  - 'Curse of Dimensionality' - In high-dimensional space, the distance between any two points converge.

**Note**: Sensitive to parameter eps and minPts; **tricky** to get it work.

👉DBSCAN Failure and Epsilon (\(\epsilon)
{{< imgproc "images/machine_learning/unsupervised/dbscan/dbscan/slide_14_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="When to use DBSCAN ?" >}}
- **Arbitrary Cluster Shapes**: 
  - When clusters are intertwined, nested, or ‘moon-shaped'; where K-Means would fail by splitting them.
- **Presence of Noise and Outliers**: 
  - Robust to noise and outliers because it explicitly identifies low-density points as noise (labeled as -1) rather than forcing them into a cluster.
{{< imgproc "images/machine_learning/unsupervised/dbscan/dbscan/snake_shape.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/5ngz0Q_7fyo" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/unsupervised/hierarchical_clustering/hierarchical_clustering" >}}">Previous: Hierarchical Clustering</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/unsupervised/gaussian_mixture_model/introduction_gaussian_mixture_models" >}}">Next: Gaussian Mixture Models</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```
