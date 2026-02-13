---
title: DBSCAN
description: DBSCAN
date: 2026-02-13
weight: 331
math: true
---

{{< panel color="blue" title="Issues with K-Means" >}}
- Non-Convex Shapes: K-Means can not find ‘crescent' or ‘ring' shape clusters.
- Noise: K-Means forces every point into a cluster, even outliers.
{{< /panel >}}

{{< panel color="orange" title="Main Question ?" >}}
- K-Means asks:
- "Which center is closest to this point?"
- DBSCAN asks:
- "Is this point part of a dense neighborhood?"
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/dbscan/dbscan/slide_03_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Intuition 💡" >}}
- Cluster is a contiguous region of high density in the data space, separated from other clusters by areas of low density.
{{< /panel >}}

{{< panel color="navy" title="DBSCAN" >}}
- Groups closely packed data points into clusters based on their density, and marks points that lie alone in low-density regions as outliers or noise.
- Note: Unlike K-means, DBSCAN can find arbitrarily shaped clusters and does not require the number of clusters to be specified beforehand.
{{< /panel >}}

{{< panel color="blue" title="2 Hyper-Parameters 🎛️" >}}
- Epsilon (eps or ):Radius that defines the neighborhood around a data point.If it's too small, many points will be noise, and if too large, distinct clusters may merge.
- Minimum Points(minPts or min_samples):Minimum number of data points required within a point's -neighborhood for that point to be considered a dense region (a core point).Defines threshold for ‘density'.Rule of thumb: minPts dimensions + 1; use larger value for noisy data (minPts 2*d).
{{< /panel >}}

{{< panel color="orange" title="Types of Point" >}}
- Core Point:If it has at least minPts (including itself) within its -neighborhood.Forms the dense backbone of the clusters and can expand them.
- Border Point:If it has at fewer than minPts within its -neighborhood but falls within the -neighborhood of a core point.Border points belong to a cluster but cannot expand it further.
- Noise Point (Outlier):If it is neither a core point nor a border point, i.e., it is not density-reachable from any core point.Not assigned to any cluster.
{{< /panel >}}

{{< panel color="green" title="DBSCAN Algorithm ⚙️" >}}
- Random Start: Mark all points as unvisited; pick an arbitrary unvisited point ‘P' from the dataset.
- Density Check:Check the point P's ϵ-neighborhood.
- If ‘P' has at least minPts, it is identified as a core point, and a new cluster is started.
- If it has fewer than minPts, the point is temporarily labeled as noise (it might become a border point later).
{{< /panel >}}

{{< panel color="red" title="DBSCAN Algorithm ⚙️(Continued)" >}}
- Cluster Expansion: Recursively visit all points in P's ϵ-neighborhood. If they are also core points, their neighbors are added to the cluster.
- Iteration 🔁: This ‘density-reachable' logic continues until the cluster is fully expanded. The algorithm then picks another unvisited point and repeats the process, discovering new clusters or marking more points as noise until all points are processed.
{{< /panel >}}

{{< panel color="navy" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/dbscan/dbscan/slide_10_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/dbscan/dbscan/slide_11_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="DBSCAN Points and Epsilon" >}}
- DBSCAN Points and Epsilon
{{< imgproc "images/machine_learning/unsupervised/dbscan/dbscan/slide_12_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="When DBSCAN Fails ?" >}}
- Varying Density Clusters: Say A cluster is very dense and B is sparse, a single cannot satisfy both clusters.
- High Dimensional Data: ‘Curse of Dimensionality' - In high-dimensional space, the distance between any two points converges.Note: Sensitive to parameter eps and minPts; tricky to get it work.
{{< /panel >}}

{{< panel color="red" title="DBSCAN Failures and Epsilon ()" >}}
- DBSCAN Failures and Epsilon ()
{{< imgproc "images/machine_learning/unsupervised/dbscan/dbscan/slide_14_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="When to use DBSCAN ?" >}}
- Arbitrary Cluster Shapes: When clusters are intertwined, nested, or ‘moon-shaped'; where K-Means would fail by splitting them.
- Presence of Noise and Outliers: Robust to noise and outliers because it explicitly identifies low-density points as noise (labeled as -1) rather than forcing them into a cluster.
{{< /panel >}}

{{< video "https://youtu.be/5ngz0Q_7fyo" >}}
<br><br>
```End of Section```