---
title: SVM Intro
description: SVM Intro
date: 2026-02-14
weight: 1
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfFECdHEHPM6NjErmLmg2Ff" 
"Support Vector Machine | All Videos" >}}

<br>

{{< panel color="blue" title="Geometric Intuition💡" >}}
⭐️We have two classes of points (e.g. Cats 😸vs. Dogs 🐶) that can be separated by a straight line.

👉 Many such lines exist !

💡SVM asks: "Which line is the safest?"
{{< imgproc "images/machine_learning/supervised/support_vector_machines/svm_intro/slide_01_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Highway 🛣️ Analogy" >}}
💡Think of the **decision boundary** as the center-line of a highway 🛣️.

SVM tries to make this highway 🛣️ as wide as possible without hitting any 'buildings' 🏡 (data points) on either side.
{{< imgproc "images/machine_learning/supervised/support_vector_machines/svm_intro/slide_05_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Support Vectors" >}}
The points that lie exactly on the edges of the highway are the Support Vectors.
{{< /panel >}}

{{< panel color="grey" title="Goal" >}}
🎯Maximize the width of the ‘street' (the margin) to ensure the model generalizes well to unseen data.
{{< /panel >}}

{{< video "https://youtu.be/Tg8TBImoOqU" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/support_vector_machines/hard_margin_svm" >}}">Next: Hard Margin SVM</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```