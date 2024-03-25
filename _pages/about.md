---
permalink: /
title: "About me"
excerpt: "About me"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

My name is Jan Swierczek-Jereczek (insert joke about unpronouciable name). I am a PhD candidate at the Complutense University of Madrid, funded by a Marie Sklodowska-Curie Action. I mostly study past and future abrupt changes of the Antarctic Ice Sheet and therefore focus largely on climate, glaciology and glacial isostatic adjustment (GIA). Furthermore, I am interested in applying concepts of nonlinear dynamics, control theory and machine learning to Earth system modelling and analysis.

I particularly enjoy programming and therefore develop open-source softwares around the aforementioned topics. I put a particular emphasis on making them not only theoretically but also pratcially accessible. By that, I mean that an open-source licence is not enough and that thorough documentation and publication of the code is key for a code base to be useable by other researchers.

## FastIsostasy.jl

The main undertaking of my PhD consists in the development of [FastIsostasy.jl](https://github.com/JanJereczek/FastIsostasy.jl), a regional GIA model that captures the solid-Earth response at extremely low computational cost, even for laterally-variable Earth structures. For instance, simulating the Antarctic GIA response to the last glacial cycle takes less than 10 minutes on a low-end 2022 GPU despite using a relatively high resolution of 20 km. Compared to a computationally much more expensive 3D GIA model, the error in displacement and sea level is of less than 5% on average and 14% at most. With this tool, performing ensemble simulations that sample the uncertainties of the solid-Earth properties becomes easily feasible.

<!-- <video width="320" height="240" controls>
  <source src="videos/transect_shelves_thwaitesamery.mp4" type="video/mp4">
</video> -->

As of today, Julia code cannot be statically compiled to binaries, which can be a great obstacle to coupling it to ice-sheet models. To tackle this, Alex Robinson and I programmed a [Fortran version of the code](https://github.com/palma-ice/isostasy), which also includes simpler regional GIA models.

## TransitionsInTimeseries.jl

In collabroation with George Datseris, I am developping [TransitionsInTimeseries.jl](https://github.com/JuliaDynamics/TransitionsInTimeseries.jl), a Julia package that allows you to easily run a statistical analysis of time series to detect a transition or a loss of resilience of the underlying system.

<!-- 
## Making a positive change in science

Science has historically been the playground of a priviliged demographic, to say the least. This is not only yet another pernicious expression of violence but also a big obstacle to science itself. The lack of diversity has led to truly insane theories, like craniometry. On the other hand, sound theories often served brutal purposes and geoscience was, in the first place, largely motivated by the extractivism of the colonial powers. Academics tend to cherish factual formulations and here goes mine: this is outright shit and needs to be changed. I hope to contribute to an inclusive, kind and therefore strong way of doing science.

## Strengthening the future of public science

Currently, a lot of faith is placed in the hand of private companies as drivers of the scientifical and technical progress. This results, for instance, in tax advantages that are usually motivated by the competition between countries in a global world. In essence, this is public funding given away without setting basic requirements like accountability, accessibility and democratic decision process. Public education and research remains the only way of making science ethical and transparent. As a matter of fact, it funds my daily work, which consist in publishing open-source (geo-)scientific software and open-access articles summarising the results obtained with my collaborators.

## Some examples of my work

### Glacial isostatic adjustment of Antarctica over the last glacial cycle
 -->
