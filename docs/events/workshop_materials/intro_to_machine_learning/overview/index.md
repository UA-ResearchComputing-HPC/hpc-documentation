<link rel="stylesheet" href="../../../../assets/stylesheets/buttons.css">
# Intro to Machine Learning on HPC

This workshop introduces some of the basic concepts of machine learning, and shows how you can leverage UArizona HPC systems for machine learning. We recommend that you try the hands-on examples.

## What is machine learning?
> "The training of programs developed by allowing a computer to learn from its experience, rather than through manually coding the individual steps."
>
> <cite>fast.ai book</cite>

In a sense machine learning is very similar to doing science.
``` mermaid
flowchart TD
    subgraph Science
    A[Create a model to explain some observations] --> B[Use the model to predict new observations]
    end
    subgraph Machine Learning
    C[Train a program with data] --> D[Use program to predict]
    end
```
In machine learning jargon, it is more common to use "model" or "architecture" in place of "program". Some practitioners differentiate between "model" and "architecture", depending on whether the program has been trained or not. For the purposes of this workshop, we will use "model".

## Machine learning workflow
### Training
``` mermaid
flowchart LR
    A[Model
    with random parameters] --> B{Training}
    C[Data] --> B
    B --> D[Model
    with trained parameters]
```

### Inference
``` mermaid
flowchart LR
    E[Inputs] --> F[Model
    with trained parameters] --> G[Predictions]
```

## What can we do with machine learning?

- Play chess, go, ..
- Classify data: 🐶 vs. 🐱, galaxies, 🐦 species from their calls, ...
- Recommender systems: 🎥 / 📚 / 📜 suggestions, ...
- Solve \(\frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x} = \nu\frac{\partial^2 u}{\partial x^2}\)
- Cluster data into different groups
- Write poetry, create art

## Things to keep in mind

- Computers aren't smart, but can be (over)confident
- While we do not manually code the individual steps in the program, we still do a lot
    - We decide which model, data, training hyperparameters, ...
- {==Data is central to machine learning==}
    - Untrained models are generally no better than random chance
    - Trained models often learn biases in data
- Lot of machine learning has traditionally been known as Statistics

## Why use (UArizona) HPC for machine learning?

- Datasets are becoming larger and more varied
- Models are becoming larger
- You don't have to worry about setting up and maintaining hardware

## Resources for learning machine learning

- [Practical Deep Learning](https://course.fast.ai/) by fast.ai (Python)
- [A Code-First Introduction to Natural Language Processing](https://www.fast.ai/posts/2019-07-08-fastai-nlp.html) by fast.ai (Python)
- [An Introduction to Statistical Learning ](https://www.statlearning.com) by James, Witten, Hastie, Tibishirani (Python and R)
- [Tidy Modeling With R](https://www.tmwr.org/) by Kuhn, Silge
- [Deep Learning and Scientific Computing with R torch](https://skeydan.github.io/Deep-Learning-and-Scientific-Computing-with-R-torch/) by Keydana
- The Elements of Statistical Learning by Hastie, Tibishirani, Friedman (language agnostic)
- Pattern Recognition and Machine Learning by Bishop (language agnostic)

## Examples
- [Go to Python version](../python/)
- [Go to R version](../R/)
