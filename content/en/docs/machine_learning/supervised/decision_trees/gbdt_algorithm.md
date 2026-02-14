---
title: GBDT Algorithm
description: GBDT Algorithm
date: 2026-02-14
weight: 11
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfYIFfsbRfK_M7gObPE_vwU" 
"Decision Tree | All Videos" >}}

<br>

{{< panel color="green" title="Gradient Boosted Decision Tree (GBDT)" >}}
Gradient Boosted Decision Tree (GBDT) is a decision tree based implementation of Gradient Boosting Machine (GBM).

GBM treats the final model \(F_m(x)\) as weighted 🏋️‍♀️ sum of ‘m' weak learners (decision trees):
\[ F_{M}(x)=\underbrace{F_{0}(x)}_{\text{Initial\ Guess}}+\nu \sum _{m=1}^{M}\underbrace{\left(\sum _{j=1}^{J_{m}}\gamma _{jm}\mathbb{I}(x\in R_{jm})\right)}_{\text{Decision\ Tree\ }h_{m}(x)}\]
- \(F_0(x)\): The initial base model (usually a constant).
- M: The total number of boosting iterations (number of trees).
- \(\gamma_{jm}\)(Leaf Weight): The optimized value for leaf in tree .
- \(\nu\)(Nu): The Learning Rate or Shrinkage; prevent overfitting.
- \(\mathbb{I}(x\in R_{jm})\): ‘Indicator Function'; It is 1 if data point falls into leaf of the tree, and 0 otherwise.
- \(R_{jm}\)(Regions): Region of \(j_{th}\) leaf in \(m_{th}\)tree.

{{< /panel >}}

{{< panel color="orange" title="Algorithm" >}}
- Step 1: Initialization.
- Step 2: Iterative loop 🔁 : for i=1 to m.
- 2.1: Calculate pseudo residuals ‘\(r_{im}\)'.
- 2.2: Fit a regression tree 🌲‘\(h_m(x)\)'.
- 2.3:Compute leaf 🍃weights 🏋️‍♀️ ‘\(\gamma_{jm}\)'.
- 2.4:Update the model.
{{< /panel >}}

{{< panel color="navy" title="Step 1: Initialization" >}}
Start with a function that minimizes our loss function; <br>
for MSE its mean.
\[F_0(x) = \arg\min_{\gamma} \sum_{i=1}^n L(y_i, \gamma)\]
**MSE Loss** = \(\mathcal{L}(y_i, \gamma) = \sum_{i=1}^n(y_i -\gamma)^2\)
{{< /panel >}}

{{< panel color="blue" title="Step 2.1: Calculate pseudo residuals ‘\(r_{im}\)'" >}}
Find the ‘gradient' of error; <br>
Tells us the direction and magnitude needed to reduce the loss.
\[r_{im}=-\frac{∂L(y_{i},F(x_{i}))}{∂F(x_{i})}_{F(x)=F_{m-1}(x)}\]
{{< /panel >}}

{{< panel color="orange" title="Step 2.2: Fit regression tree ‘\(h_m(x)\)'" >}}
Train a tree to predict the residuals ‘\(h_m(x)\)';
- Tree 🌲 partitions the data into leaves 🍃 (\(R_{jm}\)regions )
{{< /panel >}}

{{< panel color="green" title="Step 2.3: Compute leaf weights ‘\(\gamma_{jm}\)'" >}}
Within each leaf 🍃, we calculate the optimal value ‘\(\gamma_{jm}\)' that minimizes the loss for the samples in that leaf 🍃.
\[\gamma_{jm} = \arg\min_{\gamma} \sum_{x_i \in R_{jm}} L(y_i, F_{m-1}(x_i) + \gamma)\]
➡️ The optimal leaf 🍃value is the ‘Mean'(MSE) of the residuals; \(\gamma = \frac{\sum r_i}{n_j}\)
{{< /panel >}}

{{< panel color="charcoal" title="Step 2.4: Update the model." >}}
Add the new ‘correction' to the existing model, scaled by the learning rate.
\[F_{m}(x)=F_{m-1}(x)+\nu \cdot \underbrace{\sum _{j=1}^{J_{m}}\gamma _{jm}\mathbb{I}(x\in R_{jm})}_{h_{m}(x)}\]

- \(\mathbb{I}(x\in R_{jm})\): ‘Indicator Function'; It is 1 if data point falls into leaf of the tree, and 0 otherwise.
{{< /panel >}}

{{< video "https://youtu.be/yf8a871iqt8" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/decision_trees/adaboost" >}}">Previous: AdaBoost</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/decision_trees/gbm_intro" >}}">Next: GBM Intro</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```