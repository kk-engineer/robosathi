---
title: Advanced GBDT Algorithms
description: Advanced GBDT Algorithms
date: 2026-02-14
weight: 2493
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfYIFfsbRfK_M7gObPE_vwU" 
"Decision Tree | All Videos" >}}

<br>

{{< panel color="blue" title="Advanced GBDT Algorithms" >}}
🔴 XGBoost (Extreme Gradient Boosting) <br>
🔵 LightGBM (Light Gradient Boosting Machine) <br>
⚫️ CatBoost (Categorical Boosting) <br>
{{< /panel >}}

{{< panel color="orange" title="XGBoost (Extreme Gradient Boosting)" >}}
⭐️An optimized and highly efficient implementation of gradient boosting.

👉 Widely used in competitive data science (like **Kaggle**) due to its speed and performance.

**Note**: **Research** project developed by **Tianqi Chen** during his doctoral studies at the University of Washington.
{{< /panel >}}

{{< panel color="green" title="LightGBM (Light Gradient Boosting Machine)" >}}
⭐️Developed by **Microsoft**, this framework is designed for high speed and efficiency with large datasets.

👉It grows trees leaf-wise rather than level-wise and uses Gradient-based One-Side Sampling (GOSS) to speed 🐇 up the finding of optimal split points.
{{< /panel >}}

{{< panel color="navy" title="CatBoost (Categorical Boosting)" >}}
⭐️Developed by **Yandex**, this algorithm is specifically optimized for handling ‘categorical' features without requiring extensive preprocessing (such as, one-hot encoding).
{{< /panel >}}

{{< video "https://youtu.be/j9OFJo6kuCs" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/decision_trees/gbdt_example" >}}">Previous: GBDT Example</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/decision_trees/xgboost" >}}">Next: XgBoost</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```