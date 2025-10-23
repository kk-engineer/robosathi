---
title: Performance Metrics
description: Performance Metrics
date: 2025-10-23
weight: 9
math: true
---

{{% pageinfo %}}
In this section, we will understand various Performance Metrics for classification models. <br>
{{% /pageinfo %}}

{{< definition >}}
**Performance Metrics:** <br>
They are quantitative measures used to evaluate how well a machine learning model performs on unseen data. <br>
E.g.: For regression models, we have - MSE, RMSE, MAE, R^2 metric, etc. <br>
Here, we will discuss various performance metrics for classification models.
{{</ definition >}}
<br>

{{< definition >}}
**Confusion Matrix:** <br>
It is a table that summarizes model's predictions against the actual class labels, detailing where the model 
succeeded and where it failed. <br>
It is used for binary or multi-class classification problems.

|         | Predicted Positive       | Predicted Negative       |
|---------|---------------------|---------------------|
|**Actual Positive**| True Positive (**TP**)  | False Negative (**FN**) |
|**Actual Negative**| False Positive (**FP**) | True Negative (**TN**)  |

<br>

**Type-1 Error:** <br>
It is the number of false positives. <br>
e.g.: Model predicted that a patient has diabetes, but the patient actually does NOT have diabetes; "_false alarm_". <br>

**Type-2 Error:** <br>
It is the number of false negatives. 
e.g.: Model predicted that a patient does NOT have diabetes, but the patient actually has diabetes; "_a miss_". <br>

{{</ definition >}}

Many metrics are derived from the confusion matrix. <br>

{{< alert color="secondary" title="Important Metrics" >}}
**Precision:** <br>
It answers the question: "Of all the instances that the model predicted as positive, how many were actually positive?" <br>
It measures exactness or quality of the positive predictions. <br>
\[
Precision = \frac{TP}{TP + FP}
\]
<br>

**Recall:** <br>
It answers the question: "Of all the actual positive instances, how many did the model correctly identify?" <br>
It measures completeness or coverage of the positive predictions. <br>
\[
Recall = \frac{TP}{TP + FN}
\]
<br>

**F1 Score:** <br>
It is the harmonic mean of precision and recall. <br>
It is used when we need a balance between precision and recall; also helpful when we have imbalanced data. <br>
Harmonic mean penalizes extreme values more heavily, encouraging both metrics to be high. <br>
\[
F1 ~ Score = 2 * \frac{Precision \times Recall}{Precision + Recall}
\]
<br>

| Precision | Recall | F1 Score | Mean |
|-----------|--------|----------| -----|
| 0.5       | 0.5    | 0.50     | 0.5 |
| 0.7       | 0.3    | 0.42     | 0.5 |
| 0.9       | 0.1    | 0.18     | 0.5 |

<br>

**Trade-Off:** <br>
**Precision Focus:**: Critical when cost of false positives is high. <br>
e.g: Identify a potential terrorist. <br>
A false positive, i.e, wrongly flagging an innocent person as a potential terrorist is very harmful. <br>

**Recall Focus:**: Critical when cost of false negatives is high. <br>
e.g.: Medical diagnosis of a serious disease. <br>
A false negative, i.e, falsely missing a serious disease can cost someone's life. <br>
<br>
{{< /alert >}}
<br>

{{< question >}}
Analyze the performance of an access control system. Below is the data for 1000 access attempts. <br>

|         | Predicted Authorised Access | Predicted Unauthorised Access |
|---------|-----------|-------------------------------|
|**Actual Authorised Access**| 90 (**TP**) | 10 (**FN**)                   |
|**Actual Unauthorised Access**| 1 (**FP**)| 899 (**TN**)                  |
{{</ question >}}

{{< answer >}}
\[
Precision = \frac{TP}{TP + FP} = \frac{90}{90 + 1} \approx 0.989
\]
When the system allows access, it is correct 98.9% of the time. <br>

\[
Recall = \frac{TP}{TP + FN} = \frac{90}{90 + 10} = 0.9
\]
The system caught 90% of all authorized accesses. <br>

\[
F1 ~ Score = 2 * \frac{Precision \times Recall}{Precision + Recall} \\[10pt]
= 2 * \frac{0.989 \times 0.9}{0.989 + 0.9} \\[10pt]
=> F1 ~ Score \approx  0.942
\]
{{</ answer >}}
<br><br>

{{< definition >}}
**Receiver Operating Characteristic (ROC) Curve:** <br>

{{</ definition >}}

<br><br>
```End of Section```

