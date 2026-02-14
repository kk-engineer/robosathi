---
title: Isolation Forest
description: Isolation Forest
date: 2026-02-14
weight: 355
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxcQTrzlCVhQOtpvVbWsft3a" 
"Anomaly Detection | All Videos" >}}

<br>

{{< panel color="blue" title="Use Case 🐝" >}}
- 'Large scale tabular data.'
- Credit card fraud detection in datasets with millions of rows and hundreds of features.
- Note: Supervised learning requires balanced, labeled datasets (normal vs. anomaly), which are rarely available in real-world scenarios like fraud or cyber-attacks.
{{< /panel >}}

{{< panel color="orange" title="Intuition 💡" >}}
- 🦥 'Flip the logic.'
- 🦄 ‘Anomalies' are few and different, so they are much easier to isolate from the rest of the data than normal points.
{{< /panel >}}

{{< panel color="green" title="Problem 🦀" >}}
- 🐦‍🔥 ‘Curse of dimensionality.'
- 🐎 Distance based (K-NN), and density based (LOF) algorithms require calculation of distance between all pair of points.
- 🐙 As the number of dimensions and data points grows, these calculations become exponentially more expensive 💰 and less effective.
{{< /panel >}}

{{< panel color="red" title="Solution 🦉" >}}
- Use a tree-based 🌲 approach with better time ⏰ complexity O(nlogn), making it highly scalable for massive datasets and robust in high-dimensional spaces 🚀without needing expensive distance metrics.
{{< /panel >}}

{{< panel color="navy" title="Goal 🎯" >}}
- 🐒 ‘Randomly partition the data.'
- 🦄 If a point is an outlier, it will take fewer partitions (splits) to isolate it into a leaf 🍃 node compared to a point that is buried deep within a dense cluster of normal data.
{{< /panel >}}

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/anomaly_detection/isolation_forest/slide_06_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Isolation Forest (iForest) 🌲🌳" >}}
- 🌳Isolation Forest uses an ensemble of
- ‘Isolation Trees' (iTrees) 🌲.iTree (Isolation Tree) 🌲 is a proper binary tree structure specifically designed to separate individual data points through random recursive partitioning.
{{< /panel >}}

{{< panel color="green" title="Algorithm ⚙️" >}}
- Sub-sampling: Select a random subset of data (typically 256 instances) to build an iTree.
- Tree Construction:Randomly select a feature.
- Randomly select a split value between the minimum and maximum values of that feature.
- Divide the data into two branches based on this split.
- Repeat recursively until the point is isolated or a height limit is reached.
{{< /panel >}}

{{< panel color="red" title="Algorithm ⚙️(Continued)" >}}
- Forest Creation: Repeat 🔁 the process to create 'N' trees (typically 100).
- Inference: Pass a new data point through all trees, calculate the average path length, and compute the anomaly score.
{{< /panel >}}

{{< panel color="navy" title="Scoring Function 📟" >}}
- 🦄 Assign an anomaly score based on the path length h(x) required to isolate a point ‘'.
- Path Length (): The number of edges ‘' traverses from the root node to a leaf node.
- Average Path Length (): Since iTrees are structurally similar to Binary Search Trees (BST), the average path length for a dataset of size ‘':
- where, is the harmonic number, estimated as (Euler's constant).
{{< /panel >}}

{{< panel color="blue" title="🦄 Anomaly Score" >}}
- 🦄 Anomaly Score ():
- To normalize the score between 0 and 1:
- : is the average path length of across a forest of trees 🌲.
- : Point is an anomaly; Path length is very short.
- : Point is normal, path length approximately equal to c(n).
- : Point is normal; deeply buried point, path length is much larger than c(n).
{{< /panel >}}

{{< panel color="orange" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/anomaly_detection/isolation_forest/slide_12_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/HWCGTUlNgzI" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/unsupervised/anomaly_detection/local_outlier_factor" >}}">Previous: Local Outlier Factor</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/unsupervised/anomaly_detection/ransac" >}}">Next: RANSAC</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```