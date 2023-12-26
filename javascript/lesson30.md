```javascript
class Person {
  constructor(age, title) {
    this.age = age;
    this.title = title;
  }

  print() {
    console.log(this);
  }
}
const person = new Person(25, "Engineer");
person.print();
```

## 'this' in Methods

### Copilot Intents

- Create an object called person with two properties age and title
- Add a print method to the person object that prints the value of this.

```javascript
const person = {
  age: 30,
  title: "Engineer",
  print: function () {
    console.log(this);
  },
};

const topLevelPrint = person.print;
topLevelPrint(); // Window object is the top level object
```

### Copilot Explain

- Who is the owner of this top level print method?

In JavaScript, the owner of a method (the context of `this`) is determined by how the method is called, not where it is defined.

In your code, `topLevelPrint` is a reference to the `print` method from the `person` object. However, when you call `topLevelPrint()`, it's not being called as a method of `person`, but as a standalone function. In this case, `this` defaults to the global object (`Window` in a browser, `global` in Node.js), unless you're in strict mode, in which case `this` would be `undefined`.

So, the owner of the `topLevelPrint` method in this context is the global object.

- Why is it displaying the Window object as the value of this?

In JavaScript, the value of `this` inside a function depends on how the function is called.

In your code, `person.print` is a method on the `person` object. When you call `person.print()`, `this` inside the `print` method refers to the `person` object.

However, when you assign `person.print` to `topLevelPrint` and then call `topLevelPrint()`, you're not calling it as a method on an object. Instead, you're calling it as a standalone function. In this case, `this` defaults to the global object, which is `Window` in a browser environment.

This behavior can be changed by using the `bind`, `call`, or `apply` methods to explicitly set the value of `this`. For example, you could write `const topLevelPrint = person.print.bind(person);` to ensure that `this` inside `topLevelPrint` always refers to the `person` object.

## this in Object

### Copilot Intent

- Create a class called Person with two attributes age and title.

```javascript
class Person {
  constructor(age, title) {
    this.age = age;
    this.title = title;
  }
}
```

- Define a constructor that takes age and title
- Add a print method that prints the value of this

```javascript
class Person {
  constructor(age, title) {
    this.age = age;
    this.title = title;
  }

  print() {
    console.log(this);
  }
}
```

- Instantiate a new person object
- Invoke the print method

```javascript
class Person {
  constructor(age, title) {
    this.age = age;
    this.title = title;
  }

  print() {
    console.log(this);
  }
}
const person = new Person(25, "Engineer");
person.print();
```
