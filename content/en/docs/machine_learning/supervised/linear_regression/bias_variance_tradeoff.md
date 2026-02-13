---
title: Bias Variance Tradeoff
description: Bias Variance Tradeoff
date: 2026-02-13
weight: 10
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxde_X17sF7iN6rnQgFlBDC-" 
"Linear Regression | All Videos" >}}
<br>

{{< panel color="blue" title="Total Error" >}}
Mean Squared Error (MSE) = \(\frac{1}{n} \sum_{i=1}^n (y_i - \hat{y_i})^2\)

**Total Error = Bias^2 + Variance + Irreducible Error**

- **Bias** = Systematic Error
- **Variance** = Sensitivity to Data
- **Irreducible Error** = Sensor noise, Human randomness
{{< /panel >}}

{{< panel color="green" title="Bias" >}}
Systematic error from overly simplistic assumptions or strong opinion in the model.

e.g. House 🏠 prices 💰 = Rs. 10,000 * Area (sq. ft).

**Note**: This is over simplified view, because it ignores, amenities, location, age, etc.
{{< /panel >}}

{{< panel color="orange" title="Variance" >}}
Error from sensitivity to small fluctuations 📈 in the data.

e.g. Deep neural 🧠 network trained on a small dataset.

**Note**: Memorizes everything, including noise. <br>

Say a house 🏠 in XYZ street was sold for very low price 💰.

**Reason**: Distress selling (outlier), or incorrect entry (noise).

**Note**: Model will make wrong(lower) price 💰predictions for all houses in XYZ street.
{{< /panel >}}

{{< panel color="charcoal" title="Linear (High Bias), Polynomial(High Variance)" >}}
{{< imgproc "images/machine_learning/supervised/linear_regression/bias_variance_tradeoff/slide_06_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="charcoal" title="Bias Variance Table" >}}
{{< imgproc "images/machine_learning/supervised/linear_regression/bias_variance_tradeoff/bias_variance_table.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Bias-Variance Trade-Off" >}}
Goal 🎯 is to minimize total error.

Find a sweet-spot balance ⚖️ between Bias and Variance.

A good model **‘generalizes'** well, i.e.,
- Is not too simple or has a strong opinion.
- Does not memorize 🧠 everything in the data, including noise.
{{< /panel >}}

{{< panel color="blue" title="Fix 🩹 High Bias (Under-Fitting)" >}}
- Make model more complex.
  - Add more features, add polynomial features.
- Decrease Regularization.
- Train 🏃‍♂️longer, the model has not yet converged.
{{< /panel >}}

{{< panel color="navy" title="Fix 🩹 High Variance (Over-Fitting)" >}}
- Add more data (most effective).
  - Harder to memorize 🧠 1 million examples than 100.
  - Use data augmentation, if getting more data is difficult.
- Increase Regularization.
- Early stopping 🛑, prevents memorization 🧠.
- Dropout (DL), randomly kill neurons, prevents co-adaptation.
- Use Ensembles.
- Averaging reduces variance.

**Note**: *Co-adaptation* refers to a phenomenon where neurons in a neural network become highly dependent on each other to detect features, rather than learning independently.
{{< /panel >}}

{{< video "https://youtu.be/nZtRf_zqY1Y" >}}
<br><br>
```End of Section```