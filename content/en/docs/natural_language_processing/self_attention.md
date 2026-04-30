---
title: Self Attention
description: Self Attention - Transformer Architecture
date: 2026-04-30
weight: 9
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxcDlHCeNiKbRhLWKVunQaxn" 
"Natural Language Processing | Full Course" >}}

{{< panel color="red" title="Issue with RNN based Architecture" >}}
RNNs process words sequentially, i.e, one by one. 
- To understand word 20, you must first process words 1 to 19.
- By the time the model gets to the end of a long sentence, it often "forgets" the beginning (vanishing gradient problem).

[Read more about Vanishing Gradient Problem]({{<ref  "/docs/natural_language_processing/rnn/#vanishing_gradient"  >}})

{{< imgproc "images/natural_language_processing/self_attention/cross_attention.png" Resize "800x" >}}{{< /imgproc >}}

_Note_: Luong Attention (2015) used “dot product” based attention was faster than Bahdanau Attention (2014) (additive), but was still RNN based Seq2Seq model.

[Read more about Attention Mechanism]({{<ref  "/docs/natural_language_processing/attention/#attention"  >}})

{{< /panel >}}

{{< panel color="blue" title="Attention Is All You Need !" >}}
In 2017, Transformer architecture, proposed that “Self-Attention” can be used completely for machine translation 
instead of RNNs.

Using “Self-Attention” made the model highly parallelizable because the matrix calculations can be done on GPUs in parallel.

**Transformer Architecture**
{{< imgproc "images/natural_language_processing/self_attention/transformer_architecture.png" Resize "800x" >}}{{< /imgproc >}}

_Research Paper_: Attention Is All You Need, Vaswani et al. , 2017, https://arxiv.org/pdf/1706.03762

{{< /panel >}}

{{< panel color="grey" title="Need For Self-Attention" >}}
Primary reason we need self-attention is that words do not have a fixed meaning; their meaning is defined by their neighbors and context.

**Example**
{{< imgproc "images/natural_language_processing/self_attention/self_attention_1.png" Resize "800x" >}}{{< /imgproc >}}

_Note_: Depending upon the context "it" will refer to "street" or "animal".

{{< /panel >}}

{{< panel color="orange" title="Self-Attention" id="self_attention" >}}
Unlike older models that read left-to-right, self-attention sees the whole sentence at once, allowing it to 
catch relationships whether they are side-by-side or miles apart.

Every word in a sentence looks at every other word (including itself) to decide which word is most relevant to its own meaning in that specific context.

**Self-Attention**  <br>
{{< imgproc "images/natural_language_processing/self_attention/self_attention_2.png" Resize "800x" >}}{{< /imgproc >}}
In the first sentence, "it" pays 'high attention' to _street_ and 'low attention' to _animal_. <br>
And, in the second sentences, "it" pays 'high attention' to _animal_ and 'low attention' to _street_.

{{< /panel >}}

{{< question >}}
Why is Self-Attention parallelizable?
{{< /question >}}

{{< answer >}}
Unlike RNNs, the calculation for a token does not depend on the computation of the previous token.  <br>
All tokens can attend to all other tokens at the same time, i.e,
the attention scores (dot products between '\(q\)' and '\(k\)') are computed for all pairs of tokens simultaneously on GPU cores, not one-by-one.

**Attention Mechanism**
{{< imgproc "images/natural_language_processing/self_attention/attention.png" Resize "800x" >}}{{< /imgproc >}}

The **attention score** (\(q,k,v\)) for a query '\(q\)', given keys '\(k_i\)' and values '\(v_i\)' is the summation of 
all query and key similarity scores _similarity_(\(q, k_i\)) multiplied by their corresponding values '\(v_i\)'.

[Read more about Query, Key & Value]({{<ref  "/docs/natural_language_processing/attention/#query_key_value"  >}})
{{< /answer >}} 


{{< panel color="cyan" title="Self-Attention Query, Key & Value" >}}
- **Query** (\(q_i =  W_Q^T x_i\)): "What am I looking for?"
- **Key** (\(k_i = W_K^T x_i\)): "What do I offer?" (The label others use to find me).
- **Value** (\(v_i =W_V^T x_i\)): "What information do I actually carry?"

_Note_: \(x_i \in \mathbb{R}^{d_{model} \times 1}\)￼is the input word vector and 
\(W^Q, W^K \in \mathbb{R}^{d_{model} \times d_k} \text{  and } W^V \in \mathbb{R}^{d_{model} \times d_v}\)￼are learned weight matrices.

**Individual Attention** <br>
The "match" between two words is calculated using a “dot product”. <br>
If word ‘\(i\)’ wants to know how much it should care about 
word ‘\(j\)’, it compares its '_Query_' to the other word's '_Key_':
\[e_{ij} = q_i^T k_j\]
\[\text{Scaled Score} = \frac{q_i^T k_j}{\sqrt{d_k}}\]

**Self Attention Score** <br>
We pack all the individual queries, keys, and values into matrices \(Q, K, \text{ and } V\), where,
\[Q=XW_Q, K=XW_K, \text{ and } V=XW_V\]

\[
S = QK^T = \begin{bmatrix}
q_1^T k_1 & q_1^T k_2 & \cdots & q_1^T k_n \\
q_2^T k_1 & q_2^T k_2 & \cdots & q_2^T k_n \\
\vdots & \vdots & \ddots & \vdots \\
q_n^T k_1 & q_1^Tk_2 & \cdots & q_n^T k_n
\end{bmatrix}_{n \times n}
\]

\[\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V\]

_Note_: ‘\(k\)’ is the dimension of \(Q, K, V\) vectors.

**Self Attention Example**

{{< imgproc "images/natural_language_processing/self_attention/self_attention_example.png" Resize "800x" >}}{{< /imgproc >}}

{{< /panel >}}

{{< question >}}
Why do we scale the dot product ?
\[\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d_k}}\right)V\]
{{< /question >}}

{{< answer >}}
Research paper says that -  <br>
"We suspect that for large values of \(d_k\), the dot products grow large in magnitude, 
pushing the softmax function into regions where it has extremely small gradients. <br>
To counteract this effect, we scale the dot products by \(\frac{1}{\sqrt{d_k}}\)"

Gradient of Softmax: 
\[\frac{\partial \sigma_i}{\partial z_j} = 
\begin{cases} 
\sigma_i(1 - \sigma_i) & \text{if } i = j \\
-\sigma_i\sigma_j & \text{if } i \neq j 
\end{cases}
\]

Combining both cases:
\[\frac{\partial \sigma_i}{\partial z_j} = \sigma_i (\delta_{ij} - \sigma_j)\]
where, \(\delta_{ij}\) is the _Kronecker delta_ (1 if \(i=j\) (diagonal), 0 otherwise).

e.g., say, if Softmax (\(\sigma_i\)) = 0.99, <br>
then gradient \(\frac{\partial \sigma_i}{\partial z_j} = \sigma_i(1 - \sigma_i) = (0.99)*(0.01) = 0.0099 \) <br>
which is a very low value, so the weight updates will effectively be negligible.

Dividing by \(\sqrt{d_k}\) reduces the variance back to 1, keeping the scores in a moderate range. <br>
Therefore, the scaling factor \(\frac{1}{\sqrt{d_k}}\) acts as a stabilizer, preventing the model from having extreme confidence in a few places, which enables smoother training.
{{< /answer >}}

{{< video "https://youtu.be/BHkLLR4IrV0" >}}

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/natural_language_processing/attention" >}}">Previous: Attention</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/natural_language_processing/transformer" >}}">Next: Transformer</a></span>
</div>
<!-- nav-panel:end -->
