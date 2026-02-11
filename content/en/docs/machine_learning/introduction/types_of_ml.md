---
title: Types of ML
description: Types of Machine Learning
date: 2026-02-11
weight: 2
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxeydAqz2lsSMFYinbrJy9mu" 
"Classical Machine Learning | Full Course Videos" >}}
<br>

![](https://robosathi.com/images/machine_learning/introduction/types_of_ml.png)
<br><br>


{{< definition >}}
**Supervised Learning:** <br>
Supervised Learning uses labelled data (input-output pairs) to predict outcomes, such as, spam filters. <br>

- Regression
- Classification
{{< /definition >}}

![](https://robosathi.com/images/machine_learning/introduction/supervised_learning.png)
<br><br>


{{< definition >}}
**Unsupervised Learning:** <br>
Unsupervised Learning finds hidden patterns in unlabelled data (like customer segmentation). <br>

- Clustering (k-means, hierarchical)
- Dimensionality Reduction and Data Visualization (PCA, t-SNE, UMAP)
{{< /definition >}}

![](https://robosathi.com/images/machine_learning/introduction/unsupervised_learning.png)
<br><br>

{{< definition >}}
**Semi-Supervised Learning:** <br>
Semi-Supervised Learning uses a mix of both, leveraging a small amount of labelled data with a large amount of 
unlabelled data to improve accuracy. <br>

- Pseudo-labeling
- Graph-based methods
{{< /definition >}}

{{< alert color="secondary" title="Types of Semi-Supervised Learning" >}}
**1. Pseudo-labelling:**<br>
- A model is initially trained on the available, *limited* labelled dataset. <br>
- This trained model is then used to predict labels for the unlabelled data.These predictions are called *‘pseudo-labels’*.
- The model is then retrained using both the original labelled data and the newly pseudo-labelled data. <br>


**Benefit:** <br>
It effectively expands the training data by assigning labels to previously unlabelled examples, 
allowing the model to learn from a *larger dataset*.<br>
![](https://robosathi.com/images/machine_learning/introduction/pseudo_labeling.png)
<br><br>

**2. Graph-based methods:** <br>
- Data points (both labelled and unlabelled) are represented as nodes in a graph. 
- Edges are established between nodes based on their similarity or proximity in the feature space.The weight of an edge often reflects the *degree of similarity*.
- The core principle is that similar data points should have similar labels.This assumption is propagated through the graph, effectively *‘spreading'* the labels from the labelled nodes to the unlabelled nodes based on the graph structure.
- Various algorithms, such as label propagation or graph neural networks (GNNs), can be employed to infer the labels of unlabelled nodes.

**Benefit:** <br> 
These methods are particularly useful when the data naturally exhibits a *graph-like structure* or when local neighborhood information is crucial for classification.<br>
![](https://robosathi.com/images/machine_learning/introduction/graph_based_method.png)
<br><br>
{{< /alert >}}

{{< definition >}}
**Machine Learning:** <br>
Machine Learning  =  to teach computers 💻 to learn from data, find patterns 🧮, and make decisions or predictions 
without being explicitly programmed for every task, as humans🧍‍♀️🧍 learn from experience.
<br><br>
{{< /definition >}}

![](https://robosathi.com/images/machine_learning/introduction/ai_ml_dl.png)
<br><br>

{{< alert color="secondary" title="Phases of Machine Learning" >}}
The machine learning lifecycle ♼ is generally divided into two main stages:
- Training Phase
- Runtime (Inference) Phase

![](https://robosathi.com/images/machine_learning/introduction/training_inference.png)
<br><br>

**Training Phase:** <br>
Where the machine learning model is developed and taught to understand a specific task using a large volume 
of historical data.
<br><br>
![](https://robosathi.com/images/machine_learning/introduction/training.png)
<br><br>

**Runtime (Inference) Phase:** <br> 
Where the fully trained and deployed model is put to practical use in a real-world 🌎 environment, i.e., 
to make predictions on new, unseen data.
<br><br>
![](https://robosathi.com/images/machine_learning/introduction/inference.png)
<br><br>

{{< /alert >}}

{{< video "https://youtu.be/XL143gJmUCA" >}}
<br><br>
```End of Section```