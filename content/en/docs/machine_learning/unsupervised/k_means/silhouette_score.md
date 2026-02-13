---
title: Silhouette Score
description: Silhouette Score
date: 2026-02-13
weight: 316
math: true
---

{{< panel color="blue" title="How to Evaluate Quality of Clustering?" >}}
- ✅ Elbow Method: Quickest to compute; good for initial EDA.
- ✅ Dunn Index: Focuses on the ‘gap' between the closest clusters.
- 👉 Silhouette Score: Balances compactness and separation.
- 👉 Domain specific knowledge and system constraints.
{{< /panel >}}

{{< panel color="orange" title="Silhouette Score [-1, 1]" >}}
- Clustering quality evaluation metric that measures how similar a data point is to its own cluster (cohesion) compared to other clusters (separation).
- Note: Higher scores (closer to 1) indicate better-defined, distinct clusters, while scores near 0 suggest overlapping clusters, and negative scores mean points might be in the wrong cluster.
{{< /panel >}}

{{< panel color="green" title="Silhouette Score Formula" >}}
- Silhouette score for point ‘i' is the difference between separation b(i) and cohesion a(i), normalized by the larger of the two.
- Note: The Global Silhouette Score is simply the mean of s(i) for all points in the dataset.
\[s(i)=\frac{b(i)-a(i)}{max(a(i),b(i))}\]
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/k_means/silhouette_score/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/k_means/silhouette_score/slide_05_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="Cohesion" >}}
- (Cohesion):
- Average distance between point 'i' and all other points in the same cluster.
- Note: Lower means the point is well-matched to its own cluster.
\[a(i)=\frac{1}{|C_{A}|-1}\sum_{j∈C_{A},i≠j}d(i,j)\]
{{< /panel >}}

{{< panel color="orange" title="Separation" >}}
- (Separation):
- Average distance between point 'i' and all points in the nearest neighboring cluster (the cluster that 'i' is not a part of, but is closest to).
- Note: Higher b(i) means the point is very far from the next closest cluster.
\[b(i)=min_{C_{B}≠C_{A}}\frac{1}{|C_{B}|}\sum_{j∈C_{B}}d(i,j)\]
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/k_means/silhouette_score/slide_08_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/k_means/silhouette_score/slide_09_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Geometric Interpretation" >}}
- ⛳️ Like K-Means, the Silhouette Score (when using Euclidean distance) assumes convex clusters.
- 🌘 If we use it on ‘Moon' shaped clusters, it will give a low score even if the clusters are perfectly separated, because the ‘average distance' to a neighbor might be small due to the curvature of the manifold.
{{< /panel >}}

{{< panel color="blue" title="Silhouette Score Comparison" >}}
- Silhouette Score Comparison
{{< imgproc "images/machine_learning/unsupervised/k_means/silhouette_score/slide_11_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Text" >}}
\[[0,\infty)\]
{{< /panel >}}

{{< video "https://youtu.be/bO2JpjmgKHM" >}}
<br><br>
```End of Section```