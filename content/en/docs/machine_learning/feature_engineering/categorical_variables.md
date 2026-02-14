---
title: Categorical Variables
description: Categorical Variables
date: 2026-02-14
weight: 402
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxcg0tJ0CAqPKjDk6Ry_atqu" 
"Feature Engineering | All Videos" >}}

<br>

{{< panel color="blue" title="Categorical Variables" >}}
ML models operate on numerical vectors.

Categorical variables must be transformed (encoded) while preserving information and semantics.
- One Hot Encoding (OHE)
- Label Encoding
- Ordinal Encoding
- Frequency/Count Encoding
- Target Encoding
- Hash Encoding
{{< /panel >}}

{{< panel color="orange" title="One Hot 🔥 Encoding (OHE)" >}}
- When the categorical data (nominal) is without any inherent ordering.
- Create binary columns per category.
- e.g.: Colors: Red, Blue, Green.
- > [1,0,0], [0,1,0], [0,0,1]
- Note: Use when low cardinality, or small number of unique values (<20).
{{< /panel >}}

{{< panel color="green" title="Label 🏷️ Encoding" >}}
- Assigns a unique integer (e.g., 0, 1, 2) to each category.
- When to use ?
- Target variable, i.e, unordered (nominal) data, in classification problems.
- e.g. encoding a city ["Paris", "Tokyo", "Amsterdam"] -> [1, 2, 0], (Alphabetical: Amsterdam=0, Paris=1, Tokyo=2).
- When to avoid ?
- For nominal data in linear models, because it can mislead the model to assume an order/hierarchy, when there is none.
{{< /panel >}}

{{< panel color="red" title="Ordinal Encoding" >}}
- When categorical data has logical ordering.
- Best for: Ordered (ordinal) input features.
{{< imgproc "images/machine_learning/feature_engineering/categorical_variables/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Frequency/Count 📟 Encoding" >}}
- Replace categories with their frequency or count in the dataset.
- Useful for high-cardinality features where many unique values exist.
{{< /panel >}}

{{< panel color="blue" title="Frequency/Count Encoding (Example)" >}}
- Frequency/Count Encoding (Example)
{{< imgproc "images/machine_learning/feature_engineering/categorical_variables/slide_06_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< imgproc "images/machine_learning/feature_engineering/categorical_variables/slide_06_02.png" Resize "1400x" >}}{{< /imgproc >}}
{{< imgproc "images/machine_learning/feature_engineering/categorical_variables/slide_06_03.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Target 🎯 Encoding" >}}
- Replace a category with the mean of the target variable for that specific category.
- When to use ?
- For high-cardinality nominal features, where one hot encoding is inefficient, e.g., zip code, product id, etc.
- Strong correlation between the category and the target variable.
- When to avoid ?
- With small datasets, because the category averages (encodings) are based on too few samples, making them unrepresentative.
- Also it can lead to target leakage and overfitting unless proper smoothing or cross-validation techniques (like K-fold or Leave-One-Out) are used.
{{< /panel >}}

{{< panel color="green" title="Hash 🌿 Encoding" >}}
- 🗺️ Maps categories to a fixed number of features using a hash function.
- Useful for high-cardinality features where we want to limit the dimensionality.
{{< /panel >}}

{{< panel color="red" title="Hash Encoding (Example)" >}}
- Hash Encoding (Example)
{{< imgproc "images/machine_learning/feature_engineering/categorical_variables/slide_09_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/RRgE1pLkApk" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/feature_engineering/data_pre_processing" >}}">Previous: Data Pre Processing</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/feature_engineering/feature_engineering" >}}">Next: Feature Engineering</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```