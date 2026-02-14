---
title: KNN Intro
description: KNN Intro
date: 2026-02-14
weight: 231
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxf8kijzBo00irrF7JhvNwhZ" 
"K Nearest Neighbors (KNN) | All Videos" >}}

<br>

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/k_nearest_neighbors/knn_intro/slide_01_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Issues with Linear/Logistic Regression" >}}
- Parametric models:
- Rely on assumption that relationships between data points are linear.
- For polynomial regression we need to find the degree of polynomial.
- Training: We need to train 🏃‍♂️the model for prediction.
{{< /panel >}}

{{< panel color="green" title="KNN Dataset" >}}
- KNN Dataset
{{< imgproc "images/machine_learning/supervised/k_nearest_neighbors/knn_intro/slide_03_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="K Nearest Neighbors" >}}
- Simple: Intuitive way to classify data or predict values by finding similar existing data points (neighbors).
- Non-Parametric: Makes no assumptions about the underlying data distribution.
- No Training Required: KNN is a ‘lazy learner', it does not require a formal training 🏃‍♂️ phase.
{{< /panel >}}

{{< panel color="navy" title="KNN Algorithm" >}}
- Given a query point and a dataset, D = { }, the algorithm finds a set of ‘k' nearest neighbors .
- Inference:
- Choose a value of ‘k'(hyper-parameter); odd number.
- Calculate distance (Euclidean, Cosine etc.) between and every point in dataset and store in a distance list.
- Sort the distance list in ascending order; choose top ‘k' data points.
- Make prediction:
- Classification: Take majority vote of ‘k' nearest neighbors and assign label.
- Regression: Take the mean/median of ‘k' nearest neighbors. Note: Store entire dataset.
{{< /panel >}}

{{< panel color="blue" title="Time & Space Complexity" >}}
- Storing Data
- SC 🌌: O(nd)
- Inference:
- TC ⏰: O(nd + nlogn)
- Distance to all 'n' points in ‘d' dimensions: O(nd)
- Sorting all 'n' data points : O(nlogn)
- Note: Brute force 🔨 KNN is unacceptable when 'n' is very large, say billions.
{{< /panel >}}

{{< video "https://youtu.be/Ar53hEidonc" >}}
<br><br>
```End of Section```