---
title: AdaBoost
description: AdaBoost
date: 2026-02-13
weight: 249
math: true
---

{{< panel color="blue" title="Adaptive Boosting (AdaBoost)" >}}
- Works by increasing 📈 the weight 🏋️‍♀️ of misclassified data points after each iteration, forcing the next weak learner to
- ‘pay more attention'🚨 to the difficult cases.
- ⭐️ Commonly used for classification.
{{< /panel >}}

{{< panel color="orange" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/adaboost/slide_02_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Decision Stumps" >}}
- Weak learners are typically
- ‘Decision Stumps', i.e,
- decision trees🌲with a depth of only one (1 split, 2 leaves 🍃).
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/adaboost/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Algorithm" >}}
- Assign an equal weight 🏋️‍♀️to every data point; , where 'n'=number of samples.
- Build a decision stump that minimizes the weighted classification error.
- Calculate total error; .
{{< /panel >}}

{{< panel color="blue" title="Algorithm (Continued)" >}}
- Determine ‘amount of say', i.e, the weight 🏋️‍♀️ of each stump in final decision.
- Low error results in a high positive (high influence).
- 50% error (random guessing) results in an = 0 (no influence)
- Update sample weights 🏋️‍♀️.
- Misclassified samples: Weight 🏋️‍♀️ increases by .
- Correctly classified samples: Weight 🏋️‍♀️ decreases by .
- Normalization: All new weights 🏋️‍♀️ are divided by their total sum so they add up back to 1.
- Iterate for a specified number of estimators (n_estimators).
{{< /panel >}}

{{< panel color="orange" title="Final Prediction 🎯" >}}
- 👉 To classify a new data point, every stump makes a prediction (+1 or -1). These are multiplied by their respective ‘amount of say' and summed.
- 👉 If the total weighted 🏋️‍♀️ sum is positive, the final class is +1; otherwise -1.
- Note: Sensitive to outliers; Because AdaBoost aggressively increases weights 🏋️‍♀️ on misclassified points, it may ‘over-focus' on noisy outliers, hurting performance.
\[H(x)=sign\sum_{m=1}^{M}\alpha_{m}⋅h_{m}(x)\]
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/adaboost/slide_08_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/KPcBlWoOOZo" >}}
<br><br>
```End of Section```