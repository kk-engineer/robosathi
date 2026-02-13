---
title: UMAP
description: UMAP
date: 2026-02-13
weight: 363
math: true
---

{{< panel color="blue" title="Use Case 🐝" >}}
- Visualizing massive datasets where t-SNE is too slow 🐢.
- Creating robust low-dimensional inputs for subsequent machine learning models.
{{< /panel >}}

{{< panel color="orange" title="🌏 → 🗺️" >}}
- Globe ➡ Map
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/dimensionality_reduction/umap/slide_03_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Intuition 💡" >}}
- Using a world map 🗺️ (2D)instead of globe 🌍 for spherical(3D) earth 🌏.
- It preserves the neighborhood relationships of countries (e.g., India is next to China), and to a good degree, the global structure.
{{< /panel >}}

{{< panel color="navy" title="UMAP" >}}
- Non-linear dimensionality reduction technique to visualize high-dimensional data (like images, gene expressions) in a lower-dimensional space (typically 2D or 3D), preserving its underlying structure and relationships.
- Constructs a high-dimensional graph of data points and then optimizes a lower-dimensional layout to closely match this graph, making complex datasets understandable by revealing patterns, clusters, and anomalies.
- Note: Similar to t-SNE but often faster and better at maintaining global structure.
{{< /panel >}}

{{< panel color="blue" title="Problem 🦀" >}}
- Create a low-dimensional representation that preserves the topological connectivity and manifold structure of the high-dimensional data efficiently.
{{< /panel >}}

{{< panel color="orange" title="Solution 🦉" >}}
- Create a weighted graph (fuzzy simplicial set) representing the data's topology and then find a low-dimensional graph that is as structurally similar as possible.
- Note: Fuzzy means instead of 0/1 we use weights[0,1] for each edge.
{{< /panel >}}

{{< panel color="green" title="High Dimensional Graph (Manifold Approximation)" >}}
- UMAP determines local connectivity based on a user-defined number of neighbors (n_neighbors).
- Normalizes distances locally using the distance to the nearest neighbor () and a scaling factor () adjusted to enforce local connectivity constraints.
- The weight (fuzzy similarity) in high-dimensional space is:
- Note: This ensures that the closest point always gets a weight of 1, preserving local structure.
\[W_{ij}=exp-\frac{max(0,∥x_{i}-x_{j}∥-ρ_{i})}{\sigma_{i}}\]
{{< /panel >}}

{{< panel color="red" title="Low Dimensional Space (Optimization)" >}}
- In the low-dimensional space (e.g., 2D), UMAP uses a simple curve (similar to the t-distribution used in t-SNE) for edge weights:
- Note: The parameters and are typically fixed based on the ‘min_dist' user parameter (min_dist = 0.1, then a≈1,577, b≈0.895).
\[Z_{ij}=(1+a∥y_{i}-y_{j}∥^{2b})^{-1}\]
{{< /panel >}}

{{< panel color="navy" title="Optimization" >}}
- Unlike t-SNE's KL divergence, UMAP minimizes the cross-entropy between the high-dimensional weights and the low-dimensional weights .
- Cost 💰 Function (C):
\[C=\sum_{i,j}W_{ij}log\frac{W_{ij}}{Z_{ij}}+(1-W_{ij})log\frac{1-W_{ij}}{1-Z_{ij}}\]
{{< /panel >}}

{{< panel color="blue" title="Cross Entropy Loss" >}}
- Cost 💰 Function (C):
- Goal 🎯 : Reduce overall Cross Entropy Loss.
- Attractive Force: high; make high to make the term small.
- Repulsive Force: low; make low to make the term small.
- Note: This push and pull of 2 ‘forces' will make the data in low dimensions settle into a position that is overall a good representation of the original data in higher dimensions.
\[C=\sum_{i,j}W_{ij}log\frac{W_{ij}}{Z_{ij}}+(1-W_{ij})log\frac{1-W_{ij}}{1-Z_{ij}}\]
{{< /panel >}}

{{< panel color="orange" title="Stochastic Gradient Descent" >}}
- Optimization uses stochastic gradient descent (SGD) to minimize this cross-entropy, balancing attractive forces (edges present in high-dimension, ) and repulsive forces (edges absent in high-dimension, ).
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/dimensionality_reduction/umap/slide_13_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Drawbacks 🦂" >}}
- Mathematically complex.
- Requires tuning (n_neighbors, min_dist).
{{< /panel >}}

{{< video "https://youtu.be/zmHRMXY0VJ0" >}}
<br><br>
```End of Section```