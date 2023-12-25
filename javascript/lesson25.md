Passing different number of arguments to a function with rest parameters.

```javascript
function display(...numbers) {
  console.log(typeof numbers);
  console.log(numbers);
}
display(1, 2, 3);
display(1, 2, 3, 4, 5, 6);
display(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
```

The rest parameters are available as an array inside the function.

```javascript
function display(...numbers) {
  console.log(Array.isArray(numbers));
  console.log(numbers);
}
display(1, 2, 3);
```
