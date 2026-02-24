---
title: Interview Questions
description: Machine Learning Interview Questions
date: 2026-02-24
weight: 6
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxeydAqz2lsSMFYinbrJy9mu" 
"Classical Machine Learning | Full Course Videos" >}}


{{< question >}}
How would you evaluate a model for an imbalanced classification problem? <br>
Which metrics would you report and why?
{{</ question >}}

{{< answer >}}
We should evaluate an imbalanced classification model using metrics that that focus on performance for each class, especially the minority class. <br>

**Why ?** <br>
Say, we have a dataset with high imbalance, i.e, 99% of data belongs to positive class and only 1% of data belongs to the negative class. <br>
In such a case, standard metrics, such as,  **accuracy** is **misleading**, because a model can achieve 99% _accuracy_ <br> 
by simply predicting positive class all the time. <br>


**So, what to do ?** <br>
First, of all, start with the **confusion matrix**. (_focus on minority class_) <br>
It provides the raw counts of True Positives (**TP**), True Negatives (**TN**), False Positives (**FP**), and False Negatives (**FN**).
This is the foundation for all other metrics.

**Confusion Matrix:**

|         | Predicted Positive       | Predicted Negative       |
|---------|---------------------|---------------------|
|**Actual Positive**| True Positive (**TP**)  | False Negative (**FN**) |
|**Actual Negative**| False Positive (**FP**) | True Negative (**TN**)  |

- **Precision**: Of all instances the model predicted as positive, how many were actually positive?
  - \( Precision = \frac{TP}{TP + FP} \)
  - **Use Case**: The cost of a False Positive is high (e.g., _marking a legitimate email as spam_).
- **Recall (Sensitivity)**: Of all actual positive instances, how many did the model find?
  - \( Recall = \frac{TP}{TP + FN} \)
  - **Use Case**: The cost of a False Negative is high (e.g., _missing a cancer diagnosis or fraud transaction_).
- **F1-Score**: Harmonic mean of precision and recall.
  - \( F1 ~ Score = 2 * \frac{Precision \times Recall}{Precision + Recall}\)
  - **Why report F1-Score?**: To balance precision and recall. A model with 1.0 precision and 0.0 recall will have an F1-score of 0.
- **Precision-Recall (PR) AUC**: Plots Precision against Recall for different classification thresholds. <br>
    Better than ROC curve because it uses **Precision** instead of **False Positive Rate (FPR)**, which can be **misleading** for **imbalanced** data.
    - \(FPR = \frac{FP}{FP + TN}\)

[Read more about Performance Metrics]({{<ref  "/docs/maths/statistics/performance_metrics/" >}}) 
{{</ answer >}}

{{< question >}}
Why might ROC-AUC be misleading for imbalanced classes?
{{</ question >}}

{{< answer >}}
**ROC curve** plots TPR vs FPR, \(FPR = \frac{FP}{FP + TN}\), so for an imbalanced data, **FPR** can be **misleading**. <br>
So for **imbalanced** data, we better use **Precision-Recall curve** that uses **Precision** instead of **FPR** and hence is more **reliable**. <br>
Let's look at the fraud detection example below, N = 10,000 transactions, **Fraud** = 100, **NOT fraud** = 9900: <br><br>
**Confusion Matrix**: <br>

|                      | Predicted Fraud | Predicted NOT Fraud |
|----------------------|-----------------|---------------------|
| **Actual Fraud**     | 80 (**TP**)     | 20 (**FN**)         |
| **Actual NOT Fraud** | 220 (**FP**)    | 9680 (**TN**)       |

\[FPR = \frac{FP}{FP + TN} = \frac{220}{220 + 9680} \approx 0.022\]
\[Precision = \frac{TP}{TP + FP} = \frac{80}{80 + 220} = \frac{80}{300}\approx 0.267\]

The **FPR** is very low due to the class **imbalance**, and hence **Precision** gives us a better view of the model's performance.
{{</ answer >}}

{{< question >}}
Describe how to avoid data leakage when performing feature engineering and cross-validation.
{{</ question >}}

{{< answer >}}
👉Any information from the validation/test set must NOT influence training, directly or indirectly. <br>
So, how do we prevent this leakage of information or data leakage from training to validation or test set ? <br>
1. **Train-Test Contamination**:
- ❌ **Wrong**: Applying preprocessing (like global StandardScaler, Mean_Imputation, Target_Encoding etc.) on the entire dataset before splitting.
- ✅ **Right**: Compute mean, variance, etc. only on the training data and use the same for validation and test data.

2. **Preventing Leakage in Cross-Validation**:
- ❌ **Wrong**: Perform preprocessing (e.g., scaling, normalization, missing value imputation) on the entire dataset before passing it to **cross_val_score**.
- ✅ **Right**: Use sklearn.pipeline.Pipeline; **Pipeline** ensures that the 'validation fold' remains unseen until the transformation is applied using the training fold's parameters.

3. **Time Series Data**:
- ❌ **Wrong**: Use standard random CV; it allows the model to 'peek into the future'.
- ✅ **Right**: Use Time-Series Nested Cross-Validation (Forward Chaining) instead of random shuffling.

4. **Target Leakage**:
- ❌ **Wrong**: Include features that are only available after the event we are trying to predict and are proxy for the target.
  - e.g. Including number_of_late_payments in a model to predict whether a person applying for a bank loan will default ?
- ✅ **Right**: Do not include such features during training.

5. **Group Leakage**:
- ❌ **Wrong**: If you have multiple rows that are correlated (same user).
  - For the same patient or user, you put some rows in Train and others in Test.
- ✅ **Right**: Use **GroupKFold** to ensure all data from a specific group stays together in one fold.
{{</ answer >}}


<br><br>
```End of Section```