---
title: GBM Intro
description: GBM Intro
date: 2026-02-14
weight: 2491
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfYIFfsbRfK_M7gObPE_vwU" 
"Decision Tree | All Videos" >}}

<br>

{{< panel color="blue" title="Idea 💡" >}}
- GBM fits new models to the ‘residual errors' (the difference between actual and predicted values) of the previous models.
{{< /panel >}}

{{< panel color="orange" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/gbm_intro/slide_02_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Gradient Boosting Machine" >}}
- GBM treats the final model as weighted 🏋️‍♀️ sum of ‘m' weak learners:
- : The initial base model (usually a constant).
- : The total number of boosting iterations (number of trees).
- (Leaf Weight): The optimized value for leaf in tree .
- (Nu): The Learning Rate or Shrinkage; prevent overfitting.
- : ‘Indicator Function'; It is 1 if data point falls into leaf of the tree, and 0 otherwise.
- (Regions): Region of leaf in tree.
\[F_{M}(x)=F_{0}(x)_{⏟}_{Initial Guess}+ν\sum_{m=1}^{M}\sum_{j=1}^{J_{m}}\gamma_{jm}I(x∈R_{jm})_{⏟}_{Weak Learnerh_{m}(x)}\]
{{< /panel >}}

{{< panel color="red" title="Gradient Descent in Function Space" >}}
- 📍In Gradient Descent, we update parameters ‘';
- 📍In GBM, we update the predictions F(x) themselves.
- 🦕We move the predictions in the direction of the negative gradient of the loss function L(y, F(x)).
{{< /panel >}}

{{< panel color="navy" title="Gradient Descent in Function Space (Continued …)" >}}
- 🎯We want to minimize loss:
- ✅ In parameter optimization we update weights 🏋️‍♀️:
- ✅ In gradient boosting, we update the prediction function:
- ➡️ The gradient w.r.t. predictions, not weights.
\[L(F)=\sum_{i=1}^{n}L(y_{i},F(x_{i}))\]
\[w_{t+1}=w_{t}-η⋅∇_{w}L(w_{t})\]
\[F_{m}(x)=F_{m-1}(x)-η⋅∇_{F}L(F_{m-1}(x))\]
{{< /panel >}}

{{< panel color="blue" title="Pseudo Residuals" >}}
- In GBM we can use any loss function as long as it is differentiable, such as, MSE, log loss, etc.
- Loss(MSE) =
- Pseudo Residual (Error) = - Gradient
\[\frac{∂L}{F_{m}(x_{i})}=-2(y-F_{m}(x_{i}))\]
\[⟹\frac{∂L}{F_{m}(x_{i})}∝-(y-F_{m}(x_{i}))\]
{{< /panel >}}

{{< panel color="orange" title="Why initial model is Mean model for MSE ?" >}}
- To minimize loss, take derivative of loss function w.r.t ‘' and equate to 0:
- MSE Loss =
\[F_{0}(x)=argmin_{\gamma}\sum_{i=1}^{n}L(y_{i},\gamma)\]
\[\frac{∂L(y_{i},\gamma)}{∂\gamma}=-2⋅\sum_{i=1}^{n}(y_{i}-\gamma)=0 \\ ⟹\sum_{i=1}^{n}(y_{i}-\gamma)=0⟹\sum_{i=1}^{n}y_{i}=n.\gamma \\ ∴\gamma=\frac{1}{n}\sum_{i=1}^{n}y_{i}\]
{{< /panel >}}

{{< panel color="green" title="Why optimal leaf 🍃value is the ‘Mean' of the residuals for MSE ?" >}}
- To minimize cost, take derivative of cost function w.r.t ‘' and equate to 0:
- Cost Function =
- Since,
- (Regions): Region of leaf in tree.
\[\frac{d}{d\gamma}\sum_{x_{i}∈R_{jm}}\frac{1}{2}(r_{i}-\gamma)^{2}=\sum_{x_{i}∈R_{jm}}-(r_{i}-\gamma)=0\]
{{< /panel >}}

{{< panel color="red" title="Why optimal leaf 🍃value is the ‘Mean' of the residuals for MSE ? (Continued…)" >}}
- Since, is constant for all samples in the leaf,
- = Region of leaf in tree.
\[\frac{d}{d\gamma}\sum_{x_{i}∈R_{jm}}\frac{1}{2}(r_{i}-\gamma)^{2}=\sum_{x_{i}∈R_{jm}}-(r_{i}-\gamma)=0\]
\[⟹\sum_{x_{i}∈R_{jm}}\gamma-\sum_{x_{i}∈R_{jm}}r_{i}=0\]
\[⟹\gamma=\frac{x_{i}∈R_{jm}r_{i}}{n_{j}}\]
{{< /panel >}}

{{< video "https://youtu.be/KqIOqbq7LKU" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/decision_trees/gbdt_algorithm" >}}">Previous: GBDT Algorithm</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/decision_trees/gbdt_example" >}}">Next: GBDT Example</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```