---
title: LSTM
description: Long Short Term Memory
date: 2026-04-30
weight: 6
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxcDlHCeNiKbRhLWKVunQaxn" 
"Natural Language Processing | Full Course" >}}

{{< panel color="red" title="RNN Limitation" >}}
RNNs are not good at capturing long range dependencies (due to vanishing gradient problem).

{{< imgproc "images/natural_language_processing/lstm/long_range_dependency.png" Resize "800x" >}}{{< /imgproc >}}

By the time the RNN is processing "_not entertaining_" it forgets the subject, i.e, "_Jurassic Park movie_"
because they are separated too far.
{{< /panel >}}

{{< panel color="blue" title="Long Short Term Memory (LSTM)"  id="lstm">}}
LSTM solves vanishing gradient problem by introducing:
- _Cell State_ (\(C_t\)):  which acts as a "long-term" memory conveyor belt that runs parallel to the 
- _Hidden State_ (\(h_t\)):  the "short-term" working memory (similar to RNN)

**LSTM Memory Cell**
{{< imgproc "images/natural_language_processing/lstm/lstm_memory_cell.png" Resize "800x" >}}{{< /imgproc >}}

**LSTM Architecture**
- Each gate in an LSTM functions as a single-layer feedforward neural network that lives inside the LSTM cell.
- Each gate has its own unique, learnable weight matrices (\(W\)) and bias vectors (\(b\)).

{{< /panel >}}

{{< panel color="orange" title="Forget Gate" >}}
Decides what information from the previous cell state (\(C_{t-1}\)) is no longer useful and should be discarded.
\[f_t = \sigma(W_f \cdot [h_{t-1}, x_t] + b_f)\]

- \(f_t = 0\): “forget” the previous memory entirely.
- \(f_t = 1\): “remember” everything.

[Read more about Vector Operations]({{<ref  "/docs/maths/linear_algebra/vector_fundamentals/#vector_operations"  >}}) <br>
[Read more about Activation Function]({{<ref  "/docs/deep_learning/activation_function/"  >}})
{{< /panel >}}

{{< panel color="green" title="Input Gate & Candidates" >}}
This stage decides what new information will be stored in the cell state (\(C_t\)).

- _Input Gate_: Decides which values to update.
\[ i_t = \sigma(W_i \cdot [h_{t-1}, x_t] + b_i) \]
- _Candidates_: Creates a vector of new candidate values that could be added to the state.
\[\tilde{C}_t = \tanh(W_C \cdot [h_{t-1}, x_t] + b_C)\]
- _Update the Cell State_: This is the "memory update" where the old memory is scaled by the forget gate and the new information is scaled by the input gate.
\[C_t = \underbrace{f_t \odot C_{t-1}}_{\text{Filtered\ Old\ Info}} + \underbrace{i_t \odot \tilde{C}_t}_{\text{Filtered\ New\ Info}}\]

[Read more about Vector Operations]({{<ref  "/docs/maths/linear_algebra/vector_fundamentals/#vector_operations"  >}}) <br>
[Read more about Activation Function]({{<ref  "/docs/deep_learning/activation_function/"  >}})
{{< /panel >}}

{{< panel color="magenta" title="Output Gate" >}}
Determines the next hidden state (\(h_t\)).
\[o_t = \sigma(W_o \cdot [h_{t-1}, x_t] + b_o) \]
\[h_t = o_t \odot \tanh(C_t)\]
This '\(h_t\)' is used for predictions and as input for the next time step. 

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
| Forget Gate | Decide which information to delete. |
| Input Gate | Decide which information to add. |
| Candidate | Actual new information. |
| Cell State | Long-term memory; conveyor belt. |
| Output Gate | Decide the next hidden state (short-term memory). |
{{< /panel >}}

{{< panel color="orange" title="Back Propagation Through Time" >}}
Now let's understand how back propagation through time happens in LSTM.<br>
It is similar to RNN as LSTM is also sequential in nature and processes words in a sentence one by one.

- Cell State = \(C_t = f_t \odot C_{t-1} + i_t \odot \tilde{C}_t\) 
- Gradient = \(\frac{\partial c_{t} } {\partial c_{t-1}} = f_t\) 
- Recursively (for all words at different time steps): 
\[ \frac{\partial c_{t} } {\partial c_{k}} = \prod_{i=k+1}^t f_i\]

Therefore, in LSTM , the gradient is determined by the forget gate \(f_t\).
- If the information is important then the network sets the \(f_t = 1\).
- This means the gradient can flow backwards through hundreds of time steps without being scaled down to zero.

_Note_: Therefore, unlike RNNs, the vanishing/exploding gradient problem is significantly reduced in LSTM,
because of the stable gradient flow, allowing LSTM to learn long range dependencies.

In RNN, the gradient is given by:
\[ \frac{\partial E_t}{\partial h_k } = \delta_t \prod_{i=k+1}^t  \sigma'(a_i).W \propto \prod \text{Activation Gradient x Weight} \]

[Read more about Back Propagation Through Time in RNN]({{<ref  "/docs/natural_language_processing/rnn/#bptt"  >}}) <br>
[Read more about Vanishing Gradient Problem]({{<ref  "/docs/natural_language_processing/rnn/#vanishing_gradient"  >}})

{{< /panel >}}

{{< panel color="cyan" title="Constant Error Carousel" id="lstm_cec" >}}
First of all let us understand what is the meaning of "Carousel". 

**Carousel** 🎠 is a rotating circular amusement ride with seats (often horses) commonly called a merry-go-round, or a circular conveyor system.

And, now let us understand the meaning of **Constant Error Carousel**.

If we place a "message" (the gradient) on a horse, and the carousel rotates with no friction or resistance (\(f_t=1\)), 
the information keeps circulating exactly as it is for an infinite number of rotations.

In other words, if the forget get output for a word is set to 1, then the model does not forget it 
even if there are infinite number words before it till the beginning of the sentence, i.e, no vanishing gradient problem.

{{< /panel >}}

{{< video "https://youtu.be/AJy9U2YFAtI" >}}


<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/natural_language_processing/rnn" >}}">Previous: RNN</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/natural_language_processing/gru" >}}">Next: GRU</a></span>
</div>
<!-- nav-panel:end -->
