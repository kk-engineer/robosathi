---
title: Data Distribution
description: Understanding Data Distribution
date: 2025-10-20
weight: 2
math: true
---


{{< playlist "https://www.youtube.com/playlist?list=PLnpa6KP2ZQxfGbwZaKtx_nIi_DNWMK8mX" 
        "Statistics for AI & ML | Full Course Videos">}}
<br>

{{< definition >}}
**Measures of Central Tendency:** <br>
A single number that describes the central, typical, or representative value of a dataset, e.g, mean, median, and mode. <br>
The mean is the average, the median is the middle value in a sorted list, and the mode is the most frequently occurring value. <br>

- A single representative value can be used to compare different groups or distributions.
{{< /definition >}}
<br>

{{< definition >}}
**Mean:** <br>
The artihmetic average of a set of numbers i.e sum all values and divide by the number of values. <br>
\(mean = \frac{1}{n}\sum_{i=1}^{n}x_i\) <br>

- Most common measure of central tendency.
- Represents the '_balancing point_' of data.
- Sample mean is denoted by \(\bar{x}\), and population mean by \(\mu\).

**Pros:** <br>
- Uses all datapoints in its calculation, providing a comprehensive measure.

**Cons:** <br>
- Highly sensitive to outliers i.e exteme values.

{{</ definition >}}

For example: <br>
1. mean\((1,2,3,4,5) = \frac{1+2+3+4+5}{5} = 3 \) <br>
2. With outlier: mean\((1,2,3,4,100) = \frac{1+2+3+4+100}{5} = \frac{110}{5} = 22\) <br>
_Note: Just a single extreme value of 100 has pushed the mean from 3 to 22._ 
<br><br>

{{< definition >}}
**Median:** <br>
The middle value of a sorted list of numbers. It divides the dataset into 2 equal halves.<br>
_Calculation:_ <br>
- Arrange the data points in ascending order.
- If the number of data points is even, the median is the average of the two middle values.
- If the number of data points is odd, the median is the middle value i.e \((\frac{n+1}{2})^{th}\) element.

**Pros:** <br>
- Not impacted by outliers, making it a more robust/reliable measure, especially for skewed distributions.

**Cons:** <br>
- Does NOT use all the datapoints in its calculation.

{{</ definition >}}

For example: <br>
1. median\((1,2,3,4,5) = 3\) <br>
2. median\((1,2,3,4,5,6) = \frac{3+4}{2} = 3.5\) <br>
3. With outlier: median\((1,2,3,4,100) = 3\) <br>
_Note: No impact of outlier._
<br><br>

{{< definition >}}
**Mode:** <br>
The most frequently occurring value in a dataset. <br>
- Dataset can have 1 mode i.e unimodal, 2 modes i.e bimodal, and more than 2 modes i.e multimodal.
  - If NO value repeats, then NO mode.

**Pros:** <br>
- Only measure of central tendency that can be used for categorical/nominal data, such as, gender, blood group, level of education, etc.
- It can reveal important peaks in data distribution.

**Cons:** <br>
- A dataset can have multiple modes, or no mode at all, which can make mode less informative.

{{</ definition >}}
<br>
{{< video "https://youtu.be/tRqgJS1nR4o?si=P3vdco_f4DkMtWpS" >}}
<br>

{{< definition >}}
**Measures of Dispersion(Spread):** <br>
It measures the spread or variability of a dataset. <br>
Quantifies how spread out or scattered the data points are. <br>
E.g: Range, Variance, Standard Deviation, Median Absoulute Deviation(MAD), Skewness, Kurtosis, etc.

{{</ definition >}}
<br>

{{< definition >}}
**Range:** <br>
The difference between the largest and smallest values in a dataset. Simplest measure of dispersion <br>
\(range = max - min\)

**Pros:** <br>
- Easy to calculate and understand.

**Cons:** <br>
- Only considers the the 2 extreme values of dataset and ignores the distribution of data in between.
- Highly sensitive to outliers.
{{</ definition >}}
For example: <br>
1. range\((1,2,3,4,5) = 5 - 1 = 4\) <br>
<br>

{{< definition >}}
**Variance:** <br>
The average of the squared distance of each value from the mean. <br>
Measures the spread of data points. <br>

\(sample ~ variance = s^2 =  \frac{1}{n}\sum_{i=1}^{n}(x_i - \bar{x})^2\) <br><br>
\(population ~ variance = \sigma^2 =  \frac{1}{n}\sum_{i=1}^{n}(x_i - \mu)^2\) <br>

**Cons:** <br>
- Highly sensitive to outliers, as squaring amplifies the weight of extreme data points.
- Less intuitive to understand, as the units are square of original units.
{{</ definition >}}
<br>

{{< definition >}}
**Standard Deviation:** <br>
The square root of the variance, measures average distance of data points from the mean. <br> 
- Low standard deviation indicates that the data points are clustered around the mean, whereas <br> 
high standard deviation means that the data points are spread out over a wide range.

\(s = sample ~ standard ~ deviation \)<br>
\(\sigma = population ~ standard ~ deviation \) <br> 
{{</ definition >}}

For example: <br>
1. Standard Deviation\((1,2,3,4,5) = \sqrt{\frac{1}{n}\sum_{i=1}^{n}(x_i - \bar{x})^2} \)
\[ 
 = \sqrt{\frac{1}{5}((1-3)^2 + (2-3)^2 + (3-3)^2 + (4-3)^2 + (5-3)^2)} \\
 =  \sqrt{\frac{1}{5}(4+1+0+1+4)} \\
 = \sqrt{\frac{10}{5}} = \sqrt{2} = 1.414
\]
<br>

{{< definition >}}
**Mean Absolute Deviation:** <br>
It is the average of absolute deviation or distance of all data points from mean.

\( mad = \frac{1}{n}\sum_{i=1}^{n}|x_i - \bar{x}| \) <br>

**Pros:** <br>
- Less sensitive to outliers as compared to standard deviation..
- More intuitive and simpler to understand.
{{</ definition >}}

For example: <br>
1. Mean Absolute Deviation\((1,2,3,4,5) = \\ \frac{1}{5}\left(\left|1-3\right| + \left|2-3\right| + \left|3-3\right| + \left|4-3\right| + \left|5-3\right|\right) = 
\frac{1}{5}\left(2+1+0+1+2\right) = \frac{6}{5} = 1.2\)
<br><br>

{{< definition >}}
**Skewness:** <br>
It measures the asymmetry of a data distribution. <br>
Tells us whether the data is concentrated on one side of mean and is there a long tail stretching on the other side. <br>

**Positive Skew:** 
- Tail is longer on the right side of the mean.
- Bulk of data is on the left side of the mean, but there are a few very high values pulling the mean towards the right.
- Mean > Median > Mode.

**Negative Skew:**
- Tail is longer on the left side of the mean.
- Bulk of data is on the right side of the mean, but there are a few very high values pulling the mean towards the left.
- Mean < Median < Mode.

**Zero Skew:** 
- Perfectly symmetrical like a normal distribution.
- Mean = Median = Mode.

{{</ definition >}}
![](https://robosathi.com/images/skewness.png)

For example: <br>
1. Consider the salary of employees in a company. Most employees earn a very modest salary, but a few executives earn 
extremely high salaries. This dataset will be positively skewed with the mean salary > median salary. <br>
Median salary would be a better representation of the typical salary of employees.
<br><br>

{{< definition >}}
**Kurtosis:** <br>
It measures the "tailedness" of a data distribution. <br>
It describes how much the data is concentrated in tails (fat or thin) versus the center. <br>

- It can tell us about the frequency of outliers in the data.
  - Thick tails => More outliers.

**Excess Kurtosis:** <br>
Excess kurtosis is calculated by subtracting 3 from standard kurtosis in order to compare with normal distribution. <br>
Normal distribution has kurtosis = 3. <br>

**Mesokurtic:**  
- Excess kurtosis = 0 i.e normal kurtosis.
- Tails are neither too thick nor too thin.

**Leptokurtic:**
- High kurtosis, i.e, excess kurtosis > 0 (+ve).
- Heavy or thick tails => High probability of outliers.
- Sharp peak => High concentration of data around mean.
- E.g: Student's t-distribution, Laplace distribution, etc.
- High risk stock portfolios.

**Platykurtic:**
- Low kurtosis, i.e, excess kurtosis < 0 (-ve).
- Thin tails => Low probability of outliers.
- Low peak => more uniform distribution of values.
- E.g: Uniform distribution, Bernoulli(P=0.5) distribution, etc.
- Investment in fixed deposits.

{{</ definition >}}

![](https://robosathi.com/images/kurtosis.png)
<br>
![](https://robosathi.com/images/excess_kurtosis.png)

<br>
{{< video "https://youtu.be/ljxOw47oUrU?si=LqttW0ZyGCImT1Wm" >}}
<br> 

{{< definition >}}
**Measures of Position:** <br>
It helps us understand the relative position of a data point i.e where a specific value lies within a dataset. <br>
E.g: Percentile, Quartile, Inter Quartile Range(IQR), etc.<br>
{{</ definition >}}
<br>

{{< definition >}}
**Percentile:** <br>
It indicates the percentage of scores in a dataset that are equal to or below a specific value. <br>
Here, the complete dataset is divided into 100 equal parts. <br>
- \(k^{th}\) percentile => at least \(k\) percent of the data points are equal to or below the value.
- It is a relative comparison, i.e, compares a score with the entire group's performance. 
- Quartiles are basis for box plots.
{{</ definition >}}
For example: <br>
1. 90th percentile => score is higher than 90% of of all other test takers.
<br><br>

{{< definition >}}
**Quartile:** <br>
They are special percentiles that divide the complete dataset into 4 equal parts. <br>

**Q1** => **25th percentile**, value below which 25% of the data falls. <br>
**Q2** => **50th percentile**, value below which 50% of the data falls; median.<br>
**Q3** => **75th percentile**, value below which 75% of the data falls. <br>

\[
Q1 = (n+1) * 1/4 \\
Q2 = (n+1) * 1/2 \\
Q3 = (n+1) * 3/4
\]

{{</ definition >}}

For example: <br>
1. Data = \(\{1,2,3,4,5,6,7,8,9,10,100\}\)
\[
Q1 = (11+1) * 1/4 = 12*1/4 = 3 \\
Q2 = (11+1) * 1/2 = 12*1/2 = 6 \\
Q3 = (11+1) * 3/4 = 12*3/4 = 9
\]
<br>
![](https://robosathi.com/images/quartiles.png)
<br><br>

{{< definition >}}
**Inter Quartile Range(IQR):** <br>
It is the single number that measures the spread of middle 50% of the data, i.e Q1-Q3.<br>
- More robust measure of spread than range as is NOT impacted by outliers.

**IQR = Q3 - Q1** <br>

{{</ definition >}}

For example: <br>
1. Data = \(\{1,2,3,4,5,6,7,8,9,10,100\}\)
\[
Q1 = (11+1) * 1/4 = 12*1/4 = 3 \\
Q2 = (11+1) * 1/2 = 12*1/2 = 6 \\
Q3 = (11+1) * 3/4 = 12*3/4 = 9
\]

Therefore, IQR = Q3-Q1 = 9-3 = 6 <br>
<br>

{{< alert color="success" title="Outlier Detection" >}}
IQR is a standard tool for detecting outliers. <br>
Values that fall outside the '_fences_' can be considered as potential outliers.

**Lower fence = Q1 - 1.5 * IQR <br>
Upper fence = Q3 + 1.5 * IQR <br>**
{{< /alert >}}
For example: <br>
1. Data = \(\{1,2,3,4,5,6,7,8,9,10,100\}\)
\[
Q1 = (11+1) * 1/4 = 12*1/4 = 3 \\
Q2 = (11+1) * 1/2 = 12*1/2 = 6 \\
Q3 = (11+1) * 3/4 = 12*3/4 = 9
\]

IQR = Q3-Q1 = 9-3 = 6 <br>
Lower fence = Q1 - 1.5 * IQR  = 3 - 9 = -6<br>
Upper fence = Q3 + 1.5 * IQR = 9 + 9 = 18 <br>
So, any data point that is less than  -6 or greater than 18 is considered as a potential  outlier. <br>
As in this example, 100 can be considered as an outlier.
<br><br>
{{< video "https://youtu.be/3-qQu9jNMPk?si=mxnrRIC8lrqtC2Oa" >}}

{{< alert color="secondary" title="Anscombe's Quartet">}}
Even though the above metrics give us a good idea of the data distribution,
but still we should **always** plot the data and **visually inspect** the data distribution. <br>
As these metrics may not provide the complete picture. <br>

A mathematician called _Francis John Anscombe_ has illustrated this point beautifully in his _Anscombe's Quartet_. <br><br>
**Anscombe's quartet:** <br>
It comprises four datasets that have nearly identical simple descriptive statistics, <br> 
yet have very different distributions and appear very different when plotted.
{{< /alert >}}

![](https://robosathi.com/images/anscombe_quartet_data.png)
<br>
![](https://robosathi.com/images/anscombe_quartet.png)

{{< alert color="warning" >}}Figure: Anscombe's Quartet {{< /alert >}}

<br><br>
```End of Section```

