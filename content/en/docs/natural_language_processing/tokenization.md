---
title: Tokenization
description: Tokenization - Byte Pair Encoding, WordPiece & SentencePiece
date: 2026-04-29
weight: 3
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxcDlHCeNiKbRhLWKVunQaxn" 
"Natural Language Processing | Full Course" >}}

{{< panel color="blue" title="Tokenization" >}}
Tokenization is preprocessing step of breaking down raw text (sentences) into smaller units called tokens, 
such as, words, characters, or subwords.
{{< /panel >}}

{{< panel color="green" title="Word-Level Tokenization" >}}
Text is split by whitespace or punctuation. <br>
Each unique word gets its own ‘ID’ in the vocabulary.

e.g., “The player is playing”, becomes: <br>
["The", "player", "is", "playing"]

**Issues**
- _Out-Of-Vocabulary (OOV)_: If the model has seen only "player" in the training set and at runtime it sees "players" or "playful", then it marks them as <UNK> (Unknown). 
- _Vocabulary Explosion_: If we use full words then vocabulary size￼.
- _No Shared Meaning_: The model treats "running" and "run" as completely unrelated symbols, even though they share the same root.
{{< /panel >}}

{{< panel color="orange" title="Character-Level Tokenization" >}}
Text is split into individual letters or symbols.

e.g., “Apple”, becomes: <br>
["A", "p", "p", "l", "e"]

**Issues**
- _Loss of Semantics_: Individual characters like "a" or "p" carry no inherent meaning. 
  - The model has to work much harder to learn that the sequence "A-p-p-l-e" represents a fruit. 
- _Long Sequences_: A single sentence becomes a massive string of tokens.
- _Computationally Expensive_: Longer sequences require more memory and processing power to calculate relationships between tokens. 
{{< /panel >}}

{{< panel color="magenta" title="Sub-Word Tokenization" >}}
A fixed-size vocabulary that can represent any word by breaking it into meaningful sub-units.

e.g., “unhappiness”, becomes: <br>
["un", "happi", "ness"]

**Benefits**
- Small vocabulary size.
- No OOV (everything decomposable).
- Better generalization.

**Comparison: Word-Level, Character-Level & Sub-Word Tokenization**

| Feature | Word-Level | Char-Level | Sub-Word |
| :--- | :--- | :--- | :--- |
| **Vocab Size** | Very Large | Small | Medium (Fixed) |
| **OOV Problem** | Severe | None | None |
| **Meaning (Per Token)** | High | Low | High (Morpheme-based) |
| **Sequence Length** | Small | Very High | Balanced |

{{< /panel >}}

{{< panel color="cyan" title="Byte Pair Encoding" id="bpe">}}
Originally a _data compression_ algorithm, **Byte Pair Encoding** (BPE) was adapted for NLP to iteratively merge the most frequent adjacent pairs of characters into new tokens.

**BPE Algorithm**
1. _Initialization_: Prepare a corpus and define a target vocabulary size ‘￼’.  Break every word into individual characters (plus a special end-of-word symbol </w>).
2. _Frequency Count_: Count all adjacent pairs of symbols in the corpus.
3. _Merge_: Identify the pair ￼ with the highest frequency and merge them into a single new symbol ￼.
4. _Repeat_: Update the corpus with the new symbol and repeat until the vocabulary reaches size ‘￼’ or no more merges are possible.

**Example** 

```text
--- Initial Word Corpus ---
Word                  Count
------------------  -------
l o w </w>                5
l o w e r </w>            2
n e w e s t </w>          6
w i d e s t </w>          3
h i g h e s t </w>        2

 Iteration 0
| Token   |   Frequency |
|---------+-------------|
| e       |          19 |
| </w>    |          18 |
| w       |          16 |
| s       |          11 |
| t       |          11 |
| l       |           7 |
| o       |           7 |
| n       |           6 |
| i       |           5 |
| h       |           4 |
Action: Merge ('e', 's')

Iteration 1
| Token   |   Frequency |
|---------+-------------|
| </w>    |          18 |
| w       |          16 |
| es      |          11 |
| t       |          11 |
| e       |           8 |
| l       |           7 |
| o       |           7 |
| n       |           6 |
| i       |           5 |
| h       |           4 |
Action: Merge ('es', 't')

Iteration 2
| Token   |   Frequency |
|---------+-------------|
| </w>    |          18 |
| w       |          16 |
| est     |          11 |
| e       |           8 |
| l       |           7 |
| o       |           7 |
| n       |           6 |
| i       |           5 |
| h       |           4 |
| d       |           3 |
Action: Merge ('est', '</w>')

Iteration 3
| Token   |   Frequency |
|---------+-------------|
| w       |          16 |
| est</w> |          11 |
| e       |           8 |
| </w>    |           7 |
| l       |           7 |
| o       |           7 |
| n       |           6 |
| i       |           5 |
| h       |           4 |
| d       |           3 |
Action: Merge ('l', 'o')

Iteration 4
| Token   |   Frequency |
|---------+-------------|
| w       |          16 |
| est</w> |          11 |
| e       |           8 |
| </w>    |           7 |
| lo      |           7 |
| n       |           6 |
| i       |           5 |
| h       |           4 |
| d       |           3 |
| g       |           2 |
Action: Merge ('lo', 'w')

Iteration 5
| Token   |   Frequency |
|---------+-------------|
| est</w> |          11 |
| w       |           9 |
| e       |           8 |
| </w>    |           7 |
| low     |           7 |
| n       |           6 |
| i       |           5 |
| h       |           4 |
| d       |           3 |
| g       |           2 |

OOV Handling Example
Original OOV: 'lowest'
BPE Segmented: ['low', 'est</w>']

```

**OpenAI Tokenizer**
{{< imgproc "images/natural_language_processing/tokenization/tokens.png" Resize "800x" >}}{{< /imgproc >}}
{{< imgproc "images/natural_language_processing/tokenization/token_ids.png" Resize "800x" >}}{{< /imgproc >}}

Source: https://platform.openai.com/tokenizer

{{< /panel >}}

{{< panel color="orange" title="WordPiece" id="word_piece">}}
WordPiece merges the pair that maximizes the likelihood of the training data. <br>
It chooses the pair\((s_1, s_2)\) that maximizes:

\[\text{Score} = \frac{P(s_1, s_2)}{P(s_1)P(s_2)}\]
- \(P(s_1, s_2)\): probability of the pair appearing together.
- \(P(s_1)P(s_2)\): probability of the pair appearing independently.

e.g: Is "unfriendly" in vocabulary? _No_; <br>
Is "un" + "##friend" + "##ly" available? _Yes_. <br>
where, “##” means continuation of the previous token.

_Note_: WordPiece is used in BERT.
{{< /panel >}}

{{< panel color="green" title="SentencePiece" >}}
SentencePiece is not just a new algorithm but a subword regularization framework that treats the input as a raw stream of characters, including spaces.

**Key Innovations**: 
- _Space as a Symbol_:
  - It treats whitespace as a normal character (represented as “underscore”). 
  - This makes it "lossless"; you can reconstruct the exact original string from the tokens. 
- _Algorithm Agnostic_:
  - It can implement both BPE and Unigram Language Model (a probabilistic approach that removes tokens that least impact the overall likelihood of the corpus).
- _No Pre-tokenization_:
  - Unlike BPE/WordPiece, which often require a preliminary step to split text by whitespace, SentencePiece works directly on raw Unicode strings. 
  - This is vital for languages like Chinese or Japanese that do not use spaces between words.
{{< /panel >}}

{{< video "https://youtu.be/McTrqLiEsW0" >}}

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/natural_language_processing/text_pre_processing" >}}">Previous: Text Pre-Processing</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/natural_language_processing/text_representation" >}}">Next: Text Representation</a></span>
</div>
<!-- nav-panel:end -->
