---
title: LLM
description: Large Language Model
date: 2026-04-30
weight: 11
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxcDlHCeNiKbRhLWKVunQaxn" 
"Natural Language Processing | Full Course" >}}

{{< panel color="blue" title="Transformer Variants" >}}
- Generative Pre-Trained Transformer (GPT); Decoder only
- Bidirectional Encoder Representations from Transformers (BERT); Encoder only; Sentiment analysis, Question answering, Search query etc.
- Bidirectional and Auto-Regressive Transformers (BART); Encoder-Decoder; Text summarization, Document denoising (reconstruct corrupted text) etc.
- Text-To-Text Transfer Transformer (T5); Encoder-Decoder; Translation, Text summarization, etc; uses task-specific prefix

**GPT Architecture (Decoder Only)**
{{< imgproc "images/natural_language_processing/llm/gpt_architecture.png" Resize "800x" >}}{{< /imgproc >}}

GPT (2018) was the first Large Language Model (LLM) based on Transformer (decoder only). <br>
Because, of the highly parallelizable architecture of Transformer, it was possible to scale and train the model on 
internet scale data, which gave us the magical powers of LLMs.
{{< /panel >}}

{{< panel color="orange" title="LLM Training Phases" >}}
LLM is first pre-trained on vast internet scale dataset to understand the language and then it is fine-tuned to do desired tasks, 
such as question answering.

The LLM training is broadly divided into 3 phases:
- Pre-Training
- Supervised Fine-Tuning (SFT)
- Reinforcement Learning from Human Feedback (RLHF)

**LLM Training Phases**
{{< imgproc "images/natural_language_processing/llm/llm_training.png" Resize "800x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Pre-Training" >}}
Model is trained on a massive, unlabeled dataset (e.g., internet scale) to learn general language features, 
grammar, syntax, and reasoning patterns, using self-supervised learning techniques.

The self-supervised techniques are:
- Causal Language Modeling (Auto-regressive)
  - Predict next token (used in GPT).
- Masked Language Modeling (used in BERT)
  - A percentage of tokens in a sentence (typically 15%) are randomly hidden or "masked," and the model must predict these missing words using context from both directions (bidirectional). 
- Next Sentence Prediction 
  - Model is given two sentences and must determine if the second sentence naturally follows the first in the original text.

{{< /panel >}}

{{< panel color="navy" title="Transfer Learning" >}}
Now we can take the "pre-trained" model that has already learned general language patterns and fine tune it for different tasks.

'Transfer learning' is primarily used to save time and computational resources when we have a limited amount of labeled data for a specific task.  <br>
By starting with a model that already "understands" general patterns—like shapes in images or grammar in text, we can adapt it to a new, related task with much less training.

**Transfer Learning**
{{< imgproc "images/natural_language_processing/llm/transfer_learning.png" Resize "800x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="rust" title="Supervised Fine-Tuning (SFT)" id="sft" >}}
While pre-training provides a broad knowledge of syntax, SFT focuses on alignment, teaching the model to follow specific instructions 
and produce functional, context-aware results.

- Code Generation 
  - The model is trained on high-quality instruction-code pairs. 
    - e.g., "Prompt: Write a Python function for binary search" → "Output: [Code snippet]”.
- Math & Reasoning (Chain of Thought)
  - Instead of training the model to give the answer directly (Prompt￼\(\rightarrow\) Answer), we train it to generate a rationale (Prompt \(\rightarrow\) Rationale \(\rightarrow\)￼ Answer); include intermediate steps, step1, step2 … to teach model “Chain of Thought” by walking through logic (also multiple turns).
- Tool/Function Calling
  - Enables LLMs to interact with external tools and APIs. 
  - Transformed LLMs from passive chatbots into Agentic AI.

{{< /panel >}}

{{< panel color="green" title="Chain of Thought" >}}
The goal of Chain of Thought (CoT) is to ensure the model does not just ‘guess’ the next token based on probability, 
but instead follows a logical path where each step provides the context for the next step.

e.g. <br>
**User**: Akshay has 5 apples. His 2 friends give him some apples. Each friend gives him 3 apples. How many apples does Akshay have now ?

**Agent**: Let’s break it down in steps:
- Number of apples Akshay had at start = 5.
- Number of friends = 2
- Number of apples from each friend = 3
- Total number of apples from friends = 2x3 = 6
- Total number of Apples = 5 + 6 = 11
- Therefore, Akshay has 11 apples now.

_Research Paper_: Chain-of-Thought Prompting Elicits Reasoning in Large Language Models, Wei et al. , 2023,  https://arxiv.org/pdf/2201.11903

{{< /panel >}}

{{< panel color="blue" title="Tool/Function Calling" >}}
Train the model to recognize when to pause text generation and output a specific JSON format to invoke an external tool/function. <br>
Say, we ask some information, like weather of a city, the LLM will not have that information and need to search the web or call some external API.

_Note_: Tool calling in LLMs is core enabler that transformed LLMs from passive chatbots into Agentic AI.

- **Function Calling** (specific API):
  - **User Prompt**: "What is the weather in Pune?"
  - **Model Output**:
    - {
        "tool_call": {
        "name": "get_weather",
        "arguments": {"location": "Pune", "unit": "celsius"}
        }
    }
- **Tool Calling**:
  - Model decides to use a _Code Interpreter_ or a _Web Search_ tool that is not just a simple API function.

    - Tool 1 (Calculator): {“tool”: "calculator", "input": “sqrt(15625)"}
    - Tool 2(Web Search): {"tool": "web_search", "query": "recent AI news"} 
      - {"name": "web_search", "arguments": {"query": "top AI news 2026/site:hackernews.com OR site:arxiv.org OR site:ieee.org OR site:wired.com"}

_Research Paper_: Toolformer: Language Models Can Teach Themselves to Use Tools, Schick et al. , 2023,  https://arxiv.org/pdf/2302.04761

{{< /panel >}}

{{< video "https://youtu.be/NTS0CuMItDY" >}}

{{< panel color="magenta" title="Limitations of SFT" >}}
- _The "Average" Problem_: 
  - If a model has been fine-tuned to solve a category of maths problems in 5 different ways, out of which 2 are good but 3 are mediocre; SFT tries to satisfy the average of those patterns. 
  - It does not inherently know which one is “better”.
- _Safety/Nuance_: 
  - It is easy to show a model a "correct" answer, but it is very hard to show it every possible "wrong" or "unsafe" answer.
  - The model may inadvertently provide instructions for harmful activities (e.g., "_how to build a bomb_") because that data existed in its massive training set.

{{< /panel >}}

{{< panel color="blue" title="Reinforcement Learning from Human Feedback (RLHF)" id="rlhf" >}}
"Polishing" phase that aligns an LLM's raw intelligence with human values, safety, and helpfulness.

Performed using **Direct Preference Optimization** (DPO).

**Key Use Cases of RLHF**
- _Instruction Following_: Ensuring the model actually follows complex constraints (e.g., "Write this in 50 words only.").
- _Safety Guardrails_: Teaching the model to decline requests for hate speech or dangerous instructions.
- _Subjective Nuance_: Aligning the "tone" of the model (e.g., making it sound professional vs. casual).
- _Factuality_: Encouraging the model to say "I don't know" when it is uncertain, rather than hallucinating a confident but wrong answer.
- _Coding Style_: Ranking code that is more "pythonic" or efficient even if multiple versions are functionally correct.

_Research Paper_: InstructGPT: Training language models to follow instructions with human feedback, Ouyang et al., 2022, https://arxiv.org/pdf/2203.02155

{{< /panel >}}

{{< panel color="orange" title="Direct Preference Optimization (DPO)" id="dpo" >}}
**Pairwise comparison**
1. Generate Response 
- The SFT model takes a prompt and generates 2 different responses (￼).
2. Better Response 
- Human (or other LLM) chooses which is the better response.
Result
3. A triplet is generated :￼
- \(\{prompt, chosen\_response, rejected\_response\}\)

**Optimization** <br>
Compares the 2 versions of the model simultaneously.

- Policy Model (\(\pi_{\theta}\)): The model we are currently training.
- Reference Model (\(\pi_{ref}\)): A frozen copy of our SFT model.

**Loss Function**: The goal of the loss function is to increase the likelihood of the chosen response and 
decrease the likelihood of the rejected one, while staying "close" to the original model.

_Note_: Does not train a separate reward model as in Proximal Policy Optimization (PPO).

{{< /panel >}}

{{< video "https://youtu.be/RBWVB9ubXqM" >}}

{{< panel color="blue" title="Parameter-Efficient Fine-Tuning (PEFT)" id="peft" >}}
In SFT or RLHF we are not teaching the model language from scratch but only teaching a pre-trained model to follow instructions.

Training LLMs is very costly, both wrt to time and resources.

**Challenge** <br>
When we fine-tune an LLM, we do not just store the model's weights. <br>
We also have to store optimizer states, gradients, and activations. <br>

**7B parameters LLM**
{{< imgproc "images/natural_language_processing/llm/peft.png" Resize "800x" >}}{{< /imgproc >}}

**Solution** <br>
Instead of retraining the entire \(d_{model} \times d_{model}\)￼ weight matrices, 
PEFT methods only update a tiny fraction (often￼ \(<1\%\)) of the parameters while keeping the original "knowledge" of the 
pre-trained Transformer frozen.

Key PEFT methods include LoRA (most popular), QLoRA, Prefix Tuning, and Adapter layers.

**Low-Rank Adaptation (LoRA)** <br>
It freezes the original model weights and injects two small, trainable low-rank matrices into the attention layers. <br>
Reduces trainable parameters by up to 99% while maintaining near-identical performance to full fine-tuning. <br>
Prevents “_catastrophic forgetting_”.

{{< question >}}
Why Attention Layers ?
{{< /question >}}

{{< answer >}}
Attention layers are the primary target for LoRA because they act as the "brain" for context and relationships in Transformers. <br>
By modifying the Attention Mechanism, we change how the model decides which parts of the input are relevant to each other.

While weights of Feed Forward Neural Network and Layer Normalization are frozen to avoid catastrophic forgetting.
{{< /answer >}}

**Low Rank Matrices** <br>
When we train a model, we are looking for a change in weights, which we call \(\Delta W\).
\[\Delta W_{d \times d} = B_{d \times r} \times A_{r \times d}\]
\[W_{new} = W_{old} + BA\]

_Note_: ‘\(r\)’ is the rank, a small integer (e.g., 4, 8, or 16).

**PEFT (LoRA) Working**
- _Initialization_:
  - Matrix ‘\(B\)’ is initialized to 0.
  - Matrix ‘\(A\)’ is initialized with random Gaussian noise.
  - At the very start of training,\(BA = 0\), meaning the model starts with the exact same behavior as the original pre-trained model.
- _Forward Pass_:
  - Input ‘\(x\)’ is passed through both the frozen weights and the trainable "adapters" in parallel. 
  - \(h = Wx + BAx\)￼
- Back Propagation:
  - Gradients are only calculated and updated for matrices ‘\(A\)’ and ‘\(B\)’. 
  - Because ‘\(r\)’ is so small, we are often training less than 1% of the total parameters.
- Inference:
  - After training, we can mathematically "merge" the weights:\(W_{updated} = W + BA\). 
  - This results in a single matrix of the original size, meaning the model runs just as fast as the original with zero overhead.

**Example** <br>
\(W_q = d \times d\) and \(B = d \times r\), \(A = r \times d\) <br>
Let, d = 1000, and r = 4.

- Full Matrix (\(W\)): \(1000 \times 1000 = 1,000,000\) parameters
- Matrix B: \(1000 \times 4 = 4,000\) parameters
- Matrix A: \(4 \times 1000 = 4,000\) parameters
- \(\frac{\text{LoRA Parameters}}{\text{Full Parameters}} = \frac{8,000}{1,000,000} = 0.008\)

Therefore, we train only 0.8% of the parameters for that layer. <br>
Across the whole model, this usually results in training ~0.1% to 1%.

{{< /panel >}}

{{< video "https://youtu.be/A2HyRhoaHOg" >}}

{{< video "https://youtu.be/vEqaew-D28U" >}}

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/natural_language_processing/transformer" >}}">Previous: Transformer</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/natural_language_processing/bert" >}}">Next: BERT</a></span>
</div>
<!-- nav-panel:end -->
