---
title: RBF Kernel
description: RBF Kernel
date: 2026-02-13
weight: 256
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfFECdHEHPM6NjErmLmg2Ff" 
"Support Vector Machine | All Videos" >}}

<br>

{{< panel color="blue" title="Intuition 💡" >}}
- 🪝Unlike the polynomial kernel, which looks at global 🌎 interactions, the RBF kernel acts like a similarity measure.
- 🧩 If and are identical .
- As they move further apart in Euclidean space, the value decays exponentially towards 0.
{{< /panel >}}

{{< panel color="orange" title="Radial Basis Function (RBF) Kernel" >}}
- where,
- If (very close),
- If , are far apart, Note: Kernel is the measure of similarity or closeness.
\[K(x,z)=exp-\gamma.∥x-z∥^{2}\]
{{< /panel >}}

{{< panel color="green" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/support_vector_machines/rbf_kernel/slide_03_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Infinite Dimension Mapping" >}}
- Say, , then Euclidean distance: =
- The Taylor expansion for
\[K(x,z)=exp(-(∥x∥^{2}+∥z∥^{2}-2x^{T}z))=exp(-∥x∥^{2})exp(-∥z∥^{2})exp(2x^{T}z)\]
\[exp(2x^{T}z)=\sum_{n=0}^{\infty}\frac{(2x^{T}z)^{n}}{n!}=1+\frac{2x^{T}z}{1!}+\frac{(2x^{T}z)^{2}}{2!}+…+\frac{(2x^{T}z)^{n}}{n!}+…\]
\[K(x,z)=e^{-∥x∥^{2}}e^{-∥z∥^{2}}n=0\infty\frac{2^{n}(x^{T}z)^{n}}{n!}\]
{{< /panel >}}

{{< panel color="navy" title="Infinite Dimension Mapping (Continued)" >}}
- 🪂If we expand each term, it represents the dot product of all possible norder polynomial features.⛄️Thus, the implicit feature map is:
- Important: The tensor product creates a vector (or matrix) containing all combinations of the features.
- e.g. if , then Note: Because the Taylor series has an infinite number of terms, feature map has an infinite number of dimensions.
\[ϕ(x)=e^{-∥x∥^{2}}1,\sqrt{\frac{2}{1!}}x,\sqrt{\frac{2^{2}}{2!}}(x⊗x),…,\sqrt{\frac{2^{n}}{n!}}(x⊗…⊗x_{⏟}_{ntimes}),…^{T}\]
{{< /panel >}}

{{< panel color="blue" title="Bias-Variance Trade-Off ⚔️" >}}
- High Gamma(low ): Over-FittingMakes the kernel so ‘peaky' that each support vector only influences its immediate neighborhood. Decision boundary becomes highly irregular, ‘wrapping' tightly around individual data points to ensure they are classified correctly.
- Low Gamma(high ): Under-FittingThe Gaussian bumps are wide and flat. Decision boundary becomes very smooth, essentially behaving more like a linear or low-degree polynomial classifier.
{{< /panel >}}


{{< video "https://youtu.be/TMcJxXUQxzM" >}}
<br><br>
```End of Section```