---
title: Kernel Trick
description: Kernel Trick
date: 2026-02-13
weight: 255
math: true
---

{{< panel color="blue" title="Intuition 💡" >}}
- 🌌 If our data is not linearly separable in its original space , we can map 🗺️ it to a higher-dimensional feature space (where D>>d) using a transformation function .
{{< /panel >}}

{{< panel color="orange" title="Visual" >}}
{{< imgproc "images/machine_learning/supervised/support_vector_machines/kernel_trick/slide_02_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="green" title="Kernel Trick 🪄" >}}
- Bridge between Dual formulation and the geometry of high dimensional spaces.
- It is a way to manipulate inner product spaces without the computational cost 💰 of explicit transformation.
{{< /panel >}}

{{< panel color="red" title="(Wolfe) ‘Dual' Optimization" >}}
- subject to: and
\[\frac{1}{2}∥w∥^{2}+C\sum_{i=1}^{n}ξ_{i}-\sum_{i=1}^{n}\alpha_{i}y_{i}(w^{T}x_{i}+w_{0})-1+ξ_{i}-\sum_{i=1}^{n}\mu_{i}ξ_{i}\]
\[=max_{\alpha}\sum_{i=1}^{n}\alpha_{i}-\frac{1}{2}\sum_{i,j=1}^{n}\alpha_{i}\alpha_{j}y_{i}y_{j}(x_{i}⋅x_{j})\]
{{< /panel >}}

{{< panel color="navy" title="Observation" >}}
- 💡Actual values of the input vectors and never appear in isolation;
- only appear as inner product.
- 𑗊 The ‘shape' of the decision boundary is entirely determined by how similar points are to one another, not by their absolute coordinates.
\[max_{\alpha}\sum_{i=1}^{n}\alpha_{i}-\frac{1}{2}\sum_{i,j=1}^{n}\alpha_{i}\alpha_{j}y_{i}y_{j}(x_{i}⋅x_{j})\]
\[f(x_{q})=sign\sum_{i=1}^{n}\alpha_{i}y_{i}(x_{i}^{T}x_{q})+w_{0}\]
{{< /panel >}}

{{< panel color="blue" title="Non-Linear Separation" >}}
- 🌌 If our data is not linearly separable in its original space , we can map 🗺️ it to a higher-dimensional feature space (where D>>d) using a transformation function .
{{< /panel >}}

{{< panel color="orange" title="Problem 🤔" >}}
- If we choose a very high-dimensional mapping (e.g. or ), calculating and then performing the dot product becomes computationally 💻impossible or extremely slow 🐢.
{{< /panel >}}

{{< panel color="green" title="Kernel Trick 👻" >}}
- Define Kernel Function !
- The ‘Kernel Trick' 🪄 is an optimization that replaces the dot product of a high-dimensional mapping with a function of the dot product in the original space.
- Note: For to be a valid kernel, it must satisfy Mercer's Condition.
\[K(x_{i},x_{j})=⟨ϕ(x_{i}),ϕ(x_{j})⟩\]
{{< /panel >}}

{{< panel color="red" title="Working" >}}
- 🌌Instead of mapping (to higher dimension)
- , and calculating the dot product.
- 🏕️ We simply compute directly in the original input space.
{{< /panel >}}

{{< panel color="navy" title="Polynomial (Quadratic) Kernel" >}}
- This is equivalent to the explicit dot product of two vectors in 3D 🧊:
\[K(x,z)=(x^{T}z)^{2}\]
\[(x_{1}z_{1}+x_{2}z_{2})^{2}=x_{1}^{2}z_{1}^{2}+2x_{1}z_{1}x_{2}z_{2}+x_{2}^{2}z_{2}^{2}\]
\[ϕ(x)=[x_{1}^{2},\sqrt{2}x_{1}x_{2},x_{2}^{2}]^{T}\]
\[ϕ(z)=[z_{1}^{2},\sqrt{2}z_{1}z_{2},z_{2}^{2}]^{T}\]
\[ϕ(x)⋅ϕ(z)=x_{1}^{2}z_{1}^{2}+2x_{1}x_{2}z_{1}z_{2}+x_{2}^{2}z_{2}^{2}\]
{{< /panel >}}

{{< panel color="blue" title="Advantages ⛳️" >}}
- Computational Efficiency: Avoids the ‘combinatorial blowup' 💥 of generating thousands of interaction features manually.
- Memory Savings: No need to store 💾 or process high-dimensional coordinates, only the scalar result of the kernel function.
{{< /panel >}}

{{< panel color="orange" title="Why Kernel SVMs are Not so Popular ?" >}}
- Designing special purpose domain specific kernel is very hard.Basically, we are trying to replace feature engineering with kernel design.
- Note: Deep learning does feature engineering implicitly for us.
- Runtime complexity depends on number of support vectors, whose count is not easy to control.Note: Runtime Time Complexity ⏰ = , whereas linear SVM, .
{{< /panel >}}

{{< video "https://youtu.be/y-7uDAiEYpA" >}}
<br><br>
```End of Section```