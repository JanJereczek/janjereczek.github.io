---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  You can also find my articles on <u><a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

{% assign preprints = site.publications | where: "status", "preprint" %}
{% assign published = site.publications | where_exp: "item", "item.status != 'preprint'" %}

## Preprints

{% for post in preprints reversed %}
  {% include publication-row.html %}
{% endfor %}

## Published

{% for post in published reversed %}
  {% include publication-row.html %}
{% endfor %}
