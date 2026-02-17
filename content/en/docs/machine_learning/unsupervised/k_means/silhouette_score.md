---
title: Silhouette Score
description: Silhouette Score
date: 2026-02-14
weight: 316
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxddB_on_ZQ0pzP6C6gRHR_i" 
"K Means Clustering | All Videos" >}}

<br>

{{< panel color="blue" title="How to Evaluate Quality of Clustering?" >}}
- ✅ **Elbow Method**: Quickest to compute; good for initial EDA.
- ✅ **Dunn Index**: Focuses on the ‘gap' between the closest clusters.
<br>------- We have seen the above 2 methods in the previous section ----------
- 👉 **Silhouette Score**: Balances compactness and separation.
- 👉 _Domain specific knowledge and system constraints_.
{{< /panel >}}

{{< panel color="orange" title="Silhouette Score [-1, 1]" >}}
⭐️Clustering quality evaluation metric that measures how **similar** a data point is to its **own cluster** (**cohesion**) 
**compared** to **other clusters** (**separation**).

**Note**: Higher scores (closer to 1) indicate better-defined, distinct clusters, while scores near 0 suggest overlapping clusters, and negative scores mean points might be in the wrong cluster.
{{< /panel >}}

{{< panel color="green" title="Silhouette Score Formula" >}}
Silhouette score for point ‘i' is the difference between **separation** b(i) and **cohesion** a(i), normalized by the larger of the two.
\[ s(i) = \frac{b(i) - a(i)}{\max(a(i), b(i))} \]

**Note**: The Global Silhouette Score is simply the mean of s(i) for all points in the dataset.

👉**Example** for Silhouette Score:
{{< imgproc "images/machine_learning/unsupervised/k_means/silhouette_score/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}

👉**Example** for Silhouette Score of **0**(Border Point) and **negative**(Wrong Cluster).
{{< imgproc "images/machine_learning/unsupervised/k_means/silhouette_score/slide_05_01.png" Resize "1400x" >}}{{< /imgproc >}}

🦉Now let's understand the terms in Silhouette Score in detail.
{{< /panel >}}

{{< panel color="blue" title="Cohesion a(i)" >}}
**Average distance** between point 'i' and all other points in the **same cluster**.
\[a(i) = \frac{1}{|C_A| - 1} \sum_{j \in C_A, i \neq j} d(i, j)\]
**Note**: **Lower a(i)** means the point is **well-matched** to its own cluster.
{{< /panel >}}

{{< panel color="orange" title="Separation b(i)" >}}
Average distance between point 'i' and all points in the nearest neighboring cluster (the cluster that 'i' is not a part of, but is closest to).
\[b(i) = \min_{C_B \neq C_A} \frac{1}{|C_B|} \sum_{j \in C_B} d(i, j)\]
**Note**: **Higher b(i)** means the point is very **far** from the **next closest cluster**.
{{< /panel >}}

{{< panel color="grey" title="Silhouette Plot" >}}
⭐️A silhouette plot is a graphical tool used to evaluate the quality of clustering algorithms (like K-Means), 
showing how well each data point fits within its cluster.

👉Each bar gives the average silhouette score of the points assigned to that cluster.
{{< imgproc "images/machine_learning/unsupervised/k_means/silhouette_score/slide_09_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Geometric Interpretation" >}}
- ⛳️ Like K-Means, the Silhouette Score (when using Euclidean distance) **assumes convex clusters**.
- 🌘 If we use it on **'Moon' shaped clusters**, it will give a **low score** even if the clusters are perfectly separated, 
because the '**average distance**' to a **neighbor** might be small due to the **curvature** of the manifold.
{{< imgproc "images/machine_learning/unsupervised/k_means/silhouette_score/slide_11_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Silhouette Score Vs Dunn Index" >}}
{{< imgproc "images/machine_learning/unsupervised/k_means/silhouette_score/silhouette_score_vs_dunn_index.png" Resize "1400x" >}}{{< /imgproc >}}

**Choose Silhouette Score if:** <br>
✅ Need a human-interpretable metric to present to stakeholders. <br>
✅ Dealing with real-world noise and overlapping ‘fuzzy’ boundaries. <br>
✅ Want to see which specific clusters are weak (using the plot). <br>

**Choose Dunn Index if:** <br>
✅ Performing ‘Hard Clustering’ where separation is a safety or business requirement. <br>
✅ Data is pre-cleaned of outliers (e.g., in a curated embedding space). <br>
✅ Need to compare different clustering algorithms (e.g., K-Means vs. DBSCAN) on a high-integrity task. <br>
{{< /panel >}}

{{< video "https://youtu.be/bO2JpjmgKHM" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/unsupervised/k_means/clustering_quality_metrics" >}}">Previous: Clustering Quality Metrics</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/unsupervised/hierarchical_clustering/hierarchical_clustering" >}}">Next: Hierarchical Clustering</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```