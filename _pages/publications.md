---
layout: page
permalink: /publications/
title: publications
description: Complete and up-to-date list of publications can be accessed via <a href='https://scholar.google.com/citations?user=w_tMryAAAAAJ' target='_blank'><u>Google Scholar</u></a>
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
