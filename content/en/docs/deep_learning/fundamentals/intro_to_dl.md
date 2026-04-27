---
title: Intro to DL
description: Introduction to Deep Learning
date: 2026-04-27
weight: 1
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxe749nPGDV2cd6SR6zIZIJl" 
"Deep Learning Fundamentals | Full Course" >}}

{{< definition title="Deep Learning">}}
📘 Deep learning is a subset of AI and machine learning that uses multi-layered artificial neural networks to simulate 
human-like learning, analyzing vast data to identify complex patterns, such as recognizing objects in photos, 
detecting medical anomalies, or processing natural language, like LLMs.

{{< imgproc "images/deep_learning/fundamentals/intro_to_dl/dl_ai.png" Resize "800x" >}}{{< /imgproc >}}

💡 The ‘**deep**’ in ‘deep learning’ stands for the idea of successive layers of representations. 

🐋 It is "**deep**" because it uses many layers (often hundreds) to automatically extract, transform, 
and map data features into predictions, surpassing traditional machine learning in handling _unstructured_ data.

🖼️ **A deep neural network for digit classification**
{{< imgproc "images/deep_learning/fundamentals/intro_to_dl/digit_classification.png" Resize "800x" >}}{{< /imgproc >}}

📘 **Deep learning** is a multistage way to learn data representations. 

💡 It’s a simple idea - but, as it turns out, very simple mechanisms, sufficiently
scaled, can end up looking like _magic_.

🖼️ **A fully connected neural network**
{{< imgproc "images/deep_learning/fundamentals/intro_to_dl/neural_network.png" Resize "800x" >}}{{< /imgproc >}}

{{< /definition >}}

{{< question >}}
What makes deep learning different ?
{{< /question >}}

{{< answer >}}
**Feature Engineering**: Deep learning completely automates what used to be the most crucial step in a machine learning workflow,
 making problem-solving much easier.

**Performance**: Better performance for solving many kinds of problems, especially with unstructured data.

{{< /answer >}}

{{< panel color="orange" title="History of Deep Learning" >}}
Although deep learning is a fairly old subfield of machine learning, it only rose to prominence in the early 2010s.

- Perceptron (1957), Frank Rosenblatt
- Back Propagation (1986), Geoffrey Hinton
- LSTM (1997), Sepp Hochreiter and Jürgen Schmidhuber

Some of the important algorithms such as back propagation, long short term memory (time series) of deep learning 
were well understood before 2000s and have barely changed since then.

**Break Through Moment** <br>
It began with a win in academic image-classification competitions with GPU-trained deep neural networks.

🚀 But the watershed moment came in **2012**, with the entry of **Geoffrey Hinton’s** group in the yearly large-scale 
image-classification challenge **ImageNet** (ImageNet Large Scale Visual Recognition Challenge, or **ILSVRC** for short). 

**ImageNet** <br>
The ImageNet challenge was very difficult at the time, consisting of classifying high-resolution color images into 1,000 different categories after training on 1.4 million
images.

- In 2011, the top-five accuracy of the winning model, based on classical approaches to computer vision, was only 74.3%.
- Then, in 2012, a team led by **Alex Krizhevsky** and advised by **Geoffrey Hinton** was able to achieve a top-five accuracy 
of 83.6% — a significant breakthrough.
- Since then, the competition has been dominated by deep convolutional neural networks.

_Note_: By 2015, the winner reached an accuracy of 96.4%, and the classification task on ImageNet was considered to be a completely solved problem.

{{< /panel >}}

{{< panel color="green" title="Why did Deep Learning take-off now ?" >}}
**Driving Forces**
- Hardware
- Datasets and Benchmarks
- Algorithmic Advances 

_Note_: The real bottlenecks throughout the 1990s and 2000s were data and hardware.

**Experiments and Engineering** <br>
Because the deep learning field is guided by experimental findings rather than by theory, algorithmic advances only become possible when appropriate data and hardware are available to try new ideas 
(or to scale up old ideas, as is often the case). 

Machine learning isn’t mathematics or physics, where major advances can be done with a pen and a piece of paper. 

🚀 It’s an engineering science.

{{< /panel >}}

{{< panel color="grey" title="Hardware" >}}
**Graphical Processing Unit (GPU)** <br>
Throughout the 2000s, companies like NVIDIA and AMD invested billions of dollars in developing fast, massively parallel chips (GPUs) for video games to render complex 3D scenes in real time on the computer screen.

This investment came to benefit the scientific community when, in 2007, NVIDIA launched CUDA, a programming interface for its line of GPUs.

Deep neural networks, consisting mostly of many small matrix multiplications, are also highly parallelizable using GPUs.

{{< /panel >}}

{{< panel color="orange" title="Data" >}}
💡 AI is sometimes heralded as the new _industrial revolution_. <br>
If deep learning is the _steam engine_ of this revolution, then data is its _coal_: the raw material that powers 
our intelligent machines, without which nothing would be possible.

🌐 When it comes to data, in addition to the exponential progress in storage hardware over the past 20 years 
(following Moore’s law), the game changer has been the rise of the **internet**, making it feasible to collect and 
distribute very large datasets for machine learning. 

Today, large companies work with image datasets, video datasets, and natural language datasets that could not 
have been collected without the internet.

{{< /panel >}}

{{< panel color="navy" title="Algorithmic Advances" >}}
In addition to hardware and data, until the late 2000s, we were missing a reliable way
to train very deep neural networks. <br>
As a result, neural networks were still _fairly shallow_, using only one or two layers 
of representations; thus, they weren’t able to shine against more-refined shallow methods such as **SVMs** and **Random Forests**.

- The key issue was that of _gradient propagation_ through deep stacks of layers. 
- The feedback signal used to train neural networks would fade away as the number of layers increased.

🎯 This changed around 2009–2010 with the advent of several simple but important
algorithmic improvements that allowed for better gradient propagation:
- Better activation functions for neural layers, such as _ReLU_.
- Better weight-initialization schemes, such as, _He_ (2015) and _Xavier initialization_ (2010).
- Better optimization schemes, such as _RMSProp_ (2012) and _Adam_ (2014).
- Advanced ways to improve gradient propagation were discovered, such as _batch normalization_ (2015), _residual connections_ (2015).

{{< /panel >}}

{{< video "https://youtu.be/wjbafRJiD18" >}}

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/deep_learning/fundamentals/xor_problem" >}}">Next: XOR Problem</a></span>
</div>
<!-- nav-panel:end -->