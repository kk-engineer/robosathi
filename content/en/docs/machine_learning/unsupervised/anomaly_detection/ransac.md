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

{{< panel color="green" title="Use Case 🐝" >}}
⭐️Estimate the parameters of a model from a set of observed data that contains a significant number of **outliers**.
{{< /panel >}}

{{< panel color="cyan" title="Intuition 💡" >}}
👉Ordinary Least Squares use all data points to find a fit.
- However, a single outlier can '**pull**' the resulting line significantly, leading to a poor representative model.

💡If we pick a very _small random subset_ of points, there is a higher probability that this small subset contains only 
good data (**inliers**) compared to a large set.
{{< /panel >}}

{{< panel color="red" title="Problem 🦀" >}}
- Ordinary Least Squares (OLS) minimizes the Sum of Errors.
  - A huge outlier has an exponentially large impact on the final line.

{{< imgproc "images/machine_learning/unsupervised/anomaly_detection/ransac/slide_03_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Solution 🦉" >}}
💡Instead of using all points, iteratively pick the **smallest** possible random **subset** to fit a model, 
then check (**votes**) how many other points in the dataset '**agree**' with that model.

This gives the name to our algorithm:
- **Random**: Random subsets.
- **Sampling**: Small subsets.
- **Consensus**: Agreement with other points.
{{< /panel >}}

{{< panel color="blue" title="RANSAC Algorithm ⚙️" >}}
1. **Random Sampling**: 
   - Randomly select a **Minimal Sample Set (MSS)** of 'n' points from the input data 'D'. 
   - e.g. n=2 for a line, or n=3 for a plane in 3D.
2. **Model Fitting**: 
   - Compute the model parameters using only these 'n' points.
3. **Test**: 
   - For all other points in 'D', calculate the error relative to the model. 
   - 👉 Points with error < \(\tau\)(threshold) are added to the '**Consensus Set**'.
4. **Evaluate**: 
   - If the consensus set is larger than the previous best, save this model and set.
5. **Repeat** 🔁: 
   - Iterate 'k' times.
6. **Refine** (Optional): 
   - Once the best model is found, re-estimate it using all points in the final consensus set (usually via Least Squares) for a more precise fit.

👉**Example**:
{{< imgproc "images/machine_learning/unsupervised/anomaly_detection/ransac/slide_09_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="How Many Iterations ‘k’ ?" >}}
👉To ensure the algorithm finds a ‘clean’ sample set (no outliers) with a desired probability(often 99%), 
we use the following formula:
\[k=\frac{\log (1-P)}{\log (1-w^{n})}\]

- k: Number of iterations required.
- P: Probability that at least one random sample contains only inliers.
- w: Ratio of inliers in the dataset (number of inliers / total points).
- n: Number of points in the Minimal Sample Set.
{{< /panel >}}

{{< video "https://youtu.be/H9IfmU1mJzI" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/unsupervised/anomaly_detection/isolation_forest" >}}">Previous: Isolation Forest</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/unsupervised/dimensionality_reduction/pca" >}}">Next: PCA</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```