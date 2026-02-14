---
title: Deployment Patterns
description: Deployment Patterns
date: 2026-02-14
weight: 503
math: true
---

{{< playlist " https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfu7gGVAzvIvolLZeH8Ddb1" 
"Machine Learning System | All Videos" >}}

<br>

{{< panel color="blue" title="Deploy 🖥️" >}}
⭐️In a production ML environment, retraining is only half the battle, we must also safely deploy the new version.

Types of deployment (most common):
- Shadow ❏ Deployment
- A/B Testing 🧪
- Canary 🦜 Deployment
{{< /panel >}}

{{< panel color="charcoal" title="Shadow ❏ Deployment" >}}
👉 **Safest** way to deploy our model or any software update.
- Deploy the candidate model in parallel with the existing model.
- For each incoming request, route it to both models to make predictions, but only serve the existing model's prediction to the user.
- **Log** the predictions from the new model for analysis purposes.

**Note**: When the new model's predictions are **satisfactory**, we replace the existing model with the new model.
{{< imgproc "images/machine_learning/ml_system/deployment_patterns/slide_03_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="orange" title="A/B Testing 🧪" >}}
👉A/B testing is a way to compare two variants of a model.
- Deploy the candidate model in parallel with the existing model.
- A percentage of traffic🚦is routed to the candidate for predictions; the rest is routed to the existing model for predictions.
- Monitor 📺 and analyze the predictions, from **both** models to determine whether the difference in the two models' performance is statistically significant.

**Note**: Say we run a two-sample test and get the result that model A is better than model B with the p-value of p = 0.05 or 5%.

{{< imgproc "images/machine_learning/ml_system/deployment_patterns/slide_05_01.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< panel color="blue" title="Canary 🦜 Deployment" >}}
👉 Mitigates deployment risk by incrementally shifting traffic 🚦from a model version to a new version, allowing for real-world validation on a subset of users before a full-scale rollout.
- Deploy the candidate model in parallel with the existing model.
- A percentage of traffic🚦is routed to the candidate for predictions.
- If its performance is satisfactory, increase the traffic to the candidate model.If not, abort the canary and route all the traffic🚦 back to the existing model.
- Stop when either the canary serves all the traffic🚦 (the candidate model has replaced the existing model) or when the canary is aborted.

**Note**: Canary releases can be used to implement A/B testing due to the similarities in their setups. However, we can do canary analysis without A/B testing.
{{< imgproc "images/machine_learning/ml_system/deployment_patterns/canary_deployment.png" Resize "1400x" >}}{{< /imgproc >}}
{{< /panel >}}

{{< video "https://youtu.be/3b-WkL1Zn5s" >}}
<br><br>

<!-- nav-panel:start -->
<div style="display:flex;justify-content:space-between;align-items:center;width:100%;gap:16px;">
<span><a href="{{< ref "/docs/machine_learning/ml_system/retraining_strategies" >}}">Previous: Retraining Strategies</a></span>
<span style="margin-left:auto;"></span>
</div>
<!-- nav-panel:end -->

```End of Section```