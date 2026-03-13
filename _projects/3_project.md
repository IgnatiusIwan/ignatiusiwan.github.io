---
layout: page
title: Autoencoder Anomaly Detection
description: Utilization of autoencoder reconstruction error to detect anomalies and simulation of training in federated learning environment
img: https://github.com/IgnatiusIwan/practice_material_autoencoder_fl/blob/main/pict/pict_2.jpg?raw=true
importance: 3
category: work
related_publications: false
---

This is a demonstration code for implementing an autoencoder for anomaly detection. It also provides the partitioned dataset for simulating the Federated Learning (FL) training. I used it as teaching material during one of Professor's Seok-Lyong Lee (IME HUFS) special course.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="https://github.com/IgnatiusIwan/practice_material_autoencoder_fl/blob/main/pict/pict_1.jpg?raw=true" title="Outlook of anomalies" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example of anomaly in a synthetic signal.
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="https://github.com/IgnatiusIwan/practice_material_autoencoder_fl/blob/main/pict/pict_2.jpg?raw=true" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/autoencoder_error_reconstruct.jpg" title="example of prediction" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Method to utilize reconstructed error as anomaly detection and preview of the result
</div>


<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
    <div class="repo p-2 text-center">
        <a href="https://github.com/IgnatiusIwan/practice_material_autoencoder_fl">
            <img
            class="only-light w-100"
            alt="https://github.com/IgnatiusIwan/practice_material_autoencoder_fl"
            src="https://github-readme-stats.vercel.app/api/pin/?username=IgnatiusIwan&repo=practice_material_autoencoder_fl&theme=default&locale=en&show_owner=false&description_lines_count=2"
            >
            <img
            class="only-dark w-100"
            alt="https://github.com/IgnatiusIwan/practice_material_autoencoder_fl"
            src="https://github-readme-stats.vercel.app/api/pin/?username=IgnatiusIwan&repo=practice_material_autoencoder_fl&theme=dark&locale=en&show_owner=false&description_lines_count=2"
            >
        </a>
    </div>
</div>
