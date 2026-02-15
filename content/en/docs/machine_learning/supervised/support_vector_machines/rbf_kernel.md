---
title: RBF Kernel
description: RBF Kernel
date: 2026-02-14
weight: 6
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfFECdHEHPM6NjErmLmg2Ff" 
"Support Vector Machine | All Videos" >}}

<br>

{{< panel color="cyan" title="Intuition 💡" >}}
- Unlike the polynomial kernel, which looks at global 🌎 interactions, the RBF kernel acts like a similarity measure.
- If 'x' and 'z' are identical \(K(x,z)=1\).
  - As they move further apart in Euclidean space, the value decays exponentially towards 0.
  {{< /panel >}}

{{< panel color="blue" title="Radial Basis Function (RBF) Kernel" >}}
\[K(x, z) = \exp\left(-\gamma. \|x - z\|^2\right)\]
\[\text{where, }\gamma = \frac{1}{2\sigma^2}\]

- If \(x \approx z\) (very close), \(K(x,z)=1\)
- If 'x', 'z' are far apart, \(K(x,z) \approx 0\)

**Note**: Kernel function is the measure of **similarity** or **closeness**.
{{< /panel >}}

{{< panel color="red" title="Infinite Dimension Mapping" >}}
Say \(\sigma = 1\), then Euclidean distance: \(\|x - z\|^2 = \|x\|^2 + \|z\|^2 - 2x^Tz\)
\[K(x, z) = \exp(-( \|x\|^2 + \|z\|^2 - 2x^T z )) = \exp(-\|x\|^2) \exp(-\|z\|^2) \exp(2x^T z)\]

The Taylor expansion for \(e^u= \sum_{n=0}^{\infty} \frac{u^n}{n!}\)
\[\exp(2x^T z) = \sum_{n=0}^{\infty} \frac{(2x^T z)^n}{n!} = 1 + \frac{2x^T z}{1!} + \frac{(2x^T z)^2}{2!} + \dots + \frac{(2x^T z)^n}{n!} + \dots\]
\[K(x, z) = e^{-\|x\|^2} e^{-\|z\|^2} \left( \sum_{n=0}^{\infty} \frac{2^n (x^T z)^n}{n!} \right)\]

💡If we **expand** each \((x^T z)^n\) term, it represents the dot product of all possible n-th order polynomial features.

👉Thus, the implicit feature map is:
\[\phi(x) = e^{-\|x\|^2} \left[ 1, \sqrt{\frac{2}{1!}}x, \sqrt{\frac{2^2}{2!}}(x \otimes x), \dots, \sqrt{\frac{2^n}{n!}}(\underbrace{x \otimes \dots \otimes x}_{n \text{ times}}), \dots \right]^T\]

- **Important**: The tensor product \(x\otimes x\) creates a vector (or matrix) containing all combinations of the features.
e.g. if \(x=[x_{1},x_{2}]\), then  \(x\otimes x=[x_{1}^{2},x_{1}x_{2},x_{2}x_{1},x_{2}^{2}]\) ￼

**Note**: Because the **Taylor series** has an **infinite number of terms**, feature map has an **infinite number of dimensions**.
{{< /panel >}}

{{< panel color="blue" title="Bias-Variance Trade-Off ⚔️" >}}
- **High Gamma(low \(\sigma\))**: **Over-Fitting**
  - Makes the kernel so ‘**peaky**' that each support vector **only** influences its **immediate neighborhood**. 
  - Decision boundary becomes **highly irregular**, ‘wrapping' tightly around individual data points to ensure they are classified correctly.
- **Low Gamma(high \(\sigma\))**: **Under-Fitting**
  - The Gaussian bumps are **wide and flat**. 
  - Decision boundary becomes **very smooth**, essentially behaving more like a **linear** or low-degree polynomial classifier.
{{< /panel >}}


{{< video "https://youtu.be/TMcJxXUQxzM" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/supervised/support_vector_machines/kernel_trick" >}}">Previous: Kernel Trick</a></span>
<span style="margin-left:auto;"><a href="{{< ref "/docs/machine_learning/supervised/support_vector_machines/support_vector_regression" >}}">Next: Support Vector Regression</a></span>
</div>
<!-- nav-panel:end -->

```End of Section```