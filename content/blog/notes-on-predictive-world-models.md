---
title: Notes on predictive world models
date: "2026-05-18"
category: essay
readTime: 12
subtitle: A short, opinionated tour of what we mean by a world model, why prediction is the wrong thing to maximize, and what I'd want from one.
---

Every few years the phrase *world model* gets dragged out of the closet and given a new coat of paint. In the 90s it was forward models in control theory. In the 2010s it was learned dynamics in model-based reinforcement learning. Today it's whatever the latest video generator can be talked into doing on a slide.

I think this is mostly fine. Concepts get reused because they're useful. But when everyone agrees a phrase is important and nobody agrees on what it means, the disagreement is doing real work, and it's worth pulling on.

## What a world model is, minimally

The thinnest possible definition: a world model is a function that, given a history of observations and an action, predicts the next observation. If you squint, this is just a sequence model with a `step()` method.

```python
# a world model, distilled
class WorldModel:
    def step(self, history, action) -> Observation:
        return self.predict(history, action)
```

Two things are hiding in this signature. First, the type of `Observation` — pixels? latent codes? scene graphs? Second, what `predict` is actually optimizing. The standard answer is next-frame likelihood. I think this is the wrong answer.

## Why prediction-as-objective is leaky

Predicting every pixel of the next frame is wasteful. Most of those pixels are wallpaper. The interesting bits — a cup about to fall, a door beginning to swing — occupy a tiny fraction of the bitrate and a huge fraction of the consequence.

> A model that perfectly predicts pixels of a static scene has learned approximately nothing. A model that wakes up only for the cup is doing the real work, and doing it cheaply.

This is why I keep coming back to the idea that the objective should be *predictive on counterfactual interventions*, not on the marginal distribution of frames. If I imagine an action I haven't taken yet, the model should still know what would have happened.

## Action-conditioned, but cheaply

The right shape for the abstraction, I suspect, is a model that predicts in a coarse latent space by default and only spends compute on prediction in pixel space when the agent needs to *look closely*. Something like a learned attention budget over the imagination horizon.

## What I'd want from a world model, in one paragraph

It should be cheap on the routine, expensive on the surprising, and never confidently wrong about objects it has interacted with. It should answer counterfactuals as readily as it answers continuations. And it should be embarrassed, in a way I can measure, when the world goes a way it didn't expect.

*— These are notes, not a paper. If you think I'm wrong I would genuinely like to hear about it.*
