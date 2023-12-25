```javascript
// Create a function that prints the current date and time to the console only once.
// print the date in human readable format (example: 2020-01-01 10:30:15)
// Change the following function to immediately invoke the function using an IIFE.
(function printDate() {
  console.log(new Date().toLocaleString());
})();
```

Since this function executes without calling it explicity, we can remove the name of the function and it will be executed:

```javascript
(function () {
  console.log(new Date().toLocaleString());
})();
```
