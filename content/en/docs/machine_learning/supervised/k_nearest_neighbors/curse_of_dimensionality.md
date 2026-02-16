---
title: Curse Of Dimensionality
description: Curse Of Dimensionality
date: 2026-02-14
weight: 233
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxf8kijzBo00irrF7JhvNwhZ" 
"K Nearest Neighbors (KNN) | All Videos" >}}

<br>

{{< panel color="blue" title="Euclidean Distance" >}}
While Euclidean distance(L norm) is the most frequently discussed, **‘Curse of Dimensionality'** impacts all Minkowski norms (\(L_p\))
\[L_p = (\sum |x_i|^p)^{\frac{1}{p}} \]

**Note**: ‘Curse of Dimensionality' is largely a function of the exponent (p) in the distance calculation.
{{< /panel >}}

{{< panel color="red" title="Issues with High Dimensional Data" >}}
Coined 🪙 by mathematician **John Bellman** in the 1960s while studying _dynamic programming_.

High dimensional data created following challenges:
- Distance Concentration
- Data Sparsity
- Exponential Sample Requirement
{{< /panel >}}

{{< panel color="grey" title="Distance Concentration" >}}
💡Consider a hypercube in d-dimensions of side length = 1; Volume = \(1^d\) = 1 <br>
🧊 A smaller inner cube with side length = 1 - \(\epsilon\) ; Volume = \((1 -\epsilon)^d\) <br>
\[\lim_{d \rightarrow \infty} (1 - \epsilon)^d = 0\]
🧐 This implies that almost all the volume of the high-dimensional cube lies near the ‘crust'. <br>
👉e.g: if \(\epsilon\)= 0.01, d = 500; Volume of inner cube = \((1 -0.01)^{500}\) = \(0.99^{500}\) = 0.006 = 0.6% <br>
🤔Consequently, all points become **nearly equidistant**, and the concept of ‘**nearest**' or ‘**neighborhood**' **loses** 
its meaning.

{{< /panel >}}

{{< panel color="navy" title="Data Sparsity" >}}
⭐️The volume of the feature space increases exponentially with each added dimension.

👉To maintain the same data density found in a 1D space with 10 points, we would need \(10^{10}\)(10 billion) points in 10D space.

💡Because real-world datasets are rarely this large, the data becomes "sparse," making it difficult to find truly similar neighbors.
{{< /panel >}}

{{< panel color="orange" title="Exponential Sample Requirement" >}}
⭐️To maintain a reliable result, the amount of training data needed must grow exponentially with the number of dimensions.

👉Without this growth, the model is highly prone to overfitting, where it learns from noise in the ‘sparse’ data 
rather than actual underlying patterns.

**Note**: For modern embeddings (often 768 or 1536 dimensions), it is mathematically impossible to collect enough data 
to ‘fill’ the space.
{{< /panel >}}

{{< panel color="green" title="Solution" >}}
- Cosine Similarity
- Normalization
{{< /panel >}}

{{< panel color="navy" title="Cosine Similarity" >}}
Cosine similarity measures the **cosine** of the angle between 2 vectors.
\[\text{cos}(\theta) = \frac{A \cdot B}{\|A\|\|B\|} = \frac{\sum_{i=1}^{D} A_i B_i}{\sqrt{\sum_{i=1}^{D} A_i^2} \sqrt{\sum_{i=1}^{D} B_i^2}}\]

**Note**: Cosine similarity **mitigates** the ‘curse of dimensionality" problem.
{{< /panel >}}

{{< panel color="blue" title="Normalization" >}}
⭐️Normalize the vector, i.e, make its length =1, a unit vector.

💡By normalizing, we project all points onto the surface of a unit hypersphere.
- We are no longer searching in the ‘empty' high-dimensional volume of a hypercube.
- Now, we are searching on a constrained manifold (the shell).

**Note**: By normalizing, we move the data from the volume of the D-dimensional space onto the surface of a (D-1)-dimensional hypersphere.

**Euclidean Distance Squared of Normalized Vectors:**
\[
\begin{align*}
\|A - B\|^2 &= (A - B) \cdot (A - B) \\
&= \|A\|^2 + \|B\|^2 - 2(A \cdot B)\\
\because \|A\| &= \|B\| = 1 \\
\|A - B\|^2 &= 1 + 1 - 2\cos(\theta) \\
\therefore \|A - B\|^2 &= 2(1 - \cos(\theta))\\
\end{align*}
\]

**Note**: This formula proves that **maximizing** _‘Cosine similarity’_ is identical to 
**minimizing** _‘Euclidean distance’_ on the hypersphere.
{{< /panel >}}

{{< video "https://youtu.be/a2YAgbITuQM" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/k_nearest_neighbors/knn_optimizations" >}}">Previous: KNN Optimizations</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/k_nearest_neighbors/bias_variance_tradeoff" >}}">Next: Bias Variance Tradeoff</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```