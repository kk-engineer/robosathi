---
title: BERT
description: Bidirectional Encoder Representations from Transformers
date: 2026-04-30
weight: 12
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxcDlHCeNiKbRhLWKVunQaxn" 
"Natural Language Processing | Full Course" >}}

{{< panel color="blue" title="Bidirectional Encoder Representations from Transformers (BERT)" id="bert">}}
**Limitations of Word Vectors** <br>
Before 2018, models like Word2Vec and GloVe provided "context-free" embeddings.<br>
The word "bank" had the same vector whether it was a "river bank" or a "bank account".

Google AI Language team developed, Transformer (encoder only) based language model designed to understand 
the meaning of words in a text by using the context from both directions.

**BERT Architecture (Encoder Only)**
{{< imgproc "images/natural_language_processing/bert/bert_architecture.png" Resize "800x" >}}{{< /imgproc >}}

**BERT Input Representation**
{{< imgproc "images/natural_language_processing/bert/bert_input_representation.png" Resize "800x" >}}{{< /imgproc >}}

_Note_: BERT uses WordPiece embeddings (Wu et al., 2016) with a 30,000 token vocabulary.

[Read more about WordPiece]({{<ref  "/docs/natural_language_processing/tokenization/#word_piece"  >}})

_Research Paper_: BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding, Devlin et al., 2018; https://arxiv.org/pdf/1810.04805

{{< /panel >}}

{{< panel color="orange" title="Masked Language Modeling" >}}
**Pre-Training** <br>
Model is trained on a massive, unlabeled dataset (e.g., internet scale) to learn 
general language features, grammar, syntax, and reasoning patterns, using self-supervised learning techniques.

The self-supervised technique used in BERT is 'Masked Language Modeling'.

**Masked Language Modeling** <br>
A percentage of tokens in a sentence (typically 15%) are randomly hidden or "masked," 
and the model must predict these missing words using context from both directions (bidirectional).
- Replace the word with [MASK] 80% of the time.
- Replace the word with random word 10 % of the time.
- Keep the same word 10% of the time.

**Example**
{{< imgproc "images/natural_language_processing/bert/masked_language_modeling.png" Resize "800x" >}}{{< /imgproc >}}

{{< /panel >}}

{{< panel color="green" title="Next Sentence Prediction" >}}
Many important tasks such as Question Answering (QA) and Natural Language Inference (NLI) are based on understanding 
the relationship between two sentences, which is not directly captured by language modeling.

Pre-train for next sentence prediction task.
- IsNext: 50% of the time B is the actual next sentence that follows A.
- NotNext: 50% of the time it is a random sentence from the corpus.
{{< /panel >}}

{{< panel color="navy" title="Special Tokens" >}}
- [CLS] Classification
  - The special token added to the start of every input. 
  - It acts as a summary representation of the entire sentence, aggregating information via self-attention mechanisms across transformer layers. 
  - Final hidden state of the [CLS] token (768 dimensions) is passed through a classifier(simple linear layer) to determine if a sentence is positive or negative.
- [SEP] Separator 
  - Special separator token used to mark the end of a sentence or to explicitly separate two different text segments within a single input sequence. 
  - e.g. [CLS] Sentence A [SEP] Sentence B [SEP]

{{< /panel >}}

{{< panel color="cyan" title="Key Applications  of BERT"  >}}
- ✅ _Search Relevance and Ranking_ (Google Search): BERT helps Google Search understand the intent and context behind complex, conversational search queries rather than just matching keywords.
- ✅ _Question Answering Systems_: BERT excels at analyzing large documents to find specific answers, used extensively in chatbots and virtual assistants for customer support.
- ✅ _Sentiment Analysis_: BERT excels at analyzing social media, product reviews, or customer service logs to determine sentiment, separating positive and negative sentiment in contexts.
- ✅ _Named Entity Recognition_(NER): It improves the identification of proper nouns, i.e., names, organizations, and locations in unstructured text.
{{< /panel >}}

{{< video "https://youtu.be/bxzUDdWwlm8" >}}

{{< panel color="rust" title="Limitation of BERT"  >}}
To compare 2 sentences BERT requires both the sentences to be fed to the model. <br>
💡 Finding the most similar pair in a collection of 10,000 sentences requires about 50 million inference computations (~65 hours) with BERT.  <br>

❌ The construction of BERT makes it unsuitable for semantic similarity search, such as RAG applications.
{{< /panel >}}

{{< panel color="blue" title="Sentence BERT" id="sbert" >}}
Modification of the pre-trained BERT network that use Siamese and triplet network structures to derive 
semantically meaningful sentence embeddings that can be compared using cosine-similarity.

✅ This reduces the effort for finding the most similar pair from 65 hours with BERT / RoBERTa to about 5 seconds with SBERT, while maintaining the accuracy from BERT. 

**SBERT Architecture**
{{< imgproc "images/natural_language_processing/bert/sbert.png" Resize "800x" >}}{{< /imgproc >}}

**SBERT Pooling** <br>
SBERT adds a pooling operation to the output of BERT / RoBERTa to derive a fixed sized (768) sentence embedding.

3 pooling strategies:
- Computing the mean of all output vectors (MEAN-strategy); Default
- Computing a max-over-time of the output vectors (MAX-strategy)
- Using the output of the CLS-token

_Research Paper_: Sentence-BERT: Sentence Embeddings using Siamese BERT-Networks, Reimers & Gurevych, 2019; https://arxiv.org/pdf/1908.10084

{{< /panel >}}

{{< video "https://youtu.be/b2EPiIYmeTY" >}}

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/natural_language_processing/llm" >}}">Previous: LLM</a></span>
<span><a href="{{< ref "/docs/deep_learning/introduction" >}}">Next: Intro to DL</a></span>
</div>
<!-- nav-panel:end -->
