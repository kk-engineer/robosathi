---
title: GRU
description: Gated Recurrent Unit
date: 2026-04-30
weight: 7
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxcDlHCeNiKbRhLWKVunQaxn" 
"Natural Language Processing | Full Course" >}}

{{< panel color="red" title="Issue with LSTM" >}}
LSTMs are complex, which makes them slower to train and more computationally intensive.
- three gates (forget, input, output) and many parameters.
- separate long-term memory (cell state) and short term memory (hidden state).

{{< /panel >}}

{{< panel color="blue" title="Gated Recurrent Unit"  id="gru" >}}
GRU is simplified LSTM with fewer gates, fewer parameters and simpler architecture, 
while retaining the ability to capture long-term dependencies, often leading to faster training times and reduced computational costs.

- _Simpler Architecture_:
  - GRU has two gates (reset, update) instead of three. 
  - This reduces the number of weight matrices by roughly 25-33%, leading to faster training and lower memory consumption. 
- _Structural Simplicity_:
  - By merging the "Cell State" (\(C_t\)) and "Hidden State" (\(h_t\)) into a single vector, it eliminates the redundant storage of information.
- _Performance on Small Data_:
  - Due to fewer parameters, GRUs are often less prone to overfitting than LSTMs when training on smaller datasets.

**GRU Memory Cell**
{{< imgproc "images/natural_language_processing/gru/gru_memory_cell.png" Resize "800x" >}}{{< /imgproc >}}

**GRU Architecture**
- Each gate in an GRU functions as a single-layer feedforward neural network that lives inside the GRU cell.
- Each gate has its own unique, learnable weight matrices (\(W\)) and bias vectors (\(b\)).
{{< /panel >}}


{{< video "https://youtu.be/QeHHqUsRIUE" >}}


<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/natural_language_processing/lstm" >}}">Previous: LSTM</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/natural_language_processing/gru" >}}">Next: GRU</a></span>
</div>
<!-- nav-panel:end -->
