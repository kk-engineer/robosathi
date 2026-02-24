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

{{< question >}}
Explain bias-variance tradeoff and write the bias and variance decomposition for squared error.
{{</ question >}}

{{< answer >}}
**Bias-Variance Decomposition**: <br>
For Mean Squared Error (MSE) = \(\frac{1}{n} \sum_{i=1}^n (y_i - \hat{y_i})^2\)

**Total Error = Bias^2 + Variance + Irreducible Error**

- **Bias** = Systematic Error
  - Bias measures how far the average prediction of a model is from the true value.
- **Variance** = Sensitivity to Data
  - Variance measures how much the predictions of a model vary for different training datasets.
- **Irreducible Error** = Sensor noise, Human randomness
  - Inherent uncertainty in the data generation process itself and cannot be reduced by any model. 

**Bias-Variance Trade-Off**: <br>
- **High Bias (Underfitting)**: A model with high bias is **too simple** to capture the underlying patterns in the data 
  - e.g., fitting a straight line to curved data.
- **High Variance (Overfitting)**: A model with high variance is **too complex** and learns the noise in the training data rather than the true relationship 
  - e.g., a high-degree polynomial curve that perfectly fits training data points but performs poorly on new data.

🎯 The goal is to find a balance; a '**sweet spot**' that minimizes the total error. <br>

🦉 _A good model ‘**generalizes**’ well_, i.e., neither too simple (**low bias**) nor too complex (**low variance**).
{{</ answer >}}

{{< question >}}
How does L1 (Lasso) differ from L2 (Ridge) mathematically, and when does Lasso produce sparse solutions?
{{</ question >}}

{{< answer >}}
- **L1 Regularization**:
  - \( \underset{w}{\mathrm{min}}\ J_{reg}(w) = \underset{w}{\mathrm{min}}\ J(w) + \lambda_1.\sum_{j=1}^n |w_j| \)
- **L2 Regularization**:
  - \( \underset{w}{\mathrm{min}}\ J_{reg}(w) = \underset{w}{\mathrm{min}}\ J(w) + \lambda_2.\sum_{j=1}^n w_j^2 \)

**L1 regularization** produces **sparse** solutions when regularization coefficient \(\lambda_1\) is **high**.
- Because the **gradient** of **L1 penalty** (absolute function) is a **constant** value, i.e, \(\pm 1\), this means a constant reduction in weight at each step, making it gradually reach to 0 in finite steps.
- Whereas, the **derivative** of **L2 penalty** is **proportional** to the weight (\(2w_j\)) and as the weight reaches close to 0, the gradient also becomes very small, this means that the weight will become very close to 0, but not exactly equal to 0.

{{</ answer >}}

{{< question >}}
What is heteroscedasticity and how does it affect OLS? How would you test for it?
{{</ question >}}

{{< answer >}}
💡 **Heteroscedasticity = Variance NOT Constant**

**Note**: **Linear regression** **assumes** that the data has **homoscedasticity** (constant variance).

**Ordinary Least Squares (OLS)** is an **unweighted estimator**. It treats every data point as **equally** '**informative**'.
- **Under Homoscedasticity**: Every point has the same amount of noise, so giving them equal weight is logical.
- **Under Heteroscedasticity**: Some points have very low variance (high certainty) and some have very high variance (lots of noise).

👉 By treating all the points **equally**, **OLS** is 'wasting' the precision of the low-variance points and being 'skewed' by the high-variance points. <br>
This is why OLS is no longer efficient; does not produce the smallest possible **standard errors**. <br>
Which means:
- **t-tests** become unreliable.
- **p-values** become misleading.
- **Confidence intervals** are wrong.

👉 **OLS** is **NO** longer **B.L.U.E.** (_Best Linear Unbiased Estimator_). 
- While the **coefficients** remain **unbiased**, <br>
they are **no** longer the '**best**' because there is another estimator (like **Weighted Least Squares**) that could provide a lower variance.

👉 **How to Test for Heteroscedasticity** ?
- **Visual (Residual Plot)**: 
  - **Heteroscedasticity**: The points form a '**fan**' or '**funnel**' shape, widening or narrowing as values increase.
  - **Homoscedasticity**: The points look like a random 'cloud' with **consistent** thickness.
- **Breusch–Pagan Test**
- **White Test**
- **Goldfeld–Quandt Test**

{{</ answer >}}

{{< question >}}
Explain the difference between likelihood and probability; explain how MAP differs from MLE with example.
{{</ question >}}

{{< answer >}}
**Probability vs. Likelihood**: <br>
Difference lies in which variable is **fixed** and which is **varying**.

- **Probability(Forward View)**: 
  - Quantifies the chance of observing a specific outcome given a known, fixed parameters \(\theta\).
- **Likelihood(Backward/Inverse View)**:  
  - Inverse concept used for inference (working backward from results to causes). 
  - It is a function of the parameters \(\theta\) and measures how ‘likely’ a specific set of parameters makes the observed (fixed) data appear.

**MLE vs. MAP:** <br>
Both help us answer the question: <br>
_Which parameter \(\theta\) best explains the data we just saw?_

- **Maximum Likelihood Estimation (MLE)**:
  - MLE believes the data should speak for itself. 
  - It asks: '_Which value of \(\theta\) makes the observed data most probable?_' 
  - It ignores any outside context or common sense.
- **Maximum A Posteriori (MAP)**:
  - MAP believes the data is important, but so is **prior** knowledge.
  - It asks: '_Given the data AND what we already know about the problem at hand, which value of \(\theta\) is most likely?_'

The relationship between them is rooted in **Bayes' Theorem**:
\[P(\theta \mid \text{data}) = \frac{P(\text{data} \mid \theta) P(\theta)}{P(\text{data})}\]
- **MLE** maximizes only the Likelihood: \(P(\text{data} \mid \theta)\)
- **MAP** maximizes the Posterior: \(P(\text{data} \mid \theta) P(\theta)\)

**Note**:
1. P(data) is a constant (a 'normalizing factor'), so we ignore it during maximization.
2. For a **prior** with **uniform** distribution where every value is equally likely, **MAP** becomes **MLE**.

👉 **Coin Toss Example**: <br>
- Data: Toss the coin 3 times, 2H + 1T.
  - **MLE**: Probability of heads (\(\theta\))
    - \(\theta_{MLE}\) = 2/3 = 0.67
  - **MAP** (with prior belief that coin is fair)
    - Assume prior: \(\theta \sim \beta(10,10)\)
    - Posterior = \(\beta(12,11)\)
    - \(\theta_{MAP}\) = 0.52 (Prior pulls estimate towards 0.5)

✅ Use **MLE** when: <br>
- large dataset.
- no reliable prior knowledge.

✅ Use **MAP** when: <br>
- small dataset.
- reliable prior/domain knowledge.

[Read more about MLE & MAP]({{<ref  "/docs/maths/probability/parametric_model_estimation/" >}})
{{</ answer >}}

  <br><br>
  ```End of Section```