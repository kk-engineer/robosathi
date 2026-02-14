---
title: GBDT Example
description: GBDT Example
date: 2026-02-14
weight: 2492
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfYIFfsbRfK_M7gObPE_vwU" 
"Decision Tree | All Videos" >}}

<br>

{{< panel color="blue" title="Gradient Boosting Machine" >}}
- GBM treats the final model as weighted 🏋️‍♀️ sum of ‘m' weak learners:
- : The initial base model (usually a constant).
- : The total number of boosting iterations (number of trees).
- (Leaf Weight): The optimized value for leaf in tree .
- (Nu): The Learning Rate or Shrinkage; prevent overfitting.
- : ‘Indicator Function'; It is 1 if data point falls into leaf of the tree, and 0 otherwise.
- (Regions): Region of leaf in tree.
\[F_{M}(x)=F_{0}(x)_{⏟}_{Initial Guess}+ν\sum_{m=1}^{M}\sum_{j=1}^{J_{m}}\gamma_{jm}I(x∈R_{jm})_{⏟}_{Weak Learnerh_{m}(x)}\]
{{< /panel >}}

{{< panel color="orange" title="Algorithm" >}}
- Step 1: Initialization.
- Step 2: Iterative loop 🔁 : for i=1 to m.
- 2.1: Calculate pseudo residuals ‘'.
- 2.2: Fit a regression tree 🌲‘'.
- 2.3:Compute leaf 🍃weights 🏋️‍♀️ ‘'.
- 2.4:Update the model.
{{< /panel >}}

{{< panel color="green" title="Predict House Prices" >}}
- Loss = MSE, Learning rate () = 0.5
{{< /panel >}}

{{< panel color="red" title="Solution" >}}
- 1. Initialization :
- 2. Iteration 1(m=1):
- 2.1: Calculate residuals ‘'
- 2.2: Fit tree(); Split at X<2150 (midpoint of 1800 and 2500)
- 2.3: Compute leaf weights
- Y-> Leaf 1: Ids 1, 2 ( = -2.0)
- N-> Leaf 2: Id 3 ( = 4.0)
- 2.4: Update predictions ()
\[r_{11}=2-5=-3.0 \\ r_{21}=4-5=-1.0 \\ r_{31}=9-5=4.0\]
\[F_{1}(x_{1})=5.0+0.5(-2.0)=4.0 \\ F_{1}(x_{2})=5.0+0.5(-2.0)=4.0 \\ F_{1}(x_{3})=5.0+0.5(4.0)=7.0\]
{{< /panel >}}

{{< panel color="navy" title="Tree 1" >}}
- Tree 1
{{< imgproc "images/machine_learning/supervised/decision_trees/gbdt_example/slide_05_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="Solution(Continued…)" >}}
- 2. Iteration 2(m=2):
- 2.1: Calculate new residuals ‘'
- 2.2: Fit tree(); Split at X<1500 (midpoint of 1200 and 1800)
- 2.3: Compute leaf weights
- Y-> Leaf 1: Ids 1 ( = -2.0)
- N-> Leaf 2: Ids 2, 3 ( = 1.0)
- 2.4: Final update ()
\[r_{12}=2-4.0=-2.0 \\ r_{22}=4-4.0=-0.0 \\ r_{32}=9-7.0=2.0\]
\[F_{2}(x_{1})=4.0+0.5(-2.0)=3.0 \\ F_{2}(x_{2})=4.0+0.5(1.0)=4.5 \\ F_{2}(x_{3})=7.0+0.5(1.0)=7.5\]
{{< /panel >}}

{{< panel color="orange" title="Tree 2" >}}
- Tree 2
{{< imgproc "images/machine_learning/supervised/decision_trees/gbdt_example/slide_07_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Inference" >}}
- Area = 2000 sq. ft.
- Pass though tree 1 (): is 2000 < 2150 ? Yes, = -2.0
- Contribution () = 0.5 x (-2.0) = -1.0
- Pass though tree 2 (): is 2000 < 1500 ? No, = 1.0
- Contribution() = 0.5 x (1.0) = 0.5
- Final prediction = 5.0 - 1.0 + 0.5 = 4.5
\[F_{final}(x)=F_{0}+ν⋅h_{1}(x)+ν⋅h_{2}(x)\]
\[F_{0}=5.0\]
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/gbdt_example/slide_09_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/MHbyKuFfJvw" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/decision_trees/gbm_intro" >}}">Previous: GBM Intro</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/decision_trees/advanced_gbdt_algorithms" >}}">Next: Advanced GBDT Algorithms</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```