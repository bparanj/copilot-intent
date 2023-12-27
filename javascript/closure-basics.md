## Lexical Scope

Lexical scope in JavaScript refers to the visibility of variables defined in one part of your code to another part. In simple terms, where you define your variables determines where they can be accessed.

Here's the simplest example to illustrate lexical scope:

```javascript
function outerFunction() {
  let outerVariable = "I am outside!";

  function innerFunction() {
    console.log(outerVariable); // Accessible here
  }

  innerFunction();
}

outerFunction(); // Prints: I am outside!
console.log(outerVariable); // Error: outerVariable is not defined
```

In this example:

- `outerVariable` is defined in `outerFunction`.
- `innerFunction`, which is defined inside `outerFunction`, can access `outerVariable` because of lexical scoping. This means `innerFunction` has access to variables defined in its own scope as well as variables defined in its parent function's scope.
- However, outside of `outerFunction`, `outerVariable` is not accessible. Trying to access it results in a `ReferenceError`.

Lexical scope is important in JavaScript because it defines how variable names are resolved in nested functions: inner functions contain the scope of parent functions even if the parent function has returned. This concept is a fundamental part of closures in JavaScript.

## Meaning of Lexical

The term "lexical," in the context of programming and linguistics, refers to the arrangement and interpretation of words in a language. It comes from the word "lexicon," which means the vocabulary of a language or subject. In programming, particularly in reference to "lexical scope" or "lexical environments," it relates to how the text of the source code is structured and how variable names are resolved in nested scopes.

In simple terms:

- **Lexical Scope**: The term "lexical" in "lexical scope" means that the scope of variables (where they can be accessed) is determined by where they are declared in the source code, not by how the program's functions are called. This is why lexical scope is also known as static scope.

- **Lexical Analysis in Compilers**: In compiler design, lexical analysis is the process of converting a sequence of characters into a sequence of tokens. A token is a string with an assigned and thus identified meaning. It involves analyzing the structure of the code as it is written.

In essence, "lexical" is all about the written structure of code or language, not about its runtime or dynamic behavior.

## The Big Deal

Whenever the function keyword is used, it is going to create a scope within that function, so what is the big deal about the inner function being able to access the variable outside of it? Because it is within the outer function, it is natural to expect it to have access to the outer variable.

You're correct in noting that it might seem natural for an inner function to access variables from its enclosing outer function. However, the concept of lexical scoping, especially in JavaScript, is significant for several reasons:

1. **Consistency and Predictability**: Lexical scoping provides a clear and predictable rule for variable accessibility: A function can access variables defined in its own scope and in any of its containing scopes. This predictability is crucial for understanding how variables are resolved, especially in complex programs with many nested scopes.

2. **Closures**: The concept of closures in JavaScript is directly related to lexical scoping. A closure occurs when a function retains access to its lexical scope even after its outer function has returned. This is not a given in all programming languages and is a powerful feature in JavaScript that enables more advanced patterns like data encapsulation, module patterns, and maintaining state in asynchronous programming.

3. **Scope Chain**: Lexical scoping establishes a scope chain, which is the hierarchy of scopes in nested functions. When a variable is referenced, JavaScript looks up the scope chain until it finds the variable or reaches the global scope. Understanding this chain is key to understanding how variables are looked up.

4. **Avoiding Global Variables**: By allowing inner functions to access variables from outer scopes, lexical scoping helps in avoiding the overuse of global variables, which can lead to conflicts and hard-to-track bugs in larger applications.

5. **Design Patterns**: Lexical scoping enables certain design patterns in JavaScript. For example, immediately invoked function expressions (IIFE) use lexical scoping to create private variables and methods, leading to more secure and well-structured code.

In essence, while it may seem straightforward that an inner function can access variables from an outer function, lexical scoping's rules and implications are fundamental to many aspects of JavaScript programming, from basic variable resolution to enabling complex and powerful programming patterns.

I think the confusion in understanding is due to the lack of the right mental model. When you say the function has returned, the function is returned from the stack and all its variable values disappear. There is inner workings behind the scenes that provides the right mental model to understand this concept.

You're absolutely right, and your observation touches on a key aspect of JavaScript's behavior, particularly regarding closures and the lifetime of variables within functions. To understand this, it's crucial to have the right mental model, which involves understanding how JavaScript handles function execution contexts and closures.

1. **Function Execution Context and Stack**:

   - In JavaScript, when a function is called, an execution context is created and pushed onto the call stack. This context includes information about the environment in which the function is executing, including its variables.
   - Once the function completes its execution, its execution context is popped off the stack. Normally, this would mean that all local variables within the function are discarded.

2. **Closures and Persistent Lexical Scoping**:

   - A closure is formed when an inner function is made accessible outside of its containing (outer) function. This can happen, for instance, when the inner function is returned by the outer function or stored in an external variable.
   - What makes closures special is that they retain the scope in which they were created. This means that even after the outer function has returned and its execution context is removed from the stack, the inner function still maintains access to the variables of its outer function.
   - This is possible because JavaScript's engine doesn't clean up the outer function's variable environment if there's a closure referencing it. Instead, this environment is stored in memory, allowing the inner function to access the variables defined in the outer function even after the outer function has executed.

3. **Garbage Collection and Memory Management**:
   - This persistence of the outer function's environment for the closure's sake is managed by JavaScript's garbage collector. As long as there's a closure that references the outer function's environment, that environment (and its variables) is kept in memory.
   - When there are no more references to the closure, or the closure itself is no longer needed, the garbage collector will eventually clean up the memory, releasing the environment of the outer function.

Understanding closures and lexical scoping in this way gives you a more complete mental model of what's happening behind the scenes in JavaScript. It clarifies how inner functions can access the variables of their outer functions even after those outer functions have completed execution. This mechanism is a fundamental part of JavaScript's powerful function and object-oriented capabilities.
