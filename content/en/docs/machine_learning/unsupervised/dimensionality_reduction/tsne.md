---
title: tSNE
description: tSNE
date: 2026-02-13
weight: 362
math: true
---

{{< panel color="blue" title="Use Case 🐝" >}}
- Visualizing complex datasets, such as MNIST handwritten digits, text embeddings, or biological data, where clusters are expected to form naturally.
{{< /panel >}}

{{< panel color="orange" title="Intuition 💡" >}}
- PCA preserves variance, not neighborhoods.
- t-SNE focuses 🔬on the ‘neighborhood' (local structure).
- Tries to keep points that are close together in high-dimensional space close together in low-dimensional space.
{{< /panel >}}

{{< panel color="green" title="t-SNE" >}}
- Non-linear dimensionality reduction technique to visualize high-dimensional data (like images, gene expressions, text embeddings) in a lower-dimensional space (typically 2D or 3D) by preserving local structures, making clusters and patterns visible.
{{< /panel >}}

{{< panel color="red" title="Problem 🦀" >}}
- 🗺️ Map high-dimensional points to low-dimensional points , such that the pairwise similarities are preserved, while solving the ‘crowding problem' (where points collapse into a single cluster).
{{< /panel >}}

{{< panel color="navy" title="Crowding 🦥 Problem" >}}
- Crowding 🦥 Problem
{{< imgproc "images/machine_learning/unsupervised/dimensionality_reduction/tsne/slide_05_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="Solution 🦉" >}}
- 📌 Convert Euclidean distances into conditional probabilities representing similarities.
- ⚖️ Minimize the divergence between the probability distributions of the high-dimensional (Gaussian) and low-dimensional (t-distribution) spaces.
- Note: Probabilistic approach to defining neighbors is the core ‘stochastic' element of the algorithm's name.
{{< /panel >}}

{{< panel color="orange" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/dimensionality_reduction/tsne/slide_07_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="High Dimensional Space 🚀(Gaussian)" >}}
- The similarity of datapoint to datapoint is the conditional probability, that would pick as its neighbor. Note: If neighbors are picked in proportion to their probability density under a Gaussian centered at .
- high: nearby points.
- low: widely separated points.Note: Make probabilities symmetric:
\[p_{j|i}=\frac{exp(-||x_{i}-x_{j}||^{2}/2\sigma_{i}^{2})}{\sum_{k≠i}exp(-||x_{i}-x_{k}||^{2}/2\sigma_{i}^{2})}\]
{{< /panel >}}

{{< panel color="red" title="Low Dimensional Space 🚀 (t-distribution)" >}}
- 🧠 To solve the crowding problem, we use a heavy-tailed 🦨 distribution (Student's-t distribution with degree of freedom ).
- Note: Heavier tail spreads out dissimilar points more effectively, allowing moderately distant points to be mapped further apart, preventing clusters from collapsing and ensuring visual separation and cluster distinctness.
\[q_{ij}=\frac{(1+||y_{i}-y_{j}||^{2})^{-1}}{\sum_{k≠l}(1+||y_{k}-y_{l}||^{2})^{-1}}\]
{{< /panel >}}

{{< panel color="navy" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/dimensionality_reduction/tsne/slide_10_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="Optimization 🕸️" >}}
- Measure the difference between the distributions and using the
- Kullback-Leibler (KL) divergence,
- which we aim to minimize:
\[C=KL(P||Q)=\sum_{i}\sum_{j}p_{ij}log\frac{p_{ij}}{q_{ij}}\]
{{< /panel >}}

{{< panel color="orange" title="Gradient Descent 🎢" >}}
- Use gradient descent to iteratively adjust the positions of the low-dimensional points .
- The gradient of the KL divergence is:
\[\frac{∂C}{∂y_{i}}=4\sum_{j≠i}(p_{ij}-q_{ij})(y_{i}-y_{j})(1+||y_{i}-y_{j}||^{2})^{-1}\]
{{< /panel >}}

{{< panel color="green" title="Meaning of Terms 🦧" >}}
- : t-SNE cost function (sum of all KL divergences).
- : coordinates of data points and in the low-dimensional space (typically 2D or 3D).
- : high-dimensional similarity (joint probability) between points and , calculated using a Gaussian distribution.
- : low-dimensional similarity (joint probability) between points and , calculated using a Student's t-distribution with one degree of freedom.
- : term comes from the heavy-tailed Student's t-distribution, which helps mitigate the ‘crowding problem' by allowing points that are moderately far apart to have a small attractive force.
{{< /panel >}}

{{< panel color="red" title="Interpretation 🦒" >}}
- The gradient can be understood as a force acting on each point in the low-dimensional map:
- Attractive forces: If is large ⬆️ and is small ⬇️ (meaning two points were close in the high-dimensional space but are far in the low-dimensional space), the term is positive, resulting in a strong attractive force pulling and closer.
- Repulsive forces: If is small ⬇️ and is large ⬆️ (meaning two points were far in the high-dimensional space but are close in the low-dimensional space), the term is negative, resulting in a repulsive force pushing and apart.
\[\frac{∂C}{∂y_{i}}=4\sum_{j≠i}(p_{ij}-q_{ij})(y_{i}-y_{j})(1+||y_{i}-y_{j}||^{2})^{-1}\]
{{< /panel >}}

{{< panel color="navy" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/dimensionality_reduction/tsne/slide_15_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="Update Step 🦒" >}}
- Update step of in low dimensions:
- Attractive forces ():The negative gradient moves opposite to the () vector, pulling it toward .
- Repulsive forces ():The negative gradient moves in the same direction as the () vector, pushing it away from .
\[y_{i}^{(t+1)}=y_{i}^{(t)}-η\frac{∂C}{∂y_{i}}\]
{{< /panel >}}

{{< panel color="orange" title="Perplexity 😵‍💫" >}}
- 🏘️ User-defined parameter that loosely relates to the effective number of neighbors.
- Note: Variance (Gaussian) is adjusted for each point to maintain a consistent perplexity.
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/dimensionality_reduction/tsne/slide_18_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/kVdMM51bfRM" >}}
<br><br>
```End of Section```