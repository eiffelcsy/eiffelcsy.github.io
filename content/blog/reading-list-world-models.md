---
title: "Reading list: world models, 2018–2025"
date: "2025-12-01"
category: list
readTime: 4
subtitle: A curated list of papers I keep returning to when thinking about world models. Not comprehensive — just the ones that shaped how I think.
---

This is a living list, updated roughly annually. I've annotated each entry with what I think it gets right and what question it leaves open.

## Foundations

**Ha & Schmidhuber, "World Models" (2018)** — The paper that crystallized the modern framing. The MDN-RNN world model trained in dream environments is still underappreciated. What it leaves open: how to scale the latent space.

**Hafner et al., "Dream to Control" / Dreamer (2019–2023)** — The cleanest implementation of the world-model-for-planning idea. The v3 paper in particular is required reading. What it leaves open: sample efficiency in sparse-reward settings.

**LeCun, "A Path Towards Autonomous Machine Intelligence" (2022)** — Controversial but worth engaging with seriously. The JEPA framing is interesting regardless of whether you buy the full program.

## On representations

**Locatello et al., "Challenging Common Assumptions in the Unsupervised Learning of Disentangled Representations" (2019)** — A useful corrective. Disentanglement without inductive biases is underdetermined. Most world model papers ignore this.

**Kipf et al., "Contrastive Learning of Structured World Models" (2020)** — Object-centric representations + contrastive learning. Still one of the cleaner approaches to structured world models.

## Recent work I'm watching

**GAIA-1 (Wayve, 2023)** — World model for autonomous driving at scale. The generalization experiments are striking.

**IRASim (2024)** — Action-conditioned video generation for robot manipulation. The gap between impressive video and actual control is still large.

**Genesis (2024)** — Physics simulation as a world model. Interesting inversion of the usual direction.
