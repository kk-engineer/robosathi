---
title: Feature Engineering
description: Feature Engineering
date: 2026-02-14
weight: 403
math: true
---

{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxcg0tJ0CAqPKjDk6Ry_atqu" 
"Feature Engineering | All Videos" >}}

<br>

{{< panel color="orange" title="Feature Engineering" >}}
Use domain knowledge 📕 to create new or transform existing features to improve model performance 🏋️‍♀️.
{{< /panel >}}

{{< panel color="green" title="Polynomial 🐙 Features" >}}
Create polynomial features, such as, x^2, x^3, etc., to learn non-linear relationship.
{{< imgproc "images/machine_learning/feature_engineering/feature_engineering/slide_04_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Visual" >}}
{{< /panel >}}

{{< panel color="navy" title="Feature Crossing 🦓" >}}
- Combine 2 or more features to capture non-linear relationship.
- e.g. combine latitude and longitude into one location feature ‘lat-long'.
{{< /panel >}}

{{< panel color="blue" title="Visual" >}}
{{< imgproc "images/machine_learning/feature_engineering/feature_engineering/slide_06_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="Hash 🌿 Encoding" >}}
- Memory-efficient 🧠 technique to convert categorical (string) data into a fixed-size numerical feature vector.
- Pros:
- Useful for high-cardinality features where we want to limit the dimensionality.
- Cons:
- Hash collisions.
- Reduced interpretability.
{{< /panel >}}

{{< panel color="green" title="Hash Encoding (Example)" >}}
- Hash Encoding (Example)
{{< imgproc "images/machine_learning/feature_engineering/feature_engineering/slide_08_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="red" title="Binning (Discretization)Group continuous numerical values into discrete categories or ‘bin" >}}
- e.g. divide age into groups 18-24, 25-35, 35-45, 45-55, >55 years etc.
{{< /panel >}}

{{< video "https://youtu.be/YFbBCnFG2o0" >}}
<br><br>
```End of Section```