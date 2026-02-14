---
title: Regularization
description: Regularization
date: 2026-02-14
weight: 244
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfYIFfsbRfK_M7gObPE_vwU" 
"Decision Tree | All Videos" >}}

<br>

{{< panel color="blue" title="Over-Fitting" >}}
- Because trees🌲 are non-parametric and ‘greedy'💰, they will naturally try to grow 📈 until every leaf 🍃 is pure, effectively memorizing noise and outliers rather than learning generalizable patterns.
{{< /panel >}}

{{< panel color="orange" title="Tree 🌲 Size" >}}
- As the tree 🌲 grows, the amount of data in each subtree decreases 📉, leading to splits based on statistically insignificant samples.
{{< /panel >}}

{{< panel color="green" title="Regularization Techniques" >}}
- Pre-Pruning ✂️ &
- Post-Pruning ✂️
{{< /panel >}}

{{< panel color="red" title="Pre-Pruning ✂️" >}}
- ‘Early stopping' heuristics (hyper-parameters).
- max_depth: Limits how many levels of ‘if else' the tree can have; most common.
- min_samples_split: A node will only split, if it has at least 'N' samples; smooths the model (especially in regression), by ensuring predictions are based on an average of multiple points.
- max_leaf_nodes: Limiting the number of leaves reduces the overall complexity of the tree, making it simpler and less likely to memorize the training data's noise.
- min_impurity_decrease: A split is only made if it reduces the impurity (Gini/MSE) by at least a certain threshold.
{{< /panel >}}

{{< panel color="navy" title="Max Depth Hyper Parameter Tuning" >}}
- Max Depth Hyper Parameter Tuning
{{< imgproc "images/machine_learning/supervised/decision_trees/regularization/slide_05_01.tif" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="Post-Pruning ✂️" >}}
- Let the tree🌲 grow to its full depth (overfit) and then ‘collapse' nodes that provide little predictive value.
- Minimal Cost Complexity Pruning
{{< /panel >}}

{{< panel color="orange" title="Minimal Cost Complexity Pruning ✂️" >}}
- Define a cost-complexity 💰 measure that penalizes the tree 🌲 for having too many leaves 🍃.
- R(T): total misclassification rate (or MSE) of the tree
- |T|: number of terminal nodes (leaves)
- : complexity parameter (the ‘tax' 💰 on complexity)
- Logic:
- If =0, the tree is the original overfit tree.
- As increases 📈, the penalty for having many leaves grows 📈.
- To minimize the total cost 💰, the model is forced to prune branches🪾 that do not significantly reduce R(T).
- Use cross-validation to find the ‘sweet spot' that minimizes validation error.
\[R_{\alpha}(T)=R(T)+\alpha|T|\]
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/decision_trees/regularization/slide_08_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/39F0lxpo8Hg" >}}
<br><br>
```End of Section```