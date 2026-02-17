---
title: Hierarchical Clustering
description: Hierarchical Clustering
date: 2026-02-14
weight: 321
math: true
---

{{< panel color="red" title="Issues with K-Means" >}}
- 🤷 We might **not know** in advance the **number** of distinct **clusters** 'k' in the dataset.
- 🕸️ Also, sometimes the dataset may contain a nested structure or some inherent hierarchy, such as, file system, 
organizational chart, biological lineages, etc.
{{< /panel >}}

{{< panel color="green" title="Hierarchical Clustering" >}}
⭐️ Method of cluster analysis that seeks to build a hierarchy of clusters, resulting in a _tree like structure_ called **dendrogram**.

👉Hierarchical clustering allows us to explore different possibilities (of 'k') by **cutting** the **dendrogram** at _various levels_.
{{< imgproc "images/machine_learning/unsupervised/hierarchical_clustering/hierarchical_clustering/slide_03_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="2 Philosophies" >}}
**Agglomerative (Bottom-Up)**: <br>
Most common, also known as **Agglomerative Nesting** (AgNes).
1. Every data point starts as its own cluster. 
2. In each step, merge the two ‘closest' clusters.
3. Repeat step 2, until all points are merged in a single cluster.

**Divisive (Top-Down)**: <br> 
1. All data points start in one large cluster. 
2. In each step, divide the cluster into two halves.
3. Repeat step 2, until every point is its own cluster.

**Agglomerative Clustering Example:**
{{< imgproc "images/machine_learning/unsupervised/hierarchical_clustering/hierarchical_clustering/slide_05_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="Closeness of Clusters" >}}
- **Ward's Method**: 
  - Merges clusters to minimize the increase in the total within-cluster variance (sum of squared errors), resulting in compact, equally sized clusters.
- **Single Linkage (MIN)**: 
  - Uses the minimum distance between any two points in different clusters. 
  - Prone to creating long, ‘chain-like' 🔗 clusters, sensitive to outliers.
- **Complete Linkage (MAX)**: 
  - Uses the maximum distance between any two points in different clusters. 
  - Forms tighter, more spherical clusters, less sensitive to outliers than single linkage.
- **Average Linkage**: 
  - Combines clusters by the average distance between all points in two clusters, offering a compromise between single and complete linkage. 
  - A good middle ground, often overcoming limitations of single and complete linkage.
- **Centroid Method**: 
  - Merges clusters based on the distance between their centroids (mean points).

👉**Single Linkage** is **more** **sensitive to outlier** than **Complete Linkage**, as Single Linkage can keep linking to the closest point 
forming a bridge to outlier.

{{< imgproc "images/machine_learning/unsupervised/hierarchical_clustering/hierarchical_clustering/slide_07_01.png" Resize "1400x" >}}{{< /imgproc >}}

👉All cluster linkage distances.
{{< imgproc "images/machine_learning/unsupervised/hierarchical_clustering/hierarchical_clustering/slide_09_01.png" Resize "1400x" >}}{{< /imgproc >}}

👉We get different clustering using different linkages.
{{< imgproc "images/machine_learning/unsupervised/hierarchical_clustering/hierarchical_clustering/slide_10_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/ws2lhDgplVU" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/unsupervised/k_means/silhouette_score" >}}">Previous: Silhouette Score</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/unsupervised/dbscan/dbscan" >}}">Next: DBSCAN</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```
