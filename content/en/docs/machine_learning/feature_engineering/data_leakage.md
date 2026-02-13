---
title: Data Leakage
description: Data Leakage
date: 2026-02-13
weight: 404
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxcg0tJ0CAqPKjDk6Ry_atqu" 
"Feature Engineering | All Videos" >}}

<br>

{{< panel color="blue" title="Data Leakage 💦" >}}
- Occurs when information ℹ️ NOT available at inference time is used during training 🏃‍♂️, leading to good training performance, but poor real‑world 🌎 performance.
{{< /panel >}}

{{< panel color="orange" title="Visual" >}}
{{< imgproc "images/machine_learning/feature_engineering/data_leakage/slide_02_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Target Leakage" >}}
- Including features that are only available after the event we are trying to predict.
- e.g. Including number_of_late_payments in a model to predict whether a person🧍‍♂️applying for a bank loan 💵 will default ?
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< imgproc "images/machine_learning/feature_engineering/data_leakage/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Temporal Leakage 💦" >}}
- Using future data to predict the past.
- Fix: Use Time-Series ⏰ Cross-Validation (Walk-forward validation) instead of random shuffling.
{{< /panel >}}

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/feature_engineering/data_leakage/slide_06_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Train-Test Contamination" >}}
- Applying preprocessing (like global StandardScaler or Mean_Imputation)
- on the entire dataset before splitting.
- Fix: Compute mean, variance, etc. only on the training 🏃‍♂️data and use the same for validation and test data.
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/feature_engineering/data_leakage/slide_08_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/6pP9meuusNw" >}}
<br><br>
```End of Section```