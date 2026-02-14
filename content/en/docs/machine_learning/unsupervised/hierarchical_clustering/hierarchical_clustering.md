---
title: Hierarchical Clustering
description: Hierarchical Clustering
date: 2026-02-14
weight: 321
math: true
---

{{< panel color="blue" title="Issues with K-Means" >}}
- 🤷 We might not know in advance the number of distinct clusters ‘k' in the dataset.
- 🕸️ Also, sometimes the dataset may contain a nested structure or some inherent hierarchy, such as, file system, organizational chart, biological lineages, etc.
{{< /panel >}}

{{< panel color="orange" title="Hierarchical Clustering" >}}
- 🌌 Method of cluster analysis that seeks to build a hierarchy of clusters, resulting in a tree like structure called dendrogram.
- Hierarchical clustering allows us to explore different possibilities (of ‘k') by cutting the dendrogram at various levels.
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/hierarchical_clustering/hierarchical_clustering/slide_03_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="2 Philosophies" >}}
- Agglomerative (Bottom-Up): Most common, also known as Agglomerative Nesting (AgNes).1. Every data point starts as its own cluster. 2. In each step, merge the two ‘closest' clusters.3. Repeat step 2, until all points are merged in a single cluster.
- Divisive (Top-Down)1. All data points start in one large cluster. 2. In each step, divide the cluster into two halves.3. Repeat step 2, until every point is its own cluster.
{{< /panel >}}

{{< panel color="navy" title="Agglomerative Clustering" >}}
- Agglomerative Clustering
{{< imgproc "images/machine_learning/unsupervised/hierarchical_clustering/hierarchical_clustering/slide_05_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="Closeness of Clusters 🌌" >}}
- Ward's Method: Merges clusters to minimize the increase in the total within-cluster variance (sum of squared errors), resulting in compact, equally sized clusters.
- Single Linkage (MIN): Uses the minimum distance between any two points in different clusters. Prone to creating long, ‘chain-like' 🔗 clusters, sensitive to outliers.
- Complete Linkage (MAX): Uses the maximum distance between any two points in different clusters. Forms tighter, more spherical clusters, less sensitive to outliers than single linkage.
{{< /panel >}}

{{< panel color="orange" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/hierarchical_clustering/hierarchical_clustering/slide_07_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Closeness of Clusters 🌌 (Continued)" >}}
- Average Linkage: Combines clusters by the average distance between all points in two clusters, offering a compromise between single and complete linkage. A good middle ground, often overcoming limitations of single and complete linkage.
- Centroid Method: Merges clusters based on the distance between their centroids (mean points).
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/hierarchical_clustering/hierarchical_clustering/slide_09_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/hierarchical_clustering/hierarchical_clustering/slide_10_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/ws2lhDgplVU" >}}
<br><br>
```End of Section```