---
title: Curse Of Dimensionality
description: Curse Of Dimensionality
date: 2026-02-13
weight: 233
math: true
---

{{< panel color="blue" title="Euclidean Distance" >}}
- While Euclidean distance(L norm) is the most frequently discussed, ‘Curse of Dimensionality' impacts all Minkowski norms (L)
- L=
- Note: ‘Curse of Dimensionality' is largely a function of the exponent (p) in the distance calculation.
{{< /panel >}}

{{< panel color="orange" title="Issues with High Dimensional Data" >}}
- Coined 🪙 by mathematician John Bellman in the 1960s while studying dynamic programming.
- High dimensional data created following challenges:
- Distance Concentration
- Data Sparsity
- Exponential Sample Requirement
{{< /panel >}}

{{< panel color="green" title="Distance Concentration" >}}
- 💡Consider a hypercube in d-dimensions of side length = 1; Volume = 1 = 1
- 🧊 A smaller inner cube with side length = 1 - ; Volume = (1 - )
- 🧐 This implies that almost all the volume of the high-dimensional cube lies near the ‘crust'.
- 👉e.g: if = 0.01, d = 500; Volume of inner cube = (1 - 0.01) = 0.99 = 0.006 = 0.6%
- 🤔Consequently, all points become nearly equidistant, and the concept of ‘nearest' or ‘neighborhood' loses its meaning.
\[lim_{d→\infty}(1-ϵ)^{d}=0\]
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/k_nearest_neighbors/curse_of_dimensionality/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Data Sparsity" >}}
- The volume of the feature space increases exponentially with each added dimension.
- To maintain the same data density found in a 1D space with 10 points, we would need 10 (10B) points in 10D space.
- Because real world datasets are rarely this large, the data becomes ‘sparse' making it difficult to find truly similar neighbors.
- 1
- 0(10 billion) points in a 10D space. Because real-world datasets are rarely this large, the data becomes "sparse," making it difficult to find truly similar neighbors.
{{< /panel >}}

{{< panel color="blue" title="Exponential Sample Requirement" >}}
- T t1
- 0(10 billion) points in a 10D space. Because real-world datasets are rarely this large, the data becomes "sparse," making it difficult to find truly similar neighbors.
- To maintain a reliable result, the amount of training data needed must grow exponentially with the number of dimensions.
- Without this growth, the model is highly prone to overfitting, where it learns from noise in the ‘sparse' data rather than actual underlying patterns.
- Note: For modern embeddings (often 768 or 1536 dimensions), it is mathematically impossible to collect enough data to ‘fill' the space.
{{< /panel >}}

{{< panel color="orange" title="Cosine Similarity" >}}
- Cosine similarity measures the cosine of the angle between 2 vectors.
- Note: Cosine similarity mitigates the ‘curse of dimensionality" problem.
\[cos(\theta)=\frac{A⋅B}{∥A∥∥B∥}=\frac{\sum_{i=1}^{D}A_{i}B_{i}}{\sqrt{\sum_{i=1}^{D}A_{i}^{2}}\sqrt{\sum_{i=1}^{D}B_{i}^{2}}}\]
{{< /panel >}}

{{< panel color="green" title="Normalization" >}}
- Normalize the vector, i.e, make its length =1, a unit vector.
- By normalizing, we project all points onto the surface of a unit hypersphere.
- We are no longer searching in the ‘empty' high-dimensional volume of a hypercube.
- Now, we are searching on a constrained manifold (the shell).
- Note: By normalizing, we move the data from the volume of the D-dimensional space onto the surface of a (D-1)-dimensional hypersphere.
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/k_nearest_neighbors/curse_of_dimensionality/slide_09_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Euclidean Distance Squared of Normalized Vectors" >}}
- Note: This formula proves that maximizing ‘Cosine similarity' is identical to minimizing ‘Euclidean distance' on the hypersphere.
\[∥A-B∥^{2}=(A-B)⋅(A-B) \\ =∥A∥^{2}+∥B∥^{2}-2(A⋅B) \\ ∵∥A∥=∥B∥=1 \\ ∥A-B∥^{2}=1+1-2cos(\theta) \\ ∴∥A-B∥^{2}=2(1-cos(\theta))\]
{{< /panel >}}

{{< video "https://youtu.be/a2YAgbITuQM" >}}
<br><br>
```End of Section```