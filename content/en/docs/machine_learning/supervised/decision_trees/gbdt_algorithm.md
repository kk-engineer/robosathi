---
title: GBDT Algorithm
description: GBDT Algorithm
date: 2026-02-14
weight: 2491
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfYIFfsbRfK_M7gObPE_vwU" 
"Decision Tree | All Videos" >}}

<br>

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/gbdt_algorithm/slide_01_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Gradient Boosting Machine" >}}
- GBM treats the final model as weighted 🏋️‍♀️ sum of ‘m' weak learners:
- : The initial base model (usually a constant).
- : The total number of boosting iterations (number of trees).
- (Leaf Weight): The optimized value for leaf in tree .
- (Nu): The Learning Rate or Shrinkage; prevent overfitting.
- : ‘Indicator Function'; It is 1 if data point falls into leaf of the tree, and 0 otherwise.
- (Regions): Region of leaf in tree.
\[F_{M}(x)=F_{0}(x)_{⏟}_{Initial Guess}+ν\sum_{m=1}^{M}\sum_{j=1}^{J_{m}}\gamma_{jm}I(x∈R_{jm})_{⏟}_{Weak Learnerh_{m}(x)}\]
{{< /panel >}}

{{< panel color="green" title="Algorithm" >}}
- Step 1: Initialization.
- Step 2: Iterative loop 🔁 : for i=1 to m.
- 2.1: Calculate pseudo residuals ‘'.
- 2.2: Fit a regression tree 🌲‘'.
- 2.3:Compute leaf 🍃weights 🏋️‍♀️ ‘'.
- 2.4:Update the model.
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/gbdt_algorithm/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="navy" title="Step 1: Initialization" >}}
- Start with a function that minimizes our loss function;
- for MSE its mean.
- MSE Loss =
\[F_{0}(x)=argmin_{\gamma}\sum_{i=1}^{n}L(y_{i},\gamma)\]
{{< /panel >}}

{{< panel color="blue" title="Step 2.1: Calculate pseudo residuals ‘'" >}}
- Find the ‘gradient' of error; Tells us the direction and magnitude needed to reduce the loss.
\[r_{im}=-\frac{∂L(y_{i},F(x_{i}))}{∂F(x_{i})}_{F(x)=F_{m-1}(x)}\]
{{< /panel >}}

{{< panel color="orange" title="Step 2.2: Fit regression tree ‘'" >}}
- Train a tree to predict the residuals ‘';
- Tree 🌲 partitions the data into leaves 🍃 (regions )
{{< /panel >}}

{{< panel color="green" title="Step 2.3: Compute leaf weights ‘'" >}}
- Within each leaf 🍃, we calculate the optimal value ‘' that minimizes the loss for the samples in that leaf 🍃.
- ➡️ The optimal leaf 🍃value is the ‘Mean'(MSE) of the residuals ;
\[\gamma_{jm}=argmin_{\gamma}\sum_{x_{i}∈R_{jm}}L(y_{i},F_{m-1}(x_{i})+\gamma)\]
{{< /panel >}}

{{< panel color="red" title="Step 2.4: Update the model." >}}
- Add the new ‘correction' to the existing model, scaled by the learning rate.
- : ‘Indicator Function'; It is 1 if data point falls into leaf of the tree, and 0 otherwise
\[F_{m}(x)=F_{m-1}(x)+ν⋅\sum_{j=1}^{J_{m}}\gamma_{jm}I(x∈R_{jm})_{⏟}_{h_{m}(x)}\]
{{< /panel >}}

{{< video "https://youtu.be/yf8a871iqt8" >}}
<br><br>
```End of Section```