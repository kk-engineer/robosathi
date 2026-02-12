---
title: Performance Metrics
description: Performance Metrics
date: 2025-10-23
weight: 10
math: true
---


{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfGbwZaKtx_nIi_DNWMK8mX" 
        "Statistics for AI & ML | Full Course Videos">}}
<br>
{{< definition title="Performance Metrics" >}}
They are quantitative measures used to evaluate how well a machine learning model performs on unseen data. <br>
E.g.: For regression models, we have - MSE, RMSE, MAE, R^2 metric, etc. <br>
Here, we will discuss various performance metrics for classification models.
{{</ definition >}}


{{< definition title="Confusion Matrix" >}}
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

{{< video "https://www.youtube.com/watch?v=VclTKXnlb_U" >}}

{{< panel color="orange" title="Important Metrics" >}}
Many metrics are derived from the confusion matrix. <br><br>
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
{{< /panel >}}

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

{{< video "https://youtu.be/Z1-OC4sl-Qw?si=tVAerxRJ95jCDH6-&t=1" >}}

{{< definition title="Receiver Operating Characteristic (ROC) Curve" >}}
It is a graphical plot that shows the discriminating ability of a binary classifier system, as its
discrimination threshold is varied. <br>
**Y-axis**: True Positive Rate (**TPR**), Recall, Sensitivity <br>
\(TPR = \frac{TP}{TP + FN}\) <br><br>

**X-axis**: False Positive Rate (**FPR**); (1 - Specificity) <br>
\(FPR = \frac{FP}{FP + TN}\) <br><br>

*Note: A binary classifier model outputs a probability score between 0 and 1. <br>
and a threshold (default=0.5) is applied to the probability score to get the final class label.* <br>
\(p \ge 0.5\) => **Positive Class** <br>
\(p < 0.5\) => **Negative Class** <br>
<br>

**Algorithm:** <br>
1. Sort the data by the probability score in descending order. <br>
2. Set each probability score as the threshold for classification and calculate the TPR and FPR for each threshold. <br>
3. Plot each pair of (TPR, FPR) for all 'n' data points to get the final ROC curve. <br>

e.g.: <br>
|Patient_Id | True Label \(y_i\) | Predicted Probability Score \(\hat{y_i}\) |
|--------|--------------------|--------------------------|
|1       | 1                  | 0.95                      |
|2       | 0                  | 0.85                      |
|3       | 1                  | 0.72                      |
|4       | 1                  | 0.63                      |
|5       | 0                  | 0.59                      |
|6       | 1                  | 0.45                      |
|7       | 1                  | 0.37                      |
|8       | 0                  | 0.20                      |
|9       | 0                  | 0.12                      |
|10      | 0                  | 0.05                      |

Set the threshold \(\tau_1\) = 0.95, calculate \({TPR}_1, {FPR}_1\) <br>
Set the threshold \(\tau_2\) = 0.85, calculate \({TPR}_2, {FPR}_2\) <br>
Set the threshold \(\tau_3\) = 0.72, calculate \({TPR}_3, {FPR}_3\) <br>
... <br>
... <br>
Set the threshold \(\tau_n\) = 0.05, calculate \({TPR}_n, {FPR}_n\) <br>

Now, we have 'n' pairs of (TPR, FPR) for all 'n' data points. <br>
Plot the points on a graph to get the final ROC curve. <br>

{{< imgproc "images/maths/statistics/roc.png" Resize "800x" >}}{{< /imgproc >}}

**AU ROC** = AUC = Area under the ROC curve = Area under the curve <br>

*Note:* 
1. *If AUC < 0.5, then invert the labels of the classes.* 
2. *ROC does NOT perform well on imbalanced data.*
   - Either balance the data or
   - Use Precision-Recall curve.

{{</ definition >}}
<br>

{{< question >}}
What is the AUC of a random binary classifier model?
{{</ question >}}

{{< answer >}}
AUC of a random binary classifier model = 0.5 <br>
Since, labels are randomly generated as 0/1 for binary classification, so 50% labels from each class. <br>
Because random number generators generate numbers uniformly in the given range.
{{</ answer >}}
<br>

{{< question >}}
Why ROC can be misleading for imbalanced data ?
{{</ question >}}
{{< answer >}}
Let's understand this with the below fraud detection example. <br>
Below is a dataset from a fraud detection system for N = 10,000 transactions. <br>
Fraud = 100, NOT fraud = 9900 <br>


|                      | Predicted Fraud | Predicted NOT Fraud |
|----------------------|-----------------|---------------------|
| **Actual Fraud**     | 80 (**TP**)     | 20 (**FN**)         |
| **Actual NOT Fraud** | 220 (**FP**)    | 9680 (**TN**)       |

\[TPR = \frac{TP}{TP + FN} = \frac{80}{80 + 20} = 0.8\] 
\[FPR = \frac{FP}{FP + TN} = \frac{220}{220 + 9680} \approx 0.022\]

If we check the location of above (TPR, FPR) pair on the ROC curve, then we can see that it is 
very close to the _top-left corner_. <br>
This means that the model is very good at detecting fraudulent transactions, but that is NOT the case. <br>
This is happening because of the imbalanced data, i.e, count of NOT fraud transactions is 99 times 
of fraudulent transactions. <br>

Let's look at the Precision value: <br>
\[Precision = \frac{TP}{TP + FP} = \frac{80}{80 + 220} = \frac{80}{300}\approx 0.267\] <br>
We can see that the model has poor precision,i.e, only 26.7% of flagged transactions are actual frauds. <br>
Unacceptable precision for a good fraud detection system.<br>
{{</ answer >}}

{{< video "https://www.youtube.com/watch?v=0tX3df_rz-0" >}}

{{< definition title="Precision-Recall Curve" >}}
It is used to evaluate the performance of a binary classifier model across various thresholds. <br>
It is similar to the ROC curve, but it uses Precision instead of TPR on the Y-axis. <br>
Plots **Precision** (Y-axis) against **Recall** (X-axis) for different classification thresholds. <br>
*Note*: It is useful when the data is **imbalanced**.

\[
Precision = \frac{TP}{TP + FP} \\[10pt]
Recall = \frac{TP}{TP + FN}
\]

{{< imgproc "images/maths/statistics/prc.png" Resize "800x" >}}{{< /imgproc >}}

**AU PRC = PR AUC = Area under Precision-Recall curve**
{{</ definition >}}

{{< answer >}}
Let's revisit the fraud detection example discussed above to understand the utility of PR curve. <br>

|                      | Predicted Fraud | Predicted NOT Fraud |
|----------------------|-----------------|---------------------|
| **Actual Fraud**     | 80 (**TP**)     | 20 (**FN**)         |
| **Actual NOT Fraud** | 220 (**FP**)    | 9680 (**TN**)       |

\[Precision = \frac{TP}{TP + FP} = \frac{80}{80 + 220} = \frac{80}{300}\approx 0.267\] <br>
\[Recall = \frac{TP}{TP + FN} = \frac{80}{80 + 20} = \frac{80}{100}\approx 0.8\] <br>
If we check the location of above (Precision, Recall) point on PRC curve, we will find that it is located near the 
_bottom right corner_, i.e, the model performance is poor.
{{</ answer >}}

{{< video "https://www.youtube.com/watch?v=vIqEUeDGAiE" >}}

<br><br>
```End of Section```

