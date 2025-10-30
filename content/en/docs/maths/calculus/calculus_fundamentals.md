---
title: Calculus Fundamentals
description: Calculus Fundamentals
date: 2025-10-30
weight: 2
math: true
---

{{% pageinfo %}}
In this section we will understand fundamentals of Calculus, such as, Integration, Differentiation, Limits, <br>
Maxima and Minima, Saddle Point etc.<br>
{{% /pageinfo %}}

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfzDh2D3OqVo-piGAZQPWDj" 
        "Calculus for AI & ML | Full Course Videos">}}


{{< alert color="success" title="Integration" >}}
Integration is a mathematical tool that is used to find the area under a curve.<br>

\[
\text{Area under the curve = } \int_{a}^{b} f(x) dx \\[10pt]
and ~ \int x^n dx = \frac{x^{n+1}}{n+1} + C, \text{ where C is constant.} \\
\]

Let's understand integration with the help of few simple examples for finding area under a curve: <br>
1. Area of a **triangle**: <br>
![](https://robosathi.com/images/calculus/fundamentals/integration_triangle.png)
\[
\text{Area of } \triangle ~ABC = \frac{1}{2} \times base \times height = \frac{1}{2} \times 3 \times 3 = 9/2 = 4.5 \\[10pt]
\text{Area of } \triangle ~ABC = \int_0^3 f(x) dx = \int_0^3 x dx = \frac{x^2}{2} \big|_0^3 = \frac{3^2 - 0^2}{2} = 9/2 = 4.5
\]

2. Area of a **rectangle**: <br>
![](https://robosathi.com/images/calculus/fundamentals/integration_rectangle.png)
\[
\text{Area of rectangle ABCD} = length \times breadth = 4 \times 3 = 12 \\[10pt]
\text{Area of rectangle ABCD} = \int_1^5 f(x) dx = \int_1^5 3 dx = 3x \big|_1^5 = 3(5-1) = 12
\]
<br>

*Note: The above examples were standard straight forward, where we know a direct formula for finding area under a curve.* <br>
*But, what if we have such a shape, for which, we do NOT know a ready-made formula, then how do we calculate
the area under the curve.* <br>
Let's see an example: <br><br>
3. Area of a **part of parabola**: <br>
![](https://robosathi.com/images/calculus/fundamentals/integration_parabola.png)
\[
\text{Area under curve} = \int_{-2}^2 f(x) dx = \int_{-2}^2 x^2 dx = \frac{x^3}{3} \big|_{-2}^2
= \frac{(2)^3 - (-2)^3}{3} = \frac{8 - (-8)}{3} = \frac{16}{3}
\]

{{< /alert >}}
<br>

{{< alert color="success" title="Differentiation" >}}
Differentiation is a mathematical tool that is used to find the **derivative** or rate of change of a function 
at a specific point.<br>
- \(\frac{dy}{dx} = f\prime(x) = tan\theta\) = Derivative = Slope = Gradient 
- Derivative tells us how fast the function is changing at a specific point in relation to another variable.

_Note: For a line, the slope is constant, but for a parabola, the slope is changing at every point._ <br><br>
**How do we calculate the slope at a given point?** <br><br>
![](https://robosathi.com/images/calculus/fundamentals/tangent_secant.png)
<br><br>
Let AB is a **secant** on the parabola, i.e, line connecting any 2 points on the curve. <br>
Slope of secant = \(tan\theta = \frac{\Delta y}{\Delta x} = \frac{y_2-y_1}{x_2-x_1}\) <br>
As \(\Delta x \rightarrow 0\), secant will become a tangent to the curve, i.e, the line will touch the curve only
at 1 point. <br>
\(dx = \Delta x \rightarrow 0\) <br>
\(x_2 = x_1 + \Delta x \) <br>
\(y_2 = f(x_2) =  f(x_1 + \Delta x) \) <br>
Slope at \(x_1\) = 
\[
tan \theta = \frac{y_2-y_1}{x_2-x_1} = \frac{f(x_1 + \Delta x) - f(x_1)}{(x_1 + \Delta x)-x_1} \\[10pt]
\therefore tan \theta = \lim_{\Delta x \rightarrow 0} \frac{f(x_1 + \Delta x) - f(x_1)}{\Delta x}  \\[10pt]
Generally, ~ slope = ~ tan \theta = \frac{dy}{dx} = \lim_{\Delta x \rightarrow 0} \frac{f(x + \Delta x) - f(x)}{\Delta x}
\]
<br>
e.g.: <br>
\( y = f(x) = x^2\), find the derivative of f(x) w.r.t x. <br>
\[
\begin{aligned}
\frac{dy}{dx} &= \lim_{\Delta x \rightarrow 0} \frac{f(x + \Delta x) - f(x)}{\Delta x} \\[10pt]
&= \lim_{\Delta x \rightarrow 0} \frac{(x + \Delta x)^2 - x^2}{\Delta x} \\[10pt]
&= \lim_{\Delta x \rightarrow 0} \frac{\cancel {x^2} + (\Delta x)^2 + 2x\Delta x - \cancel {x^2}}{\Delta x} \\[10pt]
&= \lim_{\Delta x \rightarrow 0} \frac{\cancel {\Delta x}(\Delta x + 2x)}{\cancel {\Delta x}} \\[10pt]
\text {applying limit: } \\
\therefore \frac{dy}{dx} &= 2x \\[10pt]
\end{aligned}
\]
{{< /alert >}}

{{< alert color="secondary" title="Rules of Differentiation" >}}
We will understand few important rules of differentiation that are most frequently used in Machine Learning. <br>

1. **Sum Rule**: <br>
\[
\frac{d}{dx} (f(x) + g(x)) = \frac{d}{dx} f(x) + \frac{d}{dx} g(x) = f\prime(x) + g\prime(x)
\]

2. **Product Rule**: <br>
\[
\frac{d}{dx} (f(x).g(x)) = \frac{d}{dx} f(x).g(x) + f(x).\frac{d}{dx} g(x) = f\prime(x).g(x) + f(x).g\prime(x)
\]
e.g.: <br>
\( h(x) = x^2 sin(x) \), find the derivative of h(x) w.r.t x. <br>
Let, \(f(x) = x^2 , g(x) = sin(x)\). <br>
\[
h(x) = f(x).g(x) \\[10pt]
=> h\prime(x) = f\prime(x).g(x) + f(x).g\prime(x) \\[10pt]
=> h\prime(x) = 2x.sin(x) + x^2.cos(x) \\[10pt]
\]

3. **Quotient Rule**: <br>
\[
\frac{d}{dx} \frac{f(x)}{g(x)} = \frac{f\prime(x).g(x) - f(x).g\prime(x)}{(g(x))^2}
\]
e.g.: <br>
\( h(x) = sin(x)/x \), find the derivative of h(x) w.r.t x. <br>
Let, \(f(x) = sin(x) , g(x) = x\). <br>
\[
h(x) = \frac{f(x)}{g(x)} \\[10pt]
=> h\prime(x) = \frac{f\prime(x).g(x) - f(x).g\prime(x)}{(g(x))^2} \\[10pt]
=> h\prime(x) = \frac{cos(x).x - sin(x)}{x^2} \\[10pt]
\]

4. **Chain Rule**: <br>
\[
\frac{d}{dx} (f(g(x))) = f\prime(g(x)).g\prime(x)
\]
e.g.: <br>
\( h(x) = log(x^2) \), find the derivative of h(x) w.r.t x. <br>
Let, \( u = x^2 \)
\[
h(x) = log(u) \\[10pt]
=> h\prime(x) = \frac{d h(x)}{du} \cdot \frac{du}{dx} \\[10pt]
=> h\prime(x) = \frac{1}{u} \cdot 2x = \frac{2x}{x^2} \\[10pt]
=> h\prime(x) = \frac{2}{x}
\]
{{< /alert >}}

Now, let's dive deeper and understand the concepts that required for differentiation, such as, **limits**, **continuity**, 
**differentiability**, etc.

{{< alert color="success" title="Limits" >}}
{{< /alert >}}

{{< alert color="success" title="Continuity" >}}

{{< /alert >}}

{{< alert color="success" title="Differentiability" >}}
{{< /alert >}}

{{< alert color="success" title="Maxima & Minima" >}}
{{< /alert >}}

{{< alert color="secondary" title="Saddle Point" >}}
{{< /alert >}}
<br><br>
```End of Section```