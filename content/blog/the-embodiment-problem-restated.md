---
title: The embodiment problem, restated
date: "2026-02-14"
category: notes
readTime: 6
subtitle: A short restatement of what makes embodied intelligence hard, and why the standard objections to disembodied AI miss the point.
---

The embodiment problem gets restated every decade or so. The 1980s version was Dreyfus arguing that intelligence requires a body. The 1990s version was Brooks arguing that the world is its own best model. The 2020s version is a quieter observation: our best language models seem to lack something, and the something they lack might be related to not having a body.

I want to offer a slightly different framing.

## What the body provides

A body provides two things that are hard to get from text. The first is *temporal continuity*: a body persists through time and experiences the consequences of its own actions. The second is *stakes*: things matter to a body in a way that's hard to fake with a loss function.

Neither of these is strictly about having a physical form. A simulated agent in MuJoCo has temporal continuity and faces real consequences within the simulation. Whether it has anything like stakes is a harder question.

## The standard objection misses the point

When critics of embodiment arguments say "but GPT-4 can answer questions about physics," they're pointing at the wrong thing. The claim isn't that disembodied systems can't represent physical facts. The claim is that they can't *learn the right representations* without grounding in action and consequence.

Whether this is true is an empirical question. My intuition is that it's true for some representations and false for others — and that knowing which is which is the actual research problem.

## What I think matters

The interesting question isn't whether embodiment is necessary in principle. It's whether current training regimes, which are mostly disembodied, systematically fail to produce certain kinds of representations. My guess is yes, and that sim-to-real transfer is one of the places where you can see the gap most clearly.
