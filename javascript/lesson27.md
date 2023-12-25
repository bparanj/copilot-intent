Function scope in JavaScript refers to the visibility of variables within a function. Variables declared within a function are not accessible from outside the function. Here's a simple example to illustrate this:

```javascript
function foo() {
  var insideVar = "I am inside the function";

  console.log(insideVar); // Works fine, prints: I am inside the function
}

foo();

console.log(insideVar); // This will cause an error: insideVar is not defined
```

In this example:

- `insideVar` is declared inside `foo`.
- When we try to log `insideVar` inside `foo`, it works because `insideVar` is within the function scope.
- However, when we try to log `insideVar` outside of `foo`, it results in an error because `insideVar` is not accessible outside the function where it was declared.

This behavior illustrates the concept of function scope in JavaScript. Variables declared with `var`, `let`, or `const` within a function are scoped to that function and are not accessible outside of it.
