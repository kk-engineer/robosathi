---
title: Elliptic Envelope
description: Elliptic Envelope
date: 2026-02-13
weight: 352
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxcQTrzlCVhQOtpvVbWsft3a" 
"Anomaly Detection | All Videos" >}}

<br>

{{< panel color="blue" title="Use Case 🐝" >}}
- Detect anomalies in multivariate Gaussian data, such as, biometric data (height/weight) where features are normally distributed and correlated.
- Assumption: The data can be modeled by a Gaussian distribution.
{{< /panel >}}

{{< panel color="orange" title="Intuition 💡" >}}
- In a normal distribution, most data points cluster around the mean, and the probability density decreases as we move farther away from the center.
{{< /panel >}}

{{< panel color="green" title="Multivariate Gaussian" >}}
- Multivariate Gaussian
{{< imgproc "images/machine_learning/unsupervised/anomaly_detection/elliptic_envelope/slide_03_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Issue with Euclidean Distance 🐲" >}}
- 🌍 Euclidean distance measures the simple straight-line distance from the center of the cloud.
- If the data is spherical, this works fine.
- 🦕 However, real-world data is often stretched or skewed (e.g., taller people are generally heavier), due to correlations between variables, forming an elliptical shape.
{{< /panel >}}

{{< panel color="navy" title="Feature Covariance" >}}
- Feature Covariance
{{< imgproc "images/machine_learning/unsupervised/anomaly_detection/elliptic_envelope/slide_05_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="Mahalanobis Distance (Solution)" >}}
- Mahalanobis distance essentially re-scales the data so that the elliptical distribution appears spherical, and then measures the Euclidean distance in that transformed space.
- This way, it measures how many standard deviations() away a point is from the mean, considering the data's spread and correlation (covariance).
\[D_{M}(x)=\sqrt{(x-\mu)^{T}\Sigma^{-1}(x-\mu)}\]
{{< /panel >}}

{{< panel color="orange" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/anomaly_detection/elliptic_envelope/slide_07_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Problem 🦀" >}}
- Standard methods (like Z-score ) fail because they are easily skewed by the outliers they are trying to find.
{{< /panel >}}

{{< panel color="red" title="Solution 🦉" >}}
- Instead of using all data, we find a ‘clean' subset of the data that is most tightly packed and use only that subset to define the ‘normal' ellipse.
{{< /panel >}}

{{< panel color="navy" title="Goal 🎯" >}}
- 🏇Find the most dense core of the data.
- 🦣 Determinant of covariance matrix represents the volume of the ellipsoid.
- ⏲️ Therefore, minimize to find the tight core.
- 👉
\[D_{M}(x)=\sqrt{(x-\mu)^{T}\Sigma^{-1}(x-\mu)}\]
{{< /panel >}}

{{< panel color="blue" title="Minimum Covariance Determinant (MCD) ⚙️" >}}
- Initialization:Select several random subsets of size h < n (default h =, d = # dimensions), representing ‘robust' majority of the data.
- Calculate preliminary mean () and covariance () for each random subset.
- Concentration Step:Iterative core of the algorithm designed to ‘tighten' the ellipsoid.
{{< /panel >}}

{{< panel color="orange" title="MCD Algorithm (Continued) ⚙️" >}}
- Concentration Step:
- Calculate Distances: Compute the Mahalanobis distance of all 'n' points in the dataset from the current subset's mean () and covariance ().
- Select New Subset: Identify the ‘h' points with the smallest Mahalanobis distances. These are the points most centrally located relative to the current ellipsoid.
- Update Estimates: Calculate a new and based only on these ‘h' most central points.
- Repeat 🔁: The steps repeat until the determinant stops shrinking.
- Note: Select the best subset that achieved the absolute minimum determinant.
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/unsupervised/anomaly_detection/elliptic_envelope/slide_13_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/XItazQ0xZUs" >}}
<br><br>
```End of Section```