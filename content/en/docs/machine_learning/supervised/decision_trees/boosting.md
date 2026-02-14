---
title: Boosting
description: Boosting
date: 2026-02-14
weight: 248
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfYIFfsbRfK_M7gObPE_vwU" 
"Decision Tree | All Videos" >}}

<br>

{{< panel color="blue" title="Bagging 🎒" >}}
- In Bagging 🎒we trained multiple strong(over-fit, high variance) models (in parallel) and then averaged them out to reduce variance.
{{< /panel >}}

{{< panel color="orange" title="Intuition 💡" >}}
- Similarly, we can train many weak(under-fit, high bias) models sequentially, such that, each new model corrects the errors of the previous ones to reduce bias.
{{< /panel >}}

{{< panel color="green" title="Boosting" >}}
- ⚔️ An ensemble learning approach where multiple ‘weak learners' (typically simple models like shallow decision trees 🌲 or ‘stumps') are sequentially combined to create a single strong predictive model.
- ⭐️The core principle is that each subsequent model focuses 🎧 on correcting the errors made by its predecessors.
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/boosting/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Why is Boosting Better ?" >}}
- Boosting generally achieves better predictive performance because it actively reduces bias by learning 📖from ‘past mistakes', making it ideal for achieving state-of-the-art 🖼️ results.
{{< /panel >}}

{{< panel color="blue" title="Popular Boosting Algorithms" >}}
- AdaBoost(Adaptive Boosting)
- Gradient Boosting Machine (GBM)
- XGBoost
- LightGBM (Microsoft)
- CatBoost (Yandex)
{{< /panel >}}

{{< video "https://youtu.be/dzvsugSf1RY" >}}
<br><br>
```End of Section```