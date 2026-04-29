---
title: AdaBoost
description: AdaBoost
date: 2026-02-14
weight: 9
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfYIFfsbRfK_M7gObPE_vwU" 
"Decision Tree | All Videos" >}}

{{< panel color="blue" title="Adaptive Boosting (AdaBoost)" >}}
💡Works by increasing the weight of misclassified data points after each iteration, forcing the next weak learner to
‘pay more attention'to the difficult cases.

⭐️ Commonly used for classification.
{{< /panel >}}

{{< panel color="green" title="Decision Stumps" >}}
👉Weak learners are typically ‘Decision Stumps', i.e, decision treeswith a depth of only one (1 split, 2 leaves ).
{{< imgproc "images/machine_learning/supervised/decision_trees/adaboost/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Algorithm" >}}
1. Assign an equal weight to every data point; \(w_i = 1/n\), where 'n'=number of samples. 
2. Build a decision stump that minimizes the weighted classification error. 
3. Calculate total error; \(E_m = \Sigma w_i\).
4. Determine ‘amount of say’, i.e, the weight of each stump in final decision.
\[\alpha_m = \frac{1}{2}ln\left( \frac{1-E_m}{E_m} \right)\]
   - Low error results in a high positive \(\alpha\) (high influence). 
   - 50% error (random guessing) results in an \(\alpha = 0\) (no influence).
5. Update sample weights.
   - Misclassified samples: Weight increases by \(e^{\alpha_m}\).
   - Correctly classified samples: Weight decreases by \(e^{-\alpha_m}\).
   - Normalization: All new weights are divided by their total sum so they add up back to 1.
6. Iterate for a specified number of estimators (n_estimators).
{{< /panel >}}

{{< panel color="orange" title="Final Prediction " >}}
👉 To classify a new data point, every stump makes a prediction (+1 or -1). 

These are multiplied by their respective ‘**amount of say**' \(\alpha_m\) and summed.
\[H(x)=sign\sum_{m=1}^{M}\alpha_{m}⋅h_{m}(x)\]
👉 If the total weighted sum is positive, the final class is +1; otherwise -1.

**Note**: Sensitive to outliers; Because AdaBoost aggressively increases weights on misclassified points, it may ‘over-focus' on noisy outliers, hurting performance.

{{< /panel >}}

{{< video "https://youtu.be/KPcBlWoOOZo" >}}
<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/decision_trees/boosting" >}}">Previous: Boosting</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/decision_trees/gbm_intro" >}}">Next: Gradient Boosting Machine</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```