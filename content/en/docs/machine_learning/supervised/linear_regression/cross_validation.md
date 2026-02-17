---
title: Cross Validation
description: Cross Validation
date: 2026-02-14
weight: 9
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxde_X17sF7iN6rnQgFlBDC-" 
"Linear Regression | All Videos" >}}
<br>

{{< panel color="blue" title="Core Idea 💡" >}}
Do not trust one split of the data; validate across many splits, and average the result to reduce randomness and bias.

**Note**: Two different splits of the same dataset can give very different validation scores.
{{< /panel >}}

{{< panel color="green" title="Cross-validation" >}}
Cross-validation is a statistical resampling technique used to evaluate how well a machine learning model generalizes 
to an independent, unseen dataset. 

It works by systematically **partitioning** the available data into multiple subsets, or **'folds'**, 
and then training and testing the model on different combinations of these folds.
- K-Fold Cross-Validation
- Leave-One-Out Cross-Validation (LOOCV)
{{< /panel >}}

{{< panel color="orange" title="K-Fold Cross-Validation" >}}
1. Shuffle the dataset randomly (except time-series ⏳). 
2. Split data into k equal subsets(folds). 
3. Iterate through each unique fold, using it as the validation set. 
4. Use remaining k-1 fold for training 🏃‍♂️. 
5. Take an average of the results.Note: Common choice for k=5 or 10.

- Iteration 1: [V][T][T][T][T]
- Iteration 2: [T][V][T][T][T]
- Iteration 3: [T][T][V][T][T]
- Iteration 4: [T][T][T][V][T]
- Iteration 5: [T][T][T][T][V]
{{< /panel >}}

{{< panel color="navy" title="Leave-One-Out Cross-Validation (LOOCV)" >}}
Model is trained 🏃‍♂️on all data points except one, and then tested 🧪on that remaining single observation.

LOOCV is an extreme case of k-fold cross-validation, where, k=n (number of data points).

- **Pros**: <br>
Useful for small (<1000) datasets.

- **Cons**: <br>
Computationally 💻 expensive 💰.
{{< /panel >}}

{{< video "https://youtu.be/7kQdsVtXbSI" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/linear_regression/data_splitting" >}}">Previous: Data Splitting</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/linear_regression/bias_variance_tradeoff" >}}">Next: Bias Variance Tradeoff</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```