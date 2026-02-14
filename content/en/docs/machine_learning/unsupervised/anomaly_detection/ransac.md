---
title: RANSAC
description: RANSAC
date: 2026-02-14
weight: 356
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxcQTrzlCVhQOtpvVbWsft3a" 
"Anomaly Detection | All Videos" >}}

<br>

{{< panel color="blue" title="Use Case 🐝" >}}
- Estimate the parameters of a model from a set of observed data that contains a significant number of outliers.
{{< /panel >}}

{{< panel color="orange" title="Intuition 💡" >}}
- Ordinary Least Squares use all data points to find a fit.
- However, a single outlier can ‘pull' the resulting line significantly, leading to a poor representative model.
- If we pick a very small random subset of points, there is a higher probability that this small subset contains only good data (inliers) compared to a large set.
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/anomaly_detection/ransac/slide_03_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Problem 🦀" >}}
- Ordinary Least Squares (OLS) minimizes the Sum of Errors.
- A huge outlier has an exponentially large impact on the final line.
{{< /panel >}}

{{< panel color="navy" title="Solution 🦉" >}}
- Instead of using all points, iteratively pick the smallest possible random subset to fit a model, then check (votes) how many other points in the dataset ‘agree' with that model.
{{< /panel >}}

{{< panel color="blue" title="RANSAC Algorithm ⚙️" >}}
- Random Sampling: Randomly select a Minimal Sample Set (MSS) of 'n' points from the input data 'D'. e.g. n=2 for a line, or n=3 for a plane in 3D.
- Model Fitting: Compute the model parameters using only these 'n' points.
- Test: For all other points in 'D', calculate the error relative to the model. 👉 Points with error < (threshold) are added to the Consensus Set.
{{< /panel >}}

{{< panel color="orange" title="RANSAC Algorithm ⚙️ (Continued)" >}}
- Evaluate: If the consensus set is larger than the previous best, save this model and set.
- Repeat 🔁: Iterate ‘k' times.
- Refine (Optional): Once the best model is found, re-estimate it using all points in the final consensus set (usually via Least Squares) for a more precise fit.
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/anomaly_detection/ransac/slide_08_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="RANSAC Example" >}}
- RANSAC Example
{{< imgproc "images/machine_learning/unsupervised/anomaly_detection/ransac/slide_09_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/H9IfmU1mJzI" >}}
<br><br>
```End of Section```