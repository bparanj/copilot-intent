A closure in JavaScript is a powerful feature where a function remembers and continues to access variables from its parent function scope, even after the parent function has finished executing. Here's a simple example to demonstrate a closure:

```javascript
function createGreeting(greeting) {
  return function (name) {
    console.log(greeting + ", " + name + "!");
  };
}

// Create a greeting function
let greetHello = createGreeting("Hello");

// Use the greeting function
greetHello("Alice"); // Outputs: Hello, Alice!

let greetHi = createGreeting("Hi");
greetHi("Bob"); // Outputs: Hi, Bob!
```

In this example:

- The `createGreeting` function takes a `greeting` string and returns a new function.
- This new function takes a `name` string and logs a message using both `greeting` and `name`.
- When we call `createGreeting("Hello")`, it returns a function that has "Hello" as its greeting. This function is stored in `greetHello`.
- When we call `greetHello("Alice")`, it logs "Hello, Alice!". The `greetHello` function remembers the `greeting` ("Hello") from its parent function's scope.
- Similarly, `greetHi` is another closure created with a different greeting.

This is a classic example of a closure, where the inner function retains access to the `greeting` variable from the outer `createGreeting` function, even after `createGreeting` has finished executing.

```javascript
function createGreeting(greet) {
  let day = "morning";

  return function (name) {
    console.log(greet + " " + name + " Good " + day);
  };
}

let hello = createGreeting("Hello");
hello("John");
```

The innner function also has access to the variables defined within the outer function.
