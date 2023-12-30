```javascript
if (true) {
  let blockScope = "block scope";
  console.log(blockScope);
}

console.log(blockScope); // ReferenceError: blockScope is not defined
```
