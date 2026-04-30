---
title: Attention
description: Attention Mechanism (Bahdanau Attention)
date: 2026-04-30
weight: 8
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxcDlHCeNiKbRhLWKVunQaxn" 
"Natural Language Processing | Full Course" >}}

{{< panel color="red" title="Issue with Encoder-Decoder RNNs" >}}
Entire input (\(h_1, h_2, \dots, h_T\) ) is encoded into one fixed-length vector. <br>
So, as the length of an input sentence increases performance of a basic encoder–decoder deteriorates rapidly,
because of vanishing gradient problem.

[Read more about Vanishing Gradient Problem]({{<ref  "/docs/natural_language_processing/rnn/#vanishing_gradient"  >}})

**Encoder-Decoder Architecture (RNN)**
{{< imgproc "images/natural_language_processing/attention/encoder_decoder.png" Resize "800x" >}}{{< /imgproc >}}

{{< /panel >}}

{{< panel color="blue" title="Bahdanau Attention"  id="gru" >}}
Decoder decides parts of the source sentence to pay attention to.  <br>
By letting the decoder have an attention mechanism, we relieve the encoder from the burden of having to 
encode all information in the source sentence into a fixed-length vector.  <br>
While decoding an output pay attention to only relevant inputs.


**Decoder Context**
{{< imgproc "images/natural_language_processing/attention/decoder_context_1.png" Resize "800x" >}}{{< /imgproc >}}
{{< imgproc "images/natural_language_processing/attention/decoder_context_2.png" Resize "800x" >}}{{< /imgproc >}}

_Note_: Now the decoder context is not fixed. <br>
While predicting the next word, the decoder (instead of relying only on the final encoder hidden state)
dynamically pays attention to only relevant context from encoder at that time step.

**Why it matters?** <br>
This allows the decoder to "look back" at the entire input sequence, preventing the information loss that occurs 
in basic encoder-decoder models when handling long sentences.

_Research Paper_: Neural Machine Translation by Jointly Learning to Align and Translate ; Dzmitry Bahdanau, Kyunghyun Cho, Yoshua Bengio,
2014, https://arxiv.org/pdf/1409.0473
{{< /panel >}}

{{< video "https://youtu.be/KGa7cELKpD8" >}}

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/natural_language_processing/gru" >}}">Previous: GRU</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/natural_language_processing/attention" >}}">Next: Attention Mechanism</a></span>
</div>
<!-- nav-panel:end -->
