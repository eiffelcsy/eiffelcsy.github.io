---
title: What does it mean for an agent to imagine?
date: "2026-04-02"
category: essay
readTime: 8
subtitle: Imagination in cognitive science versus imagination in reinforcement learning — and why the gap between them matters.
---

The word *imagine* is doing a lot of work in modern AI discourse. It appears in model names, benchmark descriptions, grant proposals. Most of the time it means something fairly specific: a neural network has been trained to produce plausible continuations of a sequence, and we call those continuations "imagined" futures.

I want to ask whether this is imagination in any interesting sense, and if not, what would be.

## The cognitive science baseline

In cognitive science, imagination has at least two components that tend to come apart. The first is *mental simulation* — constructing an internal representation of a counterfactual state of affairs. The second is *voluntary control* — being able to query that simulation with specific hypotheticals rather than just sampling from it.

A language model can do something like the first. It can produce a plausible description of what a room looks like after you've rearranged the furniture. Whether it can do the second — whether it can reliably answer *specific* counterfactual queries about the room without hallucinating — is much less clear.

## Why the gap matters

The distinction matters because the useful thing about imagination in planning is not the ability to dream; it's the ability to ask *what if* and get a trustworthy answer.

> If I imagine picking up a glass, I want to know whether it's full or empty. A model that generates a coherent scene but can't answer that query reliably is decorative, not useful.

An agent with genuine imagination in this sense could use it to plan — to evaluate actions before taking them, to reason about consequences, to avoid catastrophic mistakes. An agent that can only dream cannot do this safely.

## What would help

I think the path forward involves two things: grounding the internal simulation in causal structure (not just statistical cooccurrence), and building explicit query interfaces that let the planner ask pointed questions of the world model rather than sampling from it.

Neither is solved. Both seem important.
