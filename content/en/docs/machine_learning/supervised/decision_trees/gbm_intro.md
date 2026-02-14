---
title: Gradient Boosting Machine
description: Gradient Boosting Machine Introduction
date: 2026-02-14
weight: 10
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfYIFfsbRfK_M7gObPE_vwU" 
"Decision Tree | All Videos" >}}

<br>

{{< panel color="cyan" title="Idea 💡" >}}
👉GBM fits new models to the ‘residual errors' (the difference between actual and predicted values) of the previous models.
{{< /panel >}}

{{< panel color="green" title="Gradient Boosting Machine" >}}
GBM treats the final model \(F_m(x)\) as weighted 🏋️‍♀️ sum of ‘m' weak learners:
\[ F_{M}(x)=\underbrace{F_{0}(x)}_{\text{Initial\ Guess}}+\nu \sum _{m=1}^{M}\underbrace{\left(\sum _{j=1}^{J_{m}}\gamma _{jm}\mathbb{I}(x\in R_{jm})\right)}_{\text{Weak\ Learner\ }h_{m}(x)}\]
- \(F_0(x)\): The initial base model (usually a constant).
- M: The total number of boosting iterations (number of trees).
- \(\gamma_{jm}\)(Leaf Weight): The optimized value for leaf in tree .
- \(\nu\)(Nu): The Learning Rate or Shrinkage; prevent overfitting.
- \(\mathbb{I}(x\in R_{jm})\): ‘Indicator Function'; It is 1 if data point falls into leaf of the tree, and 0 otherwise.
- \(R_{jm}\)(Regions): Region of \(j_{th}\) leaf in \(m_{th}\)tree.
{{< /panel >}}

{{< panel color="navy" title="Gradient Descent in Function Space" >}}
📍In Gradient Descent, we update parameters ‘\(\Theta\)';

📍In GBM, we update the predictions F(x) themselves.

🦕We move the predictions in the direction of the negative gradient of the loss function L(y, F(x)).

🎯We want to minimize loss:
\[\mathcal{L}(F) = \sum_{i=1}^n L(y_i, F(x_i))\]
✅ In parameter optimization we update weights 🏋️‍♀️:
\[w_{t+1} = w_t - \eta \cdot \nabla_{w}\mathcal{L}(w_t)\]
✅ In gradient boosting, we update the prediction function:
\[F_m(x) = F_{m-1}(x) -\eta \cdot \nabla_F \mathcal{L}(F_{m-1}(x))\]

➡️ The gradient is calculated w.r.t. predictions, not weights.
{{< /panel >}}

{{< panel color="rust" title="Pseudo Residuals" >}}
In GBM we can use any loss function as long as it is differentiable, such as, MSE, log loss, etc.

**Loss(MSE)** = \((y_i - F_m(x_i))^2\)
\[\frac{\partial L}{F_m(x_i)} = -2 (y-F_m(x_i))\]
\[\implies \frac{\partial L}{F_m(x_i)} \propto - (y-F_m(x_i))\]

👉**Pseudo Residual (Error) = - Gradient**
{{< /panel >}}

{{< panel color="green" title="Why initial model is Mean model for MSE ?" >}}
💡To minimize loss, take derivative of loss function w.r.t ‘\(\gamma\)' and equate to 0:
\[F_0(x) = \arg\min_{\gamma} \sum_{i=1}^n L(y_i, \gamma)\]
**MSE Loss** = \(\mathcal{L}(y_i, \gamma) = \sum_{i=1}^n(y_i -\gamma)^2\)
\[
\begin{aligned}
&\frac{\partial \mathcal{L}(y_i, \gamma)}{\partial \gamma} = -2 \cdot \sum_{i=1}^n(y_i -\gamma) = 0 \\
&\implies \sum_{i=1}^n (y_i -\gamma) = 0 \\
&\implies \sum_{i=1}^n y_i = n.\gamma \\
&\therefore \gamma = \frac{1}{n} \sum_{i=1}^n y_i
\end{aligned}
\]
{{< /panel >}}

{{< panel color="navy" title="Why optimal leaf 🍃value is the ‘Mean' of the residuals for MSE ?" >}}
💡To minimize cost, take derivative of cost function w.r.t ‘\(\gamma\)' and equate to 0:

**Cost Function** = \(J(\gamma )\)
\[J(\gamma )=\sum _{x_{i}\in R_{jm}}\frac{1}{2}(y_{i}-(F_{m-1}(x_{i})+\gamma ))^{2}\]
We know that:
\[ r_{i}=y_{i}-F_{m-1}(x_{i})\]
\[\implies J(\gamma )=\sum _{x_{i}\in R_{jm}}\frac{1}{2}(r_{i}-\gamma )^{2}\]
\[\frac{d}{d\gamma }\sum _{x_{i}\in R_{jm}}\frac{1}{2}(r_{i}-\gamma )^{2}=\sum _{x_{i}\in R_{jm}}-(r_{i}-\gamma )=0\]
\[\implies \sum _{x_{i}\in R_{jm}}\gamma -\sum _{x_{i}\in R_{jm}}r_{i}=0\]

👉Since, \(\gamma\) is constant for all \(n_j\) samples in the leaf, \(\sum _{x_{i}\in R_{jm}}\gamma =n_{j}\gamma \)
\[n_{j}\gamma =\sum _{x_{i}\in R_{jm}}r_{i}\]
\[\implies \gamma =\frac{\sum _{x_{i}\in R_{jm}}r_{i}}{n_{j}}\]

Therefore, \(\gamma\) = average of all residuals in the leaf.

**Note**: \(R_{jm}\)(Regions): Region of \(j_{th}\) leaf in \(m_{th}\)tree.
{{< /panel >}}

{{< video "https://youtu.be/KqIOqbq7LKU" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/decision_trees/adaboost" >}}">Previous: AdaBoost</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/decision_trees/gbdt_algorithm" >}}">Next: GBDT Algorithm</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```