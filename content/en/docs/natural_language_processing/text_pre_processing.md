---
title: Text Pre-Processing
description: Text Pre-Processing
date: 2026-04-28
weight: 2
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxcDlHCeNiKbRhLWKVunQaxn" 
"Natural Language Processing | Full Course" >}}

{{< panel color="blue" title="Text Pre-Processing" >}}
❌ Raw text is messy and inconsistent.

e.g., "WOw!!! The new iphone 18 pro is SOOO good! I luvv it... best phone ever? Check it out at someCoolSite.com
#tech #apple"

So, first we need to do some pre-processing of this messy text, before it can be used for model training. <br>
There are 2 main steps: 
- Cleaning: Removing punctuation, lowercasing, stop word removal and stripping special characters.
- Stemming/Lemmatization: Reducing words to their root form.

{{< /panel >}}

{{< panel color="green" title="Cleaning" >}}
Removing punctuation, lowercasing, stop word removal and stripping special characters.

 - Input: “‍♂️ Hello, together we will learn NLP (Natural Language Processing)!!!”:
 - Output: “hello learn nlp natural language processing”
{{< /panel >}}

{{< panel color="orange" title="Stemming" >}}
Reduce words to their root form, by chopping off suffixes, often resulting in non-dictionary roots;  very fast.

- Input: “Running was considered better than going to gym.”
- Porter Stemmer Output: [“run", "wa", "consid", "better", "than", "go", "to", “gym”]
{{< /panel >}}

{{< panel color="magenta" title="Lemmatization" >}}
Reduce words to their root form, i.e, dictionary base form (lemma).

- Input: “Running was considered better than going to gym.
- WordNet Lemmatizer Output: [“run", "be", "consider", "good", "than", "go", "to", “gym”]

When to use Lemmatization or Stemming: 
- ✅ Lemmatization: Accuracy; e.g., chatbots 
- ✅ Stemming: Speed; e.g., searching massive datasets
{{< /panel >}}

{{< video "https://youtu.be/cKM1AB8kvjA" >}}

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/natural_language_processing/intro_to_nlp" >}}">Previous: Intro to NLP</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/natural_language_processing/tokenization" >}}">Next: Tokenization</a></span>
</div>
<!-- nav-panel:end -->
