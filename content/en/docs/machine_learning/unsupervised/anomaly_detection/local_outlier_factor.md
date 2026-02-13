---
title: Local Outlier Factor
description: Local Outlier Factor
date: 2026-02-13
weight: 354
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxcQTrzlCVhQOtpvVbWsft3a" 
"Anomaly Detection | All Videos" >}}

<br>

{{< panel color="blue" title="Use Case 🐝" >}}
- Geographic fraud detection:
- A $100 transaction might be ‘normal' in New York but an ‘outlier' in a small rural village.
{{< /panel >}}

{{< panel color="orange" title="Intuition 💡" >}}
- 🦎 ‘Local context matters.'
- Global distance metrics fail when density is non-uniform.
- 🦄 An outlier is a point that is ‘unusual' relative to its immediate neighbors, regardless of how far it is from the center of the entire dataset.
{{< /panel >}}

{{< panel color="green" title="Problem 🦀" >}}
- Traditional distance-based outlier detection methods, such as, KNN, often struggle with datasets where data is clustered at varying densities.
- A point in a sparse region might be considered an outlier by a global method, even if it is a normal part of that sparse cluster.
- Conversely, a point very close to a dense cluster might be an outlier relative to that specific neighborhood.
{{< /panel >}}

{{< panel color="red" title="Solution 🦉" >}}
- Calculate the relative density of a point compared to its immediate neighborhood.
- e.g. If the neighbors are in a dense crowd and the point is not, it is an outlier.
{{< /panel >}}

{{< panel color="navy" title="Goal 🎯" >}}
- Compare the density of a point to the density of its neighbors.
{{< /panel >}}

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/anomaly_detection/local_outlier_factor/slide_06_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Local Outlier Factor (LOF)" >}}
- Local Outlier Factor (LOF) is a density-based algorithm designed to detect anomalies by measuring the local deviation of a data point relative to its neighbors.
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/anomaly_detection/local_outlier_factor/slide_08_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="LOF Score Calculation 🔢" >}}
- K-Distance ():The distance from point ‘' to its nearest neighbor.
- Reachability Distance ():: actual Euclidean distance between ‘‘ and ‘'.This acts as ‘smoothing' factor.If point ‘' is very close to ‘' (inside 's -neighborhood), round up distance to .
{{< /panel >}}

{{< panel color="navy" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/anomaly_detection/local_outlier_factor/slide_10_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="LOF Score Calculation 🔢 (Continued…)" >}}
- Local Reachability Density ():The inverse of the average reachability distance from ‘' to its -neighbors ().
- High LRD: Neighbors are very close; the point is in a dense region.
- Low LRD: Neighbors are far away; the point is in a sparse region.
- Local Outlier Factor (): The ratio of the average ‘' of 's neighbors to 's own ‘'.
{{< /panel >}}

{{< panel color="orange" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/anomaly_detection/local_outlier_factor/slide_12_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/8W3mTEKTORg" >}}
<br><br>
```End of Section```