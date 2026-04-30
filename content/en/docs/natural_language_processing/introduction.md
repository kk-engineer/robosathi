---
title: Introduction
description: Introduction to Natural Language Processing
date: 2026-04-28
weight: 1
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxcDlHCeNiKbRhLWKVunQaxn" 
"Natural Language Processing | Full Course" >}}

{{< definition title="Natural Language Processing">}}
📘 Natural Language Processing (NLP) is a subfield of artificial intelligence that enables computers to 
understand, interpret, and generate human language. <br>

e.g. Question Answering, Summary, Dialogue Generation (Chatbot), Sentiment Analysis, Spam Classification etc.

❌ Human language is ambiguous; meaning of the sentence is determined by its context.
- He sat by the bank.
  - 'bank' may mean a river or a financial institution.
- I saw the man with the telescope.
  - the man was with a telescope, or
  - he saw a man using a telescope.
- The chicken is ready to eat.
  - chicken(dead) is cooked and ready to eat, or
  - the chicken(alive) is hungry and ready to eat.

💡 Therefore, in NLP, it's very important to capture the context, so that the exact meaning of the words in the sentence is understood.

Before we dive into how do we capture the context, we need to convert the human language into a form that is understandable by machines. <br>
We know that deep learning models take vectors/matrices as input, which are collections of numbers. <br>
So, first we need to convert the words into vectors for training the models.
{{< /definition >}}

{{< panel color="orange" title="Corpus to Model" >}}
First, we start with a large corpus of text required to train the model. <br>
**Corpus** = large collection of text, i.e, internet scale data, such as, wikipedia, books, webpages, discussion forums etc. <br>

Then we process the text, i.e, break down sentences into words/tokens and get their vector representations,
so that these vectors (also called word embeddings) can be used as input to train the deep learning model. <br>
Below are the steps:
- Text Pre-Processing
  - Punctuation Removal, Stop Word Removal, Lowercasing, Stemming, Lemmatization 
- Tokenization 
  - Byte Pair Encoding, WordPiece, SentencePiece
- Text Representation (Embedding)
  - OHE, BoW, TFIDF, Word2Vec, GloVe, FastText

✅ Once, we have the word embeddings now we can use them to train models that understand sentences (sequence modelling).

👉 Let's have a look a brief history of NLP models developed for understanding sentences:
- N-Gram (1951),  Claude Shannon
  - Predict the next word based on previous 'n-1' words.
- RNN (1986),  Rumelhart, Hinton, & Williams
  - Predict the next word in the sequence using all the past words in the sentence (hidden state).
- LSTM (1997), Hochreiter & Schmidhuber
  - Introduced long term memory, along with short term memory (as in RNN) and gates to control them.
- GRU (2014), Cho et al. 
  - Simplified LSTM architecture with fewer gates.
- Attention (2014), Bahdanau, Cho, & Bengio
  - In machine translation instead of having a fixed context from encoder, decoder decides parts of the source sentence to pay attention, i.e, context changes for each word.
- Self Attention (2017), Vaswani et al. 
  - Every word in a sentence looks at every other word (including itself) to decide which word is most relevant to its own meaning in that specific context.
- Transformers (2017), Vaswani et al. 
  - Landmark paper that replaced sequential RNN/LSTM based models completely with Self Attention, making it highly parallelizable.
- LLM (GPT) (2018), Radford et al.  (OpenAI)
  - First transformer based (decoder only) architecture that led to the birth of LLMs.
  - SFT, RLHF (2022), Ouyang et al. (InstructGPT)
    -  Fine-tuning approaches to make the LLMs useful, i.e, question answering, code generation, instruction following etc.
- BERT (2018), Devlin et al. (Google)
  - Transformer based (encoder only) architecture that captures the context of a word from both sides (left & right), making it useful for natural language inference tasks.

{{< /panel >}}

{{< video "https://youtu.be/YLxYim_Kpbo" >}}

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/natural_language_processing/text_pre_processing" >}}">Next: Text Pre-Processing</a></span>
</div>
<!-- nav-panel:end -->