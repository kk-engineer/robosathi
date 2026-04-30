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

{{< panel color="orange" title="Reset Gate" >}}
Decides how much of the past hidden state (\(h_{t-1}\)) is relevant to calculating the current candidate.
\[r_t = \sigma(U_r x_t + W_r h_{t-1} + b_r)\]

- \(r_t = 0\): “forget” the past context entirely. 
- \(r_t = 1\): use everything from the past.

[Read more about Vector Operations]({{<ref  "/docs/maths/linear_algebra/vector_fundamentals/#vector_operations"  >}}) <br>
[Read more about Activation Function]({{<ref  "/docs/deep_learning/activation_function/"  >}})
{{< /panel >}}

{{< panel color="green" title="Candidate Hidden State" >}}
This is the "suggestion" for what the new state should look like.
\[\tilde{h}_t = \tanh(U x_t + W(r_t \odot h_{t-1}) + b_h)\]

_Note_: If \(r_t=0\), then \(r_t \odot h_{t-1}\)￼ will wipe out the previous state completely.

[Read more about Vector Operations]({{<ref  "/docs/maths/linear_algebra/vector_fundamentals/#vector_operations"  >}}) <br>
[Read more about Activation Function]({{<ref  "/docs/deep_learning/activation_function/"  >}})
{{< /panel >}}

{{< panel color="magenta" title="Update Gate" >}}
Performs a linear interpolation (slider) between the old state and the new suggestion.

\[z_t = \sigma(U_z x_t + W_z h_{t-1} + b_z)\]
Final state:
\[h_t = \underbrace{z_t \odot h_{t-1}}_{\text{Keep\ the\ Old}} +  \underbrace{(1 - z_t) \odot \tilde{h}_t}_{\text{Adopt\ the\ New}} \]

[Read more about Vector Operations]({{<ref  "/docs/maths/linear_algebra/vector_fundamentals/#vector_operations"  >}}) <br>
[Read more about Activation Function]({{<ref  "/docs/deep_learning/activation_function/"  >}})
{{< /panel >}}

{{< panel color="cyan" title="Note" >}}
- Sigmoid (Gates): Outputs 0 to 1; 
  - For "gating" (blocking or passing info).
- Tanh (Candidate): Outputs -1 to 1; 
  - Allows the candidate to either add to the memory (positive values) or subtract/correct the memory (negative values). 
- Element Wise Product: 
\[ \mathbf{a} \odot \mathbf{b} = \begin{bmatrix} a_1 \\ a_2 \\ \vdots \\ a_n \end{bmatrix} \odot \begin{bmatrix} b_1 \\ b_2 \\ \vdots \\ b_n \end{bmatrix} = \begin{bmatrix} a_1 b_1 \\ a_2 b_2 \\ \vdots \\ a_n b_n \end{bmatrix} \]

**Gates Summary**
| Component | Role |
| :--- | :--- |
| Reset Gate | "Clear the cache for a new sub-topic." |
| Candidate | Propose new state. |
| Update Gate | Mix old + new info. |
{{< /panel >}}

{{< panel color="orange" title="Back Propagation Through Time" >}}
Now let's understand how back propagation through time happens in GRU.<br>
It is similar to LSTM as GRU is also sequential in nature and processes words in a sentence one by one.

- Hidden State = \(h_t = z_t \odot h_{t-1} + (1 - z_t) \odot \tilde{h}_t\) <br>
- Gradient = \(\frac{\partial h_t}{\partial h_{t-1}} = z_t + (1-z_t)(W.r_t.tanh')\) <br>
Recursively (for all words at different time steps): 
\[ \frac{\partial h_t}{\partial h_{k}} = \prod_{i=k+1}^t z_i + (1-z_i)(W.r_i.tanh')\]

Therefore, in GRU , the gradient is mostly determined by \(z_t\).
- If the information is important then the network sets the \(z_t = 1\).
- This means the gradient can flow backwards through hundreds of time steps without being scaled down to zero.

_Note_: Therefore, unlike RNNs, the vanishing/exploding gradient problem is significantly reduced in GRU,
because of the stable gradient flow, allowing GRU to learn long range dependencies.

In RNN, the gradient is given by:
\[ \frac{\partial E_t}{\partial h_k } = \delta_t \prod_{i=k+1}^t  \sigma'(a_i).W \propto \prod \text{Activation Gradient x Weight} \]

[Read more about Back Propagation Through Time in RNN]({{<ref  "/docs/natural_language_processing/rnn/#bptt"  >}}) <br>
[Read more about Vanishing Gradient Problem]({{<ref  "/docs/natural_language_processing/rnn/#vanishing_gradient"  >}})

{{< /panel >}}

{{< panel color="cyan" title="Constant Error Carousel" id="gru_cec" >}}
First of all let us understand what is the meaning of "Carousel". 

**Carousel** 🎠 is a rotating circular amusement ride with seats (often horses) commonly called a merry-go-round, or a circular conveyor system.

And, now let us understand the meaning of **Constant Error Carousel**.

If we place a "message" (the gradient) on a horse, and the carousel rotates with no friction or resistance (\(f_t=1\)), 
the information keeps circulating exactly as it is for an infinite number of rotations.

In other words, if the forget get output for a word is set to 1, then the model does not forget it 
even if there are infinite number words before it till the beginning of the sentence, i.e, no vanishing gradient problem.

{{< /panel >}}

{{< panel color="grey" title="How GRU Works?" >}}
Let us understand how GRU works with the help of few examples.

**1. Context Shift** <br>
Say, there is a context shift between sentences, i.e, say , the previous sentence discussed 'Stars' 
and in the current sentence we start discussing "Fish". <br>
Clearly, there is a context shift, and we want to the network to forget the previous context entirely and start fresh.

In that case \(r_t=0, ~ z_t=0 \), so that the current input '\(x_t\)' is passed as it is.

{{< imgproc "images/natural_language_processing/gru/context_shift.png" Resize "800x" >}}{{< /imgproc >}}

**2. Ignore Current Input** <br>
Say, we have a GRU processing a long review to determine sentiment: 

"The phone I bought yesterday, despite having a slightly scratched screen that makes it annoying to use sometimes, 
is _absolutely amazing_ and has a black charger." 

- The model reads "absolutely amazing" and updates its hidden state to a strong positive sentiment.
- Later the review adds irrelevant details like - "has a black charger", 
  - so GRU learns to set \(z_t \approx 1\) when these words are processed, and ignores them.

_Note_: When GRU wants to ignore current input to preserve long-term memory, it sets \(z_t\) close to 1.

{{< imgproc "images/natural_language_processing/gru/ignore_input.png" Resize "800x" >}}{{< /imgproc >}}

**3. Default Behavior (RNN)** <br>
GRU isn't trying to store long-term memories; it is simply processing the current input \(x_t\)
in the context of the immediately preceding hidden state \(h_{t-1}\).

- Reset Gate \(r_t = 1\): The candidate hidden state \(\tilde{h_{t}}\) has full access to the previous hidden state (\(h_{t-1}\)). 
  - Nothing from the past is blocked.
- Update Gate (\(z_t = 0\)): The network decides to entirely replace the old state with the new candidate state.

<br>
{{< imgproc "images/natural_language_processing/gru/default_rnn.png" Resize "800x" >}}{{< /imgproc >}}

_Note_: GRU essentially "forgets" the past and behaves like a standard Simple RNN.

{{< /panel >}}

{{< video "https://youtu.be/QeHHqUsRIUE" >}}

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/natural_language_processing/lstm" >}}">Previous: LSTM</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/natural_language_processing/gru" >}}">Next: GRU</a></span>
</div>
<!-- nav-panel:end -->
