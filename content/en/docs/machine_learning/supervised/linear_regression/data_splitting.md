---
title: Data Splitting
description: Data Splitting
date: 2026-02-13
weight: 8
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxde_X17sF7iN6rnQgFlBDC-" 
"Linear Regression | All Videos" >}}
<br>

{{< question >}}
Why Data-Splitting is Required ?
{{< /question >}}

{{< answer >}}
To avoid over-fitting (memorize), so that, the model generalizes well, improving its performance on unseen data.
{{< /answer >}}

{{< panel color="blue" title="Train/Validation/Test Split" >}}
- Training Data: Learn model parameters (Textbook + Practice problems)
- Validation Data: Tune hyper-parameters (Mock tests)
- Test Data: Evaluate model performance (Real (final) exam)

Training 🏃‍♂️Data
{{< imgproc "images/machine_learning/supervised/linear_regression/data_splitting/slide_01_01.png" Resize "1400x" >}}{{< /imgproc >}}
Validation 📋 Data
{{< imgproc "images/machine_learning/supervised/linear_regression/data_splitting/slide_02_01.png" Resize "1400x" >}}{{< /imgproc >}}
Test 🧪 Data
{{< imgproc "images/machine_learning/supervised/linear_regression/data_splitting/slide_03_01.png" Resize "1400x" >}}{{< /imgproc >}}

{{< /panel >}}

{{< panel color="orange" title="Data Leakage 💦" >}}
Data leakage occurs when information from the validation or test set is inadvertently used to
train 🏃‍♂️ the model.

The model ‘cheats' by learning to exploit information it should not have access to, resulting in artificially inflated performance metrics during testing 🧪.
{{< /panel >}}

{{< panel color="green" title="Typical Split Ratios" >}}
- Small datasets(1K-100K): 60/20/20, 70/15/15 or 80/10/10
- Large datasets(>1M): 98/1/1 would suffice, as 1% of 1M is still 10K.

**Note**: There is no fixed rule, its trial and error.
{{< /panel >}}

{{< panel color="red" title="Imbalanced Data" >}}
Imbalanced data refers to a dataset where the target classes are represented by an unequal or 
highly skewed distribution of samples, such that the majority class significantly outnumbers the minority class. 
{{< /panel >}}

{{< panel color="navy" title="Stratified Sampling" >}}
If there is class imbalance in the dataset, (e.g., 95% class A , 5% class B), a random split might result in the 
validation set having 99% class A.

**Solution**: Use stratified sampling to ensure class **proportions** are maintained across all splits 
(train🏃‍♂️/validation📋/test🧪).

**Note**: Non-negotiable for imbalanced data.
{{< /panel >}}

{{< panel color="blue" title="Time-Series ⏳ Data" >}}
- In time-series ⏰ data, divide the data chronologically, not randomly, i.e, training data time ⏰ should precede validation data time ⏰.
- We always train 🏃‍♂️ on past data to predict future data.

**Golden rule**: Never look 👀 into the future.
{{< /panel >}}

{{< video "https://youtu.be/DGM9wktXyjE" >}}
<br><br>
```End of Section```