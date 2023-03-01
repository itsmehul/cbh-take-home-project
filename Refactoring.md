# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

The whole idea behind the function is to determine where a piece of data should be stored in a distributed system. In the previous function a test failed for the input "{}", it returned a hash, I believe it should be treated as null,undefined so it should return "0" the trivial value, and that's what the new iteration does. My function does not nest the if statements and removes unnecessary checks, making it more readable and importantly scalable  as it will discourage future devs from again nesting as conditions are formed. The code also needed some comments to demonstrate some very critical flows making it easier as a new developer to jump into the code and quickly reverse engineer the function. It is also more evident what the objective of the dev was through the comments. The original function uses an arrow syntax, although most experienced devs would be used to function declaration if the codebase has already chosen one approach there was no need to switch this over for the sake of over engineering. I would be add typescript to the project and add return types to the functions to make it easier the reason about the expected input and intended output.